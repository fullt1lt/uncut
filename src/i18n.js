import i18n from "i18next";
import Cookies from "js-cookie";

import { initReactI18next } from "react-i18next";

import headerEN from "./locales/en/header.json";
import headerUA from "./locales/ua/header.json";
import valuesEN from "./locales/en/values.json";
import valuesUA from "./locales/ua/values.json";
import servicesEN from "./locales/en/services.json";
import servicesUA from "./locales/ua/services.json";
import activityEN from "./locales/en/activity.json";
import activityUA from "./locales/ua/activity.json";

const savedLanguage = Cookies.get("selectedLanguage") || "ua";

const resources = {
  en: {
    header: headerEN,
    values: valuesEN,
    services: servicesEN,
    activity: activityEN,
  },
  ua: {
    header: headerUA,
    values: valuesUA,
    services: servicesUA,
    activity: activityUA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  ns: ["header", "values", "services", "activity"],
  defaultNS: "header",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
