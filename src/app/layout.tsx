import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactLinks, profile, seo } from "@/data/portfolio";
import { createWhatsAppLink } from "@/lib/whatsapp";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: profile.siteUrl ? new URL(profile.siteUrl) : undefined,
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
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  alternates: profile.siteUrl
    ? {
        canonical: profile.siteUrl,
      }
    : undefined,
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
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-white text-[#171717]`}
    >
      <body className="min-h-full bg-white font-sans text-[#171717]">
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
            summary={profile.footerSummary}
          />
        </div>
      </body>
    </html>
  );
}
