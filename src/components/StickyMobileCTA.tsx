"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type StickyMobileCTAProps = {
  whatsappHref: string;
  /** CSS selector for the section that should hide the sticky CTA when in view (typically the contact section). */
  hideSelector?: string;
  /** Minimum scroll position (px) before showing the sticky CTA. */
  showThreshold?: number;
  label?: string;
};

export default function StickyMobileCTA({
  whatsappHref,
  hideSelector = "#contacto",
  showThreshold = 520,
  label = "Hablar por WhatsApp",
}: StickyMobileCTAProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let hideElIntersecting = false;

    const update = () => {
      const scrolled = window.scrollY > showThreshold;
      setShow(scrolled && !hideElIntersecting);
    };

    const onScroll = () => {
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const hideEl = hideSelector ? document.querySelector(hideSelector) : null;
    let hideObserver: IntersectionObserver | null = null;
    if (hideEl) {
      hideObserver = new IntersectionObserver(
        ([entry]) => {
          hideElIntersecting = entry.isIntersecting;
          update();
        },
        { rootMargin: "0px 0px -80px 0px" },
      );
      hideObserver.observe(hideEl);
    }

    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      hideObserver?.disconnect();
    };
  }, [hideSelector, showThreshold]);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center px-3 transition-all duration-200 md:hidden ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        paddingTop: "0.75rem",
      }}
      aria-hidden={!show}
    >
      <Link
        href={whatsappHref}
        target="_blank"
        rel="noopener"
        className={`button-primary w-full max-w-md shadow-[0_18px_44px_-14px_rgba(15,118,110,0.55),0_8px_24px_-8px_rgba(0,0,0,0.35)] ${
          show ? "pointer-events-auto" : "pointer-events-none"
        }`}
        tabIndex={show ? undefined : -1}
      >
        {label}
      </Link>
    </div>
  );
}
