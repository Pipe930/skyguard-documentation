import{j as e}from"./index-AJrTjCO-.js";import{C as t}from"./Callout-CrxKFo1l.js";import{C as s}from"./CodeBlock-BFJ7rdmv.js";import{u as a}from"./createLucideIcon-BXFtYZs2.js";import"./triangle-alert-DMqqz8xL.js";import"./copy-qIaFTmYD.js";const n=`import { v, schema, validateRequest } from "skyguard-js";

const userSchema = schema({
  body: {
    name: v.string({ maxLength: 60 }),
    email: v.email(),
    age: v.number({ min: 18 }),
    active: v.boolean().default(false),
    birthdate: v.date({ max: new Date() }),
  },
});

app.post("/test", [validateRequest(userSchema)], (ctx) => {
  const data = ctx.body;
  return ctx.json(data).setStatusCode(201);
});`,c=`v.string()
v.string({ minLength: 3 })
v.string({ maxLength: 50 })
v.string({ length: 10 })
v.string({ isEmpty: true })
v.string().email()
v.string().url()
v.string().uuid()
v.string().regex(/^[a-z]+$/)`,o=`v.number()
v.number({ max: 5 })
v.number({ min: 10 })
v.number({ integer: true })
v.number({ positive: true })
v.number({ negative: true })`,r="v.boolean()",d=`v.bigint()
v.bigint({ gt: 5n })
v.bigint({ gte: 6n })
v.bigint({ lt: 4n })
v.bigint({ lte: 7n })
v.bigint({ positive: true })
v.bigint({ negative: true })`,l=`v.date()
v.date({ min: new Date() })
v.date({ max: new Date("07/12/2024") })
v.date({ format: "iso" })`,m=`v.array(v.string())
v.array(v.number())
v.array(v.string(), { minLength: 10 })
v.array(v.string(), { maxLength: 100 })`,v=`v.object({
  username: v.string(),
  email: v.string().email(),
  age: v.number(),
  active: v.boolean()
})`,h=`v.literal("admin")
v.literal(56)
v.literal(true)`,x=`v.union([v.string(), v.number()])

v.union([
  v.literal("admin"),
  v.literal("user"),
  v.literal("staff")
])`,p=`const schemaUser = v.object({
  username: v.string(),                  // Required
  email: v.string().email().optional(),  // Optional
  active: v.boolean().default(true)      // Optional with default value
})`,u=`const schemaUser = v.object({
  username: v.convert.string(),
  age: v.convert.number(),
  active: v.convert.boolean()
})`,j=`const completeSchema = schema({
  params: {
    id: v.string().uuid()
  },
  query: {
    page: v.number({ min: 1 }).default(1),
    limit: v.number({ min: 1, max: 100 }).default(10)
  },
  body: {
    name: v.string({ maxLength: 60 }),
    email: v.email(),
    age: v.number({ min: 18 }),
    active: v.boolean().default(false),
    birthdate: v.date({ max: new Date() }),
  },
})
  
app.post("/user", [validateRequest(completeSchema)], (ctx) => {
  const { id } = ctx.params;
  const { page, limit } = ctx.query;
  const { title, content } = ctx.body;
  return ctx.json({ message: "validation schema" });
})`,g=`const profileSchema = schema({
  body: {
    user: v.object({
      name: v.string(),
      profile: v.object({
        bio: v.string(),
        avatar: v.string().url().optional(),
        social: v.object({
          twitter: v.string().optional(),
          github: v.string().optional()
        })
      })
    })
  },
})`,b=`const batchSchema = schema({
  body: {
    users: v.array(
      v.object({
        name: v.string(),
        email: v.string().email()
      }),
      { minLength: 1, maxLength: 100 }
    )
  }
});
 
app.post("/users/batch", [validateRequest(batchSchema)], (ctx) => {
  const { users } = ctx.body;
  // users is User[] with min 1, max 100 items
});`,y=`{
  "message": "Validation Error",
  "errors": {
    "name": [
        "name is required"
    ],
    "email": [
        "email is required"
    ],
    "age": [
        "age is required"
    ],
    "active": [
        "active is required"
    ]
  }
}`;function q(){const{t:i}=a();return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"validation",className:"docs-section",children:[e.jsx("h1",{children:i("validation.page.title")}),e.jsx("p",{children:i("validation.page.lead")})]}),e.jsx("hr",{}),e.jsxs("section",{id:"basic-validation",className:"docs-section",children:[e.jsx("h2",{children:i("validation.basic.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:i("validation.basic.description")}}),e.jsx(s,{code:n})]}),e.jsxs("section",{id:"schema-types",className:"docs-section",children:[e.jsx("h2",{children:i("validation.types.title")}),e.jsx("p",{children:i("validation.types.description")}),e.jsxs("div",{id:"schema-types-string",className:"docs-subsection",children:[e.jsx("h3",{children:"Strings"}),e.jsx(s,{code:c})]}),e.jsxs("div",{id:"schema-types-number",className:"docs-subsection",children:[e.jsx("h3",{children:"Numbers"}),e.jsx(s,{code:o})]}),e.jsxs("div",{id:"schema-types-boolean",className:"docs-subsection",children:[e.jsx("h3",{children:"Booleans"}),e.jsx(s,{code:r})]}),e.jsxs("div",{id:"schema-types-bigint",className:"docs-subsection",children:[e.jsx("h3",{children:"Bigints"}),e.jsx(s,{code:d})]}),e.jsxs("div",{id:"schema-types-date",className:"docs-subsection",children:[e.jsx("h3",{children:"Dates"}),e.jsx(s,{code:l})]}),e.jsxs("div",{id:"schema-types-array",className:"docs-subsection",children:[e.jsx("h3",{children:"Arrays"}),e.jsx(s,{code:m})]}),e.jsxs("div",{id:"schema-types-object",className:"docs-subsection",children:[e.jsx("h3",{children:"Objects"}),e.jsx(s,{code:v})]}),e.jsxs("div",{id:"schema-types-literal",className:"docs-subsection",children:[e.jsx("h3",{children:"Literals"}),e.jsx(s,{code:h})]}),e.jsxs("div",{id:"schema-types-union",className:"docs-subsection",children:[e.jsx("h3",{children:"Unions"}),e.jsx(s,{code:x})]})]}),e.jsxs("section",{id:"optional-fields",className:"docs-section",children:[e.jsx("h2",{children:i("validation.optionalFields.title")}),e.jsx("p",{children:i("validation.optionalFields.description")}),e.jsx(s,{code:p})]}),e.jsxs("section",{id:"converter-fields",className:"docs-section",children:[e.jsx("h2",{children:i("validation.converter.title")}),e.jsx("p",{children:i("validation.converter.description")}),e.jsx(s,{code:u}),e.jsx(t,{variant:"tip",children:i("validation.converter.tip")})]}),e.jsxs("section",{id:"validating-different-parts",className:"docs-section",children:[e.jsx("h2",{children:i("validation.differentParts.title")}),e.jsx("p",{children:i("validation.differentParts.description")}),e.jsx(s,{code:j})]}),e.jsxs("section",{id:"nested-objects",className:"docs-section",children:[e.jsx("h2",{children:i("validation.nestedObjects.title")}),e.jsx("p",{dangerouslySetInnerHTML:{__html:i("validation.nestedObjects.description")}}),e.jsx(s,{code:g})]}),e.jsxs("section",{id:"validation-array",className:"docs-section",children:[e.jsx("h2",{children:i("validation.arrayValidation.title")}),e.jsx("p",{children:i("validation.arrayValidation.description")}),e.jsx(s,{code:b})]}),e.jsxs("section",{id:"error-handling",className:"docs-section",children:[e.jsx("h2",{children:i("validation.errorHandling.title")}),e.jsx("p",{children:i("validation.errorHandling.description")}),e.jsx(s,{code:y}),e.jsx(t,{variant:"warn",children:i("validation.errorHandling.warn")})]})]})}export{q as default};
