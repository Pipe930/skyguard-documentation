import type { CSSProperties } from "react";

export type Theme = "light" | "dark";

export type LoadedHighlighter = {
  PrismLight: typeof import("react-syntax-highlighter/dist/esm/prism-light").default;
  oneLight: Record<string, CSSProperties>;
  oneDark: Record<string, CSSProperties>;
};

export type FeatureKey = "box" | "feather" | "server" | "shield" | "zap";

export type TranslatedFeature = {
  iconKey: FeatureKey;
  title: string;
  description: string;
};

export type ShowcasePoint = {
  title: string;
  description: string;
};

export type ShowcaseItem = {
  title: string;
  points: ShowcasePoint[];
  codeLabel: string;
  code: string;
};
