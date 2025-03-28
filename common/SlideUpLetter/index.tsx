import React, { useEffect, useRef } from "react";

interface LetterSlideUpProps {
  children: string;
  animate?: boolean;
  delay: number;
}

const SlideUpLetter: React.FC<{
  children: string;
  index: number;
  delay: number;
  animate?: boolean;
}> = ({ children, index, delay, animate }) => {
  const letterRef = useRef(null);

  useEffect(() => {
    if (!animate) return;
    const SlideUpLetter = () => {
      if (!letterRef.current) return;

      window.gsap.fromTo(
        letterRef.current,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0px",
          opacity: 1,
          duration: 0.8,
          delay: delay * index, // 0.01
          ease: "power2.out",
          scrollTrigger: {
            trigger: letterRef.current,
            start: "top 90%",
            end: "top 90%",
            // markers: true,
            toggleActions: "play none none none",
          },
        }
      );
    };
    requestAnimationFrame(SlideUpLetter);
  }, [index, animate, delay]);

  return (
    <span className="inline-block overflow-hidden align-top">
      <span className="inline-block opacity-0 " ref={letterRef}>
        {children}
      </span>
    </span>
  );
};

const LetterSlideUp: React.FC<LetterSlideUpProps> = ({
  children,
  animate,
  delay,
}) => {
  return (
    <span className="inline-block">
      {children.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block ">
          {word.split("").map((char, charIndex) => (
            <SlideUpLetter
              key={`${wordIndex}-${charIndex}`}
              index={wordIndex * 10 + charIndex}
              animate={animate}
              delay={delay}
            >
              {char}
            </SlideUpLetter>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </span>
  );
};

export default LetterSlideUp;
