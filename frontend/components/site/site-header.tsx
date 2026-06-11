"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/site/brand-mark";
import { navLinks } from "@/lib/site-content";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 md:gap-6 md:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  active
                    ? "border border-fuchsia-200/60 bg-[linear-gradient(135deg,var(--color-accent-strong),var(--color-accent))] text-white shadow-[0_12px_28px_rgba(109,40,217,0.22)]"
                    : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/recruitment" className="button-primary hidden md:inline-flex">
          Join WatQ
        </Link>
      </div>
      <div className="border-t border-[var(--color-line)] px-4 py-3 sm:px-6 md:hidden">
        <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`shrink-0 rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-all ${
                  active
                    ? "border border-fuchsia-200/60 bg-[linear-gradient(135deg,var(--color-accent-strong),var(--color-accent))] text-white shadow-[0_10px_24px_rgba(109,40,217,0.2)]"
                    : "bg-white text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
