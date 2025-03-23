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

export default function Home() {
  const [homepageData, setHomepageData] = useState<HomepageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "homepage"][1]`);
      console.log(data);
      setHomepageData(data);
    };

    fetchData();
  }, []);

  usePageTransition();

  if (!homepageData) {
    return <div>Loading...</div>;
  }

  const {
    tagline,
    supportingText,
    cta,
    intro,
    services,
    works,
    footerCTATextTop,
    footerCTATextBottom,
    footerCTAButton,
  } = homepageData;

  return (
    <main className="relative">
      <Hero />
      <HeroContent
        tagline={tagline}
        cta={cta}
        supportingText={supportingText}
      />
      <Intro intro={intro} />
      <Services services={services} />
      <Work works={works} />
      <Gallery />
      {/* <FooterCTA textTop={footerCTATextTop} ... /> */}
    </main>
  );
}
