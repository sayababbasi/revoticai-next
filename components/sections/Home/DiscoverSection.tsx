"use client";

import React, { useState, useEffect } from "react";

// --- Inlined SVG Icons (to prevent build errors) ---

// Inlined Play Icon (with hover animation)
const PlayIcon = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-all duration-300 group-hover:scale-110"
  >
    <circle cx="50" cy="50" r="50" fill="white" fillOpacity="0.1" />
    <circle cx="50" cy="50" r="40" fill="white" fillOpacity="0.8" />
    <path
      d="M62.5 48.1699C64.5 49.3155 64.5 52.2889 62.5 53.4345L46.75 62.3923C44.75 63.5379 42.25 62.0512 42.25 59.7622L42.25 41.8421C42.25 39.5531 44.75 38.0664 46.75 39.212L62.5 48.1699Z"
      fill="#0a0a0a"
    />
  </svg>
);

// Inlined Close (X) Icon
const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
  >
    <path
      d="M18 6L6 18"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Inlined Sparkle Icon (for 'New' tag)
const SparkleIcon = () => (
  <svg
    className="w-3 h-3"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 0L7.10294 4.89706L12 6L7.10294 7.10294L6 12L4.89706 7.10294L0 6L4.89706 4.89706L6 0Z"
      fill="#b1ff32"
    />
  </svg>
);

const DiscoverSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Effect to lock scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* --- Main Section (Light Theme) --- */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          {/* --- Section Header (New Heading) --- */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">
              Discover Revotic AI
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Welcome to Our World of Innovation
            </h2>
            <p className="text-lg text-gray-600">
              A glimpse into our work, culture, and the future we're building
              with intelligent automation.
            </p>
          </div>

          {/* --- Video Placeholder --- */}
          <div
            className="group relative max-w-5xl mx-auto rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src="\images\product\revoticai-office.webp"
              alt="Revotic AI Office"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/60"></div>
            {/* Play Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <PlayIcon />
            </div>
          </div>

          {/* --- Caption --- */}
          <p className="text-center text-gray-500 italic max-w-2xl mx-auto mt-8">
            One platform. Endless possibilities. Empowering businesses with AI,
            automation & innovation.
          </p>
        </div>
      </section>

      {/* --- Neon Yellow Bar --- */}
      <div className="bg-[#b1ff32] text-black">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-2 md:gap-4">
          <span className="flex-shrink-0 bg-black text-white text-xs font-bold uppercase px-3 py-1 rounded-full flex items-center gap-1.5">
            <SparkleIcon />
            New
          </span>
          <span className="font-medium text-sm">
            We're constantly adding smarter tools & features. Stay tuned for
            what's next!
          </span>
        </div>
      </div>

      {/* --- Video Modal --- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white z-[120] hover:text-gray-300 transition-colors"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close video player"
          >
            <CloseIcon />
          </button>

          {/* Video Player */}
          <div
            className="relative w-full max-w-4xl h-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on video
          >
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden shadow-2xl">
              {/* Replace this with your actual video embed URL */}
              
              <iframe
               width="900" height="506" 
               src="https://www.youtube.com/embed/aAvDI1qae-U" 
               title="Revotic AI Marketing Video" 
               allow="accelerometer; autoplay;"></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DiscoverSection;
