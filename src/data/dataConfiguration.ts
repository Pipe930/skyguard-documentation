export const codeExampleLogger = `import { createApp } from "skyguard-js";
const app = createApp();

// Formato por defecto: "dev"
app.logger();

// Formato custom en consola
app.logger("common");

// También guardar logs en archivo
app.logger("combined", "./logs/http.log");`;

export const codeExampleStaticFiles = `import { createApp } from "skyguard-js";
import { join } from "node:path";

const app = createApp();

// Carpeta relativa
app.staticFiles("public");

// Carpeta absoluta
app.staticFiles(join(process.cwd(), "public"));

// /public/images/logo.png -> /images/logo.png`;

export const codeExamplePrefix = `import { createApp } from "skyguard-js";
const app = createApp();

app.setPrefix("api");

app.get("/users", (ctx) => ctx.json([{ id: 1 }]));
app.get("/health", (ctx) => ctx.text("ok"));

// Rutas finales:
// GET /api/users
// GET /api/health`;

export const codeExampleUploader = `import { createUploader, StorageType } from "skyguard-js";

const uploader = createUploader({
  storageType: StorageType.DISK,
  storageOptions: {
    disk: {
      destination: "./uploads",
    },
  },
});

app.post("/upload", [uploader.single("file")], (ctx) => {
  return ctx.json({
    message: "Archivo subido correctamente",
    file: ctx.req.files,
  });
});`;
