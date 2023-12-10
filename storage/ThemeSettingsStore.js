import { Strings } from "../utilities/String";
import UseAsyncStorage from "../hooks/UseAsyncStorage";

const ThemeSettingsStore = () => {
    const [storedThemeValue, setThemeValue] = UseAsyncStorage(Strings.themeKet, value=false);

    const SetTheme = (value) => {
      setThemeValue(value)
    };
    
    return [storedThemeValue , SetTheme];
    
    };
  
export default ThemeSettingsStore