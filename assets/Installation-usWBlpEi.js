import{j as s,L as i}from"./index-AJrTjCO-.js";import{C as n}from"./Callout-CrxKFo1l.js";import{C as e}from"./CodeBlock-BFJ7rdmv.js";import{I as l}from"./CommandTabs-DVc5V6wM.js";import{u as o}from"./createLucideIcon-BXFtYZs2.js";import"./triangle-alert-DMqqz8xL.js";import"./copy-qIaFTmYD.js";const r=`{
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
}`,a=`import { createApp } from "skyguard-js";

const app = createApp();

app.get("/", (ctx) => {
  return ctx.json({ message: "Hello World!!!" });
});

app.run(3000);`;function j(){const{t}=o();return s.jsxs(s.Fragment,{children:[s.jsxs("section",{id:"installation",className:"docs-section",children:[s.jsx("h1",{children:t("installation.page.title")}),s.jsx("p",{children:t("installation.page.lead")})]}),s.jsx("hr",{}),s.jsxs("section",{id:"prerequisites",className:"docs-section",children:[s.jsx("h2",{children:t("installation.prerequisites.title")}),s.jsx("p",{children:t("installation.prerequisites.description")}),s.jsxs("ul",{className:"docs-lists",children:[s.jsxs("li",{children:[s.jsx("strong",{children:t("installation.prerequisites.node")})," (v22 or higher)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:t("installation.prerequisites.typescript")})," (v5 or higher)"]})]})]}),s.jsxs("section",{id:"quick-install",className:"docs-section",children:[s.jsx("h2",{children:t("installation.quickInstall.title")}),s.jsx("p",{children:t("installation.quickInstall.description")}),s.jsx(l,{})]}),s.jsxs("section",{id:"typescript-configuration",className:"docs-section",children:[s.jsx("h2",{children:t("installation.typescriptConfiguration.title")}),s.jsx("p",{dangerouslySetInnerHTML:{__html:t("installation.typescriptConfiguration.description")}}),s.jsx(e,{code:r})]}),s.jsxs("section",{id:"verify",className:"docs-section",children:[s.jsx("h2",{children:t("installation.verify.title")}),s.jsx("p",{dangerouslySetInnerHTML:{__html:t("installation.verify.description")}}),s.jsx(e,{code:a}),s.jsx("p",{style:{marginTop:"20px"},children:t("installation.verify.runServer")}),s.jsx(e,{code:"tsx src/server.ts"}),s.jsx(n,{variant:"note",children:t("installation.verify.note")})]}),s.jsxs("section",{id:"next-steps",className:"docs-section",children:[s.jsx("h2",{children:t("installation.nextSteps.title")}),s.jsxs("ul",{className:"docs-lists",children:[s.jsxs("li",{children:[s.jsx(i,{to:"/docs/getting-started",className:"docs-links",children:t("installation.nextSteps.items.quickStart.label")})," ","- ",t("installation.nextSteps.items.quickStart.description")]}),s.jsxs("li",{children:[s.jsx(i,{to:"/docs/routing",className:"docs-links",children:t("installation.nextSteps.items.basics.label")})," ","- ",t("installation.nextSteps.items.basics.description")]}),s.jsxs("li",{children:[s.jsx(i,{to:"/docs/basic-configuration",className:"docs-links",children:t("installation.nextSteps.items.configuration.label")})," ","- ",t("installation.nextSteps.items.configuration.description")]})]})]})]})}export{j as default};
