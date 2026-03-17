import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import { useTranslation } from "react-i18next";
import { codeExampleLogger, codeExamplePrefix, codeExampleStaticFiles, codeExampleUploader } from "../data/dataConfiguration";

function Configuration() {
  const { t } = useTranslation();

  return (
    <>
      <section id="configuration" className="docs-section">
        <h1>{t("configuration.page.title")}</h1>
        <p dangerouslySetInnerHTML={{ __html: t("configuration.page.lead") }} />
      </section>
      <hr />
      <section id="configuration-logger" className="docs-section">
        <h2>{t("configuration.logger.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("configuration.logger.description") }} />
        <CodeBlock code={codeExampleLogger} />
        <Callout variant="note">
          <span dangerouslySetInnerHTML={{ __html: t("configuration.logger.note") }} />
        </Callout>
      </section>

      <section id="configuration-static-files" className="docs-section">
        <h2>{t("configuration.staticFiles.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("configuration.staticFiles.description") }} />
        <CodeBlock code={codeExampleStaticFiles} />
      </section>

      <section id="configuration-prefix" className="docs-section">
        <h2>{t("configuration.prefix.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("configuration.prefix.description") }} />
        <CodeBlock code={codeExamplePrefix} />
        <Callout variant="warn">
          {t("configuration.prefix.warn")}
        </Callout>
      </section>

      <section id="configuration-file-upload" className="docs-section">
        <h2>{t("configuration.fileUpload.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("configuration.fileUpload.description") }} />
        <CodeBlock code={codeExampleUploader} />
        <p style={{ padding: "25px 0" }} dangerouslySetInnerHTML={{ __html: t("configuration.fileUpload.storageDescription") }}>
        </p>
        <Callout variant="note">
          <span dangerouslySetInnerHTML={{ __html: t("configuration.fileUpload.note") }} />
        </Callout>
      </section>
    </>
  );
}

export default Configuration;
