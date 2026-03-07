import CodeBlock from "../components/ui/CodeBlock";
import Navbar from "../components/layout/Headerbar";
import { useState } from "react";
import {
  Box,
  Copy,
  Check,
  Feather,
  Shield,
  Zap,
  Server,
} from "lucide-react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const installationCommand = "npm install skyguard-js";
const rawCode = `import { createApp, Response } from "skyguard-js";

const app = createApp();

app.get("/health", () => {
  return Response.json({ status: "ok" });
});

app.run(3000, () => {
  console.log("Server running in port 3000");
});`;

const features = [
  {
    title: "Ligero",
    description:
      "Diseñado para mantenerse pequeño, rápido y fácil de integrar en cualquier proyecto backend.",
    icon: <Zap size={20} />,
  },
  {
    title: "Sin dependencias",
    description:
      "Menor complejidad, mayor control y una base más estable para construir tu servidor.",
    icon: <Box size={20} />,
  },
  {
    title: "TypeScript first",
    description:
      "Tipado estático, autocompletado y una experiencia de desarrollo moderna desde el inicio.",
    icon: <Feather size={20} />,
  },
  {
    title: "Ideal para APIs",
    description:
      "Una base clara y directa para crear APIs y servidores web con una arquitectura simple.",
    icon: <Server size={20} />,
  },
  {
    title: "Arquitectura sólida",
    description:
      "Enfoque en claridad interna, mantenibilidad y organización del framework a largo plazo.",
    icon: <Shield size={20} />,
  },
];

function Home() {
  const [installCopied, setInstallCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const copyText = async (
    value: string,
    setter: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    try {
      await navigator.clipboard.writeText(value);
      setter(true);
      window.setTimeout(() => setter(false), 1800);
    } catch {
      console.error("Could not copy text");
    }
  };

  return (
    <>
    <Navbar />
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Lightweight TypeScript Framework</span>

          <h1 className="hero-title">Skyguard <span className="hero-title-color">JS</span></h1>

          <p className="hero-description">
            Skyguard JS es un framework ligero, sin dependencias y escrito en
            TypeScript para crear APIs y servidores web.
          </p>

          <div className="hero-install">
            <span className="install-label">Instalación</span>

            <div className="install-command">
              <code>{installationCommand}</code>

              <button
                type="button"
                className="icon-copy-button"
                onClick={() => copyText(installationCommand, setInstallCopied)}
                aria-label="Copiar comando de instalación"
                title="Copiar comando"
              >
                {installCopied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/docs" className="btn btn-primary">
                Empezar
            </Link>

            <a
              href="https://github.com/Pipe930/Skyguard-js"
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Código Github
            </a>
          </div>
        </div>

        <div className="hero-visual">
            <img
              src="/logo-skyguard-js.png"
              alt="Skyguard JS logo"
              className="hero-logo"
              />
        </div>
      </section>

      <section className="features">
        <div className="section-heading">
          <h2>Fortalezas del framework</h2>
          <p>
            Una base moderna para desarrollar servidores web y APIs con enfoque
            en simplicidad, rendimiento y control.
          </p>
        </div>

        <div className="features-grid">
          {features.map(feature => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="example">
        <div className="section-heading">
          <h2>Ejemplo rápido</h2>
          <p>Así de simple puede ser levantar un servidor con Skyguard JS.</p>
        </div>

        <div className="code-block">
            <div className="code-block-header">
                <span>example.ts</span>

                <button
                type="button"
                className="icon-copy-button"
                onClick={() => copyText(rawCode, setCodeCopied)}
                aria-label="Copiar código"
                title="Copiar código"
                >
                {codeCopied ? <Check size={16} /> : <Copy size={16} />}
                </button>
            </div>

            <CodeBlock code={rawCode} />
        </div>
      </section>
    </main>
    </>
  );
}

export default Home;