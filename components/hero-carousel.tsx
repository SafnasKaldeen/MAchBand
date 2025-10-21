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
    heading: "One Band, All Ages. One Style, Endless Smiles.",
    subheading:
      "Silicone solutions for kids, teens, and adults—perfect for everyone.",
    textPosition: "right-top",
  },
  {
    desktopImage: "/Final-Web-Images/Images/Home-page/Lap/2.webp",
    tabletImage: "/Final-Web-Images/Images/Home-page/tab/2.webp",
    mobileImage: "/Final-Web-Images/Images/Home-page/Mobile/2.webp",
    alt: "Events identification bracelets",
    heading: "Events End. Memories Last. Wristbands Make It Happen.",
    subheading:
      "Turn every gathering into a lasting memory with custom wristbands.",
    textPosition: "right-bottom",
  },
  {
    desktopImage: "/Final-Web-Images/Images/Home-page/Lap/3.webp",
    tabletImage: "/Final-Web-Images/Images/Home-page/tab/3.webp",
    mobileImage: "/Final-Web-Images/Images/Home-page/Mobile/3.webp",
    alt: "Events identification bracelets",
    heading: "No Design? No Problem. We'll Create It With You.",
    subheading:
      "Enjoy free design support with unlimited revisions—stress-free ordering.",
    textPosition: "right-bottom",
  },
  {
    desktopImage: "/Final-Web-Images/Images/Home-page/Lap/4.webp",
    tabletImage: "/Final-Web-Images/Images/Home-page/tab/4.webp",
    mobileImage: "/Final-Web-Images/Images/Home-page/Mobile/4.webp",
    alt: "Island delivery of wristbands in Sri Lanka",
    heading: "From Our Hands to Yours – Fast, Islandwide Delivery.",
    subheading:
      "Wherever you are in Sri Lanka, your wristbands reach you on time.",
    textPosition: "right-bottom",
  },
];

const IMAGE_RATIOS = {
  desktop: 3840 / 1600,
  tablet: 1080 / 1350,
  mobile: 900 / 1200,
};

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bestImageType, setBestImageType] = useState("desktop");

  useEffect(() => {
    const selectBestImage = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const screenRatio = screenWidth / screenHeight;

      const differences = {
        desktop: Math.abs(screenRatio - IMAGE_RATIOS.desktop),
        tablet: Math.abs(screenRatio - IMAGE_RATIOS.tablet),
        mobile: Math.abs(screenRatio - IMAGE_RATIOS.mobile),
      };

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

  const getTextPositionClasses = (position, slideIndex) => {
    // Mobile: Always bottom
    if (bestImageType === "mobile") {
      return "absolute bottom-6 md:bottom-8 right-0 px-4 md:px-8 lg:px-12 text-right flex justify-end";
    }

    // Tablet: Swap positions for slides 1 and 4 (indices 2 and 3)
    if (bestImageType === "tablet" && (slideIndex === 2 || slideIndex === 3)) {
      const finalPosition =
        position === "right-top" ? "right-bottom" : "right-top";
      return finalPosition === "right-bottom"
        ? "absolute bottom-6 md:bottom-8 right-0 px-4 md:px-8 lg:px-12 text-right flex justify-end"
        : "absolute top-6 md:top-8 right-0 px-4 md:px-8 lg:px-12 text-right flex justify-end";
    }

    // Desktop and tablet (non-swapped slides): Use original position
    switch (position) {
      case "right-bottom":
        return "absolute bottom-6 md:bottom-8 right-0 px-4 md:px-8 lg:px-12 text-right flex justify-end";
      case "right-top":
        return "absolute top-6 md:top-8 right-0 px-4 md:px-8 lg:px-12 text-right flex justify-end";
      default:
        return "absolute bottom-6 md:bottom-8 right-0 px-4 md:px-8 lg:px-12 text-right flex justify-end";
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden group">
      <style>{`
        @keyframes slideInText {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

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
                  objectPosition:
                    bestImageType === "mobile" ? "center 35%" : "center center",
                }}
                priority={index === 0}
                sizes="100vw"
                quality={95}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
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

      {/* Dynamic Content Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className={getTextPositionClasses(slide.textPosition, index)}>
              <div className="max-w-3xl lg:max-w-4xl">
                {/* Decorative accent */}
                <div
                  className={`inline-block mb-3 transition-all duration-500 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                </div>

                {/* Heading */}

                {/* Subheading with icon */}
                <div
                  className={`flex items-start gap-2 transition-all duration-500 justify-end ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <h2
                    className={`text-white font-bold leading-tight mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl transition-all duration-500 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      textShadow:
                        "0 4px 12px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.5)",
                      transitionDelay: "200ms",
                    }}
                  >
                    {slide.subheading}
                  </h2>
                </div>

                {/* Decorative bottom accent */}
                <div
                  className={`mt-4 flex justify-end transition-all duration-500 ${
                    index === currentSlide
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                  style={{
                    transitionDelay: "400ms",
                    transformOrigin: "right",
                  }}
                >
                  <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Debug indicator */}
      {/* <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-xs z-30">
        Using: {bestImageType} | Slide: {currentSlide + 1}
      </div> */}
    </div>
  );
}
