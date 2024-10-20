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
      colors: {
        background: "var(--color-background)",
        navBack: "var(--color-navBack)",
        text: "var(--color-text) ",
        primary: "var(--color-primary) ",
        iconary: "var(--color-iconary) ",
        info: "var(--color-info) ",
        warn: "var(--color-warn) ",
        error: "var(--color-error) ",
        transparent: "transparent",
        current: "currentColor",
        alert: "var(--color-alert)",
        white: "var(--color-white)",
        logo: "var(--color-logo)"
      }, 
      fontSize: {
        'sm': '0.9rem',
        'xxs': '0.65rem',
        'xs': '0.78rem',
        'lg': '2.5rem',
        'xl': '4rem',
        'xxl': '8rem',
        '2xl': '12rem', 
        'text-md':'1rem', 
        'display-lg': '1.2rem',
        'menu-lg' : '1.5rem'
      },
    },
  },
  plugins: [],
}