import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";

const codeExampleMiddlewares = `import { createApp, json } from "skyguard-js";

const authMiddleware = async (request, next) => {
  if (request.headers["authorization"] !== "secret") {
    return json({ message: "Unauthorized" }).setStatus(401);
  }

  return await next(request); // Call next to continue to the next handler
};

const app = createApp();

app.middlewares(authMiddleware);

app.get("/", () => Response.text("hola"));`

const codeExampleOrderMiddlewares = `const first = async (request, next) => {
  console.log("1");
  return await next(request);
};
 
const second = async (request, next) => {
  console.log("2");
  return await next(request);
};
 
app.middlewares(first, second);

// Request will log: 1, 2`

const codeExampleMiddlewaresRegister = `// Global Middleware
app.middlewares(authMiddleware);

// Group Middleware
app.group("/users", (router) => {
  router.middlewares(authMiddleware);
  router.get("/", () => Response.text("hola"));
});

// Route-Specific Middleware
app.get("/", [authMiddleware], () => Response.text("hola2"));`

const codeExampleMiddlewaresCombined = `app.get(
"/", 
[authMiddleware, adminCheck, logger, rateLimiter], 
() => {
  return Response.json({ message: "holamundo" })
});`

function Middlewares() {
    return (
        <>
        <section id="middlewares" className="docs-section">
            <h1>Middlewares</h1>
            <p>
                Los middlewares son básicamente funciones que se utilizan para cuestiones transversales. Las funciones middleware permiten ejecutar código antes de los controladores de ruta, lo que posibilita cuestiones transversales como autenticación, registro, logs, preprocesamiento de solicitudes, etc.
            </p>
        </section>
        <section id="basic-middlewares" className="docs-section">
            <h2>Middlewares Básicos</h2>
            <p>
                Para crear un middleware, simplemente cree una función tipo flecha, siguiendo la siguiente nomenclatura:
            </p>
            <CodeBlock code={codeExampleMiddlewares}/>
        </section>
        <section id="middleware-order" className="docs-section">
            <h2>Orden de Middlewares</h2>
            <p>
                Los middlewares se ejecutaran en orden según como lo hayas registrado:
            </p>
            <CodeBlock code={codeExampleOrderMiddlewares}/>
        </section>
        <section id="middleware-global-group-route" className="docs-section">
            <h2>Global vs Group vs Route Middlewares</h2>
            <p>
                Los middlewares se pueden registrar de manera global, por grupo de rutas o por una ruta específica:
            </p>
            <CodeBlock code={codeExampleMiddlewaresRegister}/>
        </section>
        <section id="combined-middlewares" className="docs-section">
            <h2>Combinando Middlewares</h2>
            <p>
                Puedes apilar varios middlewares en una ruta
            </p>
            <CodeBlock code={codeExampleMiddlewaresCombined}/>
        </section>
        <Callout variant="tip">
            Siempre llame a la función <mark className="docs-highlight">next()</mark> para continuar el flujo de las peticiones. Olvidarlo provocará que las solicitudes de bloquen.
        </Callout>
        </>
    )
}

export default Middlewares;