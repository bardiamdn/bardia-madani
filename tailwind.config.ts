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
        accent: "var(--accent)",
        accentSecondary: "var(--accent-secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundSecondary: "var(--background-secondary)",
        foregroundSecondary: "var(--foreground-secondary)",
      },
      screens: {
        xs: "475px",
        // sm: "640px",
        // md: "768px",
        // lg: "1024px",
        // xl: "1280px",
        // "2xl": "1536px",
      },
    },
  },
  plugins: [],
} satisfies Config;
