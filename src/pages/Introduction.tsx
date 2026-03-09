import { Box, Code, LaptopMinimal, Shield } from "lucide-react";
import Card from "../components/ui/Card";
import "../styles/introduction.css"
import CodeBlock from "../components/ui/CodeBlock";
import Table, { type TableColumn } from "../components/ui/Table";
import Callout from "../components/ui/Callout";
import { Link } from "react-router-dom";

const codeExample = `import { createApp, json, schema, v, validateRequest } from "skyguard-js";

const app = createApp();

const userSchema = schema({
  body: {
    username: v.string({ maxLength: 60 }),
    email: v.string().email()
  }
});

app.post("/user/create", (request) => {
  const { username, email } = request.body;

  return json({ username, email }).setStatusCode(201);
}, [validateRequest(userSchema)]);

app.run(3000, () => {
  console.log("Server running in port 3000");
});`;

interface ContentTable {
  caracterist: string;
  express: string;
  koa: string;
  skyguardjs: string;
}

const tableColumns: TableColumn<ContentTable>[] = [
  {
    header: "Caracteristicas",
    accessor: "caracterist",
    emphasis: true,
  },
  {
    header: "Express.js",
    accessor: "express",
    enableFormatting: true,
  },
  {
    header: "Koa.js",
    accessor: "koa",
    enableFormatting: true,
  },
  {
    header: "Skyguard.js",
    accessor: "skyguardjs",
    enableFormatting: true,
    emphasis: true,
  },
];

const dataTable: ContentTable[] = [
  {
    caracterist: "Filosofía",
    express: "“Incluye lo básico”",
    koa: "Minimalista / Base",
    skyguardjs: "Fuertemente Tipado / Minimalista"
  },
  {
    caracterist: "Validación",
    express: "Requiere `express-validator`",
    koa: "Requiere terceros",
    skyguardjs: "Esquemas de validación nativos"
  },
  {
    caracterist: "Middlewares",
    express: "Basados en callbacks",
    koa: "Async (Modelo Cebolla)",
    skyguardjs: "Async (Modelo Cebolla)"
  },
  {
    caracterist: "Cookies",
    express: "Requiere `cookie-parser`",
    koa: "Integrado",
    skyguardjs: "Soporte nativo de Cookies"
  },
  {
    caracterist: "Sesiones",
    express: "Requiere `express-session`",
    koa: "Requiere `koa-session`",
    skyguardjs: "Soporte nativo de Sesiones"
  },
  {
    caracterist: "Typescript",
    express: "Vía `@types/express`",
    koa: "Vía `@types/koa`",
    skyguardjs: "Soporte nativo de Typescript"
  },
  {
    caracterist: "Dependencias",
    express: "~30+ transitivas",
    koa: "~20+ transitivas",
    skyguardjs: "0 Dependencias"
  },
];

function Introduction() {


    return (
        <>
        <section id="introduction" className="docs-section">
            <h1>Introducción</h1>
            <p>Bienvenidos a Skyguard JS, un framework minimalista escrito en typescript sin dependencias de terceros.</p>
        </section>
        <section id="what-is-skyguard-js" className="docs-section">
            <h2>¿Qué es Skyguard JS?</h2>
            <p>Skyguard JS es un framework minimalista fuertemente tipado escrito en typescript sin dependencias de terceros, para aplicaciones en el entorno de ejecución de <mark className="docs-highlight">NodeJS</mark>. Ofrece distintas funcionalidades integradas, hechas con dependencias nativas de NodeJS para no tener dependencias de terceros y tener mucho más control del proyecto.</p>
            <br />
            <p>Nuestra filosofia se basa en tener un framework minimalista sin dependencias de terceros, para escribir APIs o aplicaciones web que corran desde el servidor.</p>
            <div className="container-cards">
                <Card title="Sin Dependencias" description={`Solo se instala la libreria, nada más. Esto garantiza muchas más seguridad, evitamos tener "Bundle footprint" y validaciones de seguridad de grado industrial.`} icon={<Box/>} />
                <Card title="Tipado Estricto" description={`Al estar escrito con typescript, permite tener tipado fuerte para evitar futuros bugs, ya que, con javascript son muy frecuentes.`} icon={<Code/>} />
                <Card title="Experiencia de Desarrollo" description={`API intuitiva inspirada en Express y Fastify. Empieza a crear de inmediato con patrones familiares.`} icon={<LaptopMinimal/>} />
                <Card title="Seguridad" description={`Skyguard JS implementa varias funcionalidades de seguridad integradas, como CORS, protección contra ataques CSRF, hashing de contraseñas, etc.`} icon={<Shield/>} />
            </div>

        </section>
        <section id="quick-example" className="docs-section">
            <h2>Ejemplo rápido</h2>
            <CodeBlock code={codeExample} />
        </section>
        <section id="advantages" className="docs-section">
            <h2>Comparación con la Competencia</h2>
            <Table columns={tableColumns} data={dataTable} />
        </section>
        <Callout variant="note">
          <strong>¿Listo para probrarlo?</strong>, salta a la sección de <Link className="note-link" to="/docs/getting-started">Guía de Inicio</Link> para crear tu primer servidor con este poderoso framework.
        </Callout>
        </>
    )
}

export default Introduction;