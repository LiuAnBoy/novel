import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Backend from 'i18next-http-backend';

import en from "./en";
import zh from "./zh";

const i18nInstance = i18n.createInstance();

const resources = {
  en,
  zh,
};

i18nInstance.use(initReactI18next).init({
  resources,
  lng: "zh",
});

export default i18nInstance;
