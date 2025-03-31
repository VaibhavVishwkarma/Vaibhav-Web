#!/usr/bin/env bash

# abort on errors
set -e

# Build the frontend for GitHub Pages
NODE_ENV=production npx vite build --config github-pages.vite.config.js

# Create a .nojekyll file to disable Jekyll processing
touch dist/.nojekyll

# Create a copy of index.html as 404.html for client-side routing
cp dist/index.html dist/404.html

echo "Build completed successfully!"