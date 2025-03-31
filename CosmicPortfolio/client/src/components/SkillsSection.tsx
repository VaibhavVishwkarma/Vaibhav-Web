import { skills } from "../data/portfolioData";

const SkillsSection = () => {
  const frontendSkills = skills.filter(skill => skill.category === "frontend");
  const backendSkills = skills.filter(skill => skill.category === "backend");
  const toolsSkills = skills.filter(skill => skill.category === "tools");

  return (
    <section id="skills" className="py-20 relative bg-[#080810]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-space font-bold text-center mb-16">
          <span className="gradient-text">My Skills</span>
        </h2>
        
        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="glassmorphism rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:shadow-cyan-400/30">
            <h3 className="text-2xl font-space font-bold mb-6 text-cyan-400">Frontend</h3>
            
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div className="group" key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <i className={`${skill.icon} text-2xl mr-3 group-hover:text-yellow-400 transition-colors`}></i>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2 w-full">
                    <div 
                      className="skill-bar rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="glassmorphism rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:shadow-fuchsia-400/30">
            <h3 className="text-2xl font-space font-bold mb-6 text-fuchsia-400">Backend (Basics)</h3>
            
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <div className="group" key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <i className={`${skill.icon} text-2xl mr-3 group-hover:text-fuchsia-400 transition-colors`}></i>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2 w-full">
                    <div 
                      className="skill-bar rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools Skills */}
          <div className="glassmorphism rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:shadow-yellow-400/30">
            <h3 className="text-2xl font-space font-bold mb-6 text-yellow-400">Tools</h3>
            
            <div className="space-y-6">
              {toolsSkills.map((skill) => (
                <div className="group" key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <i className={`${skill.icon} text-2xl mr-3 group-hover:text-yellow-400 transition-colors`}></i>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2 w-full">
                    <div 
                      className="skill-bar rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
