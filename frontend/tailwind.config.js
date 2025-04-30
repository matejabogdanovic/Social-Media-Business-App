import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
