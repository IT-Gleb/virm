import autoprefixer from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{html,ts,js,vue}",
    "./src/Pages/**/*.{ts,js,vue,html}",
    "./src/App.vue",
    "./src/main.ts",
  ],
  theme: {
    fontFamily: {
      nitro: [
        "Nitro",
        "Nitro Light",
        "Nitro Bold",
        "Nitro SemiBold",
        "Nitro Thin",
      ],
      nextArt: ["NextArt"],
    },
    extend: {
      colors: {
        btnBlack: "#1A3E3E",
        btnText: "#FDFDFD",
        aRefColor: "#F2BE22",
        bgCol1: "#18121E",
        backSection: "#F3F5F4",
      },
    },
  },
  plugins: [autoprefixer],
};
