import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import headerEN from "./locales/en/header.json";
import headerUA from "./locales/ua/header.json";

const resources = {
  en: {
    header: headerEN,
  },
  ua: {
    header: headerUA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ua",
  ns: ["header"],
  defaultNS: "header",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
