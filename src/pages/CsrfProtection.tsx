import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import { useTranslation } from "react-i18next";
import { codeExampleCsrfBasic, codeExampleCsrfFetch, codeExampleCsrfHandlebars, codeExampleCsrfTemplate } from "../data/dataCsrfProtection";

function CsrfProtection() {
  const { t } = useTranslation();
  const howItWorksItems = t("csrfProtection.howItWorks.items", { returnObjects: true }) as string[];

  return (
    <>
      <section id="csrf-protection" className="docs-section">
        <h1>{t("csrfProtection.page.title")}</h1>
        <p>{t("csrfProtection.page.lead")}</p>
      </section>
      <hr />

      <section id="csrf-importance" className="docs-section">
        <h2>{t("csrfProtection.importance.title")}</h2>
        <p>{t("csrfProtection.importance.description")}</p>
        <Callout variant="warn">
          {t("csrfProtection.importance.warn")}
        </Callout>
      </section>

      <section id="csrf-middleware" className="docs-section">
        <h2>{t("csrfProtection.middleware.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("csrfProtection.middleware.description") }} />
        <CodeBlock code={codeExampleCsrfBasic} />
      </section>

      <section id="csrf-how-it-works" className="docs-section">
        <h2>{t("csrfProtection.howItWorks.title")}</h2>
        <ul className="docs-lists">
          {howItWorksItems.map((item, index) => (
            <li key={index}>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </section>

      <section id="csrf-templates" className="docs-section">
        <h2>{t("csrfProtection.templates.title")}</h2>
        <p>{t("csrfProtection.templates.description")}</p>
        <CodeBlock code={codeExampleCsrfHandlebars} />
      </section>

      <section id="csrf-template-form" className="docs-section">
        <h2>{t("csrfProtection.templateView.title")}</h2>
        <CodeBlock code={codeExampleCsrfTemplate} />
      </section>

      <section id="csrf-ajax" className="docs-section">
        <h2>{t("csrfProtection.ajax.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("csrfProtection.ajax.description") }} />
        <CodeBlock code={codeExampleCsrfFetch} />
        <Callout variant="tip">
          {t("csrfProtection.ajax.tip")}
        </Callout>
      </section>
    </>
  );
}

export default CsrfProtection;
