import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Altmuenster am Traunsee | Salzkammergut Tourism",
  description:
    "Discover Altmuenster am Traunsee — a serene lakeside gem in Upper Austria's Salzkammergut. Swimming, hiking, culture, and alpine beauty on Austria's deepest lake.",
  keywords: [
    "Altmuenster",
    "Traunsee",
    "Salzkammergut",
    "Austria tourism",
    "Lake Traunsee",
    "Naturpark Attersee-Traunsee",
    "Upper Austria",
  ],
  authors: [{ name: "Altmuenster am Traunsee" }],
  openGraph: {
    title: "Altmuenster am Traunsee | Where the Alps Meet the Deepest Lake",
    description:
      "Plan your visit to Altmuenster — swimming, hiking, culture, and breathtaking nature on the western shore of Lake Traunsee.",
    type: "website",
    locale: "en_US",
    siteName: "Altmuenster am Traunsee",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lake Traunsee with alpine mountains in Salzkammergut, Austria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Altmuenster am Traunsee",
    description:
      "Discover serene lakeside beauty in Austria's Salzkammergut region.",
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
  name: "Altmuenster am Traunsee",
  description:
    "A serene lakeside destination in Upper Austria's Salzkammergut, on the western shore of Lake Traunsee within Naturpark Attersee-Traunsee.",
  url: "https://www.altmuenster.at",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.9014,
    longitude: 13.7514,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Marktstraße 21",
    addressLocality: "Altmuenster",
    postalCode: "4813",
    addressCountry: "AT",
  },
  telephone: "+43-7612-87611",
  email: "gemeinde@altmuenster.ooe.gv.at",
  touristType: ["Nature tourism", "Cultural tourism", "Family tourism"],
  containedInPlace: {
    "@type": "Place",
    name: "Salzkammergut",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Upper Austria",
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
    <html lang="en" suppressHydrationWarning>
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