import type { TableColumn } from "../interfaces/table.interface";

interface JwtAlgorithmRow {
  algorithm: string;
  type: string;
  keyRequirement: string;
  recommendedUsage: string;
}

interface SessionSuggestedRow {
  field: string;
  dbType: string;
  description: string;
}

export const codeExampleBasicAuth = `import { createApp, Response, UnauthorizedError } from "skyguard-js";

const app = createApp();

const users = [
  { id: 1, username: "admin", password: "secret", role: "admin" },
  { id: 2, username: "editor", password: "123456", role: "editor" },
];

app.post("/login", (request) => {
  const { username, password } = request.body;

  const user = users.find(
    (entry) => entry.username === username && entry.password === password,
  );

  if (!user) {
    throw new UnauthorizedError("Invalid credentials");
  }

  return Response.json({
    message: "Authenticated",
    user: { id: user.id, username: user.username, role: user.role },
  });
});`;

export const codeExampleSessionMemory = `import {
  createApp,
  sessions,
  MemorySessionStorage,
  UnauthorizedError,
  Response,
} from "skyguard-js";

const app = createApp();

app.middlewares(
  sessions(MemorySessionStorage, {
    name: "connect.sid",
    rolling: false,
    saveUninitialized: false,
  }),
);

app.post("/login", (request) => {
  const { username, password } = request.body;

  if (username === "admin" && password === "secret") {
    request.session.set("user", {
      id: 1,
      username: "admin",
      role: "admin",
    });

    return Response.json({ message: "Logged in" });
  }

  throw new UnauthorizedError("Invalid credentials");
});

app.get("/me", (request) => {
  const user = request.session.get("user");

  if (!user) {
    throw new UnauthorizedError("Not authenticated");
  }

  return Response.json({ user });
});`;

export const codeExampleSessionFile = `import {
  createApp,
  sessions,
  FileSessionStorage,
  UnauthorizedError,
  json,
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

app.post("/login", (request) => {
  const { username, password } = request.body;

  if (username === "admin" && password === "secret") {
    request.session.set("user", {
      id: 1,
      username: "admin",
      role: "admin",
    });

    return json({ message: "Logged in" });
  }

  throw new UnauthorizedError("Invalid credentials");
});`;

export const codeExampleSessionDatabaseBase = `import {
  createApp,
  sessions,
  DatabaseSessionStorage,
} from "skyguard-js";
import { configureDatabaseSessions } from "./sessions/config";

const app = createApp();

configureDatabaseSessions(DatabaseSessionStorage);
app.middlewares(sessions(DatabaseSessionStorage));`;

export const codeExampleSessionConfigFile = `import type { SessionDatabaseAdapter } from "skyguard-js";

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
};`;

export const codeExampleSessionDatabaseSql = `import { Pool } from "pg";
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

DatabaseSessionStorage.configure(adapter);`;

export const codeExampleSessionDatabaseSqlMysql2 = `import mysql from "mysql2/promise";
import {
  DatabaseSessionStorage,
  type SessionDatabaseAdapter,
} from "skyguard-js";

const pool = mysql.createPool({ uri: process.env.DATABASE_URL });

const adapter: SessionDatabaseAdapter = {
  async findById(id) {
    const [rows] = await pool.query<{ data: string; expires_at: number }[]>(
      "SELECT data, expires_at FROM sessions WHERE id = ? LIMIT 1",
      [id],
    );
    const row = rows[0];
    if (!row) return null;
    return { data: JSON.parse(row.data), expiresAt: Number(row.expires_at) };
  },
  async upsert(id, payload) {
    await pool.query(
      "INSERT INTO sessions (id, data, expires_at) VALUES (?, ?, ?) " +
        "ON DUPLICATE KEY UPDATE data = VALUES(data), expires_at = VALUES(expires_at)",
      [id, JSON.stringify(payload.data), payload.expiresAt],
    );
  },
  async deleteById(id) {
    await pool.query("DELETE FROM sessions WHERE id = ?", [id]);
  },
  async deleteExpired(now) {
    await pool.query("DELETE FROM sessions WHERE expires_at <= ?", [now]);
  },
};

DatabaseSessionStorage.configure(adapter);`;

