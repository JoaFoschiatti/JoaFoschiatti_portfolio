"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type StickyMobileCTAProps = {
  whatsappHref: string;
  /** CSS selector for sections that should hide the sticky CTA when in view. */
  hideSelector?: string;
  /** Minimum scroll position (px) before showing the sticky CTA. */
  showThreshold?: number;
  label?: string;
};

export default function StickyMobileCTA({
  whatsappHref,
  hideSelector = "#proyectos, #servicios, #proceso, #faq, #contacto",
  showThreshold = 760,
  label = "WhatsApp",
}: StickyMobileCTAProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = 0;

    const shouldHideForSection = () => {
      if (!hideSelector) {
        return false;
      }

      const topGuard = 72;
      const bottomGuard = 84;
      return Array.from(document.querySelectorAll(hideSelector)).some((el) => {
        const rect = el.getBoundingClientRect();

        return (
          rect.top < window.innerHeight - bottomGuard &&
          rect.bottom > topGuard
        );
      });
    };

    const update = () => {
      frame = 0;
      const scrolled = window.scrollY > showThreshold;
      setShow(scrolled && !shouldHideForSection());
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    update();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [hideSelector, showThreshold]);

  useEffect(() => {
    document.body.dataset.stickyMobileCta = show ? "visible" : "hidden";
    window.dispatchEvent(new Event("sticky-mobile-cta-visibility-change"));

    return () => {
      delete document.body.dataset.stickyMobileCta;
      window.dispatchEvent(new Event("sticky-mobile-cta-visibility-change"));
    };
  }, [show]);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 z-30 flex justify-center px-3 transition-all duration-200 md:hidden ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      style={{
        bottom: "calc(0.75rem + env(safe-area-inset-bottom))",
      }}
      aria-hidden={!show}
    >
      <Link
        href={whatsappHref}
        target="_blank"
        rel="noopener"
        aria-label="Consultar por WhatsApp"
        className={`button-primary w-auto min-w-[8.75rem] max-w-[calc(100%-1.5rem)] px-4 text-[0.88rem] shadow-[0_18px_44px_-14px_rgba(15,118,110,0.55),0_8px_24px_-8px_rgba(0,0,0,0.35)] ${
          show ? "pointer-events-auto" : "pointer-events-none"
        }`}
        tabIndex={show ? undefined : -1}
      >
        {label}
      </Link>
    </div>
  );
}
