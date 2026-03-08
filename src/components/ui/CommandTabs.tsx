import { useMemo, useState } from "react";
import "../../styles/command-tabs.css";

const packageManagers = ["npm", "pnpm", "yarn"] as const;

type PackageManager = (typeof packageManagers)[number];

const commandByManager: Record<PackageManager, string> = {
  npm: "npm install kitojs",
  pnpm: "pnpm add kitojs",
  yarn: "yarn add kitojs",
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

      <pre className="install-tabs-code-block">
        <code>{command}</code>
      </pre>
    </div>
  );
}

export default InstallCommandTabs;