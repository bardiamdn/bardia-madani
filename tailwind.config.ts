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
        accent: "var(--secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundSecondary: "var(--background-secondary)",
        foregroundSecondary: "var(--foreground-secondary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
