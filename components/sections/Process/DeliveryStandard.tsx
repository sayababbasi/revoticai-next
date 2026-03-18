"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Heart, Globe } from "lucide-react";

const standards = [
  {
    title: "Zero-Boring Guarantee",
    description: "We don't do 'okay.' Every interface we ship is designed to wow users and elevate your brand's digital presence.",
    icon: <Zap className="w-6 h-6 text-[#b1ff32]" />
  },
  {
    title: "The Hands-On Approach",
    description: "You work directly with the engineers building your product. No account managers, no message-passing, no friction.",
    icon: <Heart className="w-6 h-6 text-[#b1ff32]" />
  },
  {
    title: "Production-First Mindset",
    description: "We build for the real world. Our code is optimized for high traffic, security, and long-term maintenance from day one.",
    icon: <Shield className="w-6 h-6 text-[#b1ff32]" />
  },
  {
    title: "Radical Transparency",
    description: "You'll have a real-time view of our progress via shared dev environments and direct Slack communication.",
    icon: <Globe className="w-6 h-6 text-[#b1ff32]" />
  }
];

const DeliveryStandard: React.FC = () => {
  return (
    <section className="bg-neutral-900/30 py-24 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Delivery <span className="text-[#b1ff32]">Standard</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our process is backed by internal benchmarks that ensure we never ship anything less than elite-grade software.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {standards.map((standard, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-3xl bg-black border border-white/5 hover:border-[#b1ff32]/30 transition-all duration-500 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#b1ff32]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {standard.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">
                {standard.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {standard.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryStandard;
