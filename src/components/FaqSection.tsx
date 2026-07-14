import SectionHeading from "@/components/SectionHeading";
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
      className={`section-anchor faq-section ${compact ? "faq-section-compact" : ""}`}
    >
      <div className="section-shell section-block">
        <SectionHeading
          index="05"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="faq-row" name="portfolio-faq">
              <summary>
                <span className="faq-index">{String(index + 1).padStart(2, "0")}</span>
                <span>{faq.question}</span>
                <i aria-hidden>+</i>
              </summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
