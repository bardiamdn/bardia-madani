import { useState, useLayoutEffect } from "react";
import { useScriptLoader } from "@/utils/ScriptLoaderContext";
import { usePathname } from "next/navigation";

export function useScrollBackground() {
  const { loaded } = useScriptLoader();
  const pathname = usePathname();
  const [isBackgroundLight, setIsBackgroundLight] = useState(false);

  useLayoutEffect(() => {
    if (pathname === "/") {
      setIsBackgroundLight(false);
    } else {
      setIsBackgroundLight(true);
    }

    let gsapTimeout: NodeJS.Timeout;
    let heroTrigger: Window["gsap"] = null;
    let footerTrigger: Window["gsap"] = null;

    const waitForGSAP = () => {
      if (loaded) {
        if (pathname === "/") {
          heroTrigger = window.ScrollTrigger.create({
            trigger: document.getElementById("hero-content"),
            start: "-500px top",
            end: "bottom-=50px top",
            onEnter: () => setIsBackgroundLight(false),
            onLeave: () => setIsBackgroundLight(true),
            onEnterBack: () => setIsBackgroundLight(false),
            onLeaveBack: () => setIsBackgroundLight(true),
          });
        } else {
          setIsBackgroundLight(true);
        }
        footerTrigger = window.ScrollTrigger.create({
          trigger: document.getElementById("footer"),
          start: "-50px top",
          end: "bottom top",
          onEnter: () => setIsBackgroundLight(false),
          onLeave: () => setIsBackgroundLight(true),
          onEnterBack: () => setIsBackgroundLight(false),
          onLeaveBack: () => setIsBackgroundLight(true),
        });
      } else {
        console.warn("GSAP not loaded yet, retrying...");
        gsapTimeout = setTimeout(waitForGSAP, 100);
      }
    };

    waitForGSAP();

    return () => {
      clearTimeout(gsapTimeout);
      if (heroTrigger) {
        heroTrigger.kill();
      }
      if (footerTrigger) {
        footerTrigger.kill();
      }
    };
  }, [loaded, pathname]);

  return { isBackgroundLight };
}
