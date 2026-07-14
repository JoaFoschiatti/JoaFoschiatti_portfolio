import Link from "next/link";
import MobileNav from "@/components/MobileNav";

type HeaderProps = {
  brandName: string;
  navigation: readonly { label: string; href: string }[];
};

export default function Header({ brandName, navigation }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <Link className="brand-lockup" href="/" aria-label={`${brandName}, inicio`}>
          <span className="brand-mark" aria-hidden>
            JF
          </span>
          <span className="brand-copy">
            <strong>Joaquín Foschiatti</strong>
            <small>Ingeniero en Sistemas</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/#contacto">
          Iniciar un proyecto
          <span aria-hidden>↗</span>
        </Link>

        <MobileNav brandName={brandName} navigation={navigation} />
      </div>
    </header>
  );
}
