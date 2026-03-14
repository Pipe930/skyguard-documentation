export interface SearchEntry {
  id: string;
  title: string;
  route: string;
  section?: string;
  content: string;
  searchableText: string;
}

const normalizeText = (value: string) =>
  value
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
): SearchEntry => ({
  id,
  title,
  route,
  section,
  content,
  searchableText: normalizeText(`${title} ${section ?? ""} ${content}`),
});

export const searchEntries: SearchEntry[] = [
  createEntry(
    "intro-main",
    "Introduction",
    "/docs/introduction",
    "Bienvenidos a Skyguard JS, framework minimalista escrito en TypeScript sin dependencias de terceros.",
  ),
  createEntry(
    "intro-what-is",
    "¿Qué es Skyguard JS?",
    "/docs/introduction#what-is-skyguard-js",
    "Framework fuertemente tipado para NodeJS con funcionalidades integradas y control total del proyecto.",
    "Introduction",
  ),
  createEntry(
    "intro-advantages",
    "Comparación con la Competencia",
    "/docs/introduction#advantages",
    "Comparativa con Express y Koa en validación, middlewares, cookies, sesiones y TypeScript.",
    "Introduction",
  ),
  createEntry(
    "prerequisites",
    "Prerequisitos",
    "/docs/installation#prerequisites",
    "Antes de instalar SkyguardJS, asegúrese de tener instalado NodeJS y Typescript en las siguientes versions",
  ),
  createEntry(
    "quick-install",
    "Instalación del paquete",
    "/docs/installation#quick-install",
    "Selecciona tu manejador de paquetes para copiar el comando de instalación e instalar la libreria",
    "Installation",
  ),
  createEntry(
    "typescript-configuration",
    "Configuración de Typescript",
    "/docs/installation#typescript-configuration",
    "SkyguardJS está desarrollado con TypeScript y ofrece seguridad de tipos completa. Asegúrate de que tu archivo tsconfig.json incluya",
    "Installation",
  ),
  createEntry(
    "create-first-server",
    "Crea tu primer servidor",
    "/docs/getting-started#create-first-server",
    "Si ya tienes NodeJS instalado en tu maquina, estos son los pasos sencillos para utilizar SkyguardJS",
    "Getting Started",
  ),
  createEntry(
    "basic-routing",
    "Rutas Básicas",
    "/docs/routing#basic-routing",
    "Para definir rutas, se utilizan los distintos metodos del objeto app.",
    "Routing",
  ),
  createEntry(
    "route-parameters",
    "Rutas con Parametros",
    "/docs/routing#route-parameters",
    "Para capturar los parametros de las peticiones, se utiliza la propiedad params del objeto request.",
    "Routing",
  ),
  createEntry(
    "query-parameters",
    "Rutas con Queries",
    "/docs/routing#query-parameters",
    "Para acceder a las query parameters de las peticiones, se utiliza la propiedad query del objeto request.",
    "Routing",
  ),
  createEntry(
    "group-routes",
    "Grupo de Rutas",
    "/docs/routing#group-routes",
    "Skyguard tiene un metodo para crear un grupo de rutas en base a un prefix inicial.",
    "Routing",
  ),
  createEntry(
    "middlewares-main",
    "Middlewares",
    "/docs/middlewares",
    "Funciones para autenticación, logs y otras tareas transversales antes del handler.",
    "Core Concepts",
  ),
  createEntry(
    "basic-middlewares",
    "Middlewares Básicos",
    "/docs/middlewares#basic-middlewares",
    "Estructura base de un middleware con request y next.",
    "Middlewares",
  ),
  createEntry(
    "middleware-order",
    "Orden de Middlewares",
    "/docs/middlewares#middleware-order",
    "Los middlewares se ejecutan en el mismo orden en que se registran.",
    "Middlewares",
  ),
  createEntry(
    "middleware-global-group-route",
    "Global vs Group vs Route Middlewares",
    "/docs/middlewares#middleware-global-group-route",
    "Registro de middlewares a nivel global, grupo de rutas o ruta específica.",
    "Middlewares",
  ),
  createEntry(
    "combined-middlewares",
    "Combinando Middlewares",
    "/docs/middlewares#combined-middlewares",
    "Apila múltiples middlewares en una sola ruta.",
    "Middlewares",
  ),
  createEntry(
    "validation-main",
    "Validación",
    "/docs/validation",
    "Sistema de validación integrado para solicitudes en SkyguardJS.",
    "Core Concepts",
  ),
  createEntry(
    "basic-validation",
    "Validación Básica",
    "/docs/validation#basic-validation",
    "Creación de esquemas con t, schema y validationRequest().",
    "Validation",
  ),
  createEntry(
    "schema-types",
    "Validación de Tipos",
    "/docs/validation#schema-types",
    "Validación para strings, numbers, booleans, bigints, dates, arrays, objects, literals y unions.",
    "Validation",
  ),
  createEntry(
    "optional-fields",
    "Campos Opcionales",
    "/docs/validation#optional-fields",
    "Campos opcionales y valores por defecto en esquemas.",
    "Validation",
  ),
  createEntry(
    "validating-different-parts",
    "Validación de Diferentes Partes",
    "/docs/validation#validating-different-parts",
    "Validación de body, params y otras partes de la petición.",
    "Validation",
  ),
  createEntry(
    "nested-objects",
    "Objetos Anidados",
    "/docs/validation#nested-objects",
    "Validación de estructuras de objetos anidados.",
    "Validation",
  ),
  createEntry(
    "validation-array",
    "Validación de Arrays",
    "/docs/validation#validation-array",
    "Validación de arreglos y de objetos dentro de arreglos.",
    "Validation",
  ),
  createEntry(
    "error-handling",
    "Manejo de Errores",
    "/docs/validation#error-handling",
    "Respuesta 400 automática cuando falla una validación.",
    "Validation",
  ),
  createEntry(
    "request-response-main",
    "Request & Response",
    "/docs/request-response",
    "Aprende a usar los objetos Request y Response para leer datos de entrada y construir respuestas HTTP.",
    "Core Concepts",
  ),
  createEntry(
    "request-object",
    "Request",
    "/docs/request-response#request-object",
    "Acceso a url, method, headers, params, query, body, session y cookies de la petición.",
    "Request & Response",
  ),
  createEntry(
    "response-object",
    "Response",
    "/docs/request-response#response-object",
    "Configuración de estado, headers, cookies y contenido con API fluida y métodos estáticos.",
    "Request & Response",
  ),
  createEntry(
    "configuration-logger",
    "Logger",
    "/docs/configuration#configuration-logger",
    "Configura formato de logs HTTP y salida opcional a archivo con logger().",
    "Configuración",
  ),
  createEntry(
    "configuration-static-files",
    "Static Files",
    "/docs/configuration#configuration-static-files",
    "Publica una carpeta para servir assets estáticos con staticFiles().",
    "Configuración",
  ),
  createEntry(
    "configuration-prefix",
    "Prefix Global",
    "/docs/configuration#configuration-prefix",
    "Define un prefijo inicial para todas las rutas con setPrefix().",
    "Configuración",
  ),
  createEntry(
    "authentication-main",
    "Authentication",
    "/docs/authentication",
    "Guía completa de autenticación en backend con ejemplo básico, sesiones y JWT en SkyguardJS.",
    "Security",
  ),
  createEntry(
    "authentication-basic",
    "Ejemplo básico de autenticación",
    "/docs/authentication#authentication-basic-example",
    "Valida username y password contra una lista en memoria para comprender el flujo inicial.",
    "Authentication",
  ),
  createEntry(
    "authentication-sessions",
    "Autenticación con sesiones",
    "/docs/authentication#authentication-sessions",
    "Uso del middleware sessions con MemorySessionStorage, FileSessionStorage y DatabaseSessionStorage.",
    "Authentication",
  ),
  createEntry(
    "authentication-db",
    "Sesiones en base de datos",
    "/docs/authentication#authentication-sessions-database",
    "Adapter agnóstico para sesiones persistentes en SQL y ORM.",
    "Authentication",
  ),
  createEntry(
    "authentication-jwt",
    "Autenticación con JWT",
    "/docs/authentication#authentication-jwt",
    "Creación de tokens con JWT.create, verificación con JWT.verify y middleware Bearer.",
    "Authentication",
  ),
  createEntry(
    "authentication-jwt-algorithms",
    "Algoritmos JWT soportados",
    "/docs/authentication#authentication-jwt-algorithms",
    "Tabla de algoritmos HS256, HS384, HS512, RS256, RS384 y RS512 con tipo de clave.",
    "Authentication",
  ),
  createEntry(
    "engine-templates-main",
    "Engine Templates",
    "/docs/engine-templates",
    "Aprende a integrar motores de plantillas, configurar vistas y renderizar con Response.render().",
    "Configuración",
  ),
  createEntry(
    "engine-templates-setup",
    "Configuración Base",
    "/docs/engine-templates#engine-templates-setup",
    "Usa app.views() para definir la carpeta de vistas y app.engineTemplates() para registrar motores por extensión.",
    "Engine Templates",
  ),
  createEntry(
    "engine-templates-render",
    "Response.render()",
    "/docs/engine-templates#engine-templates-render",
    "Renderiza vistas con datos dinámicos después de configurar motores y path de views.",
    "Engine Templates",
  ),
  createEntry(
    "engine-templates-hbs",
    "Express Handlebars",
    "/docs/engine-templates#engine-templates-handlebars",
    "Configuración de express-handlebars con extname, layoutsDir y defaultLayout para hbs.",
    "Engine Templates",
  ),
  createEntry(
    "engine-templates-ejs",
    "EJS",
    "/docs/engine-templates#engine-templates-ejs",
    "Registro del motor EJS con ejs.renderFile para render de vistas por extensión ejs.",
    "Engine Templates",
  ),
  createEntry(
    "engine-templates-pug",
    "Pug",
    "/docs/engine-templates#engine-templates-pug",
    "Configuración de Pug mediante pug.renderFile y uso de Response.render().",
    "Engine Templates",
  ),
];

export const normalizeSearchText = normalizeText;
