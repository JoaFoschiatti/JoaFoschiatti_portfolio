import type { OfferCard } from "@/data/portfolio";

type OfferOverviewProps = {
  offers: readonly OfferCard[];
};

export default function OfferOverview({ offers }: OfferOverviewProps) {
  return (
    <section id="que-hago" className="section-anchor section-block section-shell">
      <div className="offer-overview-panel">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Qué podés pedirme</p>
            <h2 className="section-title mt-4">
              Webs, sistemas y automatizaciones para ordenar la operación.
            </h2>
            <p className="section-copy mt-4">
              Traé una idea, una planilla o un proceso desordenado. Lo convertimos en algo simple de usar.
            </p>
            <div className="mt-6">
              <a className="button-secondary" href="#proyectos">
                Ver ejemplos reales
              </a>
            </div>
          </div>

          <div className="grid gap-2 min-[360px]:grid-cols-2 sm:gap-3">
            {offers.map((offer) => (
              <article key={offer.title} className="offer-card">
                <span className="status-dot text-[var(--color-accent-teal)]" aria-hidden />
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
