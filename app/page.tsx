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
import TrustindexReviews from "@/components/TrustindexReviews";
import Header from "@/components/header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="bg-gradient-to-b from-blue-50 to-white"
        style={{ height: "calc(100vh - 80px)" }} // Changed from 5rem to exact 80px
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
                title: "Debossed Ink-Filled",
                subtitle: "Classic Engraved",
                image:
                  "/Final-Web-Images/Images/Home-page-Imprint-section/silicon-deboss-wristbands-lanka.webp",
                href: "/products/debossed",
              },
              {
                title: "Embossed Silicone",
                subtitle: "Raised & Colorful",
                image:
                  "/Final-Web-Images/Images/Home-page-Imprint-section/emboss-print-hand-bands.webp",
                href: "/products/embossed-printed",
              },
              {
                title: "Screen Printed",
                subtitle: "Vibrant & Detailed",
                image:
                  "/Final-Web-Images/Images/Home-page-Imprint-section/Screen-printed-bangles.webp",
                href: "/products/silk",
              },
              {
                title: "Full-Color CMYK Printed",
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

      {/* Reviews Section */}
      <section id="reviews" className="bg-white mx-0 px-0">
        <TrustindexReviews />
      </section>

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
      <Footer />
    </div>
  );
}
