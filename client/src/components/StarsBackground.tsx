import { useEffect, memo } from "react";

// Using memo to prevent unnecessary re-renders
const StarsBackground = memo(() => {
  useEffect(() => {
    const starsContainer = document.getElementById("stars-container");
    if (!starsContainer) return;

    // Clear previous stars
    while (starsContainer.firstChild) {
      starsContainer.removeChild(starsContainer.firstChild);
    }

    // Performance optimized stars creation - using fragments and reduced elements
    const createStars = (
      count: number, 
      className: string, 
      size: string, 
      animationDuration: string, 
      colors?: string[]
    ) => {
      const defaultColors = ["#ffffff", "#8be9fd", "#bd93f9"];
      const starColors = colors || defaultColors;
      const fragment = document.createDocumentFragment();
      
      // Reduce count for better performance
      const adjustedCount = Math.floor(count * 0.6);
      
      for (let i = 0; i < adjustedCount; i++) {
        const star = document.createElement("div");
        star.classList.add(className);
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = size;
        star.style.height = size;
        
        // Optimize animation properties
        if (i % 3 === 0) { // Only 1/3 of stars get animations
          star.style.animationDelay = `${Math.random() * 5}s`;
          star.style.animationDuration = animationDuration;
        }
        
        // Apply random color from the palette
        const colorIndex = Math.floor(Math.random() * starColors.length);
        star.style.backgroundColor = starColors[colorIndex];
        
        // Reduce shadow intensity for better performance
        if (i % 2 === 0) { // Only half of stars get shadows
          star.style.boxShadow = `0 0 ${parseInt(size)}px ${starColors[colorIndex]}`;
        }
        
        fragment.appendChild(star);
      }
      
      starsContainer.appendChild(fragment);
    };
    
    // Create shooting stars - reduced count
    const createShootingStars = (count: number) => {
      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < count; i++) {
        const shootingStar = document.createElement("div");
        shootingStar.classList.add("shooting-star");
        
        // Random position and angle
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const angle = Math.random() * 45;
        
        shootingStar.style.top = `${startY}%`;
        shootingStar.style.left = `${startX}%`;
        shootingStar.style.transform = `rotate(${angle}deg)`;
        shootingStar.style.animationDelay = `${Math.random() * 15}s`;
        shootingStar.style.animationDuration = `${0.5 + Math.random() * 1}s`;
        
        fragment.appendChild(shootingStar);
      }
      
      starsContainer.appendChild(fragment);
    };

    // Create nebulas - reduced count and complexity
    const createNebulas = (count: number) => {
      const nebulaColors = [
        ["rgba(189, 147, 249, 0.15)", "rgba(139, 233, 253, 0.1)", "transparent"],
        ["rgba(255, 121, 198, 0.15)", "rgba(189, 147, 249, 0.1)", "transparent"]
      ];
      
      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < count; i++) {
        const nebula = document.createElement("div");
        nebula.classList.add("nebula");
        
        // Position and size
        nebula.style.top = `${10 + Math.random() * 80}%`;
        nebula.style.left = `${10 + Math.random() * 80}%`;
        nebula.style.opacity = `${0.08 + Math.random() * 0.1}`; // Lower opacity
        nebula.style.width = `${200 + Math.random() * 150}px`; // Smaller size
        nebula.style.height = `${200 + Math.random() * 150}px`;
        nebula.style.transform = `scale(${0.8 + Math.random()}) rotate(${Math.random() * 360}deg)`;
        
        // Choose a random color scheme
        const colorScheme = nebulaColors[Math.floor(Math.random() * nebulaColors.length)];
        nebula.style.background = `radial-gradient(
          circle at center,
          ${colorScheme[0]},
          ${colorScheme[1]} 50%,
          ${colorScheme[2]} 80%
        )`;
        
        // No animation for better performance
        
        fragment.appendChild(nebula);
      }
      
      starsContainer.appendChild(fragment);
    };
    
    // Create cosmic dust particles - significantly reduced count
    const createCosmicDust = (count: number) => {
      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < count; i++) {
        const dust = document.createElement("div");
        dust.classList.add("cosmic-dust");
        dust.style.top = `${Math.random() * 100}%`;
        dust.style.left = `${Math.random() * 100}%`;
        dust.style.opacity = `${0.05 + Math.random() * 0.2}`; // Lower opacity
        dust.style.width = `${1 + Math.random()}px`; // Smaller size
        dust.style.height = `${1 + Math.random()}px`;
        
        // Only animate a portion of particles
        if (i % 4 === 0) {
          dust.style.animationDelay = `${Math.random() * 5}s`;
          dust.style.animationDuration = `${15 + Math.random() * 10}s`;
        }
        
        fragment.appendChild(dust);
      }
      
      starsContainer.appendChild(fragment);
    };
    
    // Create optimized stars with different colors
    createStars(80, "star", "2px", "5s", ["#ffffff", "#8be9fd"]); // Small stars
    createStars(30, "star", "3px", "7s", ["#ffffff", "#ff79c6"]);  // Medium stars
    createStars(10, "star-large", "4px", "9s", ["#ffffff", "#f1fa8c"]); // Large stars
    
    // Add fewer cosmic elements for better performance
    createShootingStars(3);
    createNebulas(2);
    createCosmicDust(60);

    return () => {
      while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild);
      }
    };
  }, []); // Only run once on mount

  return (
    <div
      id="stars-container"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none will-change-transform"
    />
  );
});

export default StarsBackground;
