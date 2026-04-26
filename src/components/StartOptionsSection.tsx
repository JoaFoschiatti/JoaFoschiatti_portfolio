import Link from "next/link";
import type { StartOption } from "@/data/portfolio";

type StartOptionsSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  options: readonly StartOption[];
  ctaHref?: string;
  ctaLabel?: string;
  compact?: boolean;
  id?: string;
};

export default function StartOptionsSection({
  eyebrow = "Formas de empezar",
  title,
  description,
  options,
  ctaHref,
  ctaLabel,
  compact = false,
  id,
}: StartOptionsSectionProps) {
  return (
    <section
      id={id}
      className={compact ? "section-shell py-14 md:py-16" : "section-block section-shell"}
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
        <div className="max-w-2xl">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="section-copy mt-5">{description}</p>
          {ctaHref && ctaLabel ? (
            <div className="mt-7">
              <Link className="button-secondary" href={ctaHref}>
                {ctaLabel}
              </Link>
            </div>
          ) : null}
        </div>

        <div className="grid gap-4">
          {options.map((option) => (
            <article key={option.title} className="surface-card p-5 md:p-6">
              <p className="section-eyebrow">{option.label}</p>
              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-[-0.04em] text-[#171717]">
                {option.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-[#4d4d4d]">
                {option.description}
              </p>
              <ul className="mt-5 grid gap-3 text-[0.92rem] leading-6 text-[#4d4d4d] sm:grid-cols-3">
                {option.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="status-dot mt-2 shrink-0 text-[#171717]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
