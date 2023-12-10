import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {en} from "./translations/en.json"
import {ar} from "./translations/ar.json"

const languageResources = {
  en: { translation: en },
  ar: { translation: ar },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3', //To make it work for Android devices, add this line.
  resources : languageResources,
  //language to use if translations in user language are not available
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18next;