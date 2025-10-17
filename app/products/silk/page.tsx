import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import Back from "@/components/Back";

export default function SilkScreenPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Game Profile Style */}
      <section className="relative w-full">
        {/* Background Image with Blur Effect */}
        {/* ✅ Mobile Background Image */}
        <div className="absolute inset-0 h-screen lg:hidden">
          <Image
            src="/Final-Web-Images/Images/Screen Print page/bangle-printing-school.webp"
            alt="CMYK Full Color Printed Wristbands"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        </div>

        {/* ✅ Desktop Background Image */}
        <div className="hidden lg:block absolute inset-0 h-screen">
          <Image
            src="/Final-Web-Images/Images/Screen Print page/hand-bands-print-sri-lanka.webp"
            alt="CMYK Full Color Printed Wristbands Desktop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        {/* ✅ Blurred Background Layer */}
        <div
          className="absolute inset-0 h-screen"
          style={{
            backgroundImage: `url(/Final-Web-Images/Images/Screen Print page/bangle-printing-school.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            opacity: 0.4,
          }}
        ></div>

        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 h-screen bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>

        <Back />

        {/* Main Content Container */}
        <div className="relative z-10 min-h-screen">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="container mx-auto px-6 pt-4 pb-4">
              {/* Text Content */}
              <div className="max-w-3xl mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                  SILK SCREEN PRINTED WRISTBANDS
                </h1>
                <p className="text-lg md:text-xl mb-4 text-gray-200">
                  Your design is printed directly onto the silicone surface
                  using a precise silk screen process.
                </p>
                <p className="text-2xl md:text-3xl font-bold text-purple-300 mb-4">
                  The Versatile Choice – Perfect for detailed designs.
                </p>
              </div>

              {/* Image Grid - 4 Images */}
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                {/* Image 1 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/Screen Print page/printed-wristbands-near-me.webp"
                    alt="Silk Screen Wristband 1"
                    width={300}
                    height={200}
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 2 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/Screen Print page/rubber-hand-bands-printed.webp"
                    alt="Silk Screen Wristband 2"
                    width={300}
                    height={200}
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 3 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/Screen Print page/identification-wristbands-for-mas-holdings.webp"
                    alt="Silk Screen Wristband 3"
                    width={300}
                    height={200}
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 4 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/Screen Print page/qr-wrist-bracelets-srilanka.webp"
                    alt="Silk Screen Wristband 4"
                    width={300}
                    height={200}
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Game Profile Style */}
          <div className="hidden lg:block relative h-screen">
            <div className="container mx-auto px-8 pt-8">
              {/* Title Section */}
              <h1 className="text-7xl text-white mb-4 font-bold z-10 leading-tight">
                SILK SCREEN PRINTED WRISTBANDS
              </h1>

              {/* Info Badges */}
              <div className="flex flex-row items-center mb-8">
                <span className="flex flex-col ml-3 badge p-5 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg">
                  <span className="text-xl font-semibold">
                    Silicone Material
                  </span>
                </span>
                <div className="font-bold ml-3 border-2 border-purple-400 p-3 rounded text-purple-400">
                  <p>Premium Quality</p>
                </div>
                <span className="font-semibold ml-3 text-white text-lg">
                  Lead Time: 7-10 Days
                </span>
              </div>

              {/* Main Content with Images */}
              <div className="flex flex-col mb-8">
                {/* Image Grid - 4 Images */}
                <div className="grid grid-cols-4 gap-6 max-w-6xl mb-6">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/Screen Print page/printed-bracelets-for-ndb-bank.webp"
                      alt="Silk Screen Wristband 1"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/Screen Print page/rubber-hand-bands-printed.webp"
                      alt="Silk Screen Wristband 2"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/Screen Print page/identification-wristbands-for-mas-holdings.webp"
                      alt="Silk Screen Wristband 3"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/Screen Print page/qr-wrist-bracelets-srilanka.webp"
                      alt="Silk Screen Wristband 4"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="max-w-4xl">
                  <h2 className="text-3xl text-white font-bold mb-6 hover:opacity-80 transition-opacity">
                    Product Description
                  </h2>
                  <div className="text-white text-lg mb-6 leading-relaxed">
                    <p className="text-xl mb-4 text-gray-200">
                      Your design is printed directly onto the silicone surface
                      using a precise silk screen process.
                    </p>
                    <p className="text-2xl font-bold text-purple-300 mb-6">
                      The Versatile Choice – Perfect for detailed designs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Silk Screen Printing */}
      <section className="bg-gray-50 py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            What is Silk Screen Printing?
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Designs are applied flat onto the silicone surface using durable,
              high-quality silicone ink.
            </p>
            <p>
              The printed ink stretches with the wristband, so your logos, text,
              or artwork won't crack, peel, or fade even when the band is
              stretched.
            </p>
            <p>
              Supports multiple ink colors, making it ideal for complex logos,
              detailed artwork, or vibrant multi-color designs.
            </p>
            <p>
              Perfect for short to medium-term use with crisp, high-contrast
              visuals.
            </p>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="bg-white py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Customization Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-purple-600 mb-2">
                  Widths:
                </h3>
                <p>6 mm, 12 mm (most popular), 15 mm, 20 mm, 25 mm</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-purple-600 mb-2">
                  Sizes:
                </h3>
                <p>160 mm, 180 mm, 190 mm, 202 mm, 210 mm</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-purple-600 mb-2">
                  Band Colors:
                </h3>
                <p>
                  Solid, segmented (2–5 colors), swirl, glow-in-the-dark (radium
                  effect)
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-purple-600 mb-2">
                  Ink Colors:
                </h3>
                <p>2200+ Pantone-matched shades</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-purple-600 mb-2">
                  Special Effects:
                </h3>
                <p>Figured Watch Style, QR/barcodes, adjustable snap-buttons</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Characteristics */}
      <section className="bg-gray-50 py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Product Characteristics
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              • Made from 100% silicone (latex-free, hypoallergenic,
              eco-friendly)
            </p>
            <p>
              • Durable & waterproof – withstands daily wear and outdoor events
            </p>
            <p>
              • Flat printed design ensures smooth, bold, and readable graphics
            </p>
            <p>• High-contrast ink creates vibrant logos and text</p>
            <p>• Comfortable fit – soft, flexible, and suitable for all ages</p>
          </div>
        </div>
      </section>

      {/* Advantages & Disadvantages */}
      <section className="bg-white py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Advantages */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Advantages
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  • Supports multiple ink colors, allowing for complex and
                  detailed designs
                </p>
                <p>
                  • Cost-effective for single color designs, making it ideal for
                  simple logos or text
                </p>
                <p>
                  • Quick production times, suitable for events with tight
                  deadlines
                </p>
                <p>• Flat surface provides a sleek and modern appearance</p>
              </div>
            </div>

            {/* Disadvantages */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Disadvantages
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>• Higher cost per unit when using multiple ink colors</p>
                <p>
                  • Ink may fade or scratch with extended use, particularly on
                  flat surfaces
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Improved Gallery Section */}
      <section className="bg-gray-200 py-16 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Our Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our premium Silk Screen Printed wristband collection with
              detailed, vibrant designs
            </p>
          </div>

          {/* 3x3 Grid with 2x2 featured image */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Large Featured Image - 2x2 */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
              <div className="relative w-full h-full min-h-96">
                <Image
                  src="/Final-Web-Images/Images/Screen Print page/printed-wristbands-near-me.webp"
                  alt="Silk Screen Printed Wristbands"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 1 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/Screen Print page/printed-bracelets-for-ndb-bank.webp"
                  alt="Silk Screen Wristband 1"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 2 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/Screen Print page/rubber-hand-bands-printed.webp"
                  alt="Silk Screen Rubber Wristbands"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 3 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/Screen Print page/identification-wristbands-for-mas-holdings.webp"
                  alt="Silk Screen Silicone Wristbands"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 4 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/Screen Print page/qr-wrist-bracelets-srilanka.webp"
                  alt="Silk Screen Printed Handbands"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 5 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/Screen Print page/screen-print-rubber-bands-srilanka.webp"
                  alt="Custom Silk Screen Wristband Sri Lanka"
                  fill
                  className="object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
