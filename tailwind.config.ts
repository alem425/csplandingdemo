import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        breathe: "breathe 2s infinite ease-in-out",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { borderWidth: "2px", opacity: "1" },
          "50%": { borderWidth: "8px", opacity: "0.5" },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-motion'), // Existing plugin
  ],
} satisfies Config;


