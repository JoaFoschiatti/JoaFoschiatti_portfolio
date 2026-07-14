import {
  contactLinks,
  contactServices,
  profile,
} from "@/data/portfolio";
import { createWhatsAppLink } from "@/lib/whatsapp";

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 80;
const CONTACT_MIN_LENGTH = 5;
const CONTACT_MAX_LENGTH = 120;
const BUSINESS_MAX_LENGTH = 100;
const MESSAGE_MIN_LENGTH = 20;
const MESSAGE_MAX_LENGTH = 1_000;

const CONTROL_CHARACTERS =
  /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g;
const INVISIBLE_FORMAT_CHARACTERS =
  /[\u200B-\u200D\u202A-\u202E\u2060\u2066-\u2069\uFEFF]/g;
const UNPAIRED_SURROGATES =
  /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/u;
const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/u;
const PHONE_PATTERN = /^\+?[\d\s().-]+$/u;

const serviceLabels: ReadonlyMap<string, string> = new Map(
  contactServices.map((service) => [service.value, service.label]),
);

export type ContactField =
  | "name"
  | "contact"
  | "business"
  | "service"
  | "message"
  | "website";

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export type ValidatedContact = {
  name: string;
  contact: string;
  business: string;
  service: (typeof contactServices)[number]["value"];
  message: string;
};

export type ContactValidationResult =
  | {
      success: true;
      data: ValidatedContact;
    }
  | {
      success: false;
      kind: "invalid-payload" | "invalid-fields" | "honeypot";
      message: string;
      fieldErrors?: ContactFieldErrors;
    };

export type ContactDestinations = {
  whatsappUrl: string;
  emailUrl: string;
};

