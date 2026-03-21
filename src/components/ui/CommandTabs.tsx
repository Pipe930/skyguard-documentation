import { useMemo, useState } from "react";
import "../../styles/command-tabs.css";
import CodeBlock from "./CodeBlock";

function InstallCommandTabs({ packageManagers, commandByManager }: { packageManagers: string[], commandByManager: Record<string, string> }) {
  const [activeManager, setActiveManager] = useState<string>(packageManagers[0]);

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