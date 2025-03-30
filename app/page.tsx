"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import HeroContent from "@/components/Hero/HeroContent";
import { usePageTransition } from "@/hooks/usePageTransition";
import { client } from "@/sanity/client";
import { HomepageData } from "@/types/homepage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
const Intro = dynamic(() => import("@/components/Intro"), {
  loading: () => <p>Loading Intro...</p>,
});
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <p>Loading Services...</p>,
});
const Work = dynamic(() => import("@/components/Work"), {
  loading: () => <p>Loading Work...</p>,
});
const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <p>Loading Gallery...</p>,
});

export default function Home() {
  const [homepageData, setHomepageData] = useState<HomepageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(`*[_type == "homepage"][0]`);
        setHomepageData(res);
      } catch (err) {
        console.error("Failed to load data from Sanity:", err);
        setTimeout(fetchData, 1000);
      }
    };

    fetchData();
  }, []);

  usePageTransition();

  if (!homepageData) {
    return <div>Loading...</div>;
  }

  const { tagline, supportingText, cta, intro, services, works } = homepageData;

  return (
    <>
      <Header />
      <Hero />
      <div className="relative z-10">
        <HeroContent
          tagline={tagline}
          cta={cta}
          supportingText={supportingText}
        />
        <Intro intro={intro} />
        <Services services={services} />
        <Work works={works} />
        <Gallery />
      </div>
      <Footer />
    </>
  );
}
