import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import StarsBackground from "./components/StarsBackground";
import AnimatedProgrammingLogos from "./components/AnimatedProgrammingLogos";

function App() {
  return (
    <div className="min-h-screen relative bg-background text-foreground overflow-x-hidden">
      <StarsBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AnimatedProgrammingLogos />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
