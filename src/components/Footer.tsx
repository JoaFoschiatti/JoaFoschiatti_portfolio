import Link from "next/link";

type FooterProps = {
  name: string;
  location: string;
  email: string;
  githubUrl: string;
  instagramUrl: string;
  summary: string;
};

export default function Footer({
  name,
  location,
  email,
  githubUrl,
  instagramUrl,
  summary,
}: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden>JF</span>
          <div>
            <strong>{name}</strong>
            <p>{summary}</p>
          </div>
        </div>

        <div className="footer-column">
          <p>Navegación</p>
          <Link href="/#proyectos">Proyectos</Link>
          <Link href="/#que-hago">Servicios</Link>
          <Link href="/sistemas-a-medida">Sistemas a medida</Link>
          <Link href="/#contacto">Contacto</Link>
        </div>

        <div className="footer-column">
          <p>Encontrame</p>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          <a href={`mailto:${email}`}>Email ↗</a>
        </div>
      </div>

      <div className="section-shell footer-bottom">
        <p>© {new Date().getFullYear()} {name}</p>
        <p>{location.replaceAll(" / ", " · ")}</p>
        <p>Diseñado y desarrollado con criterio.</p>
      </div>
    </footer>
  );
}
