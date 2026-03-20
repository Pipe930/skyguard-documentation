import{j as e}from"./index-BYLENJzT.js";import{C as r}from"./Callout-CNABm0bs.js";import{C as t}from"./CodeBlock-BktDhWg6.js";import{u as i}from"./createLucideIcon-CNrYo-mO.js";import"./triangle-alert-svta8DRN.js";import"./copy-CaZlgTTj.js";const a=`import { csrf } from "skyguard-js";

app.middlewares(
  csrf({
    cookieName: "XSRF-TOKEN",
    headerNames: ["x-csrf-token"],
  }),
);

app.post("/transfer", (ctx) => {
  return ctx.json({ ok: true });
});`,d=`import { createApp, csrf } from "skyguard-js";
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

app.middlewares(
  csrf({
    cookieName: "XSRF-TOKEN",
    headerNames: ["x-csrf-token"],
  }),
);

app.get("/transfer", async (ctx) => {
  return await ctx.render("transfer", {
    csrfToken: ctx.cookies["XSRF-TOKEN"],
  });
});

app.post("/transfer", (ctx) => {
  return ctx.json({ ok: true, amount: ctx.body.amount });
});`,p=`<form action="/transfer" method="POST">
  <input type="hidden" name="csrf" value="{{csrfToken}}" />
  <input type="number" name="amount" />
  <button type="submit">Send</button>
</form>`,m=`<script>
  const csrfToken = "{{csrfToken}}";

  async function sendTransfer() {
    await fetch("/transfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-csrf-token": csrfToken,
      },
      body: JSON.stringify({ amount: 150 }),
    });
  }
<\/script>`;function k(){const{t:s}=i(),o=s("csrfProtection.howItWorks.items",{returnObjects:!0});return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"csrf-protection",className:"docs-section",children:[e.jsx("h1",{children:s("csrfProtection.page.title")}),e.jsx("p",{children:s("csrfProtection.page.lead")})]}),e.jsx("hr",{}),e.jsxs("section",{id:"csrf-importance",className:"docs-section",children:[e.jsx("h2",{children:s("csrfProtection.importance.title")}),e.jsx("p",{children:s("csrfProtection.importance.description")}),e.jsx(r,{variant:"warn",children:s("csrfProtection.importance.warn")})]}),e.jsxs("section",{id:"csrf-middleware",className:"docs-section",children:[e.jsx("h2",{children:s("csrfProtection.middleware.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:s("csrfProtection.middleware.description")}}),e.jsx(t,{code:a})]}),e.jsxs("section",{id:"csrf-how-it-works",className:"docs-section",children:[e.jsx("h2",{children:s("csrfProtection.howItWorks.title")}),e.jsx("ul",{className:"docs-lists",children:o.map((c,n)=>e.jsx("li",{children:e.jsx("span",{dangerouslySetInnerHTML:{__html:c}})},n))})]}),e.jsxs("section",{id:"csrf-templates",className:"docs-section",children:[e.jsx("h2",{children:s("csrfProtection.templates.title")}),e.jsx("p",{children:s("csrfProtection.templates.description")}),e.jsx(t,{code:d})]}),e.jsxs("section",{id:"csrf-template-form",className:"docs-section",children:[e.jsx("h2",{children:s("csrfProtection.templateView.title")}),e.jsx(t,{code:p})]}),e.jsxs("section",{id:"csrf-ajax",className:"docs-section",children:[e.jsx("h2",{children:s("csrfProtection.ajax.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:s("csrfProtection.ajax.description")}}),e.jsx(t,{code:m}),e.jsx(r,{variant:"tip",children:s("csrfProtection.ajax.tip")})]})]})}export{k as default};
