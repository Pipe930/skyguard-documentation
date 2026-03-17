import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enNavbar from "./locales/en/navbar.json";
import enHome from "./locales/en/home.json";
import enFooter from "./locales/en/footer.json";
import enSidebar from "./locales/en/sidebar.json";
import enDocsPageNavigation from "./locales/en/docsPageNavigation.json";
import enIntroduction from "./locales/en/introduction.json";
import enGetStarted from "./locales/en/getStarted.json";
import enInstallation from "./locales/en/installation.json";
import enRouting from "./locales/en/routing.json";
import enMiddlewares from "./locales/en/middlewares.json";
import enValidation from "./locales/en/validation.json";
import enRequestResponse from "./locales/en/requestResponse.json";
import enExceptions from "./locales/en/exceptions.json";
import enAuthentication from "./locales/en/authentication.json";
import enEncryptionHashing from "./locales/en/encryptionHashing.json";
import enCors from "./locales/en/cors.json";
import enCsrfProtection from "./locales/en/csrfProtection.json";
import enRateLimiting from "./locales/en/rateLimiting.json";
import enConfiguration from "./locales/en/configuration.json";
import enEngineTemplates from "./locales/en/engineTemplates.json";
import enSearchModal from "./locales/en/searchModal.json";
import enTableOfContents from "./locales/en/tableOfContents.json";
import esNavbar from "./locales/es/navbar.json";
import esHome from "./locales/es/home.json";
import esFooter from "./locales/es/footer.json";
import esSidebar from "./locales/es/sidebar.json";
import esDocsPageNavigation from "./locales/es/docsPageNavigation.json";
import esIntroduction from "./locales/es/introduction.json";
import esGetStarted from "./locales/es/getStarted.json";
import esInstallation from "./locales/es/installation.json";
import esRouting from "./locales/es/routing.json";
import esMiddlewares from "./locales/es/middlewares.json";
import esValidation from "./locales/es/validation.json";
import esRequestResponse from "./locales/es/requestResponse.json";
import esExceptions from "./locales/es/exceptions.json";
import esAuthentication from "./locales/es/authentication.json";
import esEncryptionHashing from "./locales/es/encryptionHashing.json";
import esCors from "./locales/es/cors.json";
import esCsrfProtection from "./locales/es/csrfProtection.json";
import esRateLimiting from "./locales/es/rateLimiting.json";
import esConfiguration from "./locales/es/configuration.json";
import esEngineTemplates from "./locales/es/engineTemplates.json";
import esSearchModal from "./locales/es/searchModal.json";
import esTableOfContents from "./locales/es/tableOfContents.json";

const resources = {
  en: {
    translation: {
      navbar: enNavbar,
      home: enHome,
      footer: enFooter,
      sidebar: enSidebar,
      docsPageNavigation: enDocsPageNavigation,
      introduction: enIntroduction,
      getStarted: enGetStarted,
      installation: enInstallation,
      routing: enRouting,
      middlewares: enMiddlewares,
      validation: enValidation,
      requestResponse: enRequestResponse,
      exceptions: enExceptions,
      authentication: enAuthentication,
      encryptionHashing: enEncryptionHashing,
      cors: enCors,
      csrfProtection: enCsrfProtection,
      rateLimiting: enRateLimiting,
      configuration: enConfiguration,
      engineTemplates: enEngineTemplates,
      searchModal: enSearchModal,
      tableOfContents: enTableOfContents,
    },
  },
  es: {
    translation: {
      navbar: esNavbar,
      home: esHome,
      footer: esFooter,
      sidebar: esSidebar,
      docsPageNavigation: esDocsPageNavigation,
      introduction: esIntroduction,
      getStarted: esGetStarted,
      installation: esInstallation,
      routing: esRouting,
      middlewares: esMiddlewares,
      validation: esValidation,
      requestResponse: esRequestResponse,
      exceptions: esExceptions,
      authentication: esAuthentication,
      encryptionHashing: esEncryptionHashing,
      cors: esCors,
      csrfProtection: esCsrfProtection,
      rateLimiting: esRateLimiting,
      configuration: esConfiguration,
      engineTemplates: esEngineTemplates,
      searchModal: esSearchModal,
      tableOfContents: esTableOfContents,
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
