"use client";

import { useEffect, useState } from "react";

export default function TrustindexReviews() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists
    if (document.getElementById("shapo-embed-js")) {
      setScriptLoaded(true);
      return;
    }

    // Create and load script manually
    const script = document.createElement("script");
    script.id = "shapo-embed-js";
    script.src = "https://cdn.shapo.io/js/embed.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log("Shapo script loaded successfully");
      setScriptLoaded(true);
    };

    script.onerror = (error) => {
      console.error("Failed to load Shapo script:", error);
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      const existingScript = document.getElementById("shapo-embed-js");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
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

        {/* Shapo Widget Container */}
        <div className="max-w-[90vw] mx-auto min-h-[400px] relative">
          {/* Loading indicator */}
          {!scriptLoaded && (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-600">Loading reviews...</p>
              </div>
            </div>
          )}

          {/* Shapo widget div - must exist for script to inject */}
          <div
            id="shapo-widget-81fcf30f2c46d5c4fbe3"
            style={{
              minHeight: scriptLoaded ? "400px" : "0",
              opacity: scriptLoaded ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
