import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

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
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="section-eyebrow">Contacto</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,2.8rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--color-foreground)]">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-[1rem] leading-7 text-[var(--color-muted)]">
              {description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton href={whatsappHref}>
                Contame tu problema por WhatsApp
              </WhatsAppButton>
              <a className="button-secondary" href={email}>
                Enviar email
              </a>
            </div>
          </div>

          <article className="rounded-[12px] bg-[var(--color-surface-soft)] p-3.5 shadow-[inset_0_0_0_1px_rgba(17,24,32,0.06)] md:p-5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-mono text-[0.78rem] uppercase tracking-[0.16em] text-[var(--color-accent-teal)]">
                Mini brief
              </p>
              <Link
                href="/sistemas-a-medida#brief"
                className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-subtle)] hover:text-[var(--color-foreground)]"
              >
                Armar brief →
              </Link>
            </div>
            <div className="mt-3 space-y-1.5">
              {briefQuestions.map((question, index) => (
                <Link
                  key={question}
                  href="/sistemas-a-medida#brief"
                  className="group flex items-center gap-3 rounded-[8px] bg-[var(--color-surface)] px-3 py-2.5 shadow-[inset_0_0_0_1px_rgba(17,24,32,0.06)] transition-all hover:bg-[var(--color-surface)] hover:shadow-[inset_0_0_0_1px_rgba(15,118,110,0.28),0_8px_18px_-14px_rgba(15,118,110,0.4)]"
                >
                  <span className="shrink-0 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1 text-[0.94rem] leading-5 text-[var(--color-foreground)]">
                    {question}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 font-mono text-[0.85rem] text-[var(--color-subtle)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-accent-teal)]"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
