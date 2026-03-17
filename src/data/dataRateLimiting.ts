export const codeExampleRateLimit = `import { rateLimit } from "skyguard-js";

const apiRateLimit = rateLimit({
  windowMs: 60_000, // 1 minuto
  max: 100,
  message: "Demasiadas solicitudes desde esta IP",
  trustProxy: true, // habilitar solo detrás de proxies reversos confiables
});

app.get("/api/users", [apiRateLimit], (ctx) => {
  return ctx.json([{ id: 1 }]);
});`;

export const codeExampleRateLimitGlobal = `const authRateLimit = rateLimit({
  windowMs: 15 * 60_000, // 15 minutos
  max: 20,
  message: "Has excedido el límite de intentos, inténtalo más tarde",
});

app.post("/auth/login", [authRateLimit], async (ctx) => {
  // lógica de login
  return ctx.json({ ok: true });
});`;

export const codeExampleRateLimitCustomKey = `import { rateLimit } from "skyguard-js";

const userAwareLimit = rateLimit({
  windowMs: 60_000,
  max: 30,
  keyGenerator: (ctx) => {
    const userId = ctx.session.get("userId");
    return userId ? \`user:\${userId}\` : \`ip:\${ctx.remoteAddress ?? "unknown"}\`;
  },
});

app.get("/api/profile", [userAwareLimit], (ctx) => {
  return ctx.json({ ok: true });
});`;

export const codeExampleRateLimitSkip = `const healthLimit = rateLimit({
  windowMs: 60_000,
  max: 60,
  skip: (ctx) => {
    // no limitar healthcheck interno
    return ctx.req.url === "/health";
  },
});

app.get("/health", [healthLimit], (ctx) => {
  return ctx.text("ok");
});`;

export const codeExampleRateLimitHandler = `import { rateLimit } from "skyguard-js";

const strictLimit = rateLimit({
  windowMs: 10 * 60_000,
  max: 10,
  statusCode: 429,
  message: "Límite excedido para esta operación",
  standardHeaders: true,
  legacyHeaders: false,
  handler: (ctx) => {
    return ctx.json({
      ok: false,
      error: "too_many_requests",
      message: "Espera unos minutos antes de reintentar",
    });
  },
});

app.post("/auth/recover", [strictLimit], (ctx) => {
  return ctx.json({ ok: true });
});`;

export const codeExampleRateLimitStore = `import { rateLimit } from "skyguard-js";
import { redisRateLimitStore } from "./rate-limit-store";

const sharedLimit = rateLimit({
  windowMs: 60_000,
  max: 100,
  store: redisRateLimitStore, // implementa RateLimitStore
  cleanupIntervalMs: 30_000,
});

app.get("/api/data", [sharedLimit], (ctx) => {
  return ctx.json({ ok: true });
});`;
