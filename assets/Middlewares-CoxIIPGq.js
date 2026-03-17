import{j as e}from"./index-9yXqAzJ7.js";import{C as a}from"./Callout-BzEIIO_Y.js";import{C as s}from"./CodeBlock-BHRitkc_.js";import"./createLucideIcon-BZu3VFx7.js";import"./triangle-alert-4N9rATx-.js";import"./copy-DET8tuUk.js";const r=`import { createApp } from "skyguard-js";

const authMiddleware = async (ctx, next) => {
  if (ctx.headers["authorization"] !== "secret") {
    return ctx.json({ message: "Unauthorized" }).setStatus(401);
  }

  return await next(ctx); // Call next to continue to the next handler
};

const app = createApp();

app.middlewares(authMiddleware);

app.get("/", (ctx) => ctx.text("hola"));`,t=`const first = async (ctx, next) => {
  console.log("1");
  return await next(ctx);
};
 
const second = async (ctx, next) => {
  console.log("2");
  return await next(ctx);
};
 
app.middlewares(first, second);

// Request will log: 1, 2`,i=`// Global Middleware
app.middlewares(authMiddleware);

// Group Middleware
app.group("/users", (router) => {
  router.middlewares(authMiddleware);
  router.get("/", (ctx) => ctx.text("hola"));
});

// Route-Specific Middleware
app.get("/", [authMiddleware], (ctx) => ctx.text("hola2"));`,d=`app.get(
"/", 
[authMiddleware, adminCheck, logger, rateLimiter], 
(ctx) => {
  return ctx.json({ message: "holamundo" })
});`;function m(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"middlewares",className:"docs-section",children:[e.jsx("h1",{children:"Middlewares"}),e.jsx("p",{children:"Los middlewares son básicamente funciones que se utilizan para cuestiones transversales. Las funciones middleware permiten ejecutar código antes de los controladores de ruta, lo que posibilita cuestiones transversales como autenticación, registro, logs, preprocesamiento de solicitudes, etc."})]}),e.jsxs("section",{id:"basic-middlewares",className:"docs-section",children:[e.jsx("h2",{children:"Middlewares Básicos"}),e.jsx("p",{children:"Para crear un middleware, simplemente cree una función tipo flecha, siguiendo la siguiente nomenclatura:"}),e.jsx(s,{code:r})]}),e.jsxs("section",{id:"middleware-order",className:"docs-section",children:[e.jsx("h2",{children:"Orden de Middlewares"}),e.jsx("p",{children:"Los middlewares se ejecutaran en orden según como lo hayas registrado:"}),e.jsx(s,{code:t})]}),e.jsxs("section",{id:"middleware-global-group-route",className:"docs-section",children:[e.jsx("h2",{children:"Global vs Group vs Route Middlewares"}),e.jsx("p",{children:"Los middlewares se pueden registrar de manera global, por grupo de rutas o por una ruta específica:"}),e.jsx(s,{code:i})]}),e.jsxs("section",{id:"combined-middlewares",className:"docs-section",children:[e.jsx("h2",{children:"Combinando Middlewares"}),e.jsx("p",{children:"Puedes apilar varios middlewares en una ruta"}),e.jsx(s,{code:d})]}),e.jsxs(a,{variant:"tip",children:["Siempre llame a la función ",e.jsx("mark",{className:"docs-highlight",children:"next()"})," para continuar el flujo de las peticiones. Olvidarlo provocará que las solicitudes de bloquen."]})]})}export{m as default};
