
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do you determine custom pricing for the Starter/Pro tiers?",
    answer: "Our pricing is architected based on the complexity of the neural models, the volume of data processed, and the number of integration points required. We conduct a Phase 0 audit to define the exact scope before providing a firm investment quote."
  },
  {
    question: "Do you offer 'Proof of Concept' development?",
    answer: "Yes. Our Starter Tier is specifically designed for high-velocity MVP and PoC development. We focus on delivering a functional AI module within 2-4 weeks to validate ROI before full-scale integration."
  },
  {
    question: "Is enterprise data used to train public AI models?",
    answer: "Absolutely not. We prioritize data sovereignty. All Enterprise and Pro implementations use private, siloed environments. Your proprietary data never leaves your infrastructure and is never used for external model training."
  },
  {
    question: "What is the typical ROI timeline for an AI implementation?",
    answer: "While it varies by industry, most of our clients see operational efficiency gains within the first 60 days. The full ROI (Strategic Value) typically matures within 4-6 months as the system scales across the organization."
  },
  {
    question: "Can these AI systems be deployed on-premise?",
    answer: "Yes. For Enterprise clients with strict security requirements, we offer hybrid and full on-premise deployment options using high-density compute architecture and containerized AI engines."
  }
];

const PricingFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Heading */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <HelpCircle className="w-12 h-12 text-[#b1ff32] mb-6" />
              <h2 className="text-4xl font-black text-black mb-6 tracking-tighter leading-tight">
                Common Strategic Questions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Transparency is at the core of our technical partnerships. If you have a specific procurement or security concern not addressed here, contact our research lead.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-bold text-gray-900 group-hover:text-[#b1ff32] transition-colors pr-8">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center transition-all ${
                    openIndex === index ? "bg-black text-white" : "text-gray-400 group-hover:border-[#b1ff32] group-hover:text-[#b1ff32]"
                  }`}>
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
