import Link from "next/link";
import HeroTransformationPreview from "@/components/HeroTransformationPreview";

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
    <section className="hero-band">
      <div className="section-shell hero-section grid min-w-0 items-center gap-6 sm:gap-7 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-x-12 lg:gap-y-7">
        <div className="min-w-0 lg:col-start-1 lg:row-start-1">
          <p className="section-eyebrow">Webs y sistemas para negocios reales</p>
          <h1 className="mt-3 max-w-[22rem] text-[clamp(1.95rem,9vw,3.65rem)] font-semibold leading-[1.06] tracking-[-0.05em] text-[#f8fbfb] sm:mt-4 sm:max-w-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-[22rem] text-[clamp(0.98rem,3.2vw,1.2rem)] leading-7 text-[#c6d1da] sm:mt-5 sm:max-w-3xl md:leading-8">
            {subtitle}
          </p>
          <div className="mt-5 flex w-full max-w-[22rem] flex-col gap-3 sm:mt-6 sm:max-w-none sm:flex-row">
            <Link
              className="button-primary"
              href={whatsappHref}
              target="_blank"
              rel="noopener"
            >
              Contame tu problema por WhatsApp
            </Link>
            <a className="button-secondary" href="#proyectos">
              Ver casos reales
            </a>
          </div>
        </div>

        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <div className="flex w-full max-w-[22rem] flex-wrap gap-2 sm:max-w-none">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full bg-white/[0.08] px-3 py-1.5 font-mono text-[0.76rem] font-medium leading-none text-[#c8d8d6] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="mt-5 w-full max-w-[22rem] text-sm leading-7 text-[#aeb9c4] sm:max-w-2xl">
            {microcopy}
          </p>
        </div>

        <div className="hero-visual-frame mx-auto w-full min-w-0 max-w-[19.5rem] sm:mx-0 sm:max-w-none lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <HeroTransformationPreview />
        </div>
      </div>
    </section>
  );
}
