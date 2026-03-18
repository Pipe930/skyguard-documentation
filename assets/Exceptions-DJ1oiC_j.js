import{j as e}from"./index-pCHeKE6s.js";import{C as r}from"./CodeBlock-BMo5DT2Y.js";import{T as c}from"./Table-CSVCplIn.js";import{u as n}from"./createLucideIcon-CVdvy-R-.js";import"./copy-DCtwDaR9.js";const i=`import { NotFoundError InternalServerError } from "skyguard-js";

const listResources = ["1", "2", "3"];

app.get("/resource/{id}", (ctx) => {
  const resource = ctx.params["id"];

  if (!listResources.includes(resource)) {
    throw new NotFoundError("Resource not found");
  }

  return ctx.json(resource);
});

app.get("/divide", (ctx) => {
  try {
    const { a, b } = ctx.query;
    const result = Number(a) / Number(b);

    if (!Number.isFinite(result)) {
      throw new Error("Invalid operation");
    }

    return ctx.json({ result });
  } catch {
    throw new InternalServerError(
      "An error occurred while processing your request",
    );
  }
});`;function l(){const{t:s}=n(),t=[{header:s("exceptions.types.columns.exception"),accessor:"exception",emphasis:!0},{header:s("exceptions.types.columns.status"),accessor:"statusCode",width:"110px"},{header:s("exceptions.types.columns.code"),accessor:"code",width:"260px"},{header:s("exceptions.types.columns.description"),accessor:"description"}],o=s("exceptions.types.rows",{returnObjects:!0});return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"exceptions",className:"docs-section",children:[e.jsx("h1",{children:s("exceptions.page.title")}),e.jsx("p",{children:s("exceptions.page.lead")})]}),e.jsx("hr",{}),e.jsxs("section",{id:"exceptions-usage",className:"docs-section",children:[e.jsx("h2",{children:s("exceptions.usage.title")}),e.jsx("p",{children:s("exceptions.usage.description")}),e.jsx(r,{code:i})]}),e.jsxs("section",{id:"exceptions-types",className:"docs-section",children:[e.jsx("h2",{children:s("exceptions.types.title")}),e.jsx("p",{children:s("exceptions.types.description")}),e.jsx(c,{columns:t,data:o})]})]})}export{l as default};
