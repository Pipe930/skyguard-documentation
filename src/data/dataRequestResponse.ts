export const codeExampleRequestBasics = `import { createApp, Response } from "skyguard-js";
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

export const codeExampleRequestBodyAndState = `app.post("/users", (request) => {
  const { name, email } = request.body;
  request.state.traceId = crypto.randomUUID();

  return Response.json({
    message: "user created",
    payload: { name, email },
    traceId: request.state.traceId,
  });
});`;

export const codeExampleRequestCookies = `app.get("/profile", (request) => {
  if (!request.hasCookie("session_id")) {
    return Response.json({ message: "session cookie is required" })
      .setStatusCode(401);
  }

  return Response.json({
    cookies: request.cookies,
    session: request.session,
  });
});`;

export const codeExampleResponseFluent = `app.post("/users", async (request) => {
  const user = await saveUser(request.body);

  return new Response()
    .setStatusCode(201)
    .setHeader("x-resource-id", String(user.id))
    .setContentType("application/json")
    .setContent(JSON.stringify(user));
});`;

export const codeExampleResponseCookiesHeaders = `app.get("/auth/login", () => {
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

export const codeExampleResponseStatic = `app.get("/health", () => Response.json({ status: "ok" }));

app.get("/hello", () => Response.text("Hello Skyguard"));

app.get("/old-dashboard", () => Response.redirect("/dashboard"));`;

export const codeExampleResponseFilesStream = `import { createReadStream } from "node:fs";

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
