#!/usr/bin/env bash

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# Git initialization and deployment
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# replace with your actual GitHub username and repository name
git push -f https://github.com/VaibhavVishwkarma/Portfolio-Vaibhav.git master:gh-pages

cd -

echo "Deployment complete!"