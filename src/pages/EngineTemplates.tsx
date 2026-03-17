import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import { codeExampleEjs, codeExampleHandlebars, codeExamplePug, codeExampleRender, codeExampleViewsAndEngine } from "../data/dataEngineTemplates";

function EngineTemplates() {
  return (
    <>
      <section id="engine-templates" className="docs-section">
        <h1>Motores de Plantillas</h1>
        <p>
          Para renderizar vistas debes configurar la carpeta de templates con{" "}
          <mark className="docs-highlight">app.views()</mark>, registrar motores
          con <mark className="docs-highlight">app.engineTemplates()</mark> y
          finalmente responder usando{" "}
          <mark className="docs-highlight">Response.render()</mark>.
        </p>
      </section>
      <hr />
      <section id="engine-templates-setup" className="docs-section">
        <h2>Configuración Base</h2>
        <p>
          El método <mark className="docs-highlight">views()</mark> define dónde
          están tus vistas y <mark className="docs-highlight">engineTemplates()</mark>{" "}
          asocia una extensión con su motor de render.
        </p>
        <CodeBlock code={codeExampleViewsAndEngine} />
      </section>
      <section id="engine-templates-render" className="docs-section">
        <h2>Uso con Response.render()</h2>
        <p>
          Después de configurar la carpeta y el motor, utiliza{" "}
          <mark className="docs-highlight">Response.render()</mark> para enviar la
          vista con los datos dinámicos.
        </p>
        <CodeBlock code={codeExampleRender} />
      </section>
      <section id="engine-templates-compatible" className="docs-section">
        <h2>Motores Compatibles Actualmente</h2>
        <p>
          Actualmente Skyguard funciona con motores de terceros como{" "}
          <mark className="docs-highlight">Express Handlebars</mark>,{" "}
          <mark className="docs-highlight">EJS</mark> y{" "}
          <mark className="docs-highlight">Pug</mark>. A futuro se planea incluir
          un motor de plantillas propio.
        </p>
      </section>
      <section id="engine-templates-handlebars" className="docs-section">
        <h2>Express Handlebars</h2>
        <p>
          Registra la extensión <mark className="docs-highlight">hbs</mark> y la
          configuración del layout principal.
        </p>
        <CodeBlock code={codeExampleHandlebars} />
      </section>
      <section id="engine-templates-ejs" className="docs-section">
        <h2>EJS</h2>
        <p>
          Asocia <mark className="docs-highlight">ejs</mark> usando{" "}
          <mark className="docs-highlight">ejs.renderFile()</mark> para que
          Skyguard pueda renderizar tus vistas por extensión.
        </p>
        <CodeBlock code={codeExampleEjs} />
      </section>
      <section id="engine-templates-pug" className="docs-section">
        <h2>Pug</h2>
        <p>
          Configura la extensión <mark className="docs-highlight">pug</mark> con{" "}
          <mark className="docs-highlight">pug.renderFile()</mark> y utiliza la
          misma API de <mark className="docs-highlight">Response.render()</mark>.
        </p>
        <CodeBlock code={codeExamplePug} />
        <Callout variant="tip">
          Mantén una convención de nombres entre archivo y vista (por ejemplo{" "}
          <mark className="docs-highlight">dashboard.pug</mark> con{" "}
          <mark className="docs-highlight">Response.render("dashboard")</mark>) para
          evitar errores de resolución.
        </Callout>
      </section>
      <Callout variant="warn">
        Si registras varios motores, la extensión de la vista define cuál se
        utiliza en cada render.
      </Callout>
    </>
  );
}

export default EngineTemplates;
