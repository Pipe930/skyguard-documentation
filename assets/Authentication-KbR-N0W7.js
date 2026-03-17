import{j as e}from"./index-CVLVyqCr.js";import{C as a}from"./Callout-CPEMqqow.js";import{C as s}from"./CodeBlock-DqpFqFhe.js";import{T as r}from"./Table-DJtjEYSg.js";import"./createLucideIcon-Ie-Bw47j.js";import"./triangle-alert-Bsll79NY.js";import"./copy-1r-K9xfu.js";const i=`import { createApp, UnauthorizedError } from "skyguard-js";
const app = createApp();

const users = [
  { id: 1, username: "admin", password: "secret", role: "admin" },
  { id: 2, username: "editor", password: "123456", role: "editor" },
];

app.post("/login", (ctx) => {
  const { username, password } = ctx.body;

  const user = users.find(
    (entry) => entry.username === username && entry.password === password,
  );

  if (!user) {
    throw new UnauthorizedError("Invalid credentials");
  }

  return ctx.json({
    message: "Authenticated",
    user: { id: user.id, username: user.username, role: user.role },
  });
});`,t=`import {
  createApp,
  sessions,
  MemorySessionStorage,
  UnauthorizedError
} from "skyguard-js";

const app = createApp();

app.middlewares(
  sessions(MemorySessionStorage, {
    name: "connect.sid",
    rolling: false,
    saveUninitialized: false,
  }),
);

app.post("/login", (ctx) => {
  const { username, password } = ctx.body;

  if (username === "admin" && password === "secret") {
    ctx.session.set("user", {
      id: 1,
      username: "admin",
      role: "admin",
    });

    return ctx.json({ message: "Logged in" });
  }

  throw new UnauthorizedError("Invalid credentials");
});

app.get("/me", (ctx) => {
  const user = ctx.session.get("user");

  if (!user) {
    throw new UnauthorizedError("Not authenticated");
  }

  return ctx.json({ user });
});`,o=`import {
  createApp,
  sessions,
  FileSessionStorage,
  UnauthorizedError
} from "skyguard-js";

const app = createApp();

app.middlewares(
  sessions(FileSessionStorage, {
    name: "connect.sid",
    rolling: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 24,
      httpOnly: true,
      sameSite: "Lax",
      secure: false,
      path: "/",
    },
  }),
);

app.post("/login", (ctx) => {
  const { username, password } = ctx.body;

  if (username === "admin" && password === "secret") {
    ctx.session.set("user", {
      id: 1,
      username: "admin",
      role: "admin",
    });

    return ctx.json({ message: "Logged in" });
  }

  throw new UnauthorizedError("Invalid credentials");
});`,n=`import {
  createApp,
  sessions,
  DatabaseSessionStorage,
} from "skyguard-js";
import { configureDatabaseSessions } from "./sessions/config";

const app = createApp();

configureDatabaseSessions(DatabaseSessionStorage);
app.middlewares(sessions(DatabaseSessionStorage));`,d=`import type { SessionDatabaseAdapter } from "skyguard-js";

export type QueryResultRow = {
  id: string;
  data: string;
  expires_at: string | number | bigint;
};

export type SessionDatabaseClient = {
  findById(id: string): Promise<QueryResultRow | null>;
  upsert(id: string, data: string, expiresAt: number): Promise<void>;
  deleteById(id: string): Promise<void>;
  deleteExpired(now: number): Promise<void>;
};

export const createSessionAdapter = (
  client: SessionDatabaseClient,
): SessionDatabaseAdapter => ({
  async findById(id) {
    const row = await client.findById(id);
    if (!row) return null;

    return {
      data: JSON.parse(row.data),
      expiresAt: Number(row.expires_at),
    };
  },
  async upsert(id, payload) {
    await client.upsert(id, JSON.stringify(payload.data), payload.expiresAt);
  },
  async deleteById(id) {
    await client.deleteById(id);
  },
  async deleteExpired(now) {
    await client.deleteExpired(now);
  },
});

export const configureDatabaseSessions = (
  storage: { configure(adapter: SessionDatabaseAdapter): void },
) => {
  const dbClient: SessionDatabaseClient = {
    async findById(_id) {
      throw new Error("Implementa findById con tu cliente SQL/ORM");
    },
    async upsert(_id, _data, _expiresAt) {
      throw new Error("Implementa upsert con tu cliente SQL/ORM");
    },
    async deleteById(_id) {
      throw new Error("Implementa deleteById con tu cliente SQL/ORM");
    },
    async deleteExpired(_now) {
      throw new Error("Implementa deleteExpired con tu cliente SQL/ORM");
    },
  };

  storage.configure(createSessionAdapter(dbClient));
};`,c=`import { Pool } from "pg";
import {
  DatabaseSessionStorage,
  type SessionDatabaseAdapter,
} from "skyguard-js";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const adapter: SessionDatabaseAdapter = {
  async findById(id) {
    const { rows } = await pool.query(
      "SELECT data, expires_at FROM sessions WHERE id = $1 LIMIT 1",
      [id],
    );

    const row = rows[0];
    if (!row) return null;

    return { data: JSON.parse(row.data), expiresAt: Number(row.expires_at) };
  },
  async upsert(id, payload) {
    await pool.query(
      "INSERT INTO sessions (id, data, expires_at) VALUES ($1, $2, $3) " +
        "ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data, expires_at = EXCLUDED.expires_at",
      [id, JSON.stringify(payload.data), payload.expiresAt],
    );
  },
  async deleteById(id) {
    await pool.query("DELETE FROM sessions WHERE id = $1", [id]);
  },
  async deleteExpired(now) {
    await pool.query("DELETE FROM sessions WHERE expires_at <= $1", [now]);
  },
};

DatabaseSessionStorage.configure(adapter);`,l=`import { PrismaClient } from "@prisma/client";
import {
  DatabaseSessionStorage,
  type SessionDatabaseAdapter,
} from "skyguard-js";

const prisma = new PrismaClient();

// model Session {
//   id        String @id
//   data      String
//   expiresAt BigInt @map("expires_at")
//   @@map("sessions")
// }

const adapter: SessionDatabaseAdapter = {
  async findById(id) {
    const row = await prisma.session.findUnique({ where: { id } });
    if (!row) return null;

    return { data: JSON.parse(row.data), expiresAt: Number(row.expiresAt) };
  },
  async upsert(id, payload) {
    await prisma.session.upsert({
      where: { id },
      update: {
        data: JSON.stringify(payload.data),
        expiresAt: BigInt(payload.expiresAt),
      },
      create: {
        id,
        data: JSON.stringify(payload.data),
        expiresAt: BigInt(payload.expiresAt),
      },
    });
  },
  async deleteById(id) {
    await prisma.session.deleteMany({ where: { id } });
  },
  async deleteExpired(now) {
    await prisma.session.deleteMany({
      where: { expiresAt: { lte: BigInt(now) } },
    });
  },
};

DatabaseSessionStorage.configure(adapter);`,p=`import { createApp, JWT, UnauthorizedError } from "skyguard-js";

const app = createApp();

app.post("/login", async (ctx) => {
  const { username, password } = ctx.body;

  // Retrieve user from database by username
  // Validate password hash

  if (!(username === "admin" && password === "secret")) {
    throw new UnauthorizedError("Invalid credentials");
  }

  const token = JWT.create({ sub: "123", role: "admin" }, "secret-key", {
    algorithm: "HS256",
    expiresIn: "1h",
  });

  return ctx.json({ token });
});`,m=`import {
  JWT,
  type Middleware,
  UnauthorizedError,
} from "skyguard-js";

const secret = "secret-key";

export const authJWT = (): Middleware => {
  return async (ctx, next) => {
    const authHeader = ctx.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedError("Missing or invalid token format");
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      throw new UnauthorizedError("Token string is empty");
    }

    const user = JWT.verify(token, secret);

    if (!user) {
      throw new UnauthorizedError("Invalid or expired token");
    }

    ctx.req.state.user = user;
    return await next(ctx);
  };
};

app.get("/profile", [authJWT()], async (ctx.req) => {
  const user = ctx.req.state.user;
  return ctx.json({ user });
});`,u=[{header:"Algoritmo",accessor:"algorithm",emphasis:!0},{header:"Tipo",accessor:"type"},{header:"Clave requerida",accessor:"keyRequirement"},{header:"Uso recomendado",accessor:"recommendedUsage"}],h=[{header:"Campo",accessor:"field",emphasis:!0},{header:"Tipo recomendado",accessor:"dbType"},{header:"Descripción",accessor:"description"}],g=[{field:"id",dbType:"string/varchar (primary key)",description:"Identificador único de la sesión"},{field:"key",dbType:"JSON/TEXT",description:"Objeto serializado con el contenido de la sesión"},{field:"expires_at",dbType:"bigint/timestamp (unix ms)",description:"Expiración de la sesión en milisegundos unix"}],x=[{algorithm:"HS256",type:"HMAC (simétrico)",keyRequirement:"Una clave secreta compartida",recommendedUsage:"Servicios internos con secreto robusto y rotación"},{algorithm:"HS384",type:"HMAC (simétrico)",keyRequirement:"Una clave secreta compartida",recommendedUsage:"Mismo caso que HS256 con digest más largo"},{algorithm:"HS512",type:"HMAC (simétrico)",keyRequirement:"Una clave secreta compartida",recommendedUsage:"Mayor margen criptográfico en entornos estrictos"},{algorithm:"RS256",type:"RSA (asimétrico)",keyRequirement:"Clave privada para firmar y pública para verificar",recommendedUsage:"APIs con emisores y verificadores separados"},{algorithm:"RS384",type:"RSA (asimétrico)",keyRequirement:"Clave privada para firmar y pública para verificar",recommendedUsage:"Variante RSA con digest más largo"},{algorithm:"RS512",type:"RSA (asimétrico)",keyRequirement:"Clave privada para firmar y pública para verificar",recommendedUsage:"Requerimientos altos de seguridad y compatibilidad RSA"}];function A(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"authentication",className:"docs-section",children:[e.jsx("h1",{children:"Autenticación"}),e.jsx("p",{children:"La autenticación es el proceso de verificar la identidad de un cliente antes de permitir acceso a recursos protegidos. En backend es esencial para controlar permisos, proteger datos sensibles y reducir riesgo de suplantación de identidad."})]}),e.jsx("hr",{}),e.jsxs("section",{id:"authentication-importance",className:"docs-section",children:[e.jsx("h2",{children:"¿Por qué es esencial en backend?"}),e.jsxs("p",{children:["En una API, autenticación y autorización no son lo mismo. Primero se valida ",e.jsx("mark",{className:"docs-highlight",children:"quién eres"}),"(autenticación), luego se valida ",e.jsx("mark",{className:"docs-highlight",children:"qué puedes hacer"})," (autorización). Si omites la autenticación, cualquier cliente podría ejecutar acciones privilegiadas."]}),e.jsxs(a,{variant:"note",children:["Buenas prácticas mínimas: credenciales en hash, tokens con expiración, cookies de sesión con ",e.jsx("mark",{className:"docs-highlight",children:"httpOnly"})," y rotación de secretos."]})]}),e.jsxs("section",{id:"authentication-basic-example",className:"docs-section",children:[e.jsx("h2",{children:"Ejemplo básico"}),e.jsx("p",{children:"Este ejemplo usa una lista en memoria para validar usuario y contraseña. Es ideal para entender el flujo antes de conectar base de datos."}),e.jsx(s,{code:i})]}),e.jsxs("section",{id:"authentication-sessions",className:"docs-section",children:[e.jsx("h2",{children:"Autenticación con sesiones"}),e.jsxs("p",{children:["Skyguard provee el middleware ",e.jsx("mark",{className:"docs-highlight",children:"sessions()"}),"y tres estrategias de almacenamiento: memoria, archivo JSON y base de datos. Todas comparten el mismo patrón de login y acceso a",e.jsx("mark",{className:"docs-highlight",children:"request.session"}),"."]}),e.jsxs("div",{id:"authentication-sessions-memory",className:"docs-subsection",children:[e.jsx("h3",{children:"Session Storage en Memoria"}),e.jsx("p",{children:"Recomendado para desarrollo local o pruebas. No persiste si reinicias el proceso."}),e.jsx(s,{code:t})]}),e.jsxs("div",{id:"authentication-sessions-file",className:"docs-subsection",children:[e.jsx("h3",{children:"Session Storage en Archivo (JSON)"}),e.jsxs("p",{children:["Usa ",e.jsx("mark",{className:"docs-highlight",children:"FileSessionStorage"})," para persistir sesiones en disco con cookies configurables."]}),e.jsx(s,{code:o})]}),e.jsxs("div",{id:"authentication-sessions-database",className:"docs-subsection",children:[e.jsx("h3",{children:"Session Storage en Base de Datos"}),e.jsxs("p",{children:["Con ",e.jsx("mark",{className:"docs-highlight",children:"DatabaseSessionStorage"})," defines un adapter agnóstico al motor. Esto permite SQL directo u ORM con el mismo contrato."]}),e.jsx(s,{code:n}),e.jsx("p",{style:{marginTop:"25px"},children:"Estructura de tabla sugerida (portable entre motores):"}),e.jsx(r,{columns:h,data:g}),e.jsx(a,{variant:"note",children:"Puedes utilizar cualquier conector de base de datos u ORM, solo tienes que utilizar la clase correspondiente que es como un adaptador, para que el framework pueda reconocer las sesiones de tu base de datos."}),e.jsxs("p",{style:{marginTop:"25px"},children:["Para mantener el código más limpio, conviene crear un archivo separado para configurar sesiones de base de datos, por ejemplo:",e.jsx("mark",{className:"docs-highlight",children:" src/sessions/config.ts"}),"."]}),e.jsx(s,{code:d})]}),e.jsxs("div",{id:"authentication-sessions-sql",className:"docs-subsection",children:[e.jsx("h3",{children:"Ejemplo SQL (Postgresql)"}),e.jsx(s,{code:c})]}),e.jsxs("div",{id:"authentication-sessions-orm",className:"docs-subsection",children:[e.jsx("h3",{children:"Ejemplo ORM (Prisma)"}),e.jsx(s,{code:l})]})]}),e.jsxs("section",{id:"authentication-jwt",className:"docs-section",children:[e.jsx("h2",{children:"Autenticación con JSON Web Token (JWT)"}),e.jsxs("p",{children:["Skyguard incluye una clase interna",e.jsx("mark",{className:"docs-highlight",children:" JWT"})," para crear y verificar tokens. El patrón recomendado es emitir token en login y validar con middleware en rutas protegidas."]})]}),e.jsxs("section",{id:"authentication-jwt-create",className:"docs-section",children:[e.jsx("h2",{children:"Crear JWT en login"}),e.jsx(s,{code:p})]}),e.jsxs("section",{id:"authentication-jwt-middleware",className:"docs-section",children:[e.jsx("h2",{children:"Middleware para validar JWT"}),e.jsx(s,{code:m})]}),e.jsxs("section",{id:"authentication-jwt-algorithms",className:"docs-section",children:[e.jsx("h2",{children:"Algoritmos soportados por JWT"}),e.jsx(r,{columns:u,data:x}),e.jsxs(a,{variant:"warn",children:["Aclaración criptográfica: los algoritmos",e.jsx("mark",{className:"docs-highlight",children:" HS*"})," usan clave simétrica compartida; los ",e.jsx("mark",{className:"docs-highlight",children:"RS*"})," usan par de claves asimétricas (privada/pública)."]})]})]})}export{A as default};
