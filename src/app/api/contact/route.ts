import {
  createContactDestinations,
  validateContactPayload,
  type ContactFieldErrors,
} from "@/lib/contact";

const MAX_REQUEST_BYTES = 16 * 1024;
const RESPONSE_HEADERS = {
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
} as const;

type ErrorResponse = {
  ok: false;
  message: string;
  fieldErrors?: ContactFieldErrors;
};

class PayloadTooLargeError extends Error {}

function jsonResponse(body: ErrorResponse | Record<string, unknown>, status: number) {
  return Response.json(body, {
    status,
    headers: RESPONSE_HEADERS,
  });
}

function hasJsonContentType(request: Request) {
  const contentType = request.headers.get("content-type");
  if (!contentType) {
    return false;
  }

  return contentType.split(";", 1)[0]?.trim().toLowerCase() === "application/json";
}

function getContentType(request: Request) {
  return request.headers
    .get("content-type")
    ?.split(";", 1)[0]
    ?.trim()
    .toLowerCase();
}

function formRedirect(request: Request) {
  const url = new URL("/contacto/revisar", request.url);

  return new Response(null, {
    status: 303,
    headers: {
      ...RESPONSE_HEADERS,
      Location: url.toString(),
    },
  });
}

function destinationRedirect(url: string) {
  return new Response(null, {
    status: 303,
    headers: {
      ...RESPONSE_HEADERS,
      Location: url,
    },
  });
}

function exceedsDeclaredSize(request: Request) {
  const contentLength = request.headers.get("content-length");
  if (contentLength === null) {
    return false;
  }

  const length = Number(contentLength);
  return !Number.isSafeInteger(length) || length < 0 || length > MAX_REQUEST_BYTES;
}

async function readBodyWithLimit(request: Request) {
  if (!request.body) {
    return "";
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    totalBytes += value.byteLength;
    if (totalBytes > MAX_REQUEST_BYTES) {
      await reader.cancel().catch(() => undefined);
      throw new PayloadTooLargeError();
    }

    chunks.push(value);
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return new TextDecoder("utf-8", { fatal: true }).decode(body);
}

export async function POST(request: Request) {
  if (request.headers.get("sec-fetch-site")?.toLowerCase() === "cross-site") {
    return jsonResponse(
      { ok: false, message: "La solicitud no está permitida." },
      403,
    );
  }

  const contentType = getContentType(request);
  const isJsonRequest = hasJsonContentType(request);
  const isNativeForm = contentType === "application/x-www-form-urlencoded";

  if (!isJsonRequest && !isNativeForm) {
    return jsonResponse(
      { ok: false, message: "El contenido debe enviarse como JSON." },
      415,
    );
  }

  if (exceedsDeclaredSize(request)) {
    return jsonResponse(
      { ok: false, message: "La solicitud es demasiado grande." },
      413,
    );
  }

  let rawBody: string;
  try {
    rawBody = await readBodyWithLimit(request);
  } catch (error) {
    if (error instanceof PayloadTooLargeError) {
      return jsonResponse(
        { ok: false, message: "La solicitud es demasiado grande." },
        413,
      );
    }

    return jsonResponse(
      { ok: false, message: "La solicitud contiene texto no válido." },
      400,
    );
  }

  let payload: unknown;
  if (isNativeForm) {
    payload = Object.fromEntries(new URLSearchParams(rawBody));
  } else {
    try {
      payload = JSON.parse(rawBody) as unknown;
    } catch {
      return jsonResponse(
        { ok: false, message: "El cuerpo JSON no es válido." },
        400,
      );
    }
  }

  const validation = validateContactPayload(payload);
  if (!validation.success) {
    if (isNativeForm) {
      return formRedirect(request);
    }

    const status = validation.kind === "invalid-payload" ? 400 : 422;
    return jsonResponse(
      {
        ok: false,
        message: validation.message,
        ...(validation.fieldErrors
          ? { fieldErrors: validation.fieldErrors }
          : {}),
      },
      status,
    );
  }

  const destinations = createContactDestinations(validation.data);
  if (!destinations) {
    if (isNativeForm) {
      return formRedirect(request);
    }

    return jsonResponse(
      {
        ok: false,
        message: "El canal de contacto no está disponible en este momento.",
      },
      500,
    );
  }

  if (isNativeForm) {
    return destinationRedirect(destinations.whatsappUrl);
  }

  return jsonResponse(
    {
      ok: true,
      whatsappUrl: destinations.whatsappUrl,
      emailUrl: destinations.emailUrl,
    },
    200,
  );
}
