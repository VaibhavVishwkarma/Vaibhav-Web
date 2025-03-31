# GitHub Pages Deployment Guide

This document explains how to deploy your portfolio to GitHub Pages.

## Prerequisites

1. Create a GitHub account if you don't have one already
2. Create a new repository named `Vaibhav-Web`

## Deployment Steps

### Option 1: Using the Deploy Script

1. Make sure you have Git installed on your computer
2. Clone your repository:
   ```sh
   git clone https://github.com/YourUsername/Vaibhav-Web.git
   ```
3. Navigate to the project directory:
   ```sh
   cd Vaibhav-Web
   ```
4. Copy all files from this Replit project to your local repository
5. Run the deployment script:
   ```sh
   ./deploy-gh-pages.sh
   ```

### Option 2: Manual Deployment

1. Build the project for GitHub Pages:
   ```sh
   NODE_ENV=production vite build --config github-pages.vite.config.js
   ```
2. Create a `.nojekyll` file in the `dist` directory:
   ```sh
   touch dist/.nojekyll
   ```
3. Copy `index.html` to `404.html` for client-side routing:
   ```sh
   cp dist/index.html dist/404.html
   ```
4. Initialize Git in the `dist` directory:
   ```sh
   cd dist
   git init
   git add -A
   git commit -m "Deploy to GitHub Pages"
   ```
5. Push to the `gh-pages` branch of your repository:
   ```sh
   git push -f https://github.com/YourUsername/Vaibhav-Web.git master:gh-pages
   ```

## After Deployment

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Ensure the source is set to the `gh-pages` branch
4. Wait a few minutes for your site to be published
5. Your site will be available at `https://yourusername.github.io/Vaibhav-Web/`

## Troubleshooting

If your site shows a 404 error after deployment:
1. Ensure your repository name is exactly `Vaibhav-Web` (case sensitive)
2. Check that the `base` property in `github-pages.vite.config.js` matches your repository name
3. Verify that GitHub Pages is enabled in your repository settings
4. Ensure the `.nojekyll` file exists in your deployed site

## Custom Domain (Optional)

If you want to use a custom domain:
1. Uncomment the CNAME line in the `deploy-gh-pages.sh` script and replace with your domain
2. Configure your domain's DNS settings according to GitHub's instructions
3. In your repository settings, add your custom domain under the GitHub Pages section