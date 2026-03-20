import{j as t}from"./index-BYLENJzT.js";import{C as o}from"./Callout-CNABm0bs.js";import{C as i}from"./CodeBlock-BktDhWg6.js";import{u as c}from"./createLucideIcon-CNrYo-mO.js";import"./triangle-alert-svta8DRN.js";import"./copy-CaZlgTTj.js";const m=`import { rateLimit } from "skyguard-js";

const apiRateLimit = rateLimit({
  windowMs: 60_000, // 1 minuto
  max: 100,
  message: "Demasiadas solicitudes desde esta IP",
  trustProxy: true, // habilitar solo detrás de proxies reversos confiables
});

app.get("/api/users", [apiRateLimit], (ctx) => {
  return ctx.json([{ id: 1 }]);
});`,d=`const authRateLimit = rateLimit({
  windowMs: 15 * 60_000, // 15 minutos
  max: 20,
  message: "Has excedido el límite de intentos, inténtalo más tarde",
});

app.post("/auth/login", [authRateLimit], async (ctx) => {
  // lógica de login
  return ctx.json({ ok: true });
});`,l=`import { rateLimit } from "skyguard-js";

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
});`,x=`const healthLimit = rateLimit({
  windowMs: 60_000,
  max: 60,
  skip: (ctx) => {
    // no limitar healthcheck interno
    return ctx.req.url === "/health";
  },
});

app.get("/health", [healthLimit], (ctx) => {
  return ctx.text("ok");
});`,p=`import { rateLimit } from "skyguard-js";

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
});`,u=`import { rateLimit } from "skyguard-js";
import { redisRateLimitStore } from "./rate-limit-store";

const sharedLimit = rateLimit({
  windowMs: 60_000,
  max: 100,
  store: redisRateLimitStore, // implementa RateLimitStore
  cleanupIntervalMs: 30_000,
});

app.get("/api/data", [sharedLimit], (ctx) => {
  return ctx.json({ ok: true });
});`;function w(){const{t:e}=c(),a=e("rateLimiting.importance.items",{returnObjects:!0}),n=e("rateLimiting.bestPractices.items",{returnObjects:!0});return t.jsxs(t.Fragment,{children:[t.jsxs("section",{id:"rate-limiting",className:"docs-section",children:[t.jsx("h1",{children:e("rateLimiting.page.title")}),t.jsx("p",{children:e("rateLimiting.page.lead")})]}),t.jsx("hr",{}),t.jsxs("section",{id:"rate-limiting-importance",className:"docs-section",children:[t.jsx("h2",{children:e("rateLimiting.importance.title")}),t.jsx("ul",{className:"docs-lists",children:a.map((s,r)=>t.jsx("li",{children:s},r))})]}),t.jsxs("section",{id:"rate-limiting-middleware",className:"docs-section",children:[t.jsx("h2",{children:e("rateLimiting.middleware.title")}),t.jsx("p",{dangerouslySetInnerHTML:{__html:e("rateLimiting.middleware.description")}}),t.jsx(i,{code:m})]}),t.jsxs("section",{id:"rate-limiting-sensitive-routes",className:"docs-section",children:[t.jsx("h2",{children:e("rateLimiting.sensitiveRoutes.title")}),t.jsx("p",{children:e("rateLimiting.sensitiveRoutes.description")}),t.jsx(i,{code:d})]}),t.jsxs("section",{id:"rate-limiting-key-generator",className:"docs-section",children:[t.jsx("h2",{children:e("rateLimiting.keyGenerator.title")}),t.jsx("p",{dangerouslySetInnerHTML:{__html:e("rateLimiting.keyGenerator.description")}}),t.jsx(i,{code:l})]}),t.jsxs("section",{id:"rate-limiting-skip",className:"docs-section",children:[t.jsx("h2",{children:e("rateLimiting.skip.title")}),t.jsx("p",{dangerouslySetInnerHTML:{__html:e("rateLimiting.skip.description")}}),t.jsx(i,{code:x})]}),t.jsxs("section",{id:"rate-limiting-custom-handler",className:"docs-section",children:[t.jsx("h2",{children:e("rateLimiting.customHandler.title")}),t.jsx("p",{dangerouslySetInnerHTML:{__html:e("rateLimiting.customHandler.description")}}),t.jsx(i,{code:p})]}),t.jsxs("section",{id:"rate-limiting-multi-instance",className:"docs-section",children:[t.jsx("h2",{children:e("rateLimiting.multiInstance.title")}),t.jsx("p",{dangerouslySetInnerHTML:{__html:e("rateLimiting.multiInstance.description")}}),t.jsx(o,{variant:"warn",children:e("rateLimiting.multiInstance.warn")}),t.jsx(i,{code:u})]}),t.jsxs("section",{id:"rate-limiting-best-practices",className:"docs-section",children:[t.jsx("h2",{children:e("rateLimiting.bestPractices.title")}),t.jsx("ul",{className:"docs-lists",children:n.map((s,r)=>t.jsx("li",{children:t.jsx("span",{dangerouslySetInnerHTML:{__html:s}})},r))})]})]})}export{w as default};
