import {
  Book,
  Info,
  Lightbulb,
  ShieldAlert,
  TriangleAlert,
} from "lucide-react";
import "../../styles/callout.css";
import type { CalloutConfig, CalloutProps, CalloutVariant } from "../../interfaces/callout.interface";

const CALLOUT_CONFIG: Record<CalloutVariant, CalloutConfig> = {
  tip: {
    icon: Lightbulb,
    label: "Tip",
  },
  warn: {
    icon: TriangleAlert,
    label: "Warn",
  },
  danger: {
    icon: ShieldAlert,
    label: "Danger",
  },
  note: {
    icon: Book,
    label: "Note",
  },
  info: {
    icon: Info,
    label: "Info",
  },
};

function Callout({ variant, title, children }: CalloutProps) {
  const { icon: Icon, label } = CALLOUT_CONFIG[variant];

  return (
    <aside className={`callout callout-${variant}`} role="note" aria-label={title ?? label}>
      <div className="callout-header">
        <Icon className="callout-icon" size={16} aria-hidden="true" />
        <strong>{title ?? label}</strong>
      </div>
      <div className="callout-body">{children}</div>
    </aside>
  );
}

export default Callout;
