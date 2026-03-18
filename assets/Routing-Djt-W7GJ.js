import{j as t}from"./index-XCpnhIK_.js";import{C as r}from"./Callout-OyymyYqK.js";import{C as s}from"./CodeBlock-Bu61pXg3.js";import{u as o}from"./createLucideIcon-DyO8g6fF.js";import"./triangle-alert-C8Jqf58L.js";import"./copy-DEFS0Oq0.js";const i=`import { createApp } from "skyguard-js";
const app = createApp();

app.get("/", (ctx) => ctx.text("GET"));
app.post("/create", (ctx) => ctx.text("POST"));
app.put("/update", (ctx) => ctx.text("PUT"));
app.patch("/modify", (ctx) => ctx.text("PATCH"));
app.delete("/delete", (ctx) => ctx.text("DELETE"));`,c=`// A parameter 
app.get("/products/{id}", (ctx) => {
  const { id } = ctx.params;
  return ctx.json({ idProduct: id });
});

// Multiple parameters
app.get("/posts/{idPost}/category/{idCategory}", (ctx) => {
  const { idPost, idCategory } = ctx.params;
  return ctx.json({ idPost, idCategory });
});`,a=`// URL: /search?q=test&limit=10
app.get("/search", (ctx) => {
  const { q, limit } = ctx.query;
  return ctx.json({ search: q, limiter: limit });
});`,p=`app.group("/api", api => {
  api.get("/users", (ctx) => ctx.text("Users")));
  api.get("/products", (ctx) => ctx.text("Products"));
  api.post("/products", (ctx) => ctx.text("Create Product"));
});

// Output Routes
// /api/users
// /api/products`;function g(){const{t:e}=o();return t.jsxs(t.Fragment,{children:[t.jsxs("section",{id:"routing",className:"docs-section",children:[t.jsx("h1",{children:e("routing.page.title")}),t.jsx("p",{children:e("routing.page.lead")})]}),t.jsx("hr",{}),t.jsxs("section",{id:"basic-routing",className:"docs-section",children:[t.jsx("h2",{children:e("routing.basicRouting.title")}),t.jsx("p",{children:e("routing.basicRouting.description")}),t.jsx(s,{code:i})]}),t.jsxs("section",{id:"route-parameters",className:"docs-section",children:[t.jsx("h2",{children:e("routing.routeParameters.title")}),t.jsx("p",{children:e("routing.routeParameters.description")}),t.jsx(s,{code:c}),t.jsx(r,{variant:"tip",children:e("routing.routeParameters.tip")})]}),t.jsxs("section",{id:"query-parameters",className:"docs-section",children:[t.jsx("h2",{children:e("routing.queryParameters.title")}),t.jsx("p",{children:e("routing.queryParameters.description")}),t.jsx(s,{code:a})]}),t.jsxs("section",{id:"group-routes",className:"docs-section",children:[t.jsx("h2",{children:e("routing.groupRoutes.title")}),t.jsx("p",{children:e("routing.groupRoutes.description")}),t.jsx(s,{code:p}),t.jsx(r,{variant:"note",children:t.jsx("span",{dangerouslySetInnerHTML:{__html:e("routing.groupRoutes.note")}})})]})]})}export{g as default};
