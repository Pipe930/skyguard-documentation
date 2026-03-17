import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { docsPages } from "../../data/docsNavigation";
import "../../styles/docs-page-navigation.css";

const normalizePathname = (pathname: string) =>
  pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

function DocsPageNavigation() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const normalizedPathname = normalizePathname(pathname);

  const currentPageIndex = docsPages.findIndex(page => page.to === normalizedPathname);

  if (currentPageIndex === -1) {
    return null;
  }

  const previousPage = currentPageIndex > 0 ? docsPages[currentPageIndex - 1] : null;
  const nextPage = currentPageIndex < docsPages.length - 1 ? docsPages[currentPageIndex + 1] : null;

  return (
    <nav className="docs-page-navigation" aria-label={t("docsPageNavigation.ariaLabel")}>
      {previousPage ? (
        <Link to={previousPage.to} className="docs-page-navigation-link docs-page-navigation-link-prev">
          <span className="docs-page-navigation-label">
            <ArrowLeft size={16} aria-hidden="true" />
            {t("docsPageNavigation.previous")}
          </span>
          <span className="docs-page-navigation-title">
            {previousPage.translationKey ? t(previousPage.translationKey) : previousPage.label}
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      {nextPage ? (
        <Link to={nextPage.to} className="docs-page-navigation-link docs-page-navigation-link-next">
          <span className="docs-page-navigation-label">
            {t("docsPageNavigation.next")}
            <ArrowRight size={16} aria-hidden="true" />
          </span>
          <span className="docs-page-navigation-title">
            {nextPage.translationKey ? t(nextPage.translationKey) : nextPage.label}
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
    </nav>
  );
}

export default DocsPageNavigation;
