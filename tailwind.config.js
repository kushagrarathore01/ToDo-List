/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "480px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1300px",
      "3xl": "1670px",
      "4xl": "2000px",
      "5xl": "2400px",
    },
    extend: {},
  },
  plugins: [],
};
