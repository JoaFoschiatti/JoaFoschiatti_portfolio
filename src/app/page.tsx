import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StartOptionsSection from "@/components/StartOptionsSection";
import TrustSection from "@/components/TrustSection";
import {
  clientTypes,
  contactLinks,
  featuredProjects,
  processSteps,
  profile,
  securityProjects,
  services,
  systemsStartOptions,
  trustCards,
  valueStrip,
} from "@/data/portfolio";
import { createWhatsAppLink } from "@/lib/whatsapp";

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

      <section className="value-strip-band">
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

      <Process steps={processSteps} />

      <section
        id="proyectos"
        className="section-anchor section-block section-shell"
      >
        <SectionHeading
          title="Proyectos que muestran cómo trabajo."
          description="No son ejercicios aislados: son sistemas pensados para resolver flujos reales de negocio."
        />
        <div className="mt-10 space-y-6">
          {primaryProject ? (
            <ProjectCard project={primaryProject} variant="featured" />
          ) : null}
          <div className="grid gap-6">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="horizontal" />
            ))}
          </div>
        </div>
      </section>

      <TrustSection
        title="Tecnología con foco en uso real."
        cards={trustCards}
      />

      <section className="section-anchor section-block section-shell">
        <SectionHeading
          title="Pensado para negocios que necesitan ordenar su operación."
          description="Webs y herramientas internas para negocios reales, con foco en tareas que se usan todos los días."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {clientTypes.map((clientType, index) => (
            <article
              key={clientType.title}
              className="surface-card p-5"
            >
              <p className="section-eyebrow">Tipo {String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-[1.15rem] font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">
                {clientType.title}
              </h3>
              <p className="mt-3 text-[0.96rem] leading-7 text-[var(--color-muted)]">
                {clientType.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-10 md:pb-14">
        {securityProjects.map((project) => (
          <article key={project.slug} className="surface-card px-5 py-5 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <p className="section-eyebrow">Criterio de seguridad</p>
                <h2 className="mt-3 text-[1.25rem] font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">
                  Buenas prácticas para sistemas que se usan todos los días
                </h2>
                <p className="mt-3 text-[0.98rem] leading-7 text-[var(--color-muted)]">
                  {project.description}
                </p>
              </div>
              {project.repoUrl ? (
                <a
                  className="inline-link shrink-0 text-sm"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repo técnico
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      <StartOptionsSection
        compact
        title="Podemos empezar por una versión chica o por ordenar un proceso completo."
        description="Sin precios cerrados ni paquetes rígidos: primero se entiende el proceso, después se define la primera versión que aporta valor real."
        options={systemsStartOptions}
        ctaHref="/sistemas-a-medida"
        ctaLabel="Ver sistemas a medida"
      />

      <ContactCTA
        title="¿Tenés una idea o un proceso que querés ordenar?"
        description="Contame qué parte del negocio querés ordenar: web, turnos, POS, stock, reportes o automatización. La idea es entender primero el problema y después construir algo que realmente se use."
        whatsappHref={whatsappHref}
        email={`mailto:${contactLinks.email}`}
        briefQuestions={profile.briefQuestions}
      />

      <section className="section-shell pb-20 md:pb-24">
        <div className="surface-card px-5 py-5 text-sm text-[var(--color-subtle)] md:px-6">
          <p>Sistemas que se usan en la operación diaria. Del problema al sistema funcionando.</p>
          <p className="mt-3">
            Si preferís revisar primero los casos, podés volver a{" "}
            <Link className="inline-link" href="/#proyectos">
              proyectos destacados
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
