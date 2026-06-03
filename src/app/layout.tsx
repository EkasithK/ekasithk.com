import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { content } from "@/data/content";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const { meta, contact } = content;

export const metadata: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: {
    default: `${meta.fullName} — ${meta.tagline}`,
    template: `%s · ${meta.fullName}`,
  },
  description: meta.description,
  keywords: meta.keywords,
  authors: [{ name: meta.fullName, url: meta.siteUrl }],
  creator: meta.fullName,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: meta.siteUrl,
    title: `${meta.fullName} — ${meta.tagline}`,
    description: meta.description,
    siteName: meta.fullName,
    images: [{ url: content.media.profilePhoto, width: 1080, height: 1350, alt: meta.fullName }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${meta.fullName} — ${meta.tagline}`,
    description: meta.description,
    images: [content.media.profilePhoto],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: meta.fullName,
  alternateName: meta.handle,
  url: meta.siteUrl,
  image: `${meta.siteUrl}${content.media.profilePhoto}`,
  jobTitle: "Civil Engineer · Digital-Twin & AI Developer · Researcher",
  email: contact.email,
  address: { "@type": "PostalAddress", addressLocality: "Bangkok", addressCountry: "TH" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Kasetsart University" },
  knowsAbout: meta.keywords,
  sameAs: contact.socials
    .filter((s) => s.url.startsWith("http"))
    .map((s) => s.url),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jetbrains.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
