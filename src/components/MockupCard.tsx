import type { ReactNode } from "react";
import type { MockupVariant } from "@/data/portfolio";

type MockupCardProps = {
  variant: MockupVariant;
  size?: "hero" | "compact" | "large";
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Panel({
  title,
  value,
  tone = "neutral",
}: {
  title: string;
  value: string;
  tone?: "neutral" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <div
      className={
        dark
          ? "rounded-[10px] bg-[#171717] p-4 text-white"
          : "rounded-[10px] bg-[#fafafa] p-4 text-[#171717]"
      }
    >
      <p
        className={
          dark
            ? "font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/70"
            : "font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#666666]"
        }
      >
        {title}
      </p>
      <p className="mt-3 break-words text-[1rem] font-semibold tracking-[-0.03em]">
        {value}
      </p>
    </div>
  );
}

function MetaPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex max-w-full items-center truncate rounded-full bg-white px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[#666666] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
      {children}
    </span>
  );
}

export default function MockupCard({
  variant,
  size = "compact",
}: MockupCardProps) {
  const outerClassName = cn(
    "surface-card-strong box-border max-w-full min-w-0 overflow-hidden p-4 md:p-5",
    size === "hero" && "min-h-[420px]",
    size === "large" && "min-h-[360px]",
  );

  if (variant === "operations-overview") {
    return (
      <div className={outerClassName}>
        <div className="subtle-grid rounded-[10px] bg-[#fafafa] p-4 md:p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="status-dot text-[#171717]" />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#666666]">
                Del problema al sistema funcionando
              </span>
            </div>
            <MetaPill>Preview</MetaPill>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <Panel title="Mesa 12" value="Pedido abierto • Cocina en curso" />
            <Panel title="Turno confirmado" value="Martes 16:30 • Consulta inicial" />
            <Panel title="Stock bajo" value="Cristales 1.67 • Reposición sugerida" />
            <Panel title="Vencimiento" value="DDJJ municipal • 3 días" tone="dark" />
          </div>
          <div className="mt-4 grid gap-3 2xl:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[10px] bg-white p-4 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#666666]">
                  Flujo operativo
                </p>
                <MetaPill>UI preview</MetaPill>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ["Web comercial", "Capta consultas por WhatsApp y formulario"],
                  ["Sistema interno", "Ordena ventas, turnos, stock o documentos"],
                  ["Deploy", "Vercel, AWS, base de datos y mantenimiento"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-[8px] bg-[#fafafa] px-3 py-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]"
                  >
                    <p className="text-sm font-medium text-[#171717]">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#666666]">{description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[10px] bg-white p-4 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#666666]">
                Operación diaria
              </p>
              <div className="mt-4 space-y-3">
                {[
                  ["Caja", "al día"],
                  ["Clientes", "historial"],
                  ["Reportes", "listos"],
                  ["Bots", "en revisión"],
                ].map(([label, status]) => (
                  <div key={label} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <span className="min-w-0 text-sm text-[#171717]">{label}</span>
                    <span className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#666666] whitespace-nowrap">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "comanda") {
    return (
      <div className={outerClassName}>
        <div className="rounded-[10px] bg-[#fafafa] p-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#666666]">
              Comanda
            </p>
            <MetaPill>POS</MetaPill>
          </div>
          <div className="mt-4 grid gap-3 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-3">
              {[
                ["Mesa 4", "2 platos • esperando cuenta"],
                ["Mesa 7", "pedido enviado a cocina"],
                ["Retiro", "orden lista para entregar"],
              ].map(([title, detail]) => (
                <div
                  key={title}
                  className="rounded-[8px] bg-white px-3 py-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]"
                >
                  <p className="text-sm font-medium text-[#171717]">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-[#666666]">{detail}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[8px] bg-white p-4 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-[#171717]">Pedido activo</p>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#666666]">
                  Cocina
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ["Milanesa napolitana", "2", "en preparación"],
                  ["Papas fritas", "1", "lista"],
                  ["Bebida", "2", "pendiente de cobro"],
                ].map(([item, qty, state]) => (
                  <div
                    key={item}
                    className="grid grid-cols-[1fr_auto] gap-3 rounded-[8px] bg-[#fafafa] px-3 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-[#171717]">{item}</p>
                      <p className="mt-1 text-sm text-[#666666]">{state}</p>
                    </div>
                    <span className="font-mono text-[0.75rem] text-[#666666]">{qty}x</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Panel title="Caja" value="$ 84.500" />
                <Panel title="QR / Web" value="24 pedidos" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "optica-focus") {
    return (
      <div className={outerClassName}>
        <div className="rounded-[10px] bg-[#fafafa] p-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#666666]">
              Óptica Focus
            </p>
            <MetaPill>Gestión y stock</MetaPill>
          </div>
          <div className="mt-4 grid gap-3">
            <div className="rounded-[8px] bg-white p-4 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-[#171717]">Resumen de stock</p>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#666666]">
                  Desktop
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ["Armazón acetato", "42 unidades"],
                  ["Cristales blue cut", "stock bajo"],
                  ["Lentes de sol", "reposicionados"],
                ].map(([name, value]) => (
                  <div key={name} className="flex items-center justify-between">
                    <span className="text-sm text-[#171717]">{name}</span>
                    <span className="text-sm text-[#666666]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Panel title="Cuenta corriente" value="12 clientes activos" />
              <Panel title="Backups" value="Último respaldo: hoy 06:00" tone="dark" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "turnos-online") {
    const weeklySchedule = [
      {
        hour: "09:00",
        entries: ["-", "Consulta", "-", "Control", "-"],
      },
      {
        hour: "11:00",
        entries: ["Corte", "-", "Consulta", "-", "Seguimiento"],
      },
      {
        hour: "16:30",
        entries: ["-", "Nuevo paciente", "-", "Cobrado", "-"],
      },
    ];

    return (
      <div className={outerClassName}>
        <div className="box-border max-w-full min-w-0 rounded-[10px] bg-[#fafafa] p-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#666666]">
              Turnos online
            </p>
            <MetaPill>SaaS</MetaPill>
          </div>
          <div className="mt-4 box-border max-w-full min-w-0 rounded-[8px] bg-white p-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] sm:p-4">
            <div className="grid gap-2 md:hidden">
              {[
                ["09:00", "Consulta"],
                ["11:00", "Corte"],
                ["16:30", "Nuevo paciente"],
              ].map(([hour, label]) => (
                <div
                  key={`${hour}-${label}`}
                  className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-[7px] bg-[#fafafa] px-3 py-2.5"
                >
                  <span className="font-mono text-[0.68rem] text-[#666666]">{hour}</span>
                  <span className="truncate text-sm text-[#171717]">{label}</span>
                </div>
              ))}
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-[54px_repeat(5,minmax(0,1fr))] gap-1.5 text-[0.62rem] uppercase tracking-[0.12em] text-[#666666] lg:gap-2 lg:text-[0.68rem] lg:tracking-[0.14em]">
                <span className="min-w-0">Hora</span>
                {["Lun", "Mar", "Mié", "Jue", "Vie"].map((day) => (
                  <span key={day} className="min-w-0 text-center">
                    {day}
                  </span>
                ))}
              </div>
              <div className="mt-2.5 grid gap-1.5 lg:mt-3 lg:gap-2">
                {weeklySchedule.map((slot) => (
                  <div
                    key={slot.hour}
                    className="grid grid-cols-[54px_repeat(5,minmax(0,1fr))] gap-1.5 lg:gap-2"
                  >
                    <span className="min-w-0 font-mono text-[0.68rem] text-[#666666] lg:text-[0.72rem]">
                      {slot.hour}
                    </span>
                    {slot.entries.map((entry, index) => (
                      <div
                        key={`${slot.hour}-${index}`}
                        className={
                          entry === "-"
                            ? "min-w-0 overflow-hidden rounded-[7px] bg-[#fafafa] px-1 py-1.5 text-[0.62rem] text-transparent lg:px-2 lg:py-2 lg:text-xs"
                            : "min-w-0 overflow-hidden rounded-[7px] bg-[#fafafa] px-1 py-1.5 text-[0.62rem] text-[#171717] text-ellipsis whitespace-nowrap lg:px-2 lg:py-2 lg:text-xs"
                        }
                      >
                        {entry}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Panel title="Clientes" value="Historial centralizado" />
              <Panel title="Recordatorios" value="WhatsApp" />
              <Panel title="Pagos" value="Mercado Pago" tone="dark" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={outerClassName}>
      <div className="rounded-[10px] bg-[#fafafa] p-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#666666]">
            CumpliRos
          </p>
          <MetaPill>MVP</MetaPill>
        </div>
        <div className="mt-4 grid gap-3">
          <div className="rounded-[8px] bg-white p-4 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#171717]">Próximos vencimientos</p>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#666666]">
                Semáforo
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["DDJJ municipal", "48 hs", "urgente"],
                ["Renovación de habilitación", "7 días", "seguimiento"],
                ["Seguro del local", "12 días", "adjuntar póliza"],
              ].map(([title, due, state]) => (
                <div
                  key={title}
                  className="rounded-[8px] bg-[#fafafa] px-3 py-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-[#171717]">{title}</p>
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#666666]">
                      {due}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[#666666]">{state}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Panel title="Documentación" value="Evidencias y checklist" />
            <Panel title="Colaboración" value="Dueño • contador • gestor" tone="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
