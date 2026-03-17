import{j as e}from"./index-pCHeKE6s.js";import{C as o}from"./Callout-BnL3Oqd5.js";import{C as t}from"./CodeBlock-BMo5DT2Y.js";import{u as n}from"./createLucideIcon-CVdvy-R-.js";import"./triangle-alert-C-Z-AC2M.js";import"./copy-DCtwDaR9.js";const r=`import { createApp } from "skyguard-js";
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
});`,a=`app.get("/debug/request", (context) => {
  const requestUrl = context.req.url;

  return context.res
    .setStatusCode(200)
    .setHeader("x-debug-url", requestUrl)
    .setContentType("application/json")
    .setContent(JSON.stringify({ requestUrl }));
});`,d=`app.get("/health", (context) => {
  return context.json({ status: "ok" });
});

app.get("/hello", (context) => {
  return context.text("Hello Skyguard");
});

app.get("/legacy-dashboard", (context) => {
  return context.redirect("/dashboard");
});`,i=`import { createReadStream } from "node:fs";

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
});`;function g(){const{t:s}=n();return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"context",className:"docs-section",children:[e.jsx("h1",{children:s("requestResponse.page.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:s("requestResponse.page.lead")}})]}),e.jsx("hr",{}),e.jsxs("section",{id:"context-accessors",className:"docs-section",children:[e.jsx("h2",{children:s("requestResponse.accessors.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:s("requestResponse.accessors.description")}}),e.jsx(t,{code:r})]}),e.jsxs("section",{id:"context-body-cookies-session",className:"docs-section",children:[e.jsx("h2",{children:s("requestResponse.bodyCookiesSession.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:s("requestResponse.bodyCookiesSession.description")}}),e.jsx(t,{code:c})]}),e.jsxs("section",{id:"context-req-res",className:"docs-section",children:[e.jsx("h2",{children:s("requestResponse.reqRes.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:s("requestResponse.reqRes.description")}}),e.jsx(t,{code:a}),e.jsx(o,{variant:"tip",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:s("requestResponse.reqRes.tip")}})})]}),e.jsxs("section",{id:"context-common-responses",className:"docs-section",children:[e.jsx("h2",{children:s("requestResponse.commonResponses.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:s("requestResponse.commonResponses.description")}}),e.jsx(t,{code:d})]}),e.jsxs("section",{id:"context-files-stream-render",className:"docs-section",children:[e.jsx("h2",{children:s("requestResponse.filesStreamRender.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:s("requestResponse.filesStreamRender.description")}}),e.jsx(t,{code:i}),e.jsx(o,{variant:"danger",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:s("requestResponse.filesStreamRender.danger")}})})]})]})}export{g as default};
