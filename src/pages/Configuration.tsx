import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";

const codeExampleLogger = `import { createApp } from "skyguard-js";
const app = createApp();

// Formato por defecto: "dev"
app.logger();

// Formato custom en consola
app.logger("common");

// También guardar logs en archivo
app.logger("combined", "./logs/http.log");`;

const codeExampleStaticFiles = `import { createApp } from "skyguard-js";
import { join } from "node:path";

const app = createApp();

// Carpeta relativa
app.staticFiles("public");

// Carpeta absoluta
app.staticFiles(join(process.cwd(), "public"));

// /public/images/logo.png -> /images/logo.png`;

const codeExamplePrefix = `import { createApp, Response } from "skyguard-js";
const app = createApp();

app.setPrefix("api");

app.get("/users", () => Response.json([{ id: 1 }]));
app.get("/health", () => Response.text("ok"));

// Rutas finales:
// GET /api/users
// GET /api/health`;

function Configuration() {
  return (
    <>
      <section id="configuration" className="docs-section">
        <h1>Configuración</h1>
        <p>
          Skyguard permite configurar el servidor con pocos métodos. En esta
          sección verás cómo usar{" "}
          <mark className="docs-highlight">logger()</mark>,{" "}
          <mark className="docs-highlight">staticFiles()</mark> y{" "}
          <mark className="docs-highlight">setPrefix()</mark>.
        </p>
      </section>
      <hr />
      <section id="configuration-logger" className="docs-section">
        <h2>Logger</h2>
        <p>
          El método <mark className="docs-highlight">logger()</mark> configura el
          formato de logs HTTP, por defecto viene en la configuración <mark className="docs-highlight">dev</mark>, ademas puedes ingresar como segundo parametro la ruta del archivo de log donde quieres que guarde los logs.
        </p>
        <CodeBlock code={codeExampleLogger} />
        <Callout variant="note">
          Formatos disponibles: <mark className="docs-highlight">combined</mark>,{" "}
          <mark className="docs-highlight">common</mark>,{" "}
          <mark className="docs-highlight">dev</mark>,{" "}
          <mark className="docs-highlight">short</mark> y{" "}
          <mark className="docs-highlight">tiny</mark>.
        </Callout>
      </section>

      <section id="configuration-static-files" className="docs-section">
        <h2>Static Files</h2>
        <p>
          Con <mark className="docs-highlight">staticFiles()</mark> expones una
          carpeta pública para servir archivos estáticos.
        </p>
        <CodeBlock code={codeExampleStaticFiles} />
      </section>

      <section id="configuration-prefix" className="docs-section">
        <h2>Prefix Global</h2>
        <p>
          El método <mark className="docs-highlight">setPrefix()</mark> agrega un
          prefijo inicial a todas las rutas registradas.
        </p>
        <CodeBlock code={codeExamplePrefix} />
        <Callout variant="warn">
          Define el prefijo al inicio del arranque para mantener consistencia en
          toda la API.
        </Callout>
      </section>
    </>
  );
}

export default Configuration;
