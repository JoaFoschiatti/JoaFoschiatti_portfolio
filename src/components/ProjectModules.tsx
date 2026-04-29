"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ProjectModuleScreenshot } from "@/data/portfolio";

type ProjectModulesProps = {
  modules: readonly string[];
  moduleScreenshots?: readonly ProjectModuleScreenshot[];
};

const SWIPE_THRESHOLD = 50;

export default function ProjectModules({
  modules,
  moduleScreenshots,
}: ProjectModulesProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const touchStartX = useRef<number | null>(null);

  const screenshots = useMemo(() => {
    if (!moduleScreenshots) return [] as ProjectModuleScreenshot[];
    const byModule = new Map(
      moduleScreenshots.map((screenshot) => [screenshot.module, screenshot]),
    );
    return modules
      .map((module) => byModule.get(module))
      .filter((screenshot): screenshot is ProjectModuleScreenshot =>
        Boolean(screenshot),
      );
  }, [modules, moduleScreenshots]);

  const screenshotsByModule = useMemo(
    () =>
      new Map(
        moduleScreenshots?.map((screenshot) => [
          screenshot.module,
          screenshot,
        ]) ?? [],
      ),
    [moduleScreenshots],
  );

  const activeScreenshot =
    activeIndex !== null ? (screenshots[activeIndex] ?? null) : null;

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const openLightboxByModule = useCallback(
    (module: string) => {
      const index = screenshots.findIndex((s) => s.module === module);
      if (index >= 0) setActiveIndex(index);
    },
    [screenshots],
  );

  const goPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return Math.max(0, current - 1);
    });
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return Math.min(screenshots.length - 1, current + 1);
    });
  }, [screenshots.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowRight") {
        goNext();
      } else if (event.key === "ArrowLeft") {
        goPrev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip || screenshots.length <= 1) {
      return;
    }
    const slides = slideRefs.current.filter(
      (el): el is HTMLButtonElement => el !== null,
    );
    if (slides.length === 0) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const idx = slides.indexOf(entry.target as HTMLButtonElement);
            if (idx !== -1) {
              setMobileActiveIndex(idx);
            }
          }
        }
      },
      { root: strip, threshold: 0.6 },
    );
    slides.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [screenshots]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length !== 1) {
      touchStartX.current = null;
      return;
    }
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null) return;
    const endX = event.changedTouches[0]?.clientX;
    if (endX === undefined) return;
    const delta = endX - startX;
    if (delta > SWIPE_THRESHOLD) {
      goPrev();
    } else if (delta < -SWIPE_THRESHOLD) {
      goNext();
    }
  };

  const scrollToSlide = (index: number) => {
    const slide = slideRefs.current[index];
    slide?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <>
      {screenshots.length > 0 ? (
        <div className="mt-10 md:hidden">
          <div ref={stripRef} className="modules-mobile-strip">
            {screenshots.map((screenshot, idx) => (
              <button
                key={screenshot.module}
                ref={(el) => {
                  slideRefs.current[idx] = el;
                }}
                type="button"
                className="module-screen-card modules-mobile-slide group flex flex-col overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Ver pantalla de ${screenshot.module}`}
              >
                <span className="module-screen-preview">
                  <Image
                    src={screenshot.src}
                    alt=""
                    width={screenshot.width}
                    height={screenshot.height}
                    sizes="86vw"
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="flex w-full items-end justify-between gap-4 px-5 py-4">
                  <span className="text-[1rem] font-medium text-[#171717]">
                    {screenshot.module}
                  </span>
                  <span className="shrink-0 font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#666666] group-hover:text-[#171717]">
                    Ver pantalla
                  </span>
                </span>
              </button>
            ))}
          </div>
          {screenshots.length > 1 ? (
            <>
              <div className="modules-mobile-dots">
                {screenshots.map((screenshot, idx) => (
                  <button
                    key={screenshot.module}
                    type="button"
                    className="modules-mobile-dot"
                    data-active={mobileActiveIndex === idx ? "true" : "false"}
                    aria-label={`Ir a pantalla ${screenshot.module}`}
                    aria-current={mobileActiveIndex === idx ? "true" : undefined}
                    onClick={() => scrollToSlide(idx)}
                  />
                ))}
              </div>
              <p className="modules-mobile-counter" aria-live="polite">
                {mobileActiveIndex + 1} / {screenshots.length}
              </p>
            </>
          ) : null}
        </div>
      ) : null}

      <div className="mt-10 hidden gap-4 md:grid md:grid-cols-2 xl:grid-cols-4">
        {modules.map((module) => {
          const screenshot = screenshotsByModule.get(module);

          if (!screenshot) {
            return (
              <article key={module} className="surface-card p-5">
                <p className="text-[1rem] font-medium text-[#171717]">
                  {module}
                </p>
              </article>
            );
          }

          return (
            <button
              key={module}
              type="button"
              className="module-screen-card group flex w-full flex-col overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
              onClick={() => openLightboxByModule(module)}
              aria-label={`Ver pantalla de ${module}`}
            >
              <span className="module-screen-preview">
                <Image
                  src={screenshot.src}
                  alt=""
                  width={screenshot.width}
                  height={screenshot.height}
                  sizes="(min-width: 1280px) 280px, (min-width: 768px) 50vw, 86vw"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex w-full items-end justify-between gap-4 px-5 py-4">
                <span className="text-[1rem] font-medium text-[#171717]">
                  {module}
                </span>
                <span className="shrink-0 font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#666666] group-hover:text-[#171717]">
                  Ver pantalla
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {activeScreenshot ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="module-screenshot-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          {screenshots.length > 1 ? (
            <>
              <button
                type="button"
                className="lightbox-arrow lightbox-arrow-prev"
                onClick={goPrev}
                disabled={activeIndex === 0}
                aria-label="Pantalla anterior"
              >
                <span aria-hidden>‹</span>
              </button>
              <button
                type="button"
                className="lightbox-arrow lightbox-arrow-next"
                onClick={goNext}
                disabled={activeIndex === screenshots.length - 1}
                aria-label="Pantalla siguiente"
              >
                <span aria-hidden>›</span>
              </button>
            </>
          ) : null}
          <div className="max-h-[calc(100vh-1.5rem)] w-full max-w-6xl overflow-hidden rounded-[12px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:max-h-[calc(100vh-3rem)]">
            <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-5">
              <div>
                <p className="section-eyebrow">Pantalla del sistema</p>
                <h3
                  id="module-screenshot-title"
                  className="mt-2 text-[1.35rem] font-semibold tracking-[-0.04em] text-[#171717]"
                  aria-live="polite"
                >
                  {activeScreenshot.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#4d4d4d]">
                  {activeScreenshot.description}
                </p>
                {screenshots.length > 1 ? (
                  <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#666666]">
                    {(activeIndex ?? 0) + 1} / {screenshots.length}
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                className="button-secondary shrink-0"
                onClick={closeLightbox}
              >
                Cerrar
              </button>
            </div>
            <div
              className="border-t border-[#ebebeb] p-3 sm:p-4"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="overflow-hidden rounded-[8px] bg-[#fafafa] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
                <Image
                  src={activeScreenshot.src}
                  alt={activeScreenshot.alt}
                  width={activeScreenshot.width}
                  height={activeScreenshot.height}
                  sizes="(min-width: 1024px) 1040px, calc(100vw - 2rem)"
                  className="h-auto max-h-[calc(100vh-14rem)] w-full object-contain"
                  style={{ touchAction: "pinch-zoom" }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
