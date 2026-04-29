"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type AvatarLightboxProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  triggerLabel?: string;
};

export default function AvatarLightbox({
  src,
  alt,
  width,
  height,
  triggerLabel = "Ver foto en grande",
}: AvatarLightboxProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  // Keyboard + body-scroll lock + focus management while open.
  useEffect(() => {
    if (!open) return;

    // Capture the trigger node at effect-run time so the cleanup restores focus
    // to the same element even if the ref later changes.
    const trigger = triggerRef.current;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the dialog so screen readers + keyboard users land here.
    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      // Restore focus to the trigger when the dialog closes.
      trigger?.focus();
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={triggerLabel}
        className="home-personal-avatar group cursor-zoom-in border-0 p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
      >
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          sizes="(min-width: 768px) 100px, 18vw"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt || "Foto ampliada"}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="relative flex w-full max-w-[22rem] flex-col items-end gap-3 sm:max-w-[26rem]">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className="inline-flex h-9 items-center rounded-full bg-white/15 px-4 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md transition-colors hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Cerrar ✕
            </button>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="(min-width: 640px) 26rem, calc(100vw - 2rem)"
              className="h-auto w-full rounded-2xl shadow-[0_28px_80px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
