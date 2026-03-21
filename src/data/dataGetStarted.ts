export const codeExample = `import { createApp } from "skyguard-js";
const app = createApp();

app.get("/", (ctx) => {
  return ctx.json({ message: "Hello World!!!" });
});

app.run(3000);`;

export const codeExampleRoutes = `import { createApp } from "skyguard-js";
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

app.run(3000);`;

export const codeExampleRequest = `app.get("/users/{id}", (ctx) => {
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
});`;

export const codeExampleValidation = `const userSchema = schema({
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
);`;

export const codeExampleMiddleware = `const authMiddleware = async (ctx, next) => {
  if(ctx.headers["autorization"].includex("Bearer")){

  }
  return await next(ctx)
}

// Middleware global
app.middlewares(authMiddleware);

// Middleware por ruta
app.get("/profile", [authMiddleware], () => {
  return Response.json({ message: "Welcome to profile" })
});`;
