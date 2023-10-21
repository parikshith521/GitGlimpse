/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e8e6e3',
        secondary: '#00ff44',
      },
      fontFamily: {
        Inter: ['Inter','sans-serif'],
        Manrope: ['Manrope','sans-serif'],
      }
    },
  },
  plugins: [],
}

