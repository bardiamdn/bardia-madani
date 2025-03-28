"use client";
import CTABUtton from "@/common/CTAButton";
import { useEffect, useRef, useState } from "react";
import FormData from "@/types/formData";

export default function Form() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    service: "",
    message: "",
  });
  // const [status, setStatus] = useState<
  //   "idle" | "loading" | "success" | "error"
  // >("idle");

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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevData: FormData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // setStatus("success");
        setFormData({
          name: "",
          organization: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        console.error("Error:", res.statusText);
        // setStatus("error");
      }
    } catch (error: unknown) {
      // setStatus("error");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      className="relative md:my-0 my-[50px] w-full md:w-1/2 md:after:absolute md:after:top-0 md:after:left-0 md:after:h-[var(--border-height)] md:after:w-[1px] md:after:bg-black"
      name="contact"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <h2 className="md:px-[25px] px-[15px] mb-[80px] mx-auto ">
        Get in Touch
      </h2>
      <div
        id="name"
        className="mb-[35px] relative after:absolute after:bottom-0 after:left-0 after:w-[var(--border-height)] after:h-[1px] after:bg-black focus-within:after:bg-transparent"
      >
        <label className="md:px-[25px] px-[15px] block mb-[15px] text-xl">
          Full Name
        </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          required
          placeholder="Enter your full name"
          className="w-full py-[10px] 2xl:pr-[10vw] focus:outline-none focus:border-b-2 focus:border-accent text-lg md:px-[25px] px-[15px]"
        />
      </div>

      <div
        id="email"
        className="mb-[35px] relative after:absolute after:bottom-0 after:left-0 after:w-[var(--border-height)] after:h-[1px] after:bg-black focus-within:after:bg-transparent"
      >
        <label className="md:px-[25px] px-[15px] block mb-[15px] text-xl">
          Email Address
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
          placeholder="e.g., name@example.com"
          className="w-full py-[10px] 2xl:pr-[10vw] focus:outline-none focus:border-b-2 focus:border-accent text-lg md:px-[25px] px-[15px] "
        />
      </div>
      <div
        id="organization"
        className="mb-[35px] relative after:absolute after:bottom-0 after:left-0 after:w-[var(--border-height)] after:h-[1px] after:bg-black focus-within:after:bg-transparent"
      >
        <label className="md:px-[25px] px-[15px] block mb-[15px] text-xl">
          Organization Name
        </label>
        <input
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          type="text"
          required
          placeholder="e.g., Acme Corp."
          className="w-full py-[10px] 2xl:pr-[10vw] focus:outline-none focus:border-b-2 focus:border-accent text-lg md:px-[25px] px-[15px] "
        />
      </div>
      <div
        id="service"
        className="mb-[35px] relative after:absolute after:bottom-0 after:left-0 after:w-[var(--border-height)] after:h-[1px] after:bg-black focus-within:after:bg-transparent"
      >
        <label className="md:px-[25px] px-[15px] block mb-[15px] text-xl">
          Which Service Are You Interested In?
        </label>
        <input
          name="service"
          value={formData.service}
          onChange={handleChange}
          type="text"
          required
          placeholder="e.g., Web Development, Web Design"
          className="w-full py-[10px] 2xl:pr-[10vw] focus:outline-none focus:border-b-2 focus:border-accent text-lg md:px-[25px] px-[15px] "
        />
      </div>
      <div
        id="message"
        className="mb-[35px] relative after:absolute after:bottom-0 after:left-0 after:w-[var(--border-height)] after:h-[1px] after:bg-black focus-within:after:bg-transparent"
      >
        <label className="md:px-[25px] px-[15px] block mb-[15px] text-xl">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message here"
          className="w-full py-[10px] 2xl:pr-[10vw] focus:outline-none focus:border-b-2 focus:border-accent text-lg md:px-[25px] px-[15px] h-32"
        ></textarea>
      </div>

      <div className="md:px-[25px] px-[15px] 2xl:pr-[10vw] py-[100px]">
        <CTABUtton type="submit" btnType="primary" className="w-full py-[16px]">
          Send Message
        </CTABUtton>
      </div>
    </form>
  );
}
