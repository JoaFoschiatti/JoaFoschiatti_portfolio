"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { ContactService } from "@/data/portfolio";

type FieldName = "name" | "contact" | "business" | "service" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

type ContactResponse =
  | {
      ok: true;
      whatsappUrl: string;
      emailUrl: string;
    }
  | {
      ok: false;
      message: string;
      fieldErrors?: FieldErrors;
    };

type ContactFormProps = {
  services: readonly ContactService[];
};

export default function ContactForm({ services }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const id = useId();
  const [pending, setPending] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<{
    whatsappUrl: string;
    emailUrl: string;
  } | null>(null);

  const fieldId = (name: FieldName) => `${id}-${name}`;
  const errorId = (name: FieldName) => `${id}-${name}-error`;

  useEffect(() => {
    if (Object.keys(fieldErrors).length === 0) return;

    formRef.current
      ?.querySelector<HTMLElement>('[aria-invalid="true"]')
      ?.focus();
  }, [fieldErrors]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setFieldErrors({});
    setMessage("");
    setResult(null);

    const data = new FormData(event.currentTarget);
    const payload = {
      name: data.get("name"),
      contact: data.get("contact"),
      business: data.get("business"),
      service: data.get("service"),
      message: data.get("message"),
      website: data.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as ContactResponse;

      if (!response.ok || !body.ok) {
        const errorBody = body as Extract<ContactResponse, { ok: false }>;
        setFieldErrors(errorBody.fieldErrors ?? {});
        setMessage(errorBody.message || "No pude preparar la consulta.");
        return;
      }

      setResult({
        whatsappUrl: body.whatsappUrl,
        emailUrl: body.emailUrl,
      });
      setMessage("La consulta está validada y lista para continuar.");
    } catch {
      setMessage(
        "No pude conectar con el servidor. Podés usar los canales directos de contacto.",
      );
    } finally {
      setPending(false);
    }
  };

  const inputProps = (name: FieldName) => ({
    id: fieldId(name),
    name,
    "aria-invalid": fieldErrors[name] ? true : undefined,
    "aria-describedby": fieldErrors[name] ? errorId(name) : undefined,
  });

  return (
    <form
      ref={formRef}
      className="contact-form"
      action="/api/contact"
      method="post"
      acceptCharset="UTF-8"
      onSubmit={handleSubmit}
    >
      <div className="contact-form-heading">
        <span>Brief inicial</span>
        <p>Cuatro datos alcanzan para empezar con una conversación concreta.</p>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor={fieldId("name")}>Nombre</label>
          <input
            {...inputProps("name")}
            type="text"
            autoComplete="name"
            minLength={2}
            maxLength={80}
            placeholder="¿Cómo te llamás?"
            required
          />
          {fieldErrors.name ? (
            <p id={errorId("name")} className="field-error">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor={fieldId("contact")}>Email o WhatsApp</label>
          <input
            {...inputProps("contact")}
            type="text"
            autoComplete="email"
            maxLength={120}
            placeholder="Tu forma de contacto"
            required
          />
          {fieldErrors.contact ? (
            <p id={errorId("contact")} className="field-error">
              {fieldErrors.contact}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor={fieldId("business")}>Negocio o actividad</label>
          <input
            {...inputProps("business")}
            type="text"
            autoComplete="organization"
            maxLength={100}
            placeholder="Ej. óptica, estudio, restaurante"
          />
          {fieldErrors.business ? (
            <p id={errorId("business")} className="field-error">
              {fieldErrors.business}
            </p>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor={fieldId("service")}>Tipo de proyecto</label>
          <select {...inputProps("service")} defaultValue="" required>
            <option value="" disabled>
              Seleccioná una opción
            </option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          {fieldErrors.service ? (
            <p id={errorId("service")} className="field-error">
              {fieldErrors.service}
            </p>
          ) : null}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor={fieldId("message")}>¿Qué necesitás ordenar o mejorar?</label>
        <textarea
          {...inputProps("message")}
          rows={5}
          minLength={20}
          maxLength={1000}
          placeholder="Contame cómo lo resolvés hoy y dónde aparece la fricción."
          required
        />
        {fieldErrors.message ? (
          <p id={errorId("message")} className="field-error">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <div className="contact-honeypot" aria-hidden="true" hidden>
        <label htmlFor={`${id}-website`}>Sitio web</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-submit-row">
        <button className="button-accent" type="submit" disabled={pending}>
          {pending ? "Validando…" : "Preparar consulta"}
          <span aria-hidden>↗</span>
        </button>
        <p>Tus datos no se almacenan: el servidor solo valida y prepara el mensaje.</p>
      </div>

      <div className="form-status" aria-live="polite">
        {message ? <p>{message}</p> : null}
        {result ? (
          <div className="form-result-actions">
            <a href={result.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Continuar a WhatsApp <span aria-hidden>↗</span>
            </a>
            <a href={result.emailUrl}>Usar email</a>
          </div>
        ) : null}
      </div>
    </form>
  );
}
