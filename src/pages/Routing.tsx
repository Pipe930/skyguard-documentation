import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";

const codeExampleRoutesBasics = `import { createApp, Response } from "skyguard-js";
const app = createApp();

app.get("/", () => Response.text("GET"));
app.post("/create", () => Response.text("POST"));
app.put("/update", () => Response.text("PUT"));
app.patch("/modify", () => Response.text("PATCH"));
app.delete("/delete", () => Response.text("DELETE"));`;

const codeExampleRoutesParameters = `// Un parametro 
app.get("/products/{id}", (request) => {
  const { id } = request.params;
  return Response.json({ idProduct: id });
});

// Multiples parametros
app.get("/posts/{idPost}/category/{idCategory}", (request) => {
  const { idPost, idCategory } = request.params;
  return Response.json({ idPost, idCategory });
});`;

const codeExampleRoutesQuery = `// URL: /search?q=test&limit=10
app.get("/search", (request) => {
  const { q, limit } = request.query;
  return Response.json({ search: q, limiter: limit });
});`;

const codeExampleGroupRoutes = `app.group("/api", api => {
  api.get("/users", () => Response.text("Users")));
  api.get("/products", () => Response.text("Products"));
  api.post("/products", () => Response.text("Create Product"));
});

// Output Routes
// /api/users
// /api/products`;

function Routing() {
    return (
        <>
        <section id="routing" className="docs-section">
            <h1>Enrutamiento</h1>
            <p>Aprenda a definir rutas y manejar solicitudes HTTP con SkyguardJS. Proporciona un sistema de enrutamiento simple e intuitivo que admite todos los métodos HTTP y parámetros de ruta dinámicos.</p>
        </section>
        <hr />
        <section id="basic-routing" className="docs-section">
            <h2>Rutas Básicas</h2>
            <p>Para definir rutas, se utilizan los distintos metodos del objeto app.</p>
            <CodeBlock code={codeExampleRoutesBasics}/>
        </section>

        <section id="route-parameters" className="docs-section">
            <h2>Rutas con Parametros</h2>
            <p>Para capturar los parametros de las peticiones, se utiliza la propiedad params del objeto request</p>
            <CodeBlock code={codeExampleRoutesParameters}/>
            <Callout variant="tip">
                Los parámetros se devuelven siempre como cadenas de texto. Utilice los esquemas validación para convertirlos a otros tipos.
            </Callout>
        </section>

        <section id="query-parameters" className="docs-section">
            <h2>Rutas con Queries</h2>
            <p>Para acceder a las query parameters de las peticiones, se utiliza la propiedad query del objeto request</p>
            <CodeBlock code={codeExampleRoutesQuery}/>
        </section>

        <section id="group-routes" className="docs-section">
            <h2>Grupo de Rutas</h2>
            <p>Skyguard tiene un metodo para crear un grupo de rutas en base a un prefix inicial</p>
            <CodeBlock code={codeExampleGroupRoutes}/>
            <Callout variant="note">
                El metodo group recibe una funcion, puedes crear una funcion aparte que reciba como parametro un <mark className="docs-highlight">RouterGroup</mark>
            </Callout>
        </section>
        </>
    )
}

export default Routing;