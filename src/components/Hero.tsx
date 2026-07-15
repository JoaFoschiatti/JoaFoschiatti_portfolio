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

        <div className="hero-visual-column">
          <div className="hero-visual-orbit hero-visual-orbit-one" aria-hidden />
          <div className="hero-visual-orbit hero-visual-orbit-two" aria-hidden />
          <figure className="hero-visual-card">
            <div className="hero-visual-image-wrap">
              <Image
                src="/hero-operacion-clara-sketch-v3.png"
                alt="Boceto a lápiz de procesos dispersos que convergen en una operación ordenada"
                width={1024}
                height={1536}
                preload
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 82vw, 86vw"
              />
            </div>
            <figcaption>
              <span>Procesos dispersos</span>
              <span>Operación clara</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
