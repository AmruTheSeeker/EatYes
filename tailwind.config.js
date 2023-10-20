/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      orange: "#ffd185",
      transparent: "transparent",
      primary: {
        50: "#fff3f1", //
        100: "#ffe4df",
        200: "#ffcec5",
        300: "#ffac9d",
        400: "#ff7b64",
        500: "#ff4d2e",
        600: "#ed3515",
        700: "#c8290d",
        800: "#a5250f",
        900: "#882514",
        950: "#ffd185",
      },
      secondary: {
        50: "#f7f7f8",
        100: "#efeef0",
        200: "#dbd9de",
        300: "#bab8c1",
        400: "#94919f",
        500: "#777384",
        600: "#615d6c",
        700: "#4f4c58",
        800: "#44414b",
        900: "#3b3941",
        950: "#ffd185",
      },
    },
    borderWidth: {
      1: "1px",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
