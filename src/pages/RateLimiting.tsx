import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import { useTranslation } from "react-i18next";
import { codeExampleRateLimit, codeExampleRateLimitCustomKey, codeExampleRateLimitGlobal, codeExampleRateLimitHandler, codeExampleRateLimitSkip, codeExampleRateLimitStore } from "../data/dataRateLimiting";

function RateLimiting() {
  const { t } = useTranslation();
  const importanceItems = t("rateLimiting.importance.items", { returnObjects: true }) as string[];
  const bestPracticesItems = t("rateLimiting.bestPractices.items", { returnObjects: true }) as string[];

  return (
    <>
      <section id="rate-limiting" className="docs-section">
        <h1>{t("rateLimiting.page.title")}</h1>
        <p>{t("rateLimiting.page.lead")}</p>
      </section>
      <hr />

      <section id="rate-limiting-importance" className="docs-section">
        <h2>{t("rateLimiting.importance.title")}</h2>
        <ul className="docs-lists">
          {importanceItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="rate-limiting-middleware" className="docs-section">
        <h2>{t("rateLimiting.middleware.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("rateLimiting.middleware.description") }} />
        <CodeBlock code={codeExampleRateLimit} />
      </section>

      <section id="rate-limiting-sensitive-routes" className="docs-section">
        <h2>{t("rateLimiting.sensitiveRoutes.title")}</h2>
        <p>{t("rateLimiting.sensitiveRoutes.description")}</p>
        <CodeBlock code={codeExampleRateLimitGlobal} />
      </section>

      <section id="rate-limiting-key-generator" className="docs-section">
        <h2>{t("rateLimiting.keyGenerator.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("rateLimiting.keyGenerator.description") }} />
        <CodeBlock code={codeExampleRateLimitCustomKey} />
      </section>

      <section id="rate-limiting-skip" className="docs-section">
        <h2>{t("rateLimiting.skip.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("rateLimiting.skip.description") }} />
        <CodeBlock code={codeExampleRateLimitSkip} />
      </section>

      <section id="rate-limiting-custom-handler" className="docs-section">
        <h2>{t("rateLimiting.customHandler.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("rateLimiting.customHandler.description") }} />
        <CodeBlock code={codeExampleRateLimitHandler} />
      </section>

      <section id="rate-limiting-multi-instance" className="docs-section">
        <h2>{t("rateLimiting.multiInstance.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("rateLimiting.multiInstance.description") }} />
        <Callout variant="warn">
          {t("rateLimiting.multiInstance.warn")}
        </Callout>
        <CodeBlock code={codeExampleRateLimitStore} />
      </section>

      <section id="rate-limiting-best-practices" className="docs-section">
        <h2>{t("rateLimiting.bestPractices.title")}</h2>
        <ul className="docs-lists">
          {bestPracticesItems.map((item, index) => (
            <li key={index}>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default RateLimiting;
