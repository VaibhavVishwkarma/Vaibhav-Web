# GitHub Pages Deployment Guide

This guide provides detailed instructions for successfully deploying your portfolio website to GitHub Pages.

## Prerequisites

1. You need a GitHub account
2. Your repository should be named `Vaibhav-Dev` (case-sensitive)
3. You need to enable GitHub Pages for your repository

## Method 1: Using GitHub Actions (Recommended)

GitHub Actions can automatically build and deploy your site whenever you push changes to the main branch.

### Setup

1. Make sure you have the following files in your repository:
   - `.github/workflows/deploy.yml`
   - `.github/workflows/debug-deploy.yml`

2. Push your code to the main branch of your GitHub repository.

3. Go to your repository's Settings → Pages:
   - Set the Source to "GitHub Actions"

4. GitHub Actions will automatically build and deploy your site.

## Method 2: Manual Deployment

If GitHub Actions doesn't work for some reason, you can deploy manually.

### Option 1: Using the deploy-gh-pages.sh Script

1. Clone your repository:
   ```sh
   git clone https://github.com/VaibhavVishwkarma/Vaibhav-Dev.git
   ```

2. Navigate to the project directory:
   ```sh
   cd Vaibhav-Dev
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Make the deploy script executable:
   ```sh
   chmod +x deploy-gh-pages.sh
   ```

5. Run the deployment script:
   ```sh
   ./deploy-gh-pages.sh
   ```

### Option 2: Manual Steps

1. Build the project:
   ```sh
   NODE_ENV=production npx vite build --config github-pages.vite.config.js
   ```

2. Create necessary files for GitHub Pages:
   ```sh
   touch dist/.nojekyll
   cp dist/index.html dist/404.html
   ```

3. Deploy using Git:
   ```sh
   cd dist
   git init
   git add -A
   git commit -m "Deploy to GitHub Pages"
   git push -f https://github.com/VaibhavVishwkarma/Vaibhav-Dev.git master:gh-pages
   ```

## Troubleshooting

### If you see 404 errors:

1. Ensure GitHub Pages is enabled in your repository settings
2. Make sure the source is set to the `gh-pages` branch
3. Check that the `.nojekyll` file exists in your repository
4. Verify that the `base` property in `github-pages.vite.config.js` is set to `/Vaibhav-Dev/`
5. Check that the 404.html redirects are working properly

### If GitHub Actions fails:

1. Check the GitHub Actions logs for specific errors
2. Ensure you have the correct permissions set in the workflow file
3. Make sure all the required dependencies are installed
4. Try the manual deployment method as an alternative

### Authentication Issues:

If you're having trouble pushing to the repository, you might need to set up a Personal Access Token:

1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate a new token with `repo` scope
3. Use this token in your deployment script:
   ```sh
   git push -f https://USERNAME:TOKEN@github.com/VaibhavVishwkarma/Vaibhav-Dev.git master:gh-pages
   ```

## After Deployment

Your site should be available at:
https://vaibhavvishwkarma.github.io/Vaibhav-Dev/

Changes may take a few minutes to appear after deployment.