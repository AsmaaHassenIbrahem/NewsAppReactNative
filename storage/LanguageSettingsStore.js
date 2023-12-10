import { Strings } from "../utilities/String";
import UseAsyncStorage from "../hooks/UseAsyncStorage";
import { changeLanguage } from "i18next";

const {storedLanguageValue, setLanguageValue} = UseAsyncStorage(Strings.languageKey, value);

function LanguageSettingsStore(){

const ChangeLanguage = (value) => {
  setLanguageValue(value)
};
return[storedLanguageValue , changeLanguage]
}


export default LanguageSettingsStore 

