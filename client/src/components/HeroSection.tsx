import { useEffect, useRef, useMemo, memo } from "react";
import useTypingEffect from "../hooks/useTypingEffect";

// Using memo for performance
const HeroSection = memo(() => {
  const typedText = useTypingEffect(["Software & AI Enthusiast", "Problem Solver", "Tech Explorer"], 2000);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Create optimized blurry orbs with CSS
  const blurryOrbs = useMemo(() => {
    const orbs: JSX.Element[] = [];
    // Pre-calculate 5 optimized orbs with different positions, sizes and colors
    const orbsData = [
      { top: "15%", left: "10%", size: "300px", color: "rgba(138, 43, 226, 0.15)" },
      { top: "70%", left: "75%", size: "240px", color: "rgba(25, 118, 210, 0.12)" },
      { top: "30%", left: "85%", size: "180px", color: "rgba(236, 72, 153, 0.1)" },
      { top: "80%", left: "15%", size: "220px", color: "rgba(16, 185, 129, 0.08)" },
      { top: "50%", left: "50%", size: "350px", color: "rgba(124, 58, 237, 0.06)" },
    ];
    
    orbsData.forEach((orb, index) => {
      orbs.push(
        <div 
          key={`orb-${index}`}
          className="absolute rounded-full blur-3xl will-change-transform"
          style={{
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            transform: "translateZ(0)",
            animation: `float-gentle ${8 + index}s infinite ease-in-out ${index}s`,
            opacity: 0.8,
          }}
        />
      );
    });
    
    return orbs;
  }, []);
  
  // Add reduced particle effects for performance
  useEffect(() => {
    if (!heroRef.current) return;
    
    // Performance optimized particle creation
    const createParticle = () => {
      if (!heroRef.current) return;
      
      const particle = document.createElement("div");
      particle.classList.add("hero-particle");
      
      // Simplified particles with fewer properties
      const size = 1 + Math.random() * 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Reduced color palette
      const colors = ["#8be9fd", "#bd93f9", "#ff79c6"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;
      
      // Only add shadow to some particles (performance optimization)
      if (Math.random() > 0.7) {
        particle.style.boxShadow = `0 0 ${size}px ${color}`;
      }
      
      // Set initial position at bottom
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${80 + Math.random() * 20}%`;
      
      // Add to hero section
      heroRef.current.appendChild(particle);
      
      // Animate upward with reduced animation time
      setTimeout(() => {
        particle.style.top = `${-10 - Math.random() * 10}%`;
        particle.style.opacity = "0";
      }, 50);
      
      // Remove when animation complete
      setTimeout(() => {
        if (heroRef.current && heroRef.current.contains(particle)) {
          heroRef.current.removeChild(particle);
        }
      }, 8000);
    };
    
    // Create fewer particles less frequently
    const interval = setInterval(createParticle, 800);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10"
    >
      {/* Modern blurred background */}
      <div className="absolute inset-0 z-0 bg-[#080810]">
        {/* Optimized blurry orbs - pre-rendered using useMemo */}
        {blurryOrbs}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-10 xl:gap-20 relative">
        {/* Left content - Text and buttons */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 relative">
          {/* Interactive accent light blobs */}
          <div className="hero-blob-1"></div>
          <div className="hero-blob-2"></div>
          
          {/* Greeting line */}
          <div className="mb-3 text-lg md:text-xl font-light text-cyan-300 font-mono inline-flex items-center">
            <span className="inline-block w-5 h-0.5 bg-cyan-400 mr-3"></span>
            _Hello Universe
          </div>
          
          {/* Main heading with enhanced effects */}
          <h1 className="font-space text-4xl md:text-6xl xl:text-7xl font-bold mb-8 relative">
            <span className="block mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Hi, I'm
            </span>
            <span className="relative inline-block">
              <span className="hero-name text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Vaibhav Vishwkarma
              </span>
              
              {/* Enhanced highlight effects */}
              <span className="absolute -inset-x-6 -inset-y-2 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-600/5 blur-xl rounded-2xl"></span>
              <span className="absolute -inset-x-6 top-full h-px bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></span>
              
              {/* Floating accent particles */}
              <span className="absolute -right-8 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-sm opacity-60"></span>
              <span className="absolute left-1/3 -bottom-5 w-2 h-2 rounded-full bg-fuchsia-500 blur-sm animate-pulse opacity-60"></span>
            </span>
          </h1>
          
          {/* Improved typwriter effect */}
          <div className="h-14 mb-8 font-orbitron text-xl md:text-2xl flex flex-wrap justify-center lg:justify-start items-center">
            <span className="text-gray-300 mr-2">I am a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold typewriter relative">
              {typedText}
              <span className="absolute bottom-0 left-0 h-px w-full bg-cyan-400 opacity-50"></span>
            </span>
          </div>
          
          {/* Enhanced intro text with better coloring */}
          <p className="text-gray-300 mb-10 max-w-xl leading-relaxed text-base md:text-lg">
            Crafting <span className="text-cyan-400 font-medium">stellar digital experiences</span> with a passion for Software Development and AI. 
            Let's collaborate and build something 
            <span className="text-fuchsia-400 font-medium"> out of this world</span> together.
          </p>
          
          {/* Enhanced CTA buttons with better hover effects */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hero-button primary-button"
            >
              <span className="relative z-10">Let's Connect</span>
              <span className="button-shine"></span>
            </a>
            
            <a 
              href="./Vaibhav-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button secondary-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="relative z-10">Download CV</span>
              <span className="button-glow"></span>
            </a>
            
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hero-button outline-button"
            >
              <span className="relative z-10">View Projects</span>
              <span className="button-fill"></span>
            </a>
          </div>
        </div>
        
        {/* Right content - Enhanced profile image with optimized effects */}
        <div className="lg:w-5/12 flex justify-center items-center">
          <div className="relative">
            {/* Orbital animated rings */}
            <div className="hero-orbit-ring outer-ring"></div>
            <div className="hero-orbit-ring inner-ring"></div>
            
            {/* Enhanced profile image container with beautiful glow effect */}
            <div className="hero-image-container">
              {/* Optimized glow overlay */}
              <div className="hero-image-glow"></div>
              
              {/* Optimized image with prefetching and hardware acceleration */}
              <img 
                src="./profile-image.png" 
                alt="Vaibhav Vishwkarma" 
                className="hero-profile-image"
                loading="eager"
              />
              
              {/* Light accent point */}
              <div className="hero-accent-point top-0 left-1/4"></div>
              
              {/* Subtle shine effect overlay */}
              <div className="hero-shine-effect">
                <div className="hero-shine-overlay"></div>
              </div>
            </div>
            
            {/* Technology skill badges floating around the profile */}
            <div className="hero-skill-badge badge-1">
              <span className="badge-icon">&#xe80b;</span>
              <span className="badge-text">Python</span>
            </div>
            
            <div className="hero-skill-badge badge-2">
              <span className="badge-icon">&#xf121;</span>
              <span className="badge-text">JavaScript</span>
            </div>
            
            <div className="hero-skill-badge badge-3">
              <span className="badge-icon">&#xe73c;</span>
              <span className="badge-text">React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
