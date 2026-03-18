import{j as s}from"./index-pCHeKE6s.js";import{C as c}from"./Callout-BnL3Oqd5.js";import{C as i}from"./CodeBlock-BMo5DT2Y.js";import{u as n}from"./createLucideIcon-CVdvy-R-.js";import"./triangle-alert-C-Z-AC2M.js";import"./copy-DCtwDaR9.js";const a=`import { cors, HttpMethods } from "skyguard-js";

app.middlewares(
  cors({
    origin: ["http://localhost:3000", "https://myapp.com"],
    methods: [HttpMethods.get, HttpMethods.post],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);`;function x(){const{t:e}=n(),t=e("cors.bestPractices.items",{returnObjects:!0});return s.jsxs(s.Fragment,{children:[s.jsxs("section",{id:"cors",className:"docs-section",children:[s.jsx("h1",{children:e("cors.page.title")}),s.jsx("p",{children:e("cors.page.lead")})]}),s.jsx("hr",{}),s.jsxs("section",{id:"cors-importance",className:"docs-section",children:[s.jsx("h2",{children:e("cors.importance.title")}),s.jsx("p",{children:e("cors.importance.description")}),s.jsx(c,{variant:"warn",children:s.jsx("span",{dangerouslySetInnerHTML:{__html:e("cors.importance.warn")}})})]}),s.jsxs("section",{id:"cors-middleware",className:"docs-section",children:[s.jsx("h2",{children:e("cors.middleware.title")}),s.jsx("p",{dangerouslySetInnerHTML:{__html:e("cors.middleware.description")}}),s.jsx(i,{code:a})]}),s.jsxs("section",{id:"cors-best-practices",className:"docs-section",children:[s.jsx("h2",{children:e("cors.bestPractices.title")}),s.jsx("ul",{className:"docs-lists",children:t.map((r,o)=>s.jsx("li",{children:s.jsx("span",{dangerouslySetInnerHTML:{__html:r}})},o))})]})]})}export{x as default};
