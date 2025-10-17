import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import { getSEOTags } from "@/lib/seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = getSEOTags({
  title: "Buy Custom Silicone Wristbands in Sri Lanka | Best Prices",
  description:
    "Get premium custom silicone wristbands in Sri Lanka at unbeatable prices! High-quality, personalized rubber wristbands for events, promotions, and more.",
  canonicalUrlRelative: "/",
  keywords: [
    "Silicone wristbands Sri Lanka",
    "Custom wristbands Sri Lanka",
    "Handbands Srilanka",
    "Rubber wristbands",
    "Debossed wristbands",
    "Embossed wristbands",
    "Printed silicone wristbands",
    "Radium wristbands",
    "QR code wristbands",
    "Event wristbands",
    "Promotional wristbands",
    "Hospital ID wristbands",
    "Event identification bands",
    "Wristband suppliers Sri Lanka",
    "wristband print Sri Lanka",
  ],
  openGraph: {
    title: "Custom Silicone Wristbands | High-Quality & Affordable",
    description:
      "Order high-quality, custom silicone wristbands in Sri Lanka. Perfect for promotions, events, and fundraisers.",
    images: [
      {
        url: "/Mach-Wristband-OG-Logo.png",
        width: 1200,
        height: 630,
        alt: "Mach Wristbands Sri Lanka Logo",
      },
    ],
    type: "website",
    url: "https://machwristbands.lk/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Silicone Wristbands in Sri Lanka | Mach Wristbands",
    description:
      "Affordable custom silicone wristbands for events, charities, and promotions. Shop now!",
    images: "/Mach-Wristband-OG-Logo.png",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="VxeBOxrzphZuT3IxM9IzD5JoEkE3nmMwjq9kjQuhr9Q"
        />
        <meta
          name="google-site-verification"
          content="HTf79Ck0A0krKQhu0Z-PEp_GSRgALVQfmS0f4m72HK8"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mach Wristbands Sri Lanka",
              url: "https://machwristbands.lk",
              logo: "https://machwristbands.lk/Mach-Wristband-Logo.png",
              image: [
                "https://machwristbands.lk/Mach-Wristband-Logo.png",
                "https://machwristbands.lk/Mach-Wristband-OG-Logo.png",
                "https://machwristbands.lk/images/Galary/2-copy.webp",
                "https://machwristbands.lk/images/Galary/3-copy.webp",
              ],
              description:
                "Get premium custom silicone wristbands in Sri Lanka at unbeatable prices! High-quality, personalized rubber wristbands for events, promotions, and more.",
            }),
          }}
        />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://machwristbands.lk`} />

        {/* Site Favicon */}
        <link rel="icon" href="/Mach-Wristband-Logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/Mach-Wristband-Logo.png" />

        {/* Preload Montserrat Font for Faster Loading */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          as="style"
        />
        <meta name="author" content="Mach Wristbands Sri Lanka" />
      </head>

      <body className={montserrat.className}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
