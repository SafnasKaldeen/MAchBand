import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function EmbossedPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Game Profile Style */}
      <section className="relative w-full">
        {/* Background Image with Blur Effect */}
        {/* ✅ Mobile Background Image */}
        <div className="absolute inset-0 h-screen lg:hidden">
          <Image
            src="/Final-Web-Images/Images/Embossed page/embossed-printed-bracelets.webp"
            alt="Embossed Full Color Printed Wristbands"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        </div>

        {/* ✅ Desktop Background Image */}
        <div className="hidden lg:block absolute inset-0 h-screen">
          <Image
            src="/Final-Web-Images/Images/Embossed page/emboss-silcon-wristbandlanka.webp"
            alt="Embossed Full Color Printed Wristbands Desktop"
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
            backgroundImage: `url(/Final-Web-Images/Images/Embossed page/embossed-printed-bracelets.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            opacity: 0.4,
          }}
        ></div>

        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 h-screen bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>

        {/* Main Content Container */}
        <div className="relative z-10 min-h-screen">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="container mx-auto px-6 pt-4 pb-4">
              {/* Text Content */}
              <div className="max-w-3xl mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                  EMBOSSED & PRINTED WRISTBANDS
                </h1>
                <p className="text-lg md:text-xl mb-4 text-gray-200">
                  Your design is raised above the surface of the band, and can
                  be finished with vibrant ink printing to make it stand out
                  even more.
                </p>
                <p className="text-2xl md:text-3xl font-bold text-cyan-300 mb-8">
                  The Bold Choice – A tactile and eye-catching wristband style.
                </p>
              </div>

              {/* Image Grid - 4 Images */}
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                {/* Image 1 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/Embossed page/embossed-segmented-wristband.webp"
                    alt="Embossed Wristband 1"
                    width={300}
                    height={200}
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 2 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/Embossed page/embossed-custom-silicone-wristbands.webp"
                    alt="Embossed Wristband 2"
                    width={300}
                    height={200}
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 3 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/Embossed page/emboss-rubber-wristbands-srilanka.webp"
                    alt="Embossed Wristband 3"
                    width={300}
                    height={200}
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 4 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/Embossed page/embos-silicon-handbands.webp"
                    alt="Embossed Wristband 4"
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
                Embossed/ENGRAVED & INK FILLED WRISTBANDS
              </h1>

              {/* Info Badges */}
              <div className="flex flex-row items-center mb-8">
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

              {/* Main Content with Images */}
              <div className="flex flex-col mb-8">
                {/* Image Grid - 4 Images */}
                <div className="grid grid-cols-4 gap-6 max-w-6xl mb-12">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/Embossed page/embossed-segmented-wristband.webp"
                      alt="Embossed Wristband 2"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/Embossed page/embossed-custom-silicone-wristbands.webp"
                      alt="Embossed Wristband 2"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/Embossed page/emboss-rubber-wristbands-srilanka.webp"
                      alt="Embossed Wristband 3"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/Embossed page/embos-silicon-handbands.webp"
                      alt="Embossed Wristband 4"
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
      <section className="bg-gray-50 py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            What is Embossed Printing?
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>Your design is molded to rise above the wristband surface.</p>
            <p>Optional ink printing adds vivid colors to the raised design.</p>
            <p>Creates a 3D look and feel that makes text and logos pop.</p>
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
                <h3 className="font-bold text-lg text-blue-600 mb-2">
                  Widths:
                </h3>
                <p>6 mm, 12 mm (most popular), 15 mm, 20 mm, 25 mm</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-blue-600 mb-2">Sizes:</h3>
                <p>160 mm, 180 mm, 190 mm, 202 mm, 210 mm</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-blue-600 mb-2">
                  Band Colors:
                </h3>
                <p>
                  Solid, segmented (4–5 colors), swirl, glow-in-the-dark (radium
                  effect)
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-blue-600 mb-2">
                  Print & Band Colors:
                </h3>
                <p>2200+ Pantone matched shades</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-blue-600 mb-2">
                  Special Effects:
                </h3>
                <p>Dual-layer, metallic ink, adjustable snap-buttons</p>
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
            <p>• Durable & waterproof</p>
            <p>
              • Raised design makes text and logos instantly noticeable to the
              touch
            </p>
            <p>
              • Ink printing option allows for colorful, high-contrast
              visibility
            </p>
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
                <p>• 3D raised effect gives a bold and premium look</p>
                <p>• Ink highlights make logos and text stand out clearly</p>
                <p>
                  • Tactile texture adds a unique feel compared to flat bands
                </p>
                <p>• Durable silicone base ensures long-lasting use</p>
              </div>
            </div>

            {/* Disadvantages */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Disadvantages
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  • Ink on raised surfaces (if Coloured) can wear off more
                  quickly with heavy use
                </p>
                <p>
                  • Design limitations – very fine details or small text may
                  lose clarity
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
              Explore our premium Embossed wristband collection with vibrant
              ink-filled designs
            </p>
          </div>

          {/* 3x3 Grid with 2x2 featured image */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Large Featured Image - 2x2 */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
              <div className="relative w-full h-full min-h-96">
                <Image
                  src="/Final-Web-Images/Images/Embossed page/embossed-printed-hand-bands-lanka.webp"
                  alt="ROLEX Embossed Bands"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 1 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/Embossed page/embossed-segmented-wristband.webp"
                  alt="Embossed Wristband 1"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 2 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/Embossed page/embossed-custom-silicone-wristbands.webp"
                  alt="Embossed Rubber Wristbands"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 3 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/Embossed page/embos-silicon-handbands.webp"
                  alt="Emboss Silicone Wristbands"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 4 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/Embossed page/emboss-rubber-wristbands-srilanka.webp"
                  alt="Embossed Rubber Handbands"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 5 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/Embossed page/printed-embossed-bracelet.webp"
                  alt="Custom Wristband Sri Lanka"
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
