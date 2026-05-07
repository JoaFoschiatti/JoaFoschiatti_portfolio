import SectionHeading from "@/components/SectionHeading";
import type { ProcessStep } from "@/data/portfolio";
import type { CSSProperties } from "react";

type ProcessProps = {
  steps: ProcessStep[];
};

export default function Process({ steps }: ProcessProps) {
  return (
    <section
      id="proceso"
      className="section-anchor"
    >
      <div className="section-block section-shell">
        <SectionHeading
          title="Un proceso simple para llegar a producción."
          description="Diseño, desarrollo y puesta en producción, con foco en una primera versión usable y una operación mantenible."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.label}
              className="surface-card process-card p-6 md:p-7"
              style={{ "--process-color": step.color } as CSSProperties}
            >
              <div
                className="h-1.5 w-16 rounded-full"
                style={{ backgroundColor: step.color }}
                aria-hidden
              />
              <p
                className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.16em]"
                style={{ color: step.labelColor ?? step.color }}
              >
                {step.label}
              </p>
              <h3 className="mt-4 text-[1.4rem] font-semibold tracking-[-0.04em] text-[#171717]">
                {step.title}
              </h3>
              <p className="mt-4 text-[1rem] leading-8 text-[#4d4d4d]">{step.description}</p>
              <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                Paso {String(index + 1).padStart(2, "0")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
