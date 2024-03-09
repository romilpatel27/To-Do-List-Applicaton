import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: require("./locales/en/translation.json"),
  },
  fr: {
    translation: require("./locales/fr/translation.json"),
  }
  // ... other languages if needed
};

i18n
  .use(initReactI18next) // Initializes i18next for React
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false, // Prevent escaping of HTML entities
    },
  });

export default i18n;