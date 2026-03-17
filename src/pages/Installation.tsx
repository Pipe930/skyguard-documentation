import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import InstallCommandTabs from "../components/ui/CommandTabs";

const tsConfigCode = `{
  "compilerOptions": {
    "target": "ES2023",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "moduleDetection": "auto",
    "types": ["node"],
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "isolatedModules": true,
  }
}`;

const createApp = `import { createApp } from "skyguard-js";

const app = createApp();

app.get("/", (ctx) => {
  return ctx.json({ message: "Hello World!!!" });
});

app.run(3000);`;

function Installation() {
  const { t } = useTranslation();

  return (
    <>
      <section id="installation" className="docs-section">
        <h1>{t("installation.page.title")}</h1>
        <p>{t("installation.page.lead")}</p>
      </section>

      <hr />

      <section id="prerequisites" className="docs-section">
        <h2>{t("installation.prerequisites.title")}</h2>
        <p>{t("installation.prerequisites.description")}</p>
        <ul className="docs-lists">
          <li>
            <strong>{t("installation.prerequisites.node")}</strong> (v22 or higher)
          </li>
          <li>
            <strong>{t("installation.prerequisites.typescript")}</strong> (v5 or higher)
          </li>
        </ul>
      </section>

      <section id="quick-install" className="docs-section">
        <h2>{t("installation.quickInstall.title")}</h2>
        <p>{t("installation.quickInstall.description")}</p>
        <InstallCommandTabs />
      </section>

      <section id="typescript-configuration" className="docs-section">
        <h2>{t("installation.typescriptConfiguration.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("installation.typescriptConfiguration.description") }} />

        <CodeBlock code={tsConfigCode} />
      </section>

      <section id="verify" className="docs-section">
        <h2>{t("installation.verify.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("installation.verify.description") }} />
        <CodeBlock code={createApp} />

        <p style={{ marginTop: "20px" }}>{t("installation.verify.runServer")}</p>
        <CodeBlock code="tsx src/server.ts" />
        <Callout variant="note">{t("installation.verify.note")}</Callout>
      </section>

      <section id="next-steps" className="docs-section">
        <h2>{t("installation.nextSteps.title")}</h2>
        <ul className="docs-lists">
          <li>
            <Link to="/docs/getting-started" className="docs-links">
              {t("installation.nextSteps.items.quickStart.label")}
            </Link>{" "}
            - {t("installation.nextSteps.items.quickStart.description")}
          </li>
          <li>
            <Link to="/docs/routing" className="docs-links">
              {t("installation.nextSteps.items.basics.label")}
            </Link>{" "}
            - {t("installation.nextSteps.items.basics.description")}
          </li>
          <li>
            <Link to="/docs/basic-configuration" className="docs-links">
              {t("installation.nextSteps.items.configuration.label")}
            </Link>{" "}
            - {t("installation.nextSteps.items.configuration.description")}
          </li>
        </ul>
      </section>
    </>
  );
}

export default Installation;
