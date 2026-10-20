import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: {
          50: "#27272A",
          100: "#18181B",
          200: "#09090B",
          300: "#000000",
        },
        studio: {
          bg: "#000000",
          card: "#09090B",
          elevated: "#121214",
          border: "rgba(255, 255, 255, 0.08)",
          "border-hover": "rgba(255, 255, 255, 0.2)",
          subtle: "#71717A",
          muted: "#A1A1AA",
          text: "#FAFAFA",
        },
        primary: {
          DEFAULT: "#FFFFFF",
          hover: "#E4E4E7",
          dark: "#A1A1AA",
        },
        accent: {
          DEFAULT: "#00F0FF",
          subtle: "rgba(0, 240, 255, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-fira-code)", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "laser": "laser 3s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { opacity: "0.3" },
          "100%": { opacity: "0.7" },
        },
        laser: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      backgroundImage: {
        "grid-matrix": "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
        "hairline-gradient": "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)",
        "studio-glow": "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.06) 0%, transparent 70%)",
      },
      boxShadow: {
        "studio": "0 0 0 1px rgba(255, 255, 255, 0.08), 0 8px 24px -4px rgba(0, 0, 0, 0.8)",
        "studio-hover": "0 0 0 1px rgba(255, 255, 255, 0.2), 0 16px 36px -4px rgba(0, 0, 0, 0.9)",
        "studio-highlight": "0 0 30px -5px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
