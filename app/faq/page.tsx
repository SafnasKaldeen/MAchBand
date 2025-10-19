"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";

const faqs = [
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Header />
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-700">
                Find answers to common questions about our custom wristbands
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-blue-50 transition-colors duration-300"
                  >
                    <span className="text-lg font-semibold text-blue-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-6 w-6 text-blue-900 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 py-5 bg-blue-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-3 text-blue-900">
                Still Have Questions?
              </h3>
              <p className="text-gray-700 mb-6">
                Our friendly team is here to help. Get in touch with us for
                personalized assistance.
              </p>
              <Link
                href="https://wa.me/+94704925375"
                target="_blank"
                className="inline-block bg-amber-300 font-bold text-black px-8 py-3 rounded-lg shadow-md hover:bg-amber-400 transition-colors"
              >
                Contact Us on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
