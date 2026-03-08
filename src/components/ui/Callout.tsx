import type { ReactNode } from "react";
import {
  AlertTriangle,
  Info,
  Lightbulb,
  ShieldAlert,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import "../../styles/callout.css";

type CalloutVariant = "tip" | "warn" | "danger" | "note" | "info";

interface CalloutConfig {
  icon: LucideIcon;
  label: string;
}

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
    icon: Info,
    label: "Note",
  },
  info: {
    icon: AlertTriangle,
    label: "Info",
  },
};

interface CalloutProps {
  variant: CalloutVariant;
  title?: string;
  children: ReactNode;
}

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
export type { CalloutVariant };
