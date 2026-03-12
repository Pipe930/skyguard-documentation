import type { ReactNode } from "react";

export interface TableColumn<T> {
  header: string;
  accessor: keyof T | ((row: T) => ReactNode);
  width?: string;
  emphasis?: boolean;
  enableFormatting?: boolean;
  headerClassName?: string;
  cellClassName?: string;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
}
