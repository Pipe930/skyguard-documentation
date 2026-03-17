import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { docsPages } from "../../data/docsNavigation";
import "../../styles/docs-page-navigation.css";

const normalizePathname = (pathname: string) =>
  pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

function DocsPageNavigation() {
  const { pathname } = useLocation();
  const normalizedPathname = normalizePathname(pathname);

  const currentPageIndex = docsPages.findIndex(page => page.to === normalizedPathname);

  if (currentPageIndex === -1) {
    return null;
  }

  const previousPage = currentPageIndex > 0 ? docsPages[currentPageIndex - 1] : null;
  const nextPage = currentPageIndex < docsPages.length - 1 ? docsPages[currentPageIndex + 1] : null;

  return (
    <nav className="docs-page-navigation" aria-label="Navegación entre páginas">
      {previousPage ? (
        <Link to={previousPage.to} className="docs-page-navigation-link docs-page-navigation-link-prev">
          <span className="docs-page-navigation-label">
            <ArrowLeft size={16} aria-hidden="true" />
            Anterior
          </span>
          <span className="docs-page-navigation-title">{previousPage.label}</span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      {nextPage ? (
        <Link to={nextPage.to} className="docs-page-navigation-link docs-page-navigation-link-next">
          <span className="docs-page-navigation-label">
            Siguiente
            <ArrowRight size={16} aria-hidden="true" />
          </span>
          <span className="docs-page-navigation-title">{nextPage.label}</span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
    </nav>
  );
}

export default DocsPageNavigation;
