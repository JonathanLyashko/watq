import { SiteShell } from "@/components/site/site-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { subteams } from "@/lib/site-content";

export default function SubteamsPage() {
  return (
    <SiteShell>
      <section className="space-y-10 py-16 lg:py-20">
        <SectionHeading
          title="Our teams"
          description="WatQ is split into focused tracks so members can contribute to the part of the stack they want to understand most deeply."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {subteams.map((team) => (
            <article key={team.title} className="panel p-6 sm:p-8 lg:p-10">
              <p className="eyebrow">{team.label}</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                {team.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {team.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {team.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
