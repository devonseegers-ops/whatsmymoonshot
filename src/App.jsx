import { useState, useEffect, useRef, useCallback } from "react";

// ─── DATA ──────────────────────────────────────────────────────────────────
const SDG_OPTIONS = {
  iLove: ["Quality Education","Good Health & Wellbeing","Clean Water","Affordable Energy","Sustainable Cities","Climate Action","Life on Land","Life Below Water","Zero Hunger","No Poverty","Gender Equality","Peace & Justice","Mental Health","Arts & Culture","Technology for Good","Youth Empowerment","Community Building","Racial Justice","Environmental Stewardship","Economic Equity"],
  iAmGreatAt: ["Teaching & Mentoring","Healthcare & Wellness","Technology & Innovation","Design & Creativity","Leadership & Strategy","Communication","Research & Analysis","Coaching & Facilitation","Writing & Storytelling","Problem Solving","Systems Thinking","Community Organizing","Financial Literacy","Environmental Science","Social Entrepreneurship","Policy & Advocacy","Visual Arts","Music & Performance","Healing Arts","Data Analysis"],
  worldNeeds: ["No Poverty","Zero Hunger","Good Health","Quality Education","Gender Equality","Clean Water","Affordable Energy","Decent Work","Innovation","Reduced Inequalities","Sustainable Cities","Responsible Consumption","Climate Action","Ocean Health","Ecosystem Protection","Peace & Justice","Mental Health Support","Youth Leadership","Racial Justice","Accessible Technology"],
  canBePaidFor: ["Consulting","Design Services","Technology Development","Education & Training","Healthcare Services","Content Creation","Project Management","Research & Writing","Coaching & Therapy","Legal & Policy","Financial Services","Marketing & Branding","Event Production","Media & Journalism","Social Impact Strategy","Environmental Consulting","Non-profit Management","Public Speaking","Product Development","Community Programs"]
};

const PROMPTS = [
  { id:"externalize1", phase:"EXTERNALIZE", roman:"I",
    q:"What's the dream you don't say out loud?",
    sub:"The one you circle around but never name." },
  { id:"externalize2", phase:"EXTERNALIZE", roman:"II",
    q:"What decision are you avoiding?",
    sub:"The one you already know the answer to." },
  { id:"visualize1", phase:"VISUALIZE", roman:"III",
    q:"Who are you when you're doing your most alive work?",
    sub:"Not what you do — who you become." },
  { id:"visualize2", phase:"VISUALIZE", roman:"IV",
    q:"What problem breaks your heart — and why does it break yours?",
    sub:"Your wound is often your calling." },
  { id:"synthesize", phase:"SYNTHESIZE", roman:"V",
    q:"The thing I would regret not building in the next 12–36 months is…",
    sub:"Complete the sentence. Don't think. Write." },
];

const QUAD_META = [
  {key:"iLove", num:"01", title:"I Love", sub:"What lights you up?"},
  {key:"iAmGreatAt", num:"02", title:"I'm Great At", sub:"Your natural genius"},
  {key:"worldNeeds", num:"03", title:"World Needs", sub:"What problems call you?"},
  {key:"canBePaidFor", num:"04", title:"I'm Paid For", sub:"Valuable to others"},
];

const NEXT_STEPS = [
  {id:"research", icon:"◈", title:"Deep Research", desc:"7 days immersed in the minds ahead of you."},
  {id:"prototype", icon:"◎", title:"Build a Prototype", desc:"Ship the simplest version of your idea."},
  {id:"network", icon:"◇", title:"Connect with Mentors", desc:"Reach out to 5 people who've walked this path."},
  {id:"content", icon:"◉", title:"Share Your Vision", desc:"Write, record, or post about your moonshot."},
  {id:"experiment", icon:"△", title:"Run an Experiment", desc:"Test one dimension of your moonshot today."},
];

const ZONE_ICONS = {star:"◈",zap:"⚡",target:"◎",lightbulb:"◉",heart:"♡",rocket:"↗",compass:"◇",flame:"△"};

// ─── AI ────────────────────────────────────────────────────────────────────
async function callAI(prompt, system) {
  const key = typeof __anthropic_key__ !== "undefined" ? __anthropic_key__ :
    (typeof process !== "undefined" ? process.env?.VITE_ANTHROPIC_API_KEY : "") || "";
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method:"POST",
    headers:{"Content-Type":"application/json","x-api-key":key,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},
    body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,
      system:system||"You are a trauma-informed life coach helping people discover their moonshot vision. Be poetic, warm, and visionary.",
      messages:[{role:"user",content:prompt}]}),
  });
  const d = await res.json();
  if (d.error) throw new Error(d.error.message);
  return d.content?.[0]?.text || "";
}

// ─── VOICE ─────────────────────────────────────────────────────────────────
function useVoice(onResult) {
  const [status, setStatus] = useState("idle");
  const recRef = useRef(null);
  const SR = typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const start = useCallback(() => {
    if (!SR) { setStatus("unsupported"); return; }
    const r = new SR(); r.lang="en-US"; r.continuous=true; r.interimResults=false;
    r.onresult = e => { const t=Array.from(e.results).slice(e.resultIndex).map(x=>x[0].transcript).join(" ").trim(); if(t) onResult(t); };
    r.onerror = () => setStatus("idle");
    r.onend = () => setStatus(s => s==="listening"?"idle":s);
    r.start(); recRef.current=r; setStatus("listening");
  },[SR,onResult]);
  const stop = useCallback(() => { recRef.current?.stop(); recRef.current=null; setStatus("idle"); },[]);
  useEffect(() => () => recRef.current?.stop(), []);
  return {status, supported:!!SR, start, stop};
}

// ─── CANVAS SOCIAL CARD ────────────────────────────────────────────────────
function renderCard(statement, name, platform) {
  const dims = {instagram:[1080,1080],linkedin:[1200,627],twitter:[1200,675]};
  const [W,H] = dims[platform]||[1080,1080];
  const cv = document.createElement("canvas"); cv.width=W; cv.height=H;
  const c = cv.getContext("2d");
  c.fillStyle="#07070A"; c.fillRect(0,0,W,H);
  // Subtle vignette
  const vg = c.createRadialGradient(W/2,H/2,H*.1,W/2,H/2,H*.8);
  vg.addColorStop(0,"rgba(20,15,30,0)"); vg.addColorStop(1,"rgba(0,0,0,.7)");
  c.fillStyle=vg; c.fillRect(0,0,W,H);
  // Gold stripe
  c.fillStyle="#F5C842"; c.fillRect(0,0,W,H*.008);
  // Stars
  for(let i=0;i<80;i++){c.fillStyle=`rgba(255,255,255,${Math.random()*.3+.05})`;c.beginPath();c.arc(Math.random()*W,Math.random()*H,Math.random()*1.2+.2,0,Math.PI*2);c.fill();}
  // Small label
  c.font=`600 ${H*.018}px Cinzel,'Times New Roman',serif`;
  c.fillStyle="rgba(245,200,66,.7)"; c.textAlign="center"; c.letterSpacing="0.2em";
  c.fillText("M O O N S H O T", W/2, H*.2);
  // Rule
  c.strokeStyle="rgba(245,200,66,.2)"; c.lineWidth=1;
  c.beginPath(); c.moveTo(W*.15,H*.25); c.lineTo(W*.85,H*.25); c.stroke();
  // Statement
  const fs = Math.min(H*.058,W*.042,58);
  c.font=`italic ${fs}px 'Playfair Display','Times New Roman',Georgia,serif`;
  c.fillStyle="#F5EFE8"; c.textAlign="center"; c.shadowColor="rgba(245,200,66,.2)"; c.shadowBlur=40;
  const words=statement.split(" "), lines=[]; let line="";
  words.forEach(w=>{const t=line?`${line} ${w}`:w;if(c.measureText(t).width>W*.75){lines.push(line);line=w;}else line=t;});
  if(line) lines.push(line);
  const lh=fs*1.5, sy=H/2-(lines.length-1)*lh/2;
  lines.forEach((l,i)=>c.fillText(l,W/2,sy+i*lh));
  // Name
  c.shadowBlur=0; c.font=`${fs*.38}px Cinzel,'Times New Roman',serif`;
  c.fillStyle="rgba(245,200,66,.7)"; c.letterSpacing="0.1em";
  if(name) c.fillText(`— ${name.toUpperCase()}`,W/2,sy+lines.length*lh+fs*.9);
  // Bottom rule
  c.strokeStyle="rgba(245,200,66,.15)"; c.lineWidth=1;
  c.beginPath(); c.moveTo(W*.15,H*.85); c.lineTo(W*.85,H*.85); c.stroke();
  // Domain
  c.font=`${fs*.28}px Cinzel,'Times New Roman',serif`;
  c.fillStyle="rgba(245,200,66,.35)"; c.letterSpacing="0.18em";
  c.fillText("W H A T S M Y M O O N S H O T . A I",W/2,H*.92);
  return cv.toDataURL("image/png");
}

