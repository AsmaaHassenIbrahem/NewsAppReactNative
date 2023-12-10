import { Strings } from "../utilities/String";
import UseAsyncStorage from "../hooks/UseAsyncStorage";

const LanguageSettingsStore = () => {
  
  const {storedValue, setvalue} = UseAsyncStorage(Strings.languageKey, value="false");

  const SetLanguage = (value) => {
    setvalue(value)
  };

  return {storedValue , SetLanguage};

};

export default LanguageSettingsStore 

