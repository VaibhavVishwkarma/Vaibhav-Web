#!/usr/bin/env bash

# abort on errors
set -e

# Build client-side only for GitHub Pages
./build-gh-pages.sh

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# Git initialization and deployment
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Push to the gh-pages branch
git push -f https://github.com/VaibhavVishwkarma/Vaibhav-Web.git master:gh-pages

cd -

echo "Deployment complete!"