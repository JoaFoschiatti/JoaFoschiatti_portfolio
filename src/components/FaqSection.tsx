import type { FaqItem } from "@/data/portfolio";

type FaqSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  faqs: readonly FaqItem[];
  id?: string;
  compact?: boolean;
};

export default function FaqSection({
  eyebrow = "Preguntas frecuentes",
  title,
  description,
  faqs,
  id,
  compact = false,
}: FaqSectionProps) {
  return (
    <section
      id={id}
      className={
        compact
          ? "section-anchor section-shell py-14 md:py-16"
          : "section-anchor section-block section-shell"
      }
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
        <div className="max-w-2xl">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="section-copy mt-5">{description}</p>
        </div>

        <div className="grid gap-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item group">
              <summary className="faq-summary">
                <span>{faq.question}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180"
                  aria-hidden
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
