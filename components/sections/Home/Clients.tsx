

"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Inlined SVG Icon (to prevent build errors) ---
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 ml-2"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// --- Inlined Client Data (Row 1) ---
const clientsRow1 = [
  { name: "Alisha E-Shop", logo: "/images/clients/alishaeshop.png" },
  { name: "La Mosaik", logo: "/images/clients/lamosaik.webp" },
  { name: "Minzay", logo: "/images/clients/minzay.avif" },
  { name: "Astoud", logo: "/images/clients/astoud.webp" },
  { name: "Koala Eco", logo: "/images/clients/KoalaEco-Logo.svg" },
  { name: "Haryali Store", logo: "/images/clients/haryalistore.webp" },
  { name: "Pak Style", logo: "/images/clients/pakstyle.avif" },
];


// --- Inlined Client Data (Row 2) ---
const clientsRow2 = [
  { name: "Feature Learn", logo: "/images/clients/futurelearn.svg" },
  { name: "Bangash", logo: "/images/clients/bangashcontainers.jpg" },
  { name: "Go Flour", logo: " /images/clients/goflour.webp" },
  { name: "Qisaaye", logo: "/images/clients/qisaaye.webp" },
  { name: "Xcessories Hub", logo: "/images/clients/xcessorieshub.webp" },
  { name: "Loaf", logo: "/images/clients/loaf.png" },
];

// Duplicate for seamless loop
const allClients1 = [...clientsRow1, ...clientsRow1];
const allClients2 = [...clientsRow2, ...clientsRow2];

// --- Main OurClients Component ---
const OurClients: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* --- Section Header --- */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            <h2 className="text-sm font-semibold text-black uppercase tracking-wider">
              Trusted by 100+ Companies
            </h2>
            <ArrowRightIcon />
          </div>

          {/* --- Metrics & Social Proof --- */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 opacity-90">
            <div className="flex items-center gap-3">
              <div className="font-bold text-xl md:text-2xl">4.9/5</div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-sm font-semibold">Clutch Rating</span>
                <span className="text-xs text-gray-500">⭐️⭐️⭐️⭐️⭐️</span>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
            <div className="flex flex-col items-start leading-tight">
              <span className="font-bold text-xl md:text-2xl">100+</span>
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Clients Worldwide</span>
            </div>
            <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
            <div className="flex flex-col items-start leading-tight">
              <span className="font-bold text-xl md:text-2xl">15+</span>
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Countries Served</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- Scroller Container --- 
        This div fades the edges of the scrollers
      */}
      <div
        className="w-full relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* --- Row 1 (Scrolls Right to Left) --- */}
        <div className="flex w-max animate-scroll-rtl">
          {allClients1.map((client, index) => (
            <div
              key={`r1-${index}`}
              className="flex-shrink-0 w-64 h-36 mx-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-6"
            >
              {/* <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-12 object-contain"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/150x60/f00/fff?text=Logo+Error')}
              /> */}
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-20 md:max-h-24 object-contain transition-transform duration-300 hover:scale-105"
                onError={(e) =>
                (e.currentTarget.src =
                  "https://placehold.co/200x80/f00/fff?text=Logo+Error")
                }
              />

            </div>
          ))}
        </div>

        {/* --- Row 2 (Scrolls Left to Right) --- */}
        <div className="flex w-max animate-scroll-ltr mt-8">
          {allClients2.map((client, index) => (
            <div
              key={`r2-${index}`}
              className="flex-shrink-0 w-64 h-36 mx-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-6"
            >
              {/* <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-12 object-contain"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/150x60/f00/fff?text=Logo+Error')}
              /> */}
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-16 md:max-h-18 object-contain transition-transform duration-300 hover:scale-105"
                onError={(e) =>
                (e.currentTarget.src =
                  "https://placehold.co/200x80/f00/fff?text=Logo+Error")
                }
              />

            </div>
          ))}
        </div>
      </div>

      {/* --- CSS for the Animations --- 
        You MUST add these animations to your 'tailwind.config.js'
        and 'globals.css' for them to work.
      */}
      <style jsx global>{`
        /* ADD THIS TO 'tailwind.config.js' (inside theme.extend.animation):
          animation: {
            'scroll-rtl': 'scroll-rtl 40s linear infinite',
            'scroll-ltr': 'scroll-ltr 40s linear infinite',
          },
          
          ADD THIS TO 'tailwind.config.js' (inside theme.extend.keyframes):
          keyframes: {
            'scroll-rtl': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
            'scroll-ltr': {
              '0%': { transform: 'translateX(-50%)' },
              '100%': { transform: 'translateX(0)' },
            }
          }
        */

        /* Fallback definitions in case config is not edited */
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-rtl {
          animation: scroll-rtl 40s linear infinite;
        }
        .animate-scroll-ltr {
          animation: scroll-ltr 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OurClients;
