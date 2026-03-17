import{j as e}from"./index-fOYKewRH.js";import{C as s}from"./Callout-9qSpZnQ1.js";import{C as t}from"./CodeBlock-DTLFiySJ.js";import"./createLucideIcon-CTGwtd9Y.js";import"./triangle-alert-D3tcecpy.js";import"./copy-BNsThm3t.js";const r=`import { createApp } from "skyguard-js";
const app = createApp();

app.get("/", (ctx) => ctx.text("GET"));
app.post("/create", (ctx) => ctx.text("POST"));
app.put("/update", (ctx) => ctx.text("PUT"));
app.patch("/modify", (ctx) => ctx.text("PATCH"));
app.delete("/delete", (ctx) => ctx.text("DELETE"));`,a=`// Un parametro 
app.get("/products/{id}", (ctx) => {
  const { id } = ctx.params;
  return ctx.json({ idProduct: id });
});

// Multiples parametros
app.get("/posts/{idPost}/category/{idCategory}", (ctx) => {
  const { idPost, idCategory } = ctx.params;
  return ctx.json({ idPost, idCategory });
});`,o=`// URL: /search?q=test&limit=10
app.get("/search", (ctx) => {
  const { q, limit } = ctx.query;
  return ctx.json({ search: q, limiter: limit });
});`,i=`app.group("/api", api => {
  api.get("/users", (ctx) => ctx.text("Users")));
  api.get("/products", (ctx) => ctx.text("Products"));
  api.post("/products", (ctx) => ctx.text("Create Product"));
});

// Output Routes
// /api/users
// /api/products`;function l(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"routing",className:"docs-section",children:[e.jsx("h1",{children:"Enrutamiento"}),e.jsx("p",{children:"Aprenda a definir rutas y manejar solicitudes HTTP con SkyguardJS. Proporciona un sistema de enrutamiento simple e intuitivo que admite todos los métodos HTTP y parámetros de ruta dinámicos."})]}),e.jsx("hr",{}),e.jsxs("section",{id:"basic-routing",className:"docs-section",children:[e.jsx("h2",{children:"Rutas Básicas"}),e.jsx("p",{children:"Para definir rutas, se utilizan los distintos metodos del objeto app."}),e.jsx(t,{code:r})]}),e.jsxs("section",{id:"route-parameters",className:"docs-section",children:[e.jsx("h2",{children:"Rutas con Parametros"}),e.jsx("p",{children:"Para capturar los parametros de las peticiones, se utiliza la propiedad params del objeto request"}),e.jsx(t,{code:a}),e.jsx(s,{variant:"tip",children:"Los parámetros se devuelven siempre como cadenas de texto. Utilice los esquemas validación para convertirlos a otros tipos."})]}),e.jsxs("section",{id:"query-parameters",className:"docs-section",children:[e.jsx("h2",{children:"Rutas con Queries"}),e.jsx("p",{children:"Para acceder a las query parameters de las peticiones, se utiliza la propiedad query del objeto request"}),e.jsx(t,{code:o})]}),e.jsxs("section",{id:"group-routes",className:"docs-section",children:[e.jsx("h2",{children:"Grupo de Rutas"}),e.jsx("p",{children:"Skyguard tiene un metodo para crear un grupo de rutas en base a un prefix inicial"}),e.jsx(t,{code:i}),e.jsxs(s,{variant:"note",children:["El metodo group recibe una funcion, puedes crear una funcion aparte que reciba como parametro un ",e.jsx("mark",{className:"docs-highlight",children:"RouterGroup"})]})]})]})}export{l as default};
