import { Fragment, type ReactNode } from "react";
import "../../styles/table.css";

export interface TableColumn<T> {
  header: string;
  accessor: keyof T | ((row: T) => ReactNode);
  width?: string;
  emphasis?: boolean;
  enableFormatting?: boolean;
  headerClassName?: string;
  cellClassName?: string;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
}

const INLINE_FORMAT_PATTERN = /(\*\*([^*]+)\*\*|==([^=]+)==|`([^`]+)`|\[([^\]]+)\]\((https?:\/\/[^\s)]+)\))/g;

function renderInlineFormatting(value: string): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of value.matchAll(INLINE_FORMAT_PATTERN)) {
    const fullMatch = match[0];
    const matchStart = match.index ?? 0;

    if (matchStart > lastIndex) {
      nodes.push(value.slice(lastIndex, matchStart));
    }

    if (match[2]) {
      nodes.push(<strong key={`${matchStart}-strong`}>{match[2]}</strong>);
    } else if (match[3]) {
      nodes.push(
        <mark key={`${matchStart}-highlight`} className="docs-highlight">
          {match[3]}
        </mark>,
      );
    } else if (match[4]) {
      nodes.push(
        <code key={`${matchStart}-code`} className="docs-inline-code">
          {match[4]}
        </code>,
      );
    } else if (match[5] && match[6]) {
      nodes.push(
        <a
          key={`${matchStart}-link`}
          className="table-link"
          href={match[6]}
          target="_blank"
          rel="noreferrer"
        >
          {match[5]}
        </a>,
      );
    }

    lastIndex = matchStart + fullMatch.length;
  }

  if (lastIndex < value.length) {
    nodes.push(value.slice(lastIndex));
  }

  if (nodes.length === 0) {
    return value;
  }

  return nodes.map((node, index) => <Fragment key={index}>{node}</Fragment>);
}

function Table<T>({ columns, data }: TableProps<T>) {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className={column.headerClassName} style={{ width: column.width }}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => {
                const rawValue =
                  typeof column.accessor === "function"
                    ? column.accessor(row)
                    : row[column.accessor];

                const value =
                  column.enableFormatting && typeof rawValue === "string"
                    ? renderInlineFormatting(rawValue)
                    : (rawValue as ReactNode);

                const classNames = [
                  column.emphasis ? "table-cell-emphasis" : "",
                  column.cellClassName ?? "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <td key={colIndex} className={classNames || undefined}>
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
