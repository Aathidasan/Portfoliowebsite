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
        background: "#110720",
        surface: {
          50: "#1E0B36",
          100: "#1A0A30",
          200: "#140826",
          300: "#110720",
        },
        purple: {
          400: "#C084FC",
          500: "#A855F7",
          600: "#9333EA",
          700: "#7E22CE",
          800: "#6B21A8",
          900: "#581C87",
          950: "#3B0764",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'purple-glow': '0 0 35px -5px rgba(168, 85, 247, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
