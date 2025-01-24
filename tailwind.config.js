/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5C00",
        secondary: "#19191C",
        lightgray: "#C2C2C2",
        gray: "#828487",
        blue: "",
        red: "",
        green: "",
        yellow: "",
        lightblue: "",
        lightred: "",
        lightgreen: "",
        lightyellow: "",
        lightorange: "#FFF5EE",
        silver: "#F8F9FD",
      },
      boxShadow: {
        button: "0px 3px 6px 0px #1414140A",
        icons: "0px 4px 4px 0px #00000040",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
