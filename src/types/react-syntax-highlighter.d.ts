declare module "react-syntax-highlighter/dist/esm/prism-light" {
  const PrismLight: any;
  export default PrismLight;
}

declare module "react-syntax-highlighter/dist/esm/languages/prism/typescript" {
  const typescript: any;
  export default typescript;
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
  export const oneLight: Record<string, import("react").CSSProperties>;
  export const oneDark: Record<string, import("react").CSSProperties>;
}
