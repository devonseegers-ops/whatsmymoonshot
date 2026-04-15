# WhatsMyMoonshot.ai — The $1M Playbook

> *"The fastest path to $1M isn't finding a million customers. It's finding 300 coaches who each work with 30 clients."*

---

## The Thesis

WhatsMyMoonshot is not a consumer app. It's a **professional coaching tool** that happens to have a consumer frontend. The $1M is in B2B — specifically in the 50,000+ certified coaches, facilitators, HR leaders, and educators who need exactly this for their practice.

Consumer is top-of-funnel. B2B is the engine.

---

## Revenue Model

### Three Streams

| Stream | Price | Volume for $1M |
|--------|-------|----------------|
| Consumer Pro | $29 one-time | 34,500 conversions |
| Coach/Facilitator | $97–297/mo | ~350 coaches avg $240 |
| Teams/Enterprise | $299–2,500/mo | ~80 teams avg $1,000 |

**The $1M Formula (Year 1 target):**
- 250 coaches × $197/mo avg × 12 months = **$591,000**
- 3,000 consumer pro upgrades × $29 = **$87,000**
- 20 teams × $499/mo avg × 12 months = **$119,760**
- 5 enterprise workshops × $10,000 = **$50,000**
- **Total: $847,760** → Push to **$1M+ by Month 14**

---

## 90-Day Sprint

### Month 1: Foundation
**Goal: First $10K in revenue**

**Week 1 — Technical (do these first):**
1. Connect **Stripe** (stripe.com) — 30 minutes to set up:
   - Product: "Moonshot Pro" — $29 one-time
   - Product: "Coach Solo" — $97/mo recurring
   - Product: "Coach Studio" — $297/mo recurring
   - Product: "Teams" — $299/mo recurring
   - Replace the `alert()` stubs in the app with `stripe.redirectToCheckout()`
2. Connect **Mailchimp or ConvertKit** — capture emails from the email gate:
   - POST to Mailchimp API when user submits email
   - Segment by: free user / paid user / coach
   - Welcome sequence: 5 emails over 2 weeks reinforcing their moonshot
3. Set up **Google Analytics** and **Hotjar** — know where people drop off
4. Buy domain: **whatsmymoonshot.ai** (or .com if available)
5. Deploy to **Vercel** (free tier) — takes 15 minutes

**Week 2 — Coach Outreach:**
Target: 20 discovery calls with coaches

Where to find them:
- **ICF Community** (coachingfederation.org) — post in forums
- **LinkedIn** — search "ICF ACC/PCC/MCC" + DM 50/day
- **Facebook groups** — "Life Coaches" (800K members), "Coaching Business Growth"
- **Reddit** — r/lifecoaching, r/executivecoaching
- **Podcast appearances** — pitch yourself to coaching podcasts

DM script:
> *"Hey [Name] — I built a 15-min AI tool that helps clients discover their 'moonshot vision' in one session. It's trauma-informed and generates a personalized statement. Happy to give you free access if you'll try it with 3 clients and give me feedback. Would that be useful?"*

**Week 3 — Content Engine:**
- Post Devon's personal moonshot story on LinkedIn (personal, vulnerable, specific)
- TikTok/Reels: film yourself going through the breathing + reveal of statement
- Tweet the sample moonshot format: "I am here to ___ so that ___. What's yours?"
- Guest post on 2 coaching blogs

**Week 4 — First Cohort:**
- Run a free "Moonshot Discovery" group session for 20-30 coaches
- Use Zoom + the app simultaneously
- Record it (with permission) for testimonials
- Offer cohort members $97/mo coach plan at $49/mo founding rate

---

### Month 2: Prove the Coach Model
**Goal: 30 paying coaches ($2,910–$8,910/mo MRR)**

**Build:**
- Coach dashboard (minimal): see client list, session count, notes
- Group session mode: facilitator can run a room of 20+ through the journey simultaneously
- White-label option (basic): coach can embed with their own colors + logo

