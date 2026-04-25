import type { Service } from "@/data/portfolio";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="surface-card p-6 md:p-7">
      <p className="section-eyebrow">Servicio</p>
      <h3 className="mt-4 text-[1.42rem] font-semibold tracking-[-0.04em] text-[#171717]">
        {service.title}
      </h3>
      <p className="mt-4 text-[1rem] leading-8 text-[#4d4d4d]">
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
