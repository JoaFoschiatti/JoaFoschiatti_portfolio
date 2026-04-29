"use client";

import { useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "ig-browser-hint-dismissed";

function isInAppBrowser(ua: string): boolean {
  if (!ua) return false;
  // Instagram + Facebook in-app browsers (FBAN/FBAV/FB_IAB are Facebook variants)
  return /Instagram|FBAN|FBAV|FB_IAB/i.test(ua);
}

// useSyncExternalStore subscribe is a no-op: the user-agent does not change at runtime.
const subscribe = () => () => {};

function getClientSnapshot(): boolean {
  if (typeof navigator === "undefined") return false;
  if (!isInAppBrowser(navigator.userAgent)) return false;
  try {
    if (
      typeof window !== "undefined" &&
      window.sessionStorage.getItem(STORAGE_KEY) === "true"
    ) {
      return false;
    }
  } catch {
    // sessionStorage may be blocked in private mode — proceed to show
  }
  return true;
}

function getServerSnapshot(): boolean {
  return false;
}

export default function InstagramBrowserHint() {
  const detected = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  const [dismissed, setDismissed] = useState(false);

  if (!detected || dismissed) return null;

  const dismiss = () => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // no-op
    }
    setDismissed(true);
  };

  return (
    <div
      className="sticky top-0 z-50 flex items-center justify-between gap-3 bg-[#0f766e] px-4 py-2 text-[0.82rem] leading-snug text-white"
      role="status"
      aria-live="polite"
    >
      <p className="min-w-0">
        Si WhatsApp no abre, tocá <strong className="font-semibold">•••</strong>{" "}
        y elegí <strong className="font-semibold">Abrir en Safari</strong>.
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Cerrar aviso"
        className="shrink-0 rounded-full bg-white/15 px-2.5 py-1 font-mono text-[0.62rem] font-medium uppercase tracking-[0.14em] text-white/95 hover:bg-white/25"
      >
        Cerrar
      </button>
    </div>
  );
}
