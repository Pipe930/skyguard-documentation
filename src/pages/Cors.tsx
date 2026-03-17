import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import { useTranslation } from "react-i18next";

const codeExampleCors = `import { cors, HttpMethods } from "skyguard-js";

app.middlewares(
  cors({
    origin: ["http://localhost:3000", "https://myapp.com"],
    methods: [HttpMethods.get, HttpMethods.post],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);`;

function Cors() {
  const { t } = useTranslation();
  const bestPractices = t("cors.bestPractices.items", { returnObjects: true }) as string[];

  return (
    <>
      <section id="cors" className="docs-section">
        <h1>{t("cors.page.title")}</h1>
        <p>{t("cors.page.lead")}</p>
      </section>
      <hr />

      <section id="cors-importance" className="docs-section">
        <h2>{t("cors.importance.title")}</h2>
        <p>{t("cors.importance.description")}</p>
        <Callout variant="warn">
          <span dangerouslySetInnerHTML={{ __html: t("cors.importance.warn") }} />
        </Callout>
      </section>

      <section id="cors-middleware" className="docs-section">
        <h2>{t("cors.middleware.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("cors.middleware.description") }} />
        <CodeBlock code={codeExampleCors} />
      </section>

      <section id="cors-best-practices" className="docs-section">
        <h2>{t("cors.bestPractices.title")}</h2>
        <ul className="docs-lists">
          {bestPractices.map((item, index) => (
            <li key={index}>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Cors;
