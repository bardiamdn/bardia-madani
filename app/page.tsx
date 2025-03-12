"use client";
// import newScript from "@/utils/newScript";
import dynamic from "next/dynamic";
// import { useEffect } from "react";

import Hero from "@/components/Hero";
import HeroContent from "@/components/Hero/HeroContent";
import { usePageTransition } from "@/hooks/usePageTransition";
const Intro = dynamic(() => import("@/components/Intro"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Work = dynamic(() => import("@/components/Work"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });

export default function Home() {
  usePageTransition();
  return (
    <main className="relative">
      <Hero />
      <HeroContent />
      <Intro />
      <Services />
      <Work />
      <Gallery />
    </main>
  );
}
