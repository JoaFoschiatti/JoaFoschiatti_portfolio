import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TrustSection from "@/components/TrustSection";
import {
  clientTypes,
  contactLinks,
  featuredProjects,
  processSteps,
  profile,
  securityProjects,
  services,
  trustCards,
  valueStrip,
} from "@/data/portfolio";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function Home() {
  const whatsappHref =
    createWhatsAppLink(profile.whatsappNumber, contactLinks.whatsappMessage) ??
    "/#contacto";

  return (
    <>
      <Hero
        title={profile.heroTitle}
        subtitle={profile.heroSubtitle}
        badges={profile.heroBadges}
        microcopy={profile.heroMicrocopy}
        whatsappHref={whatsappHref}
      />

      <section className="section-shell pb-6 md:pb-8">
        <div className="surface-card overflow-hidden px-5 py-4 md:px-6">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {valueStrip.map((item) => (
              <div
                key={item}
                className="flex shrink-0 items-center gap-3 text-sm text-[#4d4d4d]"
              >
                <span className="status-dot text-[#171717]" aria-hidden />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="servicios"
        className="section-anchor section-block section-shell"
      >
        <SectionHeading
          title="Soluciones concretas para problemas reales de operación."
          description="Desde una web para captar consultas hasta un sistema interno para ordenar ventas, stock, turnos o procesos administrativos."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section
        id="proyectos"
        className="section-anchor section-block section-shell"
      >
        <SectionHeading
          title="Proyectos que muestran cómo trabajo."
          description="No son ejercicios aislados: son sistemas pensados para resolver flujos reales de negocio."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Process steps={processSteps} />

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
              key={clientType}
              className="surface-card p-5"
            >
              <p className="section-eyebrow">Tipo {String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-[1.15rem] font-semibold tracking-[-0.03em] text-[#171717]">
                {clientType}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block section-shell">
        <SectionHeading
          title="Criterio técnico y seguridad"
          description="Además de desarrollo web y sistemas de gestión, documento y estudio prácticas de ciberseguridad defensiva: logs, SIEM, respuesta a incidentes, threat intelligence y análisis de malware."
        />
        <div className="mt-10 grid gap-6">
          {securityProjects.map((project) => (
            <article key={project.slug} className="surface-card p-6 md:p-7">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="pill">{project.category}</span>
                    <span className="pill">{project.status}</span>
                  </div>
                  <h3 className="mt-5 text-[clamp(1.5rem,2vw,2rem)] font-semibold tracking-[-0.04em] text-[#171717]">
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-[#4d4d4d]">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {project.repoUrl ? (
                  <a
                    className="button-secondary shrink-0"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.repoLabel ?? "Ver repo"}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactCTA
        title="¿Tenés una idea o un proceso que querés ordenar?"
        description="Escribime y vemos si conviene una web, un sistema de gestión o una automatización. La idea es entender primero el problema y después construir algo que realmente se use."
        whatsappHref={whatsappHref}
        email={`mailto:${contactLinks.email}`}
        briefQuestions={profile.briefQuestions}
      />

      <section className="section-shell pb-20 md:pb-24">
        <div className="surface-card px-5 py-5 text-sm text-[#666666] md:px-6">
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
