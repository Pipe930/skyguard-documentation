import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";

const codeExampleRateLimit = `import { rateLimit } from "skyguard-js";

const apiRateLimit = rateLimit({
  windowMs: 60_000, // 1 minuto
  max: 100,
  message: "Demasiadas solicitudes desde esta IP",
  trustProxy: true, // habilitar solo detrás de proxies reversos confiables
});

app.get("/api/users", [apiRateLimit], (ctx) => {
  return ctx.json([{ id: 1 }]);
});`;

const codeExampleRateLimitGlobal = `const authRateLimit = rateLimit({
  windowMs: 15 * 60_000, // 15 minutos
  max: 20,
  message: "Has excedido el límite de intentos, inténtalo más tarde",
});

app.post("/auth/login", [authRateLimit], async (ctx) => {
  // lógica de login
  return ctx.json({ ok: true });
});`;

const codeExampleRateLimitCustomKey = `import { rateLimit } from "skyguard-js";

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

const codeExampleRateLimitSkip = `const healthLimit = rateLimit({
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

const codeExampleRateLimitHandler = `import { rateLimit } from "skyguard-js";

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

const codeExampleRateLimitStore = `import { rateLimit } from "skyguard-js";
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

function RateLimiting() {
  return (
    <>
      <section id="rate-limiting" className="docs-section">
        <h1>Rate Limiting</h1>
        <p>
          El rate limiting limita la cantidad de solicitudes que un cliente puede
          realizar en una ventana de tiempo. Es una capa clave para proteger tu
          API de abuso, fuerza bruta y picos de tráfico no controlados.
        </p>
      </section>
      <hr />

      <section id="rate-limiting-importance" className="docs-section">
        <h2>¿Para qué se utiliza?</h2>
        <ul className="docs-lists">
          <li>Reducir ataques de fuerza bruta en login y endpoints sensibles.</li>
          <li>Evitar saturación del servidor por tráfico excesivo.</li>
          <li>Proteger recursos costosos como búsquedas o exportaciones.</li>
          <li>Mejorar estabilidad general bajo alta concurrencia.</li>
        </ul>
      </section>

      <section id="rate-limiting-middleware" className="docs-section">
        <h2>Uso básico del middleware rateLimit()</h2>
        <p>
          Puedes limitar solicitudes con el middleware integrado{" "}
          <mark className="docs-highlight">rateLimit</mark>.
        </p>
        <CodeBlock code={codeExampleRateLimit} />
      </section>

      <section id="rate-limiting-sensitive-routes" className="docs-section">
        <h2>Ejemplo en rutas sensibles</h2>
        <p>
          Es recomendable aplicar límites más estrictos en endpoints de
          autenticación o recuperación de cuentas.
        </p>
        <CodeBlock code={codeExampleRateLimitGlobal} />
      </section>

      <section id="rate-limiting-key-generator" className="docs-section">
        <h2>Personalizar keyGenerator</h2>
        <p>
          Por defecto se usa IP (considerando{" "}
          <mark className="docs-highlight">trustProxy</mark>). Si quieres cuotas
          por usuario autenticado, define{" "}
          <mark className="docs-highlight">keyGenerator</mark>.
        </p>
        <CodeBlock code={codeExampleRateLimitCustomKey} />
      </section>

      <section id="rate-limiting-skip" className="docs-section">
        <h2>Omitir rutas con skip</h2>
        <p>
          Usa <mark className="docs-highlight">skip</mark> para excluir rutas o
          condiciones específicas del conteo.
        </p>
        <CodeBlock code={codeExampleRateLimitSkip} />
      </section>

      <section id="rate-limiting-custom-handler" className="docs-section">
        <h2>Respuesta personalizada con handler</h2>
        <p>
          Puedes ajustar <mark className="docs-highlight">statusCode</mark>,{" "}
          <mark className="docs-highlight">message</mark> y definir un{" "}
          <mark className="docs-highlight">handler</mark> para retornar un formato
          de error propio. También puedes controlar headers con{" "}
          <mark className="docs-highlight">standardHeaders</mark> y{" "}
          <mark className="docs-highlight">legacyHeaders</mark>.
        </p>
        <CodeBlock code={codeExampleRateLimitHandler} />
      </section>

      <section id="rate-limiting-multi-instance" className="docs-section">
        <h2>Despliegues multi-instancia</h2>
        <p>
          En despliegues con múltiples instancias, provee un store compartido
          (por ejemplo Redis) implementando la interfaz{" "}
          <mark className="docs-highlight">RateLimitStore</mark> y pasándolo en{" "}
          <mark className="docs-highlight">store</mark>.
        </p>
        <Callout variant="warn">
          Si no usas un store compartido, cada instancia contará solicitudes por
          separado y los límites globales perderán precisión.
        </Callout>
        <CodeBlock code={codeExampleRateLimitStore} />
      </section>

      <section id="rate-limiting-best-practices" className="docs-section">
        <h2>Buenas prácticas</h2>
        <ul className="docs-lists">
          <li>
            Usa límites estrictos para login, recuperación de cuenta y endpoints
            de alto costo.
          </li>
          <li>
            Habilita <mark className="docs-highlight">trustProxy</mark> solo si tu
            API está detrás de un proxy reverso confiable.
          </li>
          <li>
            Mantén <mark className="docs-highlight">standardHeaders</mark> activos
            para facilitar observabilidad en clientes y gateways.
          </li>
          <li>
            En clúster o serverless multi-nodo, usa{" "}
            <mark className="docs-highlight">store</mark> compartido para evitar
            límites inconsistentes.
          </li>
        </ul>
      </section>
    </>
  );
}

export default RateLimiting;
