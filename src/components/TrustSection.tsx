import SectionHeading from "@/components/SectionHeading";
import type { TrustCard } from "@/data/portfolio";

type TrustSectionProps = {
  title: string;
  cards: TrustCard[];
};

export default function TrustSection({ title, cards }: TrustSectionProps) {
  return (
    <section className="section-band">
      <div className="section-block section-shell">
        <SectionHeading
          title={title}
          description="Pensado para que el dueño, el empleado o el profesional lo pueda usar sin complicarse."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="surface-card p-6 md:p-7">
              <p className="section-eyebrow">Confianza</p>
              <h3 className="mt-4 text-[1.4rem] font-semibold tracking-[-0.04em] text-[#171717]">
                {card.title}
              </h3>
              <p className="mt-4 text-[1rem] leading-8 text-[#4d4d4d]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
