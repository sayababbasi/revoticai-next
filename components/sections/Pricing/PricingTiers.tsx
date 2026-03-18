
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Rocket, Crown, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter AI",
    price: "Custom",
    description: "Ideal for small businesses looking for quick automation wins and MVPs.",
    image: "/images/pricing/starter-tier.png",
    icon: Rocket,
    features: [
      "Single-domain AI Automation",
      "Custom Workflow Design",
      "API Integration (Standard)",
      "Weekly Progress Reports",
      "Email Support"
    ],
    buttonText: "Launch MVP",
    highlight: false
  },
  {
    name: "Professional AI",
    price: "Custom",
    description: "Deep AI integration for scaling businesses needing custom internal tools.",
    image: "/images/industries/fintech-ai.png", // Reusing high-quality asset
    icon: Zap,
    features: [
      "Multi-module AI Architectures",
      "Advanced Predictive Analytics",
      "Custom RAG Implementations",
      "24/7 System Monitoring",
      "Dedicated Technical Lead"
    ],
    buttonText: "Scale Intelligence",
    highlight: true
  },
  {
    name: "Enterprise AI",
    price: "Quote",
    description: "White-glove service for market leaders building autonomous infrastructure.",
    image: "/images/industries/industries-hero.png", // Reusing high-quality asset
    icon: Crown,
    features: [
      "Full Autonomous Ecosystems",
      "Proprietary Model Fine-tuning",
      "On-premise / Hybrid Cloud Deployment",
      "Priority R&D Access",
      "Quarterly Strategic Reviews"
    ],
    buttonText: "Partner with Us",
    highlight: false
  }
];

const PricingTiers: React.FC = () => {
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#b1ff32] font-black uppercase tracking-[0.3em] text-sm mb-4 block">
            Pricing Models
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tighter">
            Investment in Intelligence
          </h2>
          <p className="text-gray-600 text-lg">
            We don't sell software; we architect business outcomes. Choose a tier that aligns with your scaling objectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`flex flex-col rounded-[3rem] p-1 border ${
                tier.highlight 
                  ? "bg-neutral-950 border-[#b1ff32]/30 shadow-[0_40px_100px_-20px_rgba(177,255,50,0.2)]" 
                  : "bg-white border-gray-100 shadow-xl"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image Header */}
              <div className="relative h-48 rounded-[2.8rem] overflow-hidden m-2">
                <img 
                  src={tier.image} 
                  alt={tier.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center space-x-3">
                  <div className={`p-2 rounded-xl ${tier.highlight ? "bg-[#b1ff32] text-black" : "bg-white text-black"}`}>
                    <tier.icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-xl font-black uppercase tracking-tighter ${tier.highlight ? "text-white" : "text-white"}`}>
                    {tier.name}
                  </h3>
                </div>
              </div>

              {/* Pricing Content */}
              <div className="px-8 py-8 flex-grow">
                <div className="mb-6">
                  <span className={`text-4xl font-black ${tier.highlight ? "text-white" : "text-black"}`}>
                    {tier.price}
                  </span>
                  <p className={`text-sm mt-2 font-medium ${tier.highlight ? "text-gray-400" : "text-gray-500"}`}>
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3 group cursor-default">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border ${
                        tier.highlight 
                          ? "border-[#b1ff32]/30 text-[#b1ff32]" 
                          : "border-gray-200 text-gray-400 group-hover:border-[#b1ff32] group-hover:text-[#b1ff32]"
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={`text-sm font-semibold transition-colors ${
                        tier.highlight ? "text-gray-300" : "text-gray-700 group-hover:text-black"
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-300 ${
                    tier.highlight
                      ? "bg-[#b1ff32] text-black hover:bg-white"
                      : "bg-neutral-900 text-white hover:bg-[#b1ff32] hover:text-black shadow-lg"
                  }`}
                >
                  {tier.buttonText}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
