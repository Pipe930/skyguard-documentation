import{j as s}from"./index-fOYKewRH.js";import{C as e}from"./Callout-9qSpZnQ1.js";import{C as a}from"./CodeBlock-DTLFiySJ.js";import"./createLucideIcon-CTGwtd9Y.js";import"./triangle-alert-D3tcecpy.js";import"./copy-BNsThm3t.js";const r=`import { createApp, Hasher } from "skyguard-js";

const app = createApp();

app.post("/auth/register", async (context) => {
  const { password } = context.body;
  const passwordHash = await Hasher.hash(password, 16);

  // guardar passwordHash en base de datos
  return context.json({ ok: true, passwordHash });
});

app.post("/auth/login", async (context) => {
  const { password, storedHash } = context.body;
  const isValid = await Hasher.verify(password, storedHash);

  if (!isValid) {
    return context.text("invalid credentials");
  }

  if (Hasher.needsRehash(storedHash)) {
    const updatedHash = await Hasher.hash(password);
    // actualizar hash en base de datos
    return context.json({ ok: true, rehash: true, updatedHash });
  }

  return context.json({ ok: true, rehash: false });
});`,n=`const passwordList = ["admin123", "john123", "ana123"];
const hashedList = await Hasher.hashBatch(passwordList, 16, 4);

const verification = await Hasher.verifyBatch(
  [
    { password: "admin123", hash: hashedList[0] },
    { password: "john123", hash: hashedList[1] },
    { password: "wrong-password", hash: hashedList[2] },
  ],
  8,
);

console.log(verification); // [true, true, false]`,c=`npm install bcrypt
npm install -D @types/bcrypt`,t=`import bcrypt from "bcrypt";

const plainPassword = "mySecretPassword";
const rounds = 12;

// 1) Generar salt
const salt = await bcrypt.genSalt(rounds);

// 2) Hash con salt explícito
const passwordHash = await bcrypt.hash(plainPassword, salt);

// 3) Hash directo (bcrypt genera salt internamente)
const quickHash = await bcrypt.hash(plainPassword, rounds);

// 4) Verificar contraseña
const isMatch = await bcrypt.compare(plainPassword, passwordHash);

// 5) Versiones sync (útiles en scripts, no recomendadas en hot paths)
const syncHash = bcrypt.hashSync(plainPassword, rounds);
const syncMatch = bcrypt.compareSync(plainPassword, syncHash);

console.log({ isMatch, syncMatch, quickHash });`;function m(){return s.jsxs(s.Fragment,{children:[s.jsxs("section",{id:"encryption-hashing",className:"docs-section",children:[s.jsx("h1",{children:"Encriptación & Hashing"}),s.jsx("p",{children:"Encriptación y hashing son pilares de seguridad en backend. Protegen credenciales, reducen impacto ante filtraciones y ayudan a cumplir requisitos mínimos de seguridad en APIs modernas."})]}),s.jsx("hr",{}),s.jsxs("section",{id:"encryption-hashing-concepts",className:"docs-section",children:[s.jsx("h2",{children:"¿Qué son y por qué importan?"}),s.jsxs("p",{children:[s.jsx("mark",{className:"docs-highlight",children:"Encriptación"})," transforma datos en un formato reversible (con clave) para proteger información sensible en tránsito o almacenamiento."," ",s.jsx("mark",{className:"docs-highlight",children:"Hashing"})," transforma datos en un resumen no reversible y se usa especialmente para contraseñas."]}),s.jsx(e,{variant:"warn",children:"Para contraseñas, usa hashing resistente a fuerza bruta (scrypt, bcrypt o argon2). No guardes contraseñas con cifrado reversible."})]}),s.jsxs("section",{id:"encryption-hasher-example",className:"docs-section",children:[s.jsx("h2",{children:"Ejemplo con Hasher (Skyguard)"}),s.jsxs("p",{children:["Skyguard incluye ",s.jsx("mark",{className:"docs-highlight",children:"Hasher"})," con scrypt, salt aleatoria y soporte para verificación y rehash progresivo."]}),s.jsx(a,{code:r})]}),s.jsxs("section",{id:"encryption-hasher-batch",className:"docs-section",children:[s.jsx("h2",{children:"Procesamiento por lotes"}),s.jsxs("p",{children:["Para migraciones o validaciones masivas, use"," ",s.jsx("mark",{className:"docs-highlight",children:"Hasher.hashBatch()"})," y"," ",s.jsx("mark",{className:"docs-highlight",children:"Hasher.verifyBatch()"})," con concurrencia controlada."]}),s.jsx(a,{code:n})]}),s.jsxs("section",{id:"hashing-bcrypt-install",className:"docs-section",children:[s.jsx("h2",{children:"Instalar bcrypt"}),s.jsx(a,{code:c})]}),s.jsxs("section",{id:"hashing-bcrypt-usage",className:"docs-section",children:[s.jsx("h2",{children:"Funciones típicas de bcrypt"}),s.jsxs("p",{children:["Este ejemplo cubre ",s.jsx("mark",{className:"docs-highlight",children:"genSalt"}),","," ",s.jsx("mark",{className:"docs-highlight",children:"hash"}),","," ",s.jsx("mark",{className:"docs-highlight",children:"compare"})," y sus variantes sync."]}),s.jsx(a,{code:t}),s.jsx(e,{variant:"tip",children:"En producción prioriza funciones async de bcrypt para evitar bloquear el event loop."})]})]})}export{m as default};
