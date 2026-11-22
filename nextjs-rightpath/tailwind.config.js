/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#005134",
        "primary-container": "#176b48",
        "primary-fixed": "#a4f3c7",
        "primary-fixed-dim": "#88d7ac",
        "secondary": "#153f30",
        "secondary-container": "#bdead4",
        "tertiary": "#006c3f",
        "accent-sprout": "#b7d9a7",
        "accent-sage": "#80b98e",
        "surface": "#ecfef1",
        "surface-pale": "#f6f8f5",
        "surface-mint": "#eaf4eb",
        "surface-container-lowest": "#ffffff",
        "border-subtle": "#e6eee8",
        "on-surface": "#101f17",
        "on-surface-variant": "#3f4942",
        "text-muted": "#64746b",
        "inverse-surface": "#25342c"
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
