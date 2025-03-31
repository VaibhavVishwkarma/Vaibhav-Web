#!/usr/bin/env bash

# abort on errors
set -e

# Build only the client side for GitHub Pages
vite build

# Create a copy of index.html as 404.html in the dist directory
cp dist/index.html dist/404.html

echo "Client-side build for GitHub Pages completed!"