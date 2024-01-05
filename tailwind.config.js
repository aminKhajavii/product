/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5A6D57",
        secondary: "#ed8900",
        fontItem: "#404040",
      },
    },
  },
  plugins: [],
};
