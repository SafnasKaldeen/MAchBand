import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Award,
  Users,
  Globe,
  Heart,
  Zap,
  Target,
  Handshake,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-300">
      {/* Header - Matching Landing Page */}
      <header className="border-b bg-white sticky top-0 z-40 h-30 px-6">
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
                <Link href="/" className="text-3xl font-bold text-blue-900">
                  Home
                </Link>
                <Link
                  href="/#products"
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
                  className="text-3xl font-bold text-blue-900 underline decoration-amber-300 decoration-4 underline-offset-8"
                >
                  About Us
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="tel:+94704925375"
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
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">
              About Mach Wristbands Lanka
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Mach Wristbands Lanka, we don't just make handbands—we empower
              schools, universities, organizations, and events across Sri Lanka
              with custom silicone wristbands, bracelets, keychains, and
              promotional products that leave a lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
                  Who We Are
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Founded in 2024 by passionate university students, we've
                  quickly become a leading provider of premium wristbands and
                  accessories. With affordable pricing, creative designs, and
                  fast delivery, we're trusted by schools, campuses, charities,
                  and businesses alike.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In a short time, we've even exported our products to
                  international markets, expanding our reach beyond Sri Lanka.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/Final-Web-Images/Images/Mach-Wristband-Logo.png"
                  alt="Mach Wristbands Lanka Team"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-900 text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                      Our Mission
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      To be the top choice for custom wristbands and promotional
                      products, combining quality, creativity, and craftsmanship
                      so every product helps you spread your message, promote
                      causes, and make events unforgettable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-blue-900">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              We specialize in custom silicone wristbands, debossed or printed
              bangles, keychains, and silicone keytags, ensuring premium quality
              and attention to detail.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    Zero Artwork Fees
                  </h3>
                  <p className="text-gray-700">
                    Free custom designs for your wristbands—no hidden charges
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    Low Minimum Orders
                  </h3>
                  <p className="text-gray-700">
                    Flexible ordering for any event or campaign size
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    Fast Service
                  </h3>
                  <p className="text-gray-700">
                    Quick turnaround times to meet your deadlines
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    Friendly Support
                  </h3>
                  <p className="text-gray-700">
                    Super friendly customer service every step of the way
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Communities */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-amber-300 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-10 w-10" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Supporting Schools, Universities & Communities
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                After our 1-year anniversary, we launched partnership programs
                to support school and university events. We proudly contribute
                to fundraisers, charity donations, awareness campaigns, and
                student events, making a meaningful impact in the community.
              </p>
            </div>

            {/* Image Section */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-300">
              <Image
                src="/Final-Web-Images/Images/About us.webp"
                alt="Mach Wristbands Lanka supporting schools and communities"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-blue-900">
              Our Commitment
            </h2>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-10">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  From production to packaging, we carefully monitor every step
                  to ensure every product meets our high standards. Our focus on
                  durability, precision, and design excellence guarantees that
                  your wristbands and accessories perfectly reflect your brand,
                  cause, or event.
                </p>
                <p className="text-xl text-blue-900 font-semibold text-center">
                  Choose Mach Wristbands Lanka for premium custom wristbands,
                  handbands, and promotional products that stretch, shine, and
                  make your events or brand unforgettable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Mach Wristbands
            Lanka for their custom wristband needs.
          </p>
          <Link
            href="https://wa.me/+94704925375"
            target="_blank"
            className="inline-block bg-amber-300 font-bold text-black px-8 py-4 rounded-lg shadow-md hover:bg-amber-400 transition-colors text-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

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
