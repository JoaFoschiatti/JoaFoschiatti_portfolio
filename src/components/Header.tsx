"use client";

import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  brandName: string;
  navigation: { label: string; href: string }[];
  whatsappHref: string;
};

export default function Header({
  brandName,
  navigation,
  whatsappHref,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(17,24,32,0.08)] bg-[rgba(251,250,247,0.88)] backdrop-blur-xl">
      <div className="section-shell flex min-h-[72px] max-w-[20.5rem] items-center justify-between gap-6 sm:max-w-none">
        <Link
          href="/"
          className="text-[0.98rem] font-semibold tracking-[-0.03em] text-[var(--color-foreground)]"
        >
          {brandName}
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-8" aria-label="Principal">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link className="button-primary" href={whatsappHref}>
            Hablar por WhatsApp
          </Link>
        </div>

        <button
          type="button"
          className="surface-card flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Menú</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px bg-[var(--color-foreground)] transition-transform ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px bg-[var(--color-foreground)] transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px bg-[var(--color-foreground)] transition-transform ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-surface)] md:hidden">
          <div className="section-shell flex max-w-[20.5rem] flex-col gap-4 py-5 sm:max-w-none">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link className="button-primary mt-2" href={whatsappHref} onClick={closeMenu}>
              Hablar por WhatsApp
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