**Sell:**
- Productize the group session: "Run a Moonshot Workshop with your team/cohort"
- Pricing: $297 for a 2-hour facilitated session (Devon facilitates), or license the tool for coaches to do it themselves
- Partner with 2 coaching schools (CTI, iPEC, Coactive Training Institute)

**Viral mechanics:**
- Every exported social card has "Discover yours at WhatsMyMoonshot.ai" in the footer
- Every coach's clients become potential consumer users
- 30 coaches × 10 clients each = 300 new free users/month from coach channel alone

---

### Month 3: Team & Enterprise
**Goal: First $50K month**

**Build:**
- Team admin dashboard: invite team members, see aggregate genius zones, run reports
- "Team Alignment Report": AI-generated synthesis of all team moonshots — where do they overlap? What's the collective vision? This is the enterprise product.
- Slack integration: share moonshot in Slack with one click

**Target buyers:**
- **Startup accelerators** (Techstars, YC alumni, On Deck) — run Moonshot Workshops for cohorts
- **HR/People teams at 100-500 person companies** — team alignment, new hire onboarding
- **University career centers** — junior year purpose sessions
- **Corporate L&D teams** — leadership development programs

**Enterprise pitch:**
> *"We run a 90-minute Moonshot Workshop for your leadership team. Every leader leaves with their personal moonshot and a clear next step. You get a Team Alignment Report showing collective vision and individual genius zones. $3,500 for teams up to 20. $7,500 for teams up to 50."*

---

## Go-to-Market Channels (Ranked by ROI)

### 1. Direct Coach Outreach (Highest ROI)
- 50 DMs/day on LinkedIn = ~5 calls/week = ~2 sign-ups/week
- Cost: 1 hour/day of Devon's time
- Month 3 projection: 40+ paying coaches

### 2. Content Marketing (Compound Returns)
- Devon's personal moonshot story → LinkedIn viral post (aim for 50K+ impressions)
- Weekly "Moonshot of the Week" featuring real user statements (with permission)
- "What's your moonshot?" challenge — tag 3 friends
- TikTok: 60-second "I went through WhatsMyMoonshot and here's what came out" videos

### 3. Podcast Tour
Target shows:
- The Life Coach School Podcast (Brooke Castillo — 400K listeners)
- The Tony Robbins Podcast
- How I Built This
- The Tim Ferriss Show
- Being Boss
- Coaching for Leaders
- WorkLife with Adam Grant

Angle: *"I built an AI tool that does in 15 minutes what took me 3 years of therapy to figure out."*

### 4. Partnership Channel
- **ICF** — become an official ICF partner tool ($5K/yr sponsorship gets you in front of 50K coaches)
- **Coaching school partnerships** — CTI, iPEC, Coactive — offer student discounts, get added to curriculum
- **LinkedIn Learning** — pitch as a companion tool for leadership courses
- **Insight Timer** — cross-promotion with meditation community (natural overlap)

### 5. Paid Acquisition (Month 4+)
Only after organic proves the model:
- Facebook/Instagram ads targeting coaches, HR professionals, career counselors
- Target CPA: $15 (free signup) → $29 LTV on consumer, $1,164 LTV on coach at 12-month retention
- Google Ads: "life purpose tool", "moonshot vision", "find your why"

---

## Pricing Psychology

### Consumer: $29 is the magic number
- Under the "impulse buy" threshold ($30)
- Feels like a book price — low risk
- One-time removes subscription anxiety
- Upgrade CTA should appear AFTER they see their statement (peak emotional moment)

### Coach: $97 is the anchor
- Less than one client session ($150–300/hr)
- "Pays for itself in 30 minutes of work"
- Upgrade path: $297 when they want to add team members or white-label

