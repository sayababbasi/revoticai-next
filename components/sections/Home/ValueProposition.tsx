"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Inlined SVG Icon (for the annotation) ---
const ArrowCurveIcon = () => (
  <svg
    width="60"
    height="40"
    viewBox="0 0 60 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M58 2C44.8333 4.66667 14.8 17.6 2 38"
      stroke="#4b5563"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 4"
    />
    <path
      d="M6 32L2 38L8 38.5"
      stroke="#4b5563"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

// --- Scrolling Text Data ---
const backgroundText =
  "Transforming Ideas into Intelligent Reality ✦ Innovate with AI ✦ ";
// Duplicate for seamless loop
const allBackgroundText = [
  backgroundText,
  backgroundText,
  backgroundText,
  backgroundText,
];

const ValueProposition: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* --- 1. Background Scrolling Text --- */}
      {/* This container scrolls from right to left */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div className="w-max flex animate-scroll-slow">
          {allBackgroundText.map((text, index) => (
            <span
              key={index}
              className="text-[10vw] lg:text-[120px] font-extrabold text-gray-100 whitespace-nowrap px-8"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* --- 2. Main Content (Image & Annotation) --- */}
      {/* This sits on top of the background text */}
      <motion.div
        className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
      >
        <div className="relative flex items-center">
          {/* --- Annotation Text & Arrow --- */}
          <div className="hidden md:flex items-center">
            <div className="text-right max-w-[200px] mr-2">
              <h4 className="font-semibold text-gray-800">
                At Revotic AI, we deliver powerful solutions with
              </h4>
              <p className="text-sm text-gray-500">
                no hidden costs or limitations.
              </p>
            </div>
            <ArrowCurveIcon />
          </div>

          {/* --- Central Image --- */}
          {/* This is a placeholder for your 3D graphic. 
            Replace the 'src' with your actual image path (e.g., /images/wallet.png)
            Your design: https://i.imgur.com/image_927861.png
          */}
          <img
            src="https://placehold.co/400x300/ffffff/000000?text=Your+3D+Graphic+Here&font=inter"
            alt="No hidden costs"
            className="w-64 md:w-80 lg:w-96 rounded-lg shadow-2xl"
          />

          {/* --- Annotation for Mobile --- */}
          <div className="block md:hidden text-center max-w-xs mt-6">
            <h4 className="font-semibold text-gray-800">
              At Revotic AI, we deliver powerful solutions with
            </h4>
            <p className="text-sm text-gray-500">
              no hidden costs or limitations.
            </p>
          </div>
        </div>
      </motion.div>

      {/* CSS for the scroller animation */}
      <style jsx global>{`
        /* ADD THIS TO YOUR 'tailwind.config.js' file in the 'extend' section:
          
          theme: {
            extend: {
              animation: {
                'scroll-slow': 'scroll 60s linear infinite',
              },
              keyframes: {
                scroll: {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-50%)' },
                }
              }
            }
          }
        */

        /* Fallback if you don't edit tailwind.config.js */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-slow {
          /* Using a slower 60s duration */
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ValueProposition;
