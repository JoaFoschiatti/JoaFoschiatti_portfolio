import ContactForm from "@/components/ContactForm";
import type { ContactService } from "@/data/portfolio";

type ContactCTAProps = {
  title: string;
  description: string;
  whatsappHref: string;
  whatsappDisplayNumber: string;
  email: string;
  location: string;
  services: readonly ContactService[];
};

export default function ContactCTA({
  title,
  description,
  whatsappHref,
  whatsappDisplayNumber,
  email,
  location,
  services,
}: ContactCTAProps) {
  return (
    <section id="contacto" className="section-anchor contact-section">
      <div className="section-shell section-block contact-grid">
        <div className="contact-copy">
          <p className="contact-index">06 — Contacto</p>
          <h2>{title}</h2>
          <p className="contact-description">{description}</p>

          <div className="contact-direct">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <span>WhatsApp</span>
              <strong>{whatsappDisplayNumber}</strong>
              <i aria-hidden>↗</i>
            </a>
            <a href={`mailto:${email}`}>
              <span>Email</span>
              <strong>{email}</strong>
              <i aria-hidden>↗</i>
            </a>
            <div>
              <span>Base</span>
              <strong>{location.replaceAll(" / ", ", ")}</strong>
            </div>
          </div>
        </div>

        <ContactForm services={services} />
      </div>
    </section>
  );
}
