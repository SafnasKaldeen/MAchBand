"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Back from "@/components/Back";

export default function EmbossedPage() {
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
      {/* Hero Section */}
      <section className="relative w-full min-h-screen">
        <div className="absolute inset-0 h-screen lg:hidden">
          <Image
            src="/Final-Web-Images/Images/Embossed Page/embossed-printed-bracelets.webp"
            alt="Embossed Full Color Printed Wristbands"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        </div>

        <div className="hidden lg:block absolute inset-0 h-screen">
          <Image
            src="/Final-Web-Images/Images/Embossed Page/emboss-silcon-wristbandlanka.webp"
            alt="Embossed Full Color Printed Wristbands Desktop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        <div
          className="absolute inset-0 h-screen"
          style={{
            backgroundImage: `url(/Final-Web-Images/Images/Embossed Page/embossed-printed-bracelets.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            opacity: 0.4,
          }}
        ></div>

        <div className="absolute inset-0 h-screen bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>

        <Back />

        <div className="relative z-10 min-h-screen">
          <div className="block lg:hidden">
            <div className="container mx-auto px-6 pt-4 pb-4">
              <div className="max-w-3xl mb-12 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white animate-slide-up">
                  EMBOSSED & PRINTED WRISTBANDS
                </h1>
                <p className="text-lg md:text-xl mb-4 text-gray-200 animate-slide-up animation-delay-200">
                  Your design is raised above the surface of the band, and can
                  be finished with vibrant ink printing to make it stand out
                  even more.
                </p>
                <p className="text-2xl md:text-3xl font-bold text-cyan-300 mb-8 animate-slide-up animation-delay-400">
                  The Bold Choice – A tactile and eye-catching wristband style.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden animate-scale-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <Image
                      src={`/Final-Web-Images/Images/Embossed Page/${
                        i === 1
                          ? "embossed-segmented-wristband"
                          : i === 2
                          ? "embossed-custom-silicone-wristbands"
                          : i === 3
                          ? "emboss-rubber-wristbands-srilanka"
                          : "embos-silicon-handbands"
                      }.webp`}
                      alt={`Embossed Wristband ${i}`}
                      width={300}
                      height={200}
                      className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative h-screen">
            <div className="container mx-auto px-8 pt-8">
              <h1 className="text-7xl text-white mb-4 font-bold z-10 leading-tight animate-slide-up">
                Embossed/ENGRAVED & INK FILLED WRISTBANDS
              </h1>

              <div className="flex flex-row items-center mb-8 animate-slide-up animation-delay-200">
                <span className="flex flex-col ml-3 badge p-5 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg">
                  <span className="text-xl font-semibold">
                    Silicone Material
                  </span>
                </span>
                <div className="font-bold ml-3 border-2 border-cyan-400 p-3 rounded text-cyan-400">
                  <p>Premium Quality</p>
                </div>
                <span className="font-semibold ml-3 text-white text-lg">
                  Lead Time: 7-10 Days
                </span>
              </div>

              <div className="flex flex-col mb-4">
                <div className="grid grid-cols-4 gap-6 max-w-6xl mb-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden animate-scale-in"
                      style={{ animationDelay: `${400 + i * 100}ms` }}
                    >
                      <Image
                        src={`/Final-Web-Images/Images/Embossed Page/${
                          i === 1
                            ? "embossed-segmented-wristband"
                            : i === 2
                            ? "embossed-custom-silicone-wristbands"
                            : i === 3
                            ? "emboss-rubber-wristbands-srilanka"
                            : "embos-silicon-handbands"
                        }.webp`}
                        alt={`Embossed Wristband ${i}`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>

                <div className="max-w-4xl animate-slide-up animation-delay-800">
                  <h2 className="text-3xl text-white font-bold mb-6 hover:opacity-80 transition-opacity">
                    Product Description
                  </h2>
                  <div className="text-white text-lg mb-6 leading-relaxed">
                    <p className="text-xl mb-4 text-gray-200">
                      Your design is raised above the surface of the band, and
                      can be finished with vibrant ink printing to make it stand
                      out even more.
                    </p>
                    <p className="text-2xl font-bold text-cyan-300 mb-6">
                      The Bold Choice – A tactile and eye-catching wristband
                      style.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Embossed Printing */}
      <section
        id="embossed-info"
        data-animate
        className={`bg-white py-20 px-6 lg:px-8 transition-all duration-1000 ${
          visibleSections.has("embossed-info")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              What is Embossed Printing?
            </h2>
            <div className="w-16 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-cyan-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Molded Design
              </h3>
              <p className="text-gray-700">
                Your design is molded to rise above the wristband surface.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-cyan-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Vibrant Colors
              </h3>
              <p className="text-gray-700">
                Optional ink printing adds vivid colors to the raised design.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-cyan-300 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3D Effect
              </h3>
              <p className="text-gray-700">
                Creates a 3D look and feel that makes text and logos pop.
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
                    <th className="px-6 py-4 text-center text-white font-bold bg-cyan-600">
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
                    <td className="px-6 py-6 text-center bg-cyan-50 font-bold text-cyan-700">
                      ✓ Most Popular
                    </td>
                    <td className="px-6 py-6 text-center text-gray-600">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center bg-cyan-50 rounded-lg p-6 border border-cyan-200">
            <p className="text-lg font-semibold text-cyan-900">
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

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Minimum Order Quantity
              </h3>
              <p className="text-gray-700 leading-relaxed">
                100 pieces per order. Perfect for events, fundraisers, and
                promotional campaigns.
              </p>
            </div>

            <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200">
              <h3 className="text-xl font-bold text-cyan-900 mb-4">
                Customization
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fully customizable according to your text, logos, images and
                designs. Make them uniquely yours.
              </p>
            </div>
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
            <div className="w-16 h-1 bg-cyan-500"></div>
            <p className="text-lg text-gray-600 mt-4">
              Tailor your wristbands to your exact specifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-8 hover:border-cyan-300 hover:shadow-md transition-all bg-white">
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
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></span>
                    {width}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:border-cyan-300 hover:shadow-md transition-all bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Sizes
              </h3>
              <ul className="space-y-3">
                {["160 mm", "180 mm", "190 mm", "202 mm", "210 mm"].map(
                  (size) => (
                    <li key={size} className="text-gray-700 flex items-center">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></span>
                      {size}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:border-cyan-300 hover:shadow-md transition-all bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Band Colors
              </h3>
              <ul className="space-y-3">
                {[
                  "Solid",
                  "Segmented (4-5 colors)",
                  "Swirl",
                  "Glow-in-the-dark",
                ].map((color) => (
                  <li key={color} className="text-gray-700 flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></span>
                    {color}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:border-cyan-300 hover:shadow-md transition-all bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Print Colors
              </h3>
              <p className="text-gray-600 mb-4">
                Choose from thousands of pantone matched shades
              </p>
              <p className="text-3xl font-bold text-cyan-600">2200+</p>
              <p className="text-sm text-gray-500 mt-2">Pantone Colors</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:border-cyan-300 hover:shadow-md transition-all bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Special Effects
              </h3>
              <ul className="space-y-3">
                {["Dual-layer", "Metallic ink", "Adjustable snap-buttons"].map(
                  (effect) => (
                    <li
                      key={effect}
                      className="text-gray-700 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></span>
                      {effect}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:border-cyan-300 hover:shadow-md transition-all bg-white">
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
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></span>
                    {material}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
            <p className="text-gray-700">
              <span className="font-semibold text-cyan-700">
                Minimum Order:
              </span>{" "}
              100 pieces
            </p>
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
            <div className="w-16 h-1 bg-cyan-500 mx-auto"></div>
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
                title: "Tactile Design",
                desc: "Raised elements instantly noticeable to touch",
              },
              {
                title: "High Visibility",
                desc: "Colorful ink for maximum contrast",
              },
            ].map((char, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center hover:border-cyan-300 transition-colors"
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
        id="pros-cons"
        data-animate
        className={`bg-gray-100 py-20 px-6 lg:px-8 transition-all duration-1000 ${
          visibleSections.has("pros-cons")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Advantages & Considerations
            </h2>
            <div className="w-16 h-1 bg-cyan-500"></div>
            <p className="text-lg text-gray-600 mt-4">
              Make an informed decision about embossed wristbands
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="border-l-4 border-cyan-500 bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Advantages
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Premium Look",
                    desc: "3D raised effect gives a bold and premium appearance",
                  },
                  {
                    title: "High Visibility",
                    desc: "Ink highlights make logos and text stand out clearly",
                  },
                  {
                    title: "Unique Feel",
                    desc: "Tactile texture adds a unique feel compared to flat bands",
                  },
                  {
                    title: "Long Lasting",
                    desc: "Durable silicone base ensures long-lasting use",
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
                    title: "Ink Wear",
                    desc: "Ink on raised surfaces may wear off more quickly with heavy use",
                  },
                  {
                    title: "Design Details",
                    desc: "Very fine details or small text may lose clarity in the embossing process",
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
                  <span className="font-semibold">Pro Tip:</span> Despite these
                  minor considerations, embossed wristbands remain a popular
                  choice for their distinctive appearance and tactile appeal.
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
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              General Specification
            </h2>
            <div className="w-16 h-1 bg-cyan-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">
              Explore our premium Embossed wristband collection with vibrant
              ink-filled designs
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            {/* Main Featured Image */}
            <div className="relative w-full mb-6">
              <div
                className="rounded-lg shadow-lg border-4 border-cyan-500 cursor-pointer group w-full"
                onClick={() =>
                  setSelectedImage(
                    "/Final-Web-Images/Images/Embossed Page/embossed-printed-hand-bands-lanka.webp"
                  )
                }
              >
                <img
                  src="/Final-Web-Images/Images/Embossed Page/embossed-printed-hand-bands-lanka.webp"
                  alt="Embossed Bands"
                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="flex gap-4">
              {[
                "embossed-segmented-wristband",
                "embossed-custom-silicone-wristbands",
                "emboss-rubber-wristbands-srilanka",
                "embos-silicon-handbands",
                "printed-embossed-bracelet",
              ].map((img, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden shadow cursor-pointer group flex-1 border-4 border-gray-200 hover:border-cyan-500 transition-colors"
                  onClick={() =>
                    setSelectedImage(
                      `/Final-Web-Images/Images/Embossed Page/${img}.webp`
                    )
                  }
                >
                  <img
                    src={`/Final-Web-Images/Images/Embossed Page/${img}.webp`}
                    alt={`Wristband ${i}`}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Modal for Enlarged Image */}
            {selectedImage && (
              <div
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <button
                  className="absolute top-6 right-6 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold hover:bg-gray-200 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="max-w-4xl max-h-[80vh] rounded-lg object-contain"
                />
              </div>
            )}
          </div>

          {/* Modal for Enlarged Image */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold hover:bg-gray-200 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-4xl max-h-[80vh] rounded-lg object-contain"
              />
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-cyan-600 py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Order Your Custom Wristbands?
          </h2>
          <p className="text-lg text-cyan-50 mb-8">
            Get in touch with us today for a custom quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+940704925375"
              className="inline-flex items-center justify-center gap-2 bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </div>
  );
}
