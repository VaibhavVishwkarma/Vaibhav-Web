import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 glassmorphism transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            onClick={() => scrollToSection("hero")} 
            className="text-xl font-orbitron font-bold cursor-pointer"
          >
            <span className="text-cyan-400">&lt;</span>
            <span>Vaibhav</span>
            <span className="text-fuchsia-400">/</span>
            <span className="text-cyan-400">&gt;</span>
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a onClick={() => scrollToSection("about")} className="hover:text-cyan-400 transition-colors cursor-pointer">About</a>
            <a onClick={() => scrollToSection("skills")} className="hover:text-cyan-400 transition-colors cursor-pointer">Skills</a>
            <a onClick={() => scrollToSection("projects")} className="hover:text-cyan-400 transition-colors cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection("experience")} className="hover:text-cyan-400 transition-colors cursor-pointer">Experience</a>
            <a onClick={() => scrollToSection("education")} className="hover:text-cyan-400 transition-colors cursor-pointer">Education</a>
            <a onClick={() => scrollToSection("certificates")} className="hover:text-cyan-400 transition-colors cursor-pointer">Certificates</a>
            <a onClick={() => scrollToSection("contact")} className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</a>
          </div>
          
          {/* Theme Toggle Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <i className="fas fa-sun text-yellow-400"></i>
              ) : (
                <i className="fas fa-moon text-blue-800"></i>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu} 
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <a onClick={() => scrollToSection("about")} className="hover:text-cyan-400 transition-colors cursor-pointer">About</a>
            <a onClick={() => scrollToSection("skills")} className="hover:text-cyan-400 transition-colors cursor-pointer">Skills</a>
            <a onClick={() => scrollToSection("projects")} className="hover:text-cyan-400 transition-colors cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection("experience")} className="hover:text-cyan-400 transition-colors cursor-pointer">Experience</a>
            <a onClick={() => scrollToSection("education")} className="hover:text-cyan-400 transition-colors cursor-pointer">Education</a>
            <a onClick={() => scrollToSection("certificates")} className="hover:text-cyan-400 transition-colors cursor-pointer">Certificates</a>
            <a onClick={() => scrollToSection("contact")} className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
