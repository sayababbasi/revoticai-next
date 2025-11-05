"use client";

import React, { useState, useEffect } from "react";
// We will use Framer Motion for the animation, as it's in your stack.
import { motion, AnimatePresence } from "framer-motion";

// --- Inlined SVG Icons (to prevent build errors) ---
const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-[#b1ff32] flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Inlined Product Data (as requested) ---
const products = [
  {
    id: "crm",
    title: "AI-Powered CRM",
    subtitle: "Customer Relationship Management",
    description:
      "Our AI-CRM automatically analyzes customer interactions to provide deep insights, predict sales, and automate follow-ups, letting your team focus on building relationships.",
    features: [
      "Predictive Lead Scoring",
      "Automated Data Entry",
      "Sentiment Analysis",
    ],
    image:
      "/images/product/dashb-dev-3.jpg",
  },
  {
    id: "bms",
    title: "Intelligent BMS",
    subtitle: "Business Management System",
    description:
      "A unified platform to manage your projects, finances, and HR. Our AI identifies inefficiencies and suggests optimizations for your entire workflow.",
    features: [
      "Automated Project Reporting",
      "AI-Powered Financial Forecasting",
      "Smart Resource Allocation",
    ],
    image:
      "/images/product/dashb-dev-3.jpg",
  },
  {
    id: "automation",
    title: "Robotic Process Automation",
    subtitle: "Automation Tools",
    description:
      "Eliminate repetitive manual tasks. Our RPA bots can handle everything from data entry and report generation to complex system integrations, 24/7.",
    features: [
      "Cross-Platform Integration",
      "No-Code Bot Builder",
      "Scalable Cloud Infrastructure",
    ],
    image:
      "/images/product/automation-tool1.png",
  },
  {
    id: "ecommerce",
    title: "AI E-commerce Platform",
    subtitle: "Smart Online Stores",
    description:
      "Go beyond a simple storefront. Our platform uses AI to deliver personalized product recommendations, dynamic pricing, and automated inventory management.",
    features: [
      "AI Recommendation Engine",
      "Dynamic Pricing Models",
      "Automated Inventory Sync",
    ],
    image:
      "/images/product/web-dev-1.webp",
  },
];

// --- Main Product Showcase Component ---
const ProductShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === products.length - 1 ? 0 : prev + 1
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer); // Clear timer on unmount
  }, [currentIndex]);

  const activeProduct = products[currentIndex];

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* --- Section Header (New Heading) --- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-wider font-semibold mb-3">
            <span className="bg-[#b1ff32] text-black px-2 py-1 rounded">
              Our Products
            </span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Explore Our AI-Powered Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From smart CRMs to full-scale automation, our products are built to
            solve real-world business challenges and drive growth.
          </p>
        </div>

        {/* --- Main Content Container --- */}
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
          {/* --- Animation Container --- */}
          {/* This will fade between products */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                
                {/* --- Left Side (Image) --- */}
                <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.title}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x500/f00/fff?text=Error')}
                  />
                </div>

                {/* --- Right Side (Details) --- */}
                <div className="flex flex-col justify-center">
                  <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                    {activeProduct.subtitle}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    {activeProduct.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {activeProduct.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {activeProduct.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckIcon />
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <a
                      href="/contact"
                      className="group inline-flex items-center justify-center px-6 py-3 bg-[#b1ff32] text-black font-bold rounded-lg text-base transition-transform duration-300 hover:scale-105"
                    >
                      Request a Demo
                    </a>
                    <a
                      href="/products"
                      className="group inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-800 font-bold rounded-lg text-base transition-all duration-300 hover:bg-gray-200"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* --- Custom Navigation Buttons --- */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute top-1/2 left-4 md:left-6 -translate-y-1/2 z-10 p-2 rounded-full bg-white/70 shadow-md hover:bg-white transition-all"
          >
            <ArrowLeftIcon />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute top-1/2 right-4 md:right-6 -translate-y-1/2 z-10 p-2 rounded-full bg-white/70 shadow-md hover:bg-white transition-all"
          >
            <ArrowRightIcon />
          </button>

          {/* --- Dot Indicators --- */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-[#b1ff32] w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

