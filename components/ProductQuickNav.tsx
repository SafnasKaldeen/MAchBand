"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ProductQuickNav() {
  const [activeProduct, setActiveProduct] = useState("");
  const pathname = usePathname();

  const products = [
    {
      id: "debossed",
      label: "Debossed",
      path: "/products/debossed",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      shadowColor: "shadow-green-500/50",
      borderColor: "border-green-500",
    },
    {
      id: "embossed",
      label: "Embossed",
      path: "/products/embossed-printed",
      color: "bg-cyan-500",
      hoverColor: "hover:bg-cyan-600",
      shadowColor: "shadow-cyan-500/50",
      borderColor: "border-cyan-500",
    },
    {
      id: "silk",
      label: "Silk Screen",
      path: "/products/silk",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      shadowColor: "shadow-purple-500/50",
      borderColor: "border-purple-500",
    },
    {
      id: "cmyk",
      label: "CMYK",
      path: "/products/cmyk",
      color: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
      shadowColor: "shadow-yellow-500/50",
      borderColor: "border-yellow-500",
    },
  ];

  useEffect(() => {
    // Determine active product based on current pathname
    const currentProduct = products.find((p) => pathname?.includes(p.id));
    if (currentProduct) {
      setActiveProduct(currentProduct.id);
    }
  }, [pathname]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-3">
          {products.map((product) => {
            const isActive = activeProduct === product.id;
            return (
              <Link
                key={product.id}
                href={product.path}
                className="group relative"
                aria-label={`Navigate to ${product.label}`}
              >
                {/* Bookmark Tab */}
                <div
                  className={`
                    relative transition-all duration-300 ease-out
                    ${
                      isActive
                        ? "translate-x-0"
                        : "-translate-x-[55%] group-hover:translate-x-0"
                    }
                  `}
                >
                  {/* Bookmark shape */}
                  <div
                    className={`
                      relative rounded-r-lg
                      ${product.color} ${product.hoverColor}
                      text-white font-bold text-sm
                      shadow-lg ${isActive ? product.shadowColor : ""}
                      transition-all duration-300
                      flex items-center justify-center
                      ${
                        isActive
                          ? "w-14 h-32"
                          : "w-12 h-24 group-hover:w-10 group-hover:h-32"
                      }
                    `}
                  >
                    {/* Product name - Vertical */}
                    <span
                      className={`
                        transition-opacity duration-300
                        ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }
                      `}
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {product.label}
                    </span>

                    {/* Active indicator dot */}
                    {isActive && (
                      <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}

                    {/* Small indicator line when collapsed */}
                    {!isActive && (
                      <div className="w-1 h-8 bg-white/50 rounded-full group-hover:opacity-0 transition-opacity"></div>
                    )}
                  </div>

                  {/* Shadow effect for depth */}
                  <div
                    className={`
                      absolute inset-0 rounded-r-lg -z-10
                      ${product.color} opacity-50 blur-md
                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-50"
                      }
                      transition-opacity duration-300
                    `}
                  ></div>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation - Dots */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 lg:hidden">
        <div className="flex flex-col gap-4">
          {products.map((product) => {
            const isActive = activeProduct === product.id;
            return (
              <Link
                key={product.id}
                href={product.path}
                className="group relative"
                aria-label={`Navigate to ${product.label}`}
              >
                {/* Dot indicator */}
                <div
                  className={`
                    w-4 h-4 rounded-full transition-all duration-300
                    ${product.color}
                    ${
                      isActive
                        ? `ring-4 ring-white ${product.shadowColor} shadow-lg scale-125`
                        : "scale-100"
                    }
                    group-hover:scale-125
                  `}
                ></div>

                {/* Tooltip on hover */}
                <div
                  className={`
                    absolute right-8 top-1/2 -translate-y-1/2
                    bg-white rounded-lg shadow-lg px-3 py-2
                    whitespace-nowrap text-sm font-semibold
                    opacity-0 group-hover:opacity-100
                    pointer-events-none transition-all duration-300
                    border-2 ${
                      isActive ? product.borderColor : "border-gray-300"
                    }
                  `}
                  style={{
                    transform: "translateY(-50%) translateX(-8px)",
                  }}
                >
                  <span
                    className={
                      isActive
                        ? product.color.replace("bg-", "text-")
                        : "text-gray-700"
                    }
                  >
                    {product.label}
                  </span>
                  {/* Arrow pointing to dot */}
                  <div
                    className={`
                      absolute right-[-6px] top-1/2 -translate-y-1/2
                      w-0 h-0 border-l-[6px] border-y-[6px]
                      border-y-transparent
                      ${isActive ? product.borderColor : "border-l-gray-300"}
                    `}
                  ></div>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
}
