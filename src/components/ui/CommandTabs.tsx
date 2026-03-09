import { useMemo, useState } from "react";
import "../../styles/command-tabs.css";
import CodeBlock from "./CodeBlock";

const packageManagers = ["npm", "pnpm", "yarn"] as const;

type PackageManager = (typeof packageManagers)[number];

const commandByManager: Record<PackageManager, string> = {
  npm: "npm install skyguard-js",
  pnpm: "pnpm add skyguard-js",
  yarn: "yarn add skyguard-js",
};

function InstallCommandTabs() {
  const [activeManager, setActiveManager] = useState<PackageManager>("npm");

  const command = useMemo(
    () => commandByManager[activeManager],
    [activeManager],
  );

  return (
    <div className="install-tabs">
      <div className="install-tabs-header" role="tablist" aria-label="Package managers">
        {packageManagers.map(manager => (
          <button
            key={manager}
            type="button"
            role="tab"
            aria-selected={manager === activeManager}
            className={`install-tab-button ${manager === activeManager ? "install-tab-button-active" : ""}`}
            onClick={() => setActiveManager(manager)}
          >
            {manager}
          </button>
        ))}
      </div>

      <CodeBlock code={command}/>
    </div>
  );
}

export default InstallCommandTabs;