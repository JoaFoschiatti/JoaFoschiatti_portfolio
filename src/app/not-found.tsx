import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="hero-grid-lines" aria-hidden />
      <div className="section-shell not-found-inner">
        <p>404 — Página no encontrada</p>
        <h1>Esta ruta no forma parte del sistema.</h1>
        <span>
          Podés volver al portfolio o explorar los proyectos documentados.
        </span>
        <div>
          <Link className="button-accent" href="/">
            Volver al inicio <i aria-hidden>↗</i>
          </Link>
          <Link className="text-link text-link-light" href="/#proyectos">
            Ver proyectos <i aria-hidden>↓</i>
          </Link>
        </div>
      </div>
    </section>
  );
}
