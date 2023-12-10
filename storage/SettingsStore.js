import { save } from "./Storage";
import { get } from "./Storage";
import { Strings } from "../utilities/String";
import UseAsyncStorage from "../hooks/UseAsyncStorage";
import { changeLanguage } from "i18next";

const {storedLanguageValue, setLanguageValue} = UseAsyncStorage(Strings.languageKey, value);

const {storedThemeValue, setThemeValue} = UseAsyncStorage(Strings.themeKet, value);

function LanguageSettingsStore(){

const ChangeLanguage = (value) => {
  setLanguageValue(value)
};

return[storedLanguageValue , changeLanguage]
}

function storedThemeValue(){

  const ChangeTheme = (value) => {
    setThemeValue(value)
  };
  
  return[storedThemeValue , ChangeTheme]
  }

export default {LanguageSettingsStore , storedThemeValue}

