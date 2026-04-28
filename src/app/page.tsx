import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import {
  contactLinks,
  featuredProjects,
  processSteps,
  profile,
  services,
  trustCards,
  valueStrip,
} from "@/data/portfolio";
import { createWhatsAppLink } from "@/lib/whatsapp";
import type { CSSProperties } from "react";

export default function Home() {
  const whatsappHref =
    createWhatsAppLink(profile.whatsappNumber, contactLinks.whatsappMessage) ??
    "/#contacto";
  const primaryProject = featuredProjects.find(
    (project) => project.slug === "comanda",
  );
  const secondaryProjects = featuredProjects.filter(
    (project) => project.slug !== "comanda",
  );

  return (
    <>
      <Hero
        title={profile.heroTitle}
        subtitle={profile.heroSubtitle}
        badges={profile.heroBadges}
        microcopy={profile.heroMicrocopy}
        proof={profile.heroProof}
        whatsappHref={whatsappHref}
      />

      <section className="value-strip-band hero-adjacent-band hero-adjacent-card-band">
        <div className="section-shell py-5 md:py-6">
          <div className="surface-card value-strip-card overflow-hidden px-5 py-4 md:px-6">
            <div className="flex gap-3 overflow-x-auto pb-1">
              {valueStrip.map((item) => (
                <div
                  key={item}
                  className="flex shrink-0 items-center gap-3 text-sm text-[var(--color-muted)]"
                >
                  <span className="status-dot text-[var(--color-accent-teal)]" aria-hidden />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicios"
        className="section-anchor section-band section-band-cool"
      >
        <div className="section-block section-shell">
          <SectionHeading
            title="Soluciones concretas para problemas reales de operación."
            description="Desde una web para captar consultas hasta un sistema interno para ordenar ventas, stock, turnos o procesos administrativos."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="proyectos"
        className="section-anchor section-block section-shell"
      >
        <div className="home-projects-panel">
          <SectionHeading
            title="Casos reales para entender qué tipo de sistemas construyo."
            description="Tres ejemplos con pantallas concretas: restaurante, óptica y agenda online. La idea es ver rápido el problema, la solución y cómo se usa."
          />
          <div className="mt-10 space-y-6">
            {primaryProject ? (
              <ProjectCard
                project={primaryProject}
                variant="featured"
                showRepoLink={false}
              />
            ) : null}
            <div className="grid gap-6">
              {secondaryProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  variant="horizontal"
                  showRepoLink={false}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="proceso"
        className="section-anchor section-shell pb-16 md:pb-20"
      >
        <div className="home-compact-proof">
          <div>
            <p className="section-eyebrow">Proceso y criterio</p>
            <h2 className="section-title mt-4">
              Primero se entiende el problema. Después se construye lo mínimo que ya ordena.
            </h2>
            <p className="section-copy mt-5">
              La parte técnica importa, pero no debería tapar lo principal:
              entender el flujo, probar una primera versión y dejar el sistema
              listo para uso real.
            </p>
            <div className="mt-7">
              <Link className="button-secondary" href="/sistemas-a-medida">
                Ver sistemas a medida
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <article
                key={step.label}
                className="home-step-row"
                style={{ "--process-color": step.color } as CSSProperties}
              >
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    className="font-mono text-[0.72rem] uppercase tracking-[0.16em]"
                    style={{ color: step.labelColor ?? step.color }}
                  >
                    {step.label}
                  </p>
                  <h3 className="mt-2 text-[1.08rem] font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-7 text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}

            <div className="home-trust-panel">
              {trustCards.map((card) => (
                <article key={card.title} className="home-trust-item">
                  <h3 className="text-[1rem] font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-6 text-[var(--color-muted)]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="¿Tenés una idea o un proceso que querés ordenar?"
        description="Contame qué parte del negocio querés ordenar: web, turnos, POS, stock, reportes o automatización. La idea es entender primero el problema y después construir algo que realmente se use."
        whatsappHref={whatsappHref}
        email={`mailto:${contactLinks.email}`}
        briefQuestions={profile.briefQuestions}
      />
    </>
  );
}
