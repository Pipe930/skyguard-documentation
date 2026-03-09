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
    "What is Skyguard JS?",
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
    "installation-main",
    "Installation",
    "/docs/installation",
    "Requisitos para instalar Skyguard JS con Node.js 18 o superior y proyecto TypeScript inicializado.",
  ),
  createEntry(
    "installation-commands",
    "Comandos de instalación",
    "/docs/installation#quick-install",
    "Selecciona npm, yarn o pnpm para copiar el comando de instalación de skyguard-js.",
    "Installation",
  ),
  createEntry(
    "installation-verify",
    "Verificar instalación",
    "/docs/installation#verify",
    "Importa createApp y ejecuta el servidor para comprobar una instalación correcta.",
    "Installation",
  ),
  createEntry(
    "getting-started-main",
    "Getting Started",
    "/docs/getting-started",
    "Guía inicial para crear APIs con simplicidad, velocidad y experiencia limpia en TypeScript.",
  ),
  createEntry(
    "getting-started-first-route",
    "Tu primera ruta",
    "/docs/getting-started#first-route",
    "Ejemplo creando una ruta /health y levantando el servidor en el puerto 3000.",
    "Getting Started",
  ),
  createEntry(
    "getting-started-middleware",
    "Middleware",
    "/docs/getting-started#middleware",
    "Uso de middlewares globales, grupales y por ruta para validaciones y reglas de negocio.",
    "Getting Started",
  ),
  createEntry(
    "getting-started-next-steps",
    "Próximos pasos",
    "/docs/getting-started#next-steps",
    "Continuación hacia configuración, seguridad y arquitectura para servicios robustos.",
    "Getting Started",
  ),
];

export const normalizeSearchText = normalizeText;
