import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import { codeExampleRateLimit, codeExampleRateLimitCustomKey, codeExampleRateLimitGlobal, codeExampleRateLimitHandler, codeExampleRateLimitSkip, codeExampleRateLimitStore } from "../data/dataRateLimiting";

function RateLimiting() {
  return (
    <>
      <section id="rate-limiting" className="docs-section">
        <h1>Rate Limiting</h1>
        <p>
          El rate limiting limita la cantidad de solicitudes que un cliente puede
          realizar en una ventana de tiempo. Es una capa clave para proteger tu
          API de abuso, fuerza bruta y picos de tráfico no controlados.
        </p>
      </section>
      <hr />

      <section id="rate-limiting-importance" className="docs-section">
        <h2>¿Para qué se utiliza?</h2>
        <ul className="docs-lists">
          <li>Reducir ataques de fuerza bruta en login y endpoints sensibles.</li>
          <li>Evitar saturación del servidor por tráfico excesivo.</li>
          <li>Proteger recursos costosos como búsquedas o exportaciones.</li>
          <li>Mejorar estabilidad general bajo alta concurrencia.</li>
        </ul>
      </section>

      <section id="rate-limiting-middleware" className="docs-section">
        <h2>Uso básico del middleware rateLimit()</h2>
        <p>
          Puedes limitar solicitudes con el middleware integrado{" "}
          <mark className="docs-highlight">rateLimit</mark>.
        </p>
        <CodeBlock code={codeExampleRateLimit} />
      </section>

      <section id="rate-limiting-sensitive-routes" className="docs-section">
        <h2>Ejemplo en rutas sensibles</h2>
        <p>
          Es recomendable aplicar límites más estrictos en endpoints de
          autenticación o recuperación de cuentas.
        </p>
        <CodeBlock code={codeExampleRateLimitGlobal} />
      </section>

      <section id="rate-limiting-key-generator" className="docs-section">
        <h2>Personalizar keyGenerator</h2>
        <p>
          Por defecto se usa IP (considerando{" "}
          <mark className="docs-highlight">trustProxy</mark>). Si quieres cuotas
          por usuario autenticado, define{" "}
          <mark className="docs-highlight">keyGenerator</mark>.
        </p>
        <CodeBlock code={codeExampleRateLimitCustomKey} />
      </section>

      <section id="rate-limiting-skip" className="docs-section">
        <h2>Omitir rutas con skip</h2>
        <p>
          Usa <mark className="docs-highlight">skip</mark> para excluir rutas o
          condiciones específicas del conteo.
        </p>
        <CodeBlock code={codeExampleRateLimitSkip} />
      </section>

      <section id="rate-limiting-custom-handler" className="docs-section">
        <h2>Respuesta personalizada con handler</h2>
        <p>
          Puedes ajustar <mark className="docs-highlight">statusCode</mark>,{" "}
          <mark className="docs-highlight">message</mark> y definir un{" "}
          <mark className="docs-highlight">handler</mark> para retornar un formato
          de error propio. También puedes controlar headers con{" "}
          <mark className="docs-highlight">standardHeaders</mark> y{" "}
          <mark className="docs-highlight">legacyHeaders</mark>.
        </p>
        <CodeBlock code={codeExampleRateLimitHandler} />
      </section>

      <section id="rate-limiting-multi-instance" className="docs-section">
        <h2>Despliegues multi-instancia</h2>
        <p>
          En despliegues con múltiples instancias, provee un store compartido
          (por ejemplo Redis) implementando la interfaz{" "}
          <mark className="docs-highlight">RateLimitStore</mark> y pasándolo en{" "}
          <mark className="docs-highlight">store</mark>.
        </p>
        <Callout variant="warn">
          Si no usas un store compartido, cada instancia contará solicitudes por
          separado y los límites globales perderán precisión.
        </Callout>
        <CodeBlock code={codeExampleRateLimitStore} />
      </section>

      <section id="rate-limiting-best-practices" className="docs-section">
        <h2>Buenas prácticas</h2>
        <ul className="docs-lists">
          <li>
            Usa límites estrictos para login, recuperación de cuenta y endpoints
            de alto costo.
          </li>
          <li>
            Habilita <mark className="docs-highlight">trustProxy</mark> solo si tu
            API está detrás de un proxy reverso confiable.
          </li>
          <li>
            Mantén <mark className="docs-highlight">standardHeaders</mark> activos
            para facilitar observabilidad en clientes y gateways.
          </li>
          <li>
            En clúster o serverless multi-nodo, usa{" "}
            <mark className="docs-highlight">store</mark> compartido para evitar
            límites inconsistentes.
          </li>
        </ul>
      </section>
    </>
  );
}

export default RateLimiting;
