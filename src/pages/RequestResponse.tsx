import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import { useTranslation } from "react-i18next";
import {
  codeExampleContextBasics,
  codeExampleContextBodyCookiesSession,
  codeExampleContextCommonResponses,
  codeExampleContextFilesStreamRender,
  codeExampleContextReqRes,
} from "../data/dataRequestResponse";

function ContextPage() {
  const { t } = useTranslation();

  return (
    <>
      <section id="context" className="docs-section">
        <h1>{t("requestResponse.page.title")}</h1>
        <p dangerouslySetInnerHTML={{ __html: t("requestResponse.page.lead") }} />
      </section>
      <hr />
      <mark className=""></mark>
      <section id="context-accessors" className="docs-section">
        <h2>{t("requestResponse.accessors.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("requestResponse.accessors.description") }} />
        <CodeBlock code={codeExampleContextBasics} />
      </section>
      <section id="context-body-cookies-session" className="docs-section">
        <h2>{t("requestResponse.bodyCookiesSession.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("requestResponse.bodyCookiesSession.description") }} />
        <CodeBlock code={codeExampleContextBodyCookiesSession} />
      </section>
      <section id="context-req-res" className="docs-section">
        <h2>{t("requestResponse.reqRes.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("requestResponse.reqRes.description") }} />
        <CodeBlock code={codeExampleContextReqRes} />
        <Callout variant="tip">
          <span dangerouslySetInnerHTML={{ __html: t("requestResponse.reqRes.tip") }} />
        </Callout>
      </section>
      <section id="context-common-responses" className="docs-section">
        <h2>{t("requestResponse.commonResponses.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("requestResponse.commonResponses.description") }} />
        <CodeBlock code={codeExampleContextCommonResponses} />
      </section>
      <section id="context-files-stream-render" className="docs-section">
        <h2>{t("requestResponse.filesStreamRender.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("requestResponse.filesStreamRender.description") }} />
        <CodeBlock code={codeExampleContextFilesStreamRender} />
        <Callout variant="danger">
          <span dangerouslySetInnerHTML={{ __html: t("requestResponse.filesStreamRender.danger") }} />
        </Callout>
      </section>
    </>
  );
}

export default ContextPage;
