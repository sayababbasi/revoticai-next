"use client";

import React from "react";
// Using <a> tag as a fallback for Link
// import Link from "next/link"; 
import { ArrowRight } from "lucide-react";

// Inline SVG as a fallback
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2 group-hover:translate-x-1 transition-transform"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const CTA: React.FC = () => {
  return (
    <section className="bg-white text-white">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div
          className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 p-12 md:p-16 lg:p-20 text-center"
          // Subtle background grid pattern
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        >
          {/* Glowing orb effect */}
          <div className="absolute -top-1/3 -right-1/4 w-1/2 h-1/2 bg-[#b1ff32]/20 rounded-full blur-[150px] opacity-60 z-0" />
          <div className="absolute -bottom-1/3 -left-1/4 w-1/2 h-1/2 bg-[#b1ff32]/10 rounded-full blur-[120px] opacity-50 z-0" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let's Build Your AI-Powered Future
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Ready to transform your business with intelligent automation and
              smarter applications? Our team is here to help you scale.
            </p>
            {/* Using <a> tag as a fallback to avoid Link error */}
            <a
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#b1ff32] text-black font-bold rounded-full text-lg transition-transform duration-300 hover:scale-105"
            >
              Book a Free Call
              {/* Using component, but fallback is defined above */}
              <ArrowRight
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                strokeWidth={2.5}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

