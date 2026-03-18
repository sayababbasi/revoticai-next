"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BlogCTA: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.95]">
              Let's Build Your <br />
              <span className="text-white">AI-Powered </span>
              <span className="text-white/40">Future</span>
            </h2>
            
            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              Ready to transform your business with intelligent automation and smarter applications? Our team is here to help you scale.
            </p>

            <Link href="/contact" className="inline-block group">
              <div className="px-10 py-5 bg-[#b1ff32] text-black rounded-full text-sm font-black uppercase tracking-widest flex items-center space-x-3 hover:scale-105 transition-transform duration-300 shadow-[0_20px_40px_rgba(177,255,50,0.2)]">
                <span>Book a Free Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;
