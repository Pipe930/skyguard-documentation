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
                className={`table-of-contents-link table-of-contents-level-${item.level}`}
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
