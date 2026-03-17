export const showcaseItems = [
  {
    title: "Confianza mediante tipado seguro",
    points: [
      {
        title: "Elimina errores en tiempo de ejecución",
        description:
          "Detecta errores comunes en compilación con tipos estrictos de TypeScript y contratos predecibles.",
      },
      {
        title: "Simplifica contratos de API",
        description:
          "Define entradas y salidas esperadas con claridad para que cada endpoint quede documentado por diseño.",
      },
      {
        title: "Refactorización sin fricción",
        description:
          "Haz evolucionar tu código con seguridad mientras el sistema de tipos resalta de inmediato las rutas afectadas.",
      },
    ],
    codeLabel: "servidor.ts",
    code: `import { createApp } from "skyguard-js";
const app = createApp();

app.get("/", (ctx) => {
  return ctx.json({ estado: "ok" });
});

app.run(3000);`,
  },
  {
    title: "Validación integrada",
    points: [
      {
        title: "Sin instalar dependencias",
        description:
          "Valida peticiones entrantes con esquemas integrados y no instales dependencias.",
      },
      {
        title: "Validación detallada",
        description:
          "Obtén mensajes explícitos para payloads inválidos y valida las estructuras de las peticiones con precisión.",
      },
      {
        title: "Integración fluida",
        description:
          "Aplica validación a nivel de ruta para que tus handlers se mantengan limpios y legibles.",
      },
    ],
    codeLabel: "validacion.ts",
    code: `import { createApp, v, schema, validatorRequest } from "skyguard-js";
const app = createApp();

const userSchema = schema({
  body: {  
    name: v.string({ minLength: 3 }),
    email: v.string().email(),
  }
});

app.post("/users", [validatorRequest(userSchema)], (ctx) => {
  return { creado: true, usuario: ctx.body };
});`,
  },
  {
    title: "Sin dependencias",
    points: [
      {
        title: "Tiene todo lo necesario",
        description:
          "No instales dependencias de terceros, el framework cuenta con todo lo necesario para crear APIs.",
      },
      {
        title: "Protección contra ataques",
        description:
          "Cuenta con funciones integradas para protección de ataques, funciones como CSRF, rate limiter, CORS, encriptación y hashing de contraseñas.",
      },
    ],
    codeLabel: "extension.ts",
    code: `import { Hasher, json } from "skyguard-js";
    
app.middlewares(
  cors({
    origin: ["http://localhost:3000/"],
  }),
);

app.post("/register", async (ctx) => {
  const { username, password } = ctx.data;
  const hashedPassword = await Hasher.hash(password);

  return ctx.json({ message: "User registered" });
});`,
  },
];
