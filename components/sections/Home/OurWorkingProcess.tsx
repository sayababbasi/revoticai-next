"use client";

import React from "react";

// --- Inlined SVG Icon (to prevent build errors) ---
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

// --- Inlined Data for the 3 Process Cards ---
const processSteps = [
  {
    title: "Discovery & Research",
    description:
      "We begin by understanding your business needs, current workflow, and goals to align AI solutions effectively.",
    points: [
      "Analyze existing systems & pain points",
      "Identify opportunities for automation or AI",
      "Define use-case & success metrics",
    ],
  },
  {
    title: "Solution Architecture",
    description:
      "Our AI experts create a tailored strategy combining AI/ML models, data pipelines, and user experience flow.",
    points: [
      "Design data flow and processing pipeline",
      "Select appropriate AI/ML models",
      "Design user experience around automation",
    ],
  },
  {
    title: "Development & Deployment",
    description:
      "We build, train, and deploy your AI solution with real-time monitoring and continuous improvement support.",
    points: [
      "Model training and API integration",
      "Deploy to scalable cloud infrastructure",
      "Monitor results and optimize iteratively",
    ],
  },
];

// --- Inlined Data for the Image Scroller ---
// (Duplicates are added to create the seamless loop)
const workImages = [
  { title: "AI Dashboards", src: "images/sliderproduct/dash-img-333.png" },
  { title: "E-Commerce", src: "images/sliderproduct/mext.jpg" },
  { title: "Web Development", src: "images/sliderproduct/web-dev-2.webp" },
  { title: "App Development", src: "images/sliderproduct/product.webp" },
  { title: "AI/ML Model", src: "images/sliderproduct/fweb-3.jpg" },
  { title: "SAAS Product", src: "images/sliderproduct/product-dev-2.webp" },
  { title: "CRM Platform", src: "images/sliderproduct/hhuiu.webp" },
];
const allWorkImages = [...workImages, ...workImages]; // Duplicate for seamless loop

// --- Main Working Process Component ---
const WorkingProcess: React.FC = () => {
  return (
    // Section with dark theme
    <section className="bg-black text-white py-20 md:py-28 overflow-hidden">
      {/* --- Section Header (matches screenshot) --- */}
      <div className="container mx-auto px-6 text-center mb-16">
        <h3 className="inline-flex items-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          <span className="w-8 h-px bg-gray-600 mr-3"></span>
          Our Working Process
          <span className="w-8 h-px bg-gray-600 ml-3"></span>
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Transforming Ideas into Intelligent AI Solutions
        </h2>
      </div>

      {/* --- Top Part: 3 Process Cards --- */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div
              key={step.title}
              // Card styling from screenshot
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-6"
            >
              <h4 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h4>
              <p className="text-gray-400 text-sm mb-5">
                {step.description}
              </p>
              <ul className="space-y-3">
                {step.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="text-gray-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* --- Bottom Part: Wide Image Scroller --- */}
      {/* This 'w-full' and 'overflow-hidden' creates the "wide range" effect */}
      <div
        className="group w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-scroll group-hover:pause">
          {allWorkImages.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-60 mx-4 text-center">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg shadow-lg mb-3"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/200x150/f00/fff?text=Error')}
              />
              <p className="text-sm font-semibold text-gray-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* This CSS defines the 'scroll' animation. 
        It needs to be added to your global CSS file (e.g., globals.css or animations.css)
        and configured in your 'tailwind.config.js'
      */}
      <style jsx global>{`
        /* ADD THIS TO YOUR 'tailwind.config.js' file in the 'extend' section:
          
          theme: {
            extend: {
              animation: {
                scroll: 'scroll 40s linear infinite',
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

        /* This is the fallback if you don't edit tailwind.config.js */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .group-hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default WorkingProcess;
