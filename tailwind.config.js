const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./*.html"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // overwrite tailwind classes
    extend: {
      // add on to the tailwind classes
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        "light-blue": colors.sky,
      },
    },
  },
  plugins: [],
};
