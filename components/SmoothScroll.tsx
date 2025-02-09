"use client";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();

    window.scrollTo(0, 0);
  }, []);
  return null;
}
