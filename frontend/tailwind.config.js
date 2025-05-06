import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#edf1f8", // 95
          600: "#23395c", // 25
          700: "#152237", // 15
          800: "#0e1725", // 10
          900: "#080d14", // 5
        },
        light: "#f9fbfe",
        primary: "#3678dd",
        secondary: {
          50: "#f0f6ff", // 97
          100: "#e3edfd", // 94
          200: "#cce0ff", // 90
          300: "#b3d1ff", // 85
          400: "#a1c2f7", // 80
          500: "#89b3f5", // 75
        },

        accent: "#7840fd",
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
