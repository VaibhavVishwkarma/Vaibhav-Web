import { useEffect, useRef } from "react";
import useTypingEffect from "../hooks/useTypingEffect";

const HeroSection = () => {
  const typedText = useTypingEffect(["Software Developer", "AI Enthusiast", "Problem Solver", "Full Stack Developer"]);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Add local particle effects just for the hero section
  useEffect(() => {
    if (!heroRef.current) return;
    
    const createParticle = () => {
      if (!heroRef.current) return;
      
      const particle = document.createElement("div");
      particle.classList.add("hero-particle");
      
      // Random position, size and color
      const size = 1 + Math.random() * 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random color from galaxy palette
      const colors = ["#8be9fd", "#bd93f9", "#ff79c6", "#50fa7b", "#f1fa8c", "#ff5555"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.backgroundColor = color;
      particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      
      // Set initial position at bottom
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${80 + Math.random() * 20}%`;
      
      // Add to hero section
      heroRef.current.appendChild(particle);
      
      // Animate upward
      setTimeout(() => {
        particle.style.top = `${-20 - Math.random() * 20}%`;
        particle.style.opacity = "0";
      }, 50);
      
      // Remove when animation complete
      setTimeout(() => {
        if (heroRef.current && heroRef.current.contains(particle)) {
          heroRef.current.removeChild(particle);
        }
      }, 15000);
    };
    
    // Create particles periodically
    const interval = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        createParticle();
      }
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10"
    >
      {/* Hero background with enhanced galaxy effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#080810] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>
        
        {/* Additional cosmic elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-900/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-cyan-800/10 blur-3xl"></div>
        <div className="absolute top-2/3 right-1/4 w-64 h-64 rounded-full bg-fuchsia-900/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between relative">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 relative">
          {/* Accent light spots */}
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
          
          {/* Name with vibrant effect */}
          <div className="mb-2 text-lg md:text-xl font-light text-cyan-300 font-mono">_Hello Universe</div>
          <h1 className="font-space text-4xl md:text-6xl xl:text-7xl font-bold mb-6 relative">
            <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Hi, I'm</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-glow relative">
              Vaibhav Vishwkarma
              
              {/* Highlight effects */}
              <span className="absolute -inset-1 bg-cyan-500/10 blur-xl rounded-lg opacity-50"></span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded"></span>
            </span>
            
            {/* Cosmic accent */}
            <div className="absolute -right-4 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-sm"></div>
            <div className="absolute left-1/2 -bottom-4 w-3 h-3 rounded-full bg-fuchsia-500 blur-sm animate-pulse"></div>
          </h1>
          
          {/* Typwriter effect with enhanced style */}
          <div className="h-12 mt-4 mb-8 font-orbitron text-xl md:text-2xl flex flex-wrap justify-center md:justify-start">
            <span className="text-gray-300 mr-2">I am a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold typewriter">
              {typedText}
            </span>
          </div>
          
          {/* Brief intro text */}
          <p className="text-gray-300 mb-8 max-w-xl leading-relaxed text-base md:text-lg">
            Crafting <span className="text-cyan-400">stellar digital experiences</span> with a passion for Software Development and AI. 
            Let's collaborate and build something 
            <span className="text-fuchsia-400"> out of this world</span> together.
          </p>
          
          {/* CTA buttons with enhanced styles */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative group px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 overflow-hidden"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
            </a>
            
            <a 
              href="#" 
              className="relative group px-6 py-3 rounded-lg glassmorphism border border-white/10 shadow-lg hover:shadow-fuchsia-500/20 transition-all duration-300"
            >
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500 font-bold">Download CV</span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg"></span>
            </a>
            
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative group px-6 py-3 rounded-lg border-2 border-fuchsia-500 text-fuchsia-400 hover:text-fuchsia-300 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-fuchsia-500 rounded-lg"></span>
            </a>
          </div>
        </div>
        
        {/* Profile image with cosmic effects */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative animate-float">
            {/* Orbital ring effect */}
            <div className="absolute inset-0 -m-8 border-2 border-dashed border-cyan-500/30 rounded-full rotate-45 animate-spin-slow"></div>
            <div className="absolute inset-0 -m-4 border border-purple-500/20 rounded-full -rotate-12 animate-reverse-spin-slow"></div>
            
            {/* Profile image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden neon-box">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-fuchsia-500/10 to-purple-500/20 z-10"></div>
              
              {/* Image */}
              <img 
                src="https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="Vaibhav Vishwkarma" 
                className="w-full h-full object-cover"
              />
              
              {/* Accent lights */}
              <div className="absolute top-0 left-1/4 w-2 h-2 bg-cyan-500 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-fuchsia-500 rounded-full blur-sm animate-pulse"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -rotate-45 transform translate-x-full animate-shine"></div>
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-cyan-500 opacity-20 blur-lg animate-pulse"></div>
            <div className="absolute -bottom-2 left-0 w-8 h-8 rounded-full bg-purple-500 opacity-20 blur-lg animate-pulse delay-700"></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 rounded-full bg-fuchsia-500 opacity-30 blur-sm animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
