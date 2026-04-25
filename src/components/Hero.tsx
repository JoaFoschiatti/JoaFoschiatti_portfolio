import Link from "next/link";
import MockupCard from "@/components/MockupCard";

type HeroProps = {
  title: string;
  subtitle: string;
  badges: readonly string[];
  microcopy: string;
  whatsappHref: string;
};

export default function Hero({
  title,
  subtitle,
  badges,
  microcopy,
  whatsappHref,
}: HeroProps) {
  return (
    <section className="section-shell section-block pt-10 md:pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div>
          <p className="section-eyebrow">Webs y herramientas internas para negocios reales</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(3rem,8vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[#171717]">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-[clamp(1.05rem,1.9vw,1.22rem)] leading-8 text-[#4d4d4d]">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" href={whatsappHref}>
              Hablar por WhatsApp
            </Link>
            <Link className="button-secondary" href="/#proyectos">
              Ver proyectos
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="pill">
                {badge}
              </span>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#666666]">
            {microcopy}
          </p>
        </div>

        <MockupCard variant="operations-overview" size="hero" />
      </div>
    </section>
  );
}
