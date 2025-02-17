import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
const Header = dynamic(() => import("@/components/Header"));

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

export const metadata: Metadata = {
  title: "Bardia Madani",
  description: "Improve your online presence with a custom website",
  icons: {
    apple: "Bardia",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geologica.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <SmoothScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
