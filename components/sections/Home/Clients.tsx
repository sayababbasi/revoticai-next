// "use client";

// import React from "react";
// // Removed next/image to prevent build errors, using <img> instead.

// // 1. Fixed import: Changed path from alias to relative
// import clientLogos from "../../../data/clients.json"; 

// // 2. Fixed variable name: Used 'clientLogos' to build the array
// const allLogos = [...clientLogos, ...clientLogos];

// const Clients: React.FC = () => {
//   const placeholderLogo =
//     "https://placehold.co/150x60/f1f5f9/94a3b8?text=Client";

//   return (
//     <section className="bg-white py-16 md:py-24">
//       <div className="container mx-auto px-6 text-center">
//         <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-10">
//           Powering the world's best companies
//         </h3>

//         {/* - `group` class added here to make 'group-hover:pause' work
//           - `overflow-hidden` hides the duplicated logos
//           - `[mask-image]` creates the fade-out effect on the sides
//         */}
//         <div
//           className="group relative w-full overflow-hidden" // 3. Added 'group' class
//           style={{
//             maskImage:
//               "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
//           }}
//         >
//           {/* - `animate-scroll` is a custom animation
//             - `w-max` ensures all items are in a single, non-wrapping line
//             - `group-hover:pause` will pause the animation on hover
//           */}
//           <div className="flex w-max animate-scroll group-hover:pause">
//             {allLogos.map((logo, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-40 h-20 mx-8 flex items-center justify-center"
//               >
//                 {/* 4. Replaced <Image> with <img> to fix build error */}
//                 {/* 5. Using logo.src from the imported JSON */}
//                 <img
//                   src={logo.src || placeholderLogo} 
//                   alt={logo.name}
//                   width={140}
//                   height={50}
//                   className="object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
//                   // Fallback for broken images
//                   onError={(e) => (e.currentTarget.src = placeholderLogo)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* This animation CSS is now correctly placed.
//         It defines the 'scroll' animation and the 'pause' on hover.
//       */}
//       <style jsx global>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }
//         .group-hover\\:pause:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Clients;

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
  { name: "LUSH", logo: "/images/clients/lusd.png" },
  { name: "Huda Beauty", logo: "/images/clients/huda.png" },
  { name: "Retailo", logo: "/images/clients/retailo.png" },
  { name: "Client 5", logo: "/images/clients/slock.png" },
  { name: "Client 6", logo: "/images/clients/revolut.png" },
];


// --- Inlined Client Data (Row 2) ---
const clientsRow2 = [
  { name: "Tajir", logo: "/images/clients/tajir.png" },
  { name: "Toms", logo: " /images/clients/toms.png" },
  { name: "Warby Parker", logo: "/images/clients/warby.png" },
  { name: "Replika", logo: "/images/clients/dawaai.png" },
  { name: "Client 9", logo: "/images/clients/shave.png" },
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
          className="flex items-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold text-black uppercase tracking-wider">
            Our Clients
          </h2>
          <ArrowRightIcon />
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
