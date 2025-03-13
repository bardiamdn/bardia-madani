"use client";

import Hero from "@/components/Hero";
import HeroContent from "@/components/Hero/HeroContent";
import { usePageTransition } from "@/hooks/usePageTransition";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Gallery from "@/components/Gallery";

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
