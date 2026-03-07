function Installation() {
  return (
    <>
      <section id="requirements" className="docs-section">
        <h1>Installation</h1>
        <p>
          Antes de instalar Skyguard JS, asegúrate de tener Node.js 18 o superior
          y un proyecto TypeScript inicializado.
        </p>
      </section>

      <section id="npm" className="docs-section">
        <h2>Instalar con npm</h2>
        <pre className="docs-inline-code">
          <code>npm install skyguard-js</code>
        </pre>
      </section>

      <section id="pnpm" className="docs-section">
        <h2>Instalar con pnpm</h2>
        <pre className="docs-inline-code">
          <code>pnpm add skyguard-js</code>
        </pre>
      </section>

      <section id="verify" className="docs-section">
        <h2>Verificar instalación</h2>
        <p>
          Importa <code>createApp</code> en un archivo y ejecuta tu servidor para
          confirmar que la instalación fue correcta.
        </p>
      </section>
    </>
  );
}

export default Installation;
