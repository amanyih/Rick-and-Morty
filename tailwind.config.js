/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkGreen: "#147476",
        lightGreen: "#98F1DD",
        lightBlue: "#05ACBF",
        lighCharcoal: "#515D7B",
        bodyColor: "#262C3A",
        pagination: "#ACC8E5",
      },
      height: {
        bigger: "40rem",
      },
      width: {
        bigger: "120rem",
      },
      borderRadius: {
        half: "50%",
      },
      transitionDuration: "500ms",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
