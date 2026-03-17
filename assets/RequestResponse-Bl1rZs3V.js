import{j as e}from"./index-9yXqAzJ7.js";import{C as t}from"./Callout-BzEIIO_Y.js";import{C as s}from"./CodeBlock-BHRitkc_.js";import"./createLucideIcon-BZu3VFx7.js";import"./triangle-alert-4N9rATx-.js";import"./copy-DET8tuUk.js";const o=`import { createApp } from "skyguard-js";
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
});`,c=`app.post("/profile", (context) => {
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
});`,n=`app.get("/debug/request", (context) => {
  const requestUrl = context.req.url;

  return context.res
    .setStatusCode(200)
    .setHeader("x-debug-url", requestUrl)
    .setContentType("application/json")
    .setContent(JSON.stringify({ requestUrl }));
});`,a=`app.get("/health", (context) => {
  return context.json({ status: "ok" });
});

app.get("/hello", (context) => {
  return context.text("Hello Skyguard");
});

app.get("/legacy-dashboard", (context) => {
  return context.redirect("/dashboard");
});`,r=`import { createReadStream } from "node:fs";

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
});`;function p(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"context",className:"docs-section",children:[e.jsx("h1",{children:"Contexto"}),e.jsxs("p",{children:[e.jsx("mark",{className:"docs-highlight",children:"Context"})," unifica los objetos"," ",e.jsx("mark",{className:"docs-highlight",children:"Request"})," y"," ",e.jsx("mark",{className:"docs-highlight",children:"Response"})," en una sola API para middlewares y handlers."]})]}),e.jsx("hr",{}),e.jsxs("section",{id:"context-accessors",className:"docs-section",children:[e.jsx("h2",{children:"Lectura de Datos de Petición"}),e.jsxs("p",{children:["Use ",e.jsx("mark",{className:"docs-highlight",children:"context.headers"}),","," ",e.jsx("mark",{className:"docs-highlight",children:"context.params"}),","," ",e.jsx("mark",{className:"docs-highlight",children:"context.query"})," y"," ",e.jsx("mark",{className:"docs-highlight",children:"context.remoteAddress"})," para leer datos de entrada."]}),e.jsx(s,{code:o})]}),e.jsxs("section",{id:"context-body-cookies-session",className:"docs-section",children:[e.jsx("h2",{children:"Body, Cookies y Session"}),e.jsxs("p",{children:["Con ",e.jsx("mark",{className:"docs-highlight",children:"context.body"}),","," ",e.jsx("mark",{className:"docs-highlight",children:"context.cookies"})," y"," ",e.jsx("mark",{className:"docs-highlight",children:"context.session"})," puede acceder al payload, cookies y sesión activa."]}),e.jsx(s,{code:c})]}),e.jsxs("section",{id:"context-req-res",className:"docs-section",children:[e.jsx("h2",{children:"Acceso Directo a req y res"}),e.jsxs("p",{children:["Si necesita control detallado puede usar"," ",e.jsx("mark",{className:"docs-highlight",children:"context.req"})," y"," ",e.jsx("mark",{className:"docs-highlight",children:"context.res"}),"."]}),e.jsx(s,{code:n}),e.jsxs(t,{variant:"tip",children:["Prefiera los helpers de ",e.jsx("mark",{className:"docs-highlight",children:"context"})," ","para la mayoría de los casos y use ",e.jsx("mark",{className:"docs-highlight",children:"res"})," ","cuando necesite personalización avanzada."]})]}),e.jsxs("section",{id:"context-common-responses",className:"docs-section",children:[e.jsx("h2",{children:"Respuestas Comunes"}),e.jsxs("p",{children:["Para respuestas frecuentes use"," ",e.jsx("mark",{className:"docs-highlight",children:"context.json()"}),","," ",e.jsx("mark",{className:"docs-highlight",children:"context.text()"})," y"," ",e.jsx("mark",{className:"docs-highlight",children:"context.redirect()"}),"."]}),e.jsx(s,{code:a})]}),e.jsxs("section",{id:"context-files-stream-render",className:"docs-section",children:[e.jsx("h2",{children:"Archivos, Stream y Render"}),e.jsxs("p",{children:["También puede responder con archivos, streams o vistas usando"," ",e.jsx("mark",{className:"docs-highlight",children:"context.download()"}),","," ",e.jsx("mark",{className:"docs-highlight",children:"context.sendFile()"}),","," ",e.jsx("mark",{className:"docs-highlight",children:"context.stream()"})," y"," ",e.jsx("mark",{className:"docs-highlight",children:"context.render()"}),"."]}),e.jsx(s,{code:r}),e.jsxs(t,{variant:"danger",children:["Antes de usar ",e.jsx("mark",{className:"docs-highlight",children:"context.sendFile()"})," ","o ",e.jsx("mark",{className:"docs-highlight",children:"context.download()"}),", valide rutas para evitar exponer archivos sensibles."]})]})]})}export{p as default};
