import { ImageResponse } from "next/og";
import { featuredProjects, getProjectBySlug, profile } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Caso de proyecto desarrollado por Joaquín Sánchez Foschiatti";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function OpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return new Response("Project not found", { status: 404 });

  const accent =
    project.slug === "comanda"
      ? "#efb14c"
      : project.slug === "turnos-online"
        ? "#6f8dff"
        : "#66d0c1";

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#0c1422", color: "#fff", padding: 50, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "space-between", border: "1px solid rgba(255,255,255,.16)", borderRadius: 26, padding: 44, background: "linear-gradient(135deg, #111d30, #0c1422 68%)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 22, fontWeight: 650 }}>{profile.fullName}</span>
            <span style={{ color: accent, fontSize: 16, letterSpacing: ".15em", textTransform: "uppercase" }}>{project.status}</span>
          </div>
          <div style={{ display: "flex", maxWidth: 1040, flexDirection: "column", gap: 17 }}>
            <span style={{ color: accent, fontSize: 18, letterSpacing: ".16em", textTransform: "uppercase" }}>{project.category}</span>
            <div style={{ fontSize: 90, fontWeight: 620, lineHeight: .94, letterSpacing: "-.055em" }}>{project.name}</div>
            <div style={{ maxWidth: 920, color: "rgba(255,255,255,.65)", fontSize: 23, lineHeight: 1.35 }}>{project.description}</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {project.modules.slice(0, 6).map((module) => (
              <span key={module} style={{ display: "flex", border: "1px solid rgba(255,255,255,.16)", borderRadius: 999, padding: "8px 14px", color: "rgba(255,255,255,.72)", fontSize: 15 }}>{module}</span>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
