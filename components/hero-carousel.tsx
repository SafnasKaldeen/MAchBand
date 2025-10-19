"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    desktopImage: "/Final-Web-Images/Images/Home-page/Lap/1.webp",
    tabletImage: "/Final-Web-Images/Images/Home-page/tab/1.webp",
    mobileImage: "/Final-Web-Images/Images/Home-page/Mobile/1.webp",
    alt: "Family wearing custom silicone wristbands",
  },
  {
    desktopImage: "/Final-Web-Images/Images/Home-page/Lap/2.webp",
    tabletImage: "/Final-Web-Images/Images/Home-page/tab/2.webp",
    mobileImage: "/Final-Web-Images/Images/Home-page/Mobile/2.webp",
    alt: "Island delivery of wristbands in Sri Lanka",
  },
  {
    desktopImage: "/Final-Web-Images/Images/Home-page/Lap/3.webp",
    tabletImage: "/Final-Web-Images/Images/Home-page/tab/3.webp",
    mobileImage: "/Final-Web-Images/Images/Home-page/Mobile/3.webp",
    alt: "Events identification bracelets",
  },
  {
    desktopImage: "/Final-Web-Images/Images/Home-page/Lap/4.webp",
    tabletImage: "/Final-Web-Images/Images/Home-page/tab/4.webp",
    mobileImage: "/Final-Web-Images/Images/Home-page/Mobile/4.webp",
    alt: "Free handbands designs support",
  },
];

// Image aspect ratios
const IMAGE_RATIOS = {
  desktop: 3840 / 1600, // 2.4 (ultra-wide)
  tablet: 1080 / 1350, // 0.8 (portrait)
  mobile: 900 / 1200, // 0.75 (portrait)
};

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bestImageType, setBestImageType] = useState("desktop");

  useEffect(() => {
    const selectBestImage = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const screenRatio = screenWidth / screenHeight;

      // Calculate the difference between screen ratio and each image ratio
      const differences = {
        desktop: Math.abs(screenRatio - IMAGE_RATIOS.desktop),
        tablet: Math.abs(screenRatio - IMAGE_RATIOS.tablet),
        mobile: Math.abs(screenRatio - IMAGE_RATIOS.mobile),
      };

      // Find the image type with the smallest difference
      const closest = Object.entries(differences).reduce((a, b) =>
        a[1] < b[1] ? a : b
      )[0];

      setBestImageType(closest);
    };

    selectBestImage();
    window.addEventListener("resize", selectBestImage);

    return () => window.removeEventListener("resize", selectBestImage);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const getImageSrc = (slide) => {
    switch (bestImageType) {
      case "mobile":
        return slide.mobileImage;
      case "tablet":
        return slide.tabletImage;
      case "desktop":
      default:
        return slide.desktopImage;
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Slides Container */}
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
            <div className="w-full h-full relative overflow-hidden">
              <Image
                src={getImageSrc(slide) || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                style={{
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                priority={index === 0}
                sizes="100vw"
                quality={95}
              />
            </div>

            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on hover for desktop */}
      <button
        onClick={goToPrevious}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
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
      <div className="absolute bottom-20 md:bottom-24 left-0 right-0 px-4 md:px-8 lg:px-12 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-right text-white md:ml-auto md:max-w-2xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight drop-shadow-2xl">
              Silicone solutions for kids, teens, and adults—perfect for
              everyone.
            </h1>
          </div>
        </div>
      </div>

      {/* Debug indicator - Remove in production */}
      {/* <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-xs z-30">
        Using: {bestImageType}
      </div> */}
    </div>
  );
}
