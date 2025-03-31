import { Link } from "wouter";
import StarsBackground from "../components/StarsBackground";

export default function NotFound() {
  return (
    <div className="min-h-screen relative bg-background flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <StarsBackground />
      
      <div className="z-10 glassmorphism p-8 md:p-12 rounded-xl max-w-md mx-auto">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">404</h1>
        
        <div className="space-stars relative w-full h-16 my-8">
          <div className="stars-line"></div>
          <div className="planet"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-space font-bold mb-4 text-white">
          Lost in Space
        </h2>
        
        <p className="text-gray-300 mb-8">
          The cosmic page you're looking for has drifted beyond our galaxy.
        </p>
        
        <Link href="/">
          <div className="inline-block py-3 px-8 rounded-lg bg-gradient-to-r from-fuchsia-400 to-purple-600 font-bold text-white hover:shadow-lg hover:shadow-fuchsia-400/50 transition-all duration-300 relative overflow-hidden cursor-pointer">
            <span className="relative z-10">Return to Earth</span>
            <span className="submit-btn-shine"></span>
          </div>
        </Link>
      </div>
    </div>
  );
}
