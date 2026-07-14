import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import BackToTopButton from "@/components/BackToTopButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactLinks, profile, seo } from "@/data/portfolio";
import "./globals.css";

const socialImageAlt =
  "Joaquín Sánchez Foschiatti — Ingeniería y desarrollo de software para negocios";

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

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c1422",
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
  authors: [{ name: profile.fullName, url: profile.siteUrl }],
  creator: profile.fullName,
  publisher: profile.fullName,
  keywords: [
    "webs comerciales",
    "sistemas a medida",
    "automatizaciones",
    "desarrollo web",
    "sistemas de gestión",
    "ingeniero en sistemas",
    "gestión de stock",
    "turnos online",
    "caja",
    "pedidos",
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
        alt: socialImageAlt,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [{ url: `${profile.siteUrl}/twitter-image`, alt: socialImageAlt }],
  },
  alternates: { canonical: profile.siteUrl },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${profile.siteUrl}/#person`,
      name: profile.fullName,
      url: profile.siteUrl,
      image: `${profile.siteUrl}/projects/quien-esta-detras.png`,
      jobTitle: "Ingeniero en Sistemas",
      email: `mailto:${profile.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rosario",
        addressRegion: "Santa Fe",
        addressCountry: "AR",
      },
      sameAs: [contactLinks.github, contactLinks.instagram],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${profile.siteUrl}/#service`,
      name: profile.brandName,
      url: profile.siteUrl,
      description: seo.description,
      founder: { "@id": `${profile.siteUrl}/#person` },
      areaServed: { "@type": "Country", name: "Argentina" },
      serviceType: [
        "Sistemas de gestión a medida",
        "Desarrollo web",
        "Automatizaciones",
        "Mantenimiento de software",
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-AR"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}
    >
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Header brandName={profile.brandName} navigation={profile.navigation} />
        <main id="contenido" tabIndex={-1}>
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
        <BackToTopButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
