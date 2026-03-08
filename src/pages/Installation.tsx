import InstallCommandTabs from "../components/ui/CommandTabs";

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

      <section id="quick-install" className="docs-section">
        <h2>Comandos de instalación</h2>
        <p>Selecciona tu manejador de paquetes para copiar el comando de instalación.</p>
        <InstallCommandTabs />
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
