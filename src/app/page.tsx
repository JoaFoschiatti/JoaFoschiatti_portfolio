import Link from "next/link";
import AvatarLightbox from "@/components/AvatarLightbox";
import ContactCTA from "@/components/ContactCTA";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import {
  contactLinks,
  featuredProjects,
  homeProblems,
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

      <section
        id="proyectos"
        className="section-anchor section-block section-shell"
      >
        <div className="home-projects-panel">
          <SectionHeading
            title="Casos reales: 3 negocios, 3 problemas, 3 sistemas."
            description="Restaurante, óptica y agenda online. Vas a ver el problema concreto, las pantallas reales y qué cambia en la operación."
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
            description="Si hoy dependés de planillas, WhatsApps, papeles o tareas repetidas, probablemente hay una parte del negocio que puede convertirse en una herramienta simple."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
              Tres pasos para pasar del problema a una herramienta usable.
            </h2>
            <p className="section-copy mt-5">
              Mantengo el proceso simple: entender qué pasa, construir una
              primera versión concreta y publicarla con margen para ajustar.
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
          </div>
        </div>
      </section>

      <ContactCTA
        title="¿Tenés una idea o un proceso que querés ordenar?"
        description="Contame qué parte del negocio querés ordenar: web, turnos, POS, stock, reportes o automatización. Después de publicar el sistema, puedo acompañarte con mantenimiento, ajustes y nuevas mejoras si lo necesitás."
        whatsappHref={whatsappHref}
        email={`mailto:${contactLinks.email}`}
        briefQuestions={profile.briefQuestions}
      />
    </>
  );
}
