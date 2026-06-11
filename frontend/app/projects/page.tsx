import { SiteShell } from "@/components/site/site-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/site-content";

export default function ProjectsPage() {
  return (
    <SiteShell surface="mesh">
      <section className="space-y-10 py-16 lg:py-20">
        <SectionHeading
          eyebrow="Phase 1: Foundation"
          title="Current explorations"
          description="The team is early stage by design. The focus right now is building the simulation, control, and circuit intuition needed for more advanced work later."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="panel p-6 sm:p-8">
              <div className="icon-chip">{project.icon}</div>
              <h2 className="mt-6 text-2xl font-semibold text-slate-950">
                {project.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
