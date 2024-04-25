/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        accent: "#e50914",
        primary: "#141414",
      },
    },
  },
  plugins: [],
}

