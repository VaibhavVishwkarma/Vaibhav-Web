import { useState, useEffect, useRef, useCallback } from "react";

// Performance optimized typing effect with reduced re-renders
export default function useTypingEffect(
  words: string[], 
  typingSpeed = 200, // Slowed down for better performance
  deleteSpeed = 80, // Slowed down for better performance
  delayBetweenWords = 1500 // Increased delay for better performance
) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Using refs to avoid re-renders with state changes
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const currentWordRef = useRef<string>("");
  
  // Memoized function to handle typing logic
  const handleTyping = useCallback(() => {
    currentWordRef.current = words[wordIndex];
    const currentWord = currentWordRef.current;
    
    if (isDeleting) {
      setDisplayText(prev => {
        const newText = currentWord.substring(0, prev.length - 1);
        
        if (newText.length === 0) {
          setTimeout(() => {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }, deleteSpeed);
        }
        
        return newText;
      });
    } else {
      setDisplayText(prev => {
        const newText = currentWord.substring(0, prev.length + 1);
        
        if (newText.length === currentWord.length) {
          timerRef.current = setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
        
        return newText;
      });
    }
  }, [wordIndex, isDeleting, words, deleteSpeed, delayBetweenWords]);
  
  useEffect(() => {
    // Clean up any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // Set new timer with appropriate speed
    timerRef.current = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typingSpeed
    );
    
    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [displayText, isDeleting, handleTyping, typingSpeed, deleteSpeed]);
  
  return displayText;
}