type StringReadResult =
  | { success: true; value: string }
  | { success: false; error: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function containsInvalidUnicode(value: string) {
  return UNPAIRED_SURROGATES.test(value);
}

function removeUnsafeFormatting(value: string) {
  return value
    .normalize("NFC")
    .replace(CONTROL_CHARACTERS, "")
    .replace(INVISIBLE_FORMAT_CHARACTERS, "");
}

function normalizeSingleLine(value: string) {
  return removeUnsafeFormatting(value)
    .replace(/[\r\n\t]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function normalizeMessage(value: string) {
  return removeUnsafeFormatting(value)
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.replace(/[\t ]+/g, " ").trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function readString(
  payload: Record<string, unknown>,
  field: ContactField,
  optional = false,
): StringReadResult {
  const value = payload[field];

  if (optional && (value === undefined || value === null || value === "")) {
    return { success: true, value: "" };
  }

  if (typeof value !== "string") {
    return { success: false, error: "Ingresá un valor válido." };
  }

  if (containsInvalidUnicode(value)) {
    return {
      success: false,
      error: "El texto contiene caracteres no válidos.",
    };
  }

  return { success: true, value };
}

function isValidContactMethod(value: string) {
  if (value.includes("@")) {
    return EMAIL_PATTERN.test(value);
  }

  if (!PHONE_PATTERN.test(value)) {
    return false;
  }

  const digitCount = value.replace(/\D/g, "").length;
  return digitCount >= 8 && digitCount <= 15;
}

export function validateContactPayload(payload: unknown): ContactValidationResult {
  if (!isRecord(payload)) {
    return {
      success: false,
      kind: "invalid-payload",
      message: "El cuerpo de la solicitud debe ser un objeto JSON.",
    };
  }

  const rawWebsite = readString(payload, "website", true);
  if (!rawWebsite.success) {
    return {
      success: false,
      kind: "honeypot",
      message: "No se pudo procesar la consulta.",
    };
  }

  if (normalizeSingleLine(rawWebsite.value)) {
    return {
      success: false,
      kind: "honeypot",
      message: "No se pudo procesar la consulta.",
    };
  }

  const fieldErrors: ContactFieldErrors = {};
  const rawName = readString(payload, "name");
  const rawContact = readString(payload, "contact");
  const rawBusiness = readString(payload, "business", true);
  const rawService = readString(payload, "service");
  const rawMessage = readString(payload, "message");

  if (!rawName.success) fieldErrors.name = rawName.error;
  if (!rawContact.success) fieldErrors.contact = rawContact.error;
  if (!rawBusiness.success) fieldErrors.business = rawBusiness.error;
  if (!rawService.success) fieldErrors.service = rawService.error;
  if (!rawMessage.success) fieldErrors.message = rawMessage.error;

  if (
    !rawName.success ||
    !rawContact.success ||
    !rawBusiness.success ||
    !rawService.success ||
    !rawMessage.success
  ) {
    return {
      success: false,
      kind: "invalid-fields",
      message: "Revisá los campos indicados.",
      fieldErrors,
    };
  }

  const name = normalizeSingleLine(rawName.value);
  const contact = normalizeSingleLine(rawContact.value);
  const business = normalizeSingleLine(rawBusiness.value);
  const service = normalizeSingleLine(rawService.value);
  const message = normalizeMessage(rawMessage.value);

  if (name.length < NAME_MIN_LENGTH) {
    fieldErrors.name = "Ingresá tu nombre.";
  } else if (name.length > NAME_MAX_LENGTH) {
    fieldErrors.name = `El nombre puede tener hasta ${NAME_MAX_LENGTH} caracteres.`;
  }

  if (contact.length < CONTACT_MIN_LENGTH) {
    fieldErrors.contact = "Ingresá un email o número de WhatsApp.";
  } else if (contact.length > CONTACT_MAX_LENGTH) {
    fieldErrors.contact = `El contacto puede tener hasta ${CONTACT_MAX_LENGTH} caracteres.`;
  } else if (!isValidContactMethod(contact)) {
    fieldErrors.contact = "Ingresá un email o número de WhatsApp válido.";
  }

  if (business.length > BUSINESS_MAX_LENGTH) {
    fieldErrors.business = `El nombre del negocio puede tener hasta ${BUSINESS_MAX_LENGTH} caracteres.`;
  }

  if (!serviceLabels.has(service)) {
    fieldErrors.service = "Elegí una opción de servicio válida.";
  }

  if (message.length < MESSAGE_MIN_LENGTH) {
    fieldErrors.message = "Contanos un poco más sobre lo que necesitás.";
  } else if (message.length > MESSAGE_MAX_LENGTH) {
    fieldErrors.message = `El mensaje puede tener hasta ${MESSAGE_MAX_LENGTH} caracteres.`;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      kind: "invalid-fields",
      message: "Revisá los campos indicados.",
      fieldErrors,
    };
  }

  return {
    success: true,
    data: {
      name,
      contact,
      business,
      service: service as ValidatedContact["service"],
      message,
    },
  };
}

function buildContactMessage(contact: ValidatedContact, serviceLabel: string) {
  return [
    "Hola Joaquín, vi tu portfolio y quiero hacer una consulta.",
    "",
    `Nombre: ${contact.name}`,
    `Contacto: ${contact.contact}`,
    contact.business ? `Negocio / proyecto: ${contact.business}` : null,
    `Servicio: ${serviceLabel}`,
    "",
    "Mensaje:",
    contact.message,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");
}

export function createContactDestinations(
  contact: ValidatedContact,
): ContactDestinations | null {
  const serviceLabel = serviceLabels.get(contact.service);
  if (!serviceLabel) {
    return null;
  }

  const body = buildContactMessage(contact, serviceLabel);
  const whatsappUrl = createWhatsAppLink(profile.whatsappNumber, body);
  if (!whatsappUrl) {
    return null;
  }

  const subject = `Consulta desde el portfolio — ${serviceLabel}`;
  const emailUrl = `mailto:${contactLinks.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return { whatsappUrl, emailUrl };
}
