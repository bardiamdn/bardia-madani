import React, { useEffect, useRef } from "react";

interface LetterSlideUpProps {
  children: string;
}

const SlideUpLetter: React.FC<{ children: string; index: number }> = ({
  children,
  index,
}) => {
  const letterRef = useRef(null);

  useEffect(() => {
    const SlideUpLetter = () => {
      if (!letterRef.current) return;

      window.gsap.fromTo(
        letterRef.current,
        {
          y: "100%",
          opacity: 0.5,
        },
        {
          y: "0px",
          opacity: 1,
          duration: 0.8,
          delay: 0.01 * index,
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
  }, [letterRef, index]);

  return (
    <span className="inline-block overflow-hidden ">
      <span className="inline-block" ref={letterRef}>
        {children}
      </span>
    </span>
  );
};

const LetterDrop: React.FC<LetterSlideUpProps> = ({ children }) => {
  return (
    <span className="">
      {children.split("").map((char, index) => (
        <SlideUpLetter key={index} index={index}>
          {char}
        </SlideUpLetter>
      ))}
    </span>
  );
};

export default LetterDrop;
