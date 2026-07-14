import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectModules from "@/components/ProjectModules";
import SectionHeading from "@/components/SectionHeading";
import StatusPill from "@/components/StatusPill";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  featuredProjects,
  getProjectBySlug,
  profile,
} from "@/data/portfolio";
import { createWhatsAppLink } from "@/lib/whatsapp";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: ProjectPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.name} — ${project.category}`,
    description: project.description,
    alternates: { canonical: `${profile.siteUrl}/proyectos/${project.slug}` },
    openGraph: {
      title: `${project.name} — ${project.category}`,
      description: project.description,
      url: `${profile.siteUrl}/proyectos/${project.slug}`,
      type: "article",
      locale: "es_AR",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${project.category}`,
      description: project.description,
    },
  };
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const whatsappHref =
    createWhatsAppLink(
      profile.whatsappNumber,
      `Hola Joaquín, vi el caso ${project.name} en tu portfolio y quiero conversar sobre un proyecto similar.`,
    ) ?? "/#contacto";
  const otherProjects = featuredProjects.filter(
    (other) => other.slug !== project.slug,
  );
  const resultLabel =
    project.status === "En uso real" ? "Evidencia en operación" : "Impacto esperado";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    applicationCategory: "BusinessApplication",
    creator: {
      "@type": "Person",
      name: profile.fullName,
      url: profile.siteUrl,
    },
    url: `${profile.siteUrl}/proyectos/${project.slug}`,
  };

  return (
    <>
      <section className="case-hero">
        <div className="hero-grid-lines" aria-hidden />
        <div className="section-shell case-hero-grid">
          <div className="case-hero-copy">
            <Link className="case-breadcrumb" href="/#proyectos">
              <span aria-hidden>←</span> Proyectos
            </Link>
            <div className="case-labels">
              <span>{project.category}</span>
              <StatusPill status={project.status} />
            </div>
            <h1>{project.name}</h1>
            <p className="case-hero-description">{project.description}</p>

            <dl className="case-hero-facts">
              <div>
                <dt>Tipo de proyecto</dt>
                <dd>{project.projectType ?? project.category}</dd>
              </div>
              <div>
                <dt>Pensado para</dt>
                <dd>{project.idealFor ?? "Negocios con operación diaria"}</dd>
              </div>
            </dl>

            <WhatsAppButton className="button-whatsapp-quiet" href={whatsappHref}>
              Consultar por un proyecto similar
            </WhatsAppButton>
          </div>

          {project.caseHeroVisual ? (
            <div className="case-hero-visual">
              <div className="project-browser-bar" aria-hidden>
                <span><i /><i /><i /></span>
                <small>{project.name}</small>
              </div>
              <Image
                src={project.caseHeroVisual.src}
                alt={project.caseHeroVisual.alt}
                width={project.caseHeroVisual.width}
                height={project.caseHeroVisual.height}
                priority
                sizes="(min-width: 1024px) 470px, 92vw"
              />
              <div className="case-evidence-badge">
                {project.evidenceBadges?.[0] ?? "Pantallas del sistema"}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="case-impact-section">
        <div className="section-shell case-impact-grid">
          <article>
            <span>01 — Problema</span>
            <h2>Qué necesitaba ordenarse</h2>
            <p>{project.problem}</p>
          </article>
          <article>
            <span>02 — Intervención</span>
            <h2>Cómo se resolvió</h2>
            <p>{project.solution}</p>
          </article>
          <article>
            <span>03 — {resultLabel}</span>
            <h2>{project.status === "En uso real" ? "Qué sostiene hoy" : "Qué busca mejorar"}</h2>
            <p>{project.businessGain ?? project.homeResult ?? project.solution}</p>
          </article>
        </div>
      </section>

      <section className="case-modules-section">
        <div className="section-shell section-block">
          <SectionHeading
            index="04"
            eyebrow="Producto en detalle"
            title="Pantallas que responden a una tarea concreta."
            description="Las interfaces se muestran con datos demo cuando el caso es privado. Podés abrir cada pantalla para revisar el detalle."
          />
          <ProjectModules
            modules={project.modules}
            moduleScreenshots={project.moduleScreenshots}
          />
        </div>
      </section>

      <section className="case-details-section">
        <div className="section-shell case-details-grid">
          <article>
            <p className="section-eyebrow">{project.stackLabel}</p>
            <h2>Base técnica y capacidades</h2>
            <div className="case-tags">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            {project.repoUrl ? (
              <a className="text-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                Ver repositorio <span aria-hidden>↗</span>
              </a>
            ) : null}
          </article>

          <article>
            <p className="section-eyebrow">Privacidad y evidencia</p>
            <h2>Qué se muestra y qué se protege</h2>
            <ul>
              {project.notes.map((note) => (
                <li key={note}>
                  <span aria-hidden>↳</span>
                  {note}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="related-projects">
        <div className="section-shell section-block">
          <SectionHeading
            eyebrow="Otros proyectos"
            title="Distintos negocios, el mismo criterio de claridad."
            description="Cada caso empieza en un flujo diferente y termina en una herramienta pensada para su operación."
          />
          <div className="related-projects-grid">
            {otherProjects.map((other) => (
              <Link key={other.slug} href={`/proyectos/${other.slug}`}>
                <span>{other.category}</span>
                <h3>{other.name}</h3>
                <p>{other.problem}</p>
                <i aria-hidden>↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="case-final-cta">
        <div className="section-shell case-final-cta-inner">
          <div>
            <p>¿Hay un proceso parecido en tu negocio?</p>
            <h2>Podemos empezar por entenderlo.</h2>
          </div>
          <div>
            <Link className="button-accent" href="/#contacto">
              Preparar una consulta <span aria-hidden>↗</span>
            </Link>
            <WhatsAppButton className="button-whatsapp-quiet" href={whatsappHref}>
              WhatsApp directo
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