export const codeExampleSessionDatabaseSqlMariaDb = `import mariadb from "mariadb";
import {
  DatabaseSessionStorage,
  type SessionDatabaseAdapter,
} from "skyguard-js";

const pool = mariadb.createPool({ uri: process.env.DATABASE_URL });

const adapter: SessionDatabaseAdapter = {
  async findById(id) {
    const rows: { data: string; expires_at: number }[] = await pool.query(
      "SELECT data, expires_at FROM sessions WHERE id = ? LIMIT 1",
      [id],
    );
    const row = rows[0];
    if (!row) return null;
    return { data: JSON.parse(row.data), expiresAt: Number(row.expires_at) };
  },
  async upsert(id, payload) {
    await pool.query(
      "INSERT INTO sessions (id, data, expires_at) VALUES (?, ?, ?) " +
        "ON DUPLICATE KEY UPDATE data = VALUES(data), expires_at = VALUES(expires_at)",
      [id, JSON.stringify(payload.data), payload.expiresAt],
    );
  },
  async deleteById(id) {
    await pool.query("DELETE FROM sessions WHERE id = ?", [id]);
  },
  async deleteExpired(now) {
    await pool.query("DELETE FROM sessions WHERE expires_at <= ?", [now]);
  },
};

DatabaseSessionStorage.configure(adapter);`;

export const codeExampleSessionDatabaseSqlSqlite = `import sqlite3 from "sqlite3";
import { open } from "sqlite";
import {
  DatabaseSessionStorage,
  type SessionDatabaseAdapter,
} from "skyguard-js";

const db = await open({ filename: "./sessions.db", driver: sqlite3.Database });

const adapter: SessionDatabaseAdapter = {
  async findById(id) {
    const row = await db.get<{ data: string; expires_at: number }>(
      "SELECT data, expires_at FROM sessions WHERE id = ? LIMIT 1",
      [id],
    );
    if (!row) return null;
    return { data: JSON.parse(row.data), expiresAt: Number(row.expires_at) };
  },
  async upsert(id, payload) {
    await db.run(
      "INSERT INTO sessions (id, data, expires_at) VALUES (?, ?, ?) " +
        "ON CONFLICT(id) DO UPDATE SET data = excluded.data, expires_at = excluded.expires_at",
      [id, JSON.stringify(payload.data), payload.expiresAt],
    );
  },
  async deleteById(id) {
    await db.run("DELETE FROM sessions WHERE id = ?", [id]);
  },
  async deleteExpired(now) {
    await db.run("DELETE FROM sessions WHERE expires_at <= ?", [now]);
  },
};

DatabaseSessionStorage.configure(adapter);`;

export const codeExampleSessionDatabaseSqlServer = `import { TYPES } from "tedious";
import {
  DatabaseSessionStorage,
  type SessionDatabaseAdapter,
} from "skyguard-js";

// Helpers query/execute omitidos por brevedad
declare function query<T>(
  sql: string,
  params: Array<{ name: string; type: unknown; value: unknown }>,
): Promise<T[]>;
declare function execute(
  sql: string,
  params: Array<{ name: string; type: unknown; value: unknown }>,
): Promise<void>;

const adapter: SessionDatabaseAdapter = {
  async findById(id) {
    const rows = await query<{ data: string; expires_at: number }>(
      "SELECT TOP 1 data, expires_at FROM sessions WHERE id = @id",
      [{ name: "id", type: TYPES.VarChar, value: id }],
    );
    const row = rows[0];
    if (!row) return null;
    return { data: JSON.parse(row.data), expiresAt: Number(row.expires_at) };
  },
  async upsert(id, payload) {
    await execute(
      "MERGE sessions AS target " +
        "USING (SELECT @id AS id, @data AS data, @expires_at AS expires_at) AS source " +
        "ON target.id = source.id " +
        "WHEN MATCHED THEN UPDATE SET data = source.data, expires_at = source.expires_at " +
        "WHEN NOT MATCHED THEN INSERT (id, data, expires_at) VALUES (source.id, source.data, source.expires_at);",
      [
        { name: "id", type: TYPES.VarChar, value: id },
        { name: "data", type: TYPES.NVarChar, value: JSON.stringify(payload.data) },
        { name: "expires_at", type: TYPES.BigInt, value: payload.expiresAt },
      ],
    );
  },
  async deleteById(id) {
    await execute("DELETE FROM sessions WHERE id = @id", [
      { name: "id", type: TYPES.VarChar, value: id },
    ]);
  },
  async deleteExpired(now) {
    await execute("DELETE FROM sessions WHERE expires_at <= @now", [
      { name: "now", type: TYPES.BigInt, value: now },
    ]);
  },
};

DatabaseSessionStorage.configure(adapter);`;

