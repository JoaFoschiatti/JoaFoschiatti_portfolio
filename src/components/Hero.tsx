import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

type HeroProps = {
  title: string;
  subtitle: string;
  badges: readonly string[];
  whatsappHref: string;
};

export default function Hero({
  title,
  subtitle,
  badges,
  whatsappHref,
}: HeroProps) {
  return (
    <section className="home-hero">
      <div className="hero-grid-lines" aria-hidden />
      <div className="section-shell home-hero-grid">
        <div className="home-hero-copy">
          <p className="hero-kicker">
            <span aria-hidden />
            Joaquín Sánchez Foschiatti · Rosario, Argentina
          </p>
          <h1>{title}</h1>
          <p className="home-hero-lede">{subtitle}</p>

          <div className="hero-actions">
            <Link className="button-accent" href="#proyectos">
              Explorar proyectos <span aria-hidden>↓</span>
            </Link>
            <WhatsAppButton className="button-whatsapp-quiet" href={whatsappHref}>
              Conversar por WhatsApp
            </WhatsAppButton>
          </div>

          <div className="hero-capabilities" aria-label="Áreas de trabajo">
            {badges.map((badge, index) => (
              <span key={badge}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-portrait-column">
          <div className="portrait-orbit portrait-orbit-one" aria-hidden />
          <div className="portrait-orbit portrait-orbit-two" aria-hidden />
          <figure className="hero-portrait">
            <div className="portrait-image-wrap">
              <Image
                src="/projects/quien-esta-detras.png"
                alt="Retrato de Joaquín Sánchez Foschiatti"
                width={1254}
                height={1254}
                priority
                sizes="(min-width: 1024px) 430px, (min-width: 640px) 55vw, 86vw"
              />
            </div>
            <figcaption>
              <span>Ingeniero en Sistemas</span>
              <span>Diseño + Desarrollo</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
