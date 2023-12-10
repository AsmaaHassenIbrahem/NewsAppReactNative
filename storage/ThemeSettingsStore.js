import { Strings } from "../utilities/String";
import UseAsyncStorage from "../hooks/UseAsyncStorage";

const ThemeSettingsStore = () => {
    const {storedValue, setvalue} = UseAsyncStorage(Strings.themeKet, value=false);

    const SetTheme = (value) => {
        setvalue(value)
    };
    
    return {storedValue , SetTheme};

    };
  
export default ThemeSettingsStore