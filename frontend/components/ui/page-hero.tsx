import type { ReactNode } from "react";

type PageHeroProps = {
  badge: string;
  title: string;
  accent?: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({
  badge,
  title,
  accent,
  description,
  actions,
}: PageHeroProps) {
  const renderedTitle = accent ? title.replace(accent, "") : title;

  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{badge}</p>
      <h1 className="mt-5 font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:mt-6 sm:text-5xl lg:text-6xl">
        {renderedTitle}
        {accent ? <span className="text-gradient">{accent}</span> : null}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
        {description}
      </p>
      {actions ? (
        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
          {actions}
        </div>
      ) : null}
    </div>
  );
}
