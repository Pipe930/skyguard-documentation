import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import { useTranslation } from "react-i18next";
import { codeExampleEjs, codeExampleHandlebars, codeExamplePug, codeExampleRender, codeExampleViewsAndEngine } from "../data/dataEngineTemplates";

function EngineTemplates() {
  const { t } = useTranslation();

  return (
    <>
      <section id="engine-templates" className="docs-section">
        <h1>{t("engineTemplates.page.title")}</h1>
        <p dangerouslySetInnerHTML={{ __html: t("engineTemplates.page.lead") }} />
      </section>
      <hr />
      <section id="engine-templates-setup" className="docs-section">
        <h2>{t("engineTemplates.setup.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("engineTemplates.setup.description") }} />
        <CodeBlock code={codeExampleViewsAndEngine} />
      </section>
      <section id="engine-templates-render" className="docs-section">
        <h2>{t("engineTemplates.render.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("engineTemplates.render.description") }} />
        <CodeBlock code={codeExampleRender} />
      </section>
      <section id="engine-templates-compatible" className="docs-section">
        <h2>{t("engineTemplates.compatible.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("engineTemplates.compatible.description") }} />
      </section>
      <section id="engine-templates-handlebars" className="docs-section">
        <h2>{t("engineTemplates.handlebars.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("engineTemplates.handlebars.description") }} />
        <CodeBlock code={codeExampleHandlebars} />
      </section>
      <section id="engine-templates-ejs" className="docs-section">
        <h2>{t("engineTemplates.ejs.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("engineTemplates.ejs.description") }} />
        <CodeBlock code={codeExampleEjs} />
      </section>
      <section id="engine-templates-pug" className="docs-section">
        <h2>{t("engineTemplates.pug.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("engineTemplates.pug.description") }} />
        <CodeBlock code={codeExamplePug} />
        <Callout variant="tip">
          <span dangerouslySetInnerHTML={{ __html: t("engineTemplates.pug.tip") }} />
        </Callout>
      </section>
      <Callout variant="warn">
        {t("engineTemplates.warn")}
      </Callout>
    </>
  );
}

export default EngineTemplates;
