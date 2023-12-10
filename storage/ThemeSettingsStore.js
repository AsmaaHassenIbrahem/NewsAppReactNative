import { Strings } from "../utilities/String";
import UseAsyncStorage from "../hooks/UseAsyncStorage";
import { changeLanguage } from "i18next";

const {storedThemeValue, setThemeValue} = UseAsyncStorage(Strings.themeKet, value);

function ThemeSettingsStore(){

    const ChangeTheme = (value) => {
      setThemeValue(value)
    };
    
    return[storedThemeValue , ChangeTheme]
    }
  
export default ThemeSettingsStore