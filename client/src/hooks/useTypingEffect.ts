import { useState, useEffect } from "react";

export default function useTypingEffect(words: string[], typingSpeed = 150, deleteSpeed = 50, delayBetweenWords = 1000) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        
        if (displayText.length === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deleteSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        
        if (displayText.length === currentWord.length) {
          timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }, typingSpeed);
    }
    
    return () => clearTimeout(timer);
  }, [displayText, wordIndex, isDeleting, words, typingSpeed, deleteSpeed, delayBetweenWords]);
  
  return displayText;
}
