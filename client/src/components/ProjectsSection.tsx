import { useState } from "react";
import { projects } from "../data/portfolioData";

const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);
  
  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      "HTML": "bg-blue-500/20 text-blue-300",
      "JavaScript": "bg-yellow-500/20 text-yellow-300",
      "Tailwind": "bg-teal-500/20 text-teal-300",
      "CSS": "bg-blue-500/20 text-blue-300",
      "API": "bg-purple-500/20 text-purple-300",
      "React": "bg-blue-400/20 text-blue-300"
    };
    
    return colors[tag] || "bg-gray-500/20 text-gray-300";
  };

  return (
    <section id="projects" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-space font-bold text-center mb-16">
          <span className="gradient-text">My Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div 
              key={project.id}
              className="glassmorphism rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-md hover:shadow-cyan-400/30"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080810] to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-space font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`px-2 py-1 ${getTagColor(tag)} rounded text-xs font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between pt-4 border-t border-gray-700">
                  <a 
                    href={project.demoLink} 
                    className="text-cyan-400 hover:text-cyan-400/80 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="text-fuchsia-400 hover:text-fuchsia-400/80 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github mr-2"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={toggleProjects}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 font-bold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
          >
            {showAllProjects ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
