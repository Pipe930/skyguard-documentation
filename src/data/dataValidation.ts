export const codeExampleValidation = `import { v, schema, validateRequest, json } from "skyguard-js";

const userSchema = schema({
  body: {
    name: v.string({ maxLength: 60 }),
    email: v.email(),
    age: v.number({ min: 18 }),
    active: v.boolean().default(false),
    birthdate: v.date({ max: new Date() }),
  },
});

app.post("/test", [validateRequest(userSchema)], (request: Request) => {
  const data = request.body;
  return json(data).setStatusCode(201);
});`;

export const codeExampleTypeString = `v.string()
v.string({ minLength: 3 })
v.string({ maxLength: 50 })
v.string({ length: 10 })
v.string({ isEmpty: true })
v.string().email()
v.string().url()
v.string().uuid()
v.string().regex(/^[a-z]+$/)`;

export const codeExampleTypeNumber = `v.number()
v.number({ max: 5 })
v.number({ min: 10 })
v.number({ integer: true })
v.number({ positive: true })
v.number({ negative: true })`;

export const codeExampleTypeBoolean = `v.boolean()`;

export const codeExampleTypeBigint = `v.bigint()
v.bigint({ gt: 5n })
v.bigint({ gte: 6n })
v.bigint({ lt: 4n })
v.bigint({ lte: 7n })
v.bigint({ positive: true })
v.bigint({ negative: true })`;

export const codeExampleTypeDate = `v.date()
v.date({ min: new Date() })
v.date({ max: new Date("07/12/2024") })
v.date({ format: "iso" })`;

export const codeExampleTypeArray = `v.array(v.string())
v.array(v.number())
v.array(v.string(), { minLength: 10 })
v.array(v.string(), { maxLength: 100 })`;

export const codeExampleTypeObject = `v.object({
  username: v.string(),
  email: v.string().email(),
  age: v.number(),
  active: v.boolean()
})`;

export const codeExampleTypeLiteral = `v.literal("admin")
v.literal(56)
v.literal(true)`;

export const codeExampleTypeUnion = `v.union([v.string(), v.number()])

v.union([
  v.literal("admin"),
  v.literal("user"),
  v.literal("staff")
])`;

export const codeExampleOptionalFields = `const schemaUser = v.object({
  username: v.string(),                  // Required
  email: v.string().email().optional(),  // Optional
  active: v.boolean().default(true)      // Optional with default value
})`;

export const codeExampleCompleteSchema = `const completeSchema = schema({
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
  
app.post("/user", validationRequest(completeSchema), (request) => {
  const { id } = request.params;
  const { page, limit } = request.query;
  const { title, content } = request.body;
  return Response.json({ message: "validation schema" });
})`;

export const codeExampleNestedOjects = `const profileSchema = schema({
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
})`;

export const codeExampleArrayValidation = `const batchSchema = schema({
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
 
app.post("/users/batch", [validationRequest(batchSchema)], (request) => {
  const { users } = request.body;
  // users is User[] with min 1, max 100 items
});`;

export const codeExampleErrorHandling = `{
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
}`;
