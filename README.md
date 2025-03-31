# 🌌 Galaxy-Themed Portfolio

A colorful, punchy, and blunt galaxy-themed portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, a responsive design, and a striking visual style.

## 🔥 Features

- ✨ Animated stars background for immersive space theme
- 🧑‍🚀 Custom typing effect for text animations
- 📱 Fully responsive design for all device sizes
- 🌙 Light/dark mode toggle
- 🎯 Sections for skills, projects, experience, education, certificates, and contact
- 🚀 Easy deployment to GitHub Pages

## 🛠️ Built With

- React
- TypeScript
- Tailwind CSS
- Vite
- Wouter (for routing)
- React Icons
- Framer Motion (for animations)

## 🚀 Deployment to GitHub Pages

The website is configured for easy deployment to GitHub Pages. You can deploy it in two ways:

### Manual Deployment

1. Make your changes
2. Run the deploy script (ensure you have Git configured with your GitHub credentials):
```bash
./deploy.sh
```
3. The site will be deployed to: https://vaibhavvishwkarma.github.io/Portfolio-Vaibhav/

### Automated Deployment with GitHub Actions

1. Push your changes to the main branch:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```
2. GitHub Actions will automatically build and deploy to the gh-pages branch
3. The site will be accessible at: https://vaibhavvishwkarma.github.io/Portfolio-Vaibhav/

### Important GitHub Pages Configuration Notes

1. The site uses client-side routing with the SPA GitHub Pages setup
2. 404.html is automatically created during build to handle refresh issues
3. If you add custom domain, update client/.env.production with your domain

## 🧪 Development

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
4. Navigate to `http://localhost:5173` to view the website

## 📂 Project Structure

- `client/public/` - Static assets
- `client/src/components/` - React components
- `client/src/data/` - Portfolio data
- `client/src/hooks/` - Custom React hooks
- `client/src/pages/` - Page components
- `client/src/lib/` - Utility functions

## 🛡️ License

This project is licensed under the MIT License - see the LICENSE file for details.