import{j as e,L as r}from"./index-B-XQBK-R.js";import{C as s}from"./CodeBlock-BD7B4F1R.js";import{I as a}from"./CommandTabs-DIBfPiOI.js";import{u as d}from"./useTranslation-BPySU2ZA.js";import"./copy-BEf8BVlI.js";import"./createLucideIcon-BfmU6-uQ.js";const n=`import { createApp } from "skyguard-js";
const app = createApp();

app.get("/", (ctx) => {
  return ctx.json({ message: "Hello World!!!" });
});

app.run(3000);`,i=`import { createApp } from "skyguard-js";
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

app.run(3000);`,c=`app.get("/users/{id}", (ctx) => {
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
});`,o=`const userSchema = schema({
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
);`,l=`const authMiddleware = async (ctx, next) => {
  if(ctx.headers["autorization"].includex("Bearer")){

  }
  return await next(ctx)
}

// Middleware global
app.middlewares(authMiddleware);

// Middleware por ruta
app.get("/profile", [authMiddleware], () => {
  return Response.json({ message: "Welcome to profile" })
});`;function h(){const{t}=d();return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"getting-started",className:"docs-section",children:[e.jsx("h1",{children:t("getStarted.page.title")}),e.jsx("p",{children:t("getStarted.page.lead")})]}),e.jsx("hr",{}),e.jsxs("section",{id:"create-first-server",className:"docs-section",children:[e.jsx("h2",{children:t("getStarted.createFirstServer.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:t("getStarted.createFirstServer.intro")}}),e.jsxs("ol",{className:"docs-list-ol",children:[e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("strong",{children:t("getStarted.createFirstServer.steps.packageJson.title")})}),e.jsx(s,{code:"npm init -y"})]}),e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("strong",{children:t("getStarted.createFirstServer.steps.install.title")})}),e.jsx(a,{packageManagers:["npm","pnpm","yarn","deno","bun"],commandByManager:{npm:"npm install skyguard-js",pnpm:"pnpm add skyguard-js",yarn:"yarn add skyguard-js",deno:"deno add npm:skyguard-js",bun:"bun add skyguard-js"}})]}),e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("strong",{children:t("getStarted.createFirstServer.steps.typescriptFile.title")})}),e.jsx("br",{}),e.jsx("p",{dangerouslySetInnerHTML:{__html:t("getStarted.createFirstServer.steps.typescriptFile.description")}}),e.jsx(s,{code:n})]}),e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("strong",{children:t("getStarted.createFirstServer.steps.runServer.title")})}),e.jsx(a,{packageManagers:["node","deno","bun"],commandByManager:{node:`node --watch server.ts
 
# or with tsx
tsx server.ts`,deno:"deno run --allow-net --allow-env --allow-read --allow-ffi server.ts",bun:"bun run server.ts"}})]}),e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("strong",{children:t("getStarted.createFirstServer.steps.testServer.title")})}),e.jsx("br",{}),e.jsx("p",{dangerouslySetInnerHTML:{__html:t("getStarted.createFirstServer.steps.testServer.description")}}),e.jsx(s,{code:`curl http://localhost:3000
# Output: Hello World!!!`})]})]})]}),e.jsxs("section",{id:"add-more-routes",className:"docs-section",children:[e.jsx("h2",{children:t("getStarted.addMoreRoutes.title")}),e.jsx("p",{children:t("getStarted.addMoreRoutes.description")}),e.jsx(s,{code:i})]}),e.jsxs("section",{id:"handle-request-data",className:"docs-section",children:[e.jsx("h2",{children:t("getStarted.handleRequestData.title")}),e.jsx("p",{children:t("getStarted.handleRequestData.description")}),e.jsx(s,{code:c})]}),e.jsxs("section",{id:"add-validation",className:"docs-section",children:[e.jsx("h2",{children:t("getStarted.addValidation.title")}),e.jsx("p",{children:t("getStarted.addValidation.description")}),e.jsx(s,{code:o})]}),e.jsxs("section",{id:"use-middleware",className:"docs-section",children:[e.jsx("h2",{children:t("getStarted.useMiddleware.title")}),e.jsx("p",{children:t("getStarted.useMiddleware.description")}),e.jsx(s,{code:l})]}),e.jsxs("section",{id:"next-steps",className:"docs-section",children:[e.jsx("h2",{children:t("getStarted.nextSteps.title")}),e.jsxs("ul",{className:"docs-lists",children:[e.jsxs("li",{children:[e.jsx(r,{to:"/docs/routing",className:"docs-links",children:t("getStarted.nextSteps.items.routing.label")})," ","- ",t("getStarted.nextSteps.items.routing.description")]}),e.jsxs("li",{children:[e.jsx(r,{to:"/docs/middlewares",className:"docs-links",children:t("getStarted.nextSteps.items.middlewares.label")})," ","- ",t("getStarted.nextSteps.items.middlewares.description")]}),e.jsxs("li",{children:[e.jsx(r,{to:"/docs/validation",className:"docs-links",children:t("getStarted.nextSteps.items.validation.label")})," ","- ",t("getStarted.nextSteps.items.validation.description")]}),e.jsxs("li",{children:[e.jsx(r,{to:"/docs/security",className:"docs-links",children:t("getStarted.nextSteps.items.security.label")})," ","- ",t("getStarted.nextSteps.items.security.description")]})]})]})]})}export{h as default};
