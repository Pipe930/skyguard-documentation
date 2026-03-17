import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import {
  codeExampleContextBasics,
  codeExampleContextBodyCookiesSession,
  codeExampleContextCommonResponses,
  codeExampleContextFilesStreamRender,
  codeExampleContextReqRes,
} from "../data/dataRequestResponse";

function ContextPage() {
  return (
    <>
      <section id="context" className="docs-section">
        <h1>Contexto</h1>
        <p>
          <mark className="docs-highlight">Context</mark> unifica los objetos{" "}
          <mark className="docs-highlight">Request</mark> y{" "}
          <mark className="docs-highlight">Response</mark> en una sola API para
          middlewares y handlers.
        </p>
      </section>
      <hr />
      <section id="context-accessors" className="docs-section">
        <h2>Lectura de Datos de Petición</h2>
        <p>
          Use <mark className="docs-highlight">context.headers</mark>,{" "}
          <mark className="docs-highlight">context.params</mark>,{" "}
          <mark className="docs-highlight">context.query</mark> y{" "}
          <mark className="docs-highlight">context.remoteAddress</mark> para
          leer datos de entrada.
        </p>
        <CodeBlock code={codeExampleContextBasics} />
      </section>
      <section id="context-body-cookies-session" className="docs-section">
        <h2>Body, Cookies y Session</h2>
        <p>
          Con <mark className="docs-highlight">context.body</mark>,{" "}
          <mark className="docs-highlight">context.cookies</mark> y{" "}
          <mark className="docs-highlight">context.session</mark> puede acceder
          al payload, cookies y sesión activa.
        </p>
        <CodeBlock code={codeExampleContextBodyCookiesSession} />
      </section>
      <section id="context-req-res" className="docs-section">
        <h2>Acceso Directo a req y res</h2>
        <p>
          Si necesita control detallado puede usar{" "}
          <mark className="docs-highlight">context.req</mark> y{" "}
          <mark className="docs-highlight">context.res</mark>.
        </p>
        <CodeBlock code={codeExampleContextReqRes} />
        <Callout variant="tip">
          Prefiera los helpers de <mark className="docs-highlight">context</mark>{" "}
          para la mayoría de los casos y use <mark className="docs-highlight">res</mark>{" "}
          cuando necesite personalización avanzada.
        </Callout>
      </section>
      <section id="context-common-responses" className="docs-section">
        <h2>Respuestas Comunes</h2>
        <p>
          Para respuestas frecuentes use{" "}
          <mark className="docs-highlight">context.json()</mark>,{" "}
          <mark className="docs-highlight">context.text()</mark> y{" "}
          <mark className="docs-highlight">context.redirect()</mark>.
        </p>
        <CodeBlock code={codeExampleContextCommonResponses} />
      </section>
      <section id="context-files-stream-render" className="docs-section">
        <h2>Archivos, Stream y Render</h2>
        <p>
          También puede responder con archivos, streams o vistas usando{" "}
          <mark className="docs-highlight">context.download()</mark>,{" "}
          <mark className="docs-highlight">context.sendFile()</mark>,{" "}
          <mark className="docs-highlight">context.stream()</mark> y{" "}
          <mark className="docs-highlight">context.render()</mark>.
        </p>
        <CodeBlock code={codeExampleContextFilesStreamRender} />
        <Callout variant="danger">
          Antes de usar <mark className="docs-highlight">context.sendFile()</mark>{" "}
          o <mark className="docs-highlight">context.download()</mark>, valide
          rutas para evitar exponer archivos sensibles.
        </Callout>
      </section>
    </>
  );
}

export default ContextPage;
