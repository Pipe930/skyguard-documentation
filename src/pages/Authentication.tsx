import { useTranslation } from "react-i18next";
import type { TableColumn } from "../interfaces/table.interface";
import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import Table from "../components/ui/Table";
import {
  codeExampleBasicAuth,
  codeExampleSessionConfigFile,
  codeExampleJwtLogin,
  codeExampleJwtMiddleware,
  codeExampleSessionDatabaseBase,
  codeExampleSessionDatabaseOrm,
  codeExampleSessionDatabaseSql,
  codeExampleSessionFile,
  codeExampleSessionMemory,
} from "../data/dataAuthentication";

type JwtAlgorithmRow = {
  algorithm: string;
  type: string;
  keyRequirement: string;
  recommendedUsage: string;
};

type SessionSuggestedRow = {
  field: string;
  dbType: string;
  description: string;
};

function Authentication() {
  const { t } = useTranslation();

  const sessionSuggestedColumns: TableColumn<SessionSuggestedRow>[] = [
    { header: t("authentication.sessions.database.columns.field"), accessor: "field", emphasis: true },
    { header: t("authentication.sessions.database.columns.type"), accessor: "dbType" },
    { header: t("authentication.sessions.database.columns.description"), accessor: "description" },
  ];

  const jwtAlgorithmsColumns: TableColumn<JwtAlgorithmRow>[] = [
    { header: t("authentication.jwt.columns.algorithm"), accessor: "algorithm", emphasis: true },
    { header: t("authentication.jwt.columns.type"), accessor: "type" },
    { header: t("authentication.jwt.columns.keyRequirement"), accessor: "keyRequirement" },
    { header: t("authentication.jwt.columns.recommendedUsage"), accessor: "recommendedUsage" },
  ];

  const sessionSuggestedData = t("authentication.sessions.database.rows", {
    returnObjects: true,
  }) as SessionSuggestedRow[];

  const jwtAlgorithmsData = t("authentication.jwt.rows", {
    returnObjects: true,
  }) as JwtAlgorithmRow[];

  return (
    <>
      <section id="authentication" className="docs-section">
        <h1>{t("authentication.page.title")}</h1>
        <p>{t("authentication.page.lead")}</p>
      </section>
      <hr />

      <section id="authentication-importance" className="docs-section">
        <h2>{t("authentication.importance.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("authentication.importance.description") }} />
        <Callout variant="note">
          <span dangerouslySetInnerHTML={{ __html: t("authentication.importance.note") }} />
        </Callout>
      </section>

      <section id="authentication-basic-example" className="docs-section">
        <h2>{t("authentication.basic.title")}</h2>
        <p>{t("authentication.basic.description")}</p>
        <CodeBlock code={codeExampleBasicAuth} />
      </section>

      <section id="authentication-sessions" className="docs-section">
        <h2>{t("authentication.sessions.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("authentication.sessions.description") }} />

        <div id="authentication-sessions-memory" className="docs-subsection">
          <h3>{t("authentication.sessions.memory.title")}</h3>
          <p>{t("authentication.sessions.memory.description")}</p>
          <CodeBlock code={codeExampleSessionMemory} />
        </div>

        <div id="authentication-sessions-file" className="docs-subsection">
          <h3>{t("authentication.sessions.file.title")}</h3>
          <p dangerouslySetInnerHTML={{ __html: t("authentication.sessions.file.description") }} />
          <CodeBlock code={codeExampleSessionFile} />
        </div>

        <div id="authentication-sessions-database" className="docs-subsection">
          <h3>{t("authentication.sessions.database.title")}</h3>
          <p dangerouslySetInnerHTML={{ __html: t("authentication.sessions.database.description") }} />
          <CodeBlock code={codeExampleSessionDatabaseBase} />

          <p style={{ marginTop: "25px" }}>{t("authentication.sessions.database.tableLabel")}</p>
          <Table columns={sessionSuggestedColumns} data={sessionSuggestedData} />

          <Callout variant="note">{t("authentication.sessions.database.note")}</Callout>

          <p
            style={{ marginTop: "25px" }}
            dangerouslySetInnerHTML={{ __html: t("authentication.sessions.database.configLabel") }}
          />
          <CodeBlock code={codeExampleSessionConfigFile} />
        </div>

        <div id="authentication-sessions-sql" className="docs-subsection">
          <h3>{t("authentication.sessions.sql.title")}</h3>
          <CodeBlock code={codeExampleSessionDatabaseSql} />
        </div>

        <div id="authentication-sessions-orm" className="docs-subsection">
          <h3>{t("authentication.sessions.orm.title")}</h3>
          <CodeBlock code={codeExampleSessionDatabaseOrm} />
        </div>
      </section>

      <section id="authentication-jwt" className="docs-section">
        <h2>{t("authentication.jwt.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("authentication.jwt.description") }} />
      </section>

      <section id="authentication-jwt-create" className="docs-section">
        <h2>{t("authentication.jwt.createTitle")}</h2>
        <CodeBlock code={codeExampleJwtLogin} />
      </section>

      <section id="authentication-jwt-middleware" className="docs-section">
        <h2>{t("authentication.jwt.middlewareTitle")}</h2>
        <CodeBlock code={codeExampleJwtMiddleware} />
      </section>

      <section id="authentication-jwt-algorithms" className="docs-section">
        <h2>{t("authentication.jwt.algorithmsTitle")}</h2>
        <Table columns={jwtAlgorithmsColumns} data={jwtAlgorithmsData} />
        <Callout variant="warn">
          <span dangerouslySetInnerHTML={{ __html: t("authentication.jwt.algorithmsWarn") }} />
        </Callout>
      </section>
    </>
  );
}

export default Authentication;
