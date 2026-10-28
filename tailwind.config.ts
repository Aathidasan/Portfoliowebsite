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
        background: "#050508",
        surface: {
          50: "#181826",
          100: "#12121E",
          200: "#0C0C14",
          300: "#050508",
        },
        higgs: {
          cyan: "#06B6D4",
          violet: "#8B5CF6",
          magenta: "#EC4899",
          neon: "#38BDF8",
          dark: "#050508",
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
      boxShadow: {
        'higgs-glow': '0 0 50px -10px rgba(139, 92, 246, 0.35), 0 0 20px -5px rgba(6, 182, 212, 0.25)',
        'higgs-card': '0 8px 32px 0 rgba(0, 0, 0, 0.7), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'higgs-neon': '0 0 20px rgba(6, 182, 212, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
