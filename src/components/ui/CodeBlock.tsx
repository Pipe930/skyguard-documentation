import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock({ code }: { code: string }) {
  return (
<SyntaxHighlighter
  language="typescript"
  style={oneDark}
  customStyle={{
    background: "transparent",
    margin: 0,
    padding: 30,
  }}
>
  {code}
</SyntaxHighlighter>
  );
}

export default CodeBlock;