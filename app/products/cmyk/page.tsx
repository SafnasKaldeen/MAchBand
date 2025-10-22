"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import ProductQuickNav from "@/components/ProductQuickNav";
import { X } from "lucide-react";

export default function CMYKPage() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <Header /> */}

      <ProductQuickNav />

      {/* Hero Section */}
      <section
        className="relative w-full"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        {/* Background Image - Mobile */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src="/Final-Web-Images/Images/CMYK print page/full-color-printed-bangles.webp"
            alt="CMYK Full Color Printed Wristbands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        </div>

        {/* Background Image - Desktop */}
        <div className="hidden lg:block absolute inset-0">
          <img
            src="/Final-Web-Images/Images/CMYK print page/printed-event-identification-bangles.webp"
            alt="CMYK Full Color Printed Wristbands Desktop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        {/* Blur Background Layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/Final-Web-Images/Images/CMYK print page/full-color-printed-bangles.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            opacity: 0.4,
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mb-8 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white animate-slide-up">
                  CMYK FULL COLOR PRINTED WRISTBANDS
                </h1>
                <p className="text-lg md:text-xl mb-4 text-gray-200 animate-slide-up animation-delay-200">
                  Photo-quality prints that move, flex, and stay vibrant all
                  day.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 max-w-4xl mx-auto">
                {[
                  "custom-printed-handbands",
                  "full-color-printed-bracelets",
                  "printed-cmyk-silicon-handbands",
                  "personalised-silicon-wristbands",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden animate-scale-in bg-white/10 backdrop-blur-sm p-2"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <img
                      src={`/Final-Web-Images/Images/CMYK print page/${img}.webp`}
                      alt={`CMYK Wristband ${i}`}
                      className="w-full h-20 object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-bold text-yellow-300 my-8 animate-slide-up animation-delay-400">
                Premium Full-Color Custom Printing
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="container mx-auto px-8">
              <h1 className="text-6xl text-white mb-6 font-bold leading-tight animate-slide-up">
                CMYK FULL COLOR PRINTED WRISTBANDS
              </h1>

              <div className="flex flex-row items-center mb-8 animate-slide-up animation-delay-200">
                <span className="flex flex-col badge p-5 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg">
                  <span className="text-xl font-semibold">
                    Silicone Material
                  </span>
                </span>
                <div className="font-bold ml-3 border-2 border-yellow-400 p-3 rounded text-yellow-400">
                  <p>Premium Quality</p>
                </div>
                <span className="font-semibold ml-3 text-white text-lg">
                  Lead Time: 7-10 Days
                </span>
              </div>

              <div className="grid grid-cols-5 gap-4 max-w-6xl mb-8">
                {[
                  "custom-printed-handbands",
                  "full-color-printed-bracelets",
                  "printed-cmyk-silicon-handbands",
                  "personalised-silicon-wristbands",
                  "anime-bangles-printed",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden animate-scale-in bg-white/10 backdrop-blur-sm py-0 my-0"
                    style={{ animationDelay: `${400 + i * 100}ms` }}
                  >
                    <img
                      src={`/Final-Web-Images/Images/CMYK print page/${img}.webp`}
                      alt={`CMYK Wristband ${i}`}
                      className="w-full h-40 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <div className="max-w-4xl animate-slide-up animation-delay-900">
                <h2 className="text-3xl text-white font-bold mb-4">
                  Product Description
                </h2>
                <div className="text-white text-lg leading-relaxed">
                  <p className="text-xl mb-3 text-gray-200">
                    Photo-quality prints that move, flex, and stay vibrant all
                    day.
                  </p>
                  <p className="text-2xl font-bold text-yellow-300">
                    Premium Full-Color Custom Printing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is CMYK Full Color Printing */}
      <section
        id="cmyk-info"
        data-animate
        className={`bg-white py-20 px-6 lg:px-8 transition-all duration-1000 ${
          visibleSections.has("cmyk-info")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              What is CMYK Full Color Printing?
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-yellow-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Process Printing
              </h3>
              <p className="text-gray-700">
                Inks are applied in overlapping layers on the wristband,
                allowing seamless color blending and photorealistic results.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-yellow-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Full Color Capability
              </h3>
              <p className="text-gray-700">
                Supports detailed imagery, intricate patterns, and gradients for
                vibrant, professional-quality designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Width Options */}
      <section
        id="width-section"
        data-animate
        className={`bg-gray-100 py-16 px-6 lg:px-8 transition-all duration-1000 ${
          visibleSections.has("width-section")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Available Wristband Widths
          </h2>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-bold">
                      Width Options
                    </th>
                    <th className="px-6 py-4 text-center text-white font-bold">
                      25 mm
                    </th>
                    <th className="px-6 py-4 text-center text-white font-bold">
                      20 mm
                    </th>
                    <th className="px-6 py-4 text-center text-white font-bold">
                      15 mm
                    </th>
                    <th className="px-6 py-4 text-center text-white font-bold bg-yellow-600">
                      12 mm
                    </th>
                    <th className="px-6 py-4 text-center text-white font-bold">
                      6 mm
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-6 font-semibold text-gray-700">
                      Available Sizes
                    </td>
                    <td className="px-6 py-6 text-center text-gray-600">✓</td>
                    <td className="px-6 py-6 text-center text-gray-600">✓</td>
                    <td className="px-6 py-6 text-center text-gray-600">✓</td>
                    <td className="px-6 py-6 text-center bg-yellow-50 font-bold text-yellow-700">
                      ✓ Most Popular
                    </td>
                    <td className="px-6 py-6 text-center text-gray-600">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <p className="text-lg font-semibold text-yellow-900">
              The standard width ordered by 80% of our customers is 12 mm
            </p>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section
        id="quality-section"
        data-animate
        className={`bg-white py-16 px-6 lg:px-8 transition-all duration-1000 ${
          visibleSections.has("quality-section")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our bands are made from 100% silicone and are the best quality you
              will find
            </h2>
            <p className="text-xl text-gray-600">
              High quality Printed, Debossed and Embossed Wristbands - We assure
              superior quality
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Silicone wristbands are a great and relatively inexpensive
              product that can be used as handouts for events, fundraisers,
              awareness campaigns, and promotional activities.
            </p>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section
        id="customization"
        data-animate
        className={`bg-gray-100 py-20 px-6 lg:px-8 transition-all duration-1000 ${
          visibleSections.has("customization")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Customization Options
            </h2>
            <div className="w-16 h-1 bg-yellow-500"></div>
            <p className="text-lg text-gray-600 mt-4">
              Tailor your wristbands to your exact specifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-8 hover:border-yellow-300 hover:shadow-md transition-all bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Widths
              </h3>
              <ul className="space-y-3">
                {[
                  "6 mm",
                  "12 mm (Most Popular)",
                  "15 mm",
                  "20 mm",
                  "25 mm",
                ].map((width) => (
                  <li key={width} className="text-gray-700 flex items-center">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                    {width}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:border-yellow-300 hover:shadow-md transition-all bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Sizes
              </h3>
              <ul className="space-y-3">
                {["160 mm", "180 mm", "190 mm", "202 mm", "210 mm"].map(
                  (size) => (
                    <li key={size} className="text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                      {size}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:border-yellow-300 hover:shadow-md transition-all bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Band Colors
              </h3>
              <ul className="space-y-3">
                {[
                  "Solid",
                  "Segmented (2-5 colors)",
                  "Swirl",
                  "Glow-in-the-dark",
                ].map((color) => (
                  <li key={color} className="text-gray-700 flex items-center">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                    {color}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:border-yellow-300 hover:shadow-md transition-all bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Special Effects
              </h3>
              <ul className="space-y-3">
                {[
                  "Figured watch style",
                  "Glitter",
                  "Adjustable snap-buttons",
                ].map((effect) => (
                  <li key={effect} className="text-gray-700 flex items-center">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                    {effect}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:border-yellow-300 hover:shadow-md transition-all bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Print Colors
              </h3>
              <p className="text-gray-600 mb-4">
                Unlimited colors with photorealistic quality
              </p>
              <p className="text-3xl font-bold text-yellow-600">Unlimited</p>
              <p className="text-sm text-gray-500 mt-2">Full CMYK Spectrum</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:border-yellow-300 hover:shadow-md transition-all bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Material
              </h3>
              <ul className="space-y-3">
                {[
                  "100% Silicone",
                  "Hypoallergenic",
                  "Latex-free",
                  "Eco-friendly",
                ].map((material) => (
                  <li
                    key={material}
                    className="text-gray-700 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                    {material}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Characteristics */}
      <section
        id="characteristics"
        data-animate
        className={`bg-white py-20 px-6 lg:px-8 transition-all duration-1000 ${
          visibleSections.has("characteristics")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Product Characteristics
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-4">
              Premium quality features that set us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "100% Silicone",
                desc: "Latex-free, hypoallergenic & eco-friendly material",
              },
              {
                title: "Durable & Waterproof",
                desc: "Built to last through any conditions",
              },
              {
                title: "Photorealistic Printing",
                desc: "Full-color CMYK process for detailed imagery",
              },
              {
                title: "Flexible Design",
                desc: "Print stretches with the band without cracking",
              },
            ].map((char, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center hover:border-yellow-300 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {char.title}
                </h3>
                <p className="text-gray-600 text-sm">{char.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages & Disadvantages */}
      <section
        id="advantages"
        data-animate
        className={`bg-gray-100 py-20 px-6 lg:px-8 transition-all duration-1000 ${
          visibleSections.has("advantages")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Advantages & Considerations
            </h2>
            <div className="w-16 h-1 bg-yellow-500"></div>
            <p className="text-lg text-gray-600 mt-4">
              Make an informed decision about CMYK full color wristbands
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="border-l-4 border-yellow-500 bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Advantages
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Vibrant Multi-Color Designs",
                    desc: "Perfect for detailed logos, images, and gradients",
                  },
                  {
                    title: "Unlimited Colors",
                    desc: "Full creative freedom at no extra cost",
                  },
                  {
                    title: "Durable & Flexible",
                    desc: "Silicone print stretches without cracking or peeling",
                  },
                  {
                    title: "Professional Quality",
                    desc: "Photo-quality results with vibrant, bold colors",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-gray-400 bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Considerations
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Fading Over Time",
                    desc: "Heavy wear or harsh conditions can reduce print longevity",
                  },
                  {
                    title: "Higher Setup Cost",
                    desc: "Small runs or very detailed prints can be pricier",
                  },
                  {
                    title: "Minor Color Variability",
                    desc: "Slight differences may occur due to ink layering",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Pro Tip:</span> CMYK full
                  color printing is ideal for vibrant, photorealistic designs
                  that demand professional quality and unlimited color options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        data-animate
        className={`bg-white py-20 px-6 lg:px-8 transition-all duration-1000 ${
          visibleSections.has("gallery")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              General Specification
            </h2>

            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">
              Tons of Customization options to make your wristbands truly
              one-of-a-kind
            </p>
            <p className="text-sm pt-6 text-gray-600">
              Share your idea with us - We'll craft the perfect design that fits
              your purpose, with unmatched quality and finish
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            {/* Main Featured Image */}
            <div className="relative w-full mb-6">
              <div
                className="rounded-lg shadow-lg border-4 border-yellow-500 cursor-pointer group w-full overflow-hidden"
                onClick={() =>
                  setSelectedImage(
                    "/Final-Web-Images/Images/CMYK print page/full-color-printed-hand-bands.webp"
                  )
                }
              >
                <img
                  src="/Final-Web-Images/Images/CMYK print page/full-color-printed-hand-bands.webp"
                  alt="CMYK Full Color Printed Bands"
                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="flex gap-4">
              {[
                "custom-printed-handbands",
                "full-color-printed-bracelets",
                "printed-cmyk-silicon-handbands",
                "personalised-silicon-wristbands",
                "anime-bangles-printed",
              ].map((img, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden shadow cursor-pointer group flex-1 border-4 border-gray-200 hover:border-yellow-500 transition-colors"
                  onClick={() =>
                    setSelectedImage(
                      `/Final-Web-Images/Images/CMYK print page/${img}.webp`
                    )
                  }
                >
                  <img
                    src={`/Final-Web-Images/Images/CMYK print page/${img}.webp`}
                    alt={`Wristband ${i + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-yellow-600 py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Order Your Custom Wristbands?
          </h2>
          <p className="text-lg text-yellow-50 mb-8">
            Get in touch with us today for a custom quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+940704925375"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
            <a
              href="https://wa.me/940704925375"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Elegant Lightbox Modal - Placed outside all sections */}
      {selectedImage && (
        <div className="fixed top-20 left-0 right-0 bottom-0 bg-gradient-to-br from-blue-900/95 via-black/95 to-blue-950/95 z-50 flex flex-col items-center justify-center p-6 animate-in fade-in duration-300">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-300/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-amber-300 transition-all duration-300 z-10 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-amber-300/20 hover:scale-110 shadow-lg"
            aria-label="Close lightbox"
          >
            <X className="h-7 w-7" />
          </button>

          {/* Main Content Container */}
          <div className="flex-1 flex flex-col items-center justify-center w-full max-w-7xl">
            {/* Image Container with Elegant Frame */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/10 animate-in zoom-in-95 duration-500 max-h-[70vh] flex items-center justify-center">
              <div className="relative max-w-full max-h-full overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="max-w-full max-h-[60vh] w-auto h-auto object-contain"
                />
              </div>

              {/* Accent corners */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-300 rounded-tl-xl" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-300 rounded-tr-xl" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-300 rounded-bl-xl" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-300 rounded-br-xl" />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-900 {
          animation-delay: 900ms;
        }
      `}</style>
    </div>
  );
}
