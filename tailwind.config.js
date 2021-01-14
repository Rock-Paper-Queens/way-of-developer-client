// const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      grey: {
        primary: "#F0F3F5",
        line: "#DDDEE0",
        text: "#8F8F8F",
        "text-light": "#BCBCBC",
        "text-dark": "#606060",
        light: "#FAFAFB",
      },
      warn: "#E65B5B",
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        none: "0",
        sm: ".5rem",
        lg: "1rem",
        full: "50%",
      },
    },
  },
};
