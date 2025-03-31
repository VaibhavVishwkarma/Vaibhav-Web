#!/usr/bin/env bash

# abort on errors
set -e

# Navigate to the repository root (parent directory of the script)
cd "$(dirname "$0")"

echo "Starting GitHub Pages deployment process..."

# Build the frontend for GitHub Pages
echo "Building project with Vite..."
NODE_ENV=production npx vite build --config github-pages.vite.config.js

# Create a .nojekyll file to disable Jekyll processing
echo "Creating .nojekyll file..."
touch dist/.nojekyll

# Create a copy of index.html as 404.html for client-side routing
echo "Creating 404.html for client-side routing..."
cp dist/index.html dist/404.html

# If you want to deploy to a custom domain
# echo 'www.yourdomain.com' > dist/CNAME

echo "Build completed successfully!"

# Initialize Git if needed and prepare for deployment
echo "Initializing Git in dist folder..."
cd dist
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Check if GITHUB_TOKEN environment variable is available
if [ -n "$GITHUB_TOKEN" ]; then
  echo "Using GITHUB_TOKEN for authentication..."
  git remote add origin https://${GITHUB_TOKEN}@github.com/VaibhavVishwkarma/Vaibhav-Dev.git
  git push -f origin master:gh-pages
else
  echo "Using HTTPS for deployment..."
  # Force push to the gh-pages branch on GitHub
  git push -f https://github.com/VaibhavVishwkarma/Vaibhav-Dev.git master:gh-pages
fi

cd ..

echo "Deployment to GitHub Pages complete!"
echo "Your site should be available at: https://vaibhavvishwkarma.github.io/Vaibhav-Dev/"