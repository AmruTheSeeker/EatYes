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
        50: "#fff3f1", // merah abu-abu
        100: "#ffe4df", // merah agak transparant
        200: "#ffcec5", // merah less transparant
        300: "#ffac9d", // lebih merah
        400: "#ff7b64", // lebih merah
        500: "#ff4d2e", // lebih merah
        600: "#ed3515", // lebih merah
        700: "#c8290d", // lebih merah
        800: "#a5250f", // lebih merah
        900: "#882514", // lebih merah
        950: "#ffd185", // Orange (warna utama BG EatYes)
      },
      secondary: {
        50: "#47525E", // Font : Black 1 (EatYes)
        100: "#343F4B", // Font : Black 2 (EatYes)
        200: "#FFFFFF", // Font : White (EatYes)
        300: "#D62829", // Font : Red 1 (EatYes)
        400: "#F95F62", // Font : Red 2 (EatYes)
        500: "#67C740", // Font : Green (EatYes)
        600: "#00A6FF", // Button : Blue (EatYes)
        700: "#4f4c58",
        800: "#44414b",
        900: "#3b3941",
        950: "#ffd185", // Orange (warna utama BG Eatyes)
      },
    },
    borderWidth: {
      1: "1px",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
