import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import Table from "../components/ui/Table";
import {
  codeExampleBasicAuth,
  codeExampleSessionConfigFile,
  codeExampleJwtLogin,
  codeExampleJwtMiddleware,
  codeExampleSessionDatabaseBase,
  codeExampleSessionDatabaseOrm,
  codeExampleSessionDatabaseSql,
  codeExampleSessionFile,
  codeExampleSessionMemory,
  jwtAlgorithmsColumns,
  jwtAlgorithmsData,
  sessionSuggestedColumns,
  sessionSuggestedData,
} from "../data/dataAuthentication";

function Authentication() {
  return (
    <>
      <section id="authentication" className="docs-section">
        <h1>Autenticación</h1>
        <p>
          La autenticación es el proceso de verificar la identidad de un cliente
          antes de permitir acceso a recursos protegidos. En backend es esencial
          para controlar permisos, proteger datos sensibles y reducir riesgo de
          suplantación de identidad.
        </p>
      </section>
      <hr />
      <section id="authentication-importance" className="docs-section">
        <h2>¿Por qué es esencial en backend?</h2>
        <p>
          En una API, autenticación y autorización no son lo mismo. Primero se
          valida <mark className="docs-highlight">quién eres</mark>
          (autenticación), luego se valida <mark className="docs-highlight">qué
          puedes hacer</mark> (autorización). Si omites la autenticación,
          cualquier cliente podría ejecutar acciones privilegiadas.
        </p>
        <Callout variant="note">
          Buenas prácticas mínimas: credenciales en hash, tokens con expiración,
          cookies de sesión con <mark className="docs-highlight">httpOnly</mark> y
          rotación de secretos.
        </Callout>
      </section>
      <section id="authentication-basic-example" className="docs-section">
        <h2>Ejemplo básico</h2>
        <p>
          Este ejemplo usa una lista en memoria para validar usuario y contraseña.
          Es ideal para entender el flujo antes de conectar base de datos.
        </p>
        <CodeBlock code={codeExampleBasicAuth} />
      </section>
      <section id="authentication-sessions" className="docs-section">
        <h2>Autenticación con sesiones</h2>
        <p>
          Skyguard provee el middleware <mark className="docs-highlight">sessions()</mark>
          y tres estrategias de almacenamiento: memoria, archivo JSON y base de
          datos. Todas comparten el mismo patrón de login y acceso a
          <mark className="docs-highlight">request.session</mark>.
        </p>
        <div id="authentication-sessions-memory" className="docs-subsection">
          <h3>Session Storage en Memoria</h3>
          <p>
            Recomendado para desarrollo local o pruebas. No persiste si reinicias
            el proceso.
          </p>
          <CodeBlock code={codeExampleSessionMemory} />
        </div>
        <div id="authentication-sessions-file" className="docs-subsection">
          <h3>Session Storage en Archivo (JSON)</h3>
          <p>
            Usa <mark className="docs-highlight">FileSessionStorage</mark> para
            persistir sesiones en disco con cookies configurables.
          </p>
          <CodeBlock code={codeExampleSessionFile} />
        </div>
        <div id="authentication-sessions-database" className="docs-subsection">
          <h3>Session Storage en Base de Datos</h3>
          <p>
            Con <mark className="docs-highlight">DatabaseSessionStorage</mark> defines
            un adapter agnóstico al motor. Esto permite SQL directo u ORM con el
            mismo contrato.
          </p>
          <CodeBlock code={codeExampleSessionDatabaseBase} />
          <p style={
            {
              marginTop: "25px"
            }
          }>
            Estructura de tabla sugerida (portable entre motores):
          </p>
          <Table columns={sessionSuggestedColumns} data={sessionSuggestedData} />
          <Callout variant="note">
            Puedes utilizar cualquier conector de base de datos u ORM, solo tienes que utilizar la clase correspondiente que es como un adaptador, para que el framework pueda reconocer las sesiones de tu base de datos.
          </Callout>
          <p style={
            {
              marginTop: "25px"
            }
          }>
            Para mantener el código más limpio, conviene crear un archivo
            separado para configurar sesiones de base de datos, por ejemplo:
            <mark className="docs-highlight"> src/sessions/config.ts</mark>.
          </p>
          <CodeBlock code={codeExampleSessionConfigFile} />
        </div>
        <div id="authentication-sessions-sql" className="docs-subsection">
          <h3>Ejemplo SQL (Postgresql)</h3>
          <CodeBlock code={codeExampleSessionDatabaseSql} />
        </div>
        <div id="authentication-sessions-orm" className="docs-subsection">
          <h3>Ejemplo ORM (Prisma)</h3>
          <CodeBlock code={codeExampleSessionDatabaseOrm} />
        </div>
      </section>
      <section id="authentication-jwt" className="docs-section">
        <h2>Autenticación con JSON Web Token (JWT)</h2>
        <p>
          Skyguard incluye una clase interna
          <mark className="docs-highlight"> JWT</mark> para crear y verificar
          tokens. El patrón recomendado es emitir token en login y validar con
          middleware en rutas protegidas.
        </p>
      </section>
      <section id="authentication-jwt-create" className="docs-section">
        <h2>Crear JWT en login</h2>
        <CodeBlock code={codeExampleJwtLogin} />
      </section>
      <section id="authentication-jwt-middleware" className="docs-section">
        <h2>Middleware para validar JWT</h2>
        <CodeBlock code={codeExampleJwtMiddleware} />
      </section>
      <section id="authentication-jwt-algorithms" className="docs-section">
        <h2>Algoritmos soportados por JWT</h2>
        <Table columns={jwtAlgorithmsColumns} data={jwtAlgorithmsData} />
        <Callout variant="warn">
          Aclaración criptográfica: los algoritmos
          <mark className="docs-highlight"> HS*</mark> usan clave simétrica
          compartida; los <mark className="docs-highlight">RS*</mark> usan par de
          claves asimétricas (privada/pública).
        </Callout>
      </section>
    </>
  );
}

export default Authentication;
