"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  themeKey: string;
  customThemeChanges: any;
  darkMode: boolean;
  setThemeKey: React.Dispatch<React.SetStateAction<string>>;
  setCustomThemeChanges: React.Dispatch<React.SetStateAction<any>>;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

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
  custom: "theme-custom",
};

const ThemeContext = createContext<ThemeContextType>({
  themeKey: "standard",
  customThemeChanges: {},
  darkMode: false,
  setThemeKey: () => {},
  setCustomThemeChanges: () => {},
  setDarkMode: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  // Initialize themeKey with local storage value or default to "standard"
  const [themeKey, setThemeKey] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [customThemeChanges, setCustomThemeChanges] = useState(null); // store custom theme changes

  // const applyCustomThemeChanges = (customChanges) => {
  //   const root = document.querySelector(".theme-custom");
  //   Object.entries(customChanges).forEach(([property, value]) => {
  //     root.style.setProperty(property, value);
  //   });
  // };
  const applyInlineStyles = (customChanges) => {
    for (const [property, value] of Object.entries(customChanges)) {
      document.documentElement.style.setProperty(property, value);
    }
  };

  const clearInlineStyles = (customChanges) => {
    if (customChanges) {
      // Check if customChanges is not null
      for (const property of Object.keys(customChanges)) {
        document.documentElement.style.removeProperty(property);
      }
    }
  };

  useEffect(() => {
    if (themeKey !== "custom") return; // Only change for the custom theme

    const root = document.querySelector(".theme-custom");

    let newBg, newBgLight, newBgDark, newText, newTextLight, newTextDark;
    if (darkMode) {
      newBg = "#111827";
      newBgLight = "#1f2937";
      newBgDark = "#0f1115";
      newText = "#F9FAFB";
      newTextLight = "#F9FAFB";
      newTextDark = "#F9FAFB";
    } else {
      // Reset to the default light theme values or whatever you want
      newBg = "#f4f4f4";
      newBgLight = "#fff";
      newBgDark = "#dadada";
      newText = "#111827";
      newTextLight = "#1a1a1a";
      newTextDark = "#000000";
    }

    // Update the state
    setCustomThemeChanges((prevState) => ({
      ...prevState,
      "--bg": newBg,
      "--bg-light": newBgLight,
      "--bg-dark": newBgDark,
      "--text": newText,
      "--text-light": newTextLight,
      "--text-dark": newTextDark,
    }));
  }, [darkMode, themeKey]);

  // Load the theme from localStorage once on component mount
  useEffect(() => {
    const storedThemeKey = localStorage.getItem("ng-theme");
    const storedCustomThemeChanges = localStorage.getItem("custom-theme");
    // Only update the state if the themeKey hasn't been loaded yet
    if (storedThemeKey && themeKey === null) {
      setThemeKey(storedThemeKey);
    } else if (themeKey === null) {
      // If there is no stored theme, set it to 'standard'
      setThemeKey("standard");
    }

    if (storedCustomThemeChanges && customThemeChanges === null) {
      try {
        const customChanges = JSON.parse(storedCustomThemeChanges);
        setCustomThemeChanges(customChanges);
        setDarkMode(() => {
          if (customChanges["--bg"] == "#111827") return true;
          else return false;
        });
      } catch (e) {
        console.error("Failed to parse custom theme changes:", e);
        // Handle the error as appropriate
      }
    } else if (customThemeChanges === null) {
      setCustomThemeChanges({});
    }
    if (themeKey === "custom" && customThemeChanges) {
      applyInlineStyles(customThemeChanges);
    } else {
      clearInlineStyles(customThemeChanges);
    }
  }, [themeKey, customThemeChanges]);

  // Update local storage when themeKey changes
  useEffect(() => {
    if (themeKey !== null) {
      localStorage.setItem("ng-theme", themeKey);
    }
    if (customThemeChanges !== null) {
      localStorage.setItem("custom-theme", JSON.stringify(customThemeChanges));
    }
  }, [themeKey, customThemeChanges]);
  console.log(themes[themeKey]);
  return (
    <ThemeContext.Provider
      value={{
        themeKey,
        setThemeKey,
        darkMode,
        customThemeChanges,
        setCustomThemeChanges,
        setDarkMode,
      }}
    >
      <div className={themes[themeKey]}>{children}</div>
    </ThemeContext.Provider>
  );
};
