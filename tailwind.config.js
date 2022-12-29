/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#F64E1F",
        "primary-orange-light": "rgba(246, 78, 31, 0.2);",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      screens: {
        largeTablet: { max: "1024px" },
        // => @media (max-width: 1024px) { ... }

        tablet: { max: "780px" },
        // => @media (max-width: 780px) { ... }

        smallTablet: { max: "600px" },
        // => @media (max-width: 600px) { ... }

        phone: { max: "500px" },
        // => @media (max-width: 500px) { ... }

        smallPhone: { max: "375px" },
        // => @media (max-width: 350px) { ... }
      },
    },
  },
  plugins: [],
};
