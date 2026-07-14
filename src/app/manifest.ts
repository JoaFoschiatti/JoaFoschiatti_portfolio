import type { MetadataRoute } from "next";
import { profile } from "@/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.fullName,
    short_name: profile.brandName,
    description: profile.heroSubtitle,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f3ed",
    theme_color: "#0c1422",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
