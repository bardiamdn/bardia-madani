import Script from "next/script";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"));
const Hero = dynamic(() => import("@/components/Hero"));
const Tagline = dynamic(() => import("@/components/Tagline"));
const Services = dynamic(() => import("@/components/Services"));
const Work = dynamic(() => import("@/components/Work"));
const Parallax = dynamic(() => import("@/components/Parallax"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="relative">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/70/three.min.js"></Script>
      <main>
        <Header />
        <Hero />
        <Tagline />
        <Services />
        <Work />
        <Parallax />
        <Footer />
      </main>
    </div>
  );
}
