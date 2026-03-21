import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Copy,
  Check,
  Feather,
  Github,
  Shield,
  Zap,
  Server,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import HomeNavbar from "../components/layout/HomeNavbar";
import Footer from "../components/layout/Footer";
import Card from "../components/ui/Card";
import "../styles/home.css";
import type { FeatureKey, LoadedHighlighter, ShowcaseItem, Theme, TranslatedFeature } from "../types";

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

const featureIcons: Record<FeatureKey, ReactNode> = {
  box: <Box size={20} />,
  feather: <Feather size={20} />,
  server: <Server size={20} />,
  shield: <Shield size={20} />,
  zap: <Zap size={20} />,
};

function Home() {
  const { t } = useTranslation();
  const [installCopied, setInstallCopied] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [highlighter, setHighlighter] = useState<LoadedHighlighter | null>(null);

  const installationCommand = t("home.installationCommand");
  const translatedFeatures = t("home.features.items", {
    returnObjects: true,
  }) as TranslatedFeature[];
  const showcaseItems = t("home.showcase.items", { returnObjects: true }) as ShowcaseItem[];

  const copyText = async (
    value: string,
    setter: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    try {
      await navigator.clipboard.writeText(value);
      setter(true);
      window.setTimeout(() => setter(false), 1800);
    } catch {
      console.error(t("home.copyError"));
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
            <span className="hero-badge">{t("home.hero.badge")}</span>

            <h1 className="hero-title">
              {t("home.hero.title")} <span className="hero-title-color">{t("home.hero.titleHighlight")}</span>
            </h1>

            <p className="hero-description">{t("home.hero.description")}</p>

            <div className="hero-install">
              <span className="install-label">{t("home.hero.installLabel")}</span>

              <div className="install-command">
                <code>{installationCommand}</code>

                <button
                  type="button"
                  className="icon-copy-button-home"
                  onClick={() => copyText(installationCommand, setInstallCopied)}
                  aria-label={t("home.copyInstallCommandAria")}
                  title={t("home.copyInstallCommandTitle")}
                >
                  {installCopied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <div className="hero-actions">
              <Link to="/docs/introduction" className="btn btn-primary">
                {t("home.hero.startButton")}
              </Link>

              <a
                href="https://github.com/Pipe930/Skyguard-js"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                <span>{t("home.hero.githubButton")}</span>
                <ExternalLink size={22} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/skyguard-documentation/logo-skyguard-js.webp"
              alt={t("home.hero.logoAlt")}
              className="hero-logo"
            />
          </div>
        </section>

        <section className="features">
          <div className="section-heading">
            <h2>{t("home.features.heading")}</h2>
            <p>{t("home.features.description")}</p>
          </div>

          <div className="features-grid">
            {translatedFeatures.map(feature => (
              <Card
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={featureIcons[feature.iconKey]}
              />
            ))}
          </div>
        </section>

        <section className="runtime-support">
          <div className="runtime-support-heading">
            <h2>{t("home.runtimes.heading")}</h2>
            <p>{t("home.runtimes.description")}</p>
          </div>

          <div className="runtime-logos" aria-label={t("home.runtimes.logosAria")}>
            <a href="https://nodejs.org/" target="_blank">
              <img src="/skyguard-documentation/nodejs-icon.webp" className="runtime-logo" alt="nodejs logo" />
            </a>
            <a href="https://deno.com/" target="_blank">
              <img src="/skyguard-documentation/icon-dark.webp" className="runtime-logo" alt="deno logo" />
            </a>
            <a href="https://bun.com/" target="_blank">
              <img src="/skyguard-documentation/Bun.webp" className="runtime-logo" alt="bun logo" />
            </a>
          </div>

          <ul className="runtime-benefits">
            <li>{t("home.runtimes.slogan")}</li>
          </ul>
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
                      <span />
                      <span />
                      <span />
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
          <h2>{t("home.cta.title")}</h2>
          <p>{t("home.cta.description")}</p>

          <div className="home-cta-actions">
            <Link to="/docs/getting-started" className="btn cta-btn-primary">
              {t("home.cta.startButton")}
            </Link>

            <a
              href="https://github.com/Pipe930/Skyguard-js"
              className="btn cta-btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={19} />
              {t("home.cta.githubButton")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
