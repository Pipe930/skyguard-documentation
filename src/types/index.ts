import type { CSSProperties } from "react";

export type Theme = "light" | "dark";

export type LoadedHighlighter = {
  PrismLight: typeof import("react-syntax-highlighter/dist/esm/prism-light").default;
  oneLight: Record<string, CSSProperties>;
  oneDark: Record<string, CSSProperties>;
};
