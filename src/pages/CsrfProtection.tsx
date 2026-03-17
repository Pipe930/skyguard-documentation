import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import { codeExampleCsrfBasic, codeExampleCsrfFetch, codeExampleCsrfHandlebars, codeExampleCsrfTemplate } from "../data/dataCsrfProtection";

function CsrfProtection() {
  return (
    <>
      <section id="csrf-protection" className="docs-section">
        <h1>CSRF Protección</h1>
        <p>
          CSRF (Cross-Site Request Forgery) es un ataque donde un sitio malicioso
          induce al navegador del usuario autenticado a ejecutar acciones no
          deseadas en tu aplicación.
        </p>
      </section>
      <hr />

      <section id="csrf-importance" className="docs-section">
        <h2>¿Por qué es importante mitigarlo?</h2>
        <p>
          Si no validas tokens CSRF, un atacante puede forzar operaciones como
          transferencias, cambios de contraseña o modificaciones de perfil usando
          la sesión activa de la víctima.
        </p>
        <Callout variant="warn">
          CSRF es especialmente crítico cuando usas autenticación basada en
          cookies, porque el navegador las envía automáticamente.
        </Callout>
      </section>

      <section id="csrf-middleware" className="docs-section">
        <h2>Middleware csrf() básico</h2>
        <p>
          Usa el middleware integrado <mark className="docs-highlight">csrf()</mark>{" "}
          para proteger endpoints contra ataques CSRF.
        </p>
        <CodeBlock code={codeExampleCsrfBasic} />
      </section>

      <section id="csrf-how-it-works" className="docs-section">
        <h2>Cómo funciona internamente</h2>
        <ul className="docs-lists">
          <li>
            Emite una cookie CSRF cuando falta (incluyendo primeras peticiones
            GET/HEAD/OPTIONS y solicitudes protegidas fallidas).
          </li>
          <li>
            Para métodos que cambian estado (POST/PUT/PATCH/DELETE), valida el
            token recibido en header/body contra el valor de la cookie.
          </li>
          <li>
            Valida <mark className="docs-highlight">Origin</mark>/
            <mark className="docs-highlight">Referer</mark> en solicitudes
            protegidas, y exige Referer en HTTPS cuando Origin no existe.
          </li>
          <li>
            Rechaza valores CSRF duplicados en headers para evitar ambiguedad al
            parsear tokens.
          </li>
        </ul>
      </section>

      <section id="csrf-templates" className="docs-section">
        <h2>Ejemplo con templates (Express Handlebars)</h2>
        <p>
          En render server-side, pasa el token CSRF a la vista e inclúyelo como
          campo oculto en formularios.
        </p>
        <CodeBlock code={codeExampleCsrfHandlebars} />
      </section>

      <section id="csrf-template-form" className="docs-section">
        <h2>Vista transfer.hbs</h2>
        <CodeBlock code={codeExampleCsrfTemplate} />
      </section>

      <section id="csrf-ajax" className="docs-section">
        <h2>CSRF en fetch/AJAX</h2>
        <p>
          Para peticiones AJAX, envía el mismo token en headers con el nombre
          definido en <mark className="docs-highlight">headerNames</mark>.
        </p>
        <CodeBlock code={codeExampleCsrfFetch} />
        <Callout variant="tip">
          Mantén el token CSRF alineado entre cookie, campo hidden y header para
          evitar falsos positivos de validación.
        </Callout>
      </section>
    </>
  );
}

export default CsrfProtection;
