import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#d7dbe0",
          100: "#b2b9c2",
          200: "#9aa1ab",
          300: "#545d69",
          400: "#414a54",

          500: "#39424d",
          600: "#2b333d",
          700: "#202833",
          800: "#11171f",
          900: "#080d14",
        },
        light: "#f9fbfe",
        // light: "#000000",
        background: "#e1e5ea",
        primary: "#3678dd",
        secondary: {
          50: "#f0f6ff", // 97
          100: "#e3edfd", // 94
          200: "#cce0ff", // 90
          300: "#b3d1ff", // 85
          400: "#a1c2f7", // 80
          500: "#89b3f5", // 75
        },

        accent: {
          100: "#e8eafc",
          200: "#dcdffe",
          500: "#7840fd", //62
        },
      },
      keyframes: {
        likeBounce: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.3)",
          },
        },
      },
      animation: {
        likeBounce: "likeBounce 0.3s ease",
      },
    },
  },
  plugins: [],
};
