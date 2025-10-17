"use client";

import React, { useEffect, useRef } from "react";

export default function GallerySlider() {
  const animationRef = useRef(null);

  const galleryImages = [
    {
      id: 1,
      src: "/Final-Web-Images/Images/Gallery Images/aiesec-event-wristband.webp",
      alt: "BEST Wristbands",
    },
    {
      id: 2,
      src: "/Final-Web-Images/Images/Gallery Images/brandix-debossed-printed-hand-bands.webp",
      alt: "Brandix Debossed Printed Hand Bands",
    },
    {
      id: 3,
      src: "/Final-Web-Images/Images/Gallery Images/debossed-ink-filled-campus-bands.webp",
      alt: "Jepura XTREME",
    },
    {
      id: 4,
      src: "/Final-Web-Images/Images/Gallery Images/corporate-deboss-handbands.webp",
      alt: "Corporate Deboss Handbands",
    },
    {
      id: 5,
      src: "/Final-Web-Images/Images/Gallery Images/korean-deboss-hand-bands.webp",
      alt: "Korean Deboss Hand Bands",
    },
    {
      id: 6,
      src: "/Final-Web-Images/Images/Gallery Images/tuition-class-marketing-bands.webp",
      alt: "Tuition Class Marketing Bands",
    },
    {
      id: 7,
      src: "/Final-Web-Images/Images/Gallery Images/printed-rubber-wristbands.webp",
      alt: "Nasa theme printed rubber wristbands",
    },
  ];

  // Triple the images for seamless infinite scroll
  const tripleImages = [...galleryImages, ...galleryImages, ...galleryImages];

  useEffect(() => {
    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 1.5; // pixels per frame

    const animate = () => {
      if (animationRef.current) {
        scrollPosition += scrollSpeed;

        // Calculate the width of one set of images
        // 7 images * (320px width + 24px gap) = 2408px
        const oneSetWidth = galleryImages.length * (320 + 24);

        // Seamlessly reset when one set has passed
        if (scrollPosition >= oneSetWidth) {
          scrollPosition = scrollPosition % oneSetWidth;
        }

        animationRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [galleryImages.length]);

  return (
    <section className="relative overflow-hidden bg-gray-200">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            See Our Work in Action
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Premium Silicone Bracelets for Every Event
          </p>
        </div>
      </div>

      {/* Full-width carousel section with aesthetic background */}
      <div className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-12 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        {/* Image Carousel */}
        <div className="relative">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-200 via-gray-200 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-200 via-gray-200 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div ref={animationRef} className="flex gap-6 py-4">
              {tripleImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 group">
                  <div className="relative w-80 h-64 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-rotate-1">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
