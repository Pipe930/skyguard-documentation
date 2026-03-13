import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Headerbar from "./Headerbar";
import Sidebar from "./Sidebar";
import TableOfContents from "./TableOfContents";
import Footer from "./Footer";
import type { TocItem } from "../../interfaces/tableOfContent.interface";
import "../../styles/docs-layout.css";

function DocsLayout() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const articleRef = useRef<HTMLElement>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const targetId = hash.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.requestAnimationFrame(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  useEffect(() => {
    const handleScroll = () => {
      const nextState = window.scrollY > 300;
      setShowScrollTop(current => (current === nextState ? current : nextState));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (!articleRef.current) {
        setTocItems([]);
        return;
      }

      const headings = Array.from(
        articleRef.current.querySelectorAll<HTMLHeadingElement>("h1, h2, h3"),
      );

      const items = headings
        .map(heading => {
          const closestWithId = heading.closest<HTMLElement>("[id]");
          const id = heading.id || closestWithId?.id;

          if (!id) return null;

          const tag = heading.tagName.toLowerCase();
          const level: 1 | 2 | 3 = tag === "h1" ? 1 : tag === "h2" ? 2 : 3;

          return {
            id,
            label: heading.textContent?.trim() || "Sección",
            level,
          };
        })
        .filter((item): item is TocItem => Boolean(item));

      const uniqueItems = items.filter(
        (item, index, current) => current.findIndex(entry => entry.id === item.id) === index,
      );

      setTocItems(uniqueItems);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <>
      <Headerbar onToggleSidebar={() => setIsMobileSidebarOpen(true)} />

      <div className="docs-layout">
        <Sidebar
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        <main className="docs-content">
          <article ref={articleRef} className="docs-article">
            <Outlet />
          </article>
          <Footer />

          {showScrollTop ? (
            <button
              type="button"
              className="scroll-top-button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Volver al inicio"
            >
              ↑
            </button>
          ) : null}
        </main>

        <TableOfContents items={tocItems} />
      </div>
    </>
  );
}

export default DocsLayout;
