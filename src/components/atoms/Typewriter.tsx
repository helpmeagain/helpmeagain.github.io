// Não mais usado. Ver ./TypewriterAnimation.tsx
import { useState, useEffect } from "react";

type Props = {
  intro?: string;
  phrases: string[];
  speed?: number;
};

const TypingAnimation = ({ intro, phrases, speed }: Props) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingPaused, setIsTypingPaused] = useState(false);

  useEffect(() => {
    const typingSpeed = speed || 50;
    const handleTyping = () => {
      const currentWord = phrases[currentPhraseIndex];
      const currentChar = currentWord[currentCharIndex];

      setCurrentPhrase((prevPhrase) =>
        isDeleting ? prevPhrase.slice(0, -1) : prevPhrase + currentChar
      );

      if (!isDeleting && currentCharIndex === currentWord.length - 1) {
        setIsTypingPaused(true);
        setTimeout(() => {
          setIsDeleting(true);
          setIsTypingPaused(false);
        }, 1500);
      } else if (isDeleting && currentPhrase === "") {
        setIsDeleting(false);
        setCurrentCharIndex(0);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      } else {
        setCurrentCharIndex((prevIndex) =>
          isDeleting ? Math.max(0, prevIndex - 1) : prevIndex + 1
        );
      }
    };

    if (!isTypingPaused) {
      const typingInterval = setInterval(handleTyping, typingSpeed);
      return () => clearInterval(typingInterval);
    }
  }, [
    currentPhrase,
    currentCharIndex,
    isDeleting,
    isTypingPaused,
    phrases,
    currentPhraseIndex,
    speed,
  ]);

  return (
    <div>
      <h1 className="text-violet-200 text-3xl max-sm:text-xl fira-mono-regular">
        {intro}{" "}
        <span className="bg-violet-950/30">
          &lt;
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-400 text-transparent bg-clip-text">
            {currentPhrase}
          </span>
          /&gt;
        </span>
      </h1>
    </div>
  );
};

export default TypingAnimation;
