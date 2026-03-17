import{j as e,L as s}from"./index-fOYKewRH.js";import{C as r}from"./Callout-9qSpZnQ1.js";import{C as i}from"./CodeBlock-DTLFiySJ.js";import{I as n}from"./CommandTabs-BLLhbXyh.js";import"./createLucideIcon-CTGwtd9Y.js";import"./triangle-alert-D3tcecpy.js";import"./copy-BNsThm3t.js";const a=`{
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
}`,c=`import { createApp } from "skyguard-js";

const app = createApp();

app.get("/", (ctx) => {
  return ctx.json({ message: "Hello World!!!" });
});

app.run();`;function x(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"installation",className:"docs-section",children:[e.jsx("h1",{children:"Instalación"}),e.jsx("p",{children:"En este apartado aprenderas a instalar y configurar SkyguardJS en su proyecto"})]}),e.jsx("hr",{}),e.jsxs("section",{id:"prerequisites",className:"docs-section",children:[e.jsx("h2",{children:"Prerequisitos"}),e.jsx("p",{children:"Antes de instalar SkyguardJS, asegúrese de tener instalado NodeJS y Typescript en las siguientes versions:"}),e.jsxs("ul",{className:"docs-lists",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Node.js"})," (v22 or higher)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Typescript"})," (v5 or higher)"]})]})]}),e.jsxs("section",{id:"quick-install",className:"docs-section",children:[e.jsx("h2",{children:"Instalación del paquete"}),e.jsx("p",{children:"Selecciona tu manejador de paquetes para copiar el comando de instalación e instalar la libreria."}),e.jsx(n,{})]}),e.jsxs("section",{id:"typescript-configuration",className:"docs-section",children:[e.jsx("h2",{children:"Configuración de Typescript"}),e.jsxs("p",{children:["SkyguardJS está desarrollado con TypeScript y ofrece seguridad de tipos completa. Asegúrate de que tu archivo ",e.jsx("mark",{className:"docs-highlight",children:"tsconfig.json"})," incluya:"]}),e.jsx(i,{code:a})]}),e.jsxs("section",{id:"verify",className:"docs-section",children:[e.jsx("h2",{children:"Verificar instalación"}),e.jsxs("p",{children:["Para verificar la instalación de la libreria, crea un servidor simple con la función ",e.jsx("mark",{className:"docs-highlight",children:".createApp()"}),":"]}),e.jsx(i,{code:c}),e.jsx("p",{style:{marginTop:"20px"},children:"Ejecuta tu servidor:"}),e.jsx(i,{code:"tsx src/server.ts"}),e.jsx(r,{variant:"note",children:"Por defecto si no le indicas un puerto en la función run, se ejecuta el servidor en el puerto 3000."})]}),e.jsxs("section",{id:"next-steps",className:"docs-section",children:[e.jsx("h2",{children:"Próximos Pasos"}),e.jsxs("ul",{className:"docs-lists",children:[e.jsxs("li",{children:[e.jsx(s,{to:"/docs/getting-started",className:"docs-links",children:"Guía de inicio rápido"})," - Crea tu primera aplicación con Skyguard JS"]}),e.jsxs("li",{children:[e.jsx(s,{to:"/docs/routing",className:"docs-links",children:"Conceptos básicos"})," - Aprenda lo básico sobre el enrutamiento, middlewares, seguridad, etc."]}),e.jsxs("li",{children:[e.jsx(s,{to:"/docs/basic-configuration",className:"docs-links",children:"Configuración"})," - Configura algunas funcionalidades que provee la libreria según tus necesidades."]})]})]})]})}export{x as default};