// ─── CONFETTI ──────────────────────────────────────────────────────────────
function Confetti({on}) {
  if(!on) return null;
  const colors=["#F5C842","#E8E0D0","#C8A8FF","#7BFFE4","#FF8E6A"];
  return <>{Array.from({length:60},(_,i)=>(
    <div key={i} style={{position:"fixed",left:`${Math.random()*100}%`,top:"-12px",
      background:colors[i%5],width:4+Math.random()*7,height:4+Math.random()*7,
      borderRadius:Math.random()>.5?"50%":2,zIndex:9999,pointerEvents:"none",
      animation:`conf ${2.5+Math.random()*2}s ${Math.random()*2}s linear forwards`}}/>
  ))}</>;
}

// ─── PARTICLE FIELD ────────────────────────────────────────────────────────
function ParticleField({density=60}) {
  const ref = useRef(null);
  useEffect(() => {
    const cv=ref.current; if(!cv) return;
    const ctx=cv.getContext("2d"); let raf, t=0;
    const resize=()=>{cv.width=innerWidth;cv.height=innerHeight;};
    resize(); addEventListener("resize",resize);
    const pts=Array.from({length:density},()=>({
      x:Math.random()*innerWidth, y:Math.random()*innerHeight,
      vx:(Math.random()-.5)*.12, vy:(Math.random()-.5)*.08,
      r:Math.random()*1.2+.2, o:Math.random()*.4+.05,
    }));
    const draw=()=>{
      ctx.clearRect(0,0,cv.width,cv.height); t+=.008;
      pts.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0)p.x=cv.width; if(p.x>cv.width)p.x=0;
        if(p.y<0)p.y=cv.height; if(p.y>cv.height)p.y=0;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(245,200,66,${p.o*(0.5+0.5*Math.sin(t+p.x*.01))})`;
        ctx.fill();
      });
      raf=requestAnimationFrame(draw);
    };
    draw();
    return ()=>{cancelAnimationFrame(raf);removeEventListener("resize",resize);};
  },[density]);
  return <canvas ref={ref} style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:0}}/>;
}

// ─── GLOBAL STYLES ─────────────────────────────────────────────────────────
const G = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Cinzel:wght@400;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300;1,8..60,400&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --bg:#07070A;
      --gold:#F5C842;
      --gold-dim:rgba(245,200,66,.35);
      --gold-glow:rgba(245,200,66,.12);
      --tx:#F5EFE8;
      --mt:rgba(245,239,232,.45);
      --border:rgba(255,255,255,.06);
      --card:rgba(255,255,255,.025);
    }
    html,body,#root{height:100%;overflow-x:hidden}
    body{font-family:'Source Serif 4','Georgia',serif;background:var(--bg);color:var(--tx);-webkit-font-smoothing:antialiased;overscroll-behavior:none}
    .screen{min-height:100dvh;position:relative;overflow:hidden;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
    .z{position:relative;z-index:1}
    .abs{position:absolute;inset:0;pointer-events:none;z-index:0}
    
    /* Stripe — the signature */
    .stripe{position:absolute;top:0;left:0;right:0;height:3px;background:var(--gold);z-index:10}
    
    /* Typography */
    .serif{font-family:'Playfair Display','Georgia',serif}
    .caps{font-family:'Cinzel','Georgia',serif}
    .body{font-family:'Source Serif 4','Georgia',serif}
    
    /* Buttons */
    .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:13px 28px;font-family:'Cinzel','Georgia',serif;font-size:11px;font-weight:600;letter-spacing:.18em;cursor:pointer;border:none;transition:all .22s ease;-webkit-tap-highlight-color:transparent;touch-action:manipulation;text-transform:uppercase}
    .btn:active{transform:scale(.97)!important}
    .btn:disabled{opacity:.3;cursor:not-allowed;pointer-events:none}
    .btn-gold{background:var(--gold);color:#07070A;border-radius:0}
    .btn-gold:hover{box-shadow:0 0 40px rgba(245,200,66,.4),0 0 80px rgba(245,200,66,.15);transform:translateY(-1px)}
    .btn-outline{background:transparent;border:1px solid rgba(245,200,66,.4);color:var(--gold);border-radius:0}
    .btn-outline:hover{background:rgba(245,200,66,.06);border-color:var(--gold)}
    .btn-ghost{background:transparent;border:1px solid var(--border);color:var(--mt);border-radius:0}
    .btn-ghost:hover{border-color:rgba(255,255,255,.18);color:var(--tx)}
    .btn-lg{padding:17px 44px;font-size:12px}
    .btn-sm{padding:9px 18px;font-size:10px}

    /* Input */
    .input{width:100%;background:rgba(255,255,255,.03);border:1px solid var(--border);border-bottom:1px solid rgba(245,200,66,.3);padding:14px 0;color:var(--tx);font-family:'Source Serif 4','Georgia',serif;font-size:17px;outline:none;transition:all .2s;-webkit-appearance:none;border-radius:0;background:transparent}
    .input:focus{border-bottom-color:var(--gold);box-shadow:0 1px 0 var(--gold)}
    .input::placeholder{color:rgba(245,239,232,.2);font-style:italic}
    textarea.input{resize:none;min-height:140px;line-height:1.75;border:1px solid var(--border);padding:16px;border-bottom:1px solid rgba(245,200,66,.3)}
    textarea.input:focus{border-color:rgba(245,200,66,.3);border-bottom-color:var(--gold)}

    /* Chip */
    .chip{display:inline-flex;align-items:center;padding:6px 14px;font-family:'Cinzel','Georgia',serif;font-size:9px;letter-spacing:.12em;cursor:pointer;border:1px solid var(--border);color:var(--mt);transition:all .15s;-webkit-tap-highlight-color:transparent;text-transform:uppercase;border-radius:0}
    .chip:hover{border-color:var(--gold-dim);color:var(--gold)}
    .chip.on{background:var(--gold-glow);border-color:var(--gold-dim);color:var(--gold)}

    /* Badge */
    .badge{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;font-family:'Cinzel','Georgia',serif;font-size:8px;letter-spacing:.1em;background:var(--gold-glow);border:1px solid var(--gold-dim);color:var(--gold);text-transform:uppercase}
    .badge-x{background:none;border:none;cursor:pointer;color:inherit;opacity:.6;font-size:12px;padding:0}

    /* Card */
    .card{background:var(--card);border:1px solid var(--border)}

    /* Progress */
    .prog{height:1px;background:rgba(255,255,255,.06);overflow:hidden}
    .prog-f{height:100%;background:var(--gold);transition:width .6s cubic-bezier(.4,0,.2,1)}

    /* Animations */
    @keyframes fadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    @keyframes scaleIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
    @keyframes slideRight{from{opacity:0;transform:translateX(-24px)}to{opacity:1;transform:translateX(0)}}
    @keyframes pulse{0%,100%{opacity:.4}50%{opacity:1}}
    @keyframes breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
    @keyframes goldGlow{0%,100%{box-shadow:0 0 0 0 rgba(245,200,66,0)}50%{box-shadow:0 0 60px 20px rgba(245,200,66,.12)}}
    @keyframes spin{to{transform:rotate(360deg)}}
    @keyframes conf{0%{transform:translateY(0) rotate(0deg);opacity:1}100%{transform:translateY(105vh) rotate(720deg);opacity:0}}
    @keyframes typeIn{from{width:0;opacity:0}to{width:100%;opacity:1}}
    @keyframes stripeSlide{from{transform:translateX(-100%)}to{transform:translateX(0)}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
    @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
    @keyframes ringPulse{0%{transform:scale(1);opacity:.6}100%{transform:scale(2.5);opacity:0}}

    .afu{animation:fadeUp .65s cubic-bezier(.2,0,.2,1) both}
    .afi{animation:fadeIn .6s ease both}
    .asi{animation:scaleIn .5s ease both}
    .asr{animation:slideRight .55s ease both}
    .afloat{animation:float 5s ease-in-out infinite}

    /* Statement reveal */
    .word-reveal{display:inline-block;opacity:0;transform:translateY(8px);transition:opacity .4s ease,transform .4s ease}
    .word-reveal.in{opacity:1;transform:translateY(0)}

    /* Voice button */
    .voice-btn{width:54px;height:54px;border-radius:50%;border:1px solid rgba(245,200,66,.3);background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:20px;transition:all .2s;color:var(--gold);flex-shrink:0}
    .voice-btn:hover{background:var(--gold-glow);border-color:var(--gold)}
    .voice-btn.listening{background:rgba(255,80,80,.12);border-color:rgba(255,80,80,.5);color:#ff5050;animation:pulse 1s ease infinite}

    /* Scrollbar */
    ::-webkit-scrollbar{width:3px}
    ::-webkit-scrollbar-thumb{background:rgba(245,200,66,.2)}

    /* Phase badge */
    .phase-badge{display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border:1px solid var(--gold-dim);font-family:'Cinzel','Georgia',serif;font-size:8px;letter-spacing:.2em;color:var(--gold);text-transform:uppercase}

    /* Nav dots */
    .dot{width:5px;height:5px;border-radius:50%;background:var(--border);transition:all .2s}
    .dot.on{background:var(--gold);width:20px;border-radius:3px}

    @media print{.no-print{display:none!important}body{background:#fff;color:#000}}
  `}</style>
);

// ─── PROGRESS HEADER ───────────────────────────────────────────────────────
function PH({step, total, label, onBack}) {
  return (
    <div className="no-print" style={{padding:"20px 24px 0",position:"relative",zIndex:5}}>
      <div className="stripe" style={{height:"2px"}}/>
      <div style={{display:"flex",alignItems:"center",gap:14,marginTop:6}}>
        {onBack && (
          <button onClick={onBack} style={{background:"none",border:"none",color:"var(--gold-dim)",cursor:"pointer",fontSize:18,lineHeight:1,padding:"4px 0",fontFamily:"serif"}}>←</button>
        )}
        <div style={{flex:1}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
            <span className="caps" style={{fontSize:9,letterSpacing:".18em",color:"var(--gold-dim)"}}>{label}</span>
            <div style={{display:"flex",gap:5}}>
              {Array.from({length:total},(_,i)=>(
                <div key={i} className={`dot ${i<step?"on":""}`}/>
              ))}
            </div>
          </div>
          <div className="prog"><div className="prog-f" style={{width:`${(step/total)*100}%`}}/></div>
        </div>
      </div>
    </div>
  );
}

// ─── HOME ──────────────────────────────────────────────────────────────────
function HomeScreen({go}) {
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{setTimeout(()=>setLoaded(true),100);},[]);

  return (
    <div className="screen" style={{background:"var(--bg)",display:"flex",flexDirection:"column"}}>
      <div className="stripe" style={{animation:"stripeSlide .8s ease"}}/>
      <ParticleField density={50}/>

      {/* Top label */}
      <div className="z" style={{padding:"32px 28px 0",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <span className="caps" style={{fontSize:9,letterSpacing:".22em",color:"var(--gold-dim)"}}>
          EXPEDITION INTO PURPOSE
        </span>
        <span className="caps" style={{fontSize:9,letterSpacing:".15em",color:"var(--border)"}}>
          2025
        </span>
      </div>

      {/* Hero */}
      <div className="z" style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:"clamp(40px,8vh,100px) 28px clamp(60px,10vh,120px)",maxWidth:780,margin:"0 auto",width:"100%"}}>

        {/* Eyebrow */}
        <div className="afu" style={{marginBottom:28,animationDelay:".1s",opacity:loaded?1:0}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:12}}>
            <div style={{width:40,height:1,background:"var(--gold)"}}/>
            <span className="caps" style={{fontSize:9,letterSpacing:".28em",color:"var(--gold)"}}>
              FIELD NOTES ON PURPOSE
            </span>
          </div>
        </div>

        {/* Massive headline */}
        <div style={{overflow:"hidden",marginBottom:12}}>
          <h1 className="serif afu" style={{
            fontSize:"clamp(52px,12vw,130px)",fontWeight:900,lineHeight:.95,
            letterSpacing:"-.02em",color:"var(--tx)",
            animationDelay:".2s",opacity:loaded?1:0,
            textShadow:"0 0 120px rgba(245,200,66,.08)"
          }}>
            What's
          </h1>
        </div>
        <div style={{overflow:"hidden",marginBottom:12}}>
          <h1 className="serif afu" style={{
            fontSize:"clamp(52px,12vw,130px)",fontWeight:900,lineHeight:.95,
            letterSpacing:"-.02em",fontStyle:"italic",
            color:"var(--gold)",textShadow:"0 0 80px rgba(245,200,66,.3)",
            animationDelay:".32s",opacity:loaded?1:0,
          }}>
            your
          </h1>
        </div>
        <div style={{overflow:"hidden",marginBottom:40}}>
          <h1 className="serif afu" style={{
            fontSize:"clamp(52px,12vw,130px)",fontWeight:900,lineHeight:.95,
            letterSpacing:"-.02em",color:"var(--tx)",
            animationDelay:".44s",opacity:loaded?1:0,
          }}>
            moonshot?
          </h1>
        </div>

        {/* Subline */}
        <div className="afu" style={{marginBottom:52,animationDelay:".6s",opacity:loaded?1:0}}>
          <div style={{width:1,height:60,background:"linear-gradient(to bottom,var(--gold),transparent)",marginBottom:24}}/>
          <p className="body" style={{fontSize:"clamp(15px,2vw,18px)",lineHeight:1.75,color:"var(--mt)",maxWidth:460}}>
            A 15-minute expedition into the vision you haven't yet named — and the life you were built to live.
          </p>
        </div>

        {/* CTA */}
        <div className="afu" style={{animationDelay:".75s",opacity:loaded?1:0}}>
          <button className="btn btn-gold btn-lg" onClick={()=>go("breathe")}
            style={{letterSpacing:".22em",animation:"goldGlow 3s ease-in-out infinite"}}>
            Begin the Expedition →
          </button>
        </div>
      </div>

      {/* Bottom quote */}
      <div className="z afu" style={{padding:"0 28px 40px",animationDelay:".9s",opacity:loaded?1:0}}>
        <p className="serif" style={{fontSize:13,fontStyle:"italic",color:"var(--mt)",maxWidth:460,lineHeight:1.65,borderLeft:"2px solid var(--gold-dim)",paddingLeft:16}}>
          "We are in the Second Renaissance — and every Renaissance needs its builders, its visionaries, its cathedrals."
        </p>
        <p className="caps" style={{fontSize:8,letterSpacing:".18em",color:"var(--gold-dim)",marginTop:8,paddingLeft:18}}>
          DEVON SEEGERS
        </p>
      </div>
    </div>
  );
}

