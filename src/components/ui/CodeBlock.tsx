import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../../styles/code-block.css"

type Theme = "light" | "dark";

function CodeBlock({ code }: { code: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [codeCopied, setCodeCopied] = useState(false);

  const copyText = async (
    value: string,
    setter: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    try {
      await navigator.clipboard.writeText(value);
      setter(true);
      window.setTimeout(() => setter(false), 1800);
    } catch {
      console.error("Could not copy text");
    }
  };

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

    <div className="code-block">
        <button
          type="button"
          className="icon-copy-button"
          onClick={() => copyText(code, setCodeCopied)}
          aria-label="Copiar código"
          title="Copiar código"
        >
          {codeCopied ? <Check size={19} /> : <Copy size={19} />}
        </button>

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
              fontSize: "0.9rem",
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
