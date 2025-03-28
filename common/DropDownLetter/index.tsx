import React, { useEffect, useRef } from "react";

interface LetterDropProps {
  children: string;
  setEntered?: (value: boolean) => void;
  index?: number;
}

const DropLetter: React.FC<{
  children: string;
  index: number;
  setEntered: (value: boolean) => void;
}> = ({ children, index, setEntered }) => {
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
            onEnter: () => {
              setEntered(true);
            },
          },
        }
      );
    };
    requestAnimationFrame(DropLetter);
  }, [letterRef, index, setEntered]);

  return (
    <span className="inline-block overflow-hidden align-top">
      <span className="inline-block" ref={letterRef}>
        {children}
      </span>
    </span>
  );
};

const LetterDrop: React.FC<LetterDropProps> = ({
  children,
  setEntered,
  index,
}) => {
  return (
    <span className="">
      {children.split("").map((char, index) => (
        <DropLetter
          key={index}
          index={index}
          setEntered={setEntered || (() => {})}
        >
          {char}
        </DropLetter>
      ))}
    </span>
  );
};

export default LetterDrop;
