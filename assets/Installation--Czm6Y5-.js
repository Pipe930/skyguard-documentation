import{j as s,L as t}from"./index-B-XQBK-R.js";import{C as l}from"./Callout-Bs-TwcD9.js";import{C as i}from"./CodeBlock-BD7B4F1R.js";import{I as n}from"./CommandTabs-DIBfPiOI.js";import{u as a}from"./useTranslation-BPySU2ZA.js";import"./createLucideIcon-BfmU6-uQ.js";import"./triangle-alert-CspxHpG9.js";import"./copy-BEf8BVlI.js";const r=`{
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
}`,o=`import { createApp } from "skyguard-js";

const app = createApp();

app.get("/", (ctx) => {
  return ctx.json({ message: "Hello World!!!" });
});

app.run(3000);`;function g(){const{t:e}=a();return s.jsxs(s.Fragment,{children:[s.jsxs("section",{id:"installation",className:"docs-section",children:[s.jsx("h1",{children:e("installation.page.title")}),s.jsx("p",{children:e("installation.page.lead")})]}),s.jsx("hr",{}),s.jsxs("section",{id:"prerequisites",className:"docs-section",children:[s.jsx("h2",{children:e("installation.prerequisites.title")}),s.jsx("p",{children:e("installation.prerequisites.description")}),s.jsxs("ul",{className:"docs-lists",children:[s.jsxs("li",{children:[s.jsx("strong",{children:e("installation.prerequisites.node")})," ",e("installation.prerequisites.nodeText")]}),s.jsxs("li",{children:[s.jsx("strong",{children:e("installation.prerequisites.deno")})," ",e("installation.prerequisites.denoText")]}),s.jsxs("li",{children:[s.jsx("strong",{children:e("installation.prerequisites.bun")})," ",e("installation.prerequisites.bunText")]}),s.jsxs("li",{children:[s.jsx("strong",{children:e("installation.prerequisites.typescript")})," ",e("installation.prerequisites.typescriptText")]})]})]}),s.jsxs("section",{id:"quick-install",className:"docs-section",children:[s.jsx("h2",{children:e("installation.quickInstall.title")}),s.jsx("p",{children:e("installation.quickInstall.description")}),s.jsx(n,{packageManagers:["npm","pnpm","yarn","deno","bun"],commandByManager:{npm:"npm install skyguard-js",pnpm:"pnpm add skyguard-js",yarn:"yarn add skyguard-js",deno:"deno add npm:skyguard-js",bun:"bun add skyguard-js"}})]}),s.jsxs("section",{id:"typescript-configuration",className:"docs-section",children:[s.jsx("h2",{children:e("installation.typescriptConfiguration.title")}),s.jsx("p",{dangerouslySetInnerHTML:{__html:e("installation.typescriptConfiguration.description")}}),s.jsx(i,{code:r})]}),s.jsxs("section",{id:"verify",className:"docs-section",children:[s.jsx("h2",{children:e("installation.verify.title")}),s.jsx("p",{dangerouslySetInnerHTML:{__html:e("installation.verify.description")}}),s.jsx(i,{code:o}),s.jsx("p",{style:{marginTop:"20px"},children:e("installation.verify.runServer")}),s.jsx(n,{packageManagers:["node","deno","bun"],commandByManager:{node:`node --watch server.ts
 
# or with tsx
tsx server.ts`,deno:"deno run --allow-net --allow-env --allow-read --allow-ffi server.ts",bun:"bun run server.ts"}}),s.jsx(l,{variant:"note",children:e("installation.verify.note")})]}),s.jsxs("section",{id:"next-steps",className:"docs-section",children:[s.jsx("h2",{children:e("installation.nextSteps.title")}),s.jsxs("ul",{className:"docs-lists",children:[s.jsxs("li",{children:[s.jsx(t,{to:"/docs/getting-started",className:"docs-links",children:e("installation.nextSteps.items.quickStart.label")})," ","- ",e("installation.nextSteps.items.quickStart.description")]}),s.jsxs("li",{children:[s.jsx(t,{to:"/docs/routing",className:"docs-links",children:e("installation.nextSteps.items.basics.label")})," ","- ",e("installation.nextSteps.items.basics.description")]}),s.jsxs("li",{children:[s.jsx(t,{to:"/docs/basic-configuration",className:"docs-links",children:e("installation.nextSteps.items.configuration.label")})," ","- ",e("installation.nextSteps.items.configuration.description")]})]})]})]})}export{g as default};
