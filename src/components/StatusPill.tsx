const STATUS_VARIANTS: Record<string, { className?: string; live?: boolean }> =
  {
    "En uso real": { live: true },
    "Próximo a producción": { className: "status-pill-amber" },
    "Demo funcional": { className: "status-pill-blue" },
  };

type StatusPillProps = {
  status: string;
};

export default function StatusPill({ status }: StatusPillProps) {
  const variant = STATUS_VARIANTS[status];

  return (
    <span
      className={[
        "status-pill",
        variant?.className,
        variant?.live ? "status-pill-live" : null,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="status-dot" aria-hidden />
      {status}
    </span>
  );
}
