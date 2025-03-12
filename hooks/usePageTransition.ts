"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useScriptLoader } from "@/utils/ScriptLoaderContext";

export function usePageTransition() {
  const router = useRouter();
  const { loaded } = useScriptLoader();

  useEffect(() => {
    const overlay = document.getElementById("overlay");
    const main = document.getElementById("main");
    const overlaySecond = document.getElementById("second-overlay");

    if (!loaded || !overlay || !main || !overlaySecond) return;

    const timeline = window.gsap.timeline();

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
  }, [loaded, router]);
}
