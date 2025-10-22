"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/header";
import Link from "next/link";
import Footer from "@/components/Footer";

// Product images data
const productImages = [
  {
    src: "/products/Products-new/1 Inch Phat Hand bands.webp",
    title: "1 Inch Phat Hand Bands",
  },
  {
    src: "/products/Products-new/3D PVC Rubber Keytags.webp",
    title: "3D PVC Rubber Keytags",
  },
  {
    src: "/products/Products-new/Adjustable Bracelets.webp",
    title: "Adjustable Bracelets",
  },
  {
    src: "/products/Products-new/Color Coated Wristbands.webp",
    title: "Color Coated Wristbands",
  },
  {
    src: "/products/Products-new/Custom Numbering_ QR Printed Wristbands.webp",
    title: "Custom Numbering & QR Printed Wristbands",
  },
  {
    src: "/products/Products-new/Figured Watch Style Bracelets.webp",
    title: "Figured Watch Style Bracelets",
  },
  {
    src: "/products/Products-new/Glow in the dark ( Radium ) Wristbands.webp",
    title: "Glow In The Dark (Radium) Wristbands",
  },
  {
    src: "/products/Products-new/Luminous Ink Filled Glow in the dark Bracelets.webp",
    title: "Luminous Ink Filled Glow In The Dark Bracelets",
  },
  {
    src: "/products/Products-new/Metal Soft Enamel Keychain_Keytag.webp",
    title: "Metal Soft Enamel Keychain & Keytag",
  },
  {
    src: "/products/Products-new/PVC Injected Bracelets.webp",
    title: "PVC Injected Bracelets",
  },
  {
    src: "/products/Products-new/PVC Rubber Keychain_Key tags.webp",
    title: "PVC Rubber Keychain & Key Tags",
  },
  {
    src: "/products/Products-new/PVC_Silicone Rubber Keychains.webp",
    title: "PVC Silicone Rubber Keychains",
  },
  {
    src: "/products/Products-new/Segmented Color Bracelets.webp",
    title: "Segmented Color Bracelets",
  },
  {
    src: "/products/Products-new/Swirl mix color Bangles.webp",
    title: "Swirl Mix Color Bangles",
  },
];

export default function ProductsPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + productImages.length) % productImages.length
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % productImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Matching Landing Page */}
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              Explore Our Custom Silicone Creations
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Discover our wide range of premium silicone and PVC promotional
              products — from custom wristbands and bangles to keychains and
              more. With advanced manufacturing and precise craftsmanship, we
              bring your ideas to life with unmatched quality and detail.
              Whether for branding, events, or giveaways, our products are
              designed to impress and built to last. Contact our team to explore
              limitless customization possibilities tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productImages.map((product, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-offset-2"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.src}
                    alt={product.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: "center center" }}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Highlight Effect */}
                  <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-amber-300 transition-all duration-300" />
                </div>

                {/* Title Section */}
                <div className="bg-gradient-to-b from-white to-blue-200 h-full">
                  <div className="p-5">
                    <h3 className="font-bold text-base text-blue-900 leading-tight group-hover:text-blue-700 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view details
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900/95 via-black/95 to-blue-950/95 z-50 flex flex-col items-center justify-center p-6 animate-in fade-in duration-300">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-300/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-amber-300 transition-all duration-300 z-10 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-amber-300/20 hover:scale-110 shadow-lg"
            aria-label="Close lightbox"
          >
            <X className="h-7 w-7" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-amber-300 transition-all duration-300 z-10 bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-amber-300/20 hover:scale-110 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-amber-300 transition-all duration-300 z-10 bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-amber-300/20 hover:scale-110 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Main Content Container */}
          <div className="flex-1 flex flex-col items-center justify-center w-full max-w-7xl">
            {/* Image Container with Elegant Frame */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/10 animate-in zoom-in-95 duration-500 max-h-[70vh] flex items-center justify-center">
              <div className="relative max-w-full max-h-full overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={productImages[selectedIndex].src}
                  alt={productImages[selectedIndex].title}
                  className="max-w-full max-h-[65vh] w-auto h-auto object-contain"
                />
              </div>

              {/* Accent corners */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-300 rounded-tl-xl" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-300 rounded-tr-xl" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-300 rounded-bl-xl" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-300 rounded-br-xl" />
            </div>

            {/* Product Info */}
            <div className="mt-6 text-center bg-white/5 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/10 shadow-lg">
              <h3 className="text-white text-2xl font-bold mb-2">
                {productImages[selectedIndex].title}
              </h3>
              <div className="flex items-center justify-center gap-3 text-amber-300">
                <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" />
                <p className="text-sm font-semibold">
                  Product {selectedIndex + 1} of {productImages.length}
                </p>
                <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div
            className="w-full max-w-7xl mt-6 overflow-x-auto"
            style={{ scrollbarWidth: "thin" }}
          >
            <div
              className="flex gap-4 pb-4 px-4"
              style={{
                width: "max-content",
                minWidth: "100%",
                justifyContent:
                  productImages.length <= 10 ? "center" : "flex-start",
              }}
            >
              {productImages.map((product, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                    index === selectedIndex
                      ? "ring-4 ring-amber-300 scale-110 shadow-2xl"
                      : "opacity-40 hover:opacity-100 hover:scale-105 ring-2 ring-white/20"
                  }`}
                >
                  <img
                    src={product.src}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  {index === selectedIndex && (
                    <div className="absolute inset-0 bg-amber-300/20" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <Footer />
    </div>
  );
}
