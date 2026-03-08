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

      for (const heading of observedHeadings) {
        const offsetTop = heading.getBoundingClientRect().top;
        if (offsetTop <= 140) {
          currentId = heading.id;
        } else {
          break;
        }
      }

      setActiveId(currentId);
    };

    const observer = new IntersectionObserver(
      entries => {
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top,
          );

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        } else {
          updateActiveByScrollPosition();
        }
      },
      {
        root: null,
        rootMargin: "-15% 0px -65% 0px",
        threshold: [0, 1],
      },
    );

    observedHeadings.forEach(heading => observer.observe(heading));
    updateActiveByScrollPosition();

    const onHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) setActiveId(hash);
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      observer.disconnect();
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
