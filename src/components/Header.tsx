"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type HeaderProps = {
  brandName: string;
  navigation: readonly { label: string; href: string }[];
  whatsappHref: string;
};

export default function Header({
  brandName,
  navigation,
  whatsappHref,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const handleBrandClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    if (pathname === "/") {
      event.preventDefault();
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      window.scrollTo({
        top: 0,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }
  };

  const handleNavigationClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const shouldDeferForMenu = isOpen;
    closeMenu();

    if (pathname !== "/" || !href.startsWith("/#")) {
      return;
    }

    const targetId = href.slice(2);
    if (!document.getElementById(targetId)) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", `#${targetId}`);
    window.setTimeout(() => {
      const target = document.getElementById(targetId);
      if (!target) {
        return;
      }

      const headerOffset = window.matchMedia("(max-width: 640px)").matches
        ? 116
        : 96;
      const header = document.querySelector("header");
      const headerHeight =
        header?.getBoundingClientRect().height ?? headerOffset;
      const openMenuOffset = Math.max(0, headerHeight - headerOffset);
      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset -
        openMenuOffset;
      const html = document.documentElement;
      const previousScrollBehavior = html.style.scrollBehavior;

      html.style.scrollBehavior = "auto";
      window.scrollTo({
        top: Math.max(0, top),
        behavior: "auto",
      });
      window.setTimeout(() => {
        html.style.scrollBehavior = previousScrollBehavior;
      }, 0);
    }, shouldDeferForMenu ? 180 : 0);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(17,24,32,0.08)] bg-[rgba(251,250,247,0.96)] backdrop-blur-xl md:bg-[rgba(251,250,247,0.9)]">
      <div className="section-shell flex min-h-[72px] items-center justify-between gap-6">
        <Link
          href="/"
          onClick={handleBrandClick}
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
              onClick={(event) => handleNavigationClick(event, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            className="button-primary"
            href={whatsappHref}
            target="_blank"
            rel="noopener"
          >
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
          <div className="section-shell flex flex-col gap-4 py-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                onClick={(event) => handleNavigationClick(event, item.href)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="button-primary mt-2"
              href={whatsappHref}
              target="_blank"
              rel="noopener"
              onClick={closeMenu}
            >
              Hablar por WhatsApp
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
