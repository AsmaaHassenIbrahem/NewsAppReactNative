import { Strings } from "../utilities/String";
import UseAsyncStorage from "../hooks/UseAsyncStorage";

const LanguageSettingsStore = () => {
  
  const [storedLanguageValue, setLanguageValue] = UseAsyncStorage(Strings.languageKey, value=false);

  const SetLanguage = (value) => {
    setLanguageValue(value)
  };

  return [storedLanguageValue , SetLanguage];

};

export default LanguageSettingsStore 

