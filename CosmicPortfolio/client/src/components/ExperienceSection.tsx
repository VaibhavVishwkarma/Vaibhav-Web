import { experiences } from "../data/portfolioData";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative bg-[#080810]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-space font-bold text-center mb-16">
          <span className="gradient-text">My Experience</span>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="glassmorphism rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:shadow-cyan-400/30 hover:translate-y-[-5px] group"
            >
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className={`flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full ${exp.color} transition-all`}>
                  <i className={`${exp.icon} text-2xl`}></i>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-space font-bold">{exp.title}</h3>
                    <span className="text-cyan-400 text-sm">{exp.period}</span>
                  </div>
                  <h4 className="text-lg font-medium mb-4">{exp.company}</h4>
                  
                  <ul className="space-y-2 text-gray-300">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <i className={`fas fa-check-circle ${exp.color.includes('cyan') ? 'text-cyan-400' : 'text-fuchsia-400'} mt-1 mr-2`}></i>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
