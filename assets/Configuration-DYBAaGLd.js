import{j as e}from"./index-XCpnhIK_.js";import{C as i}from"./Callout-OyymyYqK.js";import{C as t}from"./CodeBlock-Bu61pXg3.js";import{u as s}from"./createLucideIcon-DyO8g6fF.js";import"./triangle-alert-C8Jqf58L.js";import"./copy-DEFS0Oq0.js";const a=`import { createApp } from "skyguard-js";
const app = createApp();

// Formato por defecto: "dev"
app.logger();

// Formato custom en consola
app.logger("common");

// También guardar logs en archivo
app.logger("combined", "./logs/http.log");`,n=`import { createApp } from "skyguard-js";
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
});`;function x(){const{t:o}=s();return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"configuration",className:"docs-section",children:[e.jsx("h1",{children:o("configuration.page.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:o("configuration.page.lead")}})]}),e.jsx("hr",{}),e.jsxs("section",{id:"configuration-logger",className:"docs-section",children:[e.jsx("h2",{children:o("configuration.logger.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:o("configuration.logger.description")}}),e.jsx(t,{code:a}),e.jsx(i,{variant:"note",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:o("configuration.logger.note")}})})]}),e.jsxs("section",{id:"configuration-static-files",className:"docs-section",children:[e.jsx("h2",{children:o("configuration.staticFiles.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:o("configuration.staticFiles.description")}}),e.jsx(t,{code:n})]}),e.jsxs("section",{id:"configuration-prefix",className:"docs-section",children:[e.jsx("h2",{children:o("configuration.prefix.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:o("configuration.prefix.description")}}),e.jsx(t,{code:r}),e.jsx(i,{variant:"warn",children:o("configuration.prefix.warn")})]}),e.jsxs("section",{id:"configuration-file-upload",className:"docs-section",children:[e.jsx("h2",{children:o("configuration.fileUpload.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:o("configuration.fileUpload.description")}}),e.jsx(t,{code:c}),e.jsx("p",{style:{padding:"25px 0"},dangerouslySetInnerHTML:{__html:o("configuration.fileUpload.storageDescription")}}),e.jsx(i,{variant:"note",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:o("configuration.fileUpload.note")}})})]})]})}export{x as default};
