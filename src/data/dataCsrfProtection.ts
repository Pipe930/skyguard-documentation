export const codeExampleCsrfBasic = `import { csrf } from "skyguard-js";

app.middlewares(
  csrf({
    cookieName: "XSRF-TOKEN",
    headerNames: ["x-csrf-token"],
  }),
);

app.post("/transfer", (ctx) => {
  return ctx.json({ ok: true });
});`;

export const codeExampleCsrfHandlebars = `import { createApp, csrf } from "skyguard-js";
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
});`;

export const codeExampleCsrfTemplate = `<form action="/transfer" method="POST">
  <input type="hidden" name="csrf" value="{{csrfToken}}" />
  <input type="number" name="amount" />
  <button type="submit">Send</button>
</form>`;

export const codeExampleCsrfFetch = `<script>
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
</script>`;
