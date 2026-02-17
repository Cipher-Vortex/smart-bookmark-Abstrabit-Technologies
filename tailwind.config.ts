import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",
        accent: {
          DEFAULT: "#00ff88", // Neon Mint
          dark: "#00cc6e",
        },
        cyber: {
          black: "#0a0a0a",
          border: "#222222",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      boxShadow: {
        brutalist: "4px 4px 0px 0px #222222",
      },
    },
  },
  plugins: [],
};
export default config;
