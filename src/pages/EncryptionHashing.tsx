import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import { useTranslation } from "react-i18next";
import {
  codeExampleBcryptInstall,
  codeExampleBcryptUsage,
  codeExampleHasherBasic,
  codeExampleHasherBatch,
} from "../data/dataEncryptionHashing";

function EncryptionHashing() {
  const { t } = useTranslation();

  return (
    <>
      <section id="encryption-hashing" className="docs-section">
        <h1>{t("encryptionHashing.page.title")}</h1>
        <p>{t("encryptionHashing.page.lead")}</p>
      </section>
      <hr />

      <section id="encryption-hashing-concepts" className="docs-section">
        <h2>{t("encryptionHashing.concepts.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("encryptionHashing.concepts.description") }} />
        <Callout variant="warn">
          {t("encryptionHashing.concepts.warn")}
        </Callout>
      </section>

      <section id="encryption-hasher-example" className="docs-section">
        <h2>{t("encryptionHashing.hasherExample.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("encryptionHashing.hasherExample.description") }} />
        <CodeBlock code={codeExampleHasherBasic} />
      </section>

      <section id="encryption-hasher-batch" className="docs-section">
        <h2>{t("encryptionHashing.hasherBatch.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("encryptionHashing.hasherBatch.description") }} />
        <CodeBlock code={codeExampleHasherBatch} />
      </section>

      <section id="hashing-bcrypt-install" className="docs-section">
        <h2>{t("encryptionHashing.bcryptInstall.title")}</h2>
        <CodeBlock code={codeExampleBcryptInstall} />
      </section>

      <section id="hashing-bcrypt-usage" className="docs-section">
        <h2>{t("encryptionHashing.bcryptUsage.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("encryptionHashing.bcryptUsage.description") }} />
        <CodeBlock code={codeExampleBcryptUsage} />
        <Callout variant="tip">
          {t("encryptionHashing.bcryptUsage.tip")}
        </Callout>
      </section>
    </>
  );
}

export default EncryptionHashing;
