"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function TrustindexReviews() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleScriptLoad = () => {
    console.log("Trustindex script loaded successfully");
    setScriptLoaded(true);
  };

  const handleScriptError = (error) => {
    console.error("Failed to load Trustindex script:", error);
  };

  if (!isClient) {
    return (
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our customers love working with us
            </h2>
            <p className="text-gray-600 text-lg">
              because we put their needs first, they trust us and keep coming
              back.
            </p>
          </div>
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600">Loading reviews...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Load Trustindex base script */}
      <Script
        src="https://cdn.trustindex.io/loader.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        onError={handleScriptError}
      />

      <section className="py-20 bg-white mx-0 px-0">
        <div className="container mx-auto px-0">
          {/* Header */}
          <div className="text-center mb-32">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our customers love working with us
            </h2>
            <p className="text-gray-600 text-lg">
              because we put their needs first, they trust us and keep coming
              back.
            </p>
          </div>

          {/* Trustindex Widget Container */}
          <div className="max-w-6xl mx-auto min-h-[400px] relative">
            {/* Loading indicator - shown only before script loads */}
            {!scriptLoaded && (
              <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                  <p className="text-gray-600">Loading reviews...</p>
                </div>
              </div>
            )}

            {/* Special div with src attribute - tells Trustindex where to inject widget */}
            {scriptLoaded && (
              <div
                src="https://cdn.trustindex.io/loader.js?4e8af5d561d43182ff5620e654d"
                style={{ minHeight: "400px", minWidth: "100%" }}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
