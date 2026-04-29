import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Sistemas a medida — Joaquín Sánchez Foschiatti";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "#ffffff",
          color: "#171717",
          fontFamily: "sans-serif",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            borderRadius: "32px",
            border: "1px solid #ebebeb",
            padding: "54px",
            boxShadow:
              "rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 8px 24px -14px",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 26,
            }}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "999px",
                  background: "#0f766e",
                }}
              />
              <span>{profile.brandName}</span>
            </div>
            <span
              style={{
                color: "#0f766e",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Sistemas a medida
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 74,
                fontWeight: 600,
                lineHeight: 1.02,
                letterSpacing: "-0.06em",
                maxWidth: "92%",
              }}
            >
              Ordená un proceso real en un sistema simple de usar.
            </div>
            <div
              style={{
                maxWidth: "82%",
                fontSize: 26,
                lineHeight: 1.42,
                color: "#4d4d4d",
              }}
            >
              Diseño y desarrollo sistemas a medida para ordenar stock, turnos, caja, pedidos, reportes, documentación y automatizaciones.
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              "Stock",
              "Turnos",
              "Caja",
              "Pedidos",
              "Reportes",
              "WhatsApp",
              "Pagos",
            ].map((badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "999px",
                  padding: "10px 18px",
                  background: "rgba(15, 118, 110, 0.08)",
                  color: "#32524f",
                  fontSize: 18,
                }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