### Teams: $299 is a no-brainer for HR
- Less than one conference ticket
- Compare to: Gallup StrengthsFinder ($25/person × 20 = $500), DiSC assessment ($50/person × 20 = $1,000)
- WhatsMyMoonshot Teams: $299/mo for unlimited sessions

---

## The Product Roadmap to $1M

### Now (App is ready):
- ✅ Full 8-screen journey
- ✅ AI statement + genius zones
- ✅ Social cards + PDF
- ✅ Email capture
- ✅ Viral sharing CTAs
- ✅ Landing page with pricing

### Week 1 (Revenue-critical):
- [ ] Stripe integration (replace alert() stubs)
- [ ] Mailchimp/ConvertKit email capture
- [ ] Deploy to production
- [ ] Domain + SSL

### Month 1–2 (Coach product):
- [ ] Coach dashboard (client list, session notes)
- [ ] Group session mode (facilitator runs 20+ people simultaneously)
- [ ] Basic white-label (custom colors/logo for coaches)
- [ ] Coach onboarding email sequence

### Month 2–3 (Team product):
- [ ] Team invite system
- [ ] Team alignment report (AI synthesis of all team moonshots)
- [ ] Admin dashboard
- [ ] Slack integration

### Month 3–4 (Scale):
- [ ] Mobile app (Capacitor wrapper — 2 days of work)
- [ ] Referral system with tracking
- [ ] Affiliate program for coaches (20% recurring)
- [ ] API access for enterprise integrations

---

## The Unfair Advantages

1. **Trauma-informed design** — no competitor has this framing. It's a real differentiator with coaches who work with complex clients.

2. **The "I am here to..." format** — ownable, shareable, memorable. This is the meme. Every time someone posts their statement, it's marketing.

3. **The breathing exercise** — positions this as a *ritual*, not a tool. Rituals have retention. Tools get forgotten.

4. **AI personalization at scale** — each statement is genuinely unique. This isn't a quiz with 12 outputs. The AI makes every person feel seen.

5. **Devon's story** — the founder's personal moonshot journey IS the marketing. Lead with it.

---

## The $1M Milestone Map

| Month | MRR | Key Milestone |
|-------|-----|---------------|
| 1 | $2,500 | Stripe live, first 10 paying coaches |
| 2 | $8,000 | 30 coaches, first team customer |
| 3 | $18,000 | 60 coaches, first enterprise workshop |
| 4 | $30,000 | 100 coaches, group session mode live |
| 6 | $55,000 | 200 coaches, mobile app launched |
| 9 | $75,000 | 300 coaches, team product stable |
| 12 | $95,000 | ~$1M ARR run rate |
| 14 | $100,000+ | **$1M ARR achieved** |

---

## The First 5 Things To Do Monday Morning

1. **Go to stripe.com** → create account → add 4 products (Pro $29, Coach $97, Studio $297, Teams $299) → replace alert() stubs in app with Stripe checkout links. **Time: 2 hours.**

2. **Deploy to Vercel** → connect GitHub → set ANTHROPIC_API_KEY env variable → push. **Time: 30 minutes.**

3. **Post Devon's moonshot story on LinkedIn** — personal, specific, vulnerable. Include a link to the live app. **Time: 1 hour to write.**

4. **DM 20 coaches on LinkedIn today** — use the script above. **Time: 45 minutes.**

5. **Set up a Calendly** for "Moonshot Discovery Calls" and put the link in your LinkedIn bio. **Time: 15 minutes.**

Total time to first dollar: **~4 hours of focused work.**

---

## What Success Looks Like

In 12 months: 300 coaches using WhatsMyMoonshot with their clients, running 3,000+ sessions per month. Each session plants a seed. Each shared moonshot statement is a billboard. Each coach is a distribution channel.

The app is already built. The product is real. The market is waiting.

The only thing standing between Devon and $1M is the 50 LinkedIn DMs she hasn't sent yet.

---

*Built overnight. Meant to last.*
