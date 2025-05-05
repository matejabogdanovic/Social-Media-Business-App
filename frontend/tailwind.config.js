import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#090b0d",
        light: "#f7fefe",
        primary: "#16d3eb",
        secondary: "#89a9f5",
        accent: "#4c59ef",
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
