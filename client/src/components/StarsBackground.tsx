import { useEffect } from "react";

const StarsBackground = () => {
  useEffect(() => {
    const starsContainer = document.getElementById("stars-container");
    if (!starsContainer) return;

    const starsCount = 100;
    
    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      starsContainer.appendChild(star);
    }

    return () => {
      while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild);
      }
    };
  }, []);

  return (
    <div
      id="stars-container"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    />
  );
};

export default StarsBackground;
