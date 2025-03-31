import useTypingEffect from "../hooks/useTypingEffect";

const HeroSection = () => {
  const typedText = useTypingEffect(["Freelancer", "Web Developer"]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#080810] opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-space text-4xl md:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="gradient-text animate-pulse">Vaibhav Vishwkarma</span>
          </h1>
          
          <div className="h-12 mt-4 mb-8 font-orbitron text-xl md:text-2xl">
            <span className="text-white">I am a </span>
            <span className="text-cyan-400 typewriter">{typedText}</span>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 font-bold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
            >
              Hire Me
            </a>
            <a 
              href="#" 
              className="px-6 py-3 rounded-lg glassmorphism hover:shadow-lg hover:shadow-fuchsia-400/20 transition-all duration-300"
            >
              Download CV
            </a>
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-lg border-2 border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400/10 transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative animate-float">
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl shadow-cyan-400/20">
              <img 
                src="https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="Vaibhav Vishwkarma" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
