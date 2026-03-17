import{j as s,L as i}from"./index-pCHeKE6s.js";import{C as n}from"./Callout-BnL3Oqd5.js";import{C as e}from"./CodeBlock-BMo5DT2Y.js";import{I as l}from"./CommandTabs-CUliVtp-.js";import{u as o}from"./createLucideIcon-CVdvy-R-.js";import"./triangle-alert-C-Z-AC2M.js";import"./copy-DCtwDaR9.js";const r=`{
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
