export const codeExampleViewsAndEngine = `import { createApp } from "skyguard-js";
import { join } from "node:path";

const app = createApp();

// 1) Configura la carpeta de vistas
app.views(__dirname, "views");

// 2) Registra los motores por extensión
app.engineTemplates("hbs", engineHandlebars);
app.engineTemplates("ejs", engineEjs);
app.engineTemplates("pug", enginePug);`;

export const codeExampleRender = `app.get("/home", async (ctx) => {
  return await ctx.render("index", {
    title: "Home Page",
    message: "Welcome to the home page!",
  });
});`;

export const codeExampleHandlebars = `import { createApp } from "skyguard-js";
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
});`;

export const codeExampleEjs = `import { createApp } from "skyguard-js";
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
});`;

export const codeExamplePug = `import { createApp, Response } from "skyguard-js";
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
});`;
