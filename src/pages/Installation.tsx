import { Link } from "react-router-dom";
import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import InstallCommandTabs from "../components/ui/CommandTabs";

const tsConfigCode = `{
  "compilerOptions": {
    "target": "ES2023",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "moduleDetection": "auto",
    "types": ["node"],
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "isolatedModules": true,
  }
}`

const createApp = `import { createApp, Response } from "skyguard-js";

const app = createApp();

app.get("/", () => {
  return Response.json({ message: "Hello World!!!" });
});

app.run();`

function Installation() {
  return (
    <>
      <section id="requirements" className="docs-section">
        <h1>Instalación</h1>
        <p>
          En este apartado aprenderas a instalar y configurar SkyguardJS en su proyecto
        </p>
      </section>

      <hr />

      <section id="prerequisites" className="docs-section">
        <h2>Prerequisitos</h2>
        <p>
          Antes de instalar SkyguardJS, asegúrese de tener instalado NodeJS y Typescript en las siguientes versions:
        </p>
        <ul className="docs-lists">
          <li>
            <strong>Node.js</strong> (v22 or higher)
          </li>
          <li>
            <strong>Typescript</strong> (v5 or higher)
          </li>
        </ul>
      </section>

      <section id="quick-install" className="docs-section">
        <h2>Instalación del paquete</h2>
        <p>Selecciona tu manejador de paquetes para copiar el comando de instalación e instalar la libreria.</p>
        <InstallCommandTabs />
      </section>

      <section id="typescript-configuration" className="docs-section">
        <h2>Configuración de Typescript</h2>
        <p>SkyguardJS está desarrollado con TypeScript y ofrece seguridad de tipos completa. Asegúrate de que tu archivo <mark className="docs-highlight">tsconfig.json</mark> incluya:</p>

        <CodeBlock code={tsConfigCode}/>
      </section>

      <section id="verify" className="docs-section">
        <h2>Verificar instalación</h2>
        <p>
          Para verificar la instalación de la libreria, crea un servidor simple con la función <mark className="docs-highlight">.createApp()</mark>:
        </p>
        <CodeBlock code={createApp}/>

        <p style={
          {
            marginTop: "20px"
          }
        }>Ejecuta tu servidor:</p>
        <CodeBlock code={"tsx src/server.ts"}/>
        <Callout variant="note" title="Nota">
          Por defecto si no le indicas un puerto en la función run, se ejecuta el servidor en el puerto 3000.
        </Callout>
      </section>
      <section id="next-steps" className="docs-section">
        <h2>Próximos Pasos</h2>
        <ul className="docs-lists">
          <li>
            <Link to="/docs/getting-started" className="docs-links">Guía de inicio rápido</Link> - Crea tu primera aplicación con Skyguard JS
          </li>
          <li>
            <a href="" className="docs-links">Conceptos básicos</a> - Aprenda lo básico sobre el enrutamiento, middleware, seguridad, etc.
          </li>
          <li>
            <a href="" className="docs-links">Conceptos avanzados</a> - Aprenda conceptos mas avanzados como clustering, stream, websockets, etc.
          </li>
        </ul>
      </section>
    </>
  );
}

export default Installation;
