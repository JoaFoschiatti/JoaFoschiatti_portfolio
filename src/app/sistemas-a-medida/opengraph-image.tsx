import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sistemas a medida — Joaquín Sánchez Foschiatti";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#0c1422", color: "#fff", padding: 50, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "space-between", border: "1px solid rgba(255,255,255,.16)", borderRadius: 26, padding: 44, background: "linear-gradient(135deg, #11253a, #0c1422 68%)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 24, fontWeight: 650 }}>{profile.fullName}</span>
            <span style={{ color: "#8fd8cd", fontSize: 16, letterSpacing: ".16em", textTransform: "uppercase" }}>Sistemas a medida</span>
          </div>
          <div style={{ display: "flex", maxWidth: 1000, flexDirection: "column", gap: 20 }}>
            <div style={{ color: "#d9ff77", fontSize: 17, letterSpacing: ".17em", textTransform: "uppercase" }}>Proceso real → Herramienta propia</div>
            <div style={{ fontSize: 76, fontWeight: 620, lineHeight: 1, letterSpacing: "-.05em" }}>
              Una herramienta propia para una forma de trabajar propia.
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {["Stock", "Turnos", "Caja", "Pedidos", "Reportes", "Pagos"].map((item) => (
              <span key={item} style={{ display: "flex", border: "1px solid rgba(255,255,255,.16)", borderRadius: 999, padding: "8px 14px", color: "rgba(255,255,255,.72)", fontSize: 15 }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
