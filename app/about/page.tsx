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
import Footer from "@/components/Footer";
import Header from "@/components/header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-300">
      {/* Header - Matching Landing Page */}
      {/* <Header /> */}

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
      <section className="py-10 bg-white">
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
      <Footer />
    </div>
  );
}
