"use client";
import { useEffect, useRef } from "react";

export default function Star() {
  const bgPathRef = useRef(null);

  useEffect(() => {
    if (!bgPathRef.current) return;

    let gsapTimeout: NodeJS.Timeout;
    const waitForGsap = () => {
      if (window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        window.gsap.to(bgPathRef.current, {
          y: "-20px",
          // duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bgPathRef.current,
            start: "top bottom",
            end: "bottom top",
            markers: true,
            scrub: true,
          },
        });
      } else {
        console.warn("GSAP not loaded in tags, retrying...");
        gsapTimeout = setTimeout(waitForGsap, 100);
      }
    };

    waitForGsap();
    return () => clearTimeout(gsapTimeout);
  }, []);

  return (
    <svg
      width="202"
      height="230"
      viewBox="0 0 101 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={bgPathRef}
        d="M50.4258 91.0479L43.8628 112.97C43.4357 114.396 41.4158 114.396 40.9888 112.97L32.1547 83.4617C32.0113 82.9828 31.6387 82.6068 31.1611 82.459L2.05658 73.4529C0.647806 73.0169 0.647806 71.0229 2.05658 70.5869L31.1611 61.5808C31.6387 61.433 32.0113 61.057 32.1547 60.5781L40.9888 31.0698C41.4158 29.6434 43.4357 29.6434 43.8628 31.0698L50.4258 52.9919V91.0479Z"
        fill="#85ACC4"
      />
      <path
        d="M49.563 17.0499C49.99 15.6235 52.01 15.6235 52.437 17.0499L61.2711 46.5582C61.4145 47.0371 61.7871 47.4131 62.2647 47.5609L91.3692 56.567C92.778 57.003 92.778 58.997 91.3692 59.433L62.2647 68.4391C61.7871 68.5869 61.4145 68.9629 61.2711 69.4418L52.437 98.9501C52.01 100.377 49.99 100.377 49.563 98.9501L40.7289 69.4418C40.5855 68.9629 40.2129 68.5869 39.7353 68.4391L10.6308 59.433C9.22204 58.997 9.22203 57.003 10.6308 56.567L39.7353 47.5609C40.2129 47.4131 40.5855 47.0371 40.7289 46.5582L49.563 17.0499Z"
        fill="#B9DAEE"
      />
    </svg>
  );
}
