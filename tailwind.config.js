/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        'webcom-gradient': 'linear-gradient(to right, #FF7C00, #FF4600,  #FF7C00)', // Custom gradient
      },
      fontFamily:{
        iranyekan: ['iranyekan', 'sans-serif'],
        iranyekanBold: ['iranyekanBold', 'sans-serif'],
        iranyekanLight: ['iranyekanLight', 'sans-serif']
      },
    },
  },
  plugins: [],
}