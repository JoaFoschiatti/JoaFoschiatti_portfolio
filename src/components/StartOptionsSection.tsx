import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
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
      className={`section-anchor start-options ${compact ? "start-options-compact" : ""}`}
    >
      <div className="section-shell section-block">
        <SectionHeading
          index="02"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="start-options-list">
          {options.map((option, index) => (
            <article key={option.title}>
              <div className="start-option-index">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="start-option-copy">
                <p>{option.label}</p>
                <h3>{option.title}</h3>
                <span>{option.description}</span>
              </div>
              <ul>
                {option.items.map((item) => (
                  <li key={item}>
                    <span aria-hidden>↳</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {ctaHref && ctaLabel ? (
          <div className="start-options-cta">
            <Link className="button-ink" href={ctaHref}>
              {ctaLabel} <span aria-hidden>↗</span>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