// ─── BREATHING ─────────────────────────────────────────────────────────────
const BREATH_PHASES = [
  {label:"Breathe In", dur:4, scale:1.32, color:"var(--gold)", word:"in"},
  {label:"Hold",       dur:4, scale:1.32, color:"rgba(200,200,255,.8)", word:"hold"},
  {label:"Breathe Out",dur:4, scale:1,    color:"rgba(180,220,200,.7)", word:"out"},
  {label:"Hold",       dur:2, scale:1,    color:"rgba(180,180,180,.5)", word:"hold"},
];

function BreathingScreen({go}) {
  const [ci, setCi] = useState(0);
  const [round, setRound] = useState(0);
  const [sec, setSec] = useState(4);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const ph = BREATH_PHASES[ci];

  useEffect(()=>{
    if(!running) return;
    const id = setInterval(()=>{
      setSec(s=>{
        if(s<=1){
          const nc=(ci+1)%BREATH_PHASES.length;
          const nr=nc===0?round+1:round;
          if(nr>=3){setDone(true);setRunning(false);return 0;}
          setCi(nc);setRound(nr);return BREATH_PHASES[nc].dur;
        }
        return s-1;
      });
    },1000);
    return ()=>clearInterval(id);
  },[running,ci,round]);

  const start=()=>{setCi(0);setRound(0);setSec(4);setDone(false);setRunning(true);};

  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <div className="stripe"/>
      <ParticleField density={30}/>
      <div className="z" style={{minHeight:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 24px",textAlign:"center",gap:0}}>

        {/* Label */}
        <div className="afu caps" style={{fontSize:9,letterSpacing:".3em",color:"var(--gold-dim)",marginBottom:32}}>
          ARRIVE FULLY
        </div>

        {/* Headline */}
        <h1 className="serif afu" style={{fontSize:"clamp(28px,6vw,52px)",fontWeight:700,fontStyle:"italic",marginBottom:48,animationDelay:".1s",lineHeight:1.15}}>
          {done ? "You're here." : "Let's arrive together."}
        </h1>

        {/* Ring */}
        {!done && (
          <div style={{position:"relative",width:clamp(180,36,220),height:clamp(180,36,220),display:"flex",alignItems:"center",justifyContent:"center",marginBottom:52}}>
            <style>{`
              .ring-container{width:clamp(180px,36vw,220px);height:clamp(180px,36vw,220px);position:relative;display:flex;align-items:center;justify-content:center;}
            `}</style>
            <div className="ring-container">
              {running && [0,1,2].map(i=>(
                <div key={i} style={{position:"absolute",width:"100%",height:"100%",borderRadius:"50%",border:`1px solid ${ph.color}`,opacity:.3,animation:`ringPulse ${ph.dur}s ease-out ${i*(ph.dur/3)}s infinite`}}/>
              ))}
              <div style={{
                width:"clamp(130px,26vw,160px)",height:"clamp(130px,26vw,160px)",borderRadius:"50%",
                border:`1px solid ${running?ph.color:"rgba(245,200,66,.2)"}`,
                transition:`transform ${ph.dur}s ease-in-out, border-color .5s`,
                transform:`scale(${running?ph.scale:1})`,
                display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
                background:running?`radial-gradient(circle,${ph.color.replace(")",",0.06)")} 0%,transparent 70%)`:"transparent",
              }}>
                <span className="serif" style={{fontSize:"clamp(36px,7vw,52px)",fontWeight:700,color:running?ph.color:"rgba(245,200,66,.3)",fontStyle:"italic"}}>
                  {running?sec:"○"}
                </span>
                {running && <span className="caps" style={{fontSize:9,letterSpacing:".2em",color:ph.color,opacity:.7,marginTop:4}}>{ph.word}</span>}
              </div>
            </div>
          </div>
        )}

        {running && !done && (
          <div className="afu" style={{marginBottom:40}}>
            <p className="serif" style={{fontSize:22,fontStyle:"italic",color:ph.color}}>{ph.label}</p>
            <p className="caps" style={{fontSize:9,letterSpacing:".2em",color:"var(--mt)",marginTop:8}}>ROUND {round+1} OF 3</p>
          </div>
        )}

        {done && (
          <div className="afu" style={{marginBottom:48}}>
            <p className="body" style={{fontSize:16,color:"var(--mt)",lineHeight:1.7,maxWidth:340,margin:"0 auto"}}>
              Three breaths. One intention.<br/>Your expedition begins now.
            </p>
          </div>
        )}

        {!running && !done ? (
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:14}}>
            <button className="btn btn-gold btn-lg" onClick={start} style={{animation:"goldGlow 3s ease-in-out infinite"}}>
              Begin Breathing
            </button>
            <button className="btn btn-ghost btn-sm" onClick={()=>go("name")} style={{opacity:.5}}>
              Skip →
            </button>
          </div>
        ) : done ? (
          <button className="btn btn-gold btn-lg afu" onClick={()=>go("name")} style={{animation:"goldGlow 2s ease-in-out infinite"}}>
            Begin My Journey →
          </button>
        ) : (
          <button className="btn btn-ghost btn-sm" onClick={()=>go("name")} style={{opacity:.35}}>Skip →</button>
        )}
      </div>
    </div>
  );
}

