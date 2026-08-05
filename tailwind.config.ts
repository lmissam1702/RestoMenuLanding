import type { Config } from "tailwindcss";

const config: Config = {
  // next-themes toggles the `dark` class on <html>
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Brand gold — switches value per theme via CSS variables.
        // Defined as rgb channels so opacity modifiers like bg-gold/10 work.
        gold: "rgb(var(--gold-rgb) / <alpha-value>)",
        "gold-ink": "var(--gold-ink)",
        heading: "var(--text-heading)",
        body: "var(--text-body)",
        faint: "var(--text-faint)",
        line: "var(--line)",
        surface: "var(--surface)",
      },
      fontFamily: {
        // Outfit is loaded via next/font in app/[locale]/layout.tsx as --font-outfit
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        // Arabic — applied automatically via html[lang="ar"] (see globals.css)
        arabic: ["var(--font-arabic)", "Noto Naskh Arabic", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;