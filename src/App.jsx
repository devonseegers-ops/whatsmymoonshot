import { useState, useEffect, useRef, useCallback } from "react";

// ─────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────
const SDG_OPTIONS = {
  iLove: ["Quality Education","Good Health & Wellbeing","Clean Water","Affordable Energy","Sustainable Cities","Climate Action","Life on Land","Life Below Water","Zero Hunger","No Poverty","Gender Equality","Peace & Justice","Mental Health","Arts & Culture","Technology for Good","Youth Empowerment","Community Building","Racial Justice","Environmental Stewardship","Economic Equity"],
  iAmGreatAt: ["Teaching & Mentoring","Healthcare & Wellness","Technology & Innovation","Design & Creativity","Leadership & Strategy","Communication","Research & Analysis","Coaching & Facilitation","Writing & Storytelling","Problem Solving","Systems Thinking","Community Organizing","Financial Literacy","Environmental Science","Social Entrepreneurship","Policy & Advocacy","Visual Arts","Music & Performance","Healing Arts","Data Analysis"],
  worldNeeds: ["No Poverty","Zero Hunger","Good Health","Quality Education","Gender Equality","Clean Water","Affordable Energy","Decent Work","Innovation","Reduced Inequalities","Sustainable Cities","Responsible Consumption","Climate Action","Ocean Health","Ecosystem Protection","Peace & Justice","Mental Health Support","Youth Leadership","Racial Justice","Accessible Technology"],
  canBePaidFor: ["Consulting","Design Services","Technology Development","Education & Training","Healthcare Services","Content Creation","Project Management","Research & Writing","Coaching & Therapy","Legal & Policy","Financial Services","Marketing & Branding","Event Production","Media & Journalism","Social Impact Strategy","Environmental Consulting","Non-profit Management","Public Speaking","Product Development","Community Programs"]
};

const PROMPTS = [
  {
    id:"unsaid",
    q:"What's the dream you don't say out loud?",
    hint:"The vision you keep circling. The one that feels too big, too vulnerable, or too real to admit.",
    phase:"Externalize",
  },
  {
    id:"avoiding",
    q:"What decision are you avoiding — and what would you do if you finally made it?",
    hint:"The thing that keeps showing up. The tension you can't resolve. Name it here.",
    phase:"Externalize",
  },
  {
    id:"alive",
    q:"Who are you when you're doing your most alive work?",
    hint:"Not your role or title. What does your energy feel like? What's happening around you?",
    phase:"Visualize",
  },
  {
    id:"pain",
    q:"What problem in the world breaks your heart — and why does it break yours specifically?",
    hint:"Your wound is often your calling. The injustice you feel personally is where your power lives.",
    phase:"Visualize",
  },
  {
    id:"synthesis",
    q:"The thing I would regret not building — in 12 to 36 months — is...",
    hint:"Not a goal. Not a plan. The thing your future self is counting on present-you to begin.",
    phase:"Synthesize",
  },
];

const NEXT_STEPS = [
  { id:"research",   emoji:"📚", title:"Deep Research",       desc:"7 days immersed in books, podcasts, and the minds ahead of you." },
  { id:"prototype",  emoji:"🔨", title:"Build a Prototype",    desc:"Create the simplest possible version of your idea. Ship it." },
  { id:"network",    emoji:"🤝", title:"Connect with Mentors", desc:"Reach out to 5 people who've walked a similar path." },
  { id:"content",    emoji:"✍️", title:"Share Your Vision",    desc:"Write, record, or post about your moonshot to attract your tribe." },
  { id:"experiment", emoji:"🧪", title:"Run an Experiment",    desc:"Test one dimension of your moonshot with zero risk." },
];

const QUAD_META = [
  {key:"iLove",        title:"I Love",            desc:"What lights you up?",       glow:"rgba(0,217,255,.07)"},
  {key:"iAmGreatAt",   title:"I Am Great At",     desc:"Your natural talents",      glow:"rgba(157,78,221,.07)"},
  {key:"worldNeeds",   title:"The World Needs",   desc:"What problems matter?",     glow:"rgba(255,0,110,.07)"},
  {key:"canBePaidFor", title:"I Can Be Paid For", desc:"Valuable skills & service", glow:"rgba(255,214,10,.06)"},
];

const ZONE_ICONS = {star:"⭐",zap:"⚡",target:"🎯",lightbulb:"💡",heart:"💙",rocket:"🚀",compass:"🧭",flame:"🔥"};

// ─────────────────────────────────────────────────────────────────
// AI HELPER
// ─────────────────────────────────────────────────────────────────
// ── AI CONFIG ──
// Set PROXY_URL to your Cloudflare Worker URL (see proxy-worker.js for deploy steps)
// Leave empty to use direct API with session key
const PROXY_URL = import.meta.env.VITE_PROXY_URL || "";

function getApiKey() {
  return import.meta.env.VITE_ANTHROPIC_API_KEY || sessionStorage.getItem("mmk") || null;
}

function hasAI() {
  return !!(PROXY_URL || getApiKey());
}

async function callAI(prompt, system) {
  const body = {
    model: "claude-sonnet-4-20250514",
    max_tokens: 1000,
    system: system || "You are a trauma-informed life coach helping people discover their moonshot vision. Be poetic, warm, and visionary.",
    messages: [{ role: "user", content: prompt }],
  };

  let url, headers;
  if (PROXY_URL) {
    // Proxy — no key needed client-side
    url = PROXY_URL;
    headers = { "Content-Type": "application/json" };
  } else {
    const key = getApiKey();
    if (!key) throw new Error("NO_KEY");
    url = "https://api.anthropic.com/v1/messages";
    headers = {
      "Content-Type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    };
  }

  const res = await fetch(url, { method: "POST", headers, body: JSON.stringify(body) });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.content?.[0]?.text || "";
}

// ─────────────────────────────────────────────────────────────────
// SOCIAL CARD
// ─────────────────────────────────────────────────────────────────
function renderCard(statement, name, platform) {
  const dims = { instagram: [1080, 1080], linkedin: [1200, 627], twitter: [1200, 675] };
  const [W, H] = dims[platform] || [1080, 1080];
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");

  // BG
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#040C1A"); bg.addColorStop(.5, "#0A1830"); bg.addColorStop(1, "#0D0A2A");
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

  // Aurora blobs
  [[W * .15, H * .3, W * .5, "rgba(0,217,255,.17)"], [W * .85, H * .6, W * .55, "rgba(157,78,221,.2)"], [W * .5, H * .85, W * .4, "rgba(255,0,110,.12)"]].forEach(([x, y, r, c]) => {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, c); g.addColorStop(1, "transparent");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  });

  // Stars
  for (let i = 0; i < 130; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * .5 + .1})`;
    ctx.beginPath(); ctx.arc(Math.random() * W, Math.random() * H, Math.random() * 1.8 + .2, 0, Math.PI * 2); ctx.fill();
  }

  // Moon
  const mx = W / 2, my = H * .12, mr = H * .06;
  const mg = ctx.createRadialGradient(mx, my, 0, mx, my, mr * 3);
  mg.addColorStop(0, "rgba(0,217,255,.2)"); mg.addColorStop(1, "transparent");
  ctx.fillStyle = mg; ctx.fillRect(0, 0, W, H);
  ctx.beginPath(); ctx.arc(mx, my, mr, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(190,235,255,.9)"; ctx.fill();
  ctx.strokeStyle = "rgba(0,217,255,.8)"; ctx.lineWidth = H * .003; ctx.stroke();

  // Divider
  ctx.strokeStyle = "rgba(0,217,255,.18)"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(W * .1, H * .23); ctx.lineTo(W * .9, H * .23); ctx.stroke();

  // Statement text
  const fs = Math.min(H * .054, W * .04, 54);
  ctx.font = `italic bold ${fs}px Georgia, 'Times New Roman', serif`;
  ctx.fillStyle = "#fff"; ctx.textAlign = "center";
  ctx.shadowColor = "rgba(0,217,255,.45)"; ctx.shadowBlur = 28;

  const words = statement.split(" "), lines = [];
  let line = "";
  words.forEach(w => {
    const t = line ? `${line} ${w}` : w;
    if (ctx.measureText(t).width > W * .82) { lines.push(line); line = w; } else line = t;
  });
  if (line) lines.push(line);

  const lh = fs * 1.45;
  const startY = H * .5 - ((lines.length - 1) * lh * .5);
  lines.forEach((l, i) => ctx.fillText(l, mx, startY + i * lh));

  // Name
  ctx.shadowBlur = 0;
  ctx.font = `${fs * .42}px 'Helvetica Neue', Arial, sans-serif`;
  ctx.fillStyle = "rgba(0,217,255,.85)";
  if (name) ctx.fillText(`— ${name}`, mx, startY + lines.length * lh + fs * .75);

  // Bottom rule
  ctx.strokeStyle = "rgba(255,255,255,.08)"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(W * .1, H * .88); ctx.lineTo(W * .9, H * .88); ctx.stroke();

  // Branding
  ctx.font = `600 ${fs * .34}px 'Helvetica Neue', Arial, sans-serif`;
  ctx.fillStyle = "rgba(255,255,255,.32)"; ctx.fillText("WhatsMyMoonshot.ai", mx, H * .93);
  ctx.font = `${fs * .27}px 'Helvetica Neue', Arial, sans-serif`;
  ctx.fillStyle = "rgba(255,255,255,.18)"; ctx.fillText("Discover Your Moonshot", mx, H * .97);

  return canvas.toDataURL("image/png");
}

// ─────────────────────────────────────────────────────────────────
// VOICE INPUT HOOK
// ─────────────────────────────────────────────────────────────────
function useVoice(onResult) {
  const [status, setStatus] = useState("idle"); // idle | listening | unsupported
  const recRef = useRef(null);
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  const start = useCallback(() => {
    if (!SR) { setStatus("unsupported"); return; }
    const r = new SR();
    r.lang = "en-US"; r.continuous = true; r.interimResults = false;
    r.onresult = e => {
      const text = Array.from(e.results).slice(e.resultIndex).map(x => x[0].transcript).join(" ").trim();
      if (text) onResult(text);
    };
    r.onerror = () => setStatus("idle");
    r.onend = () => setStatus(s => s === "listening" ? "idle" : s);
    r.start();
    recRef.current = r;
    setStatus("listening");
  }, [SR, onResult]);

  const stop = useCallback(() => {
    recRef.current?.stop(); recRef.current = null; setStatus("idle");
  }, []);

  useEffect(() => () => recRef.current?.stop(), []);
  return { status, supported: !!SR, start, stop };
}

// ─────────────────────────────────────────────────────────────────
// GLOBAL STYLES
// ─────────────────────────────────────────────────────────────────
const G = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --bg:#040C1A;--c:#00D9FF;--p:#9D4EDD;--pk:#FF006E;--g:#FFD60A;
      --tx:#EEF2FF;--mt:rgba(238,242,255,.5);
      --card:rgba(255,255,255,.035);--cb:rgba(255,255,255,.07);
      --r:16px;
    }
    html,body,#root{height:100%;overflow-x:hidden}
    body{font-family:'DM Sans',system-ui,sans-serif;background:var(--bg);color:var(--tx);-webkit-font-smoothing:antialiased;overscroll-behavior:none}
    .screen{min-height:100dvh;position:relative;overflow:hidden;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
    .abs{position:absolute;inset:0;pointer-events:none;z-index:0}
    .rel{position:relative;z-index:1}
    .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 28px;border-radius:100px;font-family:'DM Sans',sans-serif;font-weight:600;font-size:15px;cursor:pointer;border:none;transition:transform .18s ease,box-shadow .18s ease,opacity .18s;-webkit-tap-highlight-color:transparent;touch-action:manipulation;user-select:none}
    .btn:active{transform:scale(.96)!important}
    .btn:disabled{opacity:.35;cursor:not-allowed;pointer-events:none}
    .btn-p{background:linear-gradient(135deg,#00C8EE,#7B35CC);color:#fff;box-shadow:0 0 32px rgba(0,217,255,.25)}
    .btn-p:hover{box-shadow:0 0 54px rgba(0,217,255,.5);transform:translateY(-2px)}
    .btn-g{background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.1);color:var(--tx)}
    .btn-g:hover{background:rgba(255,255,255,.09)}
    .btn-d{background:linear-gradient(135deg,#E83838,#FF006E);color:#fff}
    .sm{padding:10px 20px;font-size:13px}
    .lg{padding:18px 44px;font-size:17px}
    .xl{padding:22px 58px;font-size:18px;font-weight:700;letter-spacing:.01em}
    .input{width:100%;background:rgba(255,255,255,.04);border:1.5px solid rgba(255,255,255,.1);border-radius:14px;padding:15px 18px;color:var(--tx);font-family:'DM Sans',sans-serif;font-size:16px;outline:none;transition:border-color .2s,box-shadow .2s;-webkit-appearance:none}
    .input:focus{border-color:var(--c);box-shadow:0 0 0 3px rgba(0,217,255,.12)}
    .input::placeholder{color:var(--mt)}
    textarea.input{resize:none;min-height:150px;line-height:1.65}
    .card{background:var(--card);border:1px solid var(--cb);border-radius:var(--r);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)}
    .chip{display:inline-flex;align-items:center;padding:7px 14px;border-radius:100px;font-size:13px;font-weight:500;cursor:pointer;border:1.5px solid rgba(255,255,255,.1);background:rgba(255,255,255,.035);color:var(--mt);transition:all .15s;-webkit-tap-highlight-color:transparent;touch-action:manipulation}
    .chip:hover{border-color:var(--c);color:var(--c)}
    .chip.on{background:rgba(0,217,255,.12);border-color:var(--c);color:var(--c)}
    .badge{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:100px;font-size:12px;font-weight:500;background:rgba(0,217,255,.1);border:1px solid rgba(0,217,255,.28);color:var(--c)}
    .badge-x{background:none;border:none;cursor:pointer;color:inherit;opacity:.7;font-size:14px;line-height:1;padding:0}
    .prog{height:3px;background:rgba(255,255,255,.07);border-radius:2px;overflow:hidden}
    .prog-f{height:100%;border-radius:2px;background:linear-gradient(90deg,var(--c),var(--p),var(--pk));transition:width .5s ease}
    .radio{display:flex;align-items:flex-start;gap:14px;padding:16px 18px;border-radius:12px;border:1.5px solid rgba(255,255,255,.07);cursor:pointer;transition:all .15s;-webkit-tap-highlight-color:transparent}
    .radio:hover{border-color:rgba(0,217,255,.3);background:rgba(0,217,255,.04)}
    .radio.on{border-color:var(--c);background:rgba(0,217,255,.07)}
    .rdot{width:20px;height:20px;min-width:20px;border-radius:50%;border:2px solid rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;margin-top:3px;transition:all .15s}
    .radio.on .rdot{border-color:var(--c);background:var(--c);box-shadow:0 0 10px rgba(0,217,255,.5)}
    .rdot i{width:8px;height:8px;border-radius:50%;background:#040C1A;opacity:0;transition:opacity .15s}
    .radio.on .rdot i{opacity:1}
    .lbl{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--mt)}
    .grad{background:linear-gradient(135deg,var(--c),var(--p),var(--pk));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .glow-c{color:var(--c);text-shadow:0 0 24px rgba(0,217,255,.6)}
    @keyframes spin{to{transform:rotate(360deg)}}
    .spin{width:22px;height:22px;border:2.5px solid rgba(255,255,255,.12);border-top-color:var(--c);border-radius:50%;animation:spin .7s linear infinite;flex-shrink:0}
    @keyframes fu{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
    @keyframes si{from{opacity:0;transform:scale(.88)}to{opacity:1;transform:scale(1)}}
    @keyframes fi{from{opacity:0}to{opacity:1}}
    @keyframes flt{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
    @keyframes flt2{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    @keyframes pg{0%,100%{box-shadow:0 0 24px rgba(0,217,255,.35)}50%{box-shadow:0 0 60px rgba(0,217,255,.75),0 0 90px rgba(157,78,221,.4)}}
    @keyframes ring{0%{transform:scale(1);opacity:.55}100%{transform:scale(2.8);opacity:0}}
    @keyframes shim{0%{background-position:-200% center}100%{background-position:200% center}}
    @keyframes conf{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(105vh) rotate(750deg);opacity:0}}
    @keyframes rp{0%,100%{box-shadow:0 0 0 0 rgba(255,0,110,.5)}50%{box-shadow:0 0 0 10px rgba(255,0,110,0)}}
    @keyframes tw{0%,100%{opacity:.2}50%{opacity:.85}}
    @keyframes cb{0%,100%{transform:scale(1)}20%{transform:scale(1.2)}40%{transform:scale(.94)}60%{transform:scale(1.1)}80%{transform:scale(.97)}}
    @keyframes ts{0%,100%{opacity:.8}50%{opacity:1}}
    .afu{animation:fu .55s ease both}
    .asi{animation:si .45s ease both}
    .afl{animation:flt 4s ease-in-out infinite}
    .afl2{animation:flt2 6s ease-in-out infinite}
    .apg{animation:pg 2.5s ease-in-out infinite}
    .arc{animation:rp 1.2s ease-in-out infinite}
    .confbit{position:fixed;border-radius:3px;animation:conf linear forwards;pointer-events:none;z-index:9999}
    ::-webkit-scrollbar{width:4px}
    ::-webkit-scrollbar-track{background:transparent}
    ::-webkit-scrollbar-thumb{background:rgba(255,255,255,.12);border-radius:2px}
    @media print{.no-print{display:none!important}.pt{page-break-inside:avoid}body{background:#fff;color:#000}.card{background:#f8f8f8;border:1px solid #ddd}}
  `}</style>
);

