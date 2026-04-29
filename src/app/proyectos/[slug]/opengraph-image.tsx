import { ImageResponse } from "next/og";
import { featuredProjects, getProjectBySlug, profile } from "@/data/portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Caso de proyecto desarrollado por Joaquín Sánchez Foschiatti";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return new Response("Project not found", { status: 404 });
  }

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
              {project.category}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 78,
                fontWeight: 600,
                lineHeight: 1.02,
                letterSpacing: "-0.06em",
                maxWidth: "94%",
              }}
            >
              {project.name}
            </div>
            <div
              style={{
                maxWidth: "82%",
                fontSize: 26,
                lineHeight: 1.42,
                color: "#4d4d4d",
              }}
            >
              {project.description}
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {project.modules.slice(0, 6).map((module) => (
              <div
                key={module}
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
                {module}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
