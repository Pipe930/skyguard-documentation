import{j as e,L as r}from"./index-9yXqAzJ7.js";import{C as s}from"./CodeBlock-BHRitkc_.js";import{I as a}from"./CommandTabs-BUXjPA85.js";import"./copy-DET8tuUk.js";import"./createLucideIcon-BZu3VFx7.js";const t=`import { createApp } from "skyguard-js";
const app = createApp();

app.get("/", (ctx) => {
  return ctx.json({ message: "Hello World!!!" });
});

app.run(3000);`,c=`node --experimental-specifier-resolution=node server.ts

# Using tsx (recommended)
tsx server.ts`,i=`import { createApp } from "skyguard-js";
const app = createApp();

app.get("/", (ctx) => {
  return ctx.text({ message: "home page" });
});

app.post("/users", (ctx) => {
  return ctx.json({ message: "create users" });
});

app.get("/users/{id}", (ctx) => {
  const { id } = ctx.params;
  return ctx.json({ message: "get one users" });
});

app.run(3000);`,n=`app.get("/users/{id}", (ctx) => {
  const { id } = ctx.params;
  return ctx.json({ idUser: id });
});

app.get("/search", (ctx) => {
  const { q } = ctx.query
  return ctx.json({ query: q });
});

app.post("/users", (ctx) => {
  const { username, email } = ctx.body;
  return ctx.json({ message: "create user" });
});

app.post("/users", (ctx) => {
  const userAgent = ctx.headers["user-agent"];
  return ctx.json({ userAgent });
});`,d=`const userSchema = schema({
  body: {
    name: v.string({ maxLength: 60 }),
    email: v.email(),
    age: v.number({ min: 18 }),
    active: v.boolean().default(false),
  },
});

app.post("/users", [validateRequest(userSchema)], (ctx) => {
    const data = ctx.body;
    return ctx.json(data).setStatusCode(201);
  },
);`,o=`const authMiddleware = async (ctx, next) => {
  if(ctx.headers["autorization"].includex("Bearer")){

  }
  return await next(ctx)
}

// Middleware global
app.middlewares(authMiddleware);

// Middleware por ruta
app.get("/profile", [authMiddleware], () => {
  return Response.json({ message: "Welcome to profile" })
});`;function m(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"getting-started",className:"docs-section",children:[e.jsx("h1",{children:"Inicio Rápido"}),e.jsx("p",{children:"Crea un servidor con Skyguard JS en segundos."})]}),e.jsx("hr",{}),e.jsxs("section",{id:"create-first-server",className:"docs-section",children:[e.jsx("h2",{children:"Crea tu primer servidor"}),e.jsxs("p",{children:["Si ya tienes ",e.jsx("mark",{className:"docs-highlight",children:"NodeJS"})," instalado en tu maquina, estos son los pasos sencillos para utilizar SkyguardJS:"]}),e.jsxs("ol",{className:"docs-list-ol",children:[e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Crea el archivo package.json"})}),e.jsx(s,{code:"npm init -y"})]}),e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Instalar Skyguard JS"})}),e.jsx(a,{})]}),e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Crea un archivo de Typescript"})}),e.jsx("br",{}),e.jsxs("p",{children:["Crea un nuevo archivo ",e.jsx("mark",{className:"docs-highlight",children:"server.ts"})]}),e.jsx(s,{code:t})]}),e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Ejecuta tu servidor"})}),e.jsx(s,{code:c})]}),e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Prueba tu servidor"})}),e.jsx("br",{}),e.jsxs("p",{children:["Abre tu navegador y visita la url ",e.jsx("mark",{className:"docs-highlight",children:"http://localhost:3000/"})," o utiliza curl o postnam o insomnia:"]}),e.jsx(s,{code:`curl http://localhost:3000
# Output: Hello World!!!`})]})]})]}),e.jsxs("section",{id:"add-more-routes",className:"docs-section",children:[e.jsx("h2",{children:"Añadir más rutas"}),e.jsx("p",{children:"Skyguard facilita la adición de múltiples routes con diferentes metodos HTTP."}),e.jsx(s,{code:i})]}),e.jsxs("section",{id:"handle-request-data",className:"docs-section",children:[e.jsx("h2",{children:"Gestionar datos de Request"}),e.jsx("p",{children:"Para acceder a los parametros, queries, cuerpo, cabeceras de las peticion, acceda con el objeto request que se ingresa como parametro en la función handle."}),e.jsx(s,{code:n})]}),e.jsxs("section",{id:"add-validation",className:"docs-section",children:[e.jsx("h2",{children:"Añadir validación"}),e.jsx("p",{children:"Skyguard incluye una validación integrada sin depender de librerias externas."}),e.jsx(s,{code:d})]}),e.jsxs("section",{id:"use-middleware",className:"docs-section",children:[e.jsx("h2",{children:"Usar middlewares"}),e.jsx("p",{children:"Agregue middleware para manejar inquietudes transversales."}),e.jsx(s,{code:o})]}),e.jsxs("section",{id:"next-steps",className:"docs-section",children:[e.jsx("h2",{children:"Próximos Pasos"}),e.jsxs("ul",{className:"docs-lists",children:[e.jsxs("li",{children:[e.jsx(r,{to:"/docs/routing",className:"docs-links",children:"Enrutamiento"})," - Aprende a manejar rutas dinámicas y patrones de ruta"]}),e.jsxs("li",{children:[e.jsx(r,{to:"/docs/middlewares",className:"docs-links",children:"Middlewares"})," - Cree funciones reutilizables para ejecutarlas en diferentes rutas"]}),e.jsxs("li",{children:[e.jsx(r,{to:"/docs/validation",className:"docs-links",children:"Validaciones"})," - Como hacer validaciones con los esquemas"]}),e.jsxs("li",{children:[e.jsx(r,{to:"/docs/security",className:"docs-links",children:"Seguridad"})," - Buenas prácticas para proteger tus APIs"]})]})]})]})}export{m as default};
