import{j as e}from"./index-CVLVyqCr.js";import{C as i}from"./Callout-CPEMqqow.js";import{C as s}from"./CodeBlock-DqpFqFhe.js";import"./createLucideIcon-Ie-Bw47j.js";import"./triangle-alert-Bsll79NY.js";import"./copy-1r-K9xfu.js";const t=`import { rateLimit } from "skyguard-js";

const apiRateLimit = rateLimit({
  windowMs: 60_000, // 1 minuto
  max: 100,
  message: "Demasiadas solicitudes desde esta IP",
  trustProxy: true, // habilitar solo detrás de proxies reversos confiables
});

app.get("/api/users", [apiRateLimit], (ctx) => {
  return ctx.json([{ id: 1 }]);
});`,a=`const authRateLimit = rateLimit({
  windowMs: 15 * 60_000, // 15 minutos
  max: 20,
  message: "Has excedido el límite de intentos, inténtalo más tarde",
});

app.post("/auth/login", [authRateLimit], async (ctx) => {
  // lógica de login
  return ctx.json({ ok: true });
});`,r=`import { rateLimit } from "skyguard-js";

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
});`,o=`const healthLimit = rateLimit({
  windowMs: 60_000,
  max: 60,
  skip: (ctx) => {
    // no limitar healthcheck interno
    return ctx.req.url === "/health";
  },
});

app.get("/health", [healthLimit], (ctx) => {
  return ctx.text("ok");
});`,c=`import { rateLimit } from "skyguard-js";

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
});`,n=`import { rateLimit } from "skyguard-js";
import { redisRateLimitStore } from "./rate-limit-store";

const sharedLimit = rateLimit({
  windowMs: 60_000,
  max: 100,
  store: redisRateLimitStore, // implementa RateLimitStore
  cleanupIntervalMs: 30_000,
});

app.get("/api/data", [sharedLimit], (ctx) => {
  return ctx.json({ ok: true });
});`;function x(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"rate-limiting",className:"docs-section",children:[e.jsx("h1",{children:"Rate Limiting"}),e.jsx("p",{children:"El rate limiting limita la cantidad de solicitudes que un cliente puede realizar en una ventana de tiempo. Es una capa clave para proteger tu API de abuso, fuerza bruta y picos de tráfico no controlados."})]}),e.jsx("hr",{}),e.jsxs("section",{id:"rate-limiting-importance",className:"docs-section",children:[e.jsx("h2",{children:"¿Para qué se utiliza?"}),e.jsxs("ul",{className:"docs-lists",children:[e.jsx("li",{children:"Reducir ataques de fuerza bruta en login y endpoints sensibles."}),e.jsx("li",{children:"Evitar saturación del servidor por tráfico excesivo."}),e.jsx("li",{children:"Proteger recursos costosos como búsquedas o exportaciones."}),e.jsx("li",{children:"Mejorar estabilidad general bajo alta concurrencia."})]})]}),e.jsxs("section",{id:"rate-limiting-middleware",className:"docs-section",children:[e.jsx("h2",{children:"Uso básico del middleware rateLimit()"}),e.jsxs("p",{children:["Puedes limitar solicitudes con el middleware integrado"," ",e.jsx("mark",{className:"docs-highlight",children:"rateLimit"}),"."]}),e.jsx(s,{code:t})]}),e.jsxs("section",{id:"rate-limiting-sensitive-routes",className:"docs-section",children:[e.jsx("h2",{children:"Ejemplo en rutas sensibles"}),e.jsx("p",{children:"Es recomendable aplicar límites más estrictos en endpoints de autenticación o recuperación de cuentas."}),e.jsx(s,{code:a})]}),e.jsxs("section",{id:"rate-limiting-key-generator",className:"docs-section",children:[e.jsx("h2",{children:"Personalizar keyGenerator"}),e.jsxs("p",{children:["Por defecto se usa IP (considerando"," ",e.jsx("mark",{className:"docs-highlight",children:"trustProxy"}),"). Si quieres cuotas por usuario autenticado, define"," ",e.jsx("mark",{className:"docs-highlight",children:"keyGenerator"}),"."]}),e.jsx(s,{code:r})]}),e.jsxs("section",{id:"rate-limiting-skip",className:"docs-section",children:[e.jsx("h2",{children:"Omitir rutas con skip"}),e.jsxs("p",{children:["Usa ",e.jsx("mark",{className:"docs-highlight",children:"skip"})," para excluir rutas o condiciones específicas del conteo."]}),e.jsx(s,{code:o})]}),e.jsxs("section",{id:"rate-limiting-custom-handler",className:"docs-section",children:[e.jsx("h2",{children:"Respuesta personalizada con handler"}),e.jsxs("p",{children:["Puedes ajustar ",e.jsx("mark",{className:"docs-highlight",children:"statusCode"}),","," ",e.jsx("mark",{className:"docs-highlight",children:"message"})," y definir un"," ",e.jsx("mark",{className:"docs-highlight",children:"handler"})," para retornar un formato de error propio. También puedes controlar headers con"," ",e.jsx("mark",{className:"docs-highlight",children:"standardHeaders"})," y"," ",e.jsx("mark",{className:"docs-highlight",children:"legacyHeaders"}),"."]}),e.jsx(s,{code:c})]}),e.jsxs("section",{id:"rate-limiting-multi-instance",className:"docs-section",children:[e.jsx("h2",{children:"Despliegues multi-instancia"}),e.jsxs("p",{children:["En despliegues con múltiples instancias, provee un store compartido (por ejemplo Redis) implementando la interfaz"," ",e.jsx("mark",{className:"docs-highlight",children:"RateLimitStore"})," y pasándolo en"," ",e.jsx("mark",{className:"docs-highlight",children:"store"}),"."]}),e.jsx(i,{variant:"warn",children:"Si no usas un store compartido, cada instancia contará solicitudes por separado y los límites globales perderán precisión."}),e.jsx(s,{code:n})]}),e.jsxs("section",{id:"rate-limiting-best-practices",className:"docs-section",children:[e.jsx("h2",{children:"Buenas prácticas"}),e.jsxs("ul",{className:"docs-lists",children:[e.jsx("li",{children:"Usa límites estrictos para login, recuperación de cuenta y endpoints de alto costo."}),e.jsxs("li",{children:["Habilita ",e.jsx("mark",{className:"docs-highlight",children:"trustProxy"})," solo si tu API está detrás de un proxy reverso confiable."]}),e.jsxs("li",{children:["Mantén ",e.jsx("mark",{className:"docs-highlight",children:"standardHeaders"})," activos para facilitar observabilidad en clientes y gateways."]}),e.jsxs("li",{children:["En clúster o serverless multi-nodo, usa"," ",e.jsx("mark",{className:"docs-highlight",children:"store"})," compartido para evitar límites inconsistentes."]})]})]})]})}export{x as default};
