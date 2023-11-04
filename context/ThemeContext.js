import { createContext, useContext, useState } from "react";

const themes = {
  standard: "theme-standard",
  sunset: "theme-sunset",
  lime: "theme-lime",
  cosmo: "theme-cosmo",
  split: "theme-split",
  "dark-standard": "theme-dark-standard",
  "dark-sunset": "theme-dark-sunset",
  "dark-lime": "theme-dark-lime",
  "dark-cosmo": "theme-dark-cosmo",
  "dark-split": "theme-dark-split",
};

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [themeKey, setThemeKey] = useState("standard"); // default theme

  return (
    <ThemeContext.Provider value={{ themeKey, setThemeKey }}>
      <div className={themes[themeKey]}>{children}</div>
    </ThemeContext.Provider>
  );
};
