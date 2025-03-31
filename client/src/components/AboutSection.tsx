const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-space font-bold text-center mb-16">
          <span className="gradient-text">About Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/5 relative">
            <div className="w-full max-w-md mx-auto relative animate-tilt">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-cyan-600/30 shadow-xl shadow-cyan-600/20 bg-[#080810]">
                {/* Anonymous profile image */}
                <img 
                  src="./anonymous-profile.svg" 
                  alt="Anonymous Developer Profile" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent mix-blend-overlay"></div>
                
                {/* Glowing dots to simulate a network pattern */}
                {Array.from({ length: 8 }).map((_, index) => (
                  <div 
                    key={index} 
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                    style={{
                      top: `${15 + Math.random() * 70}%`,
                      left: `${15 + Math.random() * 70}%`,
                      animationDelay: `${index * 0.2}s`,
                      opacity: 0.7 + Math.random() * 0.3
                    }}
                  ></div>
                ))}
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-600/20 to-purple-500/20 animate-pulse"></div>
            </div>
          </div>
          
          <div className="md:w-3/5" data-aos="fade-in">
            <div className="glassmorphism rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-space font-bold mb-6 gradient-text">Who I Am</h3>
              <p className="mb-4 text-lg">
                I'm a passionate developer with a keen interest in both software development and artificial intelligence. I strive to learn and grow in both these fields, combining technical skills with innovative thinking to create meaningful solutions.
              </p>
              
              <h3 className="text-2xl font-space font-bold mb-6 mt-8 gradient-text">My Programming Skills</h3>
              <p className="mb-4 text-lg">
                I work with multiple languages including <span className="text-cyan-400">Python</span>, <span className="text-fuchsia-400">C Programming</span>, <span className="text-yellow-400">JavaScript</span>, and <span className="text-blue-400">PHP</span>. I enjoy building applications that are efficient, user-friendly, and solve real-world problems.
              </p>
              
              <h3 className="text-2xl font-space font-bold mb-6 mt-8 gradient-text">My Passion & Goals</h3>
              <p className="text-lg">
                I'm deeply passionate about AI and machine learning and am eager to learn more in this field. My goal is to develop expertise in both software development and artificial intelligence, creating solutions that are not only technically sound but also innovative and forward-thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
