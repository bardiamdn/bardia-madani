"use client";
import { useRef, useEffect } from "react";
import styles from "./style.module.scss";
import { useLoadingContext } from "@/utils/LoadingContext";

export default function Loading() {
  const loadingRef = useRef(null);
  const { setLoadingComplete } = useLoadingContext();

  useEffect(() => {
    let gsapTimeout: NodeJS.Timeout;
    const waitForGSAP = () => {
      if (window.gsap) {
        const tl = window.gsap.timeline({
          defaults: { ease: "cubic-bezier(0.85, 0, 0.15, 1)" },
          onComplete: () => {
            setLoadingComplete(true);
          },
        });

        // 0%: 282.74 -> 20%: 210 -> 50%: 120 -> 90%: 20 -> 100%: 0
        tl.to(loadingRef.current, { strokeDashoffset: 210, duration: 0.3 })
          .to(loadingRef.current, { strokeDashoffset: 120, duration: 0.45 })
          .to(loadingRef.current, { strokeDashoffset: 20, duration: 0.6 })
          .to(loadingRef.current, { strokeDashoffset: 0, duration: 0.15 });
      } else {
        console.warn("GSAP not loaded yet, retrying...");
        gsapTimeout = setTimeout(waitForGSAP, 100);
      }
    };

    waitForGSAP();

    return () => {
      clearTimeout(gsapTimeout);
    };
  }, [setLoadingComplete]);

  return (
    <svg width="304" height="304" viewBox="0 0 304 304">
      <circle
        cx="152"
        cy="152"
        r="150"
        fill="none"
        strokeWidth="1"
        strokeDasharray="10,8"
        className={styles.dash}
      />
      <circle
        ref={loadingRef}
        cx="152"
        cy="152"
        r="45"
        fill="none"
        strokeWidth="90"
        strokeDasharray="282.74"
        strokeDashoffset="282.74"
        className={styles.loading}
      />
    </svg>
  );
}
