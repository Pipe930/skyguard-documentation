import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";

const codeExampleCors = `import { cors, HttpMethods } from "skyguard-js";

app.middlewares(
  cors({
    origin: ["http://localhost:3000", "https://myapp.com"],
    methods: [HttpMethods.get, HttpMethods.post],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);`;

function Cors() {
  return (
    <>
      <section id="cors" className="docs-section">
        <h1>CORS</h1>
        <p>
          CORS (Cross-Origin Resource Sharing) es una política del navegador que
          controla qué orígenes pueden consumir tu API. Es clave para permitir
          integraciones legítimas sin exponer el servidor a solicitudes no
          autorizadas desde cualquier dominio.
        </p>
      </section>
      <hr />

      <section id="cors-importance" className="docs-section">
        <h2>¿Por qué es importante?</h2>
        <p>
          Sin una configuración correcta de CORS, una aplicación frontend puede
          quedar bloqueada por el navegador o, peor, tu API puede aceptar
          peticiones desde orígenes no confiables.
        </p>
        <Callout variant="warn">
          Nota de seguridad: CORS está deshabilitado por defecto hasta que
          definas explícitamente la propiedad{" "}
          <mark className="docs-highlight">origin</mark>.
        </Callout>
      </section>

      <section id="cors-middleware" className="docs-section">
        <h2>Configurar middleware CORS</h2>
        <p>
          Para habilitar CORS usa el middleware integrado{" "}
          <mark className="docs-highlight">cors()</mark> e indica los orígenes y
          métodos permitidos.
        </p>
        <CodeBlock code={codeExampleCors} />
      </section>

      <section id="cors-best-practices" className="docs-section">
        <h2>Buenas prácticas</h2>
        <ul className="docs-lists">
          <li>
            Evita <mark className="docs-highlight">origin: "*"</mark> en APIs con
            credenciales o datos sensibles.
          </li>
          <li>
            Define solo los métodos HTTP necesarios en{" "}
            <mark className="docs-highlight">methods</mark>.
          </li>
          <li>
            Limita <mark className="docs-highlight">allowedHeaders</mark> a lo que
            realmente usas.
          </li>
          <li>
            Si habilitas <mark className="docs-highlight">credentials: true</mark>,
            asegúrate de usar una lista explícita de orígenes confiables.
          </li>
        </ul>
      </section>
    </>
  );
}

export default Cors;
