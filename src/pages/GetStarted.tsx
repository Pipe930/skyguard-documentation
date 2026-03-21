import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CodeBlock from "../components/ui/CodeBlock";
import InstallCommandTabs from "../components/ui/CommandTabs";
import {
  codeExample,
  codeExampleMiddleware,
  codeExampleRequest,
  codeExampleRoutes,
  codeExampleValidation
} from "../data/dataGetStarted";

function GetStarted() {
  const { t } = useTranslation();

  return (
    <>
      <section id="getting-started" className="docs-section">
        <h1>{t("getStarted.page.title")}</h1>
        <p>{t("getStarted.page.lead")}</p>
      </section>
      <hr />

      <section id="create-first-server" className="docs-section">
        <h2>{t("getStarted.createFirstServer.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("getStarted.createFirstServer.intro") }} />
        <ol className="docs-list-ol">
          <li>
            <p>
              <strong>{t("getStarted.createFirstServer.steps.packageJson.title")}</strong>
            </p>
            <CodeBlock code="npm init -y" />
          </li>
          <li>
            <p>
              <strong>{t("getStarted.createFirstServer.steps.install.title")}</strong>
            </p>
            <InstallCommandTabs packageManagers={["npm", "pnpm", "yarn", "deno", "bun"]} commandByManager={{npm: "npm install skyguard-js", pnpm: "pnpm add skyguard-js", yarn: "yarn add skyguard-js", deno: "deno add npm:skyguard-js", bun: "bun add skyguard-js"}} />
          </li>
          <li>
            <p>
              <strong>{t("getStarted.createFirstServer.steps.typescriptFile.title")}</strong>
            </p>
            <br />
            <p dangerouslySetInnerHTML={{ __html: t("getStarted.createFirstServer.steps.typescriptFile.description") }} />
            <CodeBlock code={codeExample} />
          </li>
          <li>
            <p>
              <strong>{t("getStarted.createFirstServer.steps.runServer.title")}</strong>
            </p>
            <InstallCommandTabs packageManagers={["node", "deno", "bun"]} commandByManager={{node: `node --watch server.ts
 
# or with tsx
tsx server.ts`, deno: "deno run --allow-net --allow-env --allow-read --allow-ffi server.ts", bun: "bun run server.ts"}} />
          </li>
          <li>
            <p>
              <strong>{t("getStarted.createFirstServer.steps.testServer.title")}</strong>
            </p>
            <br />
            <p dangerouslySetInnerHTML={{ __html: t("getStarted.createFirstServer.steps.testServer.description") }} />
            <CodeBlock code={`curl http://localhost:3000
# Output: Hello World!!!`} />
          </li>
        </ol>
      </section>

      <section id="add-more-routes" className="docs-section">
        <h2>{t("getStarted.addMoreRoutes.title")}</h2>
        <p>{t("getStarted.addMoreRoutes.description")}</p>
        <CodeBlock code={codeExampleRoutes} />
      </section>

      <section id="handle-request-data" className="docs-section">
        <h2>{t("getStarted.handleRequestData.title")}</h2>
        <p>{t("getStarted.handleRequestData.description")}</p>
        <CodeBlock code={codeExampleRequest} />
      </section>

      <section id="add-validation" className="docs-section">
        <h2>{t("getStarted.addValidation.title")}</h2>
        <p>{t("getStarted.addValidation.description")}</p>
        <CodeBlock code={codeExampleValidation} />
      </section>

      <section id="use-middleware" className="docs-section">
        <h2>{t("getStarted.useMiddleware.title")}</h2>
        <p>{t("getStarted.useMiddleware.description")}</p>
        <CodeBlock code={codeExampleMiddleware} />
      </section>

      <section id="next-steps" className="docs-section">
        <h2>{t("getStarted.nextSteps.title")}</h2>
        <ul className="docs-lists">
          <li>
            <Link to="/docs/routing" className="docs-links">
              {t("getStarted.nextSteps.items.routing.label")}
            </Link>{" "}
            - {t("getStarted.nextSteps.items.routing.description")}
          </li>
          <li>
            <Link to="/docs/middlewares" className="docs-links">
              {t("getStarted.nextSteps.items.middlewares.label")}
            </Link>{" "}
            - {t("getStarted.nextSteps.items.middlewares.description")}
          </li>
          <li>
            <Link to="/docs/validation" className="docs-links">
              {t("getStarted.nextSteps.items.validation.label")}
            </Link>{" "}
            - {t("getStarted.nextSteps.items.validation.description")}
          </li>
          <li>
            <Link to="/docs/security" className="docs-links">
              {t("getStarted.nextSteps.items.security.label")}
            </Link>{" "}
            - {t("getStarted.nextSteps.items.security.description")}
          </li>
        </ul>
      </section>
    </>
  );
}

export default GetStarted;
