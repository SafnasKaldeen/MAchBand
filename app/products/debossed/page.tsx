import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import Back from "@/components/Back";

export default function DebossedPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Game Profile Style */}
      <section className="relative w-full">
        {/* Background Image with Blur Effect */}
        {/* ✅ Mobile Background Image */}
        <div className="absolute inset-0 h-screen lg:hidden">
          <Image
            src="/Final-Web-Images/Images/Debossed page/debossed-handbands-printing-lanka.webp"
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
            src="/Final-Web-Images/Images/Debossed page/deboss-silicon-wristband-price.webp"
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
            backgroundImage: `url(/Final-Web-Images/Images/Debossed page/debossed-handbands-printing-lanka.webp)`,
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
                  DEBOSSED/ENGRAVED & INK FILLED WRISTBANDS
                </h1>
                <p className="text-lg md:text-xl mb-4 text-gray-200">
                  Your design is engraved into the band and then filled with
                  vibrant, colorful finish.
                </p>
                <p className="text-2xl md:text-3xl font-bold text-green-300 mb-8">
                  The Classic – Our Most Popular
                </p>
              </div>

              {/* Image Grid - 4 Images */}
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                {/* Image 1 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/Debossed page/embossed-rubber-handbands.webp"
                    alt="Debossed Wristband 1"
                    width={300}
                    height={200}
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 2 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/Debossed page/1 inch-silicon-wristband-debossed.webp"
                    alt="Debossed Wristband 2"
                    width={300}
                    height={200}
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 3 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/Debossed page/debossed-rubber-wristbands.webp"
                    alt="Debossed Wristband 3"
                    width={300}
                    height={200}
                    className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 4 */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/Final-Web-Images/Images/Debossed page/emboss-silicone-wristbands.webp"
                    alt="Debossed Wristband 4"
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
                DEBOSSED/ENGRAVED & INK FILLED WRISTBANDS
              </h1>

              {/* Info Badges */}
              <div className="flex flex-row items-center mb-8">
                <span className="flex flex-col ml-3 badge p-5 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg">
                  <span className="text-xl font-semibold">
                    Silicone Material
                  </span>
                </span>
                <div className="font-bold ml-3 border-2 border-green-400 p-3 rounded text-green-400">
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
                      src="/Final-Web-Images/Images/Debossed page/embossed-rubber-handbands.webp"
                      alt="Debossed Wristband 1"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/Debossed page/1 inch-silicon-wristband-debossed.webp"
                      alt="Debossed Wristband 2"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/Debossed page/debossed-rubber-wristbands.webp"
                      alt="Debossed Wristband 3"
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/Final-Web-Images/Images/Debossed page/emboss-silicone-wristbands.webp"
                      alt="Debossed Wristband 4"
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
                      Your design is engraved into the band and then filled with
                      vibrant, colorful finish.
                    </p>
                    <p className="text-2xl font-bold text-green-300 mb-6">
                      The Classic – Our Most Popular Choice
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Debossed Ink-Fill */}
      <section className="bg-gray-50 py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            What is Debossed Ink-Fill?
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Your design is engraved into the band and then filled with
              long-lasting ink.
            </p>
            <p>
              The ink sits below the surface, protecting it from scratches and
              fading.
            </p>
            <p>
              Gives you the premium look of engraving with the vivid colors of
              printing.
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
                  Band & Ink Shades:
                </h3>
                <p>2200+ Pantone-matched colors</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-blue-600 mb-2">
                  Special Effects:
                </h3>
                <p>
                  Figured watch style, dual-layer, luminous text, numbering,
                  QR/barcodes, adjustable snap-buttons
                </p>
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
              • Durable & waterproof – made to last through daily use and
              outdoor events
            </p>
            <p>• Comfortable fit – soft, stretchable, safe for all ages</p>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="bg-white py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ideal for a wide range of organizations and events — durable,
              colorful, and unforgettable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-lg text-blue-600 mb-2 flex items-center gap-2">
                🎓 Schools & Universities
              </h3>
              <p className="text-gray-700">
                Great for student IDs, clubs, and awareness campaigns on campus.
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-lg text-green-600 mb-2 flex items-center gap-2">
                💚 Fundraising & Charities
              </h3>
              <p className="text-gray-700">
                Create unity and recognition for charitable causes and social
                drives.
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-lg text-purple-600 mb-2 flex items-center gap-2">
                🎤 Events & Concerts
              </h3>
              <p className="text-gray-700">
                Perfect for concerts, parties, and festivals — stylish and
                secure.
              </p>
            </div>

            {/* Item 4 */}
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-lg text-orange-600 mb-2 flex items-center gap-2">
                🏢 Corporate Branding
              </h3>
              <p className="text-gray-700">
                Build brand visibility at trade shows, marketing campaigns, and
                seminars.
              </p>
            </div>

            {/* Item 5 */}
            <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-lg text-teal-600 mb-2 flex items-center gap-2">
                📚 Tuition Class Marketing
              </h3>
              <p className="text-gray-700">
                Give your students a sense of identity while promoting your
                institution.
              </p>
            </div>

            {/* Item 6 (new addition for balance) */}
            <div className="bg-pink-50 p-8 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1">
              <h3 className="font-bold text-lg text-pink-600 mb-2 flex items-center gap-2">
                💡 Awareness Campaigns
              </h3>
              <p className="text-gray-700">
                Spread awareness for social causes, events, or special
                initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Improved Gallery Section */}
      <section className="bg-gray-200 py-16 px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              General Specification
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our premium debossed wristband collection with vibrant
              ink-filled designs
            </p>
          </div>

          {/* 3x3 Grid with 2x2 featured image */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Large Featured Image - 2x2 */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
              <div className="relative w-full h-full min-h-96">
                <Image
                  src="/Final-Web-Images/Images/Debossed page/emboss-debossed-rubber-wrsitbands.webp"
                  alt="ROLEX Debossed Bands"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 1 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/Debossed page/1 inch-silicon-wristband-debossed.webp"
                  alt="1 inch Silicon Wristband"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 2 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/Debossed page/debossed-rubber-wristbands.webp"
                  alt="Debossed Rubber Wristbands"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Small Image 3 */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src="/Final-Web-Images/Images/Debossed page/emboss-silicone-wristbands.webp"
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
                  src="/Final-Web-Images/Images/Debossed page/embossed-rubber-handbands.webp"
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
                  src="/Final-Web-Images/Images/Debossed page/deboss-custom-wristband-sri-lanka.webp"
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
