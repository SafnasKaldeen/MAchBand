import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function CMYKPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Game Profile Style */}
      <section className="relative w-full">
        {/* Background Image with Blur Effect */}
        {/* ✅ Mobile Background Image */}
        <div className="absolute inset-0 h-screen lg:hidden">
          <Image
            src="/Final-Web-Images/Images/CMYK print page/full-color-printed-bangles.webp"
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
            src="/Final-Web-Images/Images/CMYK print page/printed-event-identification-bangles.webp"
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
            backgroundImage: `url(/Final-Web-Images/Images/CMYK print page/full-color-printed-bangles.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            opacity: 0.4,
          }}
        ></div>

        {/* Desktop Layout - Dark Overlay with Gradient */}
        <div className="absolute inset-0 h-screen bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        {/* Main Content Container */}
        <div className="relative z-10 min-h-screen">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="container mx-auto px-6 pt-4 pb-4">
              {/* Text Content */}
              <div className="max-w-3xl mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                  CMYK FULL COLOR PRINTED WRISTBANDS
                </h1>
                <p className="text-lg md:text-xl mb-4 text-gray-200">
                  Photo-quality prints that move, flex, and stay vibrant all
                  day.
                </p>
                <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-8">
                  Premium Full-Color Custom Printing
                </p>
              </div>

              {/* Image Grid - 4 Images */}
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                {/* Image 1 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/CMYK print page/custom-printed-handbands.webp"
                    alt="CMYK Wristband 1"
                    width={300}
                    height={200}
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 2 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/CMYK print page/full-color-printed-bracelets.webp"
                    alt="CMYK Wristband 2"
                    width={300}
                    height={200}
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 3 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/CMYK print page/printed-cmyk-silicon-handbands.webp"
                    alt="CMYK Wristband 3"
                    width={300}
                    height={200}
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 4 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/CMYK print page/personalised-silicon-wristbands.webp"
                    alt="CMYK Wristband 4"
                    width={300}
                    height={200}
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Game Profile Style */}
          <div className="hidden lg:block relative">
            <div className="container mx-auto px-8 pt-8">
              {/* Title Section */}
              <h1 className="text-7xl text-white mb-4 font-bold z-10 leading-tight">
                CMYK FULL COLOR PRINTED WRISTBANDS
              </h1>

              {/* Info Badges */}
              <div className="flex flex-row items-center mb-8">
                <span className="flex flex-col ml-3 badge p-5 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg">
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

              {/* Main Content with Images */}
              <div className="flex flex-col mb-8">
                {/* Image Grid - 4 Images */}
                <div className="grid grid-cols-4 gap-6 max-w-6xl mb-12">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/CMYK print page/custom-printed-handbands.webp"
                      alt="CMYK Wristband 1"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/CMYK print page/full-color-printed-bracelets.webp"
                      alt="CMYK Wristband 2"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/CMYK print page/printed-cmyk-silicon-handbands.webp"
                      alt="CMYK Wristband 3"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/CMYK print page/personalised-silicon-wristbands.webp"
                      alt="CMYK Wristband 4"
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
                      Photo-quality prints that move, flex, and stay vibrant all
                      day.
                    </p>
                    <p className="text-2xl font-bold text-yellow-300 mb-6">
                      Premium Full-Color Custom Printing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is CMYK Full Color Printing */}
      <section className="bg-gray-50 py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            What is CMYK Full Color Printing?
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              <strong>Process:</strong> Inks are applied in overlapping layers
              on the wristband, allowing seamless color blending and
              photorealistic results.
            </p>
            <p>
              <strong>Design Capability:</strong> Supports detailed imagery,
              intricate patterns, and gradients for vibrant,
              professional-quality designs.
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
                <h3 className="font-bold text-lg text-yellow-600 mb-2">
                  Widths:
                </h3>
                <p>6 mm, 12 mm (most popular), 15 mm, 20 mm, 25 mm</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-yellow-600 mb-2">
                  Sizes:
                </h3>
                <p>160 mm, 180 mm, 190 mm, 202 mm, 210 mm</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-yellow-600 mb-2">
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
                <h3 className="font-bold text-lg text-yellow-600 mb-2">
                  Special Effects:
                </h3>
                <p>Figured watch style, glitter, adjustable snap-buttons</p>
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
                  • <strong>Vibrant, Multi-Color Designs:</strong> Perfect for
                  detailed logos, images, and gradients
                </p>
                <p>
                  • <strong>Unlimited Colors at No Extra Cost:</strong> Full
                  creative freedom for complex designs
                </p>
                <p>
                  • <strong>Durable & Flexible:</strong> Silicone print
                  stretches with the band, so it won't crack or peel
                </p>
              </div>
            </div>

            {/* Disadvantages */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Disadvantages
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  • <strong>Fading Over Time:</strong> Heavy wear or harsh
                  conditions can reduce print longevity
                </p>
                <p>
                  • <strong>Higher Setup Cost:</strong> Small runs or very
                  detailed prints can be pricier
                </p>
                <p>
                  • <strong>Minor Color Variability:</strong> Slight differences
                  may occur due to ink layering
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
              Explore our premium CMYK full color printed wristband collection
              with photorealistic designs
            </p>
          </div>

          {/* 3x3 Grid with 2x2 featured image */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Large Featured Image - 2x2 */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
              <div className="relative w-full h-full min-h-96">
                <Image
                  src="/Final-Web-Images/Images/CMYK print page/full-color-printed-hand-bands.webp"
                  alt="CMYK Full Color Printed Wristbands"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 1 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/CMYK print page/custom-printed-handbands.webp"
                  alt="CMYK Full Color Silicone Wristbands"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 2 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/CMYK print page/full-color-printed-bracelets.webp"
                  alt="CMYK Printed Handbands"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 3 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/CMYK print page/printed-cmyk-silicon-handbands.webp"
                  alt="CMYK Printed Wristbands Sri Lanka"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 4 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/CMYK print page/personalised-silicon-wristbands.webp"
                  alt="CMYK Silicon Wristbands"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 5 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/CMYK print page/anime-bangles-printed.webp"
                  alt="Custom CMYK Wristband Sri Lanka"
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
