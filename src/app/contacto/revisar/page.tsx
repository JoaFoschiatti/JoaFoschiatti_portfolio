import type { Metadata } from "next";
import Link from "next/link";
import { contactLinks } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Revisá tu consulta",
  description: "Pantalla de revisión del formulario de contacto.",
  robots: { index: false, follow: false },
};

export default function ContactReviewPage() {
  return (
    <section className="not-found-page">
      <div className="hero-grid-lines" aria-hidden />
      <div className="section-shell not-found-inner">
        <p>Contacto — Revisión</p>
        <h1>No pude preparar tu consulta.</h1>
        <span>
          El servidor no pudo validar los campos o preparar el canal de salida.
          Tus datos no se guardaron. Podés volver al formulario y revisarlos, o
          escribir directamente por email.
        </span>
        <div>
          <Link className="button-accent" href="/#contacto">
            Revisar los datos <i aria-hidden>↗</i>
          </Link>
          <a
            className="text-link text-link-light"
            href={`mailto:${contactLinks.email}`}
          >
            Escribir por email <i aria-hidden>↗</i>
          </a>
        </div>
      </div>
    </section>
  );
}
