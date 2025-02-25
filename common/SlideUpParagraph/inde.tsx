import { useEffect, useRef } from "react";

export default function SlideUpParagraph({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  const words = children.split(" ").map((word, index) => (
    <span key={index} className="relative inline-flex overflow-hidden">
      <span className="word opacity-0">{word}&nbsp;</span>
    </span>
  ));

  useEffect(() => {
    if (!ref.current) return;

    let gsapTimeout: NodeJS.Timeout;
    const waitForGSAP = () => {
      if (window.gsap && window.ScrollTrigger) {
        if (!ref.current) return;

        window.gsap.fromTo(
          ref.current.querySelectorAll(".word"),
          {
            y: "50%",
            opacity: 0,
          },
          {
            y: "0%",
            opacity: 1,
            duration: 1,
            stagger: 0.03,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "top bottom",
              // markers: true,
              toggleActions: "play none none none", //"play none reverse none" use this combination if you want to redo the animation on reenter
            },
          }
        );
      } else {
        console.warn("GSAP not loaded yet, retrying...");
        gsapTimeout = setTimeout(waitForGSAP, 100);
      }
    };

    waitForGSAP();
    return () => clearTimeout(gsapTimeout);
  }, []);

  return (
    <p className={` ${className}`} ref={ref}>
      {words}
    </p>
  );
}
