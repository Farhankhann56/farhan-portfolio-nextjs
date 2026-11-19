import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site, about } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const title = `${site.name} | ${site.role}`;
const description =
  "Farhan Khan is a full-stack developer building web apps and AI-powered tools with React, Node.js, PHP and Python.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ["Farhan Khan", "Full-Stack Developer", "React", "Next.js", "Node.js", "PHP", "Python", "AI", "Peshawar", "Pakistan"],
  authors: [{ name: site.name }],
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og.jpg"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#faf9f6" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: about.summary,
    email: `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Peshawar", addressCountry: "PK" },
    sameAs: [site.social.github, site.social.linkedin],
  };
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
