import{j as e}from"./index-fOYKewRH.js";import{C as a}from"./Callout-9qSpZnQ1.js";import{C as s}from"./CodeBlock-DTLFiySJ.js";import"./createLucideIcon-CTGwtd9Y.js";import"./triangle-alert-D3tcecpy.js";import"./copy-BNsThm3t.js";const i=`import { createApp } from "skyguard-js";
const app = createApp();

// Formato por defecto: "dev"
app.logger();

// Formato custom en consola
app.logger("common");

// También guardar logs en archivo
app.logger("combined", "./logs/http.log");`,o=`import { createApp } from "skyguard-js";
import { join } from "node:path";

const app = createApp();

// Carpeta relativa
app.staticFiles("public");

// Carpeta absoluta
app.staticFiles(join(process.cwd(), "public"));

// /public/images/logo.png -> /images/logo.png`,r=`import { createApp } from "skyguard-js";
const app = createApp();

app.setPrefix("api");

app.get("/users", (ctx) => ctx.json([{ id: 1 }]));
app.get("/health", (ctx) => ctx.text("ok"));

// Rutas finales:
// GET /api/users
// GET /api/health`,c=`import { createUploader, StorageType } from "skyguard-js";

const uploader = createUploader({
  storageType: StorageType.DISK,
  storageOptions: {
    disk: {
      destination: "./uploads",
    },
  },
});

app.post("/upload", [uploader.single("file")], (ctx) => {
  return ctx.json({
    message: "Archivo subido correctamente",
    file: ctx.req.files,
  });
});`;function g(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"configuration",className:"docs-section",children:[e.jsx("h1",{children:"Configuración"}),e.jsxs("p",{children:["Skyguard permite configurar el servidor con pocos métodos. En esta sección verás cómo usar"," ",e.jsx("mark",{className:"docs-highlight",children:"logger()"}),","," ",e.jsx("mark",{className:"docs-highlight",children:"staticFiles()"})," y"," ",e.jsx("mark",{className:"docs-highlight",children:"setPrefix()"}),", además de la carga de archivos con ",e.jsx("mark",{className:"docs-highlight",children:"createUploader()"}),"."]})]}),e.jsx("hr",{}),e.jsxs("section",{id:"configuration-logger",className:"docs-section",children:[e.jsx("h2",{children:"Logger"}),e.jsxs("p",{children:["El método ",e.jsx("mark",{className:"docs-highlight",children:"logger()"})," configura el formato de logs HTTP, por defecto viene en la configuración ",e.jsx("mark",{className:"docs-highlight",children:"dev"}),", ademas puedes ingresar como segundo parametro la ruta del archivo de log donde quieres que guarde los logs."]}),e.jsx(s,{code:i}),e.jsxs(a,{variant:"note",children:["Formatos disponibles: ",e.jsx("mark",{className:"docs-highlight",children:"combined"}),","," ",e.jsx("mark",{className:"docs-highlight",children:"common"}),","," ",e.jsx("mark",{className:"docs-highlight",children:"dev"}),","," ",e.jsx("mark",{className:"docs-highlight",children:"short"})," y"," ",e.jsx("mark",{className:"docs-highlight",children:"tiny"}),"."]})]}),e.jsxs("section",{id:"configuration-static-files",className:"docs-section",children:[e.jsx("h2",{children:"Archivos Estáticos"}),e.jsxs("p",{children:["Con ",e.jsx("mark",{className:"docs-highlight",children:"staticFiles()"})," expones una carpeta pública para servir archivos estáticos."]}),e.jsx(s,{code:o})]}),e.jsxs("section",{id:"configuration-prefix",className:"docs-section",children:[e.jsx("h2",{children:"Prefix Global"}),e.jsxs("p",{children:["El método ",e.jsx("mark",{className:"docs-highlight",children:"setPrefix()"})," agrega un prefijo inicial a todas las rutas registradas."]}),e.jsx(s,{code:r}),e.jsx(a,{variant:"warn",children:"Define el prefijo al inicio del arranque para mantener consistencia en toda la API."})]}),e.jsxs("section",{id:"configuration-file-upload",className:"docs-section",children:[e.jsx("h2",{children:"Subida de Archivos"}),e.jsxs("p",{children:["Para recibir y guardar archivos use"," ",e.jsx("mark",{className:"docs-highlight",children:"createUploader()"})," con el tipo de almacenamiento que necesite."]}),e.jsx(s,{code:c}),e.jsxs("p",{style:{padding:"25px 0"},children:["Según el ",e.jsx("mark",{className:"docs-highlight",children:"StorageType"})," ","seleccionado, ",e.jsx("mark",{className:"docs-highlight",children:"storageOptions"})," ","puede incluir dos propiedades:"," ",e.jsx("mark",{className:"docs-highlight",children:"disk"})," y"," ",e.jsx("mark",{className:"docs-highlight",children:"memory"}),"."]}),e.jsxs(a,{variant:"note",children:["Use ",e.jsx("mark",{className:"docs-highlight",children:"StorageType.DISK"})," cuando necesite persistencia en disco y"," ",e.jsx("mark",{className:"docs-highlight",children:"StorageType.MEMORY"})," para procesamiento temporal en memoria antes de enviar a S3, Cloudinary u otro almacenamiento externo."]})]})]})}export{g as default};
