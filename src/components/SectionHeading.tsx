import type { CSSProperties } from "react";

type SectionHeadingProps = {
  title: string;
  description: string;
  eyebrow?: string;
  /** CSS color for the eyebrow, e.g. "var(--color-accent-coral)". */
  accent?: string;
};

export default function SectionHeading({
  title,
  description,
  eyebrow,
  accent,
}: SectionHeadingProps) {
  return (
    <div
      className="max-w-3xl"
      style={
        accent ? ({ "--eyebrow-color": accent } as CSSProperties) : undefined
      }
    >
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className={eyebrow ? "section-title mt-4" : "section-title"}>
        {title}
      </h2>
      <p className="section-copy mt-5">{description}</p>
    </div>
  );
}
