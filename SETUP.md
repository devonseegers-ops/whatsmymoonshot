# 🌙 WhatsMyMoonshot — 5-Minute Setup to Enable AI for Everyone

This enables full AI features for ALL visitors — no key screen, no friction.

## What You Need
- Your Anthropic API key (get free at [console.anthropic.com](https://console.anthropic.com))
- Git installed ([git-scm.com](https://git-scm.com))
- 5 minutes

---

## Option A: GitHub Actions (Recommended — auto-deploys on every push)

**Step 1: Clone the repo to your computer**
```bash
git clone https://github.com/devonseegers-ops/whatsmymoonshot.git
cd whatsmymoonshot
```

**Step 2: Add the GitHub Actions workflow**
```bash
mkdir -p .github/workflows
```
Then copy the file `.github/workflows/deploy.yml` from this repo into that folder.

**Step 3: Add your Anthropic key as a GitHub Secret**

Go to: `https://github.com/devonseegers-ops/whatsmymoonshot/settings/secrets/actions/new`
- Name: `VITE_ANTHROPIC_API_KEY`
- Secret: your key from console.anthropic.com
- Click **Add secret**

**Step 4: Push**
```bash
git add .github/
git commit -m "Enable AI for all visitors"
git push origin main
```

GitHub Actions will automatically build and deploy. Done in ~2 minutes. ✓

---

## Option B: Build Locally (One-time deploy)

**Step 1: Clone & install**
```bash
git clone https://github.com/devonseegers-ops/whatsmymoonshot.git
cd whatsmymoonshot
npm install
```

**Step 2: Build with your key**
```bash
VITE_ANTHROPIC_API_KEY=sk-ant-YOUR-KEY-HERE npm run build
```

**Step 3: Deploy the dist/ folder to gh-pages**
```bash
npm install -g gh-pages
gh-pages -d dist
```

Done. Every visitor gets full AI — personalized moonshot statement, genius zones, 90-day roadmap. ✓

---

## Option C: Cloudflare Worker Proxy (Keeps key server-side)

See `proxy-worker.js` in this repo. Deploy to Cloudflare Workers (free tier),
then set `VITE_PROXY_URL` in your environment instead of `VITE_ANTHROPIC_API_KEY`.

---

## What Happens Without Setup

The app still works for everyone — they can write their own moonshot statement
using the guided template. AI just makes it richer.
