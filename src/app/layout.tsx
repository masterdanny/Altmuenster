import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a3d62" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1419" },
  ],
};

export const metadata: Metadata = {
  title: "Altmünster am Traunsee | Salzkammergut",
  description:
    "Entdecken Sie Altmünster am Traunsee — ein ruhiges Seejuwel im Salzkammergut in Oberösterreich. Baden, Wandern, Kultur und alpine Natur am tiefsten See Österreichs.",
  keywords: [
    "Altmünster",
    "Traunsee",
    "Salzkammergut",
    "Österreich Urlaub",
    "Lake Traunsee",
    "Naturpark Attersee-Traunsee",
    "Oberösterreich",
  ],
  authors: [{ name: "Altmünster am Traunsee" }],
  openGraph: {
    title: "Altmünster am Traunsee | Wo die Alpen auf den tiefsten See treffen",
    description:
      "Altmünster am Traunsee entdecken — Baden, Wandern, Kultur und alpine Natur am westlichen Ufer des Traunsees.",
    type: "website",
    locale: "de_AT",
    siteName: "Altmünster am Traunsee",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Traunsee mit Alpengipfeln im Salzkammergut, Österreich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Altmünster am Traunsee",
    description:
      "Ruhige Seeidylle im Salzkammergut in Oberösterreich.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Altmünster am Traunsee",
  description:
    "Ein ruhiges Seeziel im Salzkammergut in Oberösterreich, am westlichen Ufer des Traunsees im Naturpark Attersee-Traunsee.",
  url: "https://www.altmuenster.at",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.9014,
    longitude: 13.7514,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Marktstraße 21",
    addressLocality: "Altmünster",
    postalCode: "4813",
    addressCountry: "AT",
  },
  telephone: "+43-7612-87611",
  email: "gemeinde@altmuenster.ooe.gv.at",
  touristType: ["Naturtourismus", "Kulturtourismus", "Familientourismus"],
  containedInPlace: {
    "@type": "Place",
    name: "Salzkammergut",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Oberösterreich",
      addressCountry: "AT",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}