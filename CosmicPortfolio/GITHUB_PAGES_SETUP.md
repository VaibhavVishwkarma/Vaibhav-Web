# GitHub Pages Setup Guide

This document explains how the GitHub Pages deployment is configured for this portfolio website.

## Configuration Overview

The portfolio is set up to deploy as a client-side only application on GitHub Pages, utilizing the following setup:

### 1. SPA Routing on GitHub Pages

GitHub Pages doesn't natively support single-page applications with client-side routing. When a user refreshes the page or accesses a direct URL (like `/projects`), GitHub Pages would return a 404 error. To solve this, we implement the SPA GitHub Pages pattern:

- We include a script in `index.html` that handles routing for GitHub Pages
- We create a custom `404.html` that redirects back to the main app with the original path preserved

### 2. Build Process for GitHub Pages

The build process is configured in two ways:

- **Manual Deployment**: Using `deploy.sh` script
- **Automated Deployment**: Using GitHub Actions workflow in `.github/workflows/deploy.yml`

Both methods build a client-side only version of the app and push it to the `gh-pages` branch.

### 3. File Structure After Build

The build process creates:
- Regular application files in `dist/`
- A copy of `index.html` as `404.html` to handle redirects

## How the Routing Works

1. When a user accesses a direct URL like `https://vaibhavvishwkarma.github.io/Portfolio-Vaibhav/projects`
2. GitHub serves the `404.html` file (since the path doesn't exist as a file)
3. The script in `404.html` captures the original URL
4. It redirects to the root with the path in a special query parameter
5. The script in `index.html` reads this parameter and restores the original URL

## Custom Domain Configuration

If you want to use a custom domain:

1. In your GitHub repository, go to Settings > Pages
2. Enter your custom domain and follow GitHub's instructions for DNS setup
3. Update `client/.env.production` with your domain
4. Uncomment the CNAME line in `deploy.sh` and update with your domain

## Troubleshooting

- **White screen on refresh**: Ensure the 404.html redirect is working correctly
- **Assets not loading**: Make sure paths are relative or use the BASE_PATH environment variable
- **Custom domain not working**: Verify DNS settings and wait for propagation (can take up to 24 hours)

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [SPA GitHub Pages Pattern](https://github.com/rafgraph/spa-github-pages)