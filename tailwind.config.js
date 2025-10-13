/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#CDBAA6', // beige (accent)
          light: '#E9DFCf',
          dark: '#A88970'
        },
        ink: {
          DEFAULT: '#0b0b0b', // black variant
          soft: '#1a1a1a'
        },
        bg: {
          dark: '#080808',
          light: '#FBFBF9'
        }
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
