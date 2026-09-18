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
          950: "#0A0A0A",
          900: "#121212",
          800: "#181818",
          700: "#222222",
          600: "#2E2E2E",
        },
        ivory: {
          50: "#FCFBF9",
          100: "#FAF8F5",
          200: "#F3EFEA",
          300: "#EAE4DC",
          400: "#DDD6CC",
        },
        stone: {
          100: "#F0ECE6",
          200: "#E6E1DA",
          300: "#D6CEC4",
          400: "#C2B8AA",
          500: "#A39786",
        },
        bronze: {
          300: "#DEC28C",
          400: "#C5A059",
          500: "#B38E46",
          600: "#947230",
          700: "#755720",
        },
        sand: "#F4F0EA",
        "soft-grey": "#787571",
        "muted-dark": "#1A1A1A",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.22em",
        widest: "0.28em",
        ultra: "0.35em",
      },
      lineHeight: {
        tighter: "1.05",
        tight: "1.15",
        relaxed: "1.75",
        loose: "2",
      },
      animation: {
        "slow-pan": "slowPan 24s ease-in-out infinite alternate",
        "fade-in-up": "fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        slowPan: {
          "0%": { transform: "scale(1) translateY(0)" },
          "100%": { transform: "scale(1.08) translateY(-12px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
