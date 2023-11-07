/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    function ({ addVariant, e }) {
      addVariant("sunset", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.sunset .${e(`sunset${separator}${className}`)}`;
        });
      });
      addVariant("light-green", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.light-green .${e(`light-green${separator}${className}`)}`;
        });
      });
      addVariant("standard", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.standard .${e(`standard${separator}${className}`)}`;
        });
      });
      addVariant("light-orange", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.light-orange .${e(`light-orange${separator}${className}`)}`;
        });
      });
      addVariant("light-sky", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.light-sky .${e(`light-sky${separator}${className}`)}`;
        });
      });
      addVariant("dark-rose", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark-rose .${e(`dark-rose${separator}${className}`)}`;
        });
      });
      addVariant("dark-magenta", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark-magenta .${e(`dark-magenta${separator}${className}`)}`;
        });
      });
      addVariant("dark-green", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark-green .${e(`dark-green${separator}${className}`)}`;
        });
      });
      addVariant("dark-orange", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark-orange .${e(`dark-orange${separator}${className}`)}`;
        });
      });
      addVariant("dark-red", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark-red .${e(`dark-red${separator}${className}`)}`;
        });
      });
    },
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
        "standard-primary": "#2563eb",
        "standard-light": "#9ab7f6",
        "standard-dark": "#0c3284",
        "standard-secondary": "#db2777",
        "standard-secondary-light": "#ed94bc",
        "standard-secondary-dark": "#70133c",
        "standard-text": "#333",
        "standard-text-light": "#4d4d4d",
        "standard-text-dark": "#1a1a1a",
        "standard-bg": "#f4f4f4",
        "sunset-primary": "#c05299",
        "sunset-light": "#e2afd0",
        "sunset-dark": "#6b2753",
        "sunset-secondary": "#fbbf24",
        "sunset-secondary-light": "#fde4a1",
        "sunset-secondary-dark": "#9d7203",
        "sunset-text": "#2f0c46",
        "sunset-text-light": "#4c1371",
        "sunset-text-dark": "#12051a",
        "sunset-bg": "#fcedf2",
        "lime-text": "#333",
        "lime-text-light": "#4d4d4d",
        "lime-text-dark": "#1a1a1a",
        "lime-bg": "#f4f4f4",
        "lime-primary": "#208b3a",
        "lime-light": "#53d773",
        "lime-dark": "#08230f",
        "lime-secondary": "#086375",
        "lime-secondary-light": "#10c8ec",
        "lime-secondary-dark": "#000",
        "cosmo-text": "#000",
        "cosmo-text-light": "#1a1a1a",
        "cosmo-text-dark": "#000",
        "cosmo-bg": "#f4f4f4",
        "cosmo-primary": "#df8200",
        "cosmo-light": "#ffcb84",
        "cosmo-dark": "#844c00",
        "cosmo-secondary": "#ec4e20",
        "cosmo-secondary-light": "#f6ab95",
        "cosmo-secondary-dark": "#81260b",
        "split-text": "#000",
        "split-text-light": "#1a1a1a",
        "split-text-dark": "#000",
        "split-bg": "#f4f4f4",
        "split-primary": "#564787",
        "split-light": "#988bc2",
        "split-dark": "#211b33",
        "split-secondary": "#f75590",
        "split-secondary-light": "#fdcfdf",
        "split-secondary-dark": "#c3094d",
        "dark-standard-text": "#f4f4f4",
        "dark-standard-text-light": "#fff",
        "dark-standard-text-dark": "#dadada",
        "dark-standard-bg": "#1f2937",
        "dark-standard-primary": "#db2777",
        "dark-standard-light": "#ed94bc",
        "dark-standard-dark": "#70133c",
        "dark-standard-secondary": "#2563eb",
        "dark-standard-secondary-light": "#9ab7f6",
        "dark-standard-secondary-dark": "#0c3284",
        "dark-sunset-text": "#ea698b",
        "dark-sunset-text-light": "#f096ae",
        "dark-sunset-text-dark": "#e43c68",
        "dark-sunset-bg": "#2f0c46",
        "dark-sunset-primary": "#c05299",
        "dark-sunset-light": "#e2afd0",
        "dark-sunset-dark": "#6b2753",
        "dark-sunset-secondary": "#fbbf24",
        "dark-sunset-secondary-light": "#fde4a1",
        "dark-sunset-secondary-dark": "#9d7203",
        "dark-lime-text": "#f4f4f4",
        "dark-lime-text-light": "#fff",
        "dark-lime-text-dark": "#dadada",
        "dark-lime-bg": "#1f2937",
        "dark-lime-primary": "#1fc180",
        "dark-lime-light": "#76e9bb",
        "dark-lime-dark": "#0d5337",
        "dark-lime-secondary": "#086375",
        "dark-lime-secondary-light": "#10c8ec",
        "dark-lime-secondary-dark": "#000",
        "dark-cosmo-text": "#f4f4f4",
        "dark-cosmo-text-light": "#fff",
        "dark-cosmo-text-dark": "#dadada",
        "dark-cosmo-bg": "#001b29",
        "dark-cosmo-primary": "#ff9505",
        "dark-cosmo-light": "#ffcb84",
        "dark-cosmo-dark": "#844c00",
        "dark-cosmo-secondary": "#ec4e20",
        "dark-cosmo-secondary-light": "#f6ab95",
        "dark-cosmo-secondary-dark": "#81260b",
        "dark-split-text": "#f4f4f4",
        "dark-split-text-light": "#fff",
        "dark-split-text-dark": "#dadada",
        "dark-split-bg": "#2b2343",
        "dark-split-primary": "#f75590",
        "dark-split-light": "#fdcfdf",
        "dark-split-dark": "#c3094d",
        "dark-split-secondary": "#564787",
        "dark-split-secondary-light": "#988bc2",
        "dark-split-secondary-dark": "#211b33",
        primary: "var(--primary)",
        light: "var(--light)",
        dark: "var(--dark)",
        secondary: "var(--secondary)",
        secondaryLight: "var(--secondary-light)",
        secondaryDark: "var(--secondary-dark)",
        textPrimary: "var(--text)",
        textLight: "var(--text-light)",
        textDark: "var(--text-dark)",
        bgColor: "var(--bg)",
        bgLight: "var(--bg-light)",
        bgDark: "var(--bg-dark)",
        colorAccent1: "var(--color-accent-1)",
        colorAccent1Light: "var(--color-accent-1-light)",
        colorAccent1Dark: "var(--color-accent-1-dark)",
        colorAccent2: "var(--color-accent-2)",
        colorAccent2Light: "var(--color-accent-2-light)",
        colorAccent2Dark: "var(--color-accent-2-dark)",
        colorAccent3: "var(--color-accent-3)",
        colorAccent3Light: "var(--color-accent-3-light)",
        colorAccent3Dark: "var(--color-accent-3-dark)",
        colorAccent4: "var(--color-accent-4)",
        colorAccent4Light: "var(--color-accent-4-light)",
        colorAccent4Dark: "var(--color-accent-4-dark)",
      },
      screens: {
        xs: "23em",
        xxs: "20em",
      },
      boxShadow: {
        picked: "0 0 0 15px inset",
      },
      backgroundImage: {
        nem: "linear-gradient(to bottom, rgba(22, 22, 27, 0.5), rgba(41,41,52,0.4)), url('/ng.jpeg')",
        speaker: "url('/speaker.jpeg')",
        victory: "url('/victory.jpeg')",
      },
    },
  },
  plugins: [],
};
