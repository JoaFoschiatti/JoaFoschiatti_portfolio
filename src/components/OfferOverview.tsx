import Reveal from "@/components/Reveal";
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
            <p className="section-eyebrow">Qué hago</p>
            <h2 className="section-title mt-4">
              Cuatro cosas concretas que podés pedirme.
            </h2>
            <p className="section-copy mt-4">
              Si no sabés cuál te sirve, no importa. Contame el problema y lo vemos.
            </p>
            <div className="mt-6">
              <a className="button-secondary" href="#proceso">
                Ver cómo trabajo
              </a>
            </div>
          </div>

          <div className="grid gap-2 min-[360px]:grid-cols-2 sm:gap-3">
            {offers.map((offer, index) => (
              <Reveal key={offer.title} delay={index * 60} className="h-full">
                <article className="offer-card h-full">
                  <span className="status-dot text-[var(--color-accent-teal)]" aria-hidden />
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
