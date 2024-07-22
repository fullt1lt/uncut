import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import headerEN from "./locales/en/header.json";
import headerUA from "./locales/ua/header.json";
import valuesEN from "./locales/en/values.json";
import valuesUA from "./locales/ua/values.json";

const resources = {
  en: {
    header: headerEN,
    values: valuesEN,
  },
  ua: {
    header: headerUA,
    values: valuesUA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ua",
  ns: ["header", "values"],
  defaultNS: "header",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
