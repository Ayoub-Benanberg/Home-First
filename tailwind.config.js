/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Oswald'],
      },
      lineHeight: {
        '12': '3rem',  
        '14': '3.5rem',
        '15': '4rem'
      },
    },
  },
  plugins: [],
}

