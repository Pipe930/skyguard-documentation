import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import {
  codeExampleBcryptInstall,
  codeExampleBcryptUsage,
  codeExampleHasherBasic,
  codeExampleHasherBatch,
} from "../data/dataEncryptionHashing";

function EncryptionHashing() {
  return (
    <>
      <section id="encryption-hashing" className="docs-section">
        <h1>Encryption & Hashing</h1>
        <p>
          Encryption y hashing son pilares de seguridad en backend. Protegen
          credenciales, reducen impacto ante filtraciones y ayudan a cumplir
          requisitos mínimos de seguridad en APIs modernas.
        </p>
      </section>
      <hr />

      <section id="encryption-hashing-concepts" className="docs-section">
        <h2>¿Qué son y por qué importan?</h2>
        <p>
          <mark className="docs-highlight">Encryption</mark> transforma datos en
          un formato reversible (con clave) para proteger información sensible en
          tránsito o almacenamiento.{" "}
          <mark className="docs-highlight">Hashing</mark> transforma datos en un
          resumen no reversible y se usa especialmente para contraseñas.
        </p>
        <Callout variant="warn">
          Para contraseñas, usa hashing resistente a fuerza bruta (scrypt, bcrypt
          o argon2). No guardes contraseñas con cifrado reversible.
        </Callout>
      </section>

      <section id="encryption-hasher-example" className="docs-section">
        <h2>Ejemplo con Hasher (Skyguard)</h2>
        <p>
          Skyguard incluye <mark className="docs-highlight">Hasher</mark> con
          scrypt, salt aleatoria y soporte para verificación y rehash progresivo.
        </p>
        <CodeBlock code={codeExampleHasherBasic} />
      </section>

      <section id="encryption-hasher-batch" className="docs-section">
        <h2>Procesamiento por lotes</h2>
        <p>
          Para migraciones o validaciones masivas, use{" "}
          <mark className="docs-highlight">Hasher.hashBatch()</mark> y{" "}
          <mark className="docs-highlight">Hasher.verifyBatch()</mark> con
          concurrencia controlada.
        </p>
        <CodeBlock code={codeExampleHasherBatch} />
      </section>

      <section id="hashing-bcrypt-install" className="docs-section">
        <h2>Instalar bcrypt</h2>
        <CodeBlock code={codeExampleBcryptInstall} />
      </section>

      <section id="hashing-bcrypt-usage" className="docs-section">
        <h2>Funciones típicas de bcrypt</h2>
        <p>
          Este ejemplo cubre <mark className="docs-highlight">genSalt</mark>,{" "}
          <mark className="docs-highlight">hash</mark>,{" "}
          <mark className="docs-highlight">compare</mark> y sus variantes sync.
        </p>
        <CodeBlock code={codeExampleBcryptUsage} />
        <Callout variant="tip">
          En producción prioriza funciones async de bcrypt para evitar bloquear
          el event loop.
        </Callout>
      </section>
    </>
  );
}

export default EncryptionHashing;
