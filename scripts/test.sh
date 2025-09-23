#!/bin/bash
set -e

echo "=== React Frontend Checks ==="

# 1. Formatting check
echo "--- Checking formatting with Prettier (src only) ---"
if ! npx prettier --check "client/src/**/*.{js,jsx,ts,tsx,json,css,md}"; then
  echo "⚠️ Formatting issues found. Run:"
  echo "   npx prettier --write src/"
  exit 1
fi
echo "✅ Formatting check passed."

# 2. Linting check
echo "--- Running ESLint ---"
if ! npx eslint client/src --ext .js,.jsx,.ts,.tsx; then
  echo "⚠️ ESLint found issues."
  exit 1
fi
echo "✅ ESLint check passed."

# 3. Security check
echo "--- Running npm audit ---"
if ! npm audit --production; then
  echo "⚠️ Security vulnerabilities detected. Run 'npm audit fix' to try fixing."
  exit 1
fi
echo "✅ Security audit passed."

# 5. Build check
echo "--- Building React app ---"
if ! npm run build; then
  echo "⚠️ Build failed."
  exit 1
fi
echo "✅ Build succeeded."

echo "🎉 All checks passed successfully!"

