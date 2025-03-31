#!/usr/bin/env bash

# abort on errors
set -e

# Build only the client side for GitHub Pages using the GitHub Pages specific config
vite build --config vite.gh-pages.config.ts

# Create a copy of index.html as 404.html in the dist directory for client-side routing
cp dist/index.html dist/404.html

# Create a .nojekyll file to disable Jekyll processing
touch dist/.nojekyll

echo "Client-side build for GitHub Pages completed!"