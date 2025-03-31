import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

// Programming language data with icons
const programmingLogos = [
  { name: "Python", icon: "&#xe80b;", color: "#306998" },
  { name: "JavaScript", icon: "&#xf121;", color: "#F7DF1E" },
  { name: "C++", icon: "&#xe646;", color: "#00599C" },
  { name: "Java", icon: "&#xe738;", color: "#ED8B00" },
  { name: "PHP", icon: "&#xe73d;", color: "#777BB3" },
  { name: "TypeScript", icon: "&#xe628;", color: "#3178C6" },
  { name: "React", icon: "&#xe73c;", color: "#61DAFB" },
  { name: "Node.js", icon: "&#xe719;", color: "#339933" },
  { name: "HTML5", icon: "&#xe736;", color: "#E34F26" },
  { name: "CSS3", icon: "&#xe749;", color: "#1572B6" },
  { name: "Go", icon: "&#xe724;", color: "#00ADD8" },
  { name: "Ruby", icon: "&#xe739;", color: "#CC342D" },
];

const AnimatedProgrammingLogos = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const position = window.scrollY;
      setScrollPosition(position * 0.2); // Reduced factor for smoother effect
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen w-full overflow-hidden py-20"
    >
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-[#05051a] z-0">
        {/* Stars background - performance optimized */}
        <div className="stars-container absolute inset-0">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={`bg-star-${i}`}
              className="cosmic-star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.7 + 0.3,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        
        {/* Nebula effects */}
        <div className="absolute w-3/4 h-3/4 rounded-full bg-purple-900/10 blur-3xl top-1/4 -left-1/4" />
        <div className="absolute w-1/2 h-1/2 rounded-full bg-blue-900/10 blur-3xl bottom-0 right-1/4" />
      </div>
      
      {/* Content container with parallax effect */}
      <div 
        ref={containerRef} 
        className="container mx-auto px-4 z-10 relative"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Programming Languages & Technologies
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Scroll to explore the technologies I work with
          </p>
        </div>
        
        {/* Animated logos container */}
        <div className="logos-orbit relative h-[800px] max-w-5xl mx-auto">
          {programmingLogos.map((logo, index) => {
            // Calculate position based on index and scroll
            const angle = (index / programmingLogos.length) * Math.PI * 2;
            const radius = 300; // Base orbit radius
            const speed = 0.1 + (index % 3) * 0.05; // Varied speeds
            const delay = index * 0.2; // Staggered animations
            
            // Calculate dynamic positions
            const xPos = Math.cos(angle + scrollPosition * speed * 0.01) * radius;
            const yPos = Math.sin(angle + scrollPosition * speed * 0.01) * radius;
            const scale = 0.8 + Math.sin(scrollPosition * 0.003 + index) * 0.2;
            const opacity = 0.5 + Math.sin(scrollPosition * 0.005 + index) * 0.5;
            
            return (
              <div
                key={logo.name}
                className={`logo-item absolute transition-all duration-1000 ${inView ? 'animate-logo-fade-in' : 'opacity-0'}`}
                style={{
                  left: `calc(50% + ${xPos}px)`,
                  top: `calc(50% + ${yPos}px)`,
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  opacity: inView ? opacity : 0,
                  transitionDelay: `${delay}s`,
                  zIndex: Math.round(opacity * 10),
                }}
              >
                {/* Logo container with glow effect */}
                <div 
                  className="logo-container relative flex flex-col items-center justify-center p-4 rounded-full"
                  style={{
                    background: `rgba(10, 10, 30, 0.7)`,
                    backdropFilter: 'blur(8px)',
                    boxShadow: `0 0 20px rgba(${parseInt(logo.color.slice(1, 3), 16)}, ${parseInt(logo.color.slice(3, 5), 16)}, ${parseInt(logo.color.slice(5, 7), 16)}, 0.2)`,
                  }}
                >
                  {/* Icon */}
                  <span 
                    className="logo-icon text-4xl mb-2" 
                    style={{ color: logo.color }}
                    dangerouslySetInnerHTML={{ __html: logo.icon }}
                  />
                  
                  {/* Name */}
                  <span 
                    className="logo-name text-sm font-medium"
                    style={{ color: 'white' }}
                  >
                    {logo.name}
                  </span>
                  
                  {/* Glow overlay */}
                  <div 
                    className="absolute inset-0 rounded-full logo-glow opacity-0 transition-opacity duration-300"
                    style={{ 
                      background: `radial-gradient(circle, ${logo.color}40 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </div>
            );
          })}
          
          {/* Center decoration */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 logo-pulse" />
        </div>
      </div>
      
      {/* Call to action */}
      <div className="absolute bottom-10 left-0 right-0 text-center z-10">
        <p className="text-white/70 text-sm">Continue scrolling to see my projects</p>
        <div className="mt-2 inline-block animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AnimatedProgrammingLogos;