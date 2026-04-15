#!/bin/bash
# Run this once to activate auto-deployment
# Usage: bash decode-workflow.sh
echo "🌙 Activating WhatsMyMoonshot auto-deployment..."
mkdir -p .github/workflows
cat workflow_encoded.txt | base64 -d > .github/workflows/deploy.yml
echo "✅ Workflow created at .github/workflows/deploy.yml"
echo ""
echo "Now run: git add .github/ && git commit -m 'Enable CI/CD' && git push"
