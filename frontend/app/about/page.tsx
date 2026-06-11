import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteShell } from "@/components/site/site-shell";
import { aboutPillars } from "@/lib/site-content";

export default function AboutPage() {
  return (
    <SiteShell surface="mesh">
      <section className="grid gap-12 py-16 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:py-24">
        <PageHero
          badge="Student Design Team"
          title="WatQ is built for students who want to learn by making."
          accent="learn by making."
          description="We treat quantum as an engineering stack rather than an inaccessible theory wall. The team exists to make that stack easier to enter, explore, and contribute to."
        />
        <div className="panel overflow-hidden p-4 sm:p-6">
          <Image
            src="/WATQ_logo_design_1.png"
            alt="WatQ logo concept"
            width={900}
            height={900}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </section>

      <section className="grid gap-6 pb-10 md:grid-cols-2">
        {aboutPillars.map((pillar) => (
          <article key={pillar.title} className="panel p-6 sm:p-8">
            <div className="icon-chip">{pillar.icon}</div>
            <h2 className="mt-6 text-2xl font-semibold text-slate-950">
              {pillar.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              {pillar.description}
            </p>
          </article>
        ))}
      </section>

      <section className="panel mb-4 p-6 sm:p-8 lg:p-10">
        <SectionHeading
          title="What that means in practice"
          description="The team is opinionated about momentum: build first, explain clearly, and keep the barrier to entry lower than the ambition of the work."
        />
        <div className="mt-8 grid gap-4 text-sm leading-7 text-slate-600 md:grid-cols-3">
          <p>
            Members work across software, simulation, and hardware-adjacent
            problems instead of staying in abstract lecture mode.
          </p>
          <p>
            The team structure favors visible projects, shared language, and
            peer learning over isolated study.
          </p>
          <p>
            Curiosity is enough to start. The point is to get technically useful
            fast, not to gatekeep entry.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
