export const codeExample = `import { createApp, Response } from "skyguard-js";

const app = createApp();

app.get("/", () => {
  return Response.json({ message: "Hello World!!!" });
});

app.run(3000);`;

export const codeRunServer = `node --experimental-specifier-resolution=node server.ts

# Using tsx (recommended)
tsx server.ts`;

export const codeExampleRoutes = `import { createApp, Response } from "skyguard-js";
const app = createApp();

app.get("/", () => {
  return Response.text({ message: "home page" });
});

app.post("/users", () => {
  return Response.json({ message: "create users" });
});

app.get("/users/{id}", (request) => {
  const { id } = request.params;
  return Response.json({ message: "get one users" });
});

app.run(3000);`;

export const codeExampleRequest = `app.get("/users/{id}", (request) => {
  const { id } = request.params;
  return Response.json({ idUser: id });
});

app.get("/search", (request) => {
  const { q } = request.query
  return Response.json({ query: q });
});

app.post("/users", (request) => {
  const { username, email } = request.body;
  return Response.json({ message: "create user" });
});

app.post("/users", (request) => {
  const userAgent = req.headers["user-agent"];
  return Response.json({ userAgent });
});`;

export const codeExampleValidation = `const userSchema = schema({
  body: {
    name: v.string({ maxLength: 60 }),
    email: v.email(),
    age: v.number({ min: 18 }),
    active: v.boolean().default(false),
  },
});

app.post("/users", [validateRequest(userSchema)], (request: Request) => {
    const data = request.body;
    return json(data).setStatusCode(201);
  },
);`;

export const codeExampleMiddleware = `const authMiddleware = async (request, next) => {
  if(request.headers["autorization"].includex("Bearer")){

  }
  return await next(request)
}

// Middleware global
app.middlewares(authMiddleware);

// Middleware por ruta
app.get("/profile", [authMiddleware], () => {
  return Response.json({ message: "Welcome to profile" })
});`;
