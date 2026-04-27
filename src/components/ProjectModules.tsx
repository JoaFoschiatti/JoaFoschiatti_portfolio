"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { ProjectModuleScreenshot } from "@/data/portfolio";

type ProjectModulesProps = {
  modules: readonly string[];
  moduleScreenshots?: readonly ProjectModuleScreenshot[];
};

export default function ProjectModules({
  modules,
  moduleScreenshots,
}: ProjectModulesProps) {
  const [activeScreenshot, setActiveScreenshot] =
    useState<ProjectModuleScreenshot | null>(null);

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

  useEffect(() => {
    if (!activeScreenshot) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveScreenshot(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeScreenshot]);

  return (
    <>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
              className="surface-card group flex min-h-24 w-full flex-col items-start justify-between p-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
              onClick={() => setActiveScreenshot(screenshot)}
              aria-label={`Ver pantalla de ${module}`}
            >
              <span className="text-[1rem] font-medium text-[#171717]">
                {module}
              </span>
              <span className="mt-5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[#666666] group-hover:text-[#171717]">
                Ver pantalla
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
              setActiveScreenshot(null);
            }
          }}
        >
          <div className="max-h-[calc(100vh-1.5rem)] w-full max-w-6xl overflow-hidden rounded-[12px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:max-h-[calc(100vh-3rem)]">
            <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-5">
              <div>
                <p className="section-eyebrow">Pantalla del sistema</p>
                <h3
                  id="module-screenshot-title"
                  className="mt-2 text-[1.35rem] font-semibold tracking-[-0.04em] text-[#171717]"
                >
                  {activeScreenshot.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#4d4d4d]">
                  {activeScreenshot.description}
                </p>
              </div>
              <button
                type="button"
                className="button-secondary shrink-0"
                onClick={() => setActiveScreenshot(null)}
              >
                Cerrar
              </button>
            </div>
            <div className="border-t border-[#ebebeb] p-3 sm:p-4">
              <div className="overflow-hidden rounded-[8px] bg-[#fafafa] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
                <Image
                  src={activeScreenshot.src}
                  alt={activeScreenshot.alt}
                  width={activeScreenshot.width}
                  height={activeScreenshot.height}
                  sizes="(min-width: 1024px) 1040px, calc(100vw - 2rem)"
                  className="h-auto max-h-[calc(100vh-14rem)] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
