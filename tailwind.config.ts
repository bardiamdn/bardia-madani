import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        antiPrimary: "var(--anti-primary)",
        accent: "var(--accent)",
        accentSecondary: "var(--accent-secondary)",
        background: "var(--background)",
        backgroundSecondary: "var(--background-secondary)",
        foreground: "var(--foreground)",
        foregroundAccent: "var(--foreground-accent)",
        foregroundLight: "var(--foreground-light)",
        foregroundSecondary: "var(--foreground-secondary)",
        border: "var(--border)",
      },
      screens: {
        xs: "475px",
        // sm: "640px",
        // md: "768px",
        // lg: "1024px",
        // xl: "1280px",
        // "2xl": "1536px",
      },
      fontFamily: {
        geologica: "var(--font-geologica), sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
