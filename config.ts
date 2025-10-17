const config = {
  // Basic site info
  domainName: "machwristbands.lk",
  appName: "Mach Wristbands:  Custom Silicone Wristbands Sri Lanka | Premium Rubber Hand bands at Low Cost.",
  appDescription: "Shop premium custom silicone wristbands in Sri Lanka at Mach Wristbands! Affordable rubber handbands, personalized designs, and unmatched quality. Perfect for events, promotions, and more!",
  
  // Company info
  companyInfo: {
    name: "Mach Wristbands Sri Lanka",
    address: {
      street: "148/4 Temple Rd", // Add your street address
      city: "Colombo",
      region: "Western Province",
      country: "Sri Lanka",
      postcode: "10400", // Add your postcode
    },
    contact: {
      phone: "+94 70 492 5375", // Add your phone number
      email: "machwristbands.lk@gmail.com", // Add your email
      whatsapp: "+94 70 492 5375", // Add your WhatsApp
    },
  },

  // Social media
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61560428199706", // Add your Facebook URL
    instagram: "https://www.instagram.com/machwristbands_lanka?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", // Add your Instagram URL
    twitter: "@MachWristbands",
  },

  // SEO defaults
  seo: {
    titleTemplate: "%s | Mach Wristbands Sri Lanka",
    defaultTitle: "Wristbands Sri Lanka | Custom Silicone Bands in Colombo",
    defaultDescription: "Leading wristband supplier in Sri Lanka. High-quality custom silicone wristbands for events & promotions. Best bulk prices with island-wide delivery.",
    defaultKeywords: [
      "wristbands",
      "wristbands sri lanka",
      "silicone wristbands colombo",
      "custom wristbands sri lanka",
      "event wristbands colombo",
      "bulk wristbands sri lanka",
      "promotional wristbands colombo",
    ],
    languageAlternates: [
      {
        hrefLang: "en",
        href: "https://machwristbands.lk",
      },
      // Add if you have Sinhala/Tamil versions
      // {
      //   hrefLang: "si",
      //   href: "https://si.machwristbands.lk",
      // },
    ],
  },

  // Business details
  business: {
    establishedYear: "2023", // Add your establishment year
    businessHours: {
      mon_fri: "9:00 AM - 6:00 PM",
      sat: "9:00 AM - 2:00 PM",
      sun: "Closed",
    },
    serviceAreas: [
      "Colombo",
      "Kandy",
      "Galle",
      "Jaffna",
      "Negombo",
      "Island-wide delivery available",
    ],
    features: [
      "Custom Design Service",
      "Bulk Orders",
      "Fast Delivery",
      "Quality Guarantee",
      "Best Price Promise",
    ],
  },

  // Analytics and tracking (if you use them)
  analytics: {
    googleAnalyticsId: "", // Add your GA ID
    googleTagManagerId: "", // Add your GTM ID
    facebookPixelId: "", // Add your FB Pixel ID
  },
};

export default config;