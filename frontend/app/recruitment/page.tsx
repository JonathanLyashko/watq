import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteShell } from "@/components/site/site-shell";
import { recruitmentCards } from "@/lib/site-content";

export default function RecruitmentPage() {
  return (
    <SiteShell surface="mesh">
      <section className="grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <PageHero
          badge="Spring '26 recruits welcome"
          title="Curious about quantum? Join us."
          accent="Join us."
          description="No prior experience required. If you want to design hardware, write software, or learn how the stack fits together, WatQ is built to help you start."
          actions={
            <>
              <Link
                href="https://discord.gg/jyZqAUxSdT"
                className="button-primary w-full sm:w-auto"
              >
                Join the Discord
              </Link>
            </>
          }
        />
        <div className="recruitment-visual">
          <div className="recruitment-visual__copy">
            <p className="eyebrow">What to expect</p>
            <h2 className="text-3xl font-semibold text-slate-950">
              A team that learns together through projects.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Expect a mix of collaborative learning, scoped technical work, and
              enough structure to make the field feel approachable without making
              the work feel watered down.
            </p>
          </div>
          <div className="recruitment-visual__stage">
            <div className="recruitment-visual__halo recruitment-visual__halo--one" />
            <div className="recruitment-visual__halo recruitment-visual__halo--two" />
            <div className="recruitment-visual__bubble recruitment-visual__bubble--top">
              <span className="recruitment-visual__bubble-label">Weekly rhythm</span>
              <span className="recruitment-visual__bubble-text">
                Build sessions, technical reviews, and shared learning.
              </span>
            </div>
            <div className="recruitment-visual__bubble recruitment-visual__bubble--bottom">
              <span className="recruitment-visual__bubble-label">Team vibe</span>
              <span className="recruitment-visual__bubble-text">
                Curious, collaborative, and willing to figure things out together.
              </span>
            </div>
            <div className="recruitment-visual__photo-wrap">
              <Image
                src="/WatQ-group-photo.jpg"
                alt="WatQ team group photo"
                width={1600}
                height={1200}
                className="recruitment-visual__photo"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-10 pb-8">
        <SectionHeading
          title="Where you can contribute"
          description="Different backgrounds fit different entry points. The team is organized so people can contribute while ramping up."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {recruitmentCards.map((card) => (
            <article
              key={card.title}
              className={`panel p-6 sm:p-8 ${card.featured ? "lg:col-span-2" : ""}`}
            >
              <div className="icon-chip">{card.icon}</div>
              <h2 className="mt-6 text-2xl font-semibold text-slate-950">
                {card.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
