"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Service({
  serviceName,
  serviceMedia,
  serviceAlt,
  serviceDescription,
}: {
  serviceName: string;
  serviceMedia: string;
  serviceAlt: string;
  serviceDescription: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const desRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

  const handleMouseEnter = () => {
    if (!containerRef.current) return;
    const tl = window.gsap.timeline();

    tl.to(
      containerRef.current,
      {
        height: "300px",
        duration: 0.5,
        ease: "easeInOutQuint",
        // onComplete: () => {
        //   window.gsap.set(containerRef.current, {
        //     height: "300px",
        //   });
        //   window.gsap.set(imageRef.current, {
        //     display: "block",
        //     opacity: 1,
        //     width: "15%",
        //   });
        //   window.gsap.set(desRef.current, {
        //     width: "40%",
        //   });
        // },
      }
      // 0
    )
      .to(
        desRef.current,
        {
          width: "40%",
          duration: 0.5,
          ease: "easeInOutQuint",
        }
        // 0
      )
      .to(
        imageRef.current,
        {
          display: "block",
          opacity: 1,
          width: "15%",
          duration: 0.5,
          ease: "easeInOutQuint",
        }
        // "<"
      );
  };
  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    const tl = window.gsap.timeline();

    tl.to(
      imageRef.current,
      {
        display: "none",
        opacity: 0,
        width: "5%",
        duration: 0.5,
        ease: "easeInOutQuint",
      }
      // 0
    )
      // .set(imageRef.current, { display: "none" })
      .to(
        containerRef.current,
        {
          height: "150px",
          duration: 0.5,
          ease: "easeInOutQuint",
          // onComplete: () => {
          //   window.gsap.set(containerRef.current, {
          //     height: "150px",
          //   });
          //   window.gsap.set(imageRef.current, {
          //     display: "hidden",
          //     opacity: 0,
          //     width: "5%",
          //   });
          //   window.gsap.set(desRef.current, {
          //     width: "55%",
          //   });
          // },
        }
        // 0
      )
      // .set(imageRef.current, { display: "none" })
      .to(
        desRef.current,
        {
          width: "55%",
          duration: 0.5,
          ease: "easeInOutQuint",
        }
        // 0.2
      );
  };

  return (
    <div
      className="2xl:px-[10%] w-full py-[20px] md:h-[150px] relative flex items-center justify-center md:justify-between md:px-[30px] after:absolute after:bottom-0 after:left-0 after:w-[var(--border-width)] after:h-[1px] after:bg-black"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="w-[40%] font-extralight" ref={nameRef}>
        {serviceName}
      </h3>
      <div
        className="relative w-[5%] opacity-0 hidden aspect-square"
        ref={imageRef}
      >
        <Image
          src={serviceMedia}
          alt={serviceAlt}
          fill
          className="object-center object-cover"
        />
      </div>
      <p className="w-[55%] md:inline hidden" ref={desRef}>
        {serviceDescription}
      </p>
    </div>
  );
}
