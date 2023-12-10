import { Strings } from "../utilities/String";
import UseAsyncStorage from "../hooks/UseAsyncStorage";

const {storedLanguageValue, setLanguageValue} = UseAsyncStorage(Strings.languageKey, value);

function LanguageSettingsStore(){

const SetLanguage = (value) => {
  setLanguageValue(value)
};
return[storedLanguageValue , SetLanguage]
}


export default LanguageSettingsStore 

