import type { Metadata } from "next";
import config from "../config";

// Extend Metadata type with optional properties like canonicalUrlRelative and extraTags
export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, string>;
} = {}) => {
  return {
    title:
      title ||
      "Wristbands Sri Lanka | Mach Wristbands - Custom Silicone Bands Colombo",
    description:
      description ||
      "Leading wristband supplier in Sri Lanka. High-quality custom silicone wristbands in Colombo. Best prices for bulk orders. Island-wide delivery for events, promotions & corporate needs. Order now!",
    keywords: keywords || [
      "wristbands Sri Lanka",
      "wristbands Colombo",
      "silicone wristbands Colombo",
      "wristband seller Sri Lanka",
      "buy wristbands Sri Lanka",
      "event wristbands Colombo",
      "bulk wristbands Sri Lanka",
      "custom wristbands Colombo",
      "promotional wristbands Sri Lanka",
      "rubber wristbands Sri Lanka",
      "concert wristbands Sri Lanka",
      "festival wristbands Colombo",
      "corporate wristbands Sri Lanka",
      "school wristbands Sri Lanka",
      "sports wristbands Colombo",
      "Silicone Wristbands Sri Lanka",
      "Custom Wristbands for Schools",
      "hand bands",
      "Wristbands for Events in Sri Lanka",
      "School Wristbands Sri Lanka",
      "rubber watch bands 20mm",
      "University Wristbands Sri Lanka",
      "kandurata wristband",
      "bracelet price in sri lanka",
      "Brand Promotional Wristbands Sri Lanka",
      "rubber strap 20mm watch",
      "orit apparels",
      "Affordable Wristbands Sri Lanka",
      "Silicone Wristbands for Alumni",
      "Event Wristbands in Colombo",
      "mas active sleekline",
      "WhatsApp Contact for Wristbands Sri Lanka",
      "Sri Lanka Wristband Suppliers",
      "Wristband Printing Services Sri Lanka",
      "wrist bands",
      "wristbands",
      "rubber strap 20mm watch",
      "Quality Silicone Wristbands",
      "bands in sri lanka",
    ],
    applicationName: "Mach Wristbands Sri Lanka",
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? `https://${config.domainName}/`
        : "http://localhost:3000/"
    ),
    openGraph: {
      title:
        openGraph?.title ||
        "Wristbands Sri Lanka | Buy Custom Silicone Bands in Colombo",
      description:
        openGraph?.description ||
        "Sri Lanka's trusted wristband supplier. Custom silicone wristbands for events & promotions in Colombo. Island-wide delivery. Best bulk prices guaranteed.",
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: "Mach Wristbands Sri Lanka",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `https://${config.domainName}/images/Mach-Wristband-OG-Logo.png`,
          width: 1200,
          height: 630,
          alt: "Best Wristbands in Sri Lanka - Mach Wristbands Colombo",
        },
      ],
    },
    twitter: {
      title: "Wristbands Sri Lanka | Custom Silicone Bands in Colombo",
      description:
        "Leading supplier of custom wristbands in Sri Lanka. Best prices for events & promotions. Island-wide delivery.",
      card: "summary_large_image",
      images: [
        `https://${config.domainName}/images/Mach-Wristband-OG-Logo.png`,
      ],
    },

    // Handle canonicalUrlRelative if provided
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    // Include any extra tags
    ...extraTags,
  };
};

// Function to render structured data (Schema tags)
export const renderSchemaTags = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          name: "Mach Wristbands Sri Lanka",
          description:
            "Leading wristband supplier in Sri Lanka offering custom silicone wristbands for events, promotions, and corporate needs. Best bulk prices with island-wide delivery.",
          image: `https://${config.domainName}/images/product-image.png`,
          url: `https://${config.domainName}/`,
          address: {
            "@type": "PostalAddress",
            addressCountry: "Sri Lanka",
            addressRegion: "Western Province",
            addressLocality: "Colombo",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "6.9271",
            longitude: "79.8612",
          },
          priceRange: "LKR",
          areaServed: ["Colombo", "Kandy", "Galle", "Jaffna", "Sri Lanka"],
          brand: {
            "@type": "Brand",
            name: "Mach Wristbands",
            slogan: "Sri Lanka's Premium Wristband Supplier",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Available Wristbands",
            itemListElement: [
              {
                "@type": "Product",
                name: "Custom Silicone Wristband",
                description:
                  "Personalized silicone wristbands for events, promotions, and corporate branding.",
                image: `https://${config.domainName}/images/wristband-sample.png`,
                offers: {
                  "@type": "Offer",
                  priceCurrency: "LKR",
                  price: "500",
                  availability: "http://schema.org/InStock",
                  url: `https://${config.domainName}/products`,
                },
              },
            ],
          },
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "4.8",
              bestRating: "5",
            },
            author: {
              "@type": "Person",
              name: "Satisfied Customer",
            },
          },
        }),
      }}
    />
  );
};
