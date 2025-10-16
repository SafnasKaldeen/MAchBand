"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function EnhancedFAQSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const initialFAQs = [
    {
      question: "How much do custom wristbands cost?",
      answer:
        "Prices start as low as LKR 40 per wristband, depending on style, quantity, and customization. For detailed pricing, contact us via WhatsApp.",
    },
    {
      question: "What is the turnaround time for orders?",
      answer:
        "Standard orders are typically completed within 10–14 business days. Rush orders can be accommodated; please contact us for availability.",
    },
    {
      question: "What wristband styles do you offer?",
      answer:
        "We offer a variety of styles, including deboss, emboss, screen printed, CMYK full color, figured wristbands, and watch-style wristbands.",
    },
  ];

  const additionalFAQs = [
    {
      question: "Can I order different colors or sizes with the same design?",
      answer:
        "Yes, you can mix and match colors and sizes within the same design. Please note that this may affect the overall price.",
    },
    {
      question: "Can I change my order after submission?",
      answer:
        "Changes can be made within 24 hours of order placement. Please contact us immediately to discuss any modifications.",
    },
    {
      question: "Do you send samples?",
      answer:
        "Yes, we offer samples for a nominal fee. Please reach out to us for more information.",
    },
    {
      question: "What material are your wristbands made of?",
      answer:
        "Our bracelets are made from 100% high-quality, hypoallergenic silicone rubber, ensuring comfort and durability.",
    },
    {
      question: "What colors do you have?",
      answer:
        "Yes, we can match your desired color using Pantone color matching. We have more than 2200+ Pantone colors for you to choose from.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer:
        "Yes, we offer special pricing for non-profit organizations. Please contact us with your organization's details to receive a quote.",
    },
    {
      question: "Can you help with designs if I don't have one?",
      answer:
        "Of course! Even if you don't have a ready design, our team has you covered with a free design service. Just share your idea or even a rough sketch, and we'll turn it into a professional design that's optimized for the best print results.",
    },
    {
      question: "Do you offer thicker wristbands?",
      answer:
        "Yes, we offer wristbands in various thicknesses. Please specify your preference when placing your order.",
    },
    {
      question: "Do you have a price chart?",
      answer:
        "No, rates are based on your design, colors, quantity, and style, as all are customized to your requirement. To get the best price, talk to one of our agents.",
    },
    {
      question: "Do you offer cash on delivery?",
      answer:
        "Currently, we accept payments via cash, bank transfer, and online payment gateways. Cash on delivery is not available at this time.",
    },
    {
      question: "Is there a minimum order quantity for custom wristbands?",
      answer: "Yes, our minimum order quantity is 50 wristbands per design.",
    },
    {
      question: "Can I get my wristbands in a rush?",
      answer:
        "Yes, we offer rush orders for an additional fee. Please contact us to discuss your timeline and requirements.",
    },
    {
      question: "Do your wristbands glow in the dark?",
      answer:
        "Yes, we offer glow-in-the-dark (radium) bangles. Please specify this option when placing your order.",
    },
    {
      question: "Can I mix different wristband color styles in one order?",
      answer:
        "Yes, you can mix different color styles within the same order. Please note that this may affect the overall price.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer international shipping. Shipping fees and delivery times vary depending on the destination.",
    },
    {
      question: "Can I see a digital proof before production?",
      answer:
        "Yes, we provide a digital proof of your design for approval before production begins. Production is done exactly as in the final artwork that's confirmed.",
    },
    {
      question: "How durable are your wristbands?",
      answer:
        "Our wristbands are designed to be durable, stretchable, and long-lasting, ensuring they withstand everyday use. We do not use any cheap, low-quality materials, so you don't have to worry at all.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer:
        "Yes, we offer bulk discounts for large orders. Please contact us for a customized quote based on your order quantity.",
    },
    {
      question: "Can I reorder the same design in the future?",
      answer:
        "Yes, we keep your design on file for easy reordering. Simply provide your order details, and we'll take care of the rest.",
    },
  ];

  const allFAQs = isExpanded
    ? [...initialFAQs, ...additionalFAQs]
    : initialFAQs;

  return (
    <div>
      <div className="container mx-auto px-4 bg-white">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Custom Silicone Hand Bands Frequently Asked Questions
          </h2>

          <div className="rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 p-8 shadow-xl">
            {/* Scrollable Container */}
            <div
              className={`space-y-4 overflow-y-auto transition-all duration-500 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-500 pr-2 ${
                isExpanded ? "max-h-[600px]" : "max-h-auto"
              }`}
            >
              {allFAQs.map((faq, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden bg-white"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3">
                      {index + 1}. {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Discover More Button */}
            <div className="text-center mt-8 pt-6 border-t border-gray-300">
              <Button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-black hover:bg-gray-800 font-semibold text-white px-8 py-6 text-sm transition-all duration-300"
                size="lg"
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    Discover More <ChevronDown className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 4px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #9ca3af;
          border-radius: 4px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </div>
  );
}
