import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/not-found.css";

function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <main className="not-found">
        <section className="not-found-card">
          <span className="not-found-code">404</span>
          <h1>{t("notFound.title")}</h1>
          <p>{t("notFound.description")}</p>

          <div className="not-found-actions">
            <Link to="/" className="not-found-btn not-found-btn-primary">
              {t("notFound.homeButton")}
            </Link>
            <Link to="/docs/introduction" className="not-found-btn not-found-btn-secondary">
              {t("notFound.docsButton")}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default NotFound;
