import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactLinks, profile, seo } from "@/data/portfolio";
import { createWhatsAppLink } from "@/lib/whatsapp";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${profile.fullName}`,
  },
  description: seo.description,
  applicationName: profile.brandName,
  keywords: [
    "desarrollo web",
    "sistemas de gestión",
    "portfolio",
    "POS",
    "stock",
    "turnos",
    "automatización",
    "Vercel",
    "Rosario",
    "Santa Fe",
    "Argentina",
  ],
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: profile.siteUrl,
    siteName: profile.brandName,
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: `${profile.siteUrl}/opengraph-image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`${profile.siteUrl}/twitter-image`],
  },
  alternates: {
    canonical: profile.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappHref =
    createWhatsAppLink(profile.whatsappNumber, contactLinks.whatsappMessage) ??
    "/#contacto";

  return (
    <html lang="es" className="h-full text-[var(--color-foreground)]">
      <body className="min-h-full font-sans text-[var(--color-foreground)]">
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <div className="page-shell">
          <Header
            brandName={profile.brandName}
            navigation={profile.navigation}
            whatsappHref={whatsappHref}
          />
          <main id="contenido" className="flex min-h-[calc(100vh-72px)] flex-col">
            {children}
          </main>
          <Footer
            name={profile.fullName}
            location={profile.location}
            email={contactLinks.email}
            githubUrl={contactLinks.github}
            instagramUrl={contactLinks.instagram}
            summary={profile.footerSummary}
          />
        </div>
      </body>
    </html>
  );
}
