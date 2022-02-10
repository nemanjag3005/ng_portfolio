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
        'primary-dark': '#db2777',
         'primary-dark-light': '#ed94bc',
         'primary-darker': '#70133c'
      },
      screens: {
        'xs': '23em',
        'xxs': '20em'
      }
      
    },
  },
  plugins: [],
}
