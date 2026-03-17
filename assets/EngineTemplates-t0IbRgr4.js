import{j as e}from"./index-9yXqAzJ7.js";import{C as a}from"./Callout-BzEIIO_Y.js";import{C as s}from"./CodeBlock-BHRitkc_.js";import"./createLucideIcon-BZu3VFx7.js";import"./triangle-alert-4N9rATx-.js";import"./copy-DET8tuUk.js";const i=`import { createApp } from "skyguard-js";
import { join } from "node:path";

const app = createApp();

// 1) Configura la carpeta de vistas
app.views(__dirname, "views");

// 2) Registra los motores por extensión
app.engineTemplates("hbs", engineHandlebars);
app.engineTemplates("ejs", engineEjs);
app.engineTemplates("pug", enginePug);`,n=`app.get("/home", async (ctx) => {
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
});`,t=`import { createApp } from "skyguard-js";
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
});`,o=`import { createApp, Response } from "skyguard-js";
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
});`;function g(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"engine-templates",className:"docs-section",children:[e.jsx("h1",{children:"Motores de Plantillas"}),e.jsxs("p",{children:["Para renderizar vistas debes configurar la carpeta de templates con"," ",e.jsx("mark",{className:"docs-highlight",children:"app.views()"}),", registrar motores con ",e.jsx("mark",{className:"docs-highlight",children:"app.engineTemplates()"})," y finalmente responder usando"," ",e.jsx("mark",{className:"docs-highlight",children:"Response.render()"}),"."]})]}),e.jsx("hr",{}),e.jsxs("section",{id:"engine-templates-setup",className:"docs-section",children:[e.jsx("h2",{children:"Configuración Base"}),e.jsxs("p",{children:["El método ",e.jsx("mark",{className:"docs-highlight",children:"views()"})," define dónde están tus vistas y ",e.jsx("mark",{className:"docs-highlight",children:"engineTemplates()"})," ","asocia una extensión con su motor de render."]}),e.jsx(s,{code:i})]}),e.jsxs("section",{id:"engine-templates-render",className:"docs-section",children:[e.jsx("h2",{children:"Uso con Response.render()"}),e.jsxs("p",{children:["Después de configurar la carpeta y el motor, utiliza"," ",e.jsx("mark",{className:"docs-highlight",children:"Response.render()"})," para enviar la vista con los datos dinámicos."]}),e.jsx(s,{code:n})]}),e.jsxs("section",{id:"engine-templates-compatible",className:"docs-section",children:[e.jsx("h2",{children:"Motores Compatibles Actualmente"}),e.jsxs("p",{children:["Actualmente Skyguard funciona con motores de terceros como"," ",e.jsx("mark",{className:"docs-highlight",children:"Express Handlebars"}),","," ",e.jsx("mark",{className:"docs-highlight",children:"EJS"})," y"," ",e.jsx("mark",{className:"docs-highlight",children:"Pug"}),". A futuro se planea incluir un motor de plantillas propio."]})]}),e.jsxs("section",{id:"engine-templates-handlebars",className:"docs-section",children:[e.jsx("h2",{children:"Express Handlebars"}),e.jsxs("p",{children:["Registra la extensión ",e.jsx("mark",{className:"docs-highlight",children:"hbs"})," y la configuración del layout principal."]}),e.jsx(s,{code:r})]}),e.jsxs("section",{id:"engine-templates-ejs",className:"docs-section",children:[e.jsx("h2",{children:"EJS"}),e.jsxs("p",{children:["Asocia ",e.jsx("mark",{className:"docs-highlight",children:"ejs"})," usando"," ",e.jsx("mark",{className:"docs-highlight",children:"ejs.renderFile()"})," para que Skyguard pueda renderizar tus vistas por extensión."]}),e.jsx(s,{code:t})]}),e.jsxs("section",{id:"engine-templates-pug",className:"docs-section",children:[e.jsx("h2",{children:"Pug"}),e.jsxs("p",{children:["Configura la extensión ",e.jsx("mark",{className:"docs-highlight",children:"pug"})," con"," ",e.jsx("mark",{className:"docs-highlight",children:"pug.renderFile()"})," y utiliza la misma API de ",e.jsx("mark",{className:"docs-highlight",children:"Response.render()"}),"."]}),e.jsx(s,{code:o}),e.jsxs(a,{variant:"tip",children:["Mantén una convención de nombres entre archivo y vista (por ejemplo"," ",e.jsx("mark",{className:"docs-highlight",children:"dashboard.pug"})," con"," ",e.jsx("mark",{className:"docs-highlight",children:'Response.render("dashboard")'}),") para evitar errores de resolución."]})]}),e.jsx(a,{variant:"warn",children:"Si registras varios motores, la extensión de la vista define cuál se utiliza en cada render."})]})}export{g as default};
