/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A202C",
        accent: "#06B6D4",
        secondary: "#F5F7FA",
      }
    },
  },
  plugins: [],
}