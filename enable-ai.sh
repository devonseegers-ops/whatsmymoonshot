#!/bin/bash
# WhatsMyMoonshot — Enable AI for all visitors
# Run this on your own computer (not in Claude)
# Usage: bash enable-ai.sh YOUR_ANTHROPIC_API_KEY

set -e
KEY="$1"
if [ -z "$KEY" ]; then
  echo "Usage: bash enable-ai.sh sk-ant-YOUR-KEY"
  exit 1
fi

echo "🌙 Setting up WhatsMyMoonshot AI..."

# Clone or pull latest
if [ -d "whatsmymoonshot" ]; then
  cd whatsmymoonshot && git pull
else
  git clone https://github.com/devonseegers-ops/whatsmymoonshot.git
  cd whatsmymoonshot
fi

# Add workflow file
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'WORKFLOW'
name: Build & Deploy
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm install
      - run: npm run build
        env:
          VITE_ANTHROPIC_API_KEY: ${{ secrets.VITE_ANTHROPIC_API_KEY }}
      - name: Deploy to gh-pages
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git checkout gh-pages 2>/dev/null || git checkout --orphan gh-pages
          git rm -rf . --quiet 2>/dev/null || true
          git checkout main -- dist/ || true
          cp -r dist/. . 2>/dev/null || true
          rm -rf dist node_modules .github src
          git add -A
          git commit -m "🚀 Auto-deploy with AI" || echo "Nothing to commit"
          git push origin gh-pages --force
WORKFLOW

# Commit and push workflow
git add .github/workflows/deploy.yml
git commit -m "⚙️ Add auto-deploy workflow with AI"
git push

echo ""
echo "✅ Workflow pushed!"
echo ""
echo "🔑 Now add your API key as a GitHub Secret:"
echo "   1. Go to: https://github.com/devonseegers-ops/whatsmymoonshot/settings/secrets/actions/new"
echo "   2. Name:   VITE_ANTHROPIC_API_KEY"  
echo "   3. Secret: $KEY"
echo "   4. Click:  Add secret"
echo ""
echo "Then go to: https://github.com/devonseegers-ops/whatsmymoonshot/actions"
echo "Click 'Build & Deploy' → 'Run workflow' → 'Run workflow'"
echo ""
echo "In 2 minutes, everyone gets full AI at:"
echo "https://devonseegers-ops.github.io/whatsmymoonshot/"
