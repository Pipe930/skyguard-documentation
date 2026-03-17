import { Link } from "react-router-dom";
import CodeBlock from "../components/ui/CodeBlock";
import InstallCommandTabs from "../components/ui/CommandTabs";
import { codeExample, codeExampleMiddleware, codeExampleRequest, codeExampleRoutes, codeExampleValidation, codeRunServer } from "../data/dataGetStarted";

function GetStarted() {
  return (
    <>
      <section id="getting-started" className="docs-section">
        <h1>Inicio Rápido</h1>
        <p>
          Crea un servidor con Skyguard JS en segundos.
        </p>
      </section>
      <hr />

      <section id="create-first-server" className="docs-section">
        <h2>Crea tu primer servidor</h2>
        <p>
          Si ya tienes <mark className="docs-highlight">NodeJS</mark> instalado en tu maquina, estos son los pasos sencillos para utilizar SkyguardJS:
        </p>
        <ol className="docs-list-ol">
          <li>
            <p>
              <strong>Crea el archivo package.json</strong>
            </p>
            <CodeBlock code="npm init -y" />
          </li>
          <li>
            <p>
              <strong>Instalar Skyguard JS</strong>
            </p>
            <InstallCommandTabs/>
          </li>
          <li>
            <p>
              <strong>Crea un archivo de Typescript</strong>
            </p>
            <br />
            <p>
              Crea un nuevo archivo <mark className="docs-highlight">server.ts</mark>
            </p>
            <CodeBlock code={codeExample} />
          </li>
          <li>
            <p>
              <strong>Ejecuta tu servidor</strong>
            </p>
            <CodeBlock code={codeRunServer} />
          </li>
          <li>
            <p>
              <strong>Prueba tu servidor</strong>
            </p>
            <br />
            <p>
              Abre tu navegador y visita la url <mark className="docs-highlight">http://localhost:3000/</mark> o utiliza curl o postnam o insomnia:
            </p>
            <CodeBlock code={`curl http://localhost:3000
# Output: Hello World!!!`} />
          </li>
        </ol>
      </section>

      <section id="add-more-routes" className="docs-section">
        <h2>Añadir más rutas</h2>
        <p>Skyguard facilita la adición de múltiples routes con diferentes metodos HTTP.</p>
        <CodeBlock code={codeExampleRoutes} />
      </section>

        <section id="handle-request-data" className="docs-section">
        <h2>Gestionar datos de Request</h2>
        <p>Para acceder a los parametros, queries, cuerpo, cabeceras de las peticion, acceda con el objeto request que se ingresa como parametro en la función handle.</p>
        <CodeBlock code={codeExampleRequest} />
      </section>

      <section id="add-validation" className="docs-section">
        <h2>Añadir validación</h2>
        <p>Skyguard incluye una validación integrada sin depender de librerias externas.</p>
        <CodeBlock code={codeExampleValidation} />
      </section>

      <section id="use-middleware" className="docs-section">
        <h2>Usar middlewares</h2>
        <p>Agregue middleware para manejar inquietudes transversales.</p>
        <CodeBlock code={codeExampleMiddleware} />
      </section>

      <section id="next-steps" className="docs-section">
        <h2>Próximos Pasos</h2>
        <ul className="docs-lists">
          <li>
            <Link to="/docs/routing" className="docs-links">Enrutamiento</Link> - Aprende a manejar rutas dinámicas y patrones de ruta
          </li>
          <li>
            <Link to="/docs/middlewares" className="docs-links">Middlewares</Link> - Cree funciones reutilizables para ejecutarlas en diferentes rutas
          </li>
          <li>
            <Link to="/docs/validation" className="docs-links">Validaciones</Link> - Como hacer validaciones con los esquemas
          </li>
          <li>
            <Link to="/docs/security" className="docs-links">Seguridad</Link> - Buenas prácticas para proteger tus APIs
          </li>
        </ul>
      </section>
    </>
  );
}

export default GetStarted;
