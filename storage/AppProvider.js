import React, { createContext, useState, useContext, useEffect } from "react";
import { darkModeColors } from "../utilities/Color";
import { lightModeColors } from "../utilities/Color";
import { useTranslation } from "react-i18next";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language
  const [darkMode, setDarkMode] = useState(false); // Default mode
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      return prevLanguage === "en" ? "ar" : "en";
    });
  };
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    // !darkMode ? setTheme(lightModeColors ): setTheme(darkModeColors)
  };
  useEffect(() => {
    i18n.changeLanguage(language === "en" ? "ar" : "en");
  }, [language]);

  return (
    <AppContext.Provider
      value={{
        theme: !darkMode ? lightModeColors : darkModeColors, // here is problem with this property
        language,
        darkMode,
        toggleLanguage,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
