/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/**/*.{html,js}"],
  theme: {
    screens: {
      w1100: { max: "1100px" },
      w1040: { max: "1040px" },

      w1005: { max: "1005px" },
      w900: { max: "900px" },
      w850: { max: "850px" },
      w800: { max: "800px" },
      w375: { max: "375px" },
    },
    lineHeight: {
      base: "150%",
      header: "120%",
    },
    fontSize: {
      sm: "12px",
      tiny: "14px",
      base: "16px",
      lg: "28px",
      xl: "48px",
      "2xl": "60px",
    },
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
        bob: "bob 1s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
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
        wiggle: {
          "0%, 100%": { transform: "translateX(-7%) translateZ(0)" },
          "50%": { transform: "translateX(7%) translateZ(0)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(-7%) translateZ(0)" },
          "50%": { transform: "translateY(7%) translateZ(0)" },
        },
      },
      transitionProperty: {
        size: ["width", "height"],
      },
    },
  },
  plugins: [],
};
