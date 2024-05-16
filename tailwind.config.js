/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        catcream: '#ffeecc', // background color of all pages
        eggcream: '#ffebc3', // circle in hero section
        darkcream: '#9D6B09', // for on hvoer effect for link
        btncream: '#FFA800', // for button background color
        quotegrey: '#E1DCD1', // for testimonies section
        snackfacts: '#E89058', // for facts section
        factpill: '#F9CCAF' // for facts section
      },
      screens: {
        '1.5xl': '1440px',
      },
    },
  },
  plugins: [],
}
