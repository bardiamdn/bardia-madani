"use client";
import { Service as ServiceType } from "@/types/homepage";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Service({
  name,
  mediaSrc,
  altText,
  description,
  isVideo,
}: ServiceType) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const desRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let gsapTimeout: NodeJS.Timeout;
    const waitForGSAP = () => {
      if (window.gsap && window.ScrollTrigger) {
        if (!containerRef.current) return;

        window.gsap.fromTo(
          serviceRef.current,
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
              trigger: serviceRef.current,
              start: "bottom bottom",
              end: "top bottom",
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
              toggleActions: "play none none none",
            },
          }
        );

        // const mm = window.gsap.matchMedia();

        // mm.add("(max-width: 768px)", () => {
        //   // if (videoRef.current) videoRef.current.play();
        //   const tl = window.gsap.timeline({
        //     scrollTrigger: {
        //       trigger: containerRef.current,
        //       start: "top 80%",
        //       end: "top 55%",
        //       scrub: true,
        //     },
        //   });
        //   tl.fromTo(
        //     containerRef.current,
        //     { height: 150 },
        //     {
        //       height: 300,
        //       // justifyContent: "space-between",
        //       duration: 0.5,
        //       ease: "easeInOutQuint",
        //     }
        //   )
        //     // .set(desRef.current, {
        //     //   display: "inline",
        //     // })
        //     // .to(desRef.current, {
        //     //   opacity: 1,
        //     //   // display: "inline",
        //     // })
        //     .fromTo(
        //       imageRef.current,
        //       { display: "none", opacity: 0, width: 0, height: 0 },
        //       {
        //         display: "block",
        //         opacity: 1,
        //         width: "50%",
        //         height: "50%",
        //         duration: 0.5,
        //         ease: "easeOutQuint",
        //       }
        //     );
        //   const tlReverse = window.gsap.timeline({
        //     scrollTrigger: {
        //       trigger: containerRef.current,
        //       start: "top 35%",
        //       end: "top top",
        //       scrub: true,
        //     },
        //   });
        //   tlReverse
        //     .to(
        //       containerRef.current,
        //       // { height: 300 },
        //       {
        //         height: 150,
        //         // justifyContent: "space-between",
        //         duration: 0.5,
        //         ease: "easeInOutQuint",
        //       }
        //     )
        //     // .set(desRef.current, {
        //     //   display: "inline",
        //     // })
        //     // .to(desRef.current, {
        //     //   opacity: 1,
        //     //   // display: "inline",
        //     // })
        //     .to(
        //       imageRef.current,
        //       // { display: "block", opacity: 1, width: "50%", height: "50%" },
        //       {
        //         display: "none",
        //         opacity: 0,
        //         width: 0,
        //         height: 0,
        //         duration: 0.5,
        //         ease: "easeOutQuint",
        //       }
        //     );
        // });
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
    const mm = window.gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (videoRef.current) videoRef.current.play();
      const tl = window.gsap.timeline();

      tl.to(
        containerRef.current,
        {
          height: "300px",
          duration: 0.5,
          ease: "easeInOutQuint",
        },
        0
      )
        .to(
          desRef.current,
          {
            width: "40%",
            duration: 0.5,
            ease: "easeInOutQuint",
          },
          0
        )
        .to(
          imageRef.current,
          {
            display: "block",
            opacity: 1,
            width: "15%",
            duration: 0.5,
            ease: "easeInOutQuint",
          },
          0
        );
    });
  };
  const handleMouseLeave = () => {
    if (!containerRef.current || !videoRef.current) return;
    const mm = window.gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = window.gsap.timeline();

      tl.to(
        imageRef.current,
        {
          display: "none",
          opacity: 0,
          width: "5%",
          duration: 0.5,
          ease: "easeInOutQuint",
        },
        0
      )
        .set(imageRef.current, { display: "none" })
        .to(
          containerRef.current,
          {
            height: "150px",
            duration: 0.5,
            ease: "easeInOutQuint",
          },
          0
        )
        .to(
          desRef.current,
          {
            width: "55%",
            duration: 0.5,
            ease: "easeInOutQuint",
          }
          // 0.2
        );
      if (videoRef.current) videoRef.current.pause();
    });
  };

  return (
    <div
      className="2xl:px-[10%] px-[15px] w-full py-[50px] md:h-[150px] h-auto relative flex md:flex-row flex-col items-center justify-evenly md:justify-between md:px-[30px] after:absolute after:bottom-0 after:left-0 after:w-[var(--border-width)] after:h-[1px] after:bg-black"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3
        className="md:w-[40%] w-auto md:font-extralight md:text-start text-center"
        ref={serviceRef}
      >
        {name}
      </h3>
      <div
        className="relative w-[5%] h-[100%] opacity-0 hidden aspect-square "
        ref={imageRef}
      >
        {isVideo ? (
          <video
            src={mediaSrc}
            aria-label={altText}
            // autoPlay
            loop
            muted
            className="object-center object-cover w-full h-full"
            ref={videoRef}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={mediaSrc}
            alt={altText}
            fill
            className="object-center object-cover"
          />
        )}
      </div>
      <p
        className="md:w-[55%] w-full md:pt-0 pt-[35px] md:text-[20px] text-base"
        ref={desRef}
      >
        {description}
      </p>
    </div>
  );
}
