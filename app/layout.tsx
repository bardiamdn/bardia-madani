import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

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
  title: "Create Next App",
  description: "Generated by create next app",
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
        className={`${geologica.className} ${spaceGrotesk.className} ${inter.className} antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
