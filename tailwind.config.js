/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#CDBAA6', // beige (accent)
          light: '#D9D9D9',
          dark: '#595959'
        },
        ink: {
          DEFAULT: '#262626', // black variant
          soft: '#1a1a1a'
        },
        bg: {
          dark: '#030404',
          light: '#BFBFBF'
        },
        bx: {
          dark: '#595959',
          light: '#BFBFBF'
        }
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
