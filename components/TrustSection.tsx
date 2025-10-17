"use client";

import React, { useEffect, useRef, useState } from "react";

export default function TrustSection() {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const [centeredLogos, setCenteredLogos] = useState(new Set());

  const logos = [
    {
      name: "Brandix",
      img: "/Final-Web-Images/Images/Company Logos/Brandix_Apparel_Limited.webp",
    },
    {
      name: "Commercial Bank",
      img: "/Final-Web-Images/Images/Company Logos/commercial-bank-of-ceylon-plc-seeklogo copy.webp",
    },
    {
      name: "DHL Express",
      img: "/Final-Web-Images/Images/Company Logos/DHL Express Delivery.webp",
    },
    {
      name: "Elephant House",
      img: "/Final-Web-Images/Images/Company Logos/Elephant_House_logo.webp",
    },
    {
      name: "Keels",
      img: "/Final-Web-Images/Images/Company Logos/Keells food products.webp",
    },
    {
      name: "Marriott Hotels",
      img: "/Final-Web-Images/Images/Company Logos/Marriott_hotels_logo.webp",
    },
    {
      name: "MAS Holdings",
      img: "/Final-Web-Images/Images/Company Logos/mas holdings company.webp",
    },
    {
      name: "NPP",
      img: "/Final-Web-Images/Images/Company Logos/NPP_Logo copy.webp",
    },
    {
      name: "SLIIT University",
      img: "/Final-Web-Images/Images/Company Logos/SLIIT university.webp",
    },
    {
      name: "University of Jaffna",
      img: "/Final-Web-Images/Images/Company Logos/university of jaffna.webp",
    },
    {
      name: "University of Moratuwa",
      img: "/Final-Web-Images/Images/Company Logos/university of moratuwa.webp",
    },
    {
      name: "University of Peradeniya",
      img: "/Final-Web-Images/Images/Company Logos/university of peradeniya.webp",
    },
  ];

  // Triple the logos for truly seamless infinite scroll
  const tripleLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 1.0; // pixels per frame

    const animate = () => {
      if (animationRef.current) {
        scrollPosition += scrollSpeed;

        // Calculate the width of one set of logos (including gaps)
        // 8 logos * (256px width + 32px gap) = 2304px
        const oneSetWidth = logos.length * (256 + 32);

        // Seamlessly reset when one set has passed
        // Since we have 3 sets, resetting by one set width is invisible
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
  }, [logos.length]);

  useEffect(() => {
    const updateCenterLogos = () => {
      if (scrollRef.current && animationRef.current) {
        const container = scrollRef.current;
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        const logoElements =
          animationRef.current.querySelectorAll("[data-logo-index]");

        // Find the logo closest to center
        let closestLogo = null;
        let minDistance = Infinity;

        logoElements.forEach((element) => {
          const logoRect = element.getBoundingClientRect();
          const logoCenter = logoRect.left + logoRect.width / 2;
          const distance = Math.abs(logoCenter - containerCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestLogo = element.getAttribute("data-logo-index");
          }
        });

        // Only the closest logo is centered
        if (closestLogo !== null) {
          setCenteredLogos(new Set([closestLogo]));
        }
      }
    };

    const interval = setInterval(updateCenterLogos, 16); // ~60fps for smoother updates
    updateCenterLogos();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const isLogoInCenter = (index) => {
    return centeredLogos.has(`${index}`);
  };

  return (
    <section className="relative pt-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
            TRUSTED BY THOUSANDS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Custom Bangles Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            From schools, universities, and charities to companies, non-profits,
            businesses, and clubs, organizations across Sri Lanka continue to
            choose Mach Wristbands for reliable, long-lasting quality.
          </p>
          <p className="text-xl font-semibold text-gray-800">
            Our customers love working with us because we put their needs
            first—they trust us and keep coming back.
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative mb-16">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-400/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-400/20 to-transparent z-10 pointer-events-none" />

          <div ref={scrollRef} className="overflow-hidden">
            <div ref={animationRef} className="flex gap-8 py-8">
              {tripleLogos.map((logo, index) => {
                const isCenter = isLogoInCenter(index);
                return (
                  <div
                    key={index}
                    data-logo-index={index}
                    className={`flex-shrink-0 transition-all duration-200 ${
                      isCenter ? "opacity-100 scale-110" : "opacity-50"
                    }`}
                  >
                    <div
                      className={`w-64 h-32 flex items-center justify-center rounded-xl border transition-all duration-300 ${
                        isCenter
                          ? "bg-white shadow-lg border-gray-200"
                          : "bg-gray-50 border-gray-100"
                      }`}
                    >
                      <div className="w-40 h-20 flex items-center justify-center p-0">
                        <img
                          src={logo.img}
                          alt={logo.name}
                          className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                            isCenter ? "" : "grayscale"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto p-4">
          <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
            <div className="text-4xl font-bold text-gray-900 mb-2">5000+</div>
            <div className="text-sm text-gray-600 font-medium">
              Happy Clients
            </div>
          </div>
          <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
            <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-sm text-gray-600 font-medium">
              Years Experience
            </div>
          </div>
          <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
            <div className="text-4xl font-bold text-gray-900 mb-2">99%</div>
            <div className="text-sm text-gray-600 font-medium">
              Satisfaction Rate
            </div>
          </div>
          <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
            <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-sm text-gray-600 font-medium">
              Support Available
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
