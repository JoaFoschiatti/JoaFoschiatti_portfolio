"use client";

import { useMemo, useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { BriefBuilderOptions, BriefOption } from "@/data/portfolio";
import { createWhatsAppLink } from "@/lib/whatsapp";

type BriefBuilderProps = {
  options: BriefBuilderOptions;
  whatsappNumber: string;
};

type OptionButtonProps = {
  option: BriefOption;
  selected: boolean;
  onClick: (value: string) => void;
};

function getLabel(options: readonly BriefOption[], value: string) {
  return options.find((option) => option.value === value)?.label;
}

function OptionButton({ option, selected, onClick }: OptionButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onClick(option.value)}
      className={`inline-flex min-h-[2.5rem] items-center rounded-full px-4 py-2 text-left font-mono text-[0.76rem] font-medium uppercase tracking-[0.12em] ${
        selected
          ? "bg-[#171717] text-white shadow-[0_10px_20px_-16px_rgba(0,0,0,0.45)]"
          : "bg-white text-[#666666] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] hover:bg-[#fafafa] hover:text-[#171717]"
      }`}
    >
      {option.label}
    </button>
  );
}

export default function BriefBuilder({ options, whatsappNumber }: BriefBuilderProps) {
  const [industry, setIndustry] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);
  const [state, setState] = useState("");
  const [urgency, setUrgency] = useState("");
  const [note, setNote] = useState("");

  const selectedNeedLabels = useMemo(
    () =>
      needs
        .map((need) => getLabel(options.needs, need))
        .filter((label): label is string => Boolean(label)),
    [needs, options.needs],
  );

  const message = useMemo(() => {
    const lines: string[] = [
      "Hola Joaquín, vi tu portfolio y quiero consultar por una web, sistema o automatización para ordenar un proceso de mi negocio.",
    ];

    const industryLabel = getLabel(options.industries, industry);
    const stateLabel = getLabel(options.states, state);
    const urgencyLabel = getLabel(options.urgencies, urgency);
    const trimmedNote = note.trim();

    const selectionLines: string[] = [];
    if (industryLabel) {
      selectionLines.push(`Rubro: ${industryLabel}`);
    }
    if (selectedNeedLabels.length) {
      selectionLines.push(`Quiero ordenar: ${selectedNeedLabels.join(", ")}`);
    }
    if (stateLabel) {
      selectionLines.push(`Estado actual: ${stateLabel}`);
    }
    if (urgencyLabel) {
      selectionLines.push(`Urgencia: ${urgencyLabel}`);
    }

    if (selectionLines.length) {
      lines.push("", ...selectionLines);
    }
    if (trimmedNote) {
      lines.push("", `Detalle: ${trimmedNote}`);
    }

    return lines.join("\n");
  }, [
    industry,
    note,
    options.industries,
    options.states,
    options.urgencies,
    selectedNeedLabels,
    state,
    urgency,
  ]);

  const whatsappHref =
    useMemo(
      () => createWhatsAppLink(whatsappNumber, message) ?? "/#contacto",
      [message, whatsappNumber],
    );

  const toggleNeed = (value: string) => {
    setNeeds((current) =>
      current.includes(value)
        ? current.filter((need) => need !== value)
        : [...current, value],
    );
  };

  return (
    <article className="surface-card-strong p-5 md:p-6">
      <p className="section-eyebrow">Brief rápido</p>
      <h3 className="mt-4 text-[1.55rem] font-semibold tracking-[-0.04em] text-[#171717]">
        Armá una consulta más clara.
      </h3>
      <p className="mt-3 text-[0.98rem] leading-7 text-[#4d4d4d]">
        Elegí lo principal y WhatsApp se abre con el contexto ordenado para empezar mejor la conversación.
      </p>

      <div className="mt-6 space-y-6">
        <div>
          <p className="section-eyebrow">Rubro</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {options.industries.map((option) => (
              <OptionButton
                key={option.value}
                option={option}
                selected={industry === option.value}
                onClick={setIndustry}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="section-eyebrow">Qué querés ordenar</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {options.needs.map((option) => (
              <OptionButton
                key={option.value}
                option={option}
                selected={needs.includes(option.value)}
                onClick={toggleNeed}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="section-eyebrow">Estado actual</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {options.states.map((option) => (
              <OptionButton
                key={option.value}
                option={option}
                selected={state === option.value}
                onClick={setState}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="section-eyebrow">Urgencia</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {options.urgencies.map((option) => (
              <OptionButton
                key={option.value}
                option={option}
                selected={urgency === option.value}
                onClick={setUrgency}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="section-eyebrow" htmlFor="brief-note">
            Detalle opcional
          </label>
          <textarea
            id="brief-note"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            rows={4}
            maxLength={240}
            placeholder="Contame en una frase qué querés resolver."
            className="mt-3 min-h-28 w-full resize-y rounded-[8px] bg-white p-4 text-[0.98rem] leading-7 text-[#171717] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] placeholder:text-[#8a8a8a]"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <WhatsAppButton href={whatsappHref}>
          Consultar por WhatsApp
        </WhatsAppButton>
      </div>
    </article>
  );
}
