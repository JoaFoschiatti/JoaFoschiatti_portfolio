"use client";

import Image from "next/image";
import {
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import type { ProjectModuleScreenshot } from "@/data/portfolio";

type ProjectModulesProps = {
  modules: readonly string[];
  moduleScreenshots?: readonly ProjectModuleScreenshot[];
};

export default function ProjectModules({
  modules,
  moduleScreenshots = [],
}: ProjectModulesProps) {
  const galleryId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const screenshotsByModule = new Map(
    moduleScreenshots.map((screenshot) => [screenshot.module, screenshot]),
  );
  const screenshots = modules
    .map((module) => screenshotsByModule.get(module))
    .filter((item): item is ProjectModuleScreenshot => Boolean(item));
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreenshot = screenshots[activeIndex];

  if (!activeScreenshot) {
    return (
      <div className="module-tags-only">
        {modules.map((module) => (
          <span key={module}>{module}</span>
        ))}
      </div>
    );
  }

  const showPrevious = () => {
    setActiveIndex((current) => Math.max(0, current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => Math.min(screenshots.length - 1, current + 1));
  };

  const activateAndFocus = (index: number) => {
    setActiveIndex(index);
    requestAnimationFrame(() => tabRefs.current[index]?.focus());
  };

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | undefined;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % screenshots.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (index - 1 + screenshots.length) % screenshots.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = screenshots.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    activateAndFocus(nextIndex);
  };

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  return (
    <div className="module-gallery">
      <div className="module-selector" role="tablist" aria-label="Módulos del sistema">
        {screenshots.map((screenshot, index) => (
          <button
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            key={screenshot.module}
            id={`${galleryId}-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`${galleryId}-panel`}
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{screenshot.module}</strong>
            <i aria-hidden>↗</i>
          </button>
        ))}
      </div>

      <div
        id={`${galleryId}-panel`}
        className="module-stage"
        role="tabpanel"
        aria-labelledby={`${galleryId}-tab-${activeIndex}`}
      >
        <div className="project-browser-bar" aria-hidden>
          <span><i /><i /><i /></span>
          <small>{activeScreenshot.module}</small>
        </div>
        <button
          ref={openButtonRef}
          className="module-stage-image"
          type="button"
          onClick={openDialog}
          aria-label={`Ampliar ${activeScreenshot.title}`}
        >
          <Image
            key={activeScreenshot.src}
            src={activeScreenshot.src}
            alt={activeScreenshot.alt}
            width={activeScreenshot.width}
            height={activeScreenshot.height}
            sizes="(min-width: 1024px) 900px, 96vw"
          />
          <span>Ampliar pantalla <i aria-hidden>↗</i></span>
        </button>
        <div className="module-stage-caption">
          <div>
            <span>{activeScreenshot.module}</span>
            <h3>{activeScreenshot.title}</h3>
            <p>{activeScreenshot.description}</p>
          </div>
          <div
            className="module-controls"
            aria-label="Navegar pantallas"
            aria-live="polite"
          >
            <button type="button" onClick={showPrevious} disabled={activeIndex === 0} aria-label="Pantalla anterior">
              ←
            </button>
            <span>{activeIndex + 1} / {screenshots.length}</span>
            <button
              type="button"
              onClick={showNext}
              disabled={activeIndex === screenshots.length - 1}
              aria-label="Pantalla siguiente"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="media-dialog"
        aria-labelledby={`${galleryId}-dialog-title`}
        aria-describedby={`${galleryId}-dialog-description`}
        onClose={() => openButtonRef.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <div className="media-dialog-panel">
          <header>
            <div>
              <span>{activeScreenshot.module}</span>
              <h2 id={`${galleryId}-dialog-title`}>{activeScreenshot.title}</h2>
              <p id={`${galleryId}-dialog-description`}>{activeScreenshot.description}</p>
            </div>
            <form method="dialog">
              <button type="submit">Cerrar <span aria-hidden>×</span></button>
            </form>
          </header>
          <div className="media-dialog-image">
            <Image
              src={activeScreenshot.src}
              alt={activeScreenshot.alt}
              width={activeScreenshot.width}
              height={activeScreenshot.height}
              sizes="96vw"
            />
          </div>
          <div className="media-dialog-controls">
            <button type="button" onClick={showPrevious} disabled={activeIndex === 0}>
              ← Anterior
            </button>
            <span>{activeIndex + 1} / {screenshots.length}</span>
            <button type="button" onClick={showNext} disabled={activeIndex === screenshots.length - 1}>
              Siguiente →
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
