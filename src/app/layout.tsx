import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackToTopButton from "@/components/BackToTopButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { contactLinks, profile, seo } from "@/data/portfolio";
import { createWhatsAppLink } from "@/lib/whatsapp";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f766e",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${profile.fullName}`,
  },
  description: seo.description,
  applicationName: profile.brandName,
  keywords: [
    "webs comerciales",
    "sistemas a medida",
    "automatizaciones",
    "desarrollo web",
    "sistemas de gestión",
    "portfolio",
    "gestión de stock",
    "turnos online",
    "caja",
    "pedidos",
    "Vercel",
    "Rosario",
    "pymes",
    "comercios",
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
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full text-[var(--color-foreground)]`}
    >
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
          <main
            id="contenido"
            className="site-main flex min-h-[calc(100vh-72px)] flex-col"
          >
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
        <BackToTopButton />
        <StickyMobileCTA whatsappHref={whatsappHref} />
      </body>
    </html>
  );
}
