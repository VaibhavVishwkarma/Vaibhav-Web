import { useEffect, useState, useRef } from "react";

// List of programming language logos with icons and colors
const programmingLogos = [
  { icon: "&#xe80b;", color: "#306998" }, // Python
  { icon: "&#xf121;", color: "#F7DF1E" }, // JavaScript
  { icon: "&#xe646;", color: "#00599C" }, // C++
  { icon: "&#xe738;", color: "#ED8B00" }, // Java
  { icon: "&#xe73d;", color: "#777BB3" }, // PHP
  { icon: "&#xe628;", color: "#3178C6" }, // TypeScript
  { icon: "&#xe73c;", color: "#61DAFB" }, // React
  { icon: "&#xe719;", color: "#339933" }, // Node.js
  { icon: "&#xe736;", color: "#E34F26" }, // HTML5
  { icon: "&#xe749;", color: "#1572B6" }, // CSS3
];

// Type for our particle objects
interface Particle {
  x: number;
  y: number;
  size: number;
  icon: string;
  color: string;
  speedX: number;
  speedY: number;
  age: number;
  maxAge: number;
  opacity: number;
  delay: number;
}

const MouseFollowLogos = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);
  const lastMousePositionRef = useRef({ x: 0, y: 0 });
  const cursorTrailRef = useRef<{ x: number; y: number }[]>([]);

  // Initialize particles
  useEffect(() => {
    const particles: Particle[] = [];
    
    // Create initial particles
    for (let i = 0; i < 15; i++) {
      const randomLogo = programmingLogos[Math.floor(Math.random() * programmingLogos.length)];
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 12 + Math.random() * 10,
        icon: randomLogo.icon,
        color: randomLogo.color,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        age: Math.random() * 100,
        maxAge: 100 + Math.random() * 100,
        opacity: 0.1 + Math.random() * 0.4,
        delay: Math.random() * 20
      });
    }
    
    particlesRef.current = particles;
    
    // Add mouse event listeners
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);
      
      // Store mouse position in trail
      cursorTrailRef.current.push({ x: e.clientX, y: e.clientY });
      
      // Limit trail length
      if (cursorTrailRef.current.length > 20) {
        cursorTrailRef.current.shift();
      }
      
      // Add new particles on mouse move
      if (Math.random() > 0.7) {
        const randomLogo = programmingLogos[Math.floor(Math.random() * programmingLogos.length)];
        const newParticle: Particle = {
          x: e.clientX,
          y: e.clientY,
          size: 15 + Math.random() * 10,
          icon: randomLogo.icon,
          color: randomLogo.color,
          speedX: (Math.random() - 0.5) * 3,
          speedY: (Math.random() - 0.5) * 3,
          age: 0,
          maxAge: 50 + Math.random() * 50,
          opacity: 0.5 + Math.random() * 0.5,
          delay: 0
        };
        particlesRef.current.push(newParticle);
      }
      
      // Add small stars on mouse move
      if (Math.random() > 0.5) {
        for (let i = 0; i < 2; i++) {
          const randomLogo = programmingLogos[Math.floor(Math.random() * programmingLogos.length)];
          particlesRef.current.push({
            x: e.clientX + (Math.random() - 0.5) * 40,
            y: e.clientY + (Math.random() - 0.5) * 40,
            size: 5 + Math.random() * 5,
            icon: "★",
            color: randomLogo.color,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            age: 0,
            maxAge: 30 + Math.random() * 20,
            opacity: 0.4 + Math.random() * 0.6,
            delay: Math.random() * 5
          });
        }
      }
      
      lastMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };
    
    const handleMouseLeave = () => {
      setIsMouseMoving(false);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);
  
  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to window size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Skip if in delay period
        if (particle.delay > 0) {
          particle.delay--;
          return;
        }
        
        // Update particle age
        particle.age++;
        
        // Remove old particles
        if (particle.age > particle.maxAge) {
          particlesRef.current.splice(index, 1);
          return;
        }
        
        // Calculate fade in/out
        let fadeOpacity = particle.opacity;
        if (particle.age < 10) {
          fadeOpacity = (particle.age / 10) * particle.opacity;
        } else if (particle.age > particle.maxAge - 10) {
          fadeOpacity = ((particle.maxAge - particle.age) / 10) * particle.opacity;
        }
        
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // For logos, use text rendering
        if (particle.icon !== "★") {
          // Draw the logo
          ctx.font = `${particle.size}px monospace`;
          ctx.fillStyle = particle.color + Math.floor(fadeOpacity * 255).toString(16).padStart(2, '0');
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(String.fromCharCode(parseInt(particle.icon.slice(2, -1), 16)), particle.x, particle.y);
          
          // Add glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 10;
          ctx.fillText(String.fromCharCode(parseInt(particle.icon.slice(2, -1), 16)), particle.x, particle.y);
          ctx.shadowBlur = 0;
        } else {
          // For stars, use filled shape
          ctx.beginPath();
          ctx.fillStyle = particle.color + Math.floor(fadeOpacity * 255).toString(16).padStart(2, '0');
          ctx.font = `${particle.size}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(particle.icon, particle.x, particle.y);
          
          // Add glow effect for stars
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 5;
          ctx.fillText(particle.icon, particle.x, particle.y);
          ctx.shadowBlur = 0;
        }
        
        // Slow down particles gradually
        particle.speedX *= 0.98;
        particle.speedY *= 0.98;
        
        // Add slight gravity effect
        particle.speedY += 0.01;
      });
      
      // Request next frame
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ opacity: 0.8 }}
    />
  );
};

export default MouseFollowLogos;