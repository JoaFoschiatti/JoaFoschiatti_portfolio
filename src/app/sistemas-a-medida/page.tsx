import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import FaqSection from "@/components/FaqSection";
import SectionHeading from "@/components/SectionHeading";
import StartOptionsSection from "@/components/StartOptionsSection";
import StatusPill from "@/components/StatusPill";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  contactLinks,
  contactServices,
  getProjectBySlug,
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
  alternates: { canonical: `${profile.siteUrl}/sistemas-a-medida` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${profile.siteUrl}/sistemas-a-medida`,
  },
  twitter: { title: pageTitle, description: pageDescription },
};

export default function CustomSystemsPage() {
  const whatsappHref =
    createWhatsAppLink(
      profile.whatsappNumber,
      "Hola Joaquín, vi tu portfolio y quiero ordenar un proceso de mi negocio con una web, sistema o automatización.",
    ) ?? "/#contacto";
  const proofProject = getProjectBySlug("optica-focus");

  return (
    <>
      <section className="systems-hero">
        <div className="hero-grid-lines" aria-hidden />
        <div className="section-shell systems-hero-grid">
          <div className="systems-hero-copy">
            <p className="hero-kicker">
              <span aria-hidden />
              Sistemas a medida
            </p>
            <h1>Una herramienta propia para una forma de trabajar propia.</h1>
            <p>
              Cuando las planillas, los mensajes y las tareas manuales empiezan
              a frenar la operación, diseño un sistema que ordena el flujo sin
              agregar complejidad innecesaria.
            </p>
            <div className="hero-actions">
              <Link className="button-accent" href="#contacto">
                Contar mi proceso <span aria-hidden>↓</span>
              </Link>
              <WhatsAppButton className="button-whatsapp-quiet" href={whatsappHref}>
                Consultar por WhatsApp
              </WhatsAppButton>
            </div>
            <div className="systems-tags">
              {[
                "Stock",
                "Turnos",
                "Caja",
                "Pedidos",
                "Reportes",
                "WhatsApp",
                "Pagos",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="systems-hero-visual">
            <div className="project-browser-bar" aria-hidden>
              <span><i /><i /><i /></span>
              <small>proceso → sistema</small>
            </div>
            <Image
              src="/sistemas-a-medida-visual-v2.png"
              alt="Proceso operativo disperso que se transforma en un sistema a medida claro y conectado"
              width={1448}
              height={1086}
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="systems-usecases">
        <div className="section-shell section-block">
          <SectionHeading
            index="01"
            eyebrow="Dónde aporta valor"
            title="El punto no es digitalizar todo. Es resolver la fricción correcta."
            description="Un sistema a medida tiene sentido cuando el proceso ya es importante, se repite y necesita una forma más clara de funcionar."
          />
          <div className="systems-usecase-list">
            {systemsUseCases.map((useCase, index) => (
              <article key={useCase.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StartOptionsSection
        id="formas-de-empezar"
        title="La escala se define después de entender el proceso."
        description="Podemos validar una primera versión, construir un sistema completo o mejorar lo que ya existe. El alcance responde a la necesidad real."
        options={systemsStartOptions}
        ctaHref="#contacto"
        ctaLabel="Preparar una consulta"
      />

      {proofProject?.homeVisual ? (
        <section className="systems-proof-section">
          <div className="section-shell systems-proof-grid">
            <div className="systems-proof-copy">
              <p className="section-eyebrow">Prueba de uso real</p>
              <StatusPill status={proofProject.status} />
              <h2>Óptica Focus ordena el trabajo diario de un comercio real.</h2>
              <p>{proofProject.description}</p>
              <Link className="text-link text-link-light" href={`/proyectos/${proofProject.slug}`}>
                Ver el caso completo <span aria-hidden>↗</span>
              </Link>
            </div>
            <div className="systems-proof-visual">
              <Image
                src={proofProject.homeVisual.src}
                alt={proofProject.homeVisual.alt}
                width={proofProject.homeVisual.width}
                height={proofProject.homeVisual.height}
                sizes="(min-width: 1024px) 52vw, 100vw"
              />
            </div>
          </div>
        </section>
      ) : null}

      <FaqSection
        title="Preguntas antes de construir."
        description="Algunas definiciones útiles para ubicar el alcance sin convertir la primera conversación en una reunión interminable."
        faqs={systemsFaqs}
      />

      <ContactCTA
        title="Contame cómo funciona hoy. El sistema se define después."
        description="Con una descripción corta del proceso, las personas que lo usan y el problema principal alcanza para empezar."
        whatsappHref={whatsappHref}
        whatsappDisplayNumber={profile.whatsappDisplayNumber}
        email={contactLinks.email}
        location={profile.location}
        services={contactServices}
      />
    </>
  );
}
