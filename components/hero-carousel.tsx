"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    desktopImage:
      "/Final-Web-Images/Images/Home-page/Lap/mach-silicone-wristbands-sri-lanka.webp",
    mobileImage:
      "/Final-Web-Images/Images/Home-page/Mobile/silicon-wristband-print-lanka.webp",
    alt: "Family wearing custom silicone wristbands",
  },
  {
    desktopImage:
      "/Final-Web-Images/Images/Home-page/Lap/wristband-delivery-sri-lanka.webp",
    mobileImage:
      "/Final-Web-Images/Images/Home-page/Mobile/fast-delivery-island-wide.webp",
    alt: "Island delivery of wristbands in Sri Lanka",
  },
  {
    desktopImage:
      "/Final-Web-Images/Images/Home-page/Lap/events-identification-bracelets.webp",
    mobileImage:
      "/Final-Web-Images/Images/Home-page/Mobile/identification-wristbands-lanka.webp",
    alt: "Events identification bracelets",
  },
  {
    desktopImage:
      "/Final-Web-Images/Images/Home-page/Lap/free-handbands-designs-support.webp",
    mobileImage:
      "/Final-Web-Images/Images/Home-page/Mobile/free-bangles-design-support.webp",
    alt: "Free handbands designs support",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Desktop Image */}
            <div className="hidden md:block w-full h-full">
              <Image
                src={slide.desktopImage || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Mobile Image */}
            <div className="block md:hidden w-full h-full">
              <Image
                src={slide.mobileImage || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button> */}

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-end justify-center md:justify-end pb-24 px-4 md:px-8 z-10">
        <div className="text-center md:text-left text-white w-full md:w-1/2 md:mr-8">
          <h1 className="text-xl md:text-4xl font-bold text-balance drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            Silicone solutions for kids, teens, and adults—perfect for everyone.
          </h1>
        </div>
      </div>
    </div>
  );
}
