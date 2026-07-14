import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { OfferCard } from "@/data/portfolio";

type OfferOverviewProps = {
  offers: readonly OfferCard[];
};

export default function OfferOverview({ offers }: OfferOverviewProps) {
  return (
    <section id="que-hago" className="section-anchor services-section">
      <div className="section-shell section-block">
        <SectionHeading
          index="02"
          eyebrow="Servicios"
          title="Tecnología con criterio de negocio."
          description="No parto de una herramienta predeterminada. Primero entiendo el proceso y después defino la solución más simple que pueda sostenerse y crecer."
          light
        />

        <div className="services-grid">
          {offers.map((offer, index) => (
            <Reveal key={offer.title} delay={index * 70} className="h-full">
              <article className="service-card">
                <div className="service-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <span className="service-card-line" aria-hidden />
              </article>
            </Reveal>
          ))}
        </div>

        <div className="services-footer">
          <p>
            ¿El problema no entra en una categoría? Lo definimos a partir de tu
            operación actual.
          </p>
          <Link className="text-link text-link-light" href="/sistemas-a-medida">
            Ver sistemas a medida <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
