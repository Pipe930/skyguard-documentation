import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type CalloutVariant = "tip" | "warn" | "danger" | "note" | "info";

export interface CalloutConfig {
  icon: LucideIcon;
  label: string;
}

export interface CalloutProps {
  variant: CalloutVariant;
  title?: string;
  children: ReactNode;
}
