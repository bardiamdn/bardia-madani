"use client";
import { useEffect } from "react";
import newScript from "./newScript";

export default function LoadScripts({ setLoaded }: { setLoaded:  }) {
  useEffect(() => {
    newScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js")
      .then(() => {
        newScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
        )
          .then(() => {
            if (window.gsap && window.ScrollTrigger) {
              window.gsap.registerPlugin(window.ScrollTrigger);
              setLoaded(true);
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
  return null;
}
