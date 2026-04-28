import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseScreenshots from "@/components/CaseScreenshots";
import MockupCard from "@/components/MockupCard";
import ProjectModules from "@/components/ProjectModules";
import SectionHeading from "@/components/SectionHeading";
import {
  contactLinks,
  featuredProjects,
  getProjectBySlug,
  profile,
} from "@/data/portfolio";
import { createWhatsAppLink } from "@/lib/whatsapp";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  props: ProjectPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} — ${project.category}`,
    description: project.description,
    alternates: {
      canonical: `${profile.siteUrl}/proyectos/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} — ${project.category}`,
      description: project.description,
      url: `${profile.siteUrl}/proyectos/${project.slug}`,
      type: "article",
      locale: "es_AR",
      images: [
        {
          url: `${profile.siteUrl}/opengraph-image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${project.category}`,
      description: project.description,
      images: [`${profile.siteUrl}/twitter-image`],
    },
  };
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const whatsappHref =
    createWhatsAppLink(profile.whatsappNumber, contactLinks.whatsappMessage) ??
    "/#contacto";

  return (
    <>
      <section className="section-block section-shell pt-12 md:pt-20">
        <div className="case-hero-card p-6 md:p-8 lg:p-10">
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                {project.evidenceBadges?.map((badge) => (
                  <span key={badge} className="evidence-pill">
                    {badge}
                  </span>
                ))}
                <span className="pill">{project.category}</span>
                <span className="pill">{project.status}</span>
              </div>
              <Link
                href="/#proyectos"
                className="mt-6 inline-flex text-sm text-[#b7c5d0] hover:text-white"
              >
                Volver a proyectos
              </Link>
              <h1 className="mt-5 max-w-4xl text-[clamp(2.6rem,5vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[#f8fbfb]">
                {project.name}
              </h1>
              <p className="mt-5 max-w-3xl text-[1.08rem] leading-8 text-[#c6d1da]">
                {project.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link className="button-primary" href={whatsappHref}>
                  Hablar por WhatsApp
                </Link>
                {project.repoUrl ? (
                  <a
                    className="button-secondary"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.repoLabel ?? "Ver código en GitHub"}
                  </a>
                ) : null}
              </div>
            </div>
            <div className="case-hero-visual">
              <MockupCard variant={project.mockup} size="large" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-6 pb-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="case-context-card case-context-card-problem p-6 md:p-7">
          <p className="section-eyebrow">Problema</p>
          <h2 className="mt-4 text-[1.4rem] font-semibold tracking-[-0.04em] text-[#171717]">
            Qué ordena este sistema
          </h2>
          <p className="mt-4 text-[1rem] leading-8 text-[#4d4d4d]">
            {project.problem}
          </p>
        </article>
        <article className="case-context-card case-context-card-solution p-6 md:p-7">
          <p className="section-eyebrow">Solución</p>
          <h2 className="mt-4 text-[1.4rem] font-semibold tracking-[-0.04em] text-[#171717]">
            Cómo lo planteo
          </h2>
          <p className="mt-4 text-[1rem] leading-8 text-[#4d4d4d]">
            {project.solution}
          </p>
        </article>
      </section>

      <CaseScreenshots screenshots={project.screenshots} />

      <section className="section-anchor section-block section-shell pt-6">
        <div className="case-modules-gallery">
          <div className="case-modules-heading">
            <SectionHeading
              title="Módulos principales"
              description="La idea no es sumar pantallas por sumar, sino cubrir los puntos que hacen falta en la operación diaria."
            />
          </div>
          <ProjectModules
            modules={project.modules}
            moduleScreenshots={project.moduleScreenshots}
          />
        </div>
      </section>

      <section className="section-shell grid gap-6 pb-8 md:grid-cols-[1.1fr_0.9fr]">
        <article className="surface-card p-6 md:p-7">
          <p className="section-eyebrow">{project.stackLabel}</p>
          <h2 className="mt-4 text-[1.4rem] font-semibold tracking-[-0.04em] text-[#171717]">
            Stack o capacidades visibles
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </article>
        <article className="surface-card p-6 md:p-7">
          <p className="section-eyebrow">Notas</p>
          <h2 className="mt-4 text-[1.4rem] font-semibold tracking-[-0.04em] text-[#171717]">
            Criterio de presentación
          </h2>
          <ul className="mt-5 space-y-4 text-[1rem] leading-8 text-[#4d4d4d]">
            {project.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
}
