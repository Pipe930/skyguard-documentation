export const codeExampleContextBasics = `import { createApp } from "skyguard-js";
const app = createApp();

app.get("/users/{id}", (context) => {
  const { id } = context.params;
  const { includePosts } = context.query;
  const userAgent = context.headers["user-agent"];

  return context.json({
    id,
    includePosts,
    userAgent,
    remoteAddress: context.remoteAddress,
  });
});`;

export const codeExampleContextBodyCookiesSession = `app.post("/profile", (context) => {
  const { name } = context.body;
  const sessionId = context.cookies.session_id;

  if (!sessionId) {
    return context.text("session cookie is required");
  }

  context.session.set("lastProfileUpdate", new Date().toISOString());

  return context.json({
    message: "profile updated",
    name,
    sessionId,
  });
});`;

export const codeExampleContextReqRes = `app.get("/debug/request", (context) => {
  const requestUrl = context.req.url;

  return context.res
    .setStatusCode(200)
    .setHeader("x-debug-url", requestUrl)
    .setContentType("application/json")
    .setContent(JSON.stringify({ requestUrl }));
});`;

export const codeExampleContextCommonResponses = `app.get("/health", (context) => {
  return context.json({ status: "ok" });
});

app.get("/hello", (context) => {
  return context.text("Hello Skyguard");
});

app.get("/legacy-dashboard", (context) => {
  return context.redirect("/dashboard");
});`;

export const codeExampleContextFilesStreamRender = `import { createReadStream } from "node:fs";

app.get("/reports/download", async (context) => {
  return await context.download("./uploads/report.pdf", "report.pdf");
});

app.get("/reports/preview", async (context) => {
  return await context.sendFile("./uploads/report.pdf", {
    headers: { "cache-control": "no-store" },
  });
});

app.get("/events", (context) => {
  const stream = createReadStream("./logs/events.log");
  return context.stream(stream, {
    "content-type": "text/plain; charset=utf-8",
  });
});

app.get("/dashboard", async (context) => {
  return await context.render("dashboard/index", { title: "Admin" });
});`;
