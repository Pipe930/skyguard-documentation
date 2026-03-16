export const codeExampleHasherBasic = `import { createApp, Hasher } from "skyguard-js";

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
});`;

export const codeExampleHasherBatch = `const passwordList = ["admin123", "john123", "ana123"];
const hashedList = await Hasher.hashBatch(passwordList, 16, 4);

const verification = await Hasher.verifyBatch(
  [
    { password: "admin123", hash: hashedList[0] },
    { password: "john123", hash: hashedList[1] },
    { password: "wrong-password", hash: hashedList[2] },
  ],
  8,
);

console.log(verification); // [true, true, false]`;

export const codeExampleBcryptInstall = `npm install bcrypt
npm install -D @types/bcrypt`;

export const codeExampleBcryptUsage = `import bcrypt from "bcrypt";

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

console.log({ isMatch, syncMatch, quickHash });`;
