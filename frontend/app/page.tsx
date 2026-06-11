import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteShell } from "@/components/site/site-shell";
import {
  homeFeatureCards,
  homeHighlights,
  recruitmentLinks,
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <SiteShell surface="grid">
      <section className="grid gap-16 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <PageHero
          badge="Student-Led Design Team"
          title="WatQ makes quantum design work approachable."
          accent="approachable."
          description="A student team exploring hardware, software, and experimental systems for quantum technology. No quantum background required, just real curiosity and a willingness to build."
          actions={
            <>
              <Link href="/recruitment" className="button-primary">
                Join WatQ
              </Link>
              <Link href="/about" className="button-secondary">
                Learn More
              </Link>
            </>
          }
        />
        <div className="hero-visual">
          <Image
            src="/WATQ_logo_Q_ket_Color_pink_red.png"
            alt="WatQ hero logo"
            width={620}
            height={620}
            className="hero-visual__image"
            priority
          />
          <div className="hero-visual__core" />
          <div className="hero-visual__ring hero-visual__ring--one" />
          <div className="hero-visual__ring hero-visual__ring--two" />
          <div className="hero-visual__node hero-visual__node--one" />
          <div className="hero-visual__node hero-visual__node--two" />
          <div className="hero-visual__node hero-visual__node--three" />
        </div>
      </section>

      <section className="space-y-10 py-8">
        <SectionHeading
          title="What is WatQ?"
          description="We are building a low-friction sandbox for students who want to learn quantum engineering through practical work."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-12">
          {homeFeatureCards.map((card) => (
            <article
              key={card.title}
              className={`panel p-8 ${card.featured ? "lg:col-span-7" : "lg:col-span-5"}`}
            >
              <div className="icon-chip">{card.icon}</div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                {card.title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                {card.description}
              </p>
              {card.tags ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-10 py-8">
        <SectionHeading
          title="Why people join"
          description="The team is structured to be useful for both beginners and technically ambitious builders."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {homeHighlights.map((item) => (
            <article key={item.title} className="panel p-6 sm:p-7">
              <p className="eyebrow">{item.kicker}</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-panel mt-8">
        <div>
          <p className="eyebrow">Recruitment</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Start with curiosity. Build from there.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/78">
            We care more about momentum than prior exposure. If you want to work
            on hardware, software, or simulation, there is room to get started.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {recruitmentLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.primary ? "button-light" : "button-ghost-light"}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
