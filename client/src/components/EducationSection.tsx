import { educations } from "../data/portfolioData";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-space font-bold text-center mb-16">
          <span className="gradient-text">My Education</span>
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-cyan-400 via-fuchsia-400 to-yellow-400 transform -translate-x-1/2 z-0"></div>
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-cyan-400 via-fuchsia-400 to-yellow-400 transform -translate-x-1/2 z-0"></div>
          
          {educations.map((edu, index) => (
            <div key={edu.id} className="relative mb-20 last:mb-0">
              <div className="flex flex-col md:flex-row items-center">
                {/* Circle + Icon - Perfectly centered on timeline */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 z-20"
                  style={{ 
                    top: "0",
                    marginTop: "-28px",
                  }}
                >
                  <div className={`w-14 h-14 rounded-full ${edu.color} flex items-center justify-center border-4 border-background shadow-lg animate-pulse-gentle overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <i className={`${edu.icon} text-2xl text-white drop-shadow-glow relative z-10`}></i>
                  </div>
                </div>
                
                {/* Mobile view - card always below icon */}
                <div className="w-full md:hidden mt-12 mb-6">
                  <div className="glassmorphism rounded-xl p-6 mx-auto transform transition-all duration-300 hover:scale-105 max-w-sm">
                    <h3 className="text-xl font-space font-bold mb-2">{edu.degree}</h3>
                    <h4 className={`text-lg font-medium ${index === 0 ? 'text-cyan-400' : index === 1 ? 'text-fuchsia-400' : 'text-yellow-400'} mb-2`}>
                      {edu.institution}
                    </h4>
                    <p className="text-sm text-gray-300 mb-4">{edu.period}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
                
                {/* Desktop view - alternating left and right */}
                {index % 2 !== 0 ? (
                  <>
                    {/* Left side content for odd indexes */}
                    <div className="hidden md:block md:w-1/2 md:pr-12">
                      <div className="glassmorphism rounded-xl p-6 md:ml-auto md:mr-8 md:text-right transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl font-space font-bold mb-2">{edu.degree}</h3>
                        <h4 className={`text-lg font-medium ${index === 0 ? 'text-cyan-400' : index === 1 ? 'text-fuchsia-400' : 'text-yellow-400'} mb-2`}>
                          {edu.institution}
                        </h4>
                        <p className="text-sm text-gray-300 mb-4">{edu.period}</p>
                        <p className="text-gray-300">{edu.description}</p>
                      </div>
                    </div>
                    {/* Empty right side */}
                    <div className="md:w-1/2 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    {/* Empty left side */}
                    <div className="md:w-1/2 hidden md:block"></div>
                    {/* Right side content for even indexes */}
                    <div className="hidden md:block md:w-1/2 md:pl-12">
                      <div className="glassmorphism rounded-xl p-6 md:ml-8 transform transition-all duration-300 hover:scale-105">
                        <h3 className="text-xl font-space font-bold mb-2">{edu.degree}</h3>
                        <h4 className={`text-lg font-medium ${index === 0 ? 'text-cyan-400' : index === 1 ? 'text-fuchsia-400' : 'text-yellow-400'} mb-2`}>
                          {edu.institution}
                        </h4>
                        <p className="text-sm text-gray-300 mb-4">{edu.period}</p>
                        <p className="text-gray-300">{edu.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
