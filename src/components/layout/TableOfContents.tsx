import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/table-of-contents.css";
import type { TableOfContentsProps } from "../../interfaces/tableOfContent.interface";

function TableOfContents({ title = "En esta página", items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const { pathname, hash } = useLocation();
  const getActivationOffset = () => Math.min(230, Math.max(140, window.innerHeight * 0.3));

  useEffect(() => {
    const observedHeadings = items
      .map(item => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (observedHeadings.length === 0) {
      setActiveId("");
      return;
    }

    const updateActiveByScrollPosition = () => {
      let currentId = observedHeadings[0].id;
      const activationOffset = getActivationOffset();

      for (const heading of observedHeadings) {
        const offsetTop = heading.getBoundingClientRect().top;
        if (offsetTop <= activationOffset) {
          currentId = heading.id;
        } else {
          break;
        }
      }

      setActiveId(currentId);
    };

    let rafId: number | null = null;

    const onScrollOrResize = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        updateActiveByScrollPosition();
        rafId = null;
      });
    };

    onScrollOrResize();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [items]);

  useEffect(() => {
    if (!hash) return;
    setActiveId(hash.slice(1));
  }, [hash]);

  return (
    <aside className="table-of-contents" aria-label="Tabla de contenidos">
      <div className="table-of-contents-card">
        <p className="table-of-contents-title">{title}</p>

        {items.length > 0 ? (
          <nav className="table-of-contents-nav">
            {items.map(item => (
              <Link
                key={item.id}
                to={`${pathname}#${item.id}`}
                className={`table-of-contents-link table-of-contents-level-${item.level} ${
                  activeId === item.id ? "is-active" : ""
                }`}
                aria-current={activeId === item.id ? "location" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : (
          <p className="table-of-contents-empty">No hay secciones disponibles.</p>
        )}
      </div>
    </aside>
  );
}

export default TableOfContents;
