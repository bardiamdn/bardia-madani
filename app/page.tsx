"use client";
// import newScript from "@/utils/newScript";
import dynamic from "next/dynamic";
// import { useEffect } from "react";

import Hero from "@/components/Hero";
import Tagline from "@/components/HeroContent";
// import Transition from "@/components/Transition";
// const Tagline = dynamic(() => import("@/components/HeroContent"), {
//   ssr: false,
// });
const Intro = dynamic(() => import("@/components/Intro"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Work = dynamic(() => import("@/components/Work"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });

export default function Home() {
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
