import type { Service } from "@/data/portfolio";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="surface-card p-6 md:p-7">
      <div className="mb-5 h-1 w-12 rounded-full bg-[var(--color-accent-blue)]" aria-hidden />
      <p className="section-eyebrow">Servicio</p>
      <h3 className="mt-4 text-[1.42rem] font-semibold tracking-[-0.04em] text-[var(--color-foreground)]">
        {service.title}
      </h3>
      <p className="mt-4 text-[1rem] leading-8 text-[var(--color-muted)]">
        {service.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span key={tag} className="pill">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
