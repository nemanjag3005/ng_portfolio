module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {
        '4/5' : '80vh',
        'subnav' : '73.5vh'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#0C3BAA',
         'primary-dark-light': '#1973D1',
         'primary-darker': '#010280'
      },
      screens: {
        'xs': '23em',
        'xxs': '20em'
      }
      
    },
  },
  plugins: [],
}
