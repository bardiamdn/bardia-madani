"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useScriptLoader } from "@/utils/ScriptLoaderContext";
import { useLoadingContext } from "@/utils/LoadingContext";

export function usePageTransition() {
  const router = useRouter();
  const { loaded } = useScriptLoader();
  const { loadingComplete } = useLoadingContext()

  useEffect(() => {
    if (!loadingComplete) return;
    const overlay = document.getElementById("overlay");
    const main = document.getElementById("main");
    const overlaySecond = document.getElementById("second-overlay");

    if (!overlay || !main || !overlaySecond) return;

    let gsapTimeout: NodeJS.Timeout;
    let timeline: Window["gsap"]
    const waitForGSAP = () => {
      if (window.gsap && window.ScrollTrigger && loaded) {

        timeline = window.gsap.timeline();

        timeline
          .fromTo(
            overlay,
            { top: "0" },
            {
              top: "-100vh",
              duration: 1,
              ease: "easeInOutQuint",
            }
          )
          .fromTo(
            overlaySecond,
            { top: "-25vh" },
            {
              top: "-150vh",
              duration: 1,
              ease: "easeInOutQuint",
            },
            "0.3"
          )
          .fromTo(
            main,
            {
              top: "200px",
              opacity: 0,
            },
            {
              top: 0,
              opacity: 1,
              duration: 1,
              ease: "easeInOutQuint",
            },
            "0.4"
          );
      } else {
        console.warn("GSAP not loaded yet, retrying...");
        gsapTimeout = setTimeout(waitForGSAP, 100);
      }
    };

    waitForGSAP();
    return () => {
      clearTimeout(gsapTimeout)
      timeline?.kill()
    };
  }, [loaded, router, loadingComplete]);
}
