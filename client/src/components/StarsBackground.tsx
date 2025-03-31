import { useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const StarsBackground = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    const starsContainer = document.getElementById("stars-container");
    if (!starsContainer) return;

    // Clear previous stars
    while (starsContainer.firstChild) {
      starsContainer.removeChild(starsContainer.firstChild);
    }

    // Create stars with different colors and effects
    const createStars = (
      count: number, 
      className: string, 
      size: string, 
      animationDuration: string, 
      colors?: string[]
    ) => {
      const defaultColors = ["#ffffff", "#8be9fd", "#bd93f9", "#ff79c6", "#50fa7b"];
      const starColors = colors || defaultColors;
      
      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.classList.add(className);
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = size;
        star.style.height = size;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.animationDuration = animationDuration;
        
        // Apply random color from the palette
        const colorIndex = Math.floor(Math.random() * starColors.length);
        star.style.backgroundColor = starColors[colorIndex];
        
        // Add box shadow with the same color for glow effect
        star.style.boxShadow = `0 0 ${parseInt(size) * 2}px ${starColors[colorIndex]}`;
        
        starsContainer.appendChild(star);
      }
    };
    
    // Create shooting stars
    const createShootingStars = (count: number) => {
      for (let i = 0; i < count; i++) {
        const shootingStar = document.createElement("div");
        shootingStar.classList.add("shooting-star");
        
        // Random position and angle
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const angle = Math.random() * 45; // Angle between 0 and 45 degrees
        
        shootingStar.style.top = `${startY}%`;
        shootingStar.style.left = `${startX}%`;
        shootingStar.style.transform = `rotate(${angle}deg)`;
        shootingStar.style.animationDelay = `${Math.random() * 15}s`;
        shootingStar.style.animationDuration = `${0.5 + Math.random() * 1}s`;
        
        starsContainer.appendChild(shootingStar);
      }
    };

    // Create colorful nebula/galaxy elements
    const nebulaColors = [
      ["rgba(189, 147, 249, 0.25)", "rgba(139, 233, 253, 0.15)", "rgba(80, 250, 123, 0.05)"], // Purple to cyan to green
      ["rgba(255, 121, 198, 0.25)", "rgba(189, 147, 249, 0.15)", "rgba(139, 233, 253, 0.05)"], // Pink to purple to cyan
      ["rgba(80, 250, 123, 0.25)", "rgba(255, 184, 108, 0.15)", "rgba(255, 121, 198, 0.05)"], // Green to orange to pink
      ["rgba(241, 250, 140, 0.25)", "rgba(80, 250, 123, 0.15)", "rgba(139, 233, 253, 0.05)"], // Yellow to green to cyan
      ["rgba(255, 85, 85, 0.25)", "rgba(255, 184, 108, 0.15)", "rgba(241, 250, 140, 0.05)"] // Red to orange to yellow
    ];
    
    for (let i = 0; i < 5; i++) {
      const nebula = document.createElement("div");
      nebula.classList.add("nebula");
      
      // Position and size
      nebula.style.top = `${10 + Math.random() * 80}%`;
      nebula.style.left = `${10 + Math.random() * 80}%`;
      nebula.style.opacity = `${0.1 + Math.random() * 0.15}`;
      nebula.style.width = `${250 + Math.random() * 200}px`;
      nebula.style.height = `${250 + Math.random() * 200}px`;
      nebula.style.transform = `scale(${0.8 + Math.random() * 1.5}) rotate(${Math.random() * 360}deg)`;
      
      // Choose a random color scheme
      const colorScheme = nebulaColors[Math.floor(Math.random() * nebulaColors.length)];
      nebula.style.background = `radial-gradient(
        circle at center,
        ${colorScheme[0]},
        ${colorScheme[1]} 40%,
        ${colorScheme[2]} 70%,
        transparent 80%
      )`;
      
      // Randomize animation
      nebula.style.animationDuration = `${15 + Math.random() * 10}s`;
      
      starsContainer.appendChild(nebula);
    }
    
    // Create cosmic dust particles
    const createCosmicDust = (count: number) => {
      for (let i = 0; i < count; i++) {
        const dust = document.createElement("div");
        dust.classList.add("cosmic-dust");
        dust.style.top = `${Math.random() * 100}%`;
        dust.style.left = `${Math.random() * 100}%`;
        dust.style.opacity = `${0.1 + Math.random() * 0.4}`;
        dust.style.width = `${1 + Math.random() * 2}px`;
        dust.style.height = `${1 + Math.random() * 2}px`;
        dust.style.animationDelay = `${Math.random() * 10}s`;
        dust.style.animationDuration = `${20 + Math.random() * 20}s`;
        starsContainer.appendChild(dust);
      }
    };
    
    // Create pulse effect elements
    const createPulses = (count: number) => {
      const pulseColors = ["#8be9fd", "#bd93f9", "#ff79c6", "#50fa7b", "#f1fa8c"];
      
      for (let i = 0; i < count; i++) {
        const pulse = document.createElement("div");
        pulse.classList.add("pulse-effect");
        pulse.style.top = `${20 + Math.random() * 60}%`;
        pulse.style.left = `${20 + Math.random() * 60}%`;
        
        // Random color
        const color = pulseColors[Math.floor(Math.random() * pulseColors.length)];
        pulse.style.borderColor = color;
        
        // Random timing
        pulse.style.animationDelay = `${Math.random() * 15}s`;
        pulse.style.animationDuration = `${8 + Math.random() * 7}s`;
        
        starsContainer.appendChild(pulse);
      }
    };
    
    // Create stars with different colors
    createStars(150, "star", "2px", "5s", ["#ffffff", "#8be9fd", "#bd93f9"]); // Small stars
    createStars(60, "star", "3px", "7s", ["#ffffff", "#ff79c6", "#50fa7b"]);  // Medium stars
    createStars(25, "star-large", "4px", "9s", ["#ffffff", "#f1fa8c", "#8be9fd"]); // Large stars
    createStars(15, "star-bright", "3px", "3s", ["#ffffff", "#ff79c6", "#50fa7b"]); // Bright stars
    
    // Add more cosmic elements
    createShootingStars(5);
    createCosmicDust(200);
    createPulses(3);

    return () => {
      while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild);
      }
    };
  }, [theme]); // Re-run when theme changes

  return (
    <div
      id="stars-container"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    />
  );
};

export default StarsBackground;
