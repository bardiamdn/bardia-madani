"use client";
import CTABUtton from "@/common/CTAButton";
import { useEffect, useRef } from "react";

export default function Form() {
  const formRef = useRef(null);

  useEffect(() => {
    let gsapTimeout: NodeJS.Timeout;
    const waitForGsap = () => {
      if (window.gsap && window.ScrollTrigger) {
        if (!formRef.current) return;
        window.gsap.registerPlugin(window.ScrollTrigger);

        const tl = window.gsap.timeline({
          scrollTrigger: {
            trigger: formRef.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none none",
          },
        });
        tl.fromTo(
          formRef.current,
          { "--border-height": "0%" },
          {
            "--border-height": "100%",
            duration: 1.5,
            ease: "power2.out",
          }
        )
          .fromTo(
            "#name",
            { "--border-width": "0%" },
            { "--border-width": "100%", duration: 1, ease: "power2.out" },
            "-=0.8"
          )
          .fromTo(
            "#email",
            { "--border-width": "0%" },
            { "--border-width": "100%", duration: 1, ease: "power2.out" },
            "-=0.8"
          )
          .fromTo(
            "#organization",
            { "--border-width": "0%" },
            { "--border-width": "100%", duration: 1, ease: "power2.out" },
            "-=0.8"
          )
          .fromTo(
            "#service",
            { "--border-width": "0%" },
            { "--border-width": "100%", duration: 1, ease: "power2.out" },
            "-=0.8"
          )
          .fromTo(
            "#message",
            { "--border-width": "0%" },
            { "--border-width": "100%", duration: 1, ease: "power2.out" },
            "-=0.8"
          );
      } else {
        console.warn("GSAP not loaded yet, retrying...");
        gsapTimeout = setTimeout(waitForGsap, 100);
      }
    };

    waitForGsap();
    return () => clearTimeout(gsapTimeout);
  }, []);

  return (
    <form
      className="relative md:my-0 my-[50px] w-full md:w-1/2 md:after:absolute md:after:top-0 md:after:left-0 md:after:h-[var(--border-height)] md:after:w-[1px] md:after:bg-black"
      ref={formRef}
    >
      <h2 className="md:px-[25px] px-[15px] mb-[80px] mx-auto ">
        Get in Touch
      </h2>
      <div
        id="name"
        className="mb-[35px] relative after:absolute after:bottom-0 after:left-0 after:w-[var(--border-height)] after:h-[1px] after:bg-black "
      >
        <label className="md:px-[25px] px-[15px] block mb-[15px] text-xl">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full py-[10px] focus:outline-none focus:border-b-2 focus:border-accent text-lg md:px-[25px] px-[15px]"
        />
      </div>

      <div
        id="email"
        className="mb-[35px] relative after:absolute after:bottom-0 after:left-0 after:w-[var(--border-height)] after:h-[1px] after:bg-black"
      >
        <label className="md:px-[25px] px-[15px] block mb-[15px] text-xl">
          Email Address
        </label>
        <input
          type="email"
          placeholder="e.g., name@example.com"
          className="w-full py-[10px] focus:outline-none focus:border-b-2 focus:border-accent text-lg md:px-[25px] px-[15px] "
        />
      </div>
      <div
        id="organization"
        className="mb-[35px] relative after:absolute after:bottom-0 after:left-0 after:w-[var(--border-height)] after:h-[1px] after:bg-black"
      >
        <label className="md:px-[25px] px-[15px] block mb-[15px] text-xl">
          Organization Name
        </label>
        <input
          type="text"
          placeholder="e.g., Acme Corp."
          className="w-full py-[10px] focus:outline-none focus:border-b-2 focus:border-accent text-lg md:px-[25px] px-[15px] "
        />
      </div>
      <div
        id="service"
        className="mb-[35px] relative after:absolute after:bottom-0 after:left-0 after:w-[var(--border-height)] after:h-[1px] after:bg-black"
      >
        <label className="md:px-[25px] px-[15px] block mb-[15px] text-xl">
          Which Service Are You Interested In?
        </label>
        <input
          type="text"
          placeholder="e.g., Web Development, Web Design"
          className="w-full py-[10px] focus:outline-none focus:border-b-2 focus:border-accent text-lg md:px-[25px] px-[15px] "
        />
      </div>
      <div
        id="message"
        className="mb-[35px] relative after:absolute after:bottom-0 after:left-0 after:w-[var(--border-height)] after:h-[1px] after:bg-black"
      >
        <label className="md:px-[25px] px-[15px] block mb-[15px] text-xl">
          Message
        </label>
        <textarea
          placeholder="Enter your message here"
          className="w-full py-[10px] focus:outline-none focus:border-b-2 focus:border-accent text-lg md:px-[25px] px-[15px] h-32"
        ></textarea>
      </div>

      <div className="md:px-[25px] px-[15px]  py-[100px]">
        <CTABUtton type="submit" btnType="primary" className="w-full py-[16px]">
          Send Message
        </CTABUtton>
      </div>
    </form>
  );
}
