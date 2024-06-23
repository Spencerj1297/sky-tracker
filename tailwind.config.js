/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "outline": "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        "white-outline": "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      },
      colors: {
        logBlue: "#000125",
        navyBlue: "#022A3A",
        lightBlue: "#A9D1DF",
        gold: "#B08F0F"
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to bottom, #000000, #022A3A)',
      },
    },
  },

  plugins: [],
};
