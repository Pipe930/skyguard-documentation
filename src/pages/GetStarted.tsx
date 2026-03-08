import Table, { type TableColumn } from "../components/ui/Table";
import Callout from "../components/ui/Callout";

interface RouteMethod {
  method: string;
  description: string;
  example: string;
}

const columnsTable: TableColumn<RouteMethod>[] = [
  { header: "Method", accessor: "method" },
  { header: "Description", accessor: "description" },
];

const dataTable: RouteMethod[] = [
  {
    method: "GET",
    description: "Retrieve data from the server",
    example: "app.get('/users')",
  },
  {
    method: "POST",
    description: "Create a new resource",
    example: "app.post('/users')",
  },
  {
    method: "PUT",
    description: "Update a resource",
    example: "app.put('/users/:id')",
  },
];

function GetStarted() {
  return (
    <>
      <section id="introduction" className="docs-section">
        <h1>Getting Started</h1>
        <p>
          Skyguard JS es un framework orientado a APIs que busca simplicidad,
          velocidad y una experiencia limpia en TypeScript.
        </p>
      </section>

      <section id="installation" className="docs-section">
        <h2>Instalación</h2>
        <p>Instala el paquete con tu manejador favorito:</p>
        <pre className="docs-inline-code">
          <code>npm install skyguard-js</code>
        </pre>

        <Callout variant="tip">
          Parameters are always strings. Usa validaciones para convertirlos al tipo que necesitas.
        </Callout>
      </section>

      <section id="first-route" className="docs-section">
        <h2>Tu primera ruta</h2>
        <p>
          Crea una aplicación, define una ruta de salud y arranca el servidor en
          el puerto 3000.
        </p>
        <pre className="docs-code-block">
          <code>{`import { createApp, Response } from "skyguard-js";

const app = createApp();

app.get("/health", () => {
  return Response.json({ status: "ok" });
});

app.run(3000, () => {
  console.log("Server running in port 3000");
});`}</code>
        </pre>

        <Callout variant="note">
          All response methods automatically set appropriate Content-Type headers.
        </Callout>
      </section>

      <section id="middleware" className="docs-section">
        <h2>Middleware</h2>
        <p>
          Los middlewares te permiten ejecutar lógica previa a los controladores
          para validar, registrar o transformar solicitudes.
        </p>

        <div id="middleware-globales" className="docs-subsection">
          <h3>Globales</h3>
          <p>
            Se aplican a todas las rutas. Útiles para CORS, logging general y
            verificación de headers comunes.
          </p>
        </div>

        <div id="middleware-grupales" className="docs-subsection">
          <h3>Grupales</h3>
          <p>
            Se aplican a grupos de rutas, por ejemplo `/admin/*`, para compartir
            autenticación y permisos en un módulo completo.
          </p>
        </div>

        <div id="middleware-por-ruta" className="docs-subsection">
          <h3>Por Ruta</h3>
          <p>
            Se usan en endpoints puntuales cuando necesitas una validación o
            regla de negocio específica en un solo handler.
          </p>
        </div>
      </section>

      <section id="next-steps" className="docs-section">
        <h2>Próximos pasos</h2>
        <p>
          Continúa con configuración, seguridad y arquitectura para construir
          servicios más robustos.
        </p>
        <Table columns={columnsTable} data={dataTable} />
      </section>
    </>
  );
}

export default GetStarted;
