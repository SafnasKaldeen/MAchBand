import react from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50 h-20 px-6">
      <div className="w-full h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-16">
            <Link href="/" className="flex items-center">
              <div className="rounded-full w-18 h-18 flex items-center justify-center border-blue-900/60">
                <Image
                  src="/Mach-Wristband-Logo.png"
                  alt="Mach Wristbands Logo"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#home" className="text-xl font-bold text-blue-900">
                Home
              </Link>

              <Link
                href="/#products"
                className="text-xl font-bold text-blue-900"
              >
                Products
              </Link>
              <Link href="/gallery" className="text-xl font-bold text-blue-900">
                Gallery
              </Link>
              <Link href="/about" className="text-xl font-bold text-blue-900">
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
  );
}
