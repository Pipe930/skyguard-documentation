import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";

const codeExampleRequestBasics = `import { createApp, Response } from "skyguard-js";
const app = createApp();

app.get("/users/{id}", (request) => {
  const { id } = request.params;
  const { includePosts } = request.query;
  const userAgent = request.headers["user-agent"];

  return Response.json({
    id,
    includePosts,
    userAgent,
    method: request.method,
    url: request.url,
  });
});`;

const codeExampleRequestBodyAndState = `app.post("/users", (request) => {
  const { name, email } = request.body;
  request.state.traceId = crypto.randomUUID();

  return Response.json({
    message: "user created",
    payload: { name, email },
    traceId: request.state.traceId,
  });
});`;

const codeExampleRequestCookies = `app.get("/profile", (request) => {
  if (!request.hasCookie("session_id")) {
    return Response.json({ message: "session cookie is required" })
      .setStatusCode(401);
  }

  return Response.json({
    cookies: request.cookies,
    session: request.session,
  });
});`;

const codeExampleResponseFluent = `app.post("/users", async (request) => {
  const user = await saveUser(request.body);

  return new Response()
    .setStatusCode(201)
    .setHeader("x-resource-id", String(user.id))
    .setContentType("application/json")
    .setContent(JSON.stringify(user));
});`;

const codeExampleResponseCookiesHeaders = `app.get("/auth/login", () => {
  return Response.json({ ok: true })
    .setCookie("session_id", "abc123", {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    })
    .setHeader("cache-control", "no-store");
});

app.post("/auth/logout", () => {
  return Response.text("session closed")
    .removeCookie("session_id")
    .removeHeader("x-debug");
});`;

const codeExampleResponseStatic = `app.get("/health", () => Response.json({ status: "ok" }));

app.get("/hello", () => Response.text("Hello Skyguard"));

app.get("/old-dashboard", () => Response.redirect("/dashboard"));`;

const codeExampleResponseFilesStream = `import { createReadStream } from "node:fs";

app.get("/reports/download", async () => {
  return await Response.download("./uploads/report.pdf", "report.pdf");
});

app.get("/reports/preview", async () => {
  return await Response.sendFile("./uploads/report.pdf");
});

app.get("/events", () => {
  const stream = createReadStream("./logs/events.log");
  return Response.stream(stream, {
    "content-type": "text/plain; charset=utf-8",
  });
});

app.get("/dashboard", async () => {
  return await Response.render("dashboard/index", { title: "Admin" });
});`;

function RequestResponse() {
  return (
    <>
      <section id="request-response" className="docs-section">
        <h1>Request & Response</h1>
        <p>
          <mark className="docs-highlight">Request</mark> representa la petición
          entrante y <mark className="docs-highlight">Response</mark> representa
          la respuesta saliente. Ambos objetos cubren el flujo completo de una
          ruta HTTP.
        </p>
      </section>
      <hr />
      <section id="request-object" className="docs-section">
        <h2>Request</h2>
        <p>
          Use <mark className="docs-highlight">request.url</mark>,{" "}
          <mark className="docs-highlight">request.method</mark>,{" "}
          <mark className="docs-highlight">request.headers</mark>,{" "}
          <mark className="docs-highlight">request.params</mark> y{" "}
          <mark className="docs-highlight">request.query</mark> para leer
          contexto de la petición.
        </p>
        <CodeBlock code={codeExampleRequestBasics} />
      </section>
      <section id="request-body-state" className="docs-section">
        <h2>Body, State y Session</h2>
        <p>
          Con <mark className="docs-highlight">request.body</mark> obtiene el
          payload enviado por el cliente y con{" "}
          <mark className="docs-highlight">request.state</mark> puede compartir
          datos entre middlewares y handlers.
        </p>
        <CodeBlock code={codeExampleRequestBodyAndState} />
        <Callout variant="info">
          <mark className="docs-highlight">request.state</mark> dura solo durante
          la petición actual. No reemplaza sesiones ni almacenamiento persistente.
        </Callout>
      </section>
      <section id="request-cookies" className="docs-section">
        <h2>Cookies</h2>
        <p>
          Acceda a cookies con{" "}
          <mark className="docs-highlight">request.cookies</mark> y valide su
          existencia con <mark className="docs-highlight">request.hasCookie()</mark>.
        </p>
        <CodeBlock code={codeExampleRequestCookies} />
        <Callout variant="tip">
          Valide formato y expiración de cookies antes de confiar en sus valores.
        </Callout>
      </section>
      <section id="response-object" className="docs-section">
        <h2>Response</h2>
        <p>
          El API fluido permite encadenar{" "}
          <mark className="docs-highlight">setStatusCode()</mark>,{" "}
          <mark className="docs-highlight">setHeader()</mark>,{" "}
          <mark className="docs-highlight">setContentType()</mark> y{" "}
          <mark className="docs-highlight">setContent()</mark>.
        </p>
        <CodeBlock code={codeExampleResponseFluent} />
      </section>
      <section id="response-cookies-headers" className="docs-section">
        <h2>Headers y Cookies</h2>
        <p>
          Use <mark className="docs-highlight">setHeaders()</mark>,{" "}
          <mark className="docs-highlight">setHeader()</mark>,{" "}
          <mark className="docs-highlight">removeHeader()</mark>,{" "}
          <mark className="docs-highlight">setCookie()</mark> y{" "}
          <mark className="docs-highlight">removeCookie()</mark> para controlar
          metadatos de respuesta.
        </p>
        <CodeBlock code={codeExampleResponseCookiesHeaders} />
        <Callout variant="warn">
          Configure <mark className="docs-highlight">httpOnly</mark>,{" "}
          <mark className="docs-highlight">secure</mark> y{" "}
          <mark className="docs-highlight">sameSite</mark> en cookies de sesión.
        </Callout>
      </section>
      <section id="response-static-methods" className="docs-section">
        <h2>Métodos Estáticos</h2>
        <p>
          Para respuestas comunes use{" "}
          <mark className="docs-highlight">Response.json()</mark>,{" "}
          <mark className="docs-highlight">Response.text()</mark> y{" "}
          <mark className="docs-highlight">Response.redirect()</mark>.
        </p>
        <CodeBlock code={codeExampleResponseStatic} />
      </section>
      <section id="response-files-stream" className="docs-section">
        <h2>Archivos, Stream y Render</h2>
        <p>
          También puede responder con archivos, streams o vistas usando{" "}
          <mark className="docs-highlight">Response.download()</mark>,{" "}
          <mark className="docs-highlight">Response.sendFile()</mark>,{" "}
          <mark className="docs-highlight">Response.stream()</mark> y{" "}
          <mark className="docs-highlight">Response.render()</mark>.
        </p>
        <CodeBlock code={codeExampleResponseFilesStream} />
        <Callout variant="danger">
          Antes de usar <mark className="docs-highlight">sendFile()</mark> o{" "}
          <mark className="docs-highlight">download()</mark>, valide rutas para
          evitar exponer archivos sensibles.
        </Callout>
      </section>
    </>
  );
}

export default RequestResponse;
