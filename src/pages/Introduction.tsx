import { Box, Code, LaptopMinimal, Shield } from "lucide-react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { TableColumn } from "../interfaces/table.interface";
import Card from "../components/ui/Card";
import CodeBlock from "../components/ui/CodeBlock";
import Table from "../components/ui/Table";
import Callout from "../components/ui/Callout";
import "../styles/introduction.css";

type IntroCardIcon = "box" | "code" | "laptop" | "shield";

type IntroCard = {
  iconKey: IntroCardIcon;
  title: string;
  description: string;
};

type IntroTableRow = {
  characteristic: string;
  express: string;
  koa: string;
  skyguardjs: string;
};

const cardIcons: Record<IntroCardIcon, ReactNode> = {
  box: <Box />,
  code: <Code />,
  laptop: <LaptopMinimal />,
  shield: <Shield />,
};

const codeExample = `import { createApp, schema, v, validateRequest } from "skyguard-js";
const app = createApp();

const userSchema = schema({
  body: {
    username: v.string({ maxLength: 60 }),
    email: v.string().email()
  }
});

app.post("/user/create", [validateRequest(userSchema)], (ctx) => {
  const { username, email } = ctx.body;

  return ctx.json({ username, email }).setStatusCode(201);
});

app.run(3000, () => {
  console.log("Server running in port 3000");
});`;

function Introduction() {
  const { t } = useTranslation();
  const cards = t("introduction.cards", { returnObjects: true }) as IntroCard[];
  const rows = t("introduction.comparison.rows", { returnObjects: true }) as IntroTableRow[];

  const tableColumns: TableColumn<IntroTableRow>[] = [
    {
      header: t("introduction.comparison.columns.characteristics"),
      accessor: "characteristic",
      emphasis: true,
    },
    {
      header: t("introduction.comparison.columns.express"),
      accessor: "express",
      enableFormatting: true,
    },
    {
      header: t("introduction.comparison.columns.koa"),
      accessor: "koa",
      enableFormatting: true,
    },
    {
      header: t("introduction.comparison.columns.skyguard"),
      accessor: "skyguardjs",
      enableFormatting: true,
      emphasis: true,
    },
  ];

  return (
    <>
      <section id="introduction" className="docs-section">
        <h1>{t("introduction.page.title")}</h1>
        <p>{t("introduction.page.lead")}</p>
      </section>
      <hr />
      <section id="what-is-skyguard-js" className="docs-section">
        <h2>{t("introduction.whatIs.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("introduction.whatIs.paragraph1") }} />
        <br />
        <p>{t("introduction.whatIs.paragraph2")}</p>

        <div className="container-cards">
          {cards.map(card => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              icon={cardIcons[card.iconKey]}
            />
          ))}
        </div>
      </section>

      <section id="quick-example" className="docs-section">
        <h2>{t("introduction.quickExample.title")}</h2>
        <CodeBlock code={codeExample} />
      </section>

      <section id="advantages" className="docs-section">
        <h2>{t("introduction.comparison.title")}</h2>
        <Table columns={tableColumns} data={rows} />
      </section>

      <Callout variant="note">
        <strong>{t("introduction.callout.title")}</strong>, {t("introduction.callout.prefix")}{" "}
        <Link className="note-link" to="/docs/getting-started">
          {t("introduction.callout.guideLink")}
        </Link>{" "}
        {t("introduction.callout.suffix")}
      </Callout>
    </>
  );
}

export default Introduction;
