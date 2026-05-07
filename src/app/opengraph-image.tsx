import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

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
          padding: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            borderRadius: "32px",
            border: "1px solid #ebebeb",
            padding: "44px",
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
              fontSize: 28,
            }}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "999px",
                  background: "#0072f5",
                }}
              />
              <span>{profile.brandName}</span>
            </div>
            <span style={{ color: "#666666" }}>Rosario, Santa Fe, Argentina</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                fontSize: 56,
                fontWeight: 600,
                lineHeight: 1.03,
                letterSpacing: "-0.06em",
                maxWidth: "92%",
              }}
            >
              {profile.heroTitle}
            </div>
            <div
              style={{
                maxWidth: "86%",
                fontSize: 26,
                lineHeight: 1.3,
                color: "#4d4d4d",
              }}
            >
              {profile.heroSubtitle}
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {profile.heroBadges.slice(0, 6).map((badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "999px",
                  padding: "8px 14px",
                  background: "#fafafa",
                  color: "#666666",
                  fontSize: 16,
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
