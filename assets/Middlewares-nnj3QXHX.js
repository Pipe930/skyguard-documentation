import{j as e}from"./index-AJrTjCO-.js";import{C as t}from"./Callout-CrxKFo1l.js";import{C as d}from"./CodeBlock-BFJ7rdmv.js";import{u as r}from"./createLucideIcon-BXFtYZs2.js";import"./triangle-alert-DMqqz8xL.js";import"./copy-qIaFTmYD.js";const i=`import { createApp } from "skyguard-js";

const authMiddleware = async (ctx, next) => {
  if (ctx.headers["authorization"] !== "secret") {
    return ctx.json({ message: "Unauthorized" }).setStatus(401);
  }

  return await next(ctx); // Call next to continue to the next handler
};

const app = createApp();

app.middlewares(authMiddleware);

app.get("/", (ctx) => ctx.text("hola"));`,a=`const first = async (ctx, next) => {
  console.log("1");
  return await next(ctx);
};
 
const second = async (ctx, next) => {
  console.log("2");
  return await next(ctx);
};
 
app.middlewares(first, second);

// Request will log: 1, 2`,c=`// Global Middleware
app.middlewares(authMiddleware);

// Group Middleware
app.group("/users", (router) => {
  router.middlewares(authMiddleware);
  router.get("/", (ctx) => ctx.text("hola"));
});

// Route-Specific Middleware
app.get("/", [authMiddleware], (ctx) => ctx.text("hola2"));`,o=`app.get(
"/", 
[authMiddleware, adminCheck, logger, rateLimiter], 
(ctx) => {
  return ctx.json({ message: "holamundo" })
});`;function w(){const{t:s}=r();return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"middlewares",className:"docs-section",children:[e.jsx("h1",{children:s("middlewares.page.title")}),e.jsx("p",{children:s("middlewares.page.lead")})]}),e.jsxs("section",{id:"basic-middlewares",className:"docs-section",children:[e.jsx("h2",{children:s("middlewares.basic.title")}),e.jsx("p",{children:s("middlewares.basic.description")}),e.jsx(d,{code:i})]}),e.jsxs("section",{id:"middleware-order",className:"docs-section",children:[e.jsx("h2",{children:s("middlewares.order.title")}),e.jsx("p",{children:s("middlewares.order.description")}),e.jsx(d,{code:a})]}),e.jsxs("section",{id:"middleware-global-group-route",className:"docs-section",children:[e.jsx("h2",{children:s("middlewares.scope.title")}),e.jsx("p",{children:s("middlewares.scope.description")}),e.jsx(d,{code:c})]}),e.jsxs("section",{id:"combined-middlewares",className:"docs-section",children:[e.jsx("h2",{children:s("middlewares.combined.title")}),e.jsx("p",{children:s("middlewares.combined.description")}),e.jsx(d,{code:o})]}),e.jsx(t,{variant:"tip",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:s("middlewares.tip")}})})]})}export{w as default};
