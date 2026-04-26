import Link from "next/link";
import MockupCard from "@/components/MockupCard";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  variant?: "standard" | "featured";
};

function EvidenceBadges({ project }: { project: Project }) {
  if (!project.evidenceBadges?.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {project.evidenceBadges.map((badge) => (
        <span key={badge} className="evidence-pill">
          {badge}
        </span>
      ))}
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
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
  );
}

export default function ProjectCard({
  project,
  variant = "standard",
}: ProjectCardProps) {
  const featured = variant === "featured";

  if (featured) {
    return (
      <article className="surface-card-strong box-border max-w-full min-w-0 p-5 md:p-7 lg:p-8">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <MockupCard variant={project.mockup} size="large" />
          <div className="min-w-0">
            <EvidenceBadges project={project} />
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="pill">{project.category}</span>
              <span className="pill">{project.status}</span>
            </div>
            <h3 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-[#171717]">
              {project.name}
            </h3>
            <p className="mt-5 max-w-2xl text-[1.06rem] leading-8 text-[#4d4d4d]">
              {project.description}
            </p>
            <div className="mt-6">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#666666]">
                Problema
              </p>
              <p className="mt-2 max-w-2xl text-[1rem] leading-7 text-[#4d4d4d]">
                {project.problem}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.modules.map((module) => (
                <span key={module} className="pill">
                  {module}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <ProjectActions project={project} />
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="surface-card-strong box-border flex h-full max-w-full min-w-0 flex-col p-5 md:p-6">
      <MockupCard variant={project.mockup} />
      <div className="mt-6 flex grow flex-col">
        <EvidenceBadges project={project} />
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="pill">{project.category}</span>
          <span className="pill">{project.status}</span>
        </div>
        <h3 className="mt-5 text-[clamp(1.42rem,2vw,1.58rem)] font-semibold tracking-[-0.04em] text-[#171717]">
          {project.name}
        </h3>
        <p className="mt-4 text-[1rem] leading-8 text-[#4d4d4d]">
          {project.description}
        </p>
        <div className="mt-5">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#666666]">
            Problema
          </p>
          <p className="mt-2 text-[0.98rem] leading-7 text-[#4d4d4d]">
            {project.problem}
          </p>
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
        <div className="mt-auto pt-7">
          <ProjectActions project={project} />
        </div>
      </div>
    </article>
  );
}
