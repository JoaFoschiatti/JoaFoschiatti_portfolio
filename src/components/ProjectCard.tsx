import Link from "next/link";
import Image from "next/image";
import MockupCard from "@/components/MockupCard";
import type { Project } from "@/data/portfolio";
import type { ReactNode } from "react";

type ProjectCardProps = {
  project: Project;
  variant?: "standard" | "featured" | "horizontal";
  showRepoLink?: boolean;
};

type ProjectContentVariant = "standard" | "featured" | "horizontal";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

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

function ProjectPreview({
  project,
  size = "compact",
  className,
}: {
  project: Project;
  size?: "compact" | "large";
  className?: string;
}) {
  if (project.homeVisual) {
    return (
      <figure className={className}>
        <Image
          src={project.homeVisual.src}
          alt={project.homeVisual.alt}
          width={project.homeVisual.width}
          height={project.homeVisual.height}
          className="h-auto w-full rounded-[12px]"
          sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, calc(100vw - 2rem)"
        />
      </figure>
    );
  }

  return (
    <div className={className}>
      <MockupCard variant={project.mockup} size={size} />
    </div>
  );
}

function ProjectActions({
  project,
  showRepoLink,
}: {
  project: Project;
  showRepoLink: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link className="button-primary" href={`/proyectos/${project.slug}`}>
        {project.caseLabel}
      </Link>
      {showRepoLink && project.repoUrl ? (
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
  );
}

function ProjectContent({
  project,
  variant,
  showStack = false,
  visualPriority = false,
  showRepoLink,
  mobilePreview,
}: {
  project: Project;
  variant: ProjectContentVariant;
  showStack?: boolean;
  visualPriority?: boolean;
  showRepoLink: boolean;
  mobilePreview?: ReactNode;
}) {
  const featured = variant === "featured";
  const standard = variant === "standard";
  const titleClassName = visualPriority
    ? "mt-4 max-w-md text-[clamp(1.9rem,3.2vw,2.55rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-[#171717]"
    : featured
      ? "mt-5 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-[#171717]"
      : standard
        ? "mt-5 text-[clamp(1.42rem,2vw,1.58rem)] font-semibold tracking-[-0.04em] text-[#171717]"
        : "mt-5 text-[clamp(1.65rem,3vw,2.15rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-[#171717]";
  const descriptionClassName = visualPriority
    ? "mt-4 max-w-md text-[0.98rem] leading-7 text-[#4d4d4d]"
    : featured
      ? "mt-5 max-w-2xl text-[1.06rem] leading-8 text-[#4d4d4d]"
      : standard
        ? "mt-4 text-[1rem] leading-8 text-[#4d4d4d]"
        : "mt-4 max-w-2xl text-[1.02rem] leading-8 text-[#4d4d4d]";
  const problemClassName = visualPriority
    ? "mt-2 max-w-md text-[0.92rem] leading-6 text-[#4d4d4d]"
    : featured
      ? "mt-2 max-w-2xl text-[1rem] leading-7 text-[#4d4d4d]"
      : standard
        ? "mt-2 text-[0.98rem] leading-7 text-[#4d4d4d]"
        : "mt-2 max-w-2xl text-[0.98rem] leading-7 text-[#4d4d4d]";
  const resultClassName = visualPriority
    ? "mt-2 max-w-md text-[0.92rem] leading-6 text-[#4d4d4d]"
    : "mt-2 max-w-2xl text-[0.98rem] leading-7 text-[#4d4d4d]";
  const actionsClassName = visualPriority
    ? "mt-6"
    : featured
    ? "mt-8"
    : standard
      ? "mt-auto pt-7"
      : "mt-7";
  const metaClassName = visualPriority
    ? "flex flex-wrap items-center gap-2"
    : "mt-5 flex flex-wrap items-center gap-3";
  const problemContainerClassName = visualPriority ? "mt-4" : "mt-5";
  const moduleContainerClassName = visualPriority ? "mt-5" : "mt-6";

  return (
    <div className={standard ? "mt-6 flex grow flex-col" : "min-w-0"}>
      {visualPriority ? null : <EvidenceBadges project={project} />}
      <div className={metaClassName}>
        <span className="pill">{project.category}</span>
        <span className="pill">{project.status}</span>
      </div>
      <h3 className={titleClassName}>{project.name}</h3>
      <p className={descriptionClassName}>{project.description}</p>
      {mobilePreview ? <div className="mt-5 lg:hidden">{mobilePreview}</div> : null}
      <div className={problemContainerClassName}>
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#666666]">
          Qué ordena
        </p>
        <p className={problemClassName}>{project.problem}</p>
      </div>
      {project.businessGain ? (
        <div className="mt-4">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#666666]">
            Qué gana el negocio
          </p>
          <p className={resultClassName}>{project.businessGain}</p>
        </div>
      ) : null}
      <div className={moduleContainerClassName}>
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#666666]">
          Módulos
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.modules.map((module) => (
            <span key={module} className="pill">
              {module}
            </span>
          ))}
        </div>
      </div>
      {showStack ? (
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
      ) : null}
      <div className={actionsClassName}>
        <ProjectActions project={project} showRepoLink={showRepoLink} />
      </div>
    </div>
  );
}

export default function ProjectCard({
  project,
  variant = "standard",
  showRepoLink = true,
}: ProjectCardProps) {
  const featured = variant === "featured";
  const horizontal = variant === "horizontal";
  const hasHomeVisual = Boolean(project.homeVisual);

  if (featured) {
    return (
      <article
        className={cn(
          "surface-card-strong box-border max-w-full min-w-0 p-5",
          hasHomeVisual ? "md:p-5 lg:p-5" : "md:p-7 lg:p-8",
        )}
      >
        <div
          className={cn(
            "grid min-w-0 lg:items-start",
            hasHomeVisual
              ? "gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-center"
              : "gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]",
          )}
        >
          <ProjectPreview project={project} size="large" className="hidden lg:block" />
          <ProjectContent
            project={project}
            variant="featured"
            visualPriority={hasHomeVisual}
            showRepoLink={showRepoLink}
            mobilePreview={
              <ProjectPreview
                project={project}
                className={hasHomeVisual ? "-mx-4" : undefined}
              />
            }
          />
        </div>
      </article>
    );
  }

  if (horizontal) {
    return (
      <article
        className={cn(
          "surface-card-strong box-border max-w-full min-w-0 p-5",
          hasHomeVisual ? "md:p-5" : "md:p-7",
        )}
      >
        <div
          className={cn(
            "grid min-w-0",
            hasHomeVisual
              ? "gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-center"
              : "gap-7 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start",
          )}
        >
          <ProjectPreview project={project} className="hidden lg:block" />
          <ProjectContent
            project={project}
            variant="horizontal"
            visualPriority={hasHomeVisual}
            showRepoLink={showRepoLink}
            mobilePreview={
              <ProjectPreview
                project={project}
                className={hasHomeVisual ? "-mx-4" : undefined}
              />
            }
          />
        </div>
      </article>
    );
  }

  return (
    <article className="surface-card-strong box-border flex h-full max-w-full min-w-0 flex-col p-5 md:p-6">
      <ProjectPreview project={project} />
      <ProjectContent
        project={project}
        variant="standard"
        showStack
        showRepoLink={showRepoLink}
      />
    </article>
  );
}
