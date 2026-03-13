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
];

export const normalizeSearchText = normalizeText;
