import{j as e}from"./index-CVLVyqCr.js";import{C as a}from"./Callout-CPEMqqow.js";import{C as s}from"./CodeBlock-DqpFqFhe.js";import"./createLucideIcon-Ie-Bw47j.js";import"./triangle-alert-Bsll79NY.js";import"./copy-1r-K9xfu.js";const i=`import { v, schema, validateRequest } from "skyguard-js";

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
});`,t=`v.string()
v.string({ minLength: 3 })
v.string({ maxLength: 50 })
v.string({ length: 10 })
v.string({ isEmpty: true })
v.string().email()
v.string().url()
v.string().uuid()
v.string().regex(/^[a-z]+$/)`,n=`v.number()
v.number({ max: 5 })
v.number({ min: 10 })
v.number({ integer: true })
v.number({ positive: true })
v.number({ negative: true })`,r="v.boolean()",c=`v.bigint()
v.bigint({ gt: 5n })
v.bigint({ gte: 6n })
v.bigint({ lt: 4n })
v.bigint({ lte: 7n })
v.bigint({ positive: true })
v.bigint({ negative: true })`,o=`v.date()
v.date({ min: new Date() })
v.date({ max: new Date("07/12/2024") })
v.date({ format: "iso" })`,d=`v.array(v.string())
v.array(v.number())
v.array(v.string(), { minLength: 10 })
v.array(v.string(), { maxLength: 100 })`,l=`v.object({
  username: v.string(),
  email: v.string().email(),
  age: v.number(),
  active: v.boolean()
})`,m=`v.literal("admin")
v.literal(56)
v.literal(true)`,v=`v.union([v.string(), v.number()])

v.union([
  v.literal("admin"),
  v.literal("user"),
  v.literal("staff")
])`,h=`const schemaUser = v.object({
  username: v.string(),                  // Required
  email: v.string().email().optional(),  // Optional
  active: v.boolean().default(true)      // Optional with default value
})`,u=`const schemaUser = v.object({
  username: v.convert.string(),
  age: v.convert.number(),
  active: v.convert.boolean()
})`,p=`const completeSchema = schema({
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
  
app.post("/user", validationRequest(completeSchema), (ctx) => {
  const { id } = ctx.params;
  const { page, limit } = ctx.query;
  const { title, content } = ctx.body;
  return ctx.json({ message: "validation schema" });
})`,x=`const profileSchema = schema({
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
})`,g=`const batchSchema = schema({
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
 
app.post("/users/batch", [validationRequest(batchSchema)], (ctx) => {
  const { users } = ctx.body;
  // users is User[] with min 1, max 100 items
});`,j=`{
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
}`;function S(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"validation",className:"docs-section",children:[e.jsx("h1",{children:"Validación"}),e.jsx("p",{children:"Descubre el potente sistema de validación de SkyguardJS. proporciona un sistema de  validación de solicitudes integrado sin tener que instalar dependencias, lo que garantiza la integridad de los datos con menos sobre carga"})]}),e.jsx("hr",{}),e.jsxs("section",{id:"basic-validation",className:"docs-section",children:[e.jsx("h2",{children:"Validación Básica"}),e.jsxs("p",{children:["Para crear esquemas de validación utilice el constructor ",e.jsx("mark",{className:"docs-highlight",children:"t"})," para especificar las validaciones, la función ",e.jsx("mark",{className:"docs-highlight",children:"schema"})," para crear el esquema y el middleware ",e.jsx("mark",{className:"docs-highlight",children:"validationRequest()"})," para registrarlo en una ruta especifica."]}),e.jsx(s,{code:i})]}),e.jsxs("section",{id:"schema-types",className:"docs-section",children:[e.jsx("h2",{children:"Validación de Tipos"}),e.jsx("p",{children:"Skyguard admite multiples tipos de datos cona validación incorporada:"}),e.jsxs("div",{id:"schema-types-string",className:"docs-subsection",children:[e.jsx("h3",{children:"Strings"}),e.jsx(s,{code:t})]}),e.jsxs("div",{id:"schema-types-number",className:"docs-subsection",children:[e.jsx("h3",{children:"Numbers"}),e.jsx(s,{code:n})]}),e.jsxs("div",{id:"schema-types-boolean",className:"docs-subsection",children:[e.jsx("h3",{children:"Booleans"}),e.jsx(s,{code:r})]}),e.jsxs("div",{id:"schema-types-bigint",className:"docs-subsection",children:[e.jsx("h3",{children:"Bigints"}),e.jsx(s,{code:c})]}),e.jsxs("div",{id:"schema-types-date",className:"docs-subsection",children:[e.jsx("h3",{children:"Dates"}),e.jsx(s,{code:o})]}),e.jsxs("div",{id:"schema-types-array",className:"docs-subsection",children:[e.jsx("h3",{children:"Arrays"}),e.jsx(s,{code:d})]}),e.jsxs("div",{id:"schema-types-object",className:"docs-subsection",children:[e.jsx("h3",{children:"Objects"}),e.jsx(s,{code:l})]}),e.jsxs("div",{id:"schema-types-literal",className:"docs-subsection",children:[e.jsx("h3",{children:"Literals"}),e.jsx(s,{code:m})]}),e.jsxs("div",{id:"schema-types-union",className:"docs-subsection",children:[e.jsx("h3",{children:"Unions"}),e.jsx(s,{code:v})]})]}),e.jsxs("section",{id:"optional-fields",className:"docs-section",children:[e.jsx("h2",{children:"Campos Opcionales"}),e.jsx("p",{children:"Puedes indicar que los campos sean opcionales o que tengan algun valor por defecto, ya que, por defecto son requeridos:"}),e.jsx(s,{code:h})]}),e.jsxs("section",{id:"converter-fields",className:"docs-section",children:[e.jsx("h2",{children:"Convertidor de Tipos"}),e.jsx("p",{children:"Skyguard ofrece un convertidor de tipos, convierte el valor de entrada en el tipo de dato que le indiques:"}),e.jsx(s,{code:u}),e.jsx(a,{variant:"tip",children:"Puedes utilizar el convertidor de tipos para validar params o queries en las peticiones."})]}),e.jsxs("section",{id:"validating-different-parts",className:"docs-section",children:[e.jsx("h2",{children:"Validación de Diferentes Partes"}),e.jsx("p",{children:"Skyguard ofrece validar las diferentes partes de la peticion:"}),e.jsx(s,{code:p})]}),e.jsxs("section",{id:"nested-objects",className:"docs-section",children:[e.jsx("h2",{children:"Objetos Anidados"}),e.jsxs("p",{children:["Con la validacion de tipo ",e.jsx("mark",{className:"docs-highlight",children:"v.object()"})," se pueden validar estructuras anidadas complejas:"]}),e.jsx(s,{code:x})]}),e.jsxs("section",{id:"validation-array",className:"docs-section",children:[e.jsx("h2",{children:"Validación de Arrays"}),e.jsx("p",{children:"Se puede validar arrays que tenga objetos:"}),e.jsx(s,{code:g})]}),e.jsxs("section",{id:"error-handling",className:"docs-section",children:[e.jsx("h2",{children:"Manejo de Errores"}),e.jsx("p",{children:"Cuando falla la validación, Skyguard devuelve automáticamente un error 400 con los detalles:"}),e.jsx(s,{code:j}),e.jsx(a,{variant:"warn",children:"Los errores de validación se gestionan automáticamente. No es necesario escribir código de gestión de errores."})]})]})}export{S as default};
