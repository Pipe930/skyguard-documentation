import CodeBlock from "../components/ui/CodeBlock";
import Table from "../components/ui/Table";
import { useTranslation } from "react-i18next";
import type { TableColumn } from "../interfaces/table.interface";
import { codeExampleExceptionsUsage } from "../data/dataExceptions";

type ExceptionRow = {
  exception: string;
  statusCode: number;
  code: string;
  description: string;
};

function Exceptions() {
  const { t } = useTranslation();

  const exceptionTypesColumns: TableColumn<ExceptionRow>[] = [
    {
      header: t("exceptions.types.columns.exception"),
      accessor: "exception",
      emphasis: true,
    },
    {
      header: t("exceptions.types.columns.status"),
      accessor: "statusCode",
      width: "110px",
    },
    {
      header: t("exceptions.types.columns.code"),
      accessor: "code",
      width: "260px",
    },
    {
      header: t("exceptions.types.columns.description"),
      accessor: "description",
    },
  ];

  const exceptionTypesData = t("exceptions.types.rows", {
    returnObjects: true,
  }) as ExceptionRow[];

  return (
    <>
      <section id="exceptions" className="docs-section">
        <h1>{t("exceptions.page.title")}</h1>
        <p>{t("exceptions.page.lead")}</p>
      </section>
      <hr />
      <section id="exceptions-usage" className="docs-section">
        <h2>{t("exceptions.usage.title")}</h2>
        <p>{t("exceptions.usage.description")}</p>
        <CodeBlock code={codeExampleExceptionsUsage} />
      </section>
      <section id="exceptions-types" className="docs-section">
        <h2>{t("exceptions.types.title")}</h2>
        <p>{t("exceptions.types.description")}</p>
        <Table columns={exceptionTypesColumns} data={exceptionTypesData} />
      </section>
    </>
  );
}

export default Exceptions;
