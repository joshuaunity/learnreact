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
        btncream: '#FFA800' // for button background color
      },
      padding: {
        '68': '360px',
        '360px': '360px',
        '400px': '400px',
        '440px': '440px',
      }
    },
  },
  plugins: [],
}
