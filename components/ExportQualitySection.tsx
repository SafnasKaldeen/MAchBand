import { Globe } from "lucide-react";

export default function ExportQualitySection() {
  return (
    <section className="bg-gray-100 text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-[90vw] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-3xl font-bold mb-4 text-blue-900">
              Trusted Worldwide
            </p>
            <h3 className="text-sm md:text-2xl font-semibold mb-6">
              Export Quality Wristbands from Sri Lanka
            </h3>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Globe Graphic */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src="/Final-Web-Images/Images/Home-page/Worldwide Shipping with Trusted Global Carriers.webp"
                  alt="Worldwide Shipping with Trusted Global Carriers"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              <div className="relative w-full aspect-square max-w-md mx-auto hidden">
                {/* Animated globe background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full opacity-50"></div>

                {/* Globe icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe
                    className="w-64 h-64 text-blue-600 opacity-20"
                    strokeWidth={0.5}
                  />
                </div>

                {/* Country pins */}
                <div className="absolute top-[20%] left-[15%] flex flex-col items-center gap-1 animate-pulse">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                  <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                    Nigeria
                  </span>
                </div>

                <div
                  className="absolute top-[25%] left-[30%] flex flex-col items-center gap-1 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                  <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                    Uganda
                  </span>
                </div>

                <div
                  className="absolute top-[30%] left-[35%] flex flex-col items-center gap-1 animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                  <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                    Kenya
                  </span>
                </div>

                <div
                  className="absolute top-[15%] right-[20%] flex flex-col items-center gap-1 animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                  <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                    Japan
                  </span>
                </div>

                <div
                  className="absolute top-[20%] right-[30%] flex flex-col items-center gap-1 animate-pulse"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                  <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                    Kuwait
                  </span>
                </div>

                <div
                  className="absolute top-[10%] right-[40%] flex flex-col items-center gap-1 animate-pulse"
                  style={{ animationDelay: "2.5s" }}
                >
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                  <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                    Netherlands
                  </span>
                </div>

                {/* Center - Sri Lanka */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                  <div className="w-5 h-5 bg-blue-600 rounded-full shadow-xl animate-ping"></div>
                  <div className="w-5 h-5 bg-blue-600 rounded-full shadow-xl absolute top-0"></div>
                  <span className="text-sm font-bold text-blue-900 mt-4">
                    Sri Lanka
                  </span>
                </div>

                {/* Decorative circles */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-200 opacity-30"></div>
                <div className="absolute inset-8 rounded-full border-2 border-blue-300 opacity-20"></div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                We proudly export{" "}
                <span className="font-bold text-gray-900">
                  premium custom silicone wristbands
                </span>{" "}
                from <span className="font-bold text-gray-900">Sri Lanka</span>{" "}
                to{" "}
                <span className="font-bold text-gray-900">
                  Nigeria, Uganda, Kenya, Japan, the Netherlands, and Kuwait
                </span>
                . Each band is made with{" "}
                <span className="font-bold text-gray-900">
                  high-grade silicone
                </span>{" "}
                for exceptional{" "}
                <span className="font-bold text-gray-900">
                  durability, flexibility
                </span>
                , and{" "}
                <span className="font-bold text-gray-900">
                  vibrant long-lasting color
                </span>{" "}
                that meets{" "}
                <span className="font-bold text-gray-900">
                  international quality standards
                </span>
                .
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                When you choose us, you get the same{" "}
                <span className="font-bold text-gray-900">
                  export-level quality
                </span>{" "}
                trusted{" "}
                <span className="font-bold text-gray-900">worldwide</span> —
                Hand bands & bangles that{" "}
                <span className="font-bold text-gray-900">
                  look better, feel stronger, and last longer
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
