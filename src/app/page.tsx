import Link from "next/link";
import AvatarLightbox from "@/components/AvatarLightbox";
import ContactCTA from "@/components/ContactCTA";
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import OfferOverview from "@/components/OfferOverview";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import {
  contactLinks,
  featuredProjects,
  homeFaqs,
  homeProblems,
  offerCards,
  personalTrust,
  processSteps,
  profile,
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
        whatsappHref={whatsappHref}
      />

      <OfferOverview offers={offerCards} />

      <section
        id="proyectos"
        className="section-anchor section-block section-shell"
      >
        <div className="home-projects-panel">
          <SectionHeading
            eyebrow="Casos reales"
            title="Problemas concretos convertidos en herramientas."
            description="Mirá el resumen rápido y entrá al caso si querés ver el detalle."
          />
          <div className="mt-8 space-y-6 md:mt-10">
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

      <section className="section-shell pb-16 md:pb-20">
        <div className="home-personal-card">
          <AvatarLightbox
            src="/projects/quien-esta-detras.png"
            alt="Foto de Joaquín Sánchez Foschiatti"
            width={1254}
            height={1254}
          />
          <div className="min-w-0">
            <p className="section-eyebrow">{personalTrust.eyebrow}</p>
            <h2 className="section-title mt-4">{personalTrust.title}</h2>
            <p className="section-copy mt-5">{personalTrust.description}</p>
            <div className="mt-6 grid gap-3">
              {personalTrust.points.map((point) => (
                <div key={point} className="home-personal-point">
                  <span className="status-dot text-[var(--color-accent-teal)]" aria-hidden />
                  <span>{point}</span>
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
            title="Procesos que puedo ordenar con software."
            description="Ejemplos de operación diaria que pueden pasar de manual a simple."
          />
          <div className="mt-6 grid gap-2 min-[360px]:grid-cols-2 sm:gap-3 lg:grid-cols-4">
            {homeProblems.map((problem) => (
              <article key={problem.title} className="home-problem-item">
                <span className="status-dot text-[var(--color-accent-teal)]" aria-hidden />
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="proceso"
        className="section-anchor section-shell pb-16 md:pb-20"
      >
        <div className="home-compact-proof">
          <div>
            <p className="section-eyebrow">Cómo trabajo</p>
            <h2 className="section-title mt-4">
              Del problema a una primera versión usable.
            </h2>
            <p className="section-copy mt-5">
              Primero entendemos el flujo. Después construimos lo mínimo útil.
            </p>
            <div className="mt-7">
              <Link className="button-secondary" href="/sistemas-a-medida">
                Ver qué puedo construir
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
          </div>
        </div>
      </section>

      <FaqSection
        id="faq"
        title="Dudas normales antes de escribir."
        description="Abrí solo lo que necesites resolver antes de consultar."
        faqs={homeFaqs}
      />

      <ContactCTA
        title="¿Tenés un proceso que querés ordenar?"
        description="Mandame el problema. No hace falta que tengas definida la solución."
        whatsappHref={whatsappHref}
        email={`mailto:${contactLinks.email}`}
        briefQuestions={profile.briefQuestions}
      />
    </>
  );
}
