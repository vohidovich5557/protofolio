/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#666666",
        secondary: "#42446E",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1200px"
        }
      },
      screens: {
        md: "768px",
        lg: "992px",
      }
    },
  },
  plugins: [],
}