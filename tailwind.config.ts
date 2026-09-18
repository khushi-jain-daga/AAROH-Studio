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
        charcoal: {
          DEFAULT: "#0E0E0D",
          950: "#070707",
          900: "#0E0E0D",
          800: "#141413",
          700: "#1F1F1D",
          600: "#2B2B28",
        },
        ivory: {
          DEFAULT: "#F4F0EA",
          50: "#FAF8F4",
          100: "#F4F0EA",
          200: "#EAE4DA",
          300: "#E0D7C9",
        },
        stone: {
          DEFAULT: "#D8D0C4",
          300: "#E2DBD1",
          400: "#D8D0C4",
          500: "#C3B9AB",
        },
        clay: {
          DEFAULT: "#A97856",
          400: "#B88663",
          500: "#A97856",
          600: "#8F6141",
        },
        brass: {
          DEFAULT: "#B59B6A",
          300: "#C7AF81",
          400: "#B59B6A",
          500: "#9E8454",
          600: "#856D40",
        },
        brown: {
          DEFAULT: "#231D19",
          900: "#231D19",
          800: "#362E27",
        },
        bone: {
          50: "#FAF8F4",
          100: "#F4F0EA",
          200: "#EAE4DA",
          300: "#E0D7C9",
        },
        ash: {
          100: "#E8E5DF",
          200: "#E3DFD7",
          300: "#D5D0C6",
          400: "#BDB7AA",
        },
        "muted-slate": "#706B63",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.25em",
        widest: "0.32em",
        ultra: "0.4em",
      },
      lineHeight: {
        tighter: "1.04",
        tight: "1.12",
        relaxed: "1.75",
      },
      animation: {
        "slow-pan": "slowPan 28s ease-in-out infinite alternate",
        "fade-in-up": "fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        slowPan: {
          "0%": { transform: "scale(1) translateY(0)" },
          "100%": { transform: "scale(1.06) translateY(-10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