export const codeExampleSessionDatabaseSqlOracle = `import oracledb from "oracledb";
import {
  DatabaseSessionStorage,
  type SessionDatabaseAdapter,
} from "skyguard-js";

const conn = await oracledb.getConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionString: process.env.DB_CONNECTION_STRING,
});

const adapter: SessionDatabaseAdapter = {
  async findById(id) {
    const result = await conn.execute(
      "SELECT data, expires_at FROM sessions WHERE id = :id FETCH FIRST 1 ROWS ONLY",
      { id },
      { outFormat: oracledb.OUT_FORMAT_OBJECT },
    );
    const row = result.rows?.[0] as
      | { DATA: string; EXPIRES_AT: number }
      | undefined;
    if (!row) return null;
    return { data: JSON.parse(row.DATA), expiresAt: Number(row.EXPIRES_AT) };
  },
  async upsert(id, payload) {
    await conn.execute(
      "MERGE INTO sessions s " +
        "USING (SELECT :id id, :data data, :expires_at expires_at FROM dual) src " +
        "ON (s.id = src.id) " +
        "WHEN MATCHED THEN UPDATE SET s.data = src.data, s.expires_at = src.expires_at " +
        "WHEN NOT MATCHED THEN INSERT (id, data, expires_at) VALUES (src.id, src.data, src.expires_at)",
      { id, data: JSON.stringify(payload.data), expires_at: payload.expiresAt },
      { autoCommit: true },
    );
  },
  async deleteById(id) {
    await conn.execute("DELETE FROM sessions WHERE id = :id", { id }, { autoCommit: true });
  },
  async deleteExpired(now) {
    await conn.execute(
      "DELETE FROM sessions WHERE expires_at <= :now",
      { now },
      { autoCommit: true },
    );
  },
};

DatabaseSessionStorage.configure(adapter);`;

export const codeExampleSessionDatabaseOrmSequelize = `import { Sequelize, DataTypes, Model, Op } from "sequelize";
import {
  DatabaseSessionStorage,
  type SessionDatabaseAdapter,
} from "skyguard-js";

const sequelize = new Sequelize(process.env.DATABASE_URL!);

class SessionModel extends Model {
  declare id: string;
  declare data: string;
  declare expiresAt: number;
}

SessionModel.init(
  {
    id: { type: DataTypes.STRING(64), primaryKey: true },
    data: { type: DataTypes.TEXT, allowNull: false },
    expiresAt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: "expires_at",
    },
  },
  { sequelize, tableName: "sessions", timestamps: false },
);

const adapter: SessionDatabaseAdapter = {
  async findById(id) {
    const row = await SessionModel.findByPk(id);
    if (!row) return null;
    return { data: JSON.parse(row.data), expiresAt: Number(row.expiresAt) };
  },
  async upsert(id, payload) {
    await SessionModel.upsert({
      id,
      data: JSON.stringify(payload.data),
      expiresAt: payload.expiresAt,
    });
  },
  async deleteById(id) {
    await SessionModel.destroy({ where: { id } });
  },
  async deleteExpired(now) {
    await SessionModel.destroy({ where: { expiresAt: { [Op.lte]: now } } });
  },
};

DatabaseSessionStorage.configure(adapter);`;

export const codeExampleSessionDatabaseOrm = `import { PrismaClient } from "@prisma/client";
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

DatabaseSessionStorage.configure(adapter);`;

