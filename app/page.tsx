"use client";
import newScript from "@/utils/newScript";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Tagline = dynamic(() => import("@/components/HeroContent"), {
  ssr: false,
});
const Intro = dynamic(() => import("@/components/Intro"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Work = dynamic(() => import("@/components/Work"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });

export default function Home() {
  useEffect(() => {
    newScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js")
      .then(() => {
        newScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
        )
          .then(() => {
            if (window.gsap && window.ScrollTrigger) {
              window.gsap.registerPlugin(window.ScrollTrigger);
            }
            // console.log("GSAP and ScrollTrigger loaded successfully");
          })
          .catch((error) => {
            console.error("ScrollTrigger loading failed:", error);
          });
      })
      .catch((error) => {
        console.error("GSAP loading failed:", error);
      });
  }, []);

  return (
    <main className="relative">
      <Hero />
      <Tagline />
      <Intro />
      <Services />
      <Work />
      <Gallery />
    </main>
  );
}
