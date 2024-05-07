/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "#171a21",
        "light-blue": "#66c0f4",
        "dark-blue": "#1b2838",
        "dark-pale-blue": "#2a475e",
        "light-pale-blue": "#c7d5e0"
      }
    },
  },
  plugins: [],
})