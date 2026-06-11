import Link from "next/link";
import HeroTransformationPreview from "@/components/HeroTransformationPreview";

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
    <section className="hero-band">
      <div className="section-shell hero-section grid min-w-0 items-center gap-2.5 sm:gap-7 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-x-12 lg:gap-y-7">
        <div className="min-w-0 lg:col-start-1 lg:row-start-1">
          <h1 className="max-w-[23rem] text-[clamp(1.78rem,8.15vw,3.55rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-[#f8fbfb] sm:max-w-4xl sm:leading-[1.04]">
            {title}
          </h1>
          <p className="mt-2.5 max-w-[22rem] text-[clamp(0.92rem,3vw,1.15rem)] leading-6 text-[#c6d1da] sm:mt-5 sm:max-w-3xl md:leading-8">
            {subtitle}
          </p>
          <div className="mt-3.5 flex w-full max-w-[22rem] flex-col gap-2 sm:mt-6 sm:max-w-none sm:flex-row">
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

        <div className="hero-visual-frame home-hero-visual mx-auto w-full min-w-0 max-w-[13.25rem] sm:max-w-[21rem] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mx-0 lg:max-w-none">
          <HeroTransformationPreview />
        </div>

        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <p className="sr-only">Áreas que puedo ordenar</p>
          <div className="flex w-full max-w-[22rem] flex-wrap gap-1.5 sm:max-w-none">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex cursor-default select-none items-center rounded-full bg-white/[0.08] px-2.5 py-1.5 font-mono text-[0.72rem] font-medium leading-none text-[#c8d8d6] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] sm:px-3 sm:text-[0.76rem]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
