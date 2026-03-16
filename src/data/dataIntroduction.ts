import type { TableColumn } from "../interfaces/table.interface";
interface ContentTable {
  caracterist: string;
  express: string;
  koa: string;
  skyguardjs: string;
}

export const codeExample = `import { createApp, schema, v, validateRequest } from "skyguard-js";
const app = createApp();

const userSchema = schema({
  body: {
    username: v.string({ maxLength: 60 }),
    email: v.string().email()
  }
});

app.post("/user/create", [validateRequest(userSchema)], (ctx) => {
  const { username, email } = ctx.body;

  return ctx.json({ username, email }).setStatusCode(201);
});

app.run(3000, () => {
  console.log("Server running in port 3000");
});`;

export const tableColumns: TableColumn<ContentTable>[] = [
  {
    header: "Caracteristicas",
    accessor: "caracterist",
    emphasis: true,
  },
  {
    header: "Express.js",
    accessor: "express",
    enableFormatting: true,
  },
  {
    header: "Koa.js",
    accessor: "koa",
    enableFormatting: true,
  },
  {
    header: "Skyguard.js",
    accessor: "skyguardjs",
    enableFormatting: true,
    emphasis: true,
  },
];

export const dataTable: ContentTable[] = [
  {
    caracterist: "Filosofía",
    express: "“Incluye lo básico”",
    koa: "Minimalista / Base",
    skyguardjs: "Fuertemente Tipado / Minimalista",
  },
  {
    caracterist: "Validación",
    express: "Requiere `express-validator`",
    koa: "Requiere terceros",
    skyguardjs: "Esquemas de validación nativos",
  },
  {
    caracterist: "Middlewares",
    express: "Basados en callbacks",
    koa: "Async (Modelo Cebolla)",
    skyguardjs: "Async (Modelo Cebolla)",
  },
  {
    caracterist: "Cookies",
    express: "Requiere `cookie-parser`",
    koa: "Integrado",
    skyguardjs: "Soporte nativo de Cookies",
  },
  {
    caracterist: "Sesiones",
    express: "Requiere `express-session`",
    koa: "Requiere `koa-session`",
    skyguardjs: "Soporte nativo de Sesiones",
  },
  {
    caracterist: "Typescript",
    express: "Vía `@types/express`",
    koa: "Vía `@types/koa`",
    skyguardjs: "Soporte nativo de Typescript",
  },
  {
    caracterist: "Dependencias",
    express: "~30+ transitivas",
    koa: "~20+ transitivas",
    skyguardjs: "0 Dependencias",
  },
];