// helper
function clamp(min, vwVal, max) { return `clamp(${min}px,${vwVal}vw,${max}px)`; }

// ─── NAME ──────────────────────────────────────────────────────────────────
function NameScreen({go}) {
  const [name, setName] = useState("");
  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <div className="stripe"/>
      <ParticleField density={30}/>
      <PH step={1} total={5} label="INTRODUCTION" onBack={()=>go("breathe")}/>
      <div className="z afu" style={{maxWidth:600,margin:"0 auto",padding:"clamp(48px,12vh,100px) 28px 60px",display:"flex",flexDirection:"column",gap:36}}>

        {/* Ghost name behind */}
        {name && (
          <div style={{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",
            fontSize:"clamp(80px,18vw,180px)",fontFamily:"'Playfair Display',serif",fontWeight:900,
            color:"rgba(245,200,66,.04)",pointerEvents:"none",zIndex:0,whiteSpace:"nowrap",
            letterSpacing:"-.04em",fontStyle:"italic",userSelect:"none"}}>
            {name}
          </div>
        )}

        <div>
          <div style={{display:"inline-flex",alignItems:"center",gap:10,marginBottom:24}}>
            <div style={{width:32,height:1,background:"var(--gold)"}}/>
            <span className="caps" style={{fontSize:9,letterSpacing:".25em",color:"var(--gold)"}}>FIELD LOG · ENTRY 01</span>
          </div>
          <h1 className="serif" style={{fontSize:"clamp(32px,7vw,58px)",fontWeight:700,fontStyle:"italic",lineHeight:1.1,marginBottom:12}}>
            First, tell me<br/>your name.
          </h1>
          <p className="body" style={{fontSize:15,color:"var(--mt)",lineHeight:1.7}}>
            Every expedition begins with a name in the log.
          </p>
        </div>

        <div style={{borderTop:"1px solid var(--border)",paddingTop:32}}>
          <input className="input" type="text" autoFocus
            placeholder="Your first name…"
            value={name}
            onChange={e=>setName(e.target.value)}
            onKeyDown={e=>e.key==="Enter"&&name.trim()&&go("journey",{name:name.trim()})}
            style={{fontSize:"clamp(24px,5vw,40px)",fontFamily:"'Playfair Display',serif",paddingBottom:16,fontStyle:name?"italic":"normal"}}
          />
        </div>

        <button className="btn btn-gold btn-lg" disabled={!name.trim()}
          onClick={()=>go("journey",{name:name.trim()})}
          style={{alignSelf:"flex-start"}}>
          Continue the Expedition →
        </button>
      </div>
    </div>
  );
}

