import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enNavbar from "./locales/en/navbar.json";
import enHome from "./locales/en/home.json";
import enFooter from "./locales/en/footer.json";
import esNavbar from "./locales/es/navbar.json";
import esHome from "./locales/es/home.json";
import esFooter from "./locales/es/footer.json";

const resources = {
  en: {
    translation: {
      navbar: enNavbar,
      home: enHome,
      footer: enFooter,
    },
  },
  es: {
    translation: {
      navbar: esNavbar,
      home: esHome,
      footer: esFooter,
    },
  },
};

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "en";
  const storedLanguage = localStorage.getItem("language");
  return storedLanguage === "en" || storedLanguage === "es"
    ? storedLanguage
    : "en";
};

i18n.use(initReactI18next).init({
  resources,
  interpolation: {
    escapeValue: false,
  },
  lng: getInitialLanguage(),
  fallbackLng: "en",
  supportedLngs: ["en", "es"],
});

export default i18n;