export const codeExampleSessionDatabaseOrmTypeOrm = `import {
  DataSource,
  Entity,
  Column,
  PrimaryColumn,
  LessThanOrEqual,
} from "typeorm";
import {
  DatabaseSessionStorage,
  type SessionDatabaseAdapter,
} from "skyguard-js";

@Entity({ name: "sessions" })
class SessionEntity {
  @PrimaryColumn({ type: "varchar", length: 64 })
  id!: string;

  @Column({ type: "text" })
  data!: string;

  @Column({ name: "expires_at", type: "bigint" })
  expiresAt!: string;
}

const ds = new DataSource({
  // Tu configuración de base de datos
  entities: [SessionEntity],
});
await ds.initialize();
const repo = ds.getRepository(SessionEntity);

const adapter: SessionDatabaseAdapter = {
  async findById(id) {
    const row = await repo.findOneBy({ id });
    if (!row) return null;
    return { data: JSON.parse(row.data), expiresAt: Number(row.expiresAt) };
  },
  async upsert(id, payload) {
    await repo.save({
      id,
      data: JSON.stringify(payload.data),
      expiresAt: String(payload.expiresAt),
    });
  },
  async deleteById(id) {
    await repo.delete({ id });
  },
  async deleteExpired(now) {
    await repo.delete({ expiresAt: LessThanOrEqual(String(now)) });
  },
};

DatabaseSessionStorage.configure(adapter);`;

export const codeExampleJwtLogin = `import { createApp, JWT, json, UnauthorizedError } from "skyguard-js";

const app = createApp();

app.post("/login", async (request) => {
  const { username, password } = request.body;

  // Retrieve user from database by username
  // Validate password hash
  const isValid = username === "admin" && password === "secret";

  if (!isValid) {
    throw new UnauthorizedError("Invalid credentials");
  }

  const token = JWT.create({ sub: "123", role: "admin" }, "secret-key", {
    algorithm: "HS256",
    expiresIn: "1h",
  });

  return json({ token });
});`;

export const codeExampleJwtMiddleware = `import {
  JWT,
  type Middleware,
  UnauthorizedError,
  json,
} from "skyguard-js";

const secret = "secret-key";

export const authJWT = (): Middleware => {
  return async (request, next) => {
    const authHeader = request.headers.authorization;

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

    request.state.user = user;
    return await next(request);
  };
};

app.get("/profile", [authJWT()], async (request) => {
  const user = request.state.user;
  return json({ user });
});`;

export const jwtAlgorithmsColumns: TableColumn<JwtAlgorithmRow>[] = [
  { header: "Algoritmo", accessor: "algorithm", emphasis: true },
  { header: "Tipo", accessor: "type" },
  { header: "Clave requerida", accessor: "keyRequirement" },
  { header: "Uso recomendado", accessor: "recommendedUsage" },
];

export const sessionSuggestedColumns: TableColumn<SessionSuggestedRow>[] = [
  { header: "Campo", accessor: "field", emphasis: true },
  { header: "Tipo recomendado", accessor: "dbType" },
  { header: "Descripción", accessor: "description" },
];

export const sessionSuggestedData: SessionSuggestedRow[] = [
  {
    field: "id",
    dbType: "string/varchar (primary key)",
    description: "Identificador único de la sesión",
  },
  {
    field: "key",
    dbType: "JSON/TEXT",
    description: "Objeto serializado con el contenido de la sesión",
  },
  {
    field: "expires_at",
    dbType: "bigint/timestamp (unix ms)",
    description: "Expiración de la sesión en milisegundos unix",
  },
];

export const jwtAlgorithmsData: JwtAlgorithmRow[] = [
  {
    algorithm: "HS256",
    type: "HMAC (simétrico)",
    keyRequirement: "Una clave secreta compartida",
    recommendedUsage: "Servicios internos con secreto robusto y rotación",
  },
  {
    algorithm: "HS384",
    type: "HMAC (simétrico)",
    keyRequirement: "Una clave secreta compartida",
    recommendedUsage: "Mismo caso que HS256 con digest más largo",
  },
  {
    algorithm: "HS512",
    type: "HMAC (simétrico)",
    keyRequirement: "Una clave secreta compartida",
    recommendedUsage: "Mayor margen criptográfico en entornos estrictos",
  },
  {
    algorithm: "RS256",
    type: "RSA (asimétrico)",
    keyRequirement: "Clave privada para firmar y pública para verificar",
    recommendedUsage: "APIs con emisores y verificadores separados",
  },
  {
    algorithm: "RS384",
    type: "RSA (asimétrico)",
    keyRequirement: "Clave privada para firmar y pública para verificar",
    recommendedUsage: "Variante RSA con digest más largo",
  },
  {
    algorithm: "RS512",
    type: "RSA (asimétrico)",
    keyRequirement: "Clave privada para firmar y pública para verificar",
    recommendedUsage: "Requerimientos altos de seguridad y compatibilidad RSA",
  },
];
