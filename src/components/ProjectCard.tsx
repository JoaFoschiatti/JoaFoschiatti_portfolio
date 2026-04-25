import Link from "next/link";
import MockupCard from "@/components/MockupCard";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface-card-strong p-5 md:p-6">
      <MockupCard variant={project.mockup} />
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="pill">{project.category}</span>
        <span className="pill">{project.status}</span>
        {project.visibility === "private" ? <span className="pill">Caso privado</span> : null}
      </div>
      <h3 className="mt-5 text-[clamp(1.42rem,2vw,1.58rem)] font-semibold tracking-[-0.04em] text-[#171717]">
        {project.name}
      </h3>
      <p className="mt-4 text-[1rem] leading-8 text-[#4d4d4d]">{project.description}</p>
      <div className="mt-5">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#666666]">
          Problema
        </p>
        <p className="mt-2 text-[0.98rem] leading-7 text-[#4d4d4d]">{project.problem}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.modules.map((module) => (
          <span key={module} className="pill">
            {module}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#666666]">
          {project.stackLabel}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="pill">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link className="button-primary" href={`/proyectos/${project.slug}`}>
          {project.caseLabel}
        </Link>
        {project.repoUrl ? (
          <a
            className="button-secondary"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            {project.repoLabel ?? "Ver repo"}
          </a>
        ) : null}
      </div>
    </article>
  );
}
