#!/usr/bin/env bash

# abort on errors
set -e

# Navigate to the repository root (parent directory of the script)
cd "$(dirname "$0")"

# Build the frontend for GitHub Pages
# npm run build:gh-pages
NODE_ENV=production vite build --config github-pages.vite.config.js

# Create a .nojekyll file to disable Jekyll processing
touch dist/.nojekyll

# Create a copy of index.html as 404.html for client-side routing
cp dist/index.html dist/404.html

# If you want to deploy to a custom domain
# echo 'www.yourdomain.com' > dist/CNAME

echo "Build completed successfully!"

# Initialize Git if needed and prepare for deployment
cd dist
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch on GitHub
git push -f https://github.com/VaibhavVishwkarma/Vaibhav-Web.git master:gh-pages

cd ..

echo "Deployment to GitHub Pages complete!"