"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import HeroContent from "@/components/Hero/HeroContent";
import { usePageTransition } from "@/hooks/usePageTransition";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Gallery from "@/components/Gallery";
import { client } from "@/sanity/client";
import { HomepageData } from "@/types/homepage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [homepageData, setHomepageData] = useState<HomepageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(`*[_type == "homepage"][1]`);
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
