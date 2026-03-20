import type { TFunction } from "i18next";

export interface SearchEntry {
  id: string;
  title: string;
  route: string;
  section?: string;
  content: string;
  searchableText: string;
}

type SearchEntryDefinition = {
  id: string;
  titleKey: string;
  route: string;
  contentKey: string;
  sectionKey?: string;
};

const stripHtmlTags = (value: string) => value.replace(/<[^>]*>/g, " ");

const decodeHtmlEntities = (value: string) =>
  value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'");

const sanitizeSearchText = (value: string) =>
  decodeHtmlEntities(stripHtmlTags(value)).replace(/\s+/g, " ").trim();

const normalizeText = (value: string) =>
  sanitizeSearchText(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const createEntry = (
  id: string,
  title: string,
  route: string,
  content: string,
  section?: string,
): SearchEntry => {
  const sanitizedTitle = sanitizeSearchText(title);
  const sanitizedSection = section ? sanitizeSearchText(section) : undefined;
  const sanitizedContent = sanitizeSearchText(content);

  return {
    id,
    title: sanitizedTitle,
    route,
    section: sanitizedSection,
    content: sanitizedContent,
    searchableText: normalizeText(`${sanitizedTitle} ${sanitizedSection ?? ""} ${sanitizedContent}`),
  };
};

const GETTING_STARTED_SECTION = "sidebar.sections.gettingStarted.title";
const BASICS_SECTION = "sidebar.sections.basics.title";
const CONFIG_SECTION = "sidebar.sections.configuration.title";
const SECURITY_SECTION = "sidebar.sections.security.title";

const searchDefinitions: SearchEntryDefinition[] = [
  { id: "intro-main", titleKey: "introduction.page.title", route: "/docs/introduction", contentKey: "introduction.page.lead", sectionKey: GETTING_STARTED_SECTION },
  { id: "intro-what-is", titleKey: "introduction.whatIs.title", route: "/docs/introduction#what-is-skyguard-js", contentKey: "introduction.whatIs.paragraph2", sectionKey: GETTING_STARTED_SECTION },
  { id: "intro-advantages", titleKey: "introduction.comparison.title", route: "/docs/introduction#advantages", contentKey: "introduction.callout.suffix", sectionKey: GETTING_STARTED_SECTION },

  { id: "prerequisites", titleKey: "installation.prerequisites.title", route: "/docs/installation#prerequisites", contentKey: "installation.prerequisites.description", sectionKey: GETTING_STARTED_SECTION },
  { id: "quick-install", titleKey: "installation.quickInstall.title", route: "/docs/installation#quick-install", contentKey: "installation.quickInstall.description", sectionKey: GETTING_STARTED_SECTION },
  { id: "typescript-configuration", titleKey: "installation.typescriptConfiguration.title", route: "/docs/installation#typescript-configuration", contentKey: "installation.typescriptConfiguration.title", sectionKey: GETTING_STARTED_SECTION },
  { id: "create-first-server", titleKey: "getStarted.createFirstServer.title", route: "/docs/getting-started#create-first-server", contentKey: "getStarted.createFirstServer.intro", sectionKey: GETTING_STARTED_SECTION },

  { id: "basic-routing", titleKey: "routing.basicRouting.title", route: "/docs/routing#basic-routing", contentKey: "routing.basicRouting.description", sectionKey: BASICS_SECTION },
  { id: "route-parameters", titleKey: "routing.routeParameters.title", route: "/docs/routing#route-parameters", contentKey: "routing.routeParameters.description", sectionKey: BASICS_SECTION },
  { id: "query-parameters", titleKey: "routing.queryParameters.title", route: "/docs/routing#query-parameters", contentKey: "routing.queryParameters.description", sectionKey: BASICS_SECTION },
  { id: "group-routes", titleKey: "routing.groupRoutes.title", route: "/docs/routing#group-routes", contentKey: "routing.groupRoutes.description", sectionKey: BASICS_SECTION },

  { id: "middlewares-main", titleKey: "middlewares.page.title", route: "/docs/middlewares", contentKey: "middlewares.page.lead", sectionKey: BASICS_SECTION },
  { id: "basic-middlewares", titleKey: "middlewares.basic.title", route: "/docs/middlewares#basic-middlewares", contentKey: "middlewares.basic.description", sectionKey: BASICS_SECTION },
  { id: "middleware-order", titleKey: "middlewares.order.title", route: "/docs/middlewares#middleware-order", contentKey: "middlewares.order.description", sectionKey: BASICS_SECTION },
  { id: "middleware-global-group-route", titleKey: "middlewares.scope.title", route: "/docs/middlewares#middleware-global-group-route", contentKey: "middlewares.scope.description", sectionKey: BASICS_SECTION },
  { id: "combined-middlewares", titleKey: "middlewares.combined.title", route: "/docs/middlewares#combined-middlewares", contentKey: "middlewares.combined.description", sectionKey: BASICS_SECTION },

  { id: "validation-main", titleKey: "validation.page.title", route: "/docs/validation", contentKey: "validation.page.lead", sectionKey: BASICS_SECTION },
  { id: "basic-validation", titleKey: "validation.basic.title", route: "/docs/validation#basic-validation", contentKey: "validation.basic.title", sectionKey: BASICS_SECTION },
  { id: "schema-types", titleKey: "validation.types.title", route: "/docs/validation#schema-types", contentKey: "validation.types.description", sectionKey: BASICS_SECTION },
  { id: "optional-fields", titleKey: "validation.optionalFields.title", route: "/docs/validation#optional-fields", contentKey: "validation.optionalFields.description", sectionKey: BASICS_SECTION },
  { id: "validating-different-parts", titleKey: "validation.differentParts.title", route: "/docs/validation#validating-different-parts", contentKey: "validation.differentParts.description", sectionKey: BASICS_SECTION },
  { id: "nested-objects", titleKey: "validation.nestedObjects.title", route: "/docs/validation#nested-objects", contentKey: "validation.nestedObjects.title", sectionKey: BASICS_SECTION },
  { id: "validation-array", titleKey: "validation.arrayValidation.title", route: "/docs/validation#validation-array", contentKey: "validation.arrayValidation.description", sectionKey: BASICS_SECTION },
  { id: "error-handling", titleKey: "validation.errorHandling.title", route: "/docs/validation#error-handling", contentKey: "validation.errorHandling.description", sectionKey: BASICS_SECTION },

  { id: "context-main", titleKey: "requestResponse.page.title", route: "/docs/context", contentKey: "requestResponse.page.lead", sectionKey: BASICS_SECTION },
  { id: "context-accessors", titleKey: "requestResponse.accessors.title", route: "/docs/context#context-accessors", contentKey: "requestResponse.accessors.description", sectionKey: BASICS_SECTION },
  { id: "context-response-helpers", titleKey: "requestResponse.commonResponses.title", route: "/docs/context#context-common-responses", contentKey: "requestResponse.commonResponses.description", sectionKey: BASICS_SECTION },

  { id: "exceptions-main", titleKey: "exceptions.page.title", route: "/docs/exceptions", contentKey: "exceptions.page.lead", sectionKey: BASICS_SECTION },
  { id: "exceptions-usage", titleKey: "exceptions.usage.title", route: "/docs/exceptions#exceptions-usage", contentKey: "exceptions.usage.description", sectionKey: BASICS_SECTION },
  { id: "exceptions-types", titleKey: "exceptions.types.title", route: "/docs/exceptions#exceptions-types", contentKey: "exceptions.types.description", sectionKey: BASICS_SECTION },

  { id: "configuration-logger", titleKey: "configuration.logger.title", route: "/docs/basic-configuration#configuration-logger", contentKey: "configuration.logger.description", sectionKey: CONFIG_SECTION },
  { id: "configuration-static-files", titleKey: "configuration.staticFiles.title", route: "/docs/basic-configuration#configuration-static-files", contentKey: "configuration.staticFiles.description", sectionKey: CONFIG_SECTION },
  { id: "configuration-prefix", titleKey: "configuration.prefix.title", route: "/docs/basic-configuration#configuration-prefix", contentKey: "configuration.prefix.description", sectionKey: CONFIG_SECTION },
  { id: "configuration-file-upload", titleKey: "configuration.fileUpload.title", route: "/docs/basic-configuration#configuration-file-upload", contentKey: "configuration.fileUpload.description", sectionKey: CONFIG_SECTION },

  { id: "engine-templates-main", titleKey: "engineTemplates.page.title", route: "/docs/engine-templates", contentKey: "engineTemplates.page.lead", sectionKey: CONFIG_SECTION },
  { id: "engine-templates-setup", titleKey: "engineTemplates.setup.title", route: "/docs/engine-templates#engine-templates-setup", contentKey: "engineTemplates.setup.description", sectionKey: CONFIG_SECTION },
  { id: "engine-templates-render", titleKey: "engineTemplates.render.title", route: "/docs/engine-templates#engine-templates-render", contentKey: "engineTemplates.render.description", sectionKey: CONFIG_SECTION },
  { id: "engine-templates-hbs", titleKey: "engineTemplates.handlebars.title", route: "/docs/engine-templates#engine-templates-handlebars", contentKey: "engineTemplates.handlebars.description", sectionKey: CONFIG_SECTION },
  { id: "engine-templates-ejs", titleKey: "engineTemplates.ejs.title", route: "/docs/engine-templates#engine-templates-ejs", contentKey: "engineTemplates.ejs.description", sectionKey: CONFIG_SECTION },
  { id: "engine-templates-pug", titleKey: "engineTemplates.pug.title", route: "/docs/engine-templates#engine-templates-pug", contentKey: "engineTemplates.pug.description", sectionKey: CONFIG_SECTION },

  { id: "authentication-main", titleKey: "authentication.page.title", route: "/docs/authentication", contentKey: "authentication.page.lead", sectionKey: SECURITY_SECTION },
  { id: "authentication-basic", titleKey: "authentication.basic.title", route: "/docs/authentication#authentication-basic-example", contentKey: "authentication.basic.description", sectionKey: SECURITY_SECTION },
  { id: "authentication-sessions", titleKey: "authentication.sessions.title", route: "/docs/authentication#authentication-sessions", contentKey: "authentication.sessions.description", sectionKey: SECURITY_SECTION },
  { id: "authentication-db", titleKey: "authentication.sessions.database.title", route: "/docs/authentication#authentication-sessions-database", contentKey: "authentication.sessions.database.description", sectionKey: SECURITY_SECTION },
  { id: "authentication-jwt", titleKey: "authentication.jwt.title", route: "/docs/authentication#authentication-jwt", contentKey: "authentication.jwt.description", sectionKey: SECURITY_SECTION },
  { id: "authentication-jwt-algorithms", titleKey: "authentication.jwt.algorithmsTitle", route: "/docs/authentication#authentication-jwt-algorithms", contentKey: "authentication.jwt.algorithmsWarn", sectionKey: SECURITY_SECTION },

  { id: "encryption-hashing-main", titleKey: "encryptionHashing.page.title", route: "/docs/encryption-hashing", contentKey: "encryptionHashing.page.lead", sectionKey: SECURITY_SECTION },
  { id: "encryption-hasher-example", titleKey: "encryptionHashing.hasherExample.title", route: "/docs/encryption-hashing#encryption-hasher-example", contentKey: "encryptionHashing.hasherExample.description", sectionKey: SECURITY_SECTION },
  { id: "hashing-bcrypt-functions", titleKey: "encryptionHashing.bcryptUsage.title", route: "/docs/encryption-hashing#hashing-bcrypt-usage", contentKey: "encryptionHashing.bcryptUsage.description", sectionKey: SECURITY_SECTION },

  { id: "cors-main", titleKey: "cors.page.title", route: "/docs/cors", contentKey: "cors.page.lead", sectionKey: SECURITY_SECTION },
  { id: "cors-middleware", titleKey: "cors.middleware.title", route: "/docs/cors#cors-middleware", contentKey: "cors.middleware.description", sectionKey: SECURITY_SECTION },
  { id: "cors-best-practices", titleKey: "cors.bestPractices.title", route: "/docs/cors#cors-best-practices", contentKey: "cors.importance.description", sectionKey: SECURITY_SECTION },

  { id: "csrf-main", titleKey: "csrfProtection.page.title", route: "/docs/csrf-protection", contentKey: "csrfProtection.page.lead", sectionKey: SECURITY_SECTION },
  { id: "csrf-middleware", titleKey: "csrfProtection.middleware.title", route: "/docs/csrf-protection#csrf-middleware", contentKey: "csrfProtection.middleware.description", sectionKey: SECURITY_SECTION },
  { id: "csrf-templates", titleKey: "csrfProtection.templates.title", route: "/docs/csrf-protection#csrf-templates", contentKey: "csrfProtection.templates.description", sectionKey: SECURITY_SECTION },

  { id: "rate-limiting-main", titleKey: "rateLimiting.page.title", route: "/docs/rate-limiting", contentKey: "rateLimiting.page.lead", sectionKey: SECURITY_SECTION },
  { id: "rate-limiting-middleware", titleKey: "rateLimiting.middleware.title", route: "/docs/rate-limiting#rate-limiting-middleware", contentKey: "rateLimiting.middleware.description", sectionKey: SECURITY_SECTION },
  { id: "rate-limiting-key-generator", titleKey: "rateLimiting.keyGenerator.title", route: "/docs/rate-limiting#rate-limiting-key-generator", contentKey: "rateLimiting.keyGenerator.description", sectionKey: SECURITY_SECTION },
  { id: "rate-limiting-skip", titleKey: "rateLimiting.skip.title", route: "/docs/rate-limiting#rate-limiting-skip", contentKey: "rateLimiting.skip.description", sectionKey: SECURITY_SECTION },
  { id: "rate-limiting-custom-handler", titleKey: "rateLimiting.customHandler.title", route: "/docs/rate-limiting#rate-limiting-custom-handler", contentKey: "rateLimiting.customHandler.description", sectionKey: SECURITY_SECTION },
  { id: "rate-limiting-multi-instance", titleKey: "rateLimiting.multiInstance.title", route: "/docs/rate-limiting#rate-limiting-multi-instance", contentKey: "rateLimiting.multiInstance.description", sectionKey: SECURITY_SECTION },
  { id: "rate-limiting-best-practices", titleKey: "rateLimiting.bestPractices.title", route: "/docs/rate-limiting#rate-limiting-best-practices", contentKey: "rateLimiting.multiInstance.warn", sectionKey: SECURITY_SECTION },
];

export const getSearchEntries = (t: TFunction): SearchEntry[] =>
  searchDefinitions.map(definition =>
    createEntry(
      definition.id,
      t(definition.titleKey),
      definition.route,
      t(definition.contentKey),
      definition.sectionKey ? t(definition.sectionKey) : undefined,
    ),
  );

export const normalizeSearchText = normalizeText;