// ─────────────────────────────────────────────────────────────────
// AURORA CANVAS
// ─────────────────────────────────────────────────────────────────
function Aurora() {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext("2d"); let raf, t = 0;
    const resize = () => { cv.width = innerWidth; cv.height = innerHeight; };
    resize(); addEventListener("resize", resize);
    const draw = () => {
      const W = cv.width, H = cv.height; ctx.clearRect(0, 0, W, H); t += .0022;
      [
        [W*.18+Math.sin(t)*W*.07, H*.28+Math.cos(t*1.1)*H*.09, W*.5, "rgba(0,217,255,.08)"],
        [W*.82+Math.cos(t*.9)*W*.09, H*.5+Math.sin(t*1.3)*H*.1, W*.55, "rgba(157,78,221,.1)"],
        [W*.5+Math.sin(t*1.5)*W*.1, H*.72+Math.cos(t*.7)*H*.07, W*.42, "rgba(255,0,110,.06)"],
        [W*.08+Math.cos(t*1.2)*W*.06, H*.62+Math.sin(t)*H*.1, W*.38, "rgba(63,255,0,.04)"],
        [W*.66+Math.sin(t*.8)*W*.08, H*.15+Math.cos(t*1.4)*H*.06, W*.3, "rgba(255,214,10,.04)"],
      ].forEach(([x,y,r,c]) => {
        const g = ctx.createRadialGradient(x,y,0,x,y,r);
        g.addColorStop(0,c); g.addColorStop(1,"rgba(0,0,0,0)");
        ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="abs" />;
}

// ─────────────────────────────────────────────────────────────────
// STARS
// ─────────────────────────────────────────────────────────────────
function Stars({ n = 140 }) {
  const s = useRef(Array.from({ length: n }, () => ({
    x: Math.random()*100, y: Math.random()*100,
    r: Math.random()*1.6+.2, o: Math.random()*.55+.1,
    d: 2+Math.random()*4, dl: Math.random()*5,
  }))).current;
  return (
    <svg className="abs" style={{width:"100%",height:"100%"}}>
      {s.map((s,i)=>(
        <circle key={i} cx={`${s.x}%`} cy={`${s.y}%`} r={s.r}
          fill={`rgba(255,255,255,${s.o})`}
          style={{animation:`tw ${s.d}s ${s.dl}s ease-in-out infinite`}}/>
      ))}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────
// MOON
// ─────────────────────────────────────────────────────────────────
function Moon({ size = 80 }) {
  return (
    <div style={{position:"relative",width:size,height:size,margin:"0 auto"}} className="afl">
      <div style={{position:"absolute",inset:-size*.5,borderRadius:"50%",background:`radial-gradient(circle, rgba(0,217,255,.12) 0%, transparent 68%)`,animation:"ring 3.2s ease-out infinite"}}/>
      <div style={{position:"absolute",inset:-size*.28,borderRadius:"50%",background:`radial-gradient(circle, rgba(0,217,255,.07) 0%, transparent 70%)`}}/>
      <div style={{width:size,height:size,borderRadius:"50%",position:"relative",zIndex:1,background:"radial-gradient(circle at 38% 33%, rgba(210,242,255,.95), rgba(100,192,240,.8))",border:"1.5px solid rgba(0,217,255,.65)",boxShadow:`0 0 ${size*.45}px rgba(0,217,255,.55), 0 0 ${size*.9}px rgba(0,217,255,.2)`}}/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// PROGRESS HEADER
// ─────────────────────────────────────────────────────────────────
function PH({ step, total, title, onBack }) {
  return (
    <div className="no-print" style={{padding:"20px 20px 0"}}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
        {onBack&&<button className="btn btn-g sm" onClick={onBack} style={{padding:"8px 14px",fontSize:13,flexShrink:0}}>←</button>}
        <div style={{flex:1}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:7}}>
            <span style={{fontSize:12,fontWeight:600,color:"var(--mt)"}}>{title}</span>
            <span style={{fontSize:11,color:"var(--mt)"}}>{step}/{total}</span>
          </div>
          <div className="prog"><div className="prog-f" style={{width:`${(step/total)*100}%`}}/></div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// CONFETTI
// ─────────────────────────────────────────────────────────────────
function Confetti({ on }) {
  if (!on) return null;
  return <>{Array.from({length:75},(_,i)=>(<div key={i} className="confbit" style={{left:`${Math.random()*100}%`,top:"-10px",background:["#00D9FF","#9D4EDD","#FF006E","#FFD60A","#3FFF00","#FF8C00"][i%6],width:5+Math.random()*9,height:5+Math.random()*9,borderRadius:2,animationDuration:`${2.8+Math.random()*2.2}s`,animationDelay:`${Math.random()*2.5}s`}}/>))}</>;
}

// ─────────────────────────────────────────────────────────────────
// BREATHING SCREEN
// ─────────────────────────────────────────────────────────────────
const PHASES = [
  {label:"Breathe In", dur:4, scale:1.38, color:"#00D9FF"},
  {label:"Hold",       dur:4, scale:1.38, color:"#FFD60A"},
  {label:"Breathe Out",dur:4, scale:1,    color:"#9D4EDD"},
  {label:"Hold",       dur:2, scale:1,    color:"#FF006E"},
];

function BreathingScreen({ go }) {
  const [ci, setCi] = useState(0);
  const [round, setRound] = useState(0);
  const [sec, setSec] = useState(PHASES[0].dur);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const ph = PHASES[ci];

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSec(s => {
        if (s <= 1) {
          const nc = (ci + 1) % PHASES.length;
          const nr = nc === 0 ? round + 1 : round;
          if (nr >= 3) { setDone(true); setRunning(false); return 0; }
          setCi(nc); setRound(nr);
          return PHASES[nc].dur;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running, ci, round]);

  const start = () => { setCi(0); setRound(0); setSec(PHASES[0].dur); setDone(false); setRunning(true); };

  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <Aurora/><Stars n={90}/>
      <div className="rel" style={{minHeight:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 24px",textAlign:"center"}}>
        <div className="afu" style={{marginBottom:40}}>
          <Moon size={58}/>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,5vw,40px)",fontWeight:700,marginTop:22,marginBottom:10}}>
            {done ? <span className="grad">You're here. You're ready.</span> : "Let's arrive together."}
          </h1>
          <p style={{color:"var(--mt)",fontSize:15,lineHeight:1.65,maxWidth:360,margin:"0 auto"}}>
            {done ? "Three breaths. One intention. Your moonshot begins now." : "Three slow breaths before we begin. Drop into your body, out of your head."}
          </p>
        </div>

        {!done && (
          <div style={{position:"relative",width:220,height:220,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:44}}>
            {running && [0,1].map(i=>(
              <div key={i} style={{position:"absolute",width:200,height:200,borderRadius:"50%",border:`1.5px solid ${ph.color}`,animation:`ring ${ph.dur}s ease-out ${i*.6}s infinite`,opacity:.35}}/>
            ))}
            <div style={{
              width:172, height:172, borderRadius:"50%",
              background: running ? `radial-gradient(circle, rgba(${ph.color.replace('#','').match(/.{2}/g).map(x=>parseInt(x,16)).join(',')},0.15) 0%, transparent 100%)` : "radial-gradient(circle, rgba(0,217,255,.08) 0%, transparent 100%)",
              border:`2px solid ${running ? ph.color : "rgba(0,217,255,.4)"}`,
              boxShadow: running ? `0 0 40px rgba(${ph.color.replace('#','').match(/.{2}/g).map(x=>parseInt(x,16)).join(',')},0.3)` : "0 0 20px rgba(0,217,255,.15)",
              transform:`scale(${running ? ph.scale : 1})`,
              transition:`transform ${ph.dur}s ease-in-out, border-color .5s, box-shadow .5s`,
              display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4,
            }}>
              <span style={{fontSize:44,fontFamily:"'Playfair Display',serif",fontWeight:700,color:running?ph.color:"rgba(255,255,255,.35)",transition:`color ${ph.dur}s`}}>
                {running ? (ph.label === "Breathe In" ? ph.dur - sec + 1 : sec) : "○"}
              </span>
            </div>
          </div>
        )}

        {running && !done && (
          <div style={{marginBottom:28,minHeight:40}}>
            <p style={{fontSize:21,fontWeight:600,color:ph.color,textShadow:`0 0 22px ${ph.color}`,animation:"ts 1s ease-in-out infinite"}}>{ph.label}</p>
            <p style={{color:"var(--mt)",fontSize:13,marginTop:5}}>Round {round+1} of 3</p>
          </div>
        )}

        {!running && !done ? (
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:12}}>
            <button className="btn btn-p xl apg afu" onClick={start} style={{animationDelay:".2s",background:"linear-gradient(135deg,#00B8D9,#7B2FBE,#C8004E)",backgroundSize:"200% auto",animation:"shim 3s linear infinite, pg 2.5s ease-in-out infinite"}}>
              ◎ Start Breathing
            </button>
            <button className="btn btn-g sm" onClick={()=>go("name")} style={{opacity:.55}}>Skip →</button>
          </div>
        ) : done ? (
          <div className="asi" style={{display:"flex",flexDirection:"column",alignItems:"center",gap:12}}>
            <button className="btn btn-p xl apg" onClick={()=>go("name")} style={{animation:"cb .9s ease, pg 2.5s ease-in-out 1s infinite"}}>
              ✦ Begin My Moonshot Journey
            </button>
          </div>
        ) : (
          <button className="btn btn-g sm" onClick={()=>go("name")} style={{opacity:.5}}>Skip →</button>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// HOME
// ─────────────────────────────────────────────────────────────────
function HomeScreen({ go }) {
  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <Aurora/><Stars/>
      <nav className="rel no-print" style={{display:"flex",justifyContent:"center",padding:"24px 24px 0"}}>
        <div className="card" style={{display:"flex",gap:2,padding:"8px 12px",borderRadius:100}}>
          {["About","Services","Resources","Contact"].map(l=>(
            <button key={l} style={{background:"none",border:"none",borderRadius:100,color:"rgba(238,242,255,.6)",fontSize:13,fontWeight:500,padding:"6px 14px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",transition:"all .15s"}}
              onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="rgba(238,242,255,.6)"}>{l}</button>
          ))}
        </div>
      </nav>
      <div className="rel" style={{minHeight:"calc(100dvh - 76px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 24px 120px",textAlign:"center"}}>
        <div className="afl" style={{marginBottom:36}}><Moon size={98}/></div>
        <h1 className="afu" style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(38px,9vw,90px)",fontWeight:700,lineHeight:1.03,letterSpacing:"-.025em",marginBottom:18,animationDelay:".1s"}}>
          <span style={{color:"#fff",textShadow:"0 0 60px rgba(255,255,255,.2)"}}>WhatsMyMoonshot</span>
          <span className="glow-c">.ai</span>
        </h1>
        <p className="afu" style={{color:"var(--mt)",fontSize:"clamp(15px,3vw,19px)",maxWidth:460,margin:"0 auto 52px",lineHeight:1.65,animationDelay:".2s"}}>
          A trauma-informed journey to discover your transformative vision — and the courage to pursue it.
        </p>
        <div className="afu" style={{animationDelay:".3s"}}>
          <button className="btn btn-p xl apg" onClick={()=>go("breathe")} style={{background:"linear-gradient(135deg,#00B8D9,#7B2FBE,#C8004E)",backgroundSize:"200% auto",animation:"shim 3s linear infinite, pg 2.5s ease-in-out infinite"}}>
            ✦ Discover Your Moonshot
          </button>
        </div>
      </div>
      <div className="rel no-print" style={{position:"absolute",bottom:36,left:0,right:0,display:"flex",justifyContent:"center",gap:"clamp(28px,7vw,72px)"}}>
        {[{e:"🔭",l:"Vision"},{e:"💙",l:"Healing"},{e:"🚀",l:"Action"}].map(({e,l},i)=>(
          <div key={l} className="afl2" style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10,animationDelay:`${i*.4}s`}}>
            <div className="card" style={{width:58,height:58,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24}}>{e}</div>
            <span style={{fontSize:13,fontWeight:500,color:"var(--mt)"}}>{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// NAME
// ─────────────────────────────────────────────────────────────────
function NameScreen({ go }) {
  const [name, setName] = useState("");
  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <Aurora/><Stars n={80}/>
      <PH step={1} total={6} title="Welcome" onBack={()=>go("breathe")}/>
      <div className="rel afu" style={{maxWidth:520,margin:"0 auto",padding:"52px 20px 40px",display:"flex",flexDirection:"column",gap:28}}>
        <div style={{textAlign:"center"}}><Moon size={64}/>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,6vw,44px)",fontWeight:700,marginTop:24,marginBottom:12,lineHeight:1.2}}>
            Welcome to Your<br/><span className="grad">Moonshot Journey</span>
          </h1>
          <p style={{color:"var(--mt)",lineHeight:1.65,fontSize:15}}>Let's begin by getting to know you.</p>
        </div>
        <div className="card" style={{padding:28}}>
          <label style={{display:"block",marginBottom:12,fontWeight:600,fontSize:16}}>What's your name?</label>
          <input className="input" type="text" autoFocus placeholder="Enter your first name" value={name}
            onChange={e=>setName(e.target.value)}
            onKeyDown={e=>e.key==="Enter"&&name.trim()&&go("journey",{name:name.trim()})}/>
        </div>
        <button className="btn btn-p lg" style={{alignSelf:"stretch"}} disabled={!name.trim()} onClick={()=>go("journey",{name:name.trim()})}>✦ Begin My Journey</button>
        <p style={{textAlign:"center",color:"var(--mt)",fontSize:13,lineHeight:1.65}}>
          This journey is designed to help you discover your unique purpose and create a roadmap for meaningful impact.
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// JOURNEY
// ─────────────────────────────────────────────────────────────────
function JourneyScreen({ go, journey, setJourney }) {
  const [q, setQ] = useState({iLove:[],iAmGreatAt:[],worldNeeds:[],canBePaidFor:[]});
  const [inp, setInp] = useState({iLove:"",iAmGreatAt:"",worldNeeds:"",canBePaidFor:""});
  const total = Object.values(q).reduce((s,a)=>s+a.length,0);
  const tog = (k,v) => setQ(p=>({...p,[k]:p[k].includes(v)?p[k].filter(x=>x!==v):[...p[k],v]}));
  const add = k => { const v=inp[k].trim(); if(v&&!q[k].includes(v)){setQ(p=>({...p,[k]:[...p[k],v]}));setInp(p=>({...p,[k]:""}));} };
  const rm  = (k,v) => setQ(p=>({...p,[k]:p[k].filter(x=>x!==v)}));
  const next = () => {
    const miss=QUAD_META.find(m=>q[m.key].length===0);
    if(miss) return alert(`Please add at least one item to "${miss.title}"`);
    setJourney(p=>({...p,quadrants:q})); go("prompts");
  };
  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <Aurora/>
      <PH step={2} total={6} title="Vision Quadrant" onBack={()=>go("name")}/>
      <div className="rel" style={{padding:"20px 16px 60px",maxWidth:960,margin:"0 auto"}}>
        <div className="afu" style={{textAlign:"center",marginBottom:28}}>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,5vw,34px)",fontWeight:700,marginBottom:8}}>Your <span className="grad">Vision Quadrant</span></h1>
          <p style={{color:"var(--mt)",fontSize:14}}>Select UN SDG-aligned options or add your own · {total} items selected</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))",gap:14,marginBottom:32}}>
          {QUAD_META.map(({key,title,desc,glow},i)=>(
            <div key={key} className="card afu" style={{padding:18,background:glow,animationDelay:`${i*.08}s`}}>
              <div style={{fontWeight:700,fontSize:15,marginBottom:2}}>{title}</div>
              <div style={{color:"var(--mt)",fontSize:12,marginBottom:12}}>{desc}</div>
              {q[key].length>0&&<div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:10}}>{q[key].map(v=><span key={v} className="badge">{v}<button className="badge-x" onClick={()=>rm(key,v)}>✕</button></span>)}</div>}
              <div style={{maxHeight:148,overflowY:"auto",display:"flex",flexWrap:"wrap",gap:5,marginBottom:10}}>
                {SDG_OPTIONS[key].map(o=><button key={o} className={`chip ${q[key].includes(o)?"on":""}`} onClick={()=>tog(key,o)}>{o}</button>)}
              </div>
              <div style={{display:"flex",gap:8}}>
                <input className="input" style={{flex:1,padding:"9px 14px",fontSize:13}} placeholder="Add your own…" value={inp[key]}
                  onChange={e=>setInp(p=>({...p,[key]:e.target.value}))} onKeyDown={e=>e.key==="Enter"&&add(key)}/>
                <button className="btn btn-g sm" onClick={()=>add(key)} disabled={!inp[key].trim()}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
          <button className="btn btn-p lg" disabled={total<4} onClick={next}>✦ Continue to Questions</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// PROMPTS
// ─────────────────────────────────────────────────────────────────
function PromptsScreen({ go, journey, setJourney }) {
  const [idx, setIdx] = useState(0);
  const [responses, setResponses] = useState({});
  const prompt = PROMPTS[idx];
  const resp = responses[prompt.id] || "";
  const answered = PROMPTS.filter(p => responses[p.id]?.trim()).length;

  const addText = useCallback(t => {
    setResponses(p => ({...p, [prompt.id]: ((p[prompt.id]||"")+" "+t).trim()}));
  }, [prompt.id]);

  const voice = useVoice(addText);
  const isFirst = idx === 0 && !responses[prompt.id];

  const next = () => {
    if (!resp.trim()) return alert("Please share something before continuing — even a few words.");
    if (idx < PROMPTS.length - 1) setIdx(i => i+1);
    else { setJourney(p => ({...p, responses})); go("emailgate"); }
  };

  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <Aurora/>
      <PH step={3} total={6} title="Moonshot Prompts" onBack={()=>idx>0?setIdx(i=>i-1):go("journey")}/>
      <div className="rel" style={{maxWidth:680,margin:"0 auto",padding:"16px 20px 48px"}}>
        <div style={{marginBottom:22}}>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--mt)",marginBottom:7}}>
            <span>Question {idx+1} of {PROMPTS.length}</span>
            <span>{answered} answered</span>
          </div>
          <div className="prog"><div className="prog-f" style={{width:`${((idx+1)/PROMPTS.length)*100}%`}}/></div>
        </div>

        {idx === 0 && (
          <div className="card" style={{padding:"14px 18px",marginBottom:14,borderColor:"rgba(0,217,255,.08)",display:"flex",gap:12,alignItems:"flex-start"}}>
            <span style={{fontSize:20,flexShrink:0,lineHeight:1.3}}>💡</span>
            <p style={{color:"var(--mt)",fontSize:13,lineHeight:1.65}}>
              <strong style={{color:"rgba(238,242,255,.8)"}}>Most people don't lack insight — they're trapped inside it.</strong>{" "}
              These questions are designed to externalize what you already know. Write without editing. There are no wrong answers.
            </p>
          </div>
        )}

        <div key={prompt.id} className="card asi" style={{padding:28,marginBottom:16,borderColor:"rgba(0,217,255,.1)"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
            <div style={{display:"flex",alignItems:"center",gap:8,color:"var(--c)",fontSize:12,fontWeight:700,letterSpacing:".06em"}}>
              <span style={{opacity:.8}}>✦</span> QUESTION {idx+1} OF {PROMPTS.length}
            </div>
            {prompt.phase && (
              <span style={{fontSize:10,fontWeight:700,letterSpacing:".08em",padding:"3px 10px",borderRadius:100,
                background: prompt.phase==="Externalize"?"rgba(0,217,255,.1)":prompt.phase==="Visualize"?"rgba(157,78,221,.1)":"rgba(255,214,10,.1)",
                color: prompt.phase==="Externalize"?"var(--c)":prompt.phase==="Visualize"?"var(--p)":"var(--g)",
                border: `1px solid ${prompt.phase==="Externalize"?"rgba(0,217,255,.25)":prompt.phase==="Visualize"?"rgba(157,78,221,.25)":"rgba(255,214,10,.25)"}`,
              }}>
                {prompt.phase.toUpperCase()}
              </span>
            )}
          </div>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(18px,4vw,25px)",fontWeight:700,lineHeight:1.38,marginBottom:10,color:"#fff"}}>{prompt.q}</h2>
          <p style={{color:"var(--mt)",fontSize:13,fontStyle:"italic",lineHeight:1.55}}>{prompt.hint}</p>
        </div>

        <textarea className="input" style={{minHeight:155,marginBottom:12,fontSize:15}}
          placeholder="Speak from the heart. There are no wrong answers here."
          value={resp}
          onChange={e=>setResponses(p=>({...p,[prompt.id]:e.target.value}))}/>

        <div className="card" style={{padding:"12px 16px",marginBottom:22,display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
          {voice.supported ? (
            <>
              <button className={`btn sm ${voice.status==="listening"?"btn-d arc":"btn-g"}`}
                onClick={voice.status==="listening"?voice.stop:voice.start} style={{minWidth:124}}>
                {voice.status==="listening"?"⏹ Stop":"🎙 Voice Input"}
              </button>
              <span style={{fontSize:13,color:"var(--mt)"}}>
                {voice.status==="listening"?"Listening… speak naturally":"Tap to speak your answer"}
              </span>
            </>
          ) : (
            <span style={{fontSize:13,color:"var(--mt)"}}>🎙 Voice input not supported in this browser</span>
          )}
        </div>

        <div style={{display:"flex",gap:10}}>
          {idx>0&&<button className="btn btn-g" style={{flex:1}} onClick={()=>setIdx(i=>i-1)}>← Prev</button>}
          <button className="btn btn-p" style={{flex:2}} disabled={!resp.trim()} onClick={next}>
            {idx===PROMPTS.length-1?"✦ Generate My Statement":"Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// STATEMENT
// ─────────────────────────────────────────────────────────────────
function StatementScreen({ go, journey, setJourney }) {
  const [stmt, setStmt] = useState("");
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const generate = useCallback(async () => {
    setLoading(true);
    try {
      const q = journey.quadrants||{}, r = journey.responses||{};
      const text = await callAI(`Based on this person's moonshot journey, craft their personal moonshot statement.

Vision Quadrants:
• I Love: ${(q.iLove||[]).join(", ")||"not provided"}
• I Am Great At: ${(q.iAmGreatAt||[]).join(", ")||"not provided"}
• The World Needs: ${(q.worldNeeds||[]).join(", ")||"not provided"}
• I Can Be Paid For: ${(q.canBePaidFor||[]).join(", ")||"not provided"}

Their reflections:
${Object.values(r).filter(Boolean).join("\n\n")}

Write a single moonshot statement: "I am here to [bold verb] [who/what] so that [the transformation]."
Make it poetic, specific, emotionally resonant — 1–2 sentences max. Return ONLY the statement. No quotes. No markdown.`);
      const s = text.trim();
      setStmt(s); setJourney(p=>({...p,statement:s}));
    } catch(e) { setEditing(true); }
    setLoading(false);
  }, [journey, setJourney]);

  useEffect(() => { if(!journey.statement) generate(); else setStmt(journey.statement); }, []);

  const accept = () => {
    if(!stmt.trim()) return alert("Generate or write your statement first.");
    setJourney(p=>({...p,statement:stmt.trim()})); go("genius");
  };

  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <Aurora/>
      <PH step={4} total={6} title="Moonshot Statement" onBack={()=>go("prompts")}/>
      <div className="rel afu" style={{maxWidth:700,margin:"0 auto",padding:"32px 20px 48px"}}>
        <div style={{textAlign:"center",marginBottom:32}}>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,5vw,38px)",fontWeight:700,marginBottom:10}}>
            Your <span className="grad">Moonshot Statement</span>
          </h1>
          <p style={{color:"var(--mt)",fontSize:14}}>{hasAI() ? "AI-crafted from your vision and reflections" : "Write yours below — your words, your vision."}</p>
        </div>

        <div className="card asi" style={{padding:36,marginBottom:20,background:"radial-gradient(ellipse at top,rgba(0,217,255,.07) 0%,transparent 70%)",borderColor:"rgba(0,217,255,.15)",minHeight:180,display:"flex",flexDirection:"column",justifyContent:"center"}}>
          {loading ? (
            <div style={{textAlign:"center",padding:"20px 0"}}>
              <div className="spin" style={{width:44,height:44,margin:"0 auto 18px",border:"3px solid rgba(255,255,255,.12)",borderTopColor:"var(--c)"}}/>
              <p style={{color:"var(--mt)",marginBottom:6}}>Crafting your moonshot…</p>
              <p style={{color:"var(--mt)",fontSize:13}}>Weaving together your vision and values</p>
            </div>
          ) : editing ? (
            <div>
              {!hasAI() && !stmt && (
                <div style={{marginBottom:14,padding:"12px 16px",borderRadius:10,background:"rgba(0,217,255,.07)",border:"1px solid rgba(0,217,255,.15)"}}>
                  <p style={{fontSize:13,color:"rgba(238,242,255,.85)",lineHeight:1.6,marginBottom:4}}>
                    ✍️ <strong>Write your moonshot statement.</strong> Use this as a starting point:
                  </p>
                  <p style={{fontSize:13,color:"var(--mt)",fontStyle:"italic"}}>
                    "I am here to [what you do] for [who you serve] so that [the change you create]."
                  </p>
                </div>
              )}
              <textarea className="input" style={{minHeight:120,fontSize:17,lineHeight:1.55,fontStyle:"italic"}} value={stmt}
                placeholder="I am here to [action] [who] so that [impact]…"
                onChange={e=>setStmt(e.target.value)} autoFocus/>
            </div>
          ) : (
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(17px,3.5vw,24px)",lineHeight:1.6,fontStyle:"italic",textAlign:"center",color:"#fff",letterSpacing:".01em"}}>
              {stmt||"Your statement will appear here…"}
            </p>
          )}
        </div>

        <div className="card" style={{padding:18,marginBottom:24,borderColor:"rgba(0,217,255,.1)"}}>
          <div className="lbl" style={{marginBottom:10}}>Statement Format</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"6px 18px",fontSize:13,lineHeight:1.8}}>
            <span style={{color:"var(--c)",fontWeight:600}}>I am here to</span><span style={{color:"var(--mt)"}}>  [action verb]</span>
            <span style={{color:"var(--p)",fontWeight:600}}>for / with</span><span style={{color:"var(--mt)"}}>  [who you serve]</span>
            <span style={{color:"var(--pk)",fontWeight:600}}>so that</span><span style={{color:"var(--mt)"}}>  [the transformation]</span>
          </div>
        </div>

        {!loading&&(
          <div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center"}}>
            {editing ? (
              <><button className="btn btn-g" onClick={()=>stmt.trim()&&setEditing(false)}>Preview</button>
                <button className="btn btn-p" disabled={!stmt.trim()} onClick={()=>{setEditing(false);setJourney(p=>({...p,statement:stmt.trim()}))}}>✓ Save & Continue</button></>
            ) : (
              <><button className="btn btn-g" onClick={()=>setEditing(true)}>✎ Edit</button>
                {hasAI()&&<button className="btn btn-g" onClick={generate} disabled={loading}>↻ Regenerate</button>}
                <button className="btn btn-p" disabled={!stmt.trim()} onClick={accept}>Accept & Continue →</button></>
            )}
          </div>
        )}
        {!loading&&!hasAI()&&!stmt&&(
          <p style={{textAlign:"center",color:"var(--mt)",fontSize:12,marginTop:12}}>
            Write your statement above, then click Save & Continue.
          </p>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// GENIUS ZONES
// ─────────────────────────────────────────────────────────────────
function GeniusScreen({ go, journey, setJourney }) {
  const [zones, setZones] = useState([]);
  const [step, setStep] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = useCallback(async () => {
    setLoading(true);
    try {
      const text = await callAI(
        `Identify this person's top 3 "Genius Zones" — where they're naturally gifted and energized.
Their vision: ${JSON.stringify(journey.quadrants||{})}
Their moonshot: "${journey.statement||""}"

Return ONLY a JSON array (no markdown):
[{"title":"Zone","description":"One powerful sentence.","icon":"star"},{"title":"...","description":"...","icon":"zap"},{"title":"...","description":"...","icon":"target"}]
Icon options: star, zap, target, lightbulb, heart, rocket, compass, flame`,
        "Return only valid JSON. No markdown. No explanation."
      );
      let parsed;
      try { parsed = JSON.parse(text.replace(/```json|```/g,"").trim()); }
      catch { const m=text.match(/\[[\s\S]*\]/); parsed=m?JSON.parse(m[0]):null; }
      if(!Array.isArray(parsed)||!parsed.length) throw new Error();
      setZones(parsed.slice(0,3)); setJourney(p=>({...p,zones:parsed.slice(0,3)}));
    } catch {
      // handled above - fallback zones set if AI fails
    }
    setLoading(false);
  }, [journey, setJourney]);

  useEffect(()=>{if(journey.zones?.length)setZones(journey.zones);else generate();},[]);

  const finish = () => {
    if(!step) return alert("Please choose your next right step.");
    setJourney(p=>({...p,nextStep:NEXT_STEPS.find(s=>s.id===step),commitmentDays:7}));
    go("celebration");
  };

  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <Aurora/>
      <PH step={5} total={6} title="Genius Zones" onBack={()=>go("statement")}/>
      <div className="rel" style={{maxWidth:880,margin:"0 auto",padding:"32px 20px 60px"}}>
        <div className="afu" style={{textAlign:"center",marginBottom:32}}>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,5vw,36px)",fontWeight:700,marginBottom:8}}>
            Your <span className="grad">Genius Zones</span>
          </h1>
          <p style={{color:"var(--mt)",fontSize:14}}>Where your unique gifts shine brightest</p>
        </div>

        {loading ? (
          <div style={{textAlign:"center",padding:"64px 0"}}>
            <div className="spin" style={{width:52,height:52,margin:"0 auto 20px",border:"3px solid rgba(255,255,255,.12)",borderTopColor:"var(--c)"}}/>
            <p style={{color:"var(--mt)"}}>Analyzing your unique strengths…</p>
          </div>
        ) : (
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:16,marginBottom:52}}>
            {zones.map((z,i)=>(
              <div key={i} className="card afu" style={{padding:26,animationDelay:`${i*.1}s`,background:`radial-gradient(ellipse at top left,rgba(0,217,255,.06) 0%,transparent 60%)`,borderColor:"rgba(0,217,255,.1)"}}>
                <div style={{width:64,height:64,borderRadius:"50%",marginBottom:16,fontSize:28,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg,rgba(0,217,255,.12),rgba(157,78,221,.12))",border:"1px solid rgba(0,217,255,.2)",animation:`flt ${3.5+i*.5}s ease-in-out infinite`}}>
                  {ZONE_ICONS[z.icon]||"✦"}
                </div>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:19,fontWeight:700,marginBottom:8}}>{z.title}</h3>
                <p style={{color:"var(--mt)",fontSize:13,lineHeight:1.6}}>{z.description}</p>
              </div>
            ))}
          </div>
        )}

        {!loading&&zones.length>0&&(
          <>
            <div style={{textAlign:"center",marginBottom:22}}>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,4vw,28px)",fontWeight:700,marginBottom:7}}>Choose Your <span className="grad">Next Right Step</span></h2>
              <p style={{color:"var(--mt)",fontSize:14}}>One focused action. Seven days. That's all it takes to begin.</p>
            </div>
            <div className="card" style={{padding:22,marginBottom:28}}>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {NEXT_STEPS.map(s=>(
                  <button key={s.id} className={`radio ${step===s.id?"on":""}`} onClick={()=>setStep(s.id)}>
                    <div className="rdot"><i/></div>
                    <div style={{textAlign:"left"}}>
                      <span style={{fontSize:15}}>{s.emoji} </span><span style={{fontWeight:600}}>{s.title}</span>
                      <div style={{color:"var(--mt)",fontSize:13,marginTop:3}}>{s.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
              <button className="btn btn-p lg" disabled={!step} onClick={finish}>✦ Complete My Journey</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// CELEBRATION
// ─────────────────────────────────────────────────────────────────
function CelebrationScreen({ go, journey }) {
  const [conf, setConf] = useState(true);
  const [copied, setCopied] = useState(false);
  useEffect(()=>{setTimeout(()=>setConf(false),5200);},[]);

  const shareText = `✦ I just discovered my moonshot:\n\n"${journey.statement||""}"\n\nWhat's yours? → WhatsMyMoonshot.ai`;

  const copy = () => { navigator.clipboard.writeText(journey.statement||""); setCopied(true); setTimeout(()=>setCopied(false),2200); };
  const share = async () => {
    if(navigator.share){try{await navigator.share({title:"My Moonshot",text:shareText,url:"https://WhatsMyMoonshot.ai"});}catch{}}
    else{navigator.clipboard.writeText(shareText);alert("Copied to clipboard! Paste to share.");}
  };

  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <Aurora/><Stars/>
      <Confetti on={conf}/>
      <PH step={6} total={6} title="Moonshot Initiated 🚀"/>
      <div className="rel afu" style={{maxWidth:700,margin:"0 auto",padding:"32px 20px 72px"}}>
        <div style={{textAlign:"center",marginBottom:36}}>
          <div className="afl" style={{display:"inline-block",marginBottom:22}}>
            <div style={{width:160,height:160,borderRadius:"50%",background:"linear-gradient(135deg,var(--c),var(--p),var(--pk))",padding:3,display:"inline-flex",animation:"pg 2.5s ease-in-out infinite"}}>
              <div style={{width:"100%",height:"100%",borderRadius:"50%",background:"var(--bg)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2}}>
                <span style={{fontSize:52,animation:"cb .9s ease"}}>🌙</span>
                <span style={{fontSize:10,fontWeight:700,letterSpacing:".1em",color:"var(--c)"}}>MOONSHOT</span>
                <span style={{fontSize:9,color:"var(--mt)",letterSpacing:".07em"}}>INITIATED</span>
              </div>
            </div>
          </div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,6vw,46px)",fontWeight:700,marginBottom:12}}>
            🎉 {journey.name?`Congratulations, ${journey.name}!`:"You did it!"}
          </h1>
          <p style={{color:"var(--mt)",fontSize:16,lineHeight:1.65,maxWidth:480,margin:"0 auto"}}>
            You've discovered your moonshot and taken the first step toward extraordinary impact.
          </p>
        </div>

        {/* Summary */}
        <div className="card pt" style={{padding:28,marginBottom:16,borderColor:"rgba(0,217,255,.12)"}}>
          <div style={{marginBottom:journey.nextStep?18:0}}>
            <div className="lbl" style={{marginBottom:10}}>Your Moonshot Statement</div>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(17px,3.5vw,22px)",lineHeight:1.6,fontStyle:"italic",color:"#fff"}}>{journey.statement||"—"}</p>
          </div>
          {journey.nextStep&&(
            <div style={{borderTop:"1px solid rgba(255,255,255,.07)",paddingTop:16,marginBottom:journey.zones?.length?16:0}}>
              <div className="lbl" style={{marginBottom:8}}>Next Right Step</div>
              <p style={{fontWeight:600,fontSize:15}}>{journey.nextStep.emoji} {journey.nextStep.title}</p>
              <p style={{color:"var(--mt)",fontSize:13,marginTop:3}}>Starting today — 7-day commitment</p>
            </div>
          )}
          {journey.zones?.length>0&&(
            <div style={{borderTop:"1px solid rgba(255,255,255,.07)",paddingTop:16}}>
              <div className="lbl" style={{marginBottom:10}}>Genius Zones</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                {journey.zones.map((z,i)=>(
                  <span key={i} style={{padding:"6px 16px",borderRadius:100,fontSize:13,fontWeight:500,background:"rgba(157,78,221,.12)",border:"1px solid rgba(157,78,221,.28)",color:"var(--p)"}}>{ZONE_ICONS[z.icon]} {z.title}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Devon's quote */}
        <div className="card afu" style={{padding:22,marginBottom:20,textAlign:"center",borderColor:"rgba(0,217,255,.12)",animationDelay:".1s",background:"radial-gradient(ellipse at center,rgba(0,217,255,.05) 0%,transparent 70%)"}}>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:17,fontStyle:"italic",lineHeight:1.7,color:"rgba(238,242,255,.85)",marginBottom:6}}>
            "You don't leave motivated. You leave <strong style={{color:"var(--c)"}}>oriented.</strong>"
          </p>
          <p style={{fontSize:12,color:"var(--mt)"}}>— Moonshot Mapping™ · Devon Seegers</p>
        </div>

        {/* 90-day plan teaser */}
        <div className="card afu" style={{padding:24,marginBottom:24,borderColor:"rgba(157,78,221,.15)",animationDelay:".15s"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
            <span style={{fontSize:20}}>🗺️</span>
            <div className="lbl" style={{color:"var(--p)"}}>Your 90-Day Clarity Map</div>
          </div>
          <p style={{color:"var(--mt)",fontSize:13,lineHeight:1.65,marginBottom:12}}>
            Export your full results to get your AI-generated 90-day roadmap — with weekly milestones, 3 key actions, and a printable clarity map you can return to every morning.
          </p>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {["Week 1-4: Foundation","Week 5-8: Momentum","Week 9-12: Acceleration"].map((w,i)=>(
              <span key={i} style={{padding:"4px 12px",borderRadius:100,fontSize:11,fontWeight:600,
                background:"rgba(157,78,221,.1)",border:"1px solid rgba(157,78,221,.2)",color:"var(--p)"}}>{w}</span>
            ))}
          </div>
        </div>

        <div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",marginBottom:32}}>
          <button className="btn btn-g" onClick={copy}>{copied?"✓ Copied!":"📋 Copy Statement"}</button>
          <button className="btn btn-p lg" onClick={()=>go("export")}>🗺️ Get My Clarity Map →</button>
        </div>

        {/* ─── VIRAL CTA ─── */}
        <div className="card afu" style={{padding:28,background:"radial-gradient(ellipse at bottom,rgba(157,78,221,.1) 0%,transparent 70%)",borderColor:"rgba(157,78,221,.2)",textAlign:"center",animationDelay:".15s"}}>
          <div style={{fontSize:30,marginBottom:10}}>🌍</div>
          <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(18px,4vw,24px)",fontWeight:700,marginBottom:10}}>
            The world needs <span className="grad">more moonshots.</span>
          </h3>
          <p style={{color:"var(--mt)",fontSize:14,lineHeight:1.68,marginBottom:20,maxWidth:400,margin:"0 auto 20px"}}>
            Dare your friends and colleagues to discover theirs. Share your statement and challenge them to go further.
          </p>
          <div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",marginBottom:12}}>
            <button className="btn btn-p" onClick={share} style={{background:"linear-gradient(135deg,#7B2FBE,#C8004E)"}}>🚀 Share My Moonshot</button>
            <button className="btn btn-g" onClick={()=>window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent("Just discovered my moonshot on WhatsMyMoonshot.ai 🌙 What's yours?")}&url=${encodeURIComponent("https://WhatsMyMoonshot.ai")}`,"_blank")}>𝕏 Post to X</button>
            <button className="btn btn-g" onClick={()=>window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://WhatsMyMoonshot.ai")}`,"_blank")}>in LinkedIn</button>
          </div>
          <p style={{fontSize:12,color:"var(--mt)"}}>Your moonshot is contagious. ✦</p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────
function ExportScreen({ go, journey }) {
  const [cards, setCards] = useState({});
  const [genning, setGenning] = useState({});
  const [modal, setModal] = useState(null);
  const [copied, setCopied] = useState(false);
  const [roadmap, setRoadmap] = useState(null);
  const [genRoadmap, setGenRoadmap] = useState(false);

  const generateRoadmap = useCallback(async () => {
    setGenRoadmap(true);
    try {
      const text = await callAI(
        `Based on this person's moonshot journey, create a practical 90-day roadmap.

Moonshot Statement: "${journey.statement || ""}"
Genius Zones: ${JSON.stringify((journey.zones||[]).map(z=>z.title))}
Next Step Chosen: ${journey.nextStep?.title || "not specified"}

Return ONLY valid JSON (no markdown) in this exact format:
{
  "why": "One powerful sentence about why this moonshot MUST happen — make it personal and visceral",
  "actions": [
    {"n": 1, "title": "Action title", "desc": "One clear sentence on what to do"},
    {"n": 2, "title": "Action title", "desc": "One clear sentence on what to do"},
    {"n": 3, "title": "Action title", "desc": "One clear sentence on what to do"}
  ],
  "weeks": [
    {"range": "Week 1–4", "label": "Foundation", "focus": "What to build/do/establish in weeks 1-4"},
    {"range": "Week 5–8", "label": "Momentum",   "focus": "What to build/do/establish in weeks 5-8"},
    {"range": "Week 9–12","label": "Acceleration","focus": "What to build/do/establish in weeks 9-12"}
  ],
  "reward": "A specific, meaningful reward for completing the 90 days"
}`,
        "You are a strategic clarity coach. Return only valid JSON. No markdown. No explanation."
      );
      let parsed;
      try { parsed = JSON.parse(text.replace(/```json|```/g,"").trim()); }
      catch { const m = text.match(/\{[\s\S]*\}/); parsed = m ? JSON.parse(m[0]) : null; }
      if (parsed) setRoadmap(parsed);
    } catch(e) { console.error(e); }
    setGenRoadmap(false);
  }, [journey]);

  const copy = () => { navigator.clipboard.writeText(journey.statement||""); setCopied(true); setTimeout(()=>setCopied(false),2200); };
  const share = async () => {
    const text = `✦ My moonshot: "${journey.statement||""}"\n\nDiscover yours → WhatsMyMoonshot.ai`;
    if(navigator.share){try{await navigator.share({title:"My Moonshot",text,url:"https://WhatsMyMoonshot.ai"});}catch{}}
    else{navigator.clipboard.writeText(text);alert("Copied to clipboard!");}
  };

  const gen = platform => {
    setGenning(p=>({...p,[platform]:true}));
    setTimeout(()=>{
      const url = renderCard(journey.statement||"Your moonshot awaits.",journey.name||"",platform);
      setCards(p=>({...p,[platform]:url}));
      setGenning(p=>({...p,[platform]:false}));
    },80);
  };

  const download = (platform,url) => {
    // Desktop: trigger download; iOS: open modal so user can long-press
    const a = document.createElement("a");
    a.href = url; a.download = `moonshot-${platform}.png`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setModal({platform,url}); // also show modal for iOS
  };

  const PLATS = [{id:"instagram",label:"Instagram",dims:"1080×1080",e:"📸"},{id:"linkedin",label:"LinkedIn",dims:"1200×627",e:"💼"},{id:"twitter",label:"Twitter/X",dims:"1200×675",e:"𝕏"}];

  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <Aurora/>
      <PH step={6} total={6} title="Export & Share" onBack={()=>go("celebration")}/>

      {/* Image modal */}
      {modal&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.88)",zIndex:1000,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20,backdropFilter:"blur(12px)"}} onClick={()=>setModal(null)}>
          <div onClick={e=>e.stopPropagation()} style={{maxWidth:600,width:"100%",display:"flex",flexDirection:"column",gap:14}}>
            <img src={modal.url} alt="Social card" style={{width:"100%",borderRadius:12,boxShadow:"0 0 60px rgba(0,0,0,.5)"}}/>
            <p style={{textAlign:"center",color:"var(--mt)",fontSize:13}}>
              📱 iOS: long-press image → Save to Photos · 💻 Desktop: right-click → Save Image
            </p>
            <div style={{display:"flex",gap:10,justifyContent:"center"}}>
              <a href={modal.url} download={`moonshot-${modal.platform}.png`} className="btn btn-p sm">⬇ Download</a>
              <button className="btn btn-g sm" onClick={()=>setModal(null)}>Close ✕</button>
            </div>
          </div>
        </div>
      )}

      <div className="rel afu" style={{maxWidth:820,margin:"0 auto",padding:"28px 20px 72px"}}>
        <div style={{textAlign:"center",marginBottom:28}}>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,5vw,36px)",fontWeight:700,marginBottom:8}}>Export Your <span className="grad">Moonshot</span></h1>
          <p style={{color:"var(--mt)",fontSize:14}}>Download, print, and share your journey</p>
        </div>

        {/* Summary preview */}
        <div className="card pt" id="print-content" style={{padding:28,marginBottom:20}}>
          <div style={{padding:"18px 20px",background:"rgba(0,217,255,.06)",borderRadius:12,border:"1px solid rgba(0,217,255,.14)",marginBottom:18}}>
            <div className="lbl" style={{marginBottom:10}}>Moonshot Statement</div>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(16px,3vw,21px)",fontWeight:700,lineHeight:1.5,color:"#fff"}}>{journey.statement||"—"}</p>
          </div>
          {journey.zones?.length>0&&(
            <div style={{marginBottom:16}}>
              <div className="lbl" style={{marginBottom:10}}>Top 3 Genius Zones</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",gap:10}}>
                {journey.zones.map((z,i)=>(
                  <div key={i} style={{padding:"12px 14px",background:"rgba(255,255,255,.04)",borderRadius:10,border:"1px solid rgba(255,255,255,.06)"}}>
                    <div style={{fontWeight:600,fontSize:13,marginBottom:3}}>{ZONE_ICONS[z.icon]} {z.title}</div>
                    <div style={{color:"var(--mt)",fontSize:11,lineHeight:1.5}}>{z.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {journey.nextStep&&(
            <div style={{marginBottom:16}}>
              <div className="lbl" style={{marginBottom:8}}>Next Right Step (7 Days)</div>
              <p style={{fontSize:15,fontWeight:600}}>{journey.nextStep.emoji} {journey.nextStep.title}</p>
            </div>
          )}
          {roadmap&&(
            <div style={{marginBottom:16}}>
              <div className="lbl" style={{marginBottom:8}}>90-Day Roadmap</div>
              <p style={{fontStyle:"italic",fontSize:13,marginBottom:8,color:"rgba(0,0,0,.6)"}}>{roadmap.why}</p>
              {(roadmap.weeks||[]).map((w,i)=>(
                <div key={i} style={{fontSize:12,marginBottom:4}}>
                  <strong>{w.range} — {w.label}:</strong> {w.focus}
                </div>
              ))}
            </div>
          )}
          {journey.quadrants&&(
            <div>
              <div className="lbl" style={{marginBottom:10}}>Vision Quadrants</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                {QUAD_META.map(({key,title})=>(
                  <div key={key}>
                    <div style={{fontSize:12,fontWeight:600,marginBottom:5,color:"var(--mt)"}}>{title}</div>
                    <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                      {(journey.quadrants[key]||[]).map((it,i)=>(
                        <span key={i} style={{padding:"3px 9px",borderRadius:100,fontSize:11,background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)"}}>{it}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(175px,1fr))",gap:12,marginBottom:28}}>
          {[
            {e:"📋",t:"Copy Statement",d:"Paste anywhere instantly",a:copy,l:copied?"✓ Copied!":"Copy"},
            {e:"📄",t:"Print / PDF",d:"Save as PDF via print",a:()=>window.print(),l:"Print"},
            {e:"🚀",t:"Share",d:"Share via your apps",a:share,l:"Share"},
          ].map(({e,t,d,a,l})=>(
            <div key={t} className="card" style={{padding:18,display:"flex",flexDirection:"column",gap:10}}>
              <span style={{fontSize:26}}>{e}</span>
              <div><div style={{fontWeight:600,fontSize:14,marginBottom:3}}>{t}</div><div style={{color:"var(--mt)",fontSize:12}}>{d}</div></div>
              <button className="btn btn-g sm" onClick={a}>{l}</button>
            </div>
          ))}
        </div>

        {/* 90-DAY ROADMAP */}
        <div className="card afu" style={{padding:28,marginBottom:28,borderColor:"rgba(157,78,221,.2)",background:"radial-gradient(ellipse at top left,rgba(157,78,221,.07) 0%,transparent 60%)"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,flexWrap:"wrap",gap:10}}>
            <div>
              <div className="lbl" style={{marginBottom:4,color:"var(--p)"}}>Your 90-Day Clarity Map</div>
              <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:700}}>From scattered → coherent</h3>
            </div>
            {!roadmap && !genRoadmap && (
              <button className="btn btn-p sm" onClick={generateRoadmap}>✦ Generate Roadmap</button>
            )}
          </div>

          {genRoadmap && (
            <div style={{textAlign:"center",padding:"24px 0"}}>
              <div className="spin" style={{width:36,height:36,margin:"0 auto 12px",border:"3px solid rgba(255,255,255,.1)",borderTopColor:"var(--p)"}}/>
              <p style={{color:"var(--mt)",fontSize:13}}>Building your clarity map…</p>
            </div>
          )}

          {roadmap && (
            <div style={{display:"flex",flexDirection:"column",gap:20}}>
              {/* Why it matters */}
              <div style={{padding:"14px 18px",borderRadius:12,background:"rgba(0,217,255,.06)",border:"1px solid rgba(0,217,255,.15)"}}>
                <div className="lbl" style={{marginBottom:6}}>Why This Must Happen</div>
                <p style={{fontFamily:"'Playfair Display',serif",fontSize:15,fontStyle:"italic",lineHeight:1.6,color:"#fff"}}>{roadmap.why}</p>
              </div>

              {/* 3 key actions */}
              <div>
                <div className="lbl" style={{marginBottom:10}}>3 Actions That Actually Move It Forward</div>
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  {(roadmap.actions||[]).map((a,i)=>(
                    <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"12px 14px",borderRadius:10,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)"}}>
                      <span style={{fontSize:18,fontWeight:700,color:"var(--c)",fontFamily:"'Playfair Display',serif",flexShrink:0,lineHeight:1.3}}>{a.n}.</span>
                      <div>
                        <div style={{fontWeight:600,fontSize:14,marginBottom:3}}>{a.title}</div>
                        <div style={{color:"var(--mt)",fontSize:13,lineHeight:1.5}}>{a.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly milestones */}
              <div>
                <div className="lbl" style={{marginBottom:10}}>90-Day Milestones</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:10}}>
                  {(roadmap.weeks||[]).map((w,i)=>(
                    <div key={i} style={{padding:"14px 16px",borderRadius:10,
                      background: i===0?"rgba(0,217,255,.07)":i===1?"rgba(157,78,221,.07)":"rgba(255,214,10,.07)",
                      border: `1px solid ${i===0?"rgba(0,217,255,.2)":i===1?"rgba(157,78,221,.2)":"rgba(255,214,10,.2)"}`,
                    }}>
                      <div style={{fontSize:10,fontWeight:700,letterSpacing:".07em",marginBottom:4,
                        color: i===0?"var(--c)":i===1?"var(--p)":"var(--g)"}}>{w.range} · {w.label.toUpperCase()}</div>
                      <p style={{color:"var(--mt)",fontSize:12,lineHeight:1.55}}>{w.focus}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reward */}
              {roadmap.reward && (
                <div style={{padding:"12px 16px",borderRadius:10,background:"rgba(255,214,10,.06)",border:"1px solid rgba(255,214,10,.15)",display:"flex",gap:10,alignItems:"center"}}>
                  <span style={{fontSize:18}}>🎁</span>
                  <div>
                    <div style={{fontSize:11,fontWeight:700,letterSpacing:".06em",color:"var(--g)",marginBottom:2}}>YOUR 90-DAY REWARD</div>
                    <div style={{fontSize:13,color:"rgba(238,242,255,.8)"}}>{roadmap.reward}</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {!roadmap && !genRoadmap && (
            <p style={{color:"var(--mt)",fontSize:13,lineHeight:1.65}}>
              Generate your personalized 90-day roadmap — with weekly milestones, 3 key actions, and a reward to keep you moving.
              <br/>Inspired by the Moonshot Mapping™ methodology by Devon Seegers.
            </p>
          )}
        </div>

        {/* Social cards */}
        <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:700,marginBottom:8}}>Social Cards</h3>
        <p style={{color:"var(--mt)",fontSize:13,marginBottom:16}}>Generate → tap to preview → long-press (iOS) or right-click to save image.</p>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(215px,1fr))",gap:14,marginBottom:36}}>
          {PLATS.map(({id,label,dims,e})=>(
            <div key={id} className="card" style={{padding:18,display:"flex",flexDirection:"column",gap:12}}>
              <div><div style={{fontWeight:600,fontSize:14,marginBottom:2}}>{e} {label}</div><div style={{color:"var(--mt)",fontSize:12}}>{dims}</div></div>
              {cards[id] ? (
                <>
                  <img src={cards[id]} alt={`${label} card`} style={{width:"100%",borderRadius:8,cursor:"pointer",transition:"transform .2s",border:"1px solid rgba(255,255,255,.08)"}}
                    onClick={()=>setModal({platform:id,url:cards[id]})}
                    onMouseEnter={e=>e.target.style.transform="scale(1.02)"} onMouseLeave={e=>e.target.style.transform="scale(1)"}/>
                  <div style={{display:"flex",gap:8}}>
                    <button className="btn btn-p sm" style={{flex:1}} onClick={()=>download(id,cards[id])}>⬇ Download</button>
                    <button className="btn btn-g sm" onClick={()=>setModal({platform:id,url:cards[id]})}>👁</button>
                  </div>
                </>
              ) : (
                <button className="btn btn-g sm" onClick={()=>gen(id)} disabled={genning[id]}>
                  {genning[id]?<><span className="spin" style={{width:15,height:15}}/> Generating…</>:"✦ Generate Card"}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* ─── VIRAL CTA ─── */}
        <div className="card" style={{padding:28,marginBottom:28,background:"radial-gradient(ellipse at bottom right,rgba(0,217,255,.07) 0%,transparent 60%)",borderColor:"rgba(0,217,255,.14)",textAlign:"center"}}>
          <div style={{fontSize:32,marginBottom:12}}>🌍</div>
          <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(18px,4vw,26px)",fontWeight:700,marginBottom:10}}>Challenge your people.</h3>
          <p style={{color:"var(--mt)",fontSize:14,lineHeight:1.7,marginBottom:20,maxWidth:440,margin:"0 auto 20px"}}>
            Imagine if your whole team had a moonshot. Or your family. Or your city. Share this and dare them to discover theirs.
          </p>
          <div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",marginBottom:14}}>
            <button className="btn btn-p" onClick={share} style={{background:"linear-gradient(135deg,#7B2FBE,#C8004E)",animation:"pg 2.5s ease-in-out infinite"}}>🚀 Share WhatsMyMoonshot.ai</button>
            <button className="btn btn-g" onClick={()=>window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent("Just discovered my moonshot on WhatsMyMoonshot.ai 🌙 What's yours?")}&url=${encodeURIComponent("https://WhatsMyMoonshot.ai")}`)}>𝕏 Post to X</button>
            <button className="btn btn-g" onClick={()=>window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://WhatsMyMoonshot.ai")}`)}>in LinkedIn</button>
          </div>
          <div style={{display:"flex",gap:8,maxWidth:440,margin:"0 auto"}}>
            <input className="input" style={{flex:1,fontSize:13,padding:"10px 14px"}} readOnly value="https://WhatsMyMoonshot.ai"/>
            <button className="btn btn-g sm" onClick={()=>{navigator.clipboard.writeText("https://WhatsMyMoonshot.ai");alert("Link copied!");}}>Copy</button>
          </div>
        </div>

        <div style={{textAlign:"center"}}>
          <button className="btn btn-g" onClick={()=>go("home")}>↩ Start a New Journey</button>
        </div>
      </div>
      <style>{`@media print{.no-print{display:none!important}#print-content{background:white!important;color:black!important;border:none!important}}`}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// UPGRADE MODAL
// ─────────────────────────────────────────────────────────────────
function UpgradeModal({ onClose, onSuccess }) {
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(4,12,26,.92)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center",padding:20,backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)"}} onClick={onClose}>
      <div className="card asi" style={{maxWidth:460,width:"100%",padding:36,textAlign:"center",borderColor:"rgba(0,217,255,.22)"}} onClick={e=>e.stopPropagation()}>
        <div style={{fontSize:36,marginBottom:12}}>🚀</div>
        <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,5vw,30px)",fontWeight:700,marginBottom:10}}>
          Unlock Your Full<br/><span className="grad">Moonshot Package</span>
        </h2>
        <div style={{display:"inline-flex",alignItems:"baseline",gap:6,margin:"14px 0 22px",background:"rgba(0,217,255,.08)",padding:"10px 24px",borderRadius:100,border:"1px solid rgba(0,217,255,.22)"}}>
          <span style={{fontSize:38,fontWeight:700,color:"var(--c)",fontFamily:"'Playfair Display',serif"}}>$29</span>
          <span style={{color:"var(--mt)",fontSize:14}}>one time</span>
        </div>
        <ul style={{listStyle:"none",textAlign:"left",marginBottom:26,display:"flex",flexDirection:"column",gap:11}}>
          {["PDF download — print & frame your moonshot","Email delivery of your full results","Save your journey & return anytime","Unlimited AI regenerations"].map((f,i)=>(
            <li key={i} style={{display:"flex",alignItems:"center",gap:10,fontSize:14}}>
              <span style={{color:"var(--c)",fontWeight:700,flexShrink:0}}>✓</span>{f}
            </li>
          ))}
        </ul>
        <button className="btn btn-p lg apg" style={{width:"100%",marginBottom:12}}
          onClick={()=>{ onSuccess && onSuccess(); onClose(); }}>
          Upgrade for $29 →
        </button>
        <button className="btn btn-g sm" style={{width:"100%"}} onClick={onClose}>Maybe later</button>
        <p style={{fontSize:11,color:"var(--mt)",marginTop:14}}>One-time · No subscription · Instant access · 30-day refund</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// EMAIL GATE
// ─────────────────────────────────────────────────────────────────
function EmailGateScreen({ go, journey, setJourney }) {
  const [email, setEmail] = useState("");
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const reveal = () => {
    if (!valid) return;
    setJourney(p => ({...p, email: email.trim()}));
    go("statement");
  };
  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <Aurora/><Stars n={70}/>
      <div className="rel" style={{minHeight:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 24px",textAlign:"center"}}>
        <div className="afu">
          <div style={{fontSize:64,marginBottom:16,display:"inline-block",animation:"cb .8s ease"}}>🌙</div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,6vw,48px)",fontWeight:700,marginBottom:14}}>
            {journey.name ? `${journey.name}, your` : "Your"} moonshot<br/><span className="grad">is ready.</span>
          </h1>
          <p style={{color:"var(--mt)",fontSize:15,lineHeight:1.68,maxWidth:360,margin:"0 auto 36px"}}>
            Enter your email and we'll reveal it — plus send you a copy so you never lose it.
          </p>
        </div>
        <div className="card afu" style={{width:"100%",maxWidth:420,padding:28,borderColor:"rgba(0,217,255,.15)",animationDelay:".1s"}}>
          <label style={{display:"block",marginBottom:10,fontWeight:600,fontSize:15,textAlign:"left"}}>Where should we send it?</label>
          <input className="input" type="email" placeholder="your@email.com" value={email}
            onChange={e=>setEmail(e.target.value)}
            onKeyDown={e=>e.key==="Enter"&&valid&&reveal()}
            style={{marginBottom:16}}/>
          <button className="btn btn-p" style={{width:"100%",animation:valid?"pg 2.5s ease-in-out infinite":""}} disabled={!valid} onClick={reveal}>
            ✦ Reveal My Moonshot →
          </button>
        </div>
        <p style={{fontSize:12,color:"var(--mt)",marginTop:16}}>No spam. Just your results and the occasional moonshot insight.</p>
        <button className="btn btn-g sm" style={{marginTop:10,opacity:.48}} onClick={()=>go("statement")}>Skip for now →</button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// LANDING PAGE
// ─────────────────────────────────────────────────────────────────
function LandingScreen({ go }) {
  const [faqOpen, setFaqOpen] = useState(null);
  const SAMPLE = "I am here to heal the fracture between technology and human connection so that the next generation grows up in a world that amplifies their humanity rather than diminishes it.";
  const STEPS = [
    {n:"01",e:"🫁",t:"Externalize", d:"A breathing exercise lands you in your body. Then five questions pull out what you've never quite said out loud — the dream you keep circling, the decision you're avoiding, the thing you'd regret not building."},
    {n:"02",e:"🗺️",t:"Visualize",   d:"See the whole system. Your identity, your energy, your gifts, and the world's deepest needs — mapped side by side. Unconscious patterns become obvious. Self-sabotage loses its camouflage."},
    {n:"03",e:"⭐",t:"Synthesize",  d:"AI collapses everything into one moonshot statement, three genius zones, and a 90-day roadmap. You don't leave motivated. You leave oriented."},
  ];
  const TESTIMONIALS = [
    {name:"Sarah K.",    role:"Executive Coach, ICF PCC",  q:"Nothing gets to the heart of purpose faster than this. One session and my client had language she'd been searching for for 15 years.", av:"SK"},
    {name:"Marcus T.",   role:"Founder & CEO",             q:"I was 8 years in and still couldn't articulate my why. Twenty minutes on WhatsMyMoonshot and I had it. Sent it to my whole team.",     av:"MT"},
    {name:"Dr. Amara O.",role:"Leadership Professor",      q:"I now start every semester with this exercise. Watching students discover their moonshot in a single session is genuinely moving.",        av:"AO"},
  ];
  const MOONSHOTS = [
    {e:"🚀",t:"Mars Colonization",   d:"SpaceX Starship making humanity multi-planetary"},
    {e:"🧬",t:"CRISPR Gene Editing", d:"Rewriting DNA to cure genetic disease forever"},
    {e:"⚡",t:"Nuclear Fusion",       d:"Unlimited clean energy from seawater"},
    {e:"🧠",t:"Artificial General Intelligence", d:"The first non-human intelligence on Earth"},
    {e:"🌊",t:"Seabed 2030",          d:"Mapping our entire ocean floor for the first time"},
    {e:"🌍",t:"The UN SDGs",          d:"193 nations committed to ending poverty by 2030"},
  ];
  const TIERS = [
    { name:"Starter",price:"Free",   period:"",          cta:"Start Free →",      hi:false, c:"rgba(255,255,255,.04)", b:"rgba(255,255,255,.08)",
      f:["Complete the full journey","AI moonshot statement","3 genius zones","Social cards — free to generate & share","Copy to clipboard"], fn:()=>go("breathe") },
    { name:"Pro",    price:"$29",    period:"one time",  cta:"Get Pro →",          hi:true,  c:"rgba(0,217,255,.06)",  b:"rgba(0,217,255,.28)",
      f:["Everything in Starter","Free social cards for all 3 platforms","PDF export","Email delivery","Unlimited regenerations","Save & return anytime"], fn:()=>alert("🔌 Connect Stripe to enable payments.\n\nSee the $1M Strategy Doc for exact steps.") },
    { name:"Teams",  price:"$299",   period:"/month",    cta:"Start Team Trial →", hi:false, c:"rgba(157,78,221,.06)", b:"rgba(157,78,221,.25)",
      f:["25 team seats","Team dashboard","Alignment reports","Group facilitation","Priority support"], fn:()=>alert("📧 Email hello@whatsmymoonshot.ai to start your team trial.") },
  ];
  const FAQ = [
    {q:"How long does it take?",          a:"About 15 minutes — three breathing cycles, five deep questions, and your AI-generated statement."},
    {q:"Is my data private?",             a:"Yes. Your responses are processed in real time to craft your statement and are not stored on our servers. Your journey is yours alone."},
    {q:"Can I redo it?",                  a:"Absolutely. Many people return every 90 days as their vision evolves. Each journey produces a fresh statement."},
    {q:"What makes it trauma-informed?",  a:"The pacing, language, and prompts are designed to feel safe and non-invasive. The breathing grounds you before the deeper reflection begins."},
    {q:"I'm a coach — can I use this?",   a:"Yes, and we built a plan for exactly that. $97/month for unlimited client sessions, client management, and group reports."},
  ];
  return (
    <div style={{background:"var(--bg)",overflowX:"hidden",position:"relative"}}>
      <Aurora/><Stars/>
      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,padding:"14px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",background:"rgba(4,12,26,.78)",borderBottom:"1px solid rgba(255,255,255,.06)"}}>
        <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:17,cursor:"pointer"}} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
          <span style={{color:"#fff"}}>WhatsMyMoonshot</span><span className="glow-c">.ai</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <a href="https://devonseegers.com" target="_blank" rel="noopener noreferrer" className="btn btn-g sm" style={{fontSize:13,textDecoration:"none"}}>Moonshot Mapping™</a>
          <button className="btn btn-p sm" onClick={()=>go("breathe")}>Start Free →</button>
        </div>
      </nav>
      {/* HERO */}
      <section style={{minHeight:"92vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"80px 24px 60px",textAlign:"center",position:"relative",zIndex:1}}>
        <div className="afl" style={{marginBottom:36}}><Moon size={86}/></div>
        <div className="afu" style={{marginBottom:16,animationDelay:".05s"}}>
          <span style={{display:"inline-block",padding:"5px 16px",borderRadius:100,border:"1px solid rgba(0,217,255,.3)",background:"rgba(0,217,255,.07)",fontSize:12,fontWeight:700,letterSpacing:".08em",color:"var(--c)"}}>
            THE SECOND RENAISSANCE IS HERE
          </span>
        </div>
        <h1 className="afu" style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(42px,9vw,96px)",fontWeight:700,lineHeight:1.0,letterSpacing:"-.03em",margin:"0 auto 20px",animationDelay:".1s"}}>
          What's your<br/><span className="grad">moonshot?</span>
        </h1>
        <p className="afu" style={{color:"var(--mt)",fontSize:"clamp(15px,2.8vw,18px)",maxWidth:440,margin:"0 auto 44px",lineHeight:1.68,animationDelay:".2s"}}>
          A 15-minute journey to name your soul-level vision — the one that's bigger than your career, magnetic to the right people, and impossible without becoming who you're meant to be.
        </p>
        <div className="afu" style={{display:"flex",flexWrap:"wrap",gap:12,justifyContent:"center",marginBottom:16,animationDelay:".3s"}}>
          <button className="btn btn-p xl" onClick={()=>go("breathe")} style={{background:"linear-gradient(135deg,#00B8D9,#7B2FBE,#C8004E)",backgroundSize:"200% auto",animation:"shim 3s linear infinite, pg 2.5s ease-in-out infinite"}}>
            ✦ Discover My Moonshot
          </button>
        </div>
        <p className="afu" style={{color:"var(--mt)",fontSize:12,animationDelay:".4s"}}>Free · No account needed · 15 minutes</p>
      </section>

      {/* WHAT IS A MOONSHOT */}
      <section style={{padding:"20px 24px 60px",position:"relative",zIndex:1}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <div className="lbl" style={{marginBottom:12}}>What is a Moonshot?</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,5vw,44px)",fontWeight:700,marginBottom:16,lineHeight:1.1}}>
              Not a goal. Not a dream.<br/><span className="grad">A direction of travel.</span>
            </h2>
            <p style={{color:"var(--mt)",fontSize:"clamp(14px,2.5vw,17px)",maxWidth:560,margin:"0 auto",lineHeight:1.72}}>
              The term "moonshot" comes from the 1969 Apollo mission — the audacious commitment to land a human on the moon before anyone knew if it was even possible. Today, a moonshot is any vision with the same character: <em style={{color:"rgba(238,242,255,.75)"}}>10x impact, not 10% improvement.</em>
            </p>
          </div>

          {/* 3 criteria cards */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:14,marginBottom:44}}>
            {[
              {n:"01",icon:"🌍",title:"Affects billions",     body:"A moonshot solves a problem at civilizational scale — not niche, not incremental. It changes life for millions of people."},
              {n:"02",icon:"⚡",title:"Demands a breakthrough", body:"It requires technology or thinking that doesn't exist yet. It should sound audacious — even impossible — at first."},
              {n:"03",icon:"🔭",title:"Has a glimmer of hope", body:"Not pure fantasy. A moonshot is grounded enough to be achievable in 5–10 years with relentless commitment and the right people."},
            ].map((c,i)=>(
              <div key={i} className="card" style={{padding:24,position:"relative",overflow:"hidden",borderColor:"rgba(0,217,255,.08)"}}>
                <div style={{position:"absolute",top:8,right:14,fontFamily:"'Playfair Display',serif",fontSize:48,fontWeight:700,color:"rgba(0,217,255,.05)",lineHeight:1}}>{c.n}</div>
                <div style={{fontSize:32,marginBottom:12}}>{c.icon}</div>
                <h3 style={{fontWeight:700,fontSize:16,marginBottom:8,color:"#fff"}}>{c.title}</h3>
                <p style={{color:"var(--mt)",fontSize:13,lineHeight:1.65}}>{c.body}</p>
              </div>
            ))}
          </div>

          {/* Devon's deeper definition */}
          <div className="card" style={{padding:"28px 32px",marginBottom:44,borderColor:"rgba(157,78,221,.2)",background:"radial-gradient(ellipse at top left, rgba(157,78,221,.08) 0%, transparent 60%)",textAlign:"center"}}>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(17px,3vw,22px)",lineHeight:1.65,color:"#fff",marginBottom:10}}>
              "A moonshot is a <em>soul-level direction of travel</em> —<br/>bigger than your lifetime, magnetic to the right allies,<br/>impossible without transformation."
            </p>
            <a href="https://devonseegers.com" target="_blank" rel="noopener noreferrer" style={{color:"var(--p)",fontSize:13,fontWeight:600,textDecoration:"none",letterSpacing:".03em"}}>
              — Devon Seegers, Moonshot Mapping™
            </a>
          </div>

          {/* Real-world moonshots grid */}
          <div style={{textAlign:"center",marginBottom:24}}>
            <div className="lbl" style={{marginBottom:8}}>The Second Renaissance</div>
            <p style={{color:"var(--mt)",fontSize:14,lineHeight:1.65,maxWidth:520,margin:"0 auto"}}>
              Historians will look back at this era the way we see the Renaissance — as a civilization reaching for something greater than itself. These are the moonshots happening right now:
            </p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10,marginBottom:12}}>
            {MOONSHOTS.map((m,i)=>(
              <div key={i} className="card" style={{padding:"14px 16px",display:"flex",alignItems:"center",gap:12,borderColor:"rgba(255,255,255,.05)"}}>
                <span style={{fontSize:22,flexShrink:0}}>{m.e}</span>
                <div>
                  <div style={{fontWeight:600,fontSize:13,marginBottom:2}}>{m.t}</div>
                  <div style={{color:"var(--mt)",fontSize:11,lineHeight:1.4}}>{m.d}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{textAlign:"center",color:"var(--mt)",fontSize:12,marginTop:8}}>
            Source: <em>Moonshots of the Second Renaissance</em> research · UN SDGs · Google X · XPRIZE Foundation
          </p>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{padding:"0 24px 60px",position:"relative",zIndex:1}}>
        <div style={{maxWidth:700,margin:"0 auto",display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"clamp(20px,5vw,60px)"}}>
          {[["1,000+","Moonshots Discovered"],["30+","Countries"],["4.9 ★","Avg Rating"],["98%","Would Recommend"]].map(([n,l])=>(
            <div key={l} style={{textAlign:"center"}}>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,5vw,40px)",fontWeight:700,color:"var(--c)"}}>{n}</div>
              <div style={{color:"var(--mt)",fontSize:12,marginTop:4}}>{l}</div>
            </div>
          ))}
        </div>
      </section>
      {/* HOW IT WORKS */}
      <section style={{padding:"40px 24px 60px",position:"relative",zIndex:1}}>
        <div style={{maxWidth:920,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:44}}>
            <div className="lbl" style={{marginBottom:10}}>How It Works</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,5vw,42px)",fontWeight:700}}>Three steps to your <span className="grad">moonshot</span></h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:20}}>
            {STEPS.map((s,i)=>(
              <div key={i} className="card" style={{padding:28,textAlign:"center",position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",top:12,right:16,fontFamily:"'Playfair Display',serif",fontSize:52,fontWeight:700,color:"rgba(0,217,255,.07)",lineHeight:1,pointerEvents:"none"}}>{s.n}</div>
                <div style={{fontSize:40,marginBottom:14}}>{s.e}</div>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:700,marginBottom:10}}>{s.t}</h3>
                <p style={{color:"var(--mt)",fontSize:14,lineHeight:1.65}}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SAMPLE OUTPUT */}
      <section style={{padding:"20px 24px 60px",position:"relative",zIndex:1}}>
        <div style={{maxWidth:660,margin:"0 auto",textAlign:"center"}}>
          <div className="lbl" style={{marginBottom:10}}>Sample Output</div>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,34px)",fontWeight:700,marginBottom:28}}>This is what <span className="grad">clarity</span> looks like</h2>
          <div className="card" style={{padding:36,background:"radial-gradient(ellipse at top,rgba(0,217,255,.08) 0%,transparent 70%)",borderColor:"rgba(0,217,255,.2)"}}>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(16px,3.5vw,21px)",fontStyle:"italic",lineHeight:1.65,color:"#fff",marginBottom:14}}>"{SAMPLE}"</p>
            <div style={{color:"var(--c)",fontSize:12,fontWeight:700,letterSpacing:".05em"}}>SAMPLE MOONSHOT STATEMENT</div>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section style={{padding:"20px 24px 60px",position:"relative",zIndex:1}}>
        <div style={{maxWidth:960,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,5vw,40px)",fontWeight:700}}>What people are saying</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:18}}>
            {TESTIMONIALS.map((t,i)=>(
              <div key={i} className="card" style={{padding:26}}>
                <p style={{fontFamily:"'Playfair Display',serif",fontStyle:"italic",lineHeight:1.68,marginBottom:20,color:"rgba(238,242,255,.85)",fontSize:15}}>"{t.q}"</p>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:42,height:42,borderRadius:"50%",background:"linear-gradient(135deg,var(--c),var(--p))",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,flexShrink:0,color:"#040C1A"}}>{t.av}</div>
                  <div><div style={{fontWeight:600,fontSize:14}}>{t.name}</div><div style={{color:"var(--mt)",fontSize:12,marginTop:2}}>{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PRICING */}
      <section id="lp-pricing" style={{padding:"40px 24px 60px",position:"relative",zIndex:1}}>
        <div style={{maxWidth:960,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <div className="lbl" style={{marginBottom:10}}>Pricing</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,5vw,40px)",fontWeight:700}}>Start free. <span className="grad">Upgrade when ready.</span></h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:18}}>
            {TIERS.map((t,i)=>(
              <div key={i} className="card" style={{padding:28,background:t.c,borderColor:t.b,position:"relative",display:"flex",flexDirection:"column",gap:16}}>
                {t.hi&&<div style={{position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",background:"linear-gradient(135deg,var(--c),var(--p))",padding:"4px 16px",borderRadius:100,fontSize:11,fontWeight:700,whiteSpace:"nowrap",color:"#040C1A"}}>Most Popular</div>}
                <div>
                  <div style={{fontSize:11,fontWeight:700,letterSpacing:".08em",color:"var(--mt)",marginBottom:8}}>{t.name.toUpperCase()}</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:5}}>
                    <span style={{fontFamily:"'Playfair Display',serif",fontSize:40,fontWeight:700,color:t.hi?"var(--c)":"#fff"}}>{t.price}</span>
                    {t.period&&<span style={{color:"var(--mt)",fontSize:13}}>{t.period}</span>}
                  </div>
                </div>
                <ul style={{listStyle:"none",flex:1,display:"flex",flexDirection:"column",gap:9}}>
                  {t.f.map((f,j)=><li key={j} style={{display:"flex",gap:9,alignItems:"flex-start",fontSize:13}}><span style={{color:"var(--c)",flexShrink:0}}>✓</span>{f}</li>)}
                </ul>
                <button className={`btn ${t.hi?"btn-p apg":"btn-g"}`} onClick={t.fn} style={{width:"100%"}}>{t.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* MOONSHOT MAPPING CTA */}
      <section style={{padding:"20px 24px 60px",position:"relative",zIndex:1}}>
        <div style={{maxWidth:720,margin:"0 auto"}}>
          <div className="card" style={{padding:40,background:"radial-gradient(ellipse at bottom left,rgba(0,217,255,.07) 0%,rgba(157,78,221,.08) 100%)",borderColor:"rgba(0,217,255,.2)",textAlign:"center",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,right:0,padding:"6px 16px",background:"linear-gradient(135deg,var(--c),var(--p))",fontSize:11,fontWeight:700,color:"#040C1A",borderBottomLeftRadius:12}}>DEEP WORK</div>
            <div style={{fontSize:36,marginBottom:12}}>🗺️</div>
            <div className="lbl" style={{marginBottom:10,color:"var(--c)"}}>Ready to go deeper?</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,32px)",fontWeight:700,marginBottom:14}}>
              Moonshot Mapping™<br/><span style={{color:"var(--mt)",fontWeight:400,fontSize:"0.75em"}}>with Devon Seegers</span>
            </h2>
            <p style={{color:"var(--mt)",fontSize:14,lineHeight:1.75,maxWidth:480,margin:"0 auto 24px"}}>
              WhatsMyMoonshot gives you your statement. <strong style={{color:"rgba(238,242,255,.85)"}}>Moonshot Mapping™ gives you the map.</strong> A 2-hour, 1:1 session that collapses the gap between who you are and who your mission needs you to become — producing radical clarity, internal congruence, and a decision architecture for your next bold move.
            </p>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:10,marginBottom:20}}>
              {["Radical clarity on your highest calling","Alignment between your brand, being & beliefs","Decision architecture — what to say yes to","Your complete visual clarity map"].map((f,i)=>(
                <div key={i} style={{padding:"6px 14px",borderRadius:100,background:"rgba(0,217,255,.08)",border:"1px solid rgba(0,217,255,.2)",fontSize:12,color:"var(--c)",fontWeight:500}}>{f}</div>
              ))}
            </div>
            <blockquote style={{fontFamily:"'Playfair Display',serif",fontStyle:"italic",fontSize:15,color:"rgba(238,242,255,.7)",marginBottom:24,lineHeight:1.6}}>
              "I've spent $50K+ on coaching. Two hours with Devon gave me more clarity than all of it."<br/>
              <span style={{fontSize:12,color:"var(--mt)",fontStyle:"normal",fontWeight:600}}>— TEDx Speaker + Men's Work Facilitator</span>
            </blockquote>
            <a href="https://devonseegers.com" target="_blank" rel="noopener noreferrer"
              className="btn btn-p lg" style={{display:"inline-flex",textDecoration:"none",background:"linear-gradient(135deg,#00B8D9,#7B2FBE)",animation:"pg 2.5s ease-in-out infinite"}}>
              Explore Moonshot Mapping™ →
            </a>
            <p style={{fontSize:12,color:"var(--mt)",marginTop:14}}>devonseegers.com</p>
          </div>
        </div>
      </section>

      {/* FOR COACHES */}
      <section style={{padding:"20px 24px 60px",position:"relative",zIndex:1}}>
        <div style={{maxWidth:720,margin:"0 auto"}}>
          <div className="card" style={{padding:40,background:"radial-gradient(ellipse at top right,rgba(157,78,221,.12) 0%,transparent 60%)",borderColor:"rgba(157,78,221,.25)",textAlign:"center"}}>
            <div style={{fontSize:36,marginBottom:14}}>🎓</div>
            <div className="lbl" style={{marginBottom:10}}>For Coaches & Facilitators</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,34px)",fontWeight:700,marginBottom:14}}>The deepest purpose tool<br/>you'll ever use with clients.</h2>
            <p style={{color:"var(--mt)",fontSize:14,lineHeight:1.72,maxWidth:480,margin:"0 auto 28px"}}>License WhatsMyMoonshot for your entire practice. One session often replaces three hours of intake work. Unlimited clients, client dashboard, group reports, white-label option.</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:12,justifyContent:"center",marginBottom:14}}>
              <button className="btn btn-p lg" style={{background:"linear-gradient(135deg,#7B2FBE,#C8004E)"}} onClick={()=>alert("📧 Email hello@whatsmymoonshot.ai to start your coach plan")}>Start Coach Plan — $97/mo →</button>
              <button className="btn btn-g" onClick={()=>alert("📅 Book a demo at calendly.com/whatsmymoonshot")}>Book a Demo</button>
            </div>
            <p style={{fontSize:12,color:"var(--mt)"}}>$97/mo solo · $297/mo studio (5 seats) · Enterprise available</p>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section style={{padding:"20px 24px 60px",position:"relative",zIndex:1}}>
        <div style={{maxWidth:620,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:32}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,5vw,36px)",fontWeight:700}}>Common questions</h2>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {FAQ.map((item,i)=>(
              <div key={i} className="card" style={{overflow:"hidden"}}>
                <button onClick={()=>setFaqOpen(faqOpen===i?null:i)} style={{width:"100%",background:"none",border:"none",padding:"17px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",color:"var(--tx)",fontSize:15,fontWeight:600,textAlign:"left",gap:12}}>
                  {item.q}<span style={{color:"var(--c)",fontSize:22,transition:"transform .2s",transform:faqOpen===i?"rotate(45deg)":"none",flexShrink:0,lineHeight:1}}>+</span>
                </button>
                {faqOpen===i&&<div style={{padding:"0 20px 17px",color:"var(--mt)",fontSize:14,lineHeight:1.7}}>{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FINAL CTA */}
      <section style={{padding:"60px 24px 100px",position:"relative",zIndex:1,textAlign:"center"}}>
        <div className="afl"><Moon size={62}/></div>
        <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,6vw,54px)",fontWeight:700,margin:"28px auto 16px",maxWidth:560,lineHeight:1.1}}>
          Your moonshot is waiting<br/>to be <span className="grad">named.</span>
        </h2>
        <p style={{color:"var(--mt)",fontSize:16,lineHeight:1.65,maxWidth:380,margin:"0 auto 36px"}}>15 minutes. Five questions. One statement that could change everything.</p>
        <button className="btn btn-p xl" onClick={()=>go("breathe")} style={{background:"linear-gradient(135deg,#00B8D9,#7B2FBE,#C8004E)",backgroundSize:"200% auto",animation:"shim 3s linear infinite, pg 2.5s ease-in-out infinite"}}>
          ✦ Start Free Now
        </button>
        <p style={{color:"var(--mt)",fontSize:12,marginTop:14}}>No account. No credit card. Just clarity.</p>
      </section>
      {/* FOOTER */}
      <footer style={{borderTop:"1px solid rgba(255,255,255,.06)",padding:"24px",textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"6px 20px",marginBottom:10}}>
          {["Privacy","Terms","Coach Portal","Contact"].map(l=>(
            <button key={l} style={{background:"none",border:"none",color:"var(--mt)",cursor:"pointer",fontSize:12,fontFamily:"'DM Sans',sans-serif",padding:"4px 0"}}>{l}</button>
          ))}
        </div>
        <p style={{color:"var(--mt)",fontSize:12}}>
          © 2025 WhatsMyMoonshot.ai · Built with 💙 by{" "}
          <a href="https://devonseegers.com" target="_blank" rel="noopener noreferrer" style={{color:"var(--c)",textDecoration:"none",fontWeight:600}}>Devon Seegers</a>
        </p>
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// APP ROOT
// ─────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────
// DEVELOPER KEY MODAL (optional, not shown to regular users)
// ─────────────────────────────────────────────────────────────────
function DevKeyModal({ onClose }) {
  const [key, setKey] = useState(sessionStorage.getItem("mmk") || "");
  const [status, setStatus] = useState("idle"); // idle | testing | ok | err
  const [msg, setMsg] = useState("");
  const valid = key.trim().startsWith("sk-ant-");

  const test = async () => {
    setStatus("testing"); setMsg("");
    try {
      sessionStorage.setItem("mmk", key.trim());
      await callAI("Reply with only: ok");
      setStatus("ok"); setMsg("Connected! AI features are now active.");
      setTimeout(onClose, 1500);
    } catch(e) {
      setStatus("err"); setMsg("Invalid key: " + e.message);
      sessionStorage.removeItem("mmk");
    }
  };

  const clear = () => { sessionStorage.removeItem("mmk"); setKey(""); setStatus("idle"); setMsg("Key removed."); };

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(4,12,26,.88)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center",padding:20,backdropFilter:"blur(16px)"}} onClick={onClose}>
      <div className="card asi" style={{maxWidth:420,width:"100%",padding:28,borderColor:"rgba(0,217,255,.2)"}} onClick={e=>e.stopPropagation()}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
          <span style={{fontWeight:700,fontSize:15}}>🔑 Developer Mode</span>
          <button className="btn btn-g sm" onClick={onClose} style={{padding:"6px 12px",fontSize:12}}>✕ Close</button>
        </div>
        <p style={{color:"var(--mt)",fontSize:13,lineHeight:1.6,marginBottom:16}}>
          Add your Anthropic API key to enable AI features. Get one free at{" "}
          <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" style={{color:"var(--c)"}}>console.anthropic.com</a>.
        </p>
        <input className="input" type="password" placeholder="sk-ant-api03-..." value={key}
          onChange={e=>{setKey(e.target.value);setStatus("idle");setMsg("");}}
          onKeyDown={e=>e.key==="Enter"&&valid&&test()}
          style={{marginBottom:10,fontFamily:"monospace",fontSize:13}}/>
        {msg && <p style={{fontSize:13,marginBottom:10,color:status==="ok"?"var(--c)":status==="err"?"var(--pk)":"var(--mt)"}}>{msg}</p>}
        <div style={{display:"flex",gap:8}}>
          <button className="btn btn-p" style={{flex:1}} disabled={!valid||status==="testing"} onClick={test}>
            {status==="testing"?<><span className="spin" style={{width:14,height:14}}/> Testing…</>:status==="ok"?"✓ Connected!":"Connect"}
          </button>
          {sessionStorage.getItem("mmk")&&<button className="btn btn-g sm" onClick={clear}>Remove</button>}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("landing");
  const [journey, setJourney] = useState({
    name:"", quadrants:{iLove:[],iAmGreatAt:[],worldNeeds:[],canBePaidFor:[]},
    responses:{}, statement:"", zones:[], nextStep:null, commitmentDays:7,
  });

  const go = useCallback((s, upd={}) => {
    if (upd.name !== undefined) setJourney(p=>({...p,name:upd.name}));
    setScreen(s);
    window.scrollTo({top:0,behavior:"smooth"});
  },[]);

  const screens = {
    landing:     <LandingScreen go={go}/>,
    home:        <HomeScreen go={go}/>,
    breathe:     <BreathingScreen go={go}/>,
    name:        <NameScreen go={go}/>,
    journey:     <JourneyScreen go={go} journey={journey} setJourney={setJourney}/>,
    prompts:     <PromptsScreen go={go} journey={journey} setJourney={setJourney}/>,
    emailgate:   <EmailGateScreen go={go} journey={journey} setJourney={setJourney}/>,
    statement:   <StatementScreen go={go} journey={journey} setJourney={setJourney}/>,
    genius:      <GeniusScreen go={go} journey={journey} setJourney={setJourney}/>,
    celebration: <CelebrationScreen go={go} journey={journey}/>,
    export:      <ExportScreen go={go} journey={journey}/>,
  };

  return (<><G/>{screens[screen]||screens.home}</>);
}
