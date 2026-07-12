"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/src/Constants/faqs";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-36 bg-background">
      <div className="site-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-20 text-primary font-headline">
          Dúvidas Frequentes
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-benefits rounded-2xl transition-all duration-300 border border-transparent hover:border-secondary/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-primary">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-secondary transition-transform duration-300 shrink-0 cursor-pointer ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-foreground/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
