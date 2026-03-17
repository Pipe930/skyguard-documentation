import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import { useTranslation } from "react-i18next";

const codeExampleMiddlewares = `import { createApp } from "skyguard-js";

const authMiddleware = async (ctx, next) => {
  if (ctx.headers["authorization"] !== "secret") {
    return ctx.json({ message: "Unauthorized" }).setStatus(401);
  }

  return await next(ctx); // Call next to continue to the next handler
};

const app = createApp();

app.middlewares(authMiddleware);

app.get("/", (ctx) => ctx.text("hola"));`

const codeExampleOrderMiddlewares = `const first = async (ctx, next) => {
  console.log("1");
  return await next(ctx);
};
 
const second = async (ctx, next) => {
  console.log("2");
  return await next(ctx);
};
 
app.middlewares(first, second);

// Request will log: 1, 2`

const codeExampleMiddlewaresRegister = `// Global Middleware
app.middlewares(authMiddleware);

// Group Middleware
app.group("/users", (router) => {
  router.middlewares(authMiddleware);
  router.get("/", (ctx) => ctx.text("hola"));
});

// Route-Specific Middleware
app.get("/", [authMiddleware], (ctx) => ctx.text("hola2"));`

const codeExampleMiddlewaresCombined = `app.get(
"/", 
[authMiddleware, adminCheck, logger, rateLimiter], 
(ctx) => {
  return ctx.json({ message: "holamundo" })
});`

function Middlewares() {
    const { t } = useTranslation();

    return (
        <>
        <section id="middlewares" className="docs-section">
            <h1>{t("middlewares.page.title")}</h1>
            <p>
                {t("middlewares.page.lead")}
            </p>
        </section>
        <section id="basic-middlewares" className="docs-section">
            <h2>{t("middlewares.basic.title")}</h2>
            <p>
                {t("middlewares.basic.description")}
            </p>
            <CodeBlock code={codeExampleMiddlewares}/>
        </section>
        <section id="middleware-order" className="docs-section">
            <h2>{t("middlewares.order.title")}</h2>
            <p>
                {t("middlewares.order.description")}
            </p>
            <CodeBlock code={codeExampleOrderMiddlewares}/>
        </section>
        <section id="middleware-global-group-route" className="docs-section">
            <h2>{t("middlewares.scope.title")}</h2>
            <p>
                {t("middlewares.scope.description")}
            </p>
            <CodeBlock code={codeExampleMiddlewaresRegister}/>
        </section>
        <section id="combined-middlewares" className="docs-section">
            <h2>{t("middlewares.combined.title")}</h2>
            <p>
                {t("middlewares.combined.description")}
            </p>
            <CodeBlock code={codeExampleMiddlewaresCombined}/>
        </section>
        <Callout variant="tip">
            <span dangerouslySetInnerHTML={{ __html: t("middlewares.tip") }} />
        </Callout>
        </>
    )
}

export default Middlewares;
