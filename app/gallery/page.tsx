"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/galleryImages";
import Header from "@/components/header";

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-gray-300">
      {/* Header - Matching Landing Page */}
      <Header />

      {/* Gallery Hero */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">
              Explore Custom Silicone Wristband Designs
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-800">
              Premium Bracelets for Every Event
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-left">
              Our custom silicone wristbands have become the go-to choice for a
              wide variety of customers across Sri Lanka. From preschools,
              schools, colleges, and universities to campus societies and clubs,
              thousands of students use our silicone rubber handbands for big
              matches, sports meets, anniversaries, vehicle parades, fundraising
              events, charity walks, and alumni gatherings. Many tuition class
              teachers also rely on our debossed wristbands as an effective
              branding and marketing tool to connect with their students. Beyond
              education, we are trusted by small businesses, garment and apparel
              companies, and large corporates for promotional wristbands and
              event giveaways, while charity organizations, blood donation
              drives, and awareness campaigns continue to choose us for durable,
              affordable, and customizable handbands that spread messages and
              create lasting impact. General Specification of sample designs
              reflects the creativity, vibrant colors, and diverse customization
              options that make Mach Wristbands Lanka the preferred wristband
              and promotional product supplier for communities, institutions,
              and businesses nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-offset-2 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-semibold text-sm line-clamp-2">
                    {image.title}
                  </p>
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
                <Image
                  src={galleryImages[selectedIndex].src || "/placeholder.svg"}
                  alt={galleryImages[selectedIndex].alt}
                  width={1820}
                  height={1080}
                  className="max-w-full max-h-[75vh] w-auto h-auto object-contain"
                  quality={100}
                  priority
                  unoptimized
                />
              </div>

              {/* Accent corners */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-300 rounded-tl-xl" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-300 rounded-tr-xl" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-300 rounded-bl-xl" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-300 rounded-br-xl" />
            </div>

            {/* Image Info */}
            {/* <div className="mt-4 text-center bg-white/5 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/10 shadow-lg">
              <h3 className="text-white text-2xl font-bold mb-2">
                {galleryImages[selectedIndex].title}
              </h3>
              <div className="flex items-center justify-center gap-3 text-amber-300">
                <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" />
                <p className="text-sm font-semibold">
                  Image {selectedIndex + 1} of {galleryImages.length}
                </p>
                <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" />
              </div>
            </div> */}
          </div>

          {/* Thumbnail Strip */}
          <div
            className="w-full max-w-7xl mt-4 overflow-x-auto overflow-y-hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div
              className="flex gap-4 pb-4 px-4"
              style={{
                width: "max-content",
                minWidth: "100%",
                justifyContent:
                  galleryImages.length <= 10 ? "center" : "flex-start",
              }}
            >
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                    index === selectedIndex
                      ? "ring-4 ring-amber-300 scale-110 shadow-2xl"
                      : "opacity-40 hover:opacity-100 hover:scale-105 ring-2 ring-white/20"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={80}
                    height={80}
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
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Ready to Create Your Custom Wristbands?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Get a free quote and bring your vision to life with premium quality
            silicone wristbands
          </p>
          <Link
            href="https://wa.me/+94704925375"
            target="_blank"
            className="inline-block bg-amber-300 font-bold text-black px-8 py-4 rounded-lg shadow-md hover:bg-amber-400 transition-colors text-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
