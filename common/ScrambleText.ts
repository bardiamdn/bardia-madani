import React from "react";

interface ScrambleTextOptions {
  // elementId: string | HTMLElement;
  elementRef: React.RefObject<HTMLParagraphElement>;
  text: string;
  duration?: number;
  chars?: string;
}

const scrambleText = ({
  elementRef,
  text,
  duration = 0.5,
  chars = "#$%&@~!<>-_/[]{}—=+*^?`|:;.,0123456789abcdefghijklmnopqrstuvwxyz", //ABCDEFGHIJKLMNOPQRSTUVWXYZ
}: ScrambleTextOptions) => {
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    const el = elementRef.current;
    if (el) el.textContent = text;
    return;
  }

  const el = elementRef.current;
  const originalText = text.split("");
  const scrambled = [...originalText];
  let frame = 0;

  if (!el) {
    console.error("ref can not be null");
    return;
  }

  const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

  const update = () => {
    const progress = frame / (duration * 60);
    for (let i = 0; i < scrambled.length; i++) {
      if (progress < i / scrambled.length && scrambled[i] !== " ") {
        scrambled[i] = randomChar();
      } else {
        scrambled[i] = originalText[i];
      }
    }

    el.textContent = scrambled.join("");
    frame++;

    if (progress >= 1) {
      clearInterval(interval);
      el.textContent = text;
    }
  };

  const interval = window.setInterval(update, 1000 / 60);
};

export default scrambleText;