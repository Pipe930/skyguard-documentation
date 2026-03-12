import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import { codeExampleArrayValidation, codeExampleCompleteSchema, codeExampleErrorHandling, codeExampleNestedOjects, codeExampleOptionalFields, codeExampleTypeArray, codeExampleTypeBigint, codeExampleTypeBoolean, codeExampleTypeDate, codeExampleTypeLiteral, codeExampleTypeNumber, codeExampleTypeObject, codeExampleTypeString, codeExampleTypeUnion, codeExampleValidation } from "../data/dataValidation";

function Validation() {
  return (
    <>
      <section id="validation" className="docs-section">
        <h1>Validación</h1>
        <p>
          Descubre el potente sistema de validación de SkyguardJS. proporciona un sistema de  validación de solicitudes integrado sin tener que instalar dependencias, lo que garantiza la integridad de los datos con menos sobre carga
        </p>
      </section>
      <hr />
      <section id="basic-validation" className="docs-section">
        <h2>Validación Básica</h2>
        <p>
          Para crear esquemas de validación utilice el constructor <mark className="docs-highlight">t</mark> para especificar las validaciones, la función <mark className="docs-highlight">schema</mark> para crear el esquema y el middleware <mark className="docs-highlight">validationRequest()</mark> para registrarlo en una ruta especifica.
        </p>
        <CodeBlock code={codeExampleValidation} />
      </section>
      <section id="schema-types" className="docs-section">
        <h2>Validación de Tipos</h2>
        <p>
          Skyguard admite multiples tipos de datos cona validación incorporada:
        </p>
        <div id="schema-types-string" className="docs-subsection">
          <h3>Strings</h3>
          <CodeBlock code={codeExampleTypeString} />
        </div>
        <div id="schema-types-number" className="docs-subsection">
          <h3>Numbers</h3>
          <CodeBlock code={codeExampleTypeNumber} />
        </div>
        <div id="schema-types-boolean" className="docs-subsection">
          <h3>Booleans</h3>
          <CodeBlock code={codeExampleTypeBoolean} />
        </div>
        <div id="schema-types-bigint" className="docs-subsection">
          <h3>Bigints</h3>
          <CodeBlock code={codeExampleTypeBigint} />
        </div>
        <div id="schema-types-date" className="docs-subsection">
          <h3>Dates</h3>
          <CodeBlock code={codeExampleTypeDate} />
        </div>
        <div id="schema-types-array" className="docs-subsection">
          <h3>Arrays</h3>
          <CodeBlock code={codeExampleTypeArray} />
        </div>
        <div id="schema-types-object" className="docs-subsection">
          <h3>Objects</h3>
          <CodeBlock code={codeExampleTypeObject} />
        </div>
        <div id="schema-types-literal" className="docs-subsection">
          <h3>Literals</h3>
          <CodeBlock code={codeExampleTypeLiteral} />
        </div>
        <div id="schema-types-union" className="docs-subsection">
          <h3>Unions</h3>
          <CodeBlock code={codeExampleTypeUnion} />
        </div>
      </section>
      <section id="optional-fields" className="docs-section">
        <h2>Campos Opcionales</h2>
        <p>Puedes indicar que los campos sean opcionales o que tengan algun valor por defecto, ya que, por defecto son requeridos:</p>
        <CodeBlock code={codeExampleOptionalFields} />
      </section>
      <section id="validating-different-parts" className="docs-section">
        <h2>Validación de Diferentes Partes</h2>
        <p>Skyguard ofrece validar las diferentes partes de la peticion:</p>
        <CodeBlock code={codeExampleCompleteSchema} />
      </section>
      <section id="nested-objects" className="docs-section">
        <h2>Objetos Anidados</h2>
        <p>Con la validacion de tipo <mark className="docs-highlight">v.object()</mark> se pueden validar estructuras anidadas complejas:</p>
        <CodeBlock code={codeExampleNestedOjects} />
      </section>
      <section id="validation-array" className="docs-section">
        <h2>Validación de Arrays</h2>
        <p>Se puede validar arrays que tenga objetos:</p>
        <CodeBlock code={codeExampleArrayValidation} />
      </section>
      <section id="error-handling" className="docs-section">
        <h2>Manejo de Errores</h2>
        <p>Cuando falla la validación, Skyguard devuelve automáticamente un error 400 con los detalles:</p>
        <CodeBlock code={codeExampleErrorHandling} />
        <Callout variant="warn">
          Los errores de validación se gestionan automáticamente. No es necesario escribir código de gestión de errores.
        </Callout>
      </section>
    </>
  );
}

export default Validation;
