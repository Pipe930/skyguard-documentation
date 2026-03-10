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
];

export const normalizeSearchText = normalizeText;
