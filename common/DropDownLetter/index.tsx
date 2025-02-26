import React, { useEffect, useRef } from "react";

interface LetterDropProps {
  children: string;
}

const DropLetter: React.FC<{ children: string; index: number }> = ({
  children,
  index,
}) => {
  const letterRef = useRef(null);

  useEffect(() => {
    const DropLetter = () => {
      if (!letterRef.current) return;

      window.gsap.fromTo(
        letterRef.current,
        {
          y: "-100%",
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
            start: "top 80%",
            end: "top 80%",
            // markers: true,
            toggleActions: "play none none none",
          },
        }
      );
    };
    requestAnimationFrame(DropLetter);
  }, [letterRef, index]);

  return (
    <span className="inline-block overflow-hidden ">
      <span className="inline-block" ref={letterRef}>
        {children}
      </span>
    </span>
  );
};

const LetterDrop: React.FC<LetterDropProps> = ({ children }) => {
  return (
    <span className="">
      {children.split("").map((char, index) => (
        <DropLetter key={index} index={index}>
          {char}
        </DropLetter>
      ))}
    </span>
  );
};

export default LetterDrop;
