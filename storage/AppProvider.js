import React, { createContext, useState, useContext } from "react";
import { darkModeColors } from "../utilities/Color";
import { lightModeColors } from "../utilities/Color";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language
  const [darkMode, setDarkMode] = useState(false); // Default mode
//   const [theme, setTheme] = useState(lightModeColors); // Default mode

  const toggleLanguage = () =>
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
  const toggleDarkMode = () => { 
    setDarkMode((prevMode) => !prevMode);
    // !darkMode ? setTheme(lightModeColors ): setTheme(darkModeColors)

}

  return (
    <AppContext.Provider
      value={{
       theme: !darkMode ? lightModeColors : darkModeColors, // here is problem with this property 
        language,
        darkMode,
        toggleLanguage,
        toggleDarkMode,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);