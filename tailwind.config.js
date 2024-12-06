/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bg_card: "#2D2D2D",
        primary: "#FFA205",
        secondary: "#7D7D7D",
        card: "#AAAAAA",
        // secondary: '#ffffff4d',
        // bg_card: '#66666626',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // Adding custom plugin for no-scrollbar utility
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          /* Hide scrollbar in IE and Edge */
          "-ms-overflow-style": "none",
          /* Hide scrollbar in Firefox */
          "scrollbar-width": "none",
          /* Hide scrollbar in WebKit browsers (Chrome, Safari) */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};

