import Image from "next/image";
import type { ProjectScreenshot } from "@/data/portfolio";

type CaseScreenshotsProps = {
  screenshots?: ProjectScreenshot[];
};

export default function CaseScreenshots({
  screenshots,
}: CaseScreenshotsProps) {
  if (!screenshots?.length) {
    return null;
  }

  return (
    <section className="section-block section-shell pt-6">
      <div className="max-w-3xl">
        <p className="section-eyebrow">Evidencia visual</p>
        <h2 className="section-title">Pantallas del sistema</h2>
        <p className="section-copy mt-5">
          Capturas reales presentadas con datos de muestra para preservar
          información operativa y de clientes.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {screenshots.map((screenshot) => (
          <a
            key={screenshot.src}
            className="surface-card group block overflow-hidden p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
            href={screenshot.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir captura ampliada: ${screenshot.title}`}
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={1280}
              height={820}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="aspect-[16/10] w-full rounded-[8px] bg-[#fafafa] object-cover shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]"
            />
            <div className="px-2 py-4">
              <h3 className="text-[1.05rem] font-semibold tracking-[-0.03em] text-[#171717]">
                {screenshot.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#4d4d4d]">
                {screenshot.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
