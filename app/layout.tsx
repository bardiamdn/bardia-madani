import type { Metadata } from "next";
import localFont from "next/font/local";
import { Genos } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ScriptLoaderProvider } from "@/utils/ScriptLoaderContext";
import Loading from "@/components/Loading";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LoadingProvider } from "@/utils/LoadingContext";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = localFont({
  src: "./fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});
const spaceGrotesk = localFont({
  src: "./fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf",
  variable: "--font-space-grotesk",
  weight: "100 900",
  display: "swap",
});
const geologica = localFont({
  src: "./fonts/Geologica/Geologica-VariableFont_CRSV,SHRP,slnt,wght.ttf",
  variable: "--font-geologica",
  weight: "100 900",
  display: "swap",
});
const genos = Genos({
  variable: "--font-genos",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["cherokee"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bardia Madani | Web Designer & Developer",
  description:
    "Improve your online presence with a custom website. I create high-quality, fast, and responsive websites tailored to your brand.",

  // icons: {
  //   icon: "favicon.ico",
  //   shortcut: "favicon-32x32.png",
  //   apple: "apple-touch-icon.png",
  // },

  openGraph: {
    title: "Bardia Madani | Web Designer & Developer",
    description:
      "Improve your online presence with a custom website tailored to your brand.",
    url: "https://bardiamadani.com",
    siteName: "Bardia Madani",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bardia Madani – Custom Web Design",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bardia Madani | Web Designer & Developer",
    description:
      "Improve your online presence with a custom website tailored to your brand.",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://bardiamadani.com",
  },

  keywords: [
    "Web Design",
    "Web Development",
    "Freelance Web Developer",
    "Bardia Madani",
    "Custom Websites",
    "Responsive Web Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geologica.variable} ${spaceGrotesk.variable} ${inter.variable}  ${genos.variable} antialiased relative`}
      >
        <ScriptLoaderProvider>
          <LoadingProvider>
            <div
              id="second-overlay"
              className="fixed left-0 -top-[25vh] h-[150vh] w-screen z-[29] bg-accentSecondary"
            ></div>
            <div
              id="overlay"
              className=" fixed left-0 top-0 w-screen h-[100vh] z-30 bg-black flex items-center justify-center"
            >
              <Loading />
            </div>
            <Header />
            <SmoothScroll />
            <main id="main" className="relative">
              {children}
            </main>
            <Footer />
          </LoadingProvider>
        </ScriptLoaderProvider>
        <GoogleAnalytics gaId="G-6DCBFCPNTD" />
      </body>
    </html>
  );
}
