import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import { useTranslation } from "react-i18next";

const codeExampleRoutesBasics = `import { createApp } from "skyguard-js";
const app = createApp();

app.get("/", (ctx) => ctx.text("GET"));
app.post("/create", (ctx) => ctx.text("POST"));
app.put("/update", (ctx) => ctx.text("PUT"));
app.patch("/modify", (ctx) => ctx.text("PATCH"));
app.delete("/delete", (ctx) => ctx.text("DELETE"));`;

const codeExampleRoutesParameters = `// A parameter 
app.get("/products/{id}", (ctx) => {
  const { id } = ctx.params;
  return ctx.json({ idProduct: id });
});

// Multiple parameters
app.get("/posts/{idPost}/category/{idCategory}", (ctx) => {
  const { idPost, idCategory } = ctx.params;
  return ctx.json({ idPost, idCategory });
});`;

const codeExampleRoutesQuery = `// URL: /search?q=test&limit=10
app.get("/search", (ctx) => {
  const { q, limit } = ctx.query;
  return ctx.json({ search: q, limiter: limit });
});`;

const codeExampleGroupRoutes = `app.group("/api", api => {
  api.get("/users", (ctx) => ctx.text("Users")));
  api.get("/products", (ctx) => ctx.text("Products"));
  api.post("/products", (ctx) => ctx.text("Create Product"));
});

// Output Routes
// /api/users
// /api/products`;

function Routing() {
    const { t } = useTranslation();

    return (
        <>
        <section id="routing" className="docs-section">
            <h1>{t("routing.page.title")}</h1>
            <p>{t("routing.page.lead")}</p>
        </section>
        <hr />
        <section id="basic-routing" className="docs-section">
            <h2>{t("routing.basicRouting.title")}</h2>
            <p>{t("routing.basicRouting.description")}</p>
            <CodeBlock code={codeExampleRoutesBasics}/>
        </section>

        <section id="route-parameters" className="docs-section">
            <h2>{t("routing.routeParameters.title")}</h2>
            <p>{t("routing.routeParameters.description")}</p>
            <CodeBlock code={codeExampleRoutesParameters}/>
            <Callout variant="tip">
                {t("routing.routeParameters.tip")}
            </Callout>
        </section>

        <section id="query-parameters" className="docs-section">
            <h2>{t("routing.queryParameters.title")}</h2>
            <p>{t("routing.queryParameters.description")}</p>
            <CodeBlock code={codeExampleRoutesQuery}/>
        </section>

        <section id="group-routes" className="docs-section">
            <h2>{t("routing.groupRoutes.title")}</h2>
            <p>{t("routing.groupRoutes.description")}</p>
            <CodeBlock code={codeExampleGroupRoutes}/>
            <Callout variant="note">
                <span dangerouslySetInnerHTML={{ __html: t("routing.groupRoutes.note") }} />
            </Callout>
        </section>
        </>
    )
}

export default Routing;
