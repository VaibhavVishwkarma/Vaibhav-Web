import { useState } from "react";
import { certificates } from "../data/portfolioData";

const CertificatesSection = () => {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const visibleCertificates = showAllCertificates ? certificates : certificates.slice(0, 3);
  
  const toggleCertificates = () => {
    setShowAllCertificates(!showAllCertificates);
  };

  return (
    <section id="certificates" className="py-20 relative bg-[#080810]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-space font-bold text-center mb-16">
          <span className="gradient-text">My Certificates</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleCertificates.map((certificate) => (
            <div 
              key={certificate.id}
              className={`glassmorphism rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-md ${certificate.color}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt={certificate.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080810] to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-space font-bold mb-2">{certificate.title}</h3>
                <p className="text-gray-300 mb-4">{certificate.issuer}</p>
                
                <a 
                  href={certificate.link} 
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-400/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt mr-2"></i> View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={toggleCertificates}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-fuchsia-400 to-purple-600 font-bold hover:shadow-lg hover:shadow-fuchsia-400/50 transition-all duration-300"
          >
            {showAllCertificates ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
