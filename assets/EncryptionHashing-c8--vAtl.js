import{j as s}from"./index-AJrTjCO-.js";import{C as n}from"./Callout-CrxKFo1l.js";import{C as t}from"./CodeBlock-BFJ7rdmv.js";import{u as e}from"./createLucideIcon-BXFtYZs2.js";import"./triangle-alert-DMqqz8xL.js";import"./copy-qIaFTmYD.js";const r=`import { createApp, Hasher } from "skyguard-js";

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
});`,o=`const passwordList = ["admin123", "john123", "ana123"];
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
npm install -D @types/bcrypt`,i=`import bcrypt from "bcrypt";

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

console.log({ isMatch, syncMatch, quickHash });`;function H(){const{t:a}=e();return s.jsxs(s.Fragment,{children:[s.jsxs("section",{id:"encryption-hashing",className:"docs-section",children:[s.jsx("h1",{children:a("encryptionHashing.page.title")}),s.jsx("p",{children:a("encryptionHashing.page.lead")})]}),s.jsx("hr",{}),s.jsxs("section",{id:"encryption-hashing-concepts",className:"docs-section",children:[s.jsx("h2",{children:a("encryptionHashing.concepts.title")}),s.jsx("p",{dangerouslySetInnerHTML:{__html:a("encryptionHashing.concepts.description")}}),s.jsx(n,{variant:"warn",children:a("encryptionHashing.concepts.warn")})]}),s.jsxs("section",{id:"encryption-hasher-example",className:"docs-section",children:[s.jsx("h2",{children:a("encryptionHashing.hasherExample.title")}),s.jsx("p",{dangerouslySetInnerHTML:{__html:a("encryptionHashing.hasherExample.description")}}),s.jsx(t,{code:r})]}),s.jsxs("section",{id:"encryption-hasher-batch",className:"docs-section",children:[s.jsx("h2",{children:a("encryptionHashing.hasherBatch.title")}),s.jsx("p",{dangerouslySetInnerHTML:{__html:a("encryptionHashing.hasherBatch.description")}}),s.jsx(t,{code:o})]}),s.jsxs("section",{id:"hashing-bcrypt-install",className:"docs-section",children:[s.jsx("h2",{children:a("encryptionHashing.bcryptInstall.title")}),s.jsx(t,{code:c})]}),s.jsxs("section",{id:"hashing-bcrypt-usage",className:"docs-section",children:[s.jsx("h2",{children:a("encryptionHashing.bcryptUsage.title")}),s.jsx("p",{dangerouslySetInnerHTML:{__html:a("encryptionHashing.bcryptUsage.description")}}),s.jsx(t,{code:i}),s.jsx(n,{variant:"tip",children:a("encryptionHashing.bcryptUsage.tip")})]})]})}export{H as default};
