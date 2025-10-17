import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
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
  );
}
