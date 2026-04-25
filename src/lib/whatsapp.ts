export function createWhatsAppLink(number: string, message: string) {
  if (!number || number.startsWith("TODO_")) {
    return null;
  }

  const digits = number.replace(/\D/g, "");

  if (digits.length < 8) {
    return null;
  }

  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
