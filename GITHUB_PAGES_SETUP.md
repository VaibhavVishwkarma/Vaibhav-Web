# GitHub Pages Deployment Guide

This document provides instructions for deploying this portfolio website to GitHub Pages.

## Prerequisites

1. Make sure you have a GitHub account
2. Create a repository at https://github.com/VaibhavVishwkarma/Portfolio-Vaibhav.git
3. Ensure you have Git installed on your local machine

## Preparation Steps

Before deploying to GitHub Pages, you'll need to make the following changes:

### 1. Update vite.config.ts

When copying this project for deployment, modify the `vite.config.ts` file to include:

```typescript
// Add this line after the build configuration
base: '/Portfolio-Vaibhav/', // Replace with your repository name
```

### 2. Modify package.json Scripts

Update the scripts section in package.json to:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

## Deployment Options

### Option 1: Manual Deployment

1. Run the build command:
```bash
npm run build
```

2. Navigate to the build directory:
```bash
cd dist
```

3. Initialize a Git repository:
```bash
git init
git add -A
git commit -m "Deploy to GitHub Pages"
```

4. Push to the gh-pages branch:
```bash
git push -f https://github.com/VaibhavVishwkarma/Portfolio-Vaibhav.git master:gh-pages
```

### Option 2: Using the Deployment Script

1. Make the deploy script executable:
```bash
chmod +x deploy.sh
```

2. Run the deploy script:
```bash
./deploy.sh
```

### Option 3: GitHub Actions

1. Push your code to the main branch of your repository
2. GitHub Actions will automatically build and deploy to the gh-pages branch

## Accessing Your Live Site

After deployment, your site will be available at:
`https://vaibhavvishwkarma.github.io/Portfolio-Vaibhav/`

## Troubleshooting

- If your site doesn't appear, check the GitHub Pages settings in your repository
- Make sure the gh-pages branch is set as the source for GitHub Pages
- Verify that all paths in your code are relative and use the correct base path