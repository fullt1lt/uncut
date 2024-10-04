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
import teamEN from "./locales/en/team.json";
import teamUA from "./locales/ua/team.json";
import footerEN from "./locales/en/footer.json";
import footerUA from "./locales/ua/footer.json";

const savedLanguage = Cookies.get("selectedLanguage") || "ua";

const resources = {
  en: {
    header: headerEN,
    values: valuesEN,
    services: servicesEN,
    activity: activityEN,
    team: teamEN,
    footer: footerEN,
  },
  ua: {
    header: headerUA,
    values: valuesUA,
    services: servicesUA,
    activity: activityUA,
    team: teamUA,
    footer: footerUA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  ns: ["header", "values", "services", "activity", "team","footer"],
  defaultNS: "header",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
