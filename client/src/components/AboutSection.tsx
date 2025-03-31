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
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-purple-600/30 shadow-xl shadow-purple-600/20">
                <img 
                  src="https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="Vaibhav Vishwkarma - About" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-600/20 to-blue-500/20 animate-pulse"></div>
            </div>
          </div>
          
          <div className="md:w-3/5" data-aos="fade-in">
            <div className="glassmorphism rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-space font-bold mb-6 gradient-text">Who I Am</h3>
              <p className="mb-4 text-lg">
                A passionate web developer with a strong focus on creating stunning, user-friendly interfaces. I combine creativity with technical skills to build websites that not only look great but also deliver exceptional user experiences.
              </p>
              
              <h3 className="text-2xl font-space font-bold mb-6 mt-8 gradient-text">What I Do</h3>
              <p className="mb-4 text-lg">
                I specialize in frontend development using HTML, CSS (Tailwind), and JavaScript. I love building responsive, accessible, and performance-optimized websites that work flawlessly across all devices.
              </p>
              
              <h3 className="text-2xl font-space font-bold mb-6 mt-8 gradient-text">My Passion & Goals</h3>
              <p className="text-lg">
                I'm passionate about continuous learning and staying up-to-date with the latest web technologies. My goal is to create digital experiences that are both visually stunning and functionally powerful, making technology more accessible and enjoyable for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
