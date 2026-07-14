import Image from "next/image";
import Link from "next/link";
import StatusPill from "@/components/StatusPill";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const href = `/proyectos/${project.slug}`;

  return (
    <article
      className="project-story"
      data-direction={index % 2 === 0 ? "forward" : "reverse"}
    >
      <div className="project-story-copy">
        <div className="project-story-topline">
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          <StatusPill status={project.status} />
        </div>

        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>

        <dl className="project-facts">
          <div>
            <dt>Ideal para</dt>
            <dd>{project.idealFor ?? "Negocios con procesos operativos"}</dd>
          </div>
          <div>
            <dt>Resultado buscado</dt>
            <dd>{project.businessGain ?? project.homeResult ?? project.solution}</dd>
          </div>
        </dl>

        <Link className="text-link" href={href}>
          Ver caso completo <span aria-hidden>↗</span>
        </Link>
      </div>

      {project.homeVisual ? (
        <Link
          className="project-visual"
          href={href}
          aria-label={`Ver el caso ${project.name}`}
        >
          <div className="project-browser-bar" aria-hidden>
            <span><i /><i /><i /></span>
            <small>{project.slug}.case</small>
          </div>
          <Image
            src={project.homeVisual.src}
            alt={project.homeVisual.alt}
            width={project.homeVisual.width}
            height={project.homeVisual.height}
            sizes="(min-width: 1024px) 52vw, 100vw"
          />
          <span className="project-visual-caption">
            {project.modules.length} módulos documentados
            <span aria-hidden>Explorar ↗</span>
          </span>
        </Link>
      ) : null}
    </article>
  );
}
