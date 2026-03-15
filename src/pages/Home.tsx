import HomeNavbar from "../components/layout/HomeNavbar";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Copy,
  Check,
  Feather,
  Github,
  Shield,
  Zap,
  Server,
} from "lucide-react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Card from "../components/ui/Card";
import type { LoadedHighlighter, Theme } from "../types";

const installationCommand = "npm install skyguard-js";

let highlighterLoader: Promise<LoadedHighlighter> | null = null;

function loadHighlighter() {
  if (!highlighterLoader) {
    highlighterLoader = Promise.all([
      import("react-syntax-highlighter/dist/esm/prism-light"),
      import("react-syntax-highlighter/dist/esm/languages/prism/typescript"),
      import("react-syntax-highlighter/dist/esm/styles/prism"),
    ]).then(([highlighterModule, typescriptModule, styleModule]) => {
      highlighterModule.default.registerLanguage("typescript", typescriptModule.default);

      return {
        PrismLight: highlighterModule.default,
        oneLight: styleModule.oneLight as Record<string, CSSProperties>,
        oneDark: styleModule.oneDark as Record<string, CSSProperties>,
      };
    });
  }

  return highlighterLoader;
}

const showcaseItems = [
  {
    title: "Confidence Through Type-Safety",
    points: [
      {
        title: "Eliminate Runtime Errors",
        description:
          "Catch common mistakes at compile time with strict TypeScript types and predictable contracts.",
      },
      {
        title: "Simplify API Contracts",
        description:
          "Define expected input and output clearly so every endpoint stays documented by design.",
      },
      {
        title: "Effortless Refactoring",
        description:
          "Evolve your codebase safely while the type system highlights impacted paths instantly.",
      },
    ],
    codeLabel: "server.ts",
    code: `import { createApp, Response } from "skyguard-js";

const app = createApp();

app.get("/", () => {
  return Response.json({ status: "ok" });
});

app.run(3000);`,
  },
  {
    title: "High-Performance Validation",
    points: [
      {
        title: "Blazing Speed",
        description:
          "Validate input using lightweight schemas designed to keep request handling fast.",
      },
      {
        title: "Detailed Validation",
        description:
          "Get explicit messages for invalid payloads and return responses with confidence.",
      },
      {
        title: "Seamless Integration",
        description:
          "Apply validation at route level so your existing handlers remain clean and readable.",
      },
    ],
    codeLabel: "validation.ts",
    code: `import { createApp, v, schema, validatorRequest } from "skyguard-js";

const app = createApp();

const userSchema = schema({
  body: {  
    name: v.string({ minLength: 3 }),
    email: v.string().email(),
  }
});

app.post("/users", [validatorRequest(userSchema)], (request) => {
  return { created: true, user: request.body };
});`,
  },
  {
    title: "Extendable, but always secure",
    points: [
      {
        title: "Extensible context",
        description:
          "Add custom data to your request lifecycle while preserving strong typing across handlers.",
      },
      {
        title: "Always secure",
        description:
          "Use clear middleware composition to protect endpoints and keep your architecture maintainable.",
      },
    ],
    codeLabel: "extend.ts",
    code: `import { createApp } from "skyguard-js";

interface AuthContext {
  user: { id: string; role: "admin" | "user" };
}

const app = createApp<AuthContext>();

app.use((ctx, next) => {
  ctx.user = { id: "1", role: "admin" };
  return next();
});`,
  },
];

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
  const [theme, setTheme] = useState<Theme>("dark");
  const [highlighter, setHighlighter] = useState<LoadedHighlighter | null>(null);

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

  useEffect(() => {
    const getTheme = () =>
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";

    const syncTheme = () => setTheme(getTheme());
    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let mounted = true;

    loadHighlighter().then(loaded => {
      if (mounted) {
        setHighlighter(loaded);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const SyntaxHighlighter = highlighter?.PrismLight;

  return (
    <>
    <HomeNavbar />
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
                className="icon-copy-button-home"
                onClick={() => copyText(installationCommand, setInstallCopied)}
                aria-label="Copiar comando de instalación"
                title="Copiar comando"
              >
                {installCopied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/docs/introduction" className="btn btn-primary">
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
            <Card key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </section>

      <section className="example">
        <div className="example-showcase">
          {showcaseItems.map((item, index) => (
            <article
              key={item.title}
              className={`example-showcase-item ${index % 2 !== 0 ? "is-reverse" : ""}`}
            >
              <div className="example-showcase-copy">
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map(point => (
                    <li key={point.title}>
                      <p className="point-title">{point.title}</p>
                      <p className="point-description">{point.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="example-code-card">
                <div className="example-code-header">
                  <div className="example-code-dots" aria-hidden="true">
                    <span/>
                    <span/>
                    <span/>
                  </div>
                  <span>{item.codeLabel}</span>
                </div>
                {SyntaxHighlighter && highlighter ? (
                  <SyntaxHighlighter
                    language="typescript"
                    style={theme === "light" ? highlighter.oneLight : highlighter.oneDark}
                    customStyle={{
                      background: "transparent",
                      margin: 0,
                      padding: "18px",
                    }}
                    codeTagProps={{
                      style: {
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: "0.84rem",
                        lineHeight: "1.65",
                        whiteSpace: "pre",
                      },
                    }}
                  >
                    {item.code}
                  </SyntaxHighlighter>
                ) : (
                  <pre>
                    <code>{item.code}</code>
                  </pre>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <h2>Ready to build faster?</h2>
        <p>
          Go from documentation to starting your first project in Skyguard JS.
          Discover the next generation of web development, powered by
          TypeScript.
        </p>

        <div className="home-cta-actions">
          <Link to="/docs/get-started" className="btn cta-btn-primary">
            Get Started with Skyguard
          </Link>

          <a
            href="https://github.com/Pipe930/Skyguard-js"
            className="btn cta-btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={19} />
            Explore on GitHub
          </a>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}

export default Home;
