/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#147476",
        lightGreen: "#D0EACE",
        lightBlue: "#05ACBF",
        lighCharcoal: "#515D7B",
      },
      transitionDuration: "500ms",
    },
  },
  plugins: [],
};
