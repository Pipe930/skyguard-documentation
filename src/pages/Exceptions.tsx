import CodeBlock from "../components/ui/CodeBlock";
import Table from "../components/ui/Table";
import {
  codeExampleExceptionsUsage,
  exceptionTypesColumns,
  exceptionTypesData,
} from "../data/dataExceptions";

function Exceptions() {
  return (
    <>
      <section id="exceptions" className="docs-section">
        <h1>Excepciones</h1>
        <p>
          El framework provee un conjunto de excepciones HTTP integradas que
          puedes lanzar desde handlers de rutas o middlewares. Cuando se lanza
          una excepción, el framework la detecta y responde automáticamente con
          el código de estado y el mensaje que definiste en la clase.
        </p>
      </section>
      <hr />
      <section id="exceptions-usage" className="docs-section">
        <h2>Ejemplo de uso</h2>
        <p>
          Puedes lanzar excepciones de forma explícita para errores de negocio
          (por ejemplo, recurso no encontrado) y envolver errores inesperados
          con una excepción 500 para mantener respuestas consistentes.
        </p>
        <CodeBlock code={codeExampleExceptionsUsage} />
      </section>
      <section id="exceptions-types" className="docs-section">
        <h2>Tipos de Excepciones</h2>
        <p>
          Estas son las excepciones HTTP soportadas por SkyguardJS y lo que
          representa cada una.
        </p>
        <Table columns={exceptionTypesColumns} data={exceptionTypesData} />
      </section>
    </>
  );
}

export default Exceptions;

