import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BriefBuilder from "@/components/BriefBuilder";
import FaqSection from "@/components/FaqSection";
import SectionHeading from "@/components/SectionHeading";
import StartOptionsSection from "@/components/StartOptionsSection";
import {
  briefBuilderOptions,
  profile,
  systemsFaqs,
  systemsStartOptions,
  systemsUseCases,
} from "@/data/portfolio";
import { createWhatsAppLink } from "@/lib/whatsapp";

const pageTitle = "Sistemas a medida para ordenar procesos de negocio";
const pageDescription =
  "Diseño y desarrollo sistemas a medida para ordenar stock, turnos, caja, pedidos, reportes, documentación, WhatsApp, pagos y automatizaciones.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${profile.siteUrl}/sistemas-a-medida`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${profile.siteUrl}/sistemas-a-medida`,
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
};

export default function CustomSystemsPage() {
  const whatsappHref =
    createWhatsAppLink(
      profile.whatsappNumber,
      "Hola Joaquín, vi tu portfolio y quiero ordenar un proceso de mi negocio con una web, sistema o automatización.",
    ) ?? "/#contacto";

  return (
    <>
      <section className="hero-band">
        <div className="section-shell hero-section grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="min-w-0">
            <p className="section-eyebrow">Sistemas a medida</p>
            <h1 className="mt-5 max-w-[20.5rem] text-[clamp(2.2rem,5vw,3.65rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-[#f8fbfb] sm:max-w-4xl">
              Ordená un proceso real en un sistema simple de usar.
            </h1>
            <p className="mt-6 max-w-3xl text-[clamp(1.05rem,1.9vw,1.22rem)] leading-8 text-[#c6d1da]">
              Si hoy dependés de planillas, mensajes sueltos, tareas manuales o sistemas que no acompañan la operación, podemos convertir ese flujo en una herramienta propia.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="button-primary"
                href={whatsappHref}
                target="_blank"
                rel="noopener"
              >
                Contame tu proceso por WhatsApp
              </Link>
              <Link className="button-secondary" href="/#proyectos">
                Ver casos reales
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Stock", "Turnos", "Caja", "Pedidos", "Reportes", "WhatsApp", "Pagos"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex cursor-default select-none items-center rounded-full bg-white/[0.08] px-3 py-1.5 font-mono text-[0.76rem] font-medium leading-none text-[#c8d8d6] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="hero-visual-frame custom-systems-hero-visual w-full min-w-0 sm:mx-auto sm:max-w-[30rem] lg:mx-0 lg:max-w-none">
            <Image
              src="/sistemas-a-medida-visual-v2.png"
              alt="Proceso operativo disperso que se transforma en un sistema a medida claro y conectado"
              width={1448}
              height={1086}
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="section-band section-band-cool hero-adjacent-band hero-adjacent-content-band">
        <div className="section-block section-shell">
          <SectionHeading
            eyebrow="Qué puede resolver"
            title="Un sistema a medida tiene sentido cuando el proceso ya importa."
            description="La idea no es informatizar todo: es encontrar qué parte del negocio genera fricción y convertirla en una herramienta que el equipo pueda usar todos los días."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {systemsUseCases.map((useCase) => (
              <article key={useCase.title} className="surface-card p-5">
                <h3 className="text-[1.16rem] font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">
                  {useCase.title}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-7 text-[var(--color-muted)]">
                  {useCase.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StartOptionsSection
        id="formas-de-empezar"
        title="Podemos empezar chico o ir directo a ordenar un proceso completo."
        description="No hace falta cerrar todo de entrada. Primero se entiende el problema, después se define qué versión aporta valor real y qué queda para una etapa siguiente."
        options={systemsStartOptions}
        ctaHref={whatsappHref}
        ctaLabel="Consultar por WhatsApp"
      />

      <section id="brief" className="section-anchor section-band section-band-muted">
        <div className="section-block section-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Brief interactivo</p>
              <h2 className="section-title mt-4">
                Convertí una idea suelta en una consulta concreta.
              </h2>
              <p className="section-copy mt-5">
                El primer mensaje no tiene que ser perfecto. Con cuatro datos alcanza para entender si conviene una web, un sistema interno, una automatización o una primera versión usable.
              </p>
            </div>
            <BriefBuilder
              options={briefBuilderOptions}
              whatsappNumber={profile.whatsappNumber}
            />
          </div>
        </div>
      </section>

      <FaqSection
        title="Dudas normales antes de empezar."
        description="Estas respuestas ayudan a ubicar el alcance sin convertir la consulta inicial en una reunión larga."
        faqs={systemsFaqs}
      />

      <section className="section-shell pb-20 md:pb-24">
        <div className="surface-card-strong contact-card p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Siguiente paso</p>
              <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.35rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-[var(--color-foreground)]">
                Si hay un proceso que ya te está costando tiempo, empecemos por ahí.
              </h2>
            </div>
            <a
              className="button-primary shrink-0"
              href={whatsappHref}
              target="_blank"
              rel="noopener"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
