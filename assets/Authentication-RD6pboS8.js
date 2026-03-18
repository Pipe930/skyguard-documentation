import{j as e}from"./index-BooRxw1h.js";import{C as a}from"./Callout-X1K6lgN2.js";import{C as t}from"./CodeBlock-Bjmc5meo.js";import{T as i}from"./Table-BE2KbFxN.js";import{u as c}from"./createLucideIcon-DB8ZpzxG.js";import"./triangle-alert-CQsR3ei0.js";import"./copy-ChQgArdS.js";const l=`import { createApp, UnauthorizedError } from "skyguard-js";
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
});`,p=`import {
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
});`,u=`import {
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
});`,m=`import {
  createApp,
  sessions,
  DatabaseSessionStorage,
} from "skyguard-js";
import { configureDatabaseSessions } from "./sessions/config";

const app = createApp();

configureDatabaseSessions(DatabaseSessionStorage);
app.middlewares(sessions(DatabaseSessionStorage));`,h=`import type { SessionDatabaseAdapter } from "skyguard-js";

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
};`,x=`import { Pool } from "pg";
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

DatabaseSessionStorage.configure(adapter);`,w=`import { PrismaClient } from "@prisma/client";
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

DatabaseSessionStorage.configure(adapter);`,y=`import { createApp, JWT, UnauthorizedError } from "skyguard-js";

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
});`,g=`import {
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
});`;function D(){const{t:s}=c(),n=[{header:s("authentication.sessions.database.columns.field"),accessor:"field",emphasis:!0},{header:s("authentication.sessions.database.columns.type"),accessor:"dbType"},{header:s("authentication.sessions.database.columns.description"),accessor:"description"}],r=[{header:s("authentication.jwt.columns.algorithm"),accessor:"algorithm",emphasis:!0},{header:s("authentication.jwt.columns.type"),accessor:"type"},{header:s("authentication.jwt.columns.keyRequirement"),accessor:"keyRequirement"},{header:s("authentication.jwt.columns.recommendedUsage"),accessor:"recommendedUsage"}],o=s("authentication.sessions.database.rows",{returnObjects:!0}),d=s("authentication.jwt.rows",{returnObjects:!0});return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"authentication",className:"docs-section",children:[e.jsx("h1",{children:s("authentication.page.title")}),e.jsx("p",{children:s("authentication.page.lead")})]}),e.jsx("hr",{}),e.jsxs("section",{id:"authentication-importance",className:"docs-section",children:[e.jsx("h2",{children:s("authentication.importance.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:s("authentication.importance.description")}}),e.jsx(a,{variant:"note",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:s("authentication.importance.note")}})})]}),e.jsxs("section",{id:"authentication-basic-example",className:"docs-section",children:[e.jsx("h2",{children:s("authentication.basic.title")}),e.jsx("p",{children:s("authentication.basic.description")}),e.jsx(t,{code:l})]}),e.jsxs("section",{id:"authentication-sessions",className:"docs-section",children:[e.jsx("h2",{children:s("authentication.sessions.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:s("authentication.sessions.description")}}),e.jsxs("div",{id:"authentication-sessions-memory",className:"docs-subsection",children:[e.jsx("h3",{children:s("authentication.sessions.memory.title")}),e.jsx("p",{children:s("authentication.sessions.memory.description")}),e.jsx(t,{code:p})]}),e.jsxs("div",{id:"authentication-sessions-file",className:"docs-subsection",children:[e.jsx("h3",{children:s("authentication.sessions.file.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:s("authentication.sessions.file.description")}}),e.jsx(t,{code:u})]}),e.jsxs("div",{id:"authentication-sessions-database",className:"docs-subsection",children:[e.jsx("h3",{children:s("authentication.sessions.database.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:s("authentication.sessions.database.description")}}),e.jsx(t,{code:m}),e.jsx("p",{style:{marginTop:"25px"},children:s("authentication.sessions.database.tableLabel")}),e.jsx(i,{columns:n,data:o}),e.jsx(a,{variant:"note",children:s("authentication.sessions.database.note")}),e.jsx("p",{style:{marginTop:"25px"},dangerouslySetInnerHTML:{__html:s("authentication.sessions.database.configLabel")}}),e.jsx(t,{code:h})]}),e.jsxs("div",{id:"authentication-sessions-sql",className:"docs-subsection",children:[e.jsx("h3",{children:s("authentication.sessions.sql.title")}),e.jsx(t,{code:x})]}),e.jsxs("div",{id:"authentication-sessions-orm",className:"docs-subsection",children:[e.jsx("h3",{children:s("authentication.sessions.orm.title")}),e.jsx(t,{code:w})]})]}),e.jsxs("section",{id:"authentication-jwt",className:"docs-section",children:[e.jsx("h2",{children:s("authentication.jwt.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:s("authentication.jwt.description")}})]}),e.jsxs("section",{id:"authentication-jwt-create",className:"docs-section",children:[e.jsx("h2",{children:s("authentication.jwt.createTitle")}),e.jsx(t,{code:y})]}),e.jsxs("section",{id:"authentication-jwt-middleware",className:"docs-section",children:[e.jsx("h2",{children:s("authentication.jwt.middlewareTitle")}),e.jsx(t,{code:g})]}),e.jsxs("section",{id:"authentication-jwt-algorithms",className:"docs-section",children:[e.jsx("h2",{children:s("authentication.jwt.algorithmsTitle")}),e.jsx(i,{columns:r,data:d}),e.jsx(a,{variant:"warn",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:s("authentication.jwt.algorithmsWarn")}})})]})]})}export{D as default};
