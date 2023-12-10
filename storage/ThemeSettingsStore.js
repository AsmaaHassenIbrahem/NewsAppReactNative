import { Strings } from "../utilities/String";
import UseAsyncStorage from "../hooks/UseAsyncStorage";

const {storedThemeValue, setThemeValue} = UseAsyncStorage(Strings.themeKet, value=false);

function ThemeSettingsStore(){

    const SetTheme = (value) => {
      setThemeValue(value)
    };
    
    return[storedThemeValue , SetTheme]
    }
  
export default ThemeSettingsStore