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
                {/* Silhouette image with grid background */}
                <div className="w-full h-full relative">
                  {/* Grid background with glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent">
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMyMGEzZGE5OSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')]"></div>
                  </div>
                  
                  {/* Dark silhouette */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-4/5 bg-black rounded-t-[100px] relative">
                      {/* Silhouette head and shoulders */}
                      <div className="absolute bottom-0 inset-x-0 h-1/3 bg-black rounded-t-[80px]"></div>
                    </div>
                  </div>
                  
                  {/* Glowing dots to simulate a network pattern */}
                  {Array.from({ length: 12 }).map((_, index) => (
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
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full z-0 opacity-30">
                    <g stroke="#22d3ee" strokeWidth="0.5">
                      <line x1="30%" y1="20%" x2="70%" y2="30%" />
                      <line x1="40%" y1="40%" x2="60%" y2="60%" />
                      <line x1="25%" y1="60%" x2="75%" y2="40%" />
                      <line x1="20%" y1="40%" x2="40%" y2="80%" />
                      <line x1="60%" y1="80%" x2="80%" y2="40%" />
                    </g>
                  </svg>
                </div>
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
