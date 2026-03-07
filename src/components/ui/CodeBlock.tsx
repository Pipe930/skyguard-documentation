import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Theme = "light" | "dark";

function CodeBlock({ code }: { code: string }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const getTheme = () =>
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";

    const syncTheme = () => setTheme(getTheme());
    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SyntaxHighlighter
      language="typescript"
      style={theme === "light" ? oneLight : oneDark}
      customStyle={{
        background: "transparent",
        margin: 0,
        padding: "24px",
      }}
      codeTagProps={{
        style: {
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "0.9rem",
        },
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
