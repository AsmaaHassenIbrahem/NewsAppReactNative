import { Localization } from "expo";
import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import { ar } from "./ar.json";
import { en } from "./en.json";
const resources = {
  ar,
  en,
};

i18n.use(reactI18nextModule).init({
  resources,
  lng: Localization.locale,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  cleanCode: true,
});

export default i18n;
