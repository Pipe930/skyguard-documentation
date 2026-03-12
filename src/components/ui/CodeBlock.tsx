import { Check, Copy } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import "../../styles/code-block.css";
import type { LoadedHighlighter, Theme } from "../../types";

let highlighterLoader: Promise<LoadedHighlighter> | null = null;

function loadHighlighter() {
  if (!highlighterLoader) {
    highlighterLoader = Promise.all([
      import("react-syntax-highlighter/dist/esm/prism-light"),
      import("react-syntax-highlighter/dist/esm/languages/prism/typescript"),
      import("react-syntax-highlighter/dist/esm/styles/prism"),
    ]).then(([highlighterModule, typescriptModule, styleModule]) => {
      highlighterModule.default.registerLanguage("typescript", typescriptModule.default);

      return {
        PrismLight: highlighterModule.default,
        oneLight: styleModule.oneLight as Record<string, CSSProperties>,
        oneDark: styleModule.oneDark as Record<string, CSSProperties>,
      };
    });
  }

  return highlighterLoader;
}

function CodeBlock({ code }: { code: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [codeCopied, setCodeCopied] = useState(false);
  const [highlighter, setHighlighter] = useState<LoadedHighlighter | null>(null);

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

  useEffect(() => {
    let mounted = true;

    loadHighlighter().then(loaded => {
      if (mounted) {
        setHighlighter(loaded);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const SyntaxHighlighter = highlighter?.PrismLight;

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

      {SyntaxHighlighter && highlighter ? (
        <SyntaxHighlighter
          language="typescript"
          style={theme === "light" ? highlighter.oneLight : highlighter.oneDark}
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
      ) : (
        <pre className="code-content">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}

export default CodeBlock;
