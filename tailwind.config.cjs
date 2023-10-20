const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        text: "#040401",
        background: "#faf6e6",
        primary: "#d8c98d",
        secondary: "#ede6ca",
        accent: "#004225",
      },
      fontFamily: {
        sans: ["Karla Variable", ...defaultTheme.fontFamily.sans],
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
