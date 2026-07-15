import Image from "next/image";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import OfferOverview from "@/components/OfferOverview";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  contactLinks,
  contactServices,
  featuredProjects,
  homeFaqs,
  offerCards,
  personalTrust,
  processSteps,
  profile,
  valueStrip,
} from "@/data/portfolio";
import { createWhatsAppLink } from "@/lib/whatsapp";

const projectPriority = ["optica-focus", "comanda", "turnos-online"];

export default function Home() {
  const whatsappHref =
    createWhatsAppLink(profile.whatsappNumber, contactLinks.whatsappMessage) ??
    "/#contacto";
  const orderedProjects = [...featuredProjects].sort(
    (a, b) => projectPriority.indexOf(a.slug) - projectPriority.indexOf(b.slug),
  );
  return (
    <>
      <Hero
        title={profile.heroTitle}
        subtitle={profile.heroSubtitle}
        badges={profile.heroBadges}
        whatsappHref={whatsappHref}
      />

      <section className="proof-rail" aria-label="Criterios de trabajo">
        <div className="section-shell proof-rail-grid">
          {valueStrip.map((item, index) => (
            <p key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </p>
          ))}
        </div>
      </section>

      <section id="proyectos" className="section-anchor projects-section">
        <div className="section-shell section-block">
          <SectionHeading
            index="01"
            eyebrow="Proyectos seleccionados"
            title="Software que se entiende antes de explicarse."
            description="Tres sistemas con objetivos y estados distintos. Cada caso muestra el problema, la decisión de producto y las pantallas que sostienen la operación."
          />

          <div className="projects-list">
            {orderedProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 70}>
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <OfferOverview offers={offerCards} />

      <section id="sobre-mi" className="section-anchor about-section">
        <div className="section-shell section-block">
          <SectionHeading
            index="03"
            eyebrow={personalTrust.eyebrow}
            title="La tecnología importa cuando mejora el trabajo real."
            description="Trabajo de forma directa: entiendo la operación, diseño el flujo y construyo una base técnica que pueda mantenerse después del lanzamiento."
          />

          <div className="about-grid">
            <article className="about-statement">
              <p className="about-quote">“{personalTrust.title}”</p>
              <p>{personalTrust.description}</p>
              <ul>
                {personalTrust.points.map((point) => (
                  <li key={point}>
                    <span aria-hidden>↳</span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>

            <figure className="about-portrait">
              <div className="about-portrait-image">
                <Image
                  src="/projects/quien-esta-detras.png"
                  alt="Retrato de Joaquín Sánchez Foschiatti"
                  width={1254}
                  height={1254}
                  sizes="(min-width: 1024px) 500px, (min-width: 640px) 82vw, 86vw"
                />
              </div>
              <figcaption>
                <div>
                  <strong>Joaquín Sánchez Foschiatti</strong>
                  <span>Ingeniero en Sistemas</span>
                </div>
                <span>Rosario, Argentina</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="proceso" className="section-anchor process-section">
        <div className="section-shell section-block">
          <SectionHeading
            index="04"
            eyebrow="Proceso"
            title="Del problema a una primera versión usable."
            description="Un recorrido corto, visible y con decisiones concretas. Primero se entiende; después se construye."
          />

          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li key={step.label}>
                <div className="process-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="process-content">
                  <span>{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="process-link-row">
            <p>¿Querés ver qué puede entrar en una primera versión?</p>
            <Link className="text-link" href="/sistemas-a-medida">
              Explorar sistemas a medida <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <FaqSection
        id="faq"
        title="Antes de empezar, estas son las dudas más comunes."
        description="Respuestas directas sobre alcance, punto de partida y continuidad después de publicar."
        faqs={homeFaqs}
      />

      <ContactCTA
        title="Empecemos por el proceso que hoy te quita claridad."
        description="No hace falta llegar con una solución definida. Contame cómo trabajás hoy y preparo el contexto para continuar por WhatsApp o email."
        whatsappHref={whatsappHref}
        whatsappDisplayNumber={profile.whatsappDisplayNumber}
        email={contactLinks.email}
        location={profile.location}
        services={contactServices}
      />
    </>
  );
}
