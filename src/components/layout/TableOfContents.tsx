import { useEffect, useMemo, useState } from "react";
import "../../styles/table-of-contents.css";

export interface TocItem {
  id: string;
  label: string;
  level: 1 | 2 | 3;
}

interface TableOfContentsProps {
  title?: string;
  items: TocItem[];
}

function TableOfContents({ title = "En esta página", items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const getActivationOffset = () => Math.min(230, Math.max(140, window.innerHeight * 0.3));
  const validItems = useMemo(
    () => items.filter(item => Boolean(document.getElementById(item.id))),
    [items],
  );

  useEffect(() => {
    if (validItems.length === 0) return;

    const observedHeadings = validItems
      .map(item => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (observedHeadings.length === 0) return;

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

    const onHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) setActiveId(hash);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [validItems]);

  return (
    <aside className="table-of-contents" aria-label="Tabla de contenidos">
      <div className="table-of-contents-card">
        <p className="table-of-contents-title">{title}</p>

        {items.length > 0 ? (
          <nav className="table-of-contents-nav">
            {items.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`table-of-contents-link table-of-contents-level-${item.level} ${
                  activeId === item.id ? "is-active" : ""
                }`}
                aria-current={activeId === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
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
