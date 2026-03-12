export interface TocItem {
  id: string;
  label: string;
  level: 1 | 2 | 3;
}

export interface TableOfContentsProps {
  title?: string;
  items: TocItem[];
}
