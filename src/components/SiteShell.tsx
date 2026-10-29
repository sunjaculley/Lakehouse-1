import { type ReactNode } from "react";
import { EditProvider } from "@/lib/edits";
import { ExperienceShell } from "./ExperienceShell";

export function SiteShell({
  children,
  area,
}: {
  children: ReactNode;
  area?: "session" | "spaces" | "reset" | "ask" | "contacts";
}) {
  return (
    <EditProvider>
      <ExperienceShell persona="delivery"><div className={area ? `delivery-content area-${area}` : "delivery-content delivery-home"}>{children}</div></ExperienceShell>
    </EditProvider>
  );
}
