import Link from "next/link";
import HeroTransformationPreview from "@/components/HeroTransformationPreview";

type HeroProps = {
  title: string;
  subtitle: string;
  badges: readonly string[];
  microcopy: string;
  proof: string;
  whatsappHref: string;
};

export default function Hero({
  title,
  subtitle,
  badges,
  microcopy,
  proof,
  whatsappHref,
}: HeroProps) {
  return (
    <section className="section-shell hero-section">
      <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1.24fr)_minmax(0,0.76fr)]">
        <div className="min-w-0">
          <p className="section-eyebrow">Webs y sistemas para negocios reales</p>
          <h1 className="mt-5 max-w-[20.5rem] text-[clamp(2.45rem,5vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-[#171717] sm:max-w-4xl">
            {title}
          </h1>
          <p className="mt-6 max-w-[20.5rem] text-[clamp(1.05rem,1.9vw,1.22rem)] leading-8 text-[#4d4d4d] sm:max-w-3xl">
            {subtitle}
          </p>
          <p className="mx-auto mt-5 block w-full max-w-[20.5rem] rounded-[8px] bg-[#fafafa] px-4 py-3 text-sm leading-6 text-[#171717] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] sm:mx-0 sm:max-w-2xl">
            {proof}
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-[20.5rem] flex-col gap-3 sm:mx-0 sm:max-w-none sm:flex-row">
            <Link className="button-primary" href={whatsappHref}>
              Hablar por WhatsApp
            </Link>
            <Link className="button-secondary" href="/#proyectos">
              Ver proyectos
            </Link>
          </div>
          <div className="mx-auto mt-8 flex w-full max-w-[20.5rem] flex-wrap gap-2 sm:mx-0 sm:max-w-none">
            {badges.map((badge) => (
              <span key={badge} className="pill">
                {badge}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-7 w-full max-w-[20.5rem] text-sm leading-7 text-[#666666] sm:mx-0 sm:max-w-2xl">
            {microcopy}
          </p>
        </div>

        <div className="mx-auto w-full min-w-0 max-w-[20.5rem] sm:mx-0 sm:max-w-none">
          <HeroTransformationPreview />
        </div>
      </div>
    </section>
  );
}
