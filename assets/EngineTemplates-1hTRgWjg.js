import{j as e}from"./index-AJrTjCO-.js";import{C as t}from"./Callout-CrxKFo1l.js";import{C as s}from"./CodeBlock-BFJ7rdmv.js";import{u as a}from"./createLucideIcon-BXFtYZs2.js";import"./triangle-alert-DMqqz8xL.js";import"./copy-qIaFTmYD.js";const i=`import { createApp } from "skyguard-js";
import { join } from "node:path";

const app = createApp();

// 1) Configura la carpeta de vistas
app.views(__dirname, "views");

// 2) Registra los motores por extensión
app.engineTemplates("hbs", engineHandlebars);
app.engineTemplates("ejs", engineEjs);
app.engineTemplates("pug", enginePug);`,p=`app.get("/home", async (ctx) => {
  return await ctx.render("index", {
    title: "Home Page",
    message: "Welcome to the home page!",
  });
});`,r=`import { createApp } from "skyguard-js";
import { engine } from "express-handlebars";
import { join } from "node:path";

const app = createApp();

app.views(__dirname, "views");

app.engineTemplates(
  "hbs",
  engine({
    extname: "hbs",
    layoutsDir: join(__dirname, "views"),
    defaultLayout: "main",
  }),
);

app.get("/home", async (ctx) => {
  return await ctx.render("home", {
    title: "Inicio",
    message: "Bienvenido con Handlebars",
  });
});`,o=`import { createApp } from "skyguard-js";
import ejs from "ejs";

const app = createApp();

app.views(__dirname, "views");

app.engineTemplates("ejs", (templatePath, data) => {
  return ejs.renderFile(templatePath, data);
});

app.get("/profile", async (ctx) => {
  return await ctx.render("profile", {
    title: "Perfil",
    username: "elpipex",
  });
});`,l=`import { createApp, Response } from "skyguard-js";
import pug from "pug";

const app = createApp();

app.views(__dirname, "views");

app.engineTemplates("pug", (templatePath, data) => {
  return pug.renderFile(templatePath, data);
});

app.get("/dashboard", async (ctx) => {
  return await ctx.render("dashboard", {
    title: "Panel",
    stats: [12, 8, 3],
  });
});`;function j(){const{t:n}=a();return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"engine-templates",className:"docs-section",children:[e.jsx("h1",{children:n("engineTemplates.page.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n("engineTemplates.page.lead")}})]}),e.jsx("hr",{}),e.jsxs("section",{id:"engine-templates-setup",className:"docs-section",children:[e.jsx("h2",{children:n("engineTemplates.setup.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n("engineTemplates.setup.description")}}),e.jsx(s,{code:i})]}),e.jsxs("section",{id:"engine-templates-render",className:"docs-section",children:[e.jsx("h2",{children:n("engineTemplates.render.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n("engineTemplates.render.description")}}),e.jsx(s,{code:p})]}),e.jsxs("section",{id:"engine-templates-compatible",className:"docs-section",children:[e.jsx("h2",{children:n("engineTemplates.compatible.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n("engineTemplates.compatible.description")}})]}),e.jsxs("section",{id:"engine-templates-handlebars",className:"docs-section",children:[e.jsx("h2",{children:n("engineTemplates.handlebars.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n("engineTemplates.handlebars.description")}}),e.jsx(s,{code:r})]}),e.jsxs("section",{id:"engine-templates-ejs",className:"docs-section",children:[e.jsx("h2",{children:n("engineTemplates.ejs.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n("engineTemplates.ejs.description")}}),e.jsx(s,{code:o})]}),e.jsxs("section",{id:"engine-templates-pug",className:"docs-section",children:[e.jsx("h2",{children:n("engineTemplates.pug.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:n("engineTemplates.pug.description")}}),e.jsx(s,{code:l}),e.jsx(t,{variant:"tip",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:n("engineTemplates.pug.tip")}})})]}),e.jsx(t,{variant:"warn",children:n("engineTemplates.warn")})]})}export{j as default};
