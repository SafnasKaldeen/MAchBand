import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HeroCarousel } from "@/components/hero-carousel";
import TrustSection from "@/components/TrustSection";
import GallerySlider from "@/components/GallerySlider";
import ExportQualitySection from "@/components/ExportQualitySection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 h-30 px-6">
        <div className="w-full h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-16">
              <Link href="/" className="flex items-center">
                <div className="rounded-full w-26 h-26 flex items-center justify-center border-blue-900/60">
                  <Image
                    src="/Mach-Wristband-Logo.png"
                    alt="Mach Wristbands Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
              <nav className="hidden md:flex items-center gap-8">
                <Link href="#home" className="text-3xl font-bold text-blue-900">
                  Home
                </Link>

                <Link
                  href="#products"
                  className="text-3xl font-bold text-blue-900"
                >
                  Products
                </Link>
                <Link
                  href="/gallery"
                  className="text-3xl font-bold text-blue-900"
                >
                  Gallery
                </Link>
                <Link
                  href="/about"
                  className="text-3xl font-bold text-blue-900"
                >
                  About Us
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="tel:+94 070 492 5375"
                className="hidden md:flex items-center gap-2 text-sm font-medium"
              >
                <Phone className="h-4 w-4" />
                +94 070 492 5375
              </a>
              <Link
                href="https://wa.me/+94704925375"
                target="_blank"
                className="inline-block bg-amber-300 font-bold text-black px-5 py-2 rounded-lg shadow-md hover:bg-amber-400 transition-colors"
              >
                Get a Quotation
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="bg-gradient-to-b from-blue-50 to-white"
        style={{ height: "calc(100vh - 7rem)" }}
      >
        <HeroCarousel />
      </section>

      {/* Signature Imprint Styles */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text">
              Signature Imprint Styles
            </h2>
            <p className="text-lg text-gray-600">
              Each style can be customized with a wide range of options
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Debossed",
                subtitle: "Classic Engraved",
                image:
                  "/Final-Web-Images/Images/Home-page-Imprint-section/silicon-deboss-wristbands-lanka.webp",
                href: "/products/debossed",
              },
              {
                title: "Embossed",
                subtitle: "Raised & Colorful",
                image:
                  "/Final-Web-Images/Images/Home-page-Imprint-section/emboss-print-hand-bands.webp",
                href: "/products/embossed-printed",
              },
              {
                title: "Screen-printing",
                subtitle: "Vibrant & Detailed",
                image:
                  "/Final-Web-Images/Images/Home-page-Imprint-section/Screen-printed-bangles.webp",
                href: "/products/silk",
              },
              {
                title: "CMYK",
                subtitle: "Bold Raised Design",
                image:
                  "/Final-Web-Images/Images/Home-page-Imprint-section/CMYK-full-color-print-bracelets.webp",
                href: "/products/cmyk",
              },
            ].map((band, index) => (
              <Link key={index} href={band.href} className="group">
                <Card className="overflow-hidden border-0 py-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full rounded-2xl flex flex-col">
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src={band.image}
                      alt={`${band.title} Wristband`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Top-left badges */}
                    <div className="absolute top-3 left-3 flex flex-row items-center gap-2">
                      <span className="bg-gray-200 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md group-hover:bg-visa-yellow group-hover:text-visa-blue transition-colors">
                        {band.title}
                      </span>

                      <span className="bg-blue-600/80 text-white text-[11px] font-medium px-2 py-0.5 rounded-full backdrop-blur-sm shadow-md">
                        LKR 56.00
                      </span>
                    </div>

                    {/* Bottom-right Read More button */}
                    <div className="absolute bottom-3 right-3">
                      <Button className="bg-gray-200 text-black/80 text-xs font-semibold px-3 py-1 rounded-lg shadow-md hover:bg-blue-800 transition-colors">
                        View More -&gt;
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* Gallery Section */}
      <section id="gallery" className="bg-white">
        <GallerySlider />
      </section>

      {/* Export Quality Section */}
      <section className="py-20 bg-gray-100 text-black">
        <ExportQualitySection />
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <FAQSection />
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose Mach Wristbands Lanka
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
                <p className="text-muted-foreground">
                  Need it fast? Our 3-day rush service ensures your handbands
                  arrive on time (T&C apply).
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">₨</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Best Pricing Guaranteed
                </h3>
                <p className="text-muted-foreground">
                  Premium quality wristbands at prices that make sense. Get
                  unbeatable value without compromising on design, comfort, or
                  durability.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">⚙</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Industry-Leading Technology
                </h3>
                <p className="text-muted-foreground">
                  With advanced mold technology, precision color, and
                  eco-friendly materials, we produce durable, premium wrist
                  bands you can trust.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">😊</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Happiness</h3>
                <p className="text-muted-foreground">
                  Our friendly support team is dedicated to getting it right
                  every time, offering free designs and guidance so you always
                  walk away satisfied.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-gray-200 text-black py-12 relative overflow-hidden">
        <div className="container mx-auto w-max-8xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-4">
            {/* Left Section - Logo and Description */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-lg">
                <Image
                  src="/Mach-Wristband-Logo.png"
                  alt="Mach Wristbands Logo"
                  width={20}
                  height={20}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Mach Wristbands Lanka takes pride in being Sri Lanka's leading
                silicone handband supplier, delivering world-class custom
                wristbands and promo products. We fuse creativity, quality, and
                care to help people connect with brands and causes — redefining
                trust, quality, and innovation.
              </p>
            </div>

            {/* Center Section - Information and Social */}
            <div className="md:col-span-5 flex flex-col items-center justify-start">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-center text-black">
                  INFORMATION
                </h3>
                <ul className="space-y-3 text-center">
                  <li>
                    <Link
                      href="/faq"
                      className="text-blue-900 hover:text-blue-700 transition-colors text-lg font-semibold"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-blue-900 hover:text-blue-700 transition-colors text-lg font-semibold"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-center text-black">
                  GET IN TOUCH
                </h3>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://www.facebook.com/profile.php?id=61560428199706"
                    className="bg-gray-600 hover:bg-gray-700 text-white rounded-full w-14 h-14 flex items-center justify-center transition-colors shadow-lg"
                  >
                    <Facebook className="h-9 w-9" />
                  </a>
                  <a
                    href="https://www.instagram.com/machwristbands_lanka/"
                    className="bg-gray-600 hover:bg-gray-700 text-white rounded-full w-14 h-14 flex items-center justify-center transition-colors shadow-lg"
                  >
                    <Instagram className="h-9 w-9" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@machwristbandslanka"
                    className="bg-gray-600 hover:bg-gray-700 text-white rounded-full w-14 h-14 flex items-center justify-center transition-colors shadow-lg"
                  >
                    <svg
                      className="h-9 w-9"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@MachWristbandsLanka"
                    className="bg-gray-600 hover:bg-gray-700 text-white rounded-full w-14 h-14 flex items-center justify-center transition-colors shadow-lg"
                  >
                    <Youtube className="h-9 w-9" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Address */}
            <div className="md:col-span-4">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Address</h3>
              <div className="space-y-3 text-blue-900">
                <p className="font-semibold text-lg">
                  No. 1, 4 Bandaranayake Mawatha,
                  <br />
                  Moratuwa,
                  <br />
                  Sri Lanka.
                </p>
                <div className="space-y-1 text-blue-900">
                  <p>Mon-Fri : 8.00 AM to 6.00 PM</p>
                  <p>Saturday : 8.30 AM to 2.00 PM</p>
                  <p>Sunday : Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <p className="text-center text-black font-bold">
            © 2025 Mach Wristbands Lanka. All rights reserved.
          </p>

          {/* Yellow Circle Decoration */}
          <div className="absolute bottom-4 right-4 w-32 h-32 bg-yellow-400 rounded-full shadow-2xl hidden lg:block"></div>
        </div>
      </footer>
    </div>
  );
}