// ─── JOURNEY (VISION QUADRANT) ─────────────────────────────────────────────
function JourneyScreen({go, journey, setJourney}) {
  const [q, setQ] = useState({iLove:[],iAmGreatAt:[],worldNeeds:[],canBePaidFor:[]});
  const [inp, setInp] = useState({iLove:"",iAmGreatAt:"",worldNeeds:"",canBePaidFor:""});
  const [activePanel, setActivePanel] = useState(0);
  const total = Object.values(q).reduce((s,a)=>s+a.length,0);
  const tog=(k,v)=>setQ(p=>({...p,[k]:p[k].includes(v)?p[k].filter(x=>x!==v):[...p[k],v]}));
  const add=k=>{const v=inp[k].trim();if(v&&!q[k].includes(v)){setQ(p=>({...p,[k]:[...p[k],v]}));setInp(p=>({...p,[k]:""}));}};
  const rm=(k,v)=>setQ(p=>({...p,[k]:p[k].filter(x=>x!==v)}));
  const next=()=>{
    const miss=QUAD_META.find(m=>q[m.key].length===0);
    if(miss) return alert(`Add at least one item to "${miss.title}"`);
    setJourney(p=>({...p,quadrants:q}));go("prompts");
  };

  const cur = QUAD_META[activePanel];

  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <div className="stripe"/>
      <PH step={2} total={5} label="VISION QUADRANT" onBack={()=>go("name")}/>
      <div className="z" style={{maxWidth:960,margin:"0 auto",padding:"28px 20px 60px"}}>

        {/* Header */}
        <div className="afu" style={{marginBottom:36}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
            <div style={{width:32,height:1,background:"var(--gold)"}}/>
            <span className="caps" style={{fontSize:9,letterSpacing:".25em",color:"var(--gold)"}}>MAPPING YOUR TERRAIN</span>
          </div>
          <h1 className="serif" style={{fontSize:"clamp(26px,5vw,44px)",fontWeight:700,fontStyle:"italic",lineHeight:1.15,marginBottom:8}}>
            Where does your life intersect<br/>with what the world needs?
          </h1>
          <p className="body" style={{color:"var(--mt)",fontSize:14}}>{total} items mapped</p>
        </div>

        {/* Panel tabs */}
        <div style={{display:"flex",gap:0,marginBottom:20,borderBottom:"1px solid var(--border)"}}>
          {QUAD_META.map((m,i)=>(
            <button key={m.key} onClick={()=>setActivePanel(i)}
              style={{flex:1,padding:"12px 8px",background:"none",border:"none",cursor:"pointer",
                borderBottom:`2px solid ${activePanel===i?"var(--gold)":"transparent"}`,
                transition:"all .2s",textAlign:"center"}}>
              <div className="caps" style={{fontSize:8,letterSpacing:".18em",color:activePanel===i?"var(--gold)":"var(--mt)",marginBottom:3}}>{m.num}</div>
              <div className="body" style={{fontSize:12,color:activePanel===i?"var(--tx)":"var(--mt)",fontWeight:activePanel===i?600:400}}>{m.title}</div>
              {q[m.key].length>0 && <div className="caps" style={{fontSize:7,color:"var(--gold)",marginTop:2,letterSpacing:".1em"}}>{q[m.key].length} mapped</div>}
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div key={cur.key} className="card asi" style={{padding:24,marginBottom:20,borderLeft:"2px solid var(--gold)"}}>
          <div style={{marginBottom:18}}>
            <div className="caps" style={{fontSize:8,letterSpacing:".22em",color:"var(--gold)",marginBottom:6}}>{cur.num} / {cur.title.toUpperCase()}</div>
            <p className="serif" style={{fontSize:16,fontStyle:"italic",color:"var(--mt)"}}>{cur.sub}</p>
          </div>

          {/* Selected badges */}
          {q[cur.key].length>0 && (
            <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:16}}>
              {q[cur.key].map(v=>(
                <span key={v} className="badge">{v}<button className="badge-x" onClick={()=>rm(cur.key,v)}>×</button></span>
              ))}
            </div>
          )}

          {/* Chips */}
          <div style={{maxHeight:160,overflowY:"auto",display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>
            {SDG_OPTIONS[cur.key].map(o=>(
              <button key={o} className={`chip ${q[cur.key].includes(o)?"on":""}`} onClick={()=>tog(cur.key,o)}>{o}</button>
            ))}
          </div>

          {/* Custom input */}
          <div style={{display:"flex",gap:8,alignItems:"flex-end",borderTop:"1px solid var(--border)",paddingTop:14}}>
            <input className="input" style={{flex:1,fontSize:14,padding:"8px 0"}} placeholder="Add your own…" value={inp[cur.key]}
              onChange={e=>setInp(p=>({...p,[cur.key]:e.target.value}))}
              onKeyDown={e=>e.key==="Enter"&&add(cur.key)}/>
            <button className="btn btn-outline btn-sm" onClick={()=>add(cur.key)} disabled={!inp[cur.key].trim()}>ADD</button>
          </div>
        </div>

        {/* Navigation */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{display:"flex",gap:8}}>
            {activePanel>0 && <button className="btn btn-ghost btn-sm" onClick={()=>setActivePanel(p=>p-1)}>← Back</button>}
            {activePanel<3 && <button className="btn btn-outline btn-sm" onClick={()=>setActivePanel(p=>p+1)}>Next Section →</button>}
          </div>
          {activePanel===3 && (
            <button className="btn btn-gold btn-lg" disabled={total<4} onClick={next}>
              Continue to Questions →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── PROMPTS ───────────────────────────────────────────────────────────────
function PromptsScreen({go, journey, setJourney}) {
  const [idx, setIdx] = useState(0);
  const [responses, setResponses] = useState({});
  const prompt = PROMPTS[idx];
  const resp = responses[prompt.id] || "";
  const answered = PROMPTS.filter(p=>responses[p.id]?.trim()).length;

  const addText = useCallback(t=>{
    setResponses(p=>({...p,[prompt.id]:((p[prompt.id]||"")+(" ")+t).trim()}));
  },[prompt.id]);
  const voice = useVoice(addText);

  const next=()=>{
    if(!resp.trim()) return alert("Speak from the heart — even a few words.");
    if(idx<PROMPTS.length-1) setIdx(i=>i+1);
    else { setJourney(p=>({...p,responses})); go("emailgate"); }
  };

  return (
    <div className="screen" style={{background:"var(--bg)",overflow:"hidden"}}>
      <div className="stripe"/>

      {/* Giant watermark number */}
      <div style={{position:"absolute",right:"-0.1em",top:"50%",transform:"translateY(-55%)",
        fontSize:"clamp(200px,35vw,380px)",fontFamily:"'Playfair Display',serif",fontWeight:900,
        color:"rgba(245,200,66,.025)",lineHeight:1,userSelect:"none",pointerEvents:"none",zIndex:0,
        fontStyle:"italic"}}>
        {prompt.roman}
      </div>

      <PH step={3} total={5} label={`PROMPT ${idx+1} OF ${PROMPTS.length}`} onBack={()=>idx>0?setIdx(i=>i-1):go("journey")}/>

      <div className="z" key={prompt.id} style={{maxWidth:720,margin:"0 auto",padding:"clamp(32px,8vh,80px) 28px clamp(32px,6vh,60px)"}}>

        {/* Phase + number */}
        <div className="afu" style={{marginBottom:24,display:"flex",alignItems:"center",gap:14}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:24,height:1,background:"var(--gold)"}}/>
            <span className="caps" style={{fontSize:8,letterSpacing:".25em",color:"var(--gold)"}}>{prompt.phase}</span>
          </div>
          <div style={{width:1,height:14,background:"var(--border)"}}/>
          <span className="caps" style={{fontSize:8,letterSpacing:".2em",color:"var(--mt)"}}>QUESTION {idx+1}</span>
        </div>

        {/* The question — the hero */}
        <div className="afu" style={{marginBottom:12,animationDelay:".1s"}}>
          <h1 className="serif" style={{fontSize:"clamp(28px,5.5vw,54px)",fontWeight:700,fontStyle:"italic",lineHeight:1.15,letterSpacing:"-.01em",marginBottom:14}}>
            {prompt.q}
          </h1>
          <p className="body" style={{fontSize:14,color:"var(--mt)",fontStyle:"italic",lineHeight:1.6,borderLeft:"2px solid var(--border)",paddingLeft:14}}>
            {prompt.sub}
          </p>
        </div>

        {/* Answer area */}
        <div className="afu" style={{marginBottom:16,animationDelay:".2s"}}>
          <textarea className="input" style={{minHeight:130,fontSize:16,lineHeight:1.75}}
            placeholder="Speak from the heart. There are no wrong answers here."
            value={resp}
            onChange={e=>setResponses(p=>({...p,[prompt.id]:e.target.value}))}/>
        </div>

        {/* Voice + nav row */}
        <div className="afu" style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",animationDelay:".28s"}}>
          {voice.supported && (
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <button className={`voice-btn ${voice.status==="listening"?"listening":""}`}
                onClick={voice.status==="listening"?voice.stop:voice.start}>
                {voice.status==="listening"?"⏹":"🎙"}
              </button>
              <span className="caps" style={{fontSize:8,letterSpacing:".15em",color:voice.status==="listening"?"rgba(255,80,80,.8)":"var(--mt)"}}>
                {voice.status==="listening"?"LISTENING…":"VOICE INPUT"}
              </span>
            </div>
          )}

          <div style={{flex:1,display:"flex",justifyContent:"flex-end",gap:10}}>
            {answered<PROMPTS.length && idx<PROMPTS.length-1 && (
              <button className="btn btn-ghost btn-sm" onClick={()=>{if(idx<PROMPTS.length-1)setIdx(i=>i+1);}}>
                Skip
              </button>
            )}
            <button className="btn btn-gold" disabled={!resp.trim()} onClick={next} style={{letterSpacing:".18em",fontSize:11}}>
              {idx===PROMPTS.length-1?"Generate My Statement →":"Continue →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── EMAIL GATE ────────────────────────────────────────────────────────────
function EmailGateScreen({go, journey, setJourney}) {
  const [email, setEmail] = useState("");
  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <div className="stripe"/>
      <ParticleField density={25}/>
      <PH step={4} total={5} label="ALMOST THERE" onBack={()=>go("prompts")}/>
      <div className="z afu" style={{maxWidth:580,margin:"0 auto",padding:"clamp(48px,12vh,100px) 28px 60px"}}>

        <div style={{marginBottom:40}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:22}}>
            <div style={{width:32,height:1,background:"var(--gold)"}}/>
            <span className="caps" style={{fontSize:9,letterSpacing:".25em",color:"var(--gold)"}}>FIELD LOG · FINAL ENTRY</span>
          </div>
          <h1 className="serif" style={{fontSize:"clamp(30px,6vw,52px)",fontWeight:700,fontStyle:"italic",lineHeight:1.1,marginBottom:16}}>
            Where should we<br/>send your moonshot?
          </h1>
          <p className="body" style={{fontSize:15,color:"var(--mt)",lineHeight:1.7,maxWidth:420}}>
            Your statement will be waiting when you're ready. No spam. No noise. Just your vision.
          </p>
        </div>

        <div style={{borderTop:"1px solid var(--border)",paddingTop:32,marginBottom:32}}>
          <input className="input" type="email" autoFocus
            placeholder="your@email.com"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            onKeyDown={e=>e.key==="Enter"&&email.includes("@")&&(setJourney(p=>({...p,email})),go("statement"))}
            style={{fontSize:20,fontFamily:"'Source Serif 4',serif"}}/>
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <button className="btn btn-gold btn-lg" disabled={!email.includes("@")}
            onClick={()=>{setJourney(p=>({...p,email}));go("statement");}}>
            Reveal My Moonshot →
          </button>
          <button className="btn btn-ghost btn-sm" onClick={()=>go("statement")} style={{opacity:.45,alignSelf:"center"}}>
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── STATEMENT REVEAL ──────────────────────────────────────────────────────
function StatementScreen({go, journey, setJourney}) {
  const [stmt, setStmt] = useState("");
  const [loading, setLoading] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [editing, setEditing] = useState(false);
  const [wordIdx, setWordIdx] = useState(-1);
  const words = stmt.split(" ").filter(Boolean);

  const generate = useCallback(async()=>{
    setLoading(true); setRevealed(false); setWordIdx(-1);
    try {
      const q=journey.quadrants||{}, r=journey.responses||{};
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
      const s=text.trim();
      setStmt(s); setJourney(p=>({...p,statement:s}));
    } catch {
      setEditing(true);
    }
    setLoading(false);
  },[journey,setJourney]);

  useEffect(()=>{
    if(journey.statement){setStmt(journey.statement);}
    else generate();
  },[]);

  // Reveal words one by one
  useEffect(()=>{
    if(!stmt || loading || revealed) return;
    const ws = stmt.split(" ").filter(Boolean);
    let i=0;
    const timer = setInterval(()=>{
      setWordIdx(i);
      i++;
      if(i>=ws.length){clearInterval(timer);setTimeout(()=>setRevealed(true),400);}
    },120);
    return ()=>clearInterval(timer);
  },[stmt,loading]);

  return (
    <div className="screen" style={{background:"#050507",display:"flex",flexDirection:"column"}}>
      <div className="stripe" style={{animation:"stripeSlide .8s ease"}}/>
      <ParticleField density={40}/>

      {loading ? (
        <div className="z" style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20,padding:"40px"}}>
          <div style={{width:1,height:80,background:"linear-gradient(to bottom,transparent,var(--gold))",animation:"breathe 2s ease-in-out infinite"}}/>
          <span className="caps" style={{fontSize:9,letterSpacing:".3em",color:"var(--gold-dim)"}}>
            WEAVING YOUR VISION
          </span>
          <div style={{width:32,height:32,border:"1px solid rgba(245,200,66,.3)",borderTopColor:"var(--gold)",borderRadius:"50%",animation:"spin .9s linear infinite"}}/>
        </div>
      ) : editing ? (
        <div className="z afu" style={{flex:1,display:"flex",flexDirection:"column",maxWidth:680,margin:"0 auto",padding:"60px 28px",gap:24}}>
          <PH step={4} total={5} label="YOUR MOONSHOT STATEMENT" onBack={()=>go("prompts")}/>
          <h1 className="serif" style={{fontSize:"clamp(24px,5vw,42px)",fontWeight:700,fontStyle:"italic"}}>Write your statement</h1>
          <textarea className="input" style={{fontSize:18,minHeight:120,fontStyle:"italic",lineHeight:1.7}} value={stmt}
            placeholder="I am here to [action] [who] so that [impact]…"
            onChange={e=>setStmt(e.target.value)}/>
          <button className="btn btn-gold btn-lg" disabled={!stmt.trim()}
            onClick={()=>{setJourney(p=>({...p,statement:stmt.trim()}));setEditing(false);}}>
            Accept Statement →
          </button>
        </div>
      ) : (
        <div className="z" style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"clamp(40px,10vh,100px) 28px",textAlign:"center"}}>

          {/* The reveal moment */}
          <div style={{maxWidth:700,margin:"0 auto"}}>
            {/* Label */}
            <div className="afu" style={{marginBottom:28}}>
              <span className="caps" style={{fontSize:9,letterSpacing:".35em",color:"var(--gold-dim)"}}>
                YOUR MOONSHOT
              </span>
            </div>

            {/* Gold line that sweeps before statement */}
            <div style={{width:"100%",height:1,background:"linear-gradient(90deg,transparent,var(--gold),transparent)",marginBottom:40,animation:"fadeIn .8s ease"}}/>

            {/* Statement words revealing */}
            <div className="serif" style={{fontSize:"clamp(22px,4.5vw,46px)",fontWeight:700,fontStyle:"italic",lineHeight:1.45,letterSpacing:"-.01em",color:"var(--tx)",marginBottom:40}}>
              {words.map((word,i)=>(
                <span key={i} style={{
                  display:"inline",
                  opacity: wordIdx>=i ? 1 : 0,
                  transition:"opacity .35s ease",
                }}>{word}{" "}</span>
              ))}
            </div>

            {/* Gold line after */}
            {revealed && (
              <div style={{width:"100%",height:1,background:"linear-gradient(90deg,transparent,var(--gold),transparent)",marginBottom:32,animation:"fadeIn .8s ease"}}/>
            )}

            {/* This is your moonshot */}
            {revealed && (
              <div className="afu" style={{marginBottom:52}}>
                <span className="caps" style={{fontSize:9,letterSpacing:".35em",color:"var(--gold)"}}>
                  THIS IS YOUR MOONSHOT
                </span>
              </div>
            )}

            {/* Actions */}
            {revealed && (
              <div className="afu" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12,animationDelay:".3s"}}>
                <button className="btn btn-ghost btn-sm" onClick={()=>setEditing(true)}>Edit</button>
                <button className="btn btn-ghost btn-sm" onClick={generate}>Regenerate</button>
                <button className="btn btn-gold btn-lg" disabled={!stmt.trim()} onClick={()=>{setJourney(p=>({...p,statement:stmt.trim()}));go("genius");}}>
                  Discover My Genius →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── GENIUS ZONES ──────────────────────────────────────────────────────────
function GeniusScreen({go, journey, setJourney}) {
  const [zones, setZones] = useState([]);
  const [step, setStep] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = useCallback(async()=>{
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
      try { parsed=JSON.parse(text.replace(/```json|```/g,"").trim()); }
      catch { const m=text.match(/\[[\s\S]*\]/); parsed=m?JSON.parse(m[0]):null; }
      if(!Array.isArray(parsed)||!parsed.length) throw new Error();
      setZones(parsed.slice(0,3)); setJourney(p=>({...p,zones:parsed.slice(0,3)}));
    } catch {
      const fb=[
        {title:"Visionary Leader",description:"You see the future before others can and inspire them to follow.",icon:"star"},
        {title:"Creative Problem Solver",description:"Your mind finds elegant solutions where others see only walls.",icon:"lightbulb"},
        {title:"Impact Catalyst",description:"You turn ideas into movements that create lasting change.",icon:"rocket"},
      ];
      setZones(fb); setJourney(p=>({...p,zones:fb}));
    }
    setLoading(false);
  },[journey,setJourney]);

  useEffect(()=>{if(journey.zones?.length)setZones(journey.zones);else generate();},[]);

  const finish=()=>{
    if(!step) return alert("Choose your next right step.");
    setJourney(p=>({...p,nextStep:NEXT_STEPS.find(s=>s.id===step)}));
    go("celebration");
  };

  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <div className="stripe"/>
      <PH step={5} total={5} label="GENIUS ZONES" onBack={()=>go("statement")}/>
      <div className="z" style={{maxWidth:880,margin:"0 auto",padding:"32px 24px 60px"}}>

        <div className="afu" style={{marginBottom:40}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:18}}>
            <div style={{width:32,height:1,background:"var(--gold)"}}/>
            <span className="caps" style={{fontSize:9,letterSpacing:".25em",color:"var(--gold)"}}>YOUR NATURAL GENIUS</span>
          </div>
          <h1 className="serif" style={{fontSize:"clamp(28px,5vw,48px)",fontWeight:700,fontStyle:"italic",lineHeight:1.1}}>
            Where your gifts<br/>meet the world's need.
          </h1>
        </div>

        {loading ? (
          <div style={{textAlign:"center",padding:"80px 0"}}>
            <div style={{width:28,height:28,border:"1px solid rgba(245,200,66,.3)",borderTopColor:"var(--gold)",borderRadius:"50%",animation:"spin .9s linear infinite",margin:"0 auto 16px"}}/>
            <span className="caps" style={{fontSize:9,letterSpacing:".2em",color:"var(--mt)"}}>MAPPING YOUR GENIUS…</span>
          </div>
        ) : (
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:1,marginBottom:48,background:"var(--border)"}}>
            {zones.map((z,i)=>(
              <div key={i} className="afu" style={{background:"var(--bg)",padding:28,animationDelay:`${i*.12}s`,borderLeft:i===0?"2px solid var(--gold)":"none"}}>
                <div style={{fontSize:24,marginBottom:16,color:"var(--gold)",fontFamily:"monospace"}}>{ZONE_ICONS[z.icon]||"◈"}</div>
                <h3 className="serif" style={{fontSize:20,fontWeight:700,marginBottom:10,fontStyle:"italic"}}>{z.title}</h3>
                <p className="body" style={{fontSize:13,color:"var(--mt)",lineHeight:1.7}}>{z.description}</p>
              </div>
            ))}
          </div>
        )}

        {!loading && zones.length>0 && (
          <div className="afu">
            <div style={{marginBottom:24}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
                <div style={{width:32,height:1,background:"var(--gold)"}}/>
                <span className="caps" style={{fontSize:9,letterSpacing:".22em",color:"var(--gold)"}}>NEXT RIGHT STEP</span>
              </div>
              <p className="body" style={{fontSize:14,color:"var(--mt)",fontStyle:"italic"}}>
                One focused action. Seven days. That's how expeditions begin.
              </p>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:1,marginBottom:36,background:"var(--border)"}}>
              {NEXT_STEPS.map(s=>(
                <button key={s.id} onClick={()=>setStep(s.id)}
                  style={{background:step===s.id?"rgba(245,200,66,.06)":"var(--bg)",border:"none",cursor:"pointer",
                    padding:"18px 22px",textAlign:"left",display:"flex",gap:16,alignItems:"flex-start",
                    borderLeft:step===s.id?"2px solid var(--gold)":"2px solid transparent",transition:"all .15s"}}>
                  <span style={{fontSize:16,color:"var(--gold)",fontFamily:"monospace",marginTop:2}}>{s.icon}</span>
                  <div>
                    <div className="body" style={{fontSize:14,fontWeight:600,color:step===s.id?"var(--tx)":"var(--mt)",marginBottom:3}}>{s.title}</div>
                    <div className="body" style={{fontSize:12,color:"var(--mt)",fontStyle:"italic"}}>{s.desc}</div>
                  </div>
                </button>
              ))}
            </div>

            <button className="btn btn-gold btn-lg" disabled={!step} onClick={finish} style={{width:"100%",justifyContent:"center"}}>
              Complete My Expedition →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── CELEBRATION ───────────────────────────────────────────────────────────
function CelebrationScreen({go, journey}) {
  const [conf, setConf] = useState(true);
  const [tab, setTab] = useState("statement");
  const [copied, setCopied] = useState(false);
  const [cardPlatform, setCardPlatform] = useState("instagram");
  const [cardUrl, setCardUrl] = useState("");

  useEffect(()=>setTimeout(()=>setConf(false),5000),[]);

  useEffect(()=>{
    if(tab==="card" && journey.statement){
      try { setCardUrl(renderCard(journey.statement, journey.name, cardPlatform)); }
      catch(e) { console.error(e); }
    }
  },[tab,cardPlatform,journey.statement,journey.name]);

  const copy=()=>{navigator.clipboard.writeText(journey.statement||"");setCopied(true);setTimeout(()=>setCopied(false),2200);};
  const share=async()=>{
    const text=`My moonshot:\n\n"${journey.statement||""}"\n\nDiscover yours → WhatsMyMoonshot.ai`;
    if(navigator.share){try{await navigator.share({title:"My Moonshot",text,url:"https://WhatsMyMoonshot.ai"});}catch{}}
    else{navigator.clipboard.writeText(text);alert("Copied to clipboard!");}
  };

  return (
    <div className="screen" style={{background:"var(--bg)"}}>
      <div className="stripe"/>
      <ParticleField density={60}/>
      <Confetti on={conf}/>

      <div className="z afu" style={{maxWidth:720,margin:"0 auto",padding:"clamp(40px,10vh,80px) 24px 60px"}}>

        {/* Hero moment */}
        <div style={{textAlign:"center",marginBottom:52}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:10,marginBottom:24}}>
            <div style={{width:40,height:1,background:"var(--gold)"}}/>
            <span className="caps" style={{fontSize:9,letterSpacing:".3em",color:"var(--gold)"}}>EXPEDITION COMPLETE</span>
            <div style={{width:40,height:1,background:"var(--gold)"}}/>
          </div>
          <h1 className="serif" style={{fontSize:"clamp(36px,8vw,80px)",fontWeight:900,fontStyle:"italic",lineHeight:1,marginBottom:20,animation:"goldGlow 4s ease-in-out infinite"}}>
            {journey.name?`${journey.name}.`:"You did it."}
          </h1>
          <p className="body" style={{fontSize:16,color:"var(--mt)",lineHeight:1.75,maxWidth:460,margin:"0 auto"}}>
            You've crossed the threshold. The vision is named. The work begins now.
          </p>
        </div>

        {/* Statement card */}
        <div style={{borderLeft:"3px solid var(--gold)",paddingLeft:24,marginBottom:48,padding:"24px 24px 24px 24px",background:"rgba(245,200,66,.03)",border:"1px solid rgba(245,200,66,.15)",marginBottom:12}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
            <span className="caps" style={{fontSize:8,letterSpacing:".22em",color:"var(--gold)"}}>YOUR MOONSHOT</span>
          </div>
          <p className="serif" style={{fontSize:"clamp(18px,3.5vw,28px)",fontStyle:"italic",lineHeight:1.6,color:"var(--tx)",marginBottom:16}}>
            {journey.statement||"—"}
          </p>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            <button className="btn btn-outline btn-sm" onClick={copy}>
              {copied?"Copied ✓":"Copy Statement"}
            </button>
            <button className="btn btn-outline btn-sm" onClick={share}>Share</button>
          </div>
        </div>

        {/* Genus zones */}
        {journey.zones?.length>0 && (
          <div style={{marginBottom:36}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
              <div style={{width:24,height:1,background:"var(--gold)"}}/>
              <span className="caps" style={{fontSize:8,letterSpacing:".2em",color:"var(--gold)"}}>YOUR GENIUS ZONES</span>
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {journey.zones.map((z,i)=>(
                <span key={i} className="badge">{ZONE_ICONS[z.icon]||"◈"} {z.title}</span>
              ))}
            </div>
          </div>
        )}

        {/* Next step */}
        {journey.nextStep && (
          <div style={{marginBottom:48,padding:"18px 20px",background:"var(--card)",border:"1px solid var(--border)"}}>
            <span className="caps" style={{fontSize:8,letterSpacing:".18em",color:"var(--gold)",display:"block",marginBottom:6}}>NEXT RIGHT STEP · 7 DAYS</span>
            <p className="body" style={{fontSize:14,color:"var(--tx)",fontWeight:600}}>{journey.nextStep.icon} {journey.nextStep.title}</p>
            <p className="body" style={{fontSize:12,color:"var(--mt)",fontStyle:"italic",marginTop:3}}>{journey.nextStep.desc}</p>
          </div>
        )}

        {/* Social card */}
        <div style={{marginBottom:52}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
            <div style={{width:24,height:1,background:"var(--gold)"}}/>
            <span className="caps" style={{fontSize:8,letterSpacing:".2em",color:"var(--gold)"}}>SHARE YOUR MOONSHOT</span>
          </div>
          <div style={{display:"flex",gap:8,marginBottom:14}}>
            {["instagram","linkedin","twitter"].map(p=>(
              <button key={p} className={`btn ${cardPlatform===p?"btn-outline":"btn-ghost"} btn-sm`}
                onClick={()=>setCardPlatform(p)}>
                {p}
              </button>
            ))}
          </div>
          {journey.statement && (
            <button className="btn btn-outline btn-sm" onClick={()=>{
              const url=renderCard(journey.statement,journey.name,cardPlatform);
              const a=document.createElement("a");a.href=url;a.download=`moonshot-${cardPlatform}.png`;a.click();
            }}>
              Download Card ↓
            </button>
          )}
        </div>

        {/* Quote */}
        <div style={{borderTop:"1px solid var(--border)",paddingTop:32,textAlign:"center"}}>
          <p className="serif" style={{fontSize:"clamp(15px,2.5vw,20px)",fontStyle:"italic",color:"var(--mt)",lineHeight:1.75,maxWidth:480,margin:"0 auto 16px"}}>
            "The Second Renaissance needs your moonshot. This is how it begins."
          </p>
          <span className="caps" style={{fontSize:8,letterSpacing:".2em",color:"var(--gold-dim)"}}>DEVON SEEGERS</span>
        </div>

        {/* Restart */}
        <div style={{textAlign:"center",marginTop:40}}>
          <button className="btn btn-ghost btn-sm" onClick={()=>go("home")}>Begin Again →</button>
        </div>
      </div>
    </div>
  );
}

// ─── ROOT APP ──────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("home");
  const [journey, setJourney] = useState({});

  const go = useCallback((s, data) => {
    if (data) setJourney(p => ({...p, ...data}));
    setScreen(s);
    window.scrollTo({top:0,behavior:"instant"});
  }, []);

  const screens = {
    home:        <HomeScreen       go={go}/>,
    breathe:     <BreathingScreen  go={go}/>,
    name:        <NameScreen       go={go}/>,
    journey:     <JourneyScreen    go={go} journey={journey} setJourney={setJourney}/>,
    prompts:     <PromptsScreen    go={go} journey={journey} setJourney={setJourney}/>,
    emailgate:   <EmailGateScreen  go={go} journey={journey} setJourney={setJourney}/>,
    statement:   <StatementScreen  go={go} journey={journey} setJourney={setJourney}/>,
    genius:      <GeniusScreen     go={go} journey={journey} setJourney={setJourney}/>,
    celebration: <CelebrationScreen go={go} journey={journey}/>,
  };

  return (
    <>
      <G/>
      {screens[screen] || screens.home}
    </>
  );
}
