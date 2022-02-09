module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#db2777',
         'primary-dark-light': '#ed94bc',
         'primary-darker': '#70133c'
      },
      
    },
  },
  plugins: [],
}
