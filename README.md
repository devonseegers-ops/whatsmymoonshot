# WhatsMyMoonshot.ai 🌙

> A trauma-informed, AI-powered journey to discover your transformative moonshot vision.

## What it does

WhatsMyMoonshot takes you through a 15-minute guided experience:
1. **Breathe** — A calming breathing exercise to arrive fully present
2. **Map your vision** — UN SDG-aligned vision quadrant (passion × talent × need × income)
3. **Reflect** — 5 deep questions with voice-to-text input
4. **Discover** — AI generates your personal moonshot statement + 3 genius zones
5. **Share** — Free social cards for Instagram, LinkedIn, and Twitter/X

## Tech Stack

- **Frontend:** React 18 + Vite
- **AI:** Anthropic Claude API (claude-sonnet-4-20250514)
- **Styling:** Pure CSS-in-JS with aurora animations
- **Voice:** Web Speech API
- **Export:** Canvas API for social cards, window.print() for PDF

## Getting Started

```bash
npm install
npm run dev
```

The app calls the Anthropic API directly from the client. In production, proxy this through a server endpoint to protect your API key.

## Deployment

```bash
npm run build
# Deploy /dist to Vercel, Netlify, or any static host
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/devonseegers-ops/whatsmymoonshot)

## Revenue Model

See `PLAYBOOK.md` for the full $1M strategy.

## Built by

Devon Seegers — [devonseegers@gmail.com](mailto:devonseegers@gmail.com)
