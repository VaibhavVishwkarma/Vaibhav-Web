import { educations } from "../data/portfolioData";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-space font-bold text-center mb-16">
          <span className="gradient-text">My Education</span>
        </h2>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-1 bg-gradient-to-b from-cyan-400 via-fuchsia-400 to-yellow-400 transform -translate-x-1/2"></div>
          
          {educations.map((edu, index) => (
            <div key={edu.id} className="relative mb-16 last:mb-0">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 z-10 mb-6 md:mb-0">
                  <div className={`w-12 h-12 rounded-full ${edu.color} flex items-center justify-center border-4 border-background`}>
                    <i className={`${edu.icon} text-white`}></i>
                  </div>
                </div>
                
                {/* Content placement based on even/odd index */}
                {index % 2 !== 0 ? (
                  <>
                    <div className="glassmorphism rounded-xl p-6 md:w-1/2 md:pr-8 md:text-right">
                      <h3 className="text-xl font-space font-bold mb-2">{edu.degree}</h3>
                      <h4 className={`text-lg font-medium ${index === 0 ? 'text-cyan-400' : index === 1 ? 'text-fuchsia-400' : 'text-yellow-400'} mb-2`}>
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-gray-300 mb-4">{edu.period}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                    <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-8 md:text-right hidden md:block"></div>
                    <div className="glassmorphism rounded-xl p-6 md:w-1/2 md:pl-8">
                      <h3 className="text-xl font-space font-bold mb-2">{edu.degree}</h3>
                      <h4 className={`text-lg font-medium ${index === 0 ? 'text-cyan-400' : index === 1 ? 'text-fuchsia-400' : 'text-yellow-400'} mb-2`}>
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-gray-300 mb-4">{edu.period}</p>
                      <p className="text-gray-300">{edu.description}</p>
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
