import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

type SiteShellProps = {
  children: ReactNode;
  surface?: "default" | "grid" | "mesh";
};

const surfaceClassName = {
  default: "",
  grid: "site-surface-grid",
  mesh: "site-surface-mesh",
};

export function SiteShell({
  children,
  surface = "default",
}: SiteShellProps) {
  return (
    <div className={`min-h-screen ${surfaceClassName[surface]}`}>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
