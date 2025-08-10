/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // LIGHT THEME COLORS
        text: "#220c0d",
        background: "#f4e1e4",
        primary: "#5c2326",
        secondary: "#d2c389",
        accent: "#afb342",

        // DARK THEME COLORS (prefixed with dark-)
        "dark-text": "#f2dcdd",
        "dark-background": "#1d0b0d",
        "dark-primary": "#dca2a5",
        "dark-secondary": "#77682d",
        "dark-accent": "#b8bc4c",
      },
    },
  },
  plugins: [],
};
