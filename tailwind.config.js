/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/**/*.{html,js}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      green: "#1B5B31",
      beige: "#DCC1AB",
      black: "#111111",
      grey: "#F5F0EC",
      white: "#FFFFFF",
    },
    extend: {
      animation: {
        slideDown: "slideDown 0.2s ease-in-out",
        expandLeft: "expandLeft 0.3s ease-in",
      },
      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateY(-10%)",
            opacity: 0,
          },

          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        expandLeft: {
          "0%": {
            transform: "scaleX(0.2)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
      },
      transitionProperty: {
        size: ["width", "height"],
      },
    },
  },
  plugins: [],
};
