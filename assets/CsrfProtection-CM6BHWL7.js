import{j as e}from"./index-CVLVyqCr.js";import{C as a}from"./Callout-CPEMqqow.js";import{C as s}from"./CodeBlock-DqpFqFhe.js";import"./createLucideIcon-Ie-Bw47j.js";import"./triangle-alert-Bsll79NY.js";import"./copy-1r-K9xfu.js";const r=`import { csrf } from "skyguard-js";

app.middlewares(
  csrf({
    cookieName: "XSRF-TOKEN",
    headerNames: ["x-csrf-token"],
  }),
);

app.post("/transfer", (ctx) => {
  return ctx.json({ ok: true });
});`,o=`import { createApp, csrf } from "skyguard-js";
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
});`,i=`<form action="/transfer" method="POST">
  <input type="hidden" name="csrf" value="{{csrfToken}}" />
  <input type="number" name="amount" />
  <button type="submit">Send</button>
</form>`,n=`<script>
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
<\/script>`;function h(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"csrf-protection",className:"docs-section",children:[e.jsx("h1",{children:"CSRF Protección"}),e.jsx("p",{children:"CSRF (Cross-Site Request Forgery) es un ataque donde un sitio malicioso induce al navegador del usuario autenticado a ejecutar acciones no deseadas en tu aplicación."})]}),e.jsx("hr",{}),e.jsxs("section",{id:"csrf-importance",className:"docs-section",children:[e.jsx("h2",{children:"¿Por qué es importante mitigarlo?"}),e.jsx("p",{children:"Si no validas tokens CSRF, un atacante puede forzar operaciones como transferencias, cambios de contraseña o modificaciones de perfil usando la sesión activa de la víctima."}),e.jsx(a,{variant:"warn",children:"CSRF es especialmente crítico cuando usas autenticación basada en cookies, porque el navegador las envía automáticamente."})]}),e.jsxs("section",{id:"csrf-middleware",className:"docs-section",children:[e.jsx("h2",{children:"Middleware csrf() básico"}),e.jsxs("p",{children:["Usa el middleware integrado ",e.jsx("mark",{className:"docs-highlight",children:"csrf()"})," ","para proteger endpoints contra ataques CSRF."]}),e.jsx(s,{code:r})]}),e.jsxs("section",{id:"csrf-how-it-works",className:"docs-section",children:[e.jsx("h2",{children:"Cómo funciona internamente"}),e.jsxs("ul",{className:"docs-lists",children:[e.jsx("li",{children:"Emite una cookie CSRF cuando falta (incluyendo primeras peticiones GET/HEAD/OPTIONS y solicitudes protegidas fallidas)."}),e.jsx("li",{children:"Para métodos que cambian estado (POST/PUT/PATCH/DELETE), valida el token recibido en header/body contra el valor de la cookie."}),e.jsxs("li",{children:["Valida ",e.jsx("mark",{className:"docs-highlight",children:"Origin"}),"/",e.jsx("mark",{className:"docs-highlight",children:"Referer"})," en solicitudes protegidas, y exige Referer en HTTPS cuando Origin no existe."]}),e.jsx("li",{children:"Rechaza valores CSRF duplicados en headers para evitar ambiguedad al parsear tokens."})]})]}),e.jsxs("section",{id:"csrf-templates",className:"docs-section",children:[e.jsx("h2",{children:"Ejemplo con templates (Express Handlebars)"}),e.jsx("p",{children:"En render server-side, pasa el token CSRF a la vista e inclúyelo como campo oculto en formularios."}),e.jsx(s,{code:o})]}),e.jsxs("section",{id:"csrf-template-form",className:"docs-section",children:[e.jsx("h2",{children:"Vista transfer.hbs"}),e.jsx(s,{code:i})]}),e.jsxs("section",{id:"csrf-ajax",className:"docs-section",children:[e.jsx("h2",{children:"CSRF en fetch/AJAX"}),e.jsxs("p",{children:["Para peticiones AJAX, envía el mismo token en headers con el nombre definido en ",e.jsx("mark",{className:"docs-highlight",children:"headerNames"}),"."]}),e.jsx(s,{code:n}),e.jsx(a,{variant:"tip",children:"Mantén el token CSRF alineado entre cookie, campo hidden y header para evitar falsos positivos de validación."})]})]})}export{h as default};
