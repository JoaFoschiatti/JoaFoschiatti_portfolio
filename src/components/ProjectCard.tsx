import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  variant?: "standard" | "featured" | "horizontal";
  showRepoLink?: boolean;
};

type ProjectContentVariant = "standard" | "featured" | "horizontal";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function ProjectPreview({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  if (!project.homeVisual) {
    return null;
  }

  return (
    <figure className={className}>
      <Image
        src={project.homeVisual.src}
        alt={project.homeVisual.alt}
        width={project.homeVisual.width}
        height={project.homeVisual.height}
        className="h-auto w-full rounded-[12px]"
        sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, calc(100vw - 4rem)"
      />
    </figure>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  const meta = [project.projectType ?? project.category, project.status]
    .filter(Boolean)
    .join(" · ");

  return (
    <p className="font-mono text-[0.7rem] uppercase leading-4 tracking-[0.1em] text-[var(--color-muted)]">
      {meta}
    </p>
  );
}

function ProjectSummaryRow({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  if (!value) {
    return null;
  }

  return (
    <div className="rounded-[8px] bg-[rgba(244,247,245,0.78)] px-2.5 py-2 shadow-[inset_0_0_0_1px_rgba(17,24,32,0.06)] md:px-3 md:py-2.5">
      <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-subtle)]">
        {label}
      </dt>
      <dd className="mt-1 text-[0.88rem] font-medium leading-5 text-[var(--color-foreground)] md:text-[0.92rem]">
        {value}
      </dd>
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
          rel="noopener noreferrer"
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
  showRepoLink,
}: {
  project: Project;
  variant: ProjectContentVariant;
  showRepoLink: boolean;
}) {
  const featured = variant === "featured";
  const standard = variant === "standard";
  const titleClassName = featured
    ? "mt-3 text-[clamp(1.65rem,4vw,2.4rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-[#171717]"
    : standard
      ? "mt-3 text-[clamp(1.35rem,2vw,1.55rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#171717]"
      : "mt-3 text-[clamp(1.5rem,3vw,1.95rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-[#171717]";
  const actionsClassName = standard ? "mt-auto pt-4" : "mt-4";

  return (
    <div className={standard ? "mt-5 flex grow flex-col" : "min-w-0"}>
      <ProjectMeta project={project} />
      <h3 className={titleClassName}>{project.name}</h3>
      <dl className="mt-3.5 grid gap-1.5 md:gap-2">
        <ProjectSummaryRow
          label="Problema"
          value={project.homeProblem ?? project.problem}
        />
        <ProjectSummaryRow
          label="Solución"
          value={project.homeSolution ?? project.solution}
        />
        <ProjectSummaryRow
          label="Resultado"
          value={project.homeResult ?? project.businessGain}
        />
      </dl>
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
          "surface-card-strong box-border max-w-full min-w-0",
          hasHomeVisual ? "p-4 md:p-5 lg:p-5" : "p-4 md:p-7 lg:p-8",
        )}
      >
        <div
          className={cn(
            "grid min-w-0 lg:items-start",
            hasHomeVisual
              ? "gap-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center"
              : "gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]",
          )}
        >
          <ProjectPreview project={project} className="min-w-0" />
          <ProjectContent
            project={project}
            variant="featured"
            showRepoLink={showRepoLink}
          />
        </div>
      </article>
    );
  }

  if (horizontal) {
    return (
      <article
        className={cn(
          "surface-card-strong box-border max-w-full min-w-0",
          hasHomeVisual ? "p-4 md:p-5" : "p-4 md:p-7",
        )}
      >
        <div
          className={cn(
            "grid min-w-0",
            hasHomeVisual
              ? "gap-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center"
              : "gap-7 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start",
          )}
        >
          <ProjectPreview project={project} className="min-w-0" />
          <ProjectContent
            project={project}
            variant="horizontal"
            showRepoLink={showRepoLink}
          />
        </div>
      </article>
    );
  }

  return (
    <article className="surface-card-strong box-border flex h-full max-w-full min-w-0 flex-col p-4 md:p-6">
      <ProjectPreview project={project} className="min-w-0" />
      <ProjectContent
        project={project}
        variant="standard"
        showRepoLink={showRepoLink}
      />
    </article>
  );
}
