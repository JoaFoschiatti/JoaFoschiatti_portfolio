import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Joaquín Sánchez Foschiatti — Ingeniería y desarrollo de software para negocios";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#0c1422",
          color: "#ffffff",
          padding: 48,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid rgba(255,255,255,.16)",
            borderRadius: 26,
            padding: 42,
            background: "linear-gradient(135deg, #111d30, #0c1422 62%)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  width: 48,
                  height: 48,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  background: "#d9ff77",
                  color: "#0c1422",
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                JF
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <span style={{ fontSize: 22, fontWeight: 650 }}>{profile.fullName}</span>
                <span style={{ color: "#8fd8cd", fontSize: 14, letterSpacing: ".12em", textTransform: "uppercase" }}>
                  Ingeniero en Sistemas
                </span>
              </div>
            </div>
            <span style={{ color: "rgba(255,255,255,.58)", fontSize: 17 }}>
              Rosario · Santa Fe · Argentina
            </span>
          </div>

          <div style={{ display: "flex", maxWidth: 1000, flexDirection: "column", gap: 18 }}>
            <div style={{ color: "#d9ff77", fontSize: 16, letterSpacing: ".18em", textTransform: "uppercase" }}>
              Sistemas · Webs · Automatizaciones
            </div>
            <div style={{ fontSize: 68, fontWeight: 620, lineHeight: 1.02, letterSpacing: "-.045em" }}>
              {profile.heroTitle}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "rgba(255,255,255,.62)", fontSize: 18 }}>
              Software pensado para el trabajo de todos los días.
            </span>
            <span style={{ color: "#d9ff77", fontSize: 18 }}>joafoschiatti.com ↗</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
