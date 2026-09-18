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
          950: "#070707",
          900: "#0B0B0B",
          800: "#121212",
          700: "#1A1A1A",
          600: "#242424",
        },
        bone: {
          50: "#FAF8F5",
          100: "#F7F5F0",
          200: "#F0EDE6",
          300: "#E8E4DA",
        },
        clay: {
          300: "#D8C5B0",
          400: "#C8B29B",
          500: "#B59E85",
          600: "#9E866C",
        },
        ash: {
          100: "#E8E5DF",
          200: "#E3DFD7",
          300: "#D5D0C6",
          400: "#BDB7AA",
        },
        brass: {
          300: "#B4A182",
          400: "#9E8B6D",
          500: "#88765A",
          600: "#706148",
        },
        "muted-slate": "#6E6A64",
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
