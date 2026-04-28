import Link from "next/link";

type ContactCTAProps = {
  title: string;
  description: string;
  whatsappHref: string;
  email: string;
  briefQuestions: readonly string[];
};

export default function ContactCTA({
  title,
  description,
  whatsappHref,
  email,
  briefQuestions,
}: ContactCTAProps) {
  return (
    <section
      id="contacto"
      className="section-anchor section-block section-shell"
    >
      <div className="surface-card-strong contact-card p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="section-eyebrow">Contacto</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,2.8rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--color-foreground)]">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-[var(--color-muted)]">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary" href={whatsappHref}>
                Contame tu problema por WhatsApp
              </Link>
              <a className="button-secondary" href={email}>
                Enviar email
              </a>
            </div>
          </div>

          <article className="rounded-[12px] bg-[var(--color-surface-soft)] p-5 shadow-[inset_0_0_0_1px_rgba(17,24,32,0.06)] md:p-6">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-accent-teal)]">
              Mini brief
            </p>
            <div className="mt-5 space-y-3">
              {briefQuestions.map((question, index) => (
                <div
                  key={question}
                  className="rounded-[8px] bg-[var(--color-surface)] px-4 py-4 shadow-[inset_0_0_0_1px_rgba(17,24,32,0.06)]"
                >
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                    Punto {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-[0.98rem] leading-7 text-[var(--color-foreground)]">{question}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
