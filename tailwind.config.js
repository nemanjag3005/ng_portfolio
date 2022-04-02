module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        cursor: "cursor .6s linear infinite alternate",
      },
      minHeight: {
        "4/5": "80vh",
        subnav: "73.5vh",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "primary-dark": "#0C3BAA",
        "primary-dark-light": "#1973D1",
        "primary-darker": "#010280",
      },
      screens: {
        xs: "23em",
        xxs: "20em",
      },
      backgroundImage: {
        nem: "linear-gradient(to bottom, rgba(22, 22, 27, 0.5), rgba(41,41,52,0.4)), url('/ng.jpeg')",
      },
    },
  },
  plugins: [],
};
