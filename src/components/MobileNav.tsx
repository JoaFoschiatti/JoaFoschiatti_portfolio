"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MobileNavProps = {
  brandName: string;
  navigation: readonly { label: string; href: string }[];
};

export default function MobileNav({ brandName, navigation }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1121px)");
    const closeAtDesktop = () => {
      if (desktopQuery.matches && dialogRef.current?.open) {
        dialogRef.current.close();
      }
    };

    closeAtDesktop();
    desktopQuery.addEventListener("change", closeAtDesktop);
    return () => desktopQuery.removeEventListener("change", closeAtDesktop);
  }, []);

  const openMenu = () => {
    if (!dialogRef.current?.open) dialogRef.current?.showModal();
    setIsOpen(true);
  };

  const closeMenu = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
  };

  return (
    <div className="mobile-nav-root">
      <button
        ref={triggerRef}
        className="mobile-menu-trigger"
        type="button"
        aria-label="Abrir menú"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={openMenu}
      >
        <span />
        <span />
      </button>

      <dialog
        ref={dialogRef}
        className="mobile-menu-dialog"
        aria-label="Menú de navegación"
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClose={() => {
          setIsOpen(false);
          triggerRef.current?.focus();
        }}
      >
        <div className="mobile-menu-panel">
          <div className="mobile-menu-header">
            <span>{brandName}</span>
            <button type="button" onClick={closeMenu} aria-label="Cerrar menú">
              Cerrar <span aria-hidden>×</span>
            </button>
          </div>
          <nav aria-label="Navegación móvil">
            {navigation.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <span>{item.label}</span>
                <i aria-hidden>↗</i>
              </Link>
            ))}
          </nav>
          <Link className="mobile-menu-cta" href="/#contacto" onClick={closeMenu}>
            Iniciar un proyecto
          </Link>
        </div>
      </dialog>
    </div>
  );
}
