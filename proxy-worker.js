/**
 * WhatsMyMoonshot.ai — Cloudflare Worker Proxy
 * 
 * Deploy steps (5 minutes, free):
 * 1. Go to workers.cloudflare.com → sign up free
 * 2. Create New Worker → paste this code
 * 3. Settings → Variables → Add secret: ANTHROPIC_API_KEY = your key
 * 4. Save & Deploy
 * 5. Copy your worker URL (e.g. https://moonshot-proxy.yourname.workers.dev)
 * 6. In this repo: edit src/App.jsx line ~45, set PROXY_URL to your worker URL
 * 7. Rebuild: npm run build  →  push to gh-pages
 * Done — anyone can use the app with zero friction.
 */
export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const body = await request.json();

      const upstream = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify(body),
      });

      const data = await upstream.json();

      return new Response(JSON.stringify(data), {
        status: upstream.status,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: { message: err.message } }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      });
    }
  },
};

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
