import { useEffect, useRef } from "react";

export default function Service({
  serviceName,
  serviceDescription,
}: {
  serviceName: string;
  serviceDescription: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const desRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let gsapTimeout: NodeJS.Timeout;
    const waitForGSAP = () => {
      if (window.gsap && window.ScrollTrigger) {
        if (!containerRef.current) return;

        window.gsap.fromTo(
          nameRef.current,
          {
            x: "-30px",
            opacity: 0,
          },
          {
            x: "0px",
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: nameRef.current,
              start: "bottom bottom",
              end: "top bottom",
              // markers: true,
              toggleActions: "play none none none",
            },
          }
        );
        window.gsap.fromTo(
          desRef.current,
          {
            x: "-30px",
            opacity: 0,
          },
          {
            x: "0px",
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: desRef.current,
              start: "bottom bottom",
              end: "top bottom",
              // markers: true,
              toggleActions: "play none none none",
            },
          }
        );
        window.gsap.fromTo(
          containerRef.current,
          { "--border-width": "0%" },
          {
            "--border-width": "100%",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "bottom bottom",
              end: "top bottom",
              // markers: true,
              toggleActions: "play none none none",
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
    <div
      className="2xl:px-[10%] w-full py-[20px] md:h-[150px] relative flex items-center justify-center md:justify-between md:px-[30px] after:absolute after:bottom-0 after:left-0 after:w-[var(--border-width)] after:h-[1px] after:bg-black"
      ref={containerRef}
    >
      <h3 className="text-3xl font-extralight" ref={nameRef}>
        {serviceName}
      </h3>
      <p className="w-[60%] md:inline hidden" ref={desRef}>
        {serviceDescription}
      </p>
    </div>
  );
}
