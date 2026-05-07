"use client";

import { useEffect, useState } from "react";

const SHOW_THRESHOLD = 720;

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;
    let contactIntersecting = false;

    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const nearEnd =
        window.scrollY + window.innerHeight >= doc.scrollHeight - 360;
      const stickyCtaVisible =
        document.body.dataset.stickyMobileCta === "visible";
      setShow(
        !stickyCtaVisible &&
          window.scrollY > SHOW_THRESHOLD &&
          (contactIntersecting || nearEnd),
      );
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("sticky-mobile-cta-visibility-change", update);

    const contact = document.querySelector("#contacto");
    const contactObserver = contact
      ? new IntersectionObserver(
          ([entry]) => {
            contactIntersecting = entry.isIntersecting;
            update();
          },
          { rootMargin: "0px 0px -96px 0px" },
        )
      : null;

    contactObserver?.observe(contact as Element);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("sticky-mobile-cta-visibility-change", update);
      contactObserver?.disconnect();
    };
  }, []);

  const goTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Volver arriba"
      tabIndex={show ? undefined : -1}
      className={`fixed right-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,253,248,0.86)] text-[var(--color-foreground)] shadow-[0_8px_22px_-12px_rgba(17,24,32,0.45),inset_0_0_0_1px_rgba(17,24,32,0.1)] backdrop-blur-md transition-all duration-200 hover:bg-[rgba(255,253,248,0.96)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] md:hidden ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      style={{ bottom: "calc(5rem + env(safe-area-inset-bottom))" }}
      aria-hidden={!show}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
