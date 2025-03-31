import { contactInfo } from "../data/portfolioData";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-10 bg-gradient-to-r from-[#080810] via-background to-[#080810]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a 
              onClick={() => scrollToSection("hero")} 
              className="text-2xl font-orbitron font-bold cursor-pointer"
            >
              <span className="text-cyan-400">&lt;</span>
              <span className="text-white">Vaibhav</span>
              <span className="text-fuchsia-400">/</span>
              <span className="text-cyan-400">&gt;</span>
            </a>
            <p className="text-gray-400 mt-2">Building digital experiences that inspire.</p>
          </div>
          
          <div className="flex space-x-4">
            {contactInfo.socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-cyan-400 hover:text-white transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`${link.icon}`}></i>
              </a>
            ))}

          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Vaibhav Vishwkarma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
