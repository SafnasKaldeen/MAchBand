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

      // Give the script a moment to initialize and inject content
      setTimeout(() => {
        console.log("Checking for injected widgets...");
        const formWidget = document.getElementById("shapo-form-d789aaa69a");
        const reviewWidget = document.getElementById(
          "shapo-widget-81fcf30f2c46d5c4fbe3"
        );
        console.log("Form widget found:", !!formWidget?.innerHTML);
        console.log("Review widget found:", !!reviewWidget?.innerHTML);
      }, 500);
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
    <section className="py-20 bg-white flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our customers love working with us
          </h2>
          <p className="text-gray-600 text-lg">
            because we put their needs first, they trust us and keep coming
            back.
          </p>
        </div>

        {/* Loading indicator */}
        {!scriptLoaded && (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600">Loading reviews...</p>
            </div>
          </div>
        )}

        <div
          className="max-w-7xl mx-auto px-4"
          style={{
            opacity: scriptLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {/* Reviews Display Widget */}
            <div className="min-h-[400px] flex items-center">
              <div
                id="shapo-widget-81fcf30f2c46d5c4fbe3"
                className="w-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
