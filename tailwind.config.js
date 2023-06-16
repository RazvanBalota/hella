/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBG: "url('/src/assets/background.jpg')",
      },
      fontFamily: {
        opensans: "Open Sans",
        montserrat: "Montserrat",
      },
      textColor: {
        primary: "#3c3950",
        secondary: "#5f727f",
        accent: "#0024d3",
      },
      colors: {
        primary: "#3c3950",
        secondary: "#5f727f",
        accent: "#0024d3",
      },
    },
  },
  plugins: [],
};
