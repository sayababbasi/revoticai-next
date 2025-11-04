// "use client";

// import React from "react";
// import Link from "next/link";

// // --- Inlined SVG Icons (to prevent build errors) ---
// const PlusIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <line x1="12" y1="5" x2="12" y2="19"></line>
//     <line x1="5" y1="12" x2="19" y2="12"></line>
//   </svg>
// );

// const FacebookIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
//   </svg>
// );

// const XIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M18 6L6 18"></path>
//     <path d="M6 6l12 12"></path>
//   </svg>
// );

// const LinkedInIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//     <rect x="2" y="9" width="4" height="12"></rect>
//     <circle cx="4" cy="4" r="2"></circle>
//   </svg>
// );

// const GitHubIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//   </svg>
// );

// // --- Ticker Data ---
// const tickerItems = [
//   "Future-Proof Your Business",
//   "Innovate Smarter with AI",
//   "Apps Built for Success",
//   "Automate. Accelerate. Succeed.",
//   "Scalable AI for Every Industry",
//   "Empowering Games with AI",
// ];
// // Duplicate for seamless loop
// const allTickerItems = [...tickerItems, ...tickerItems];

// // --- Social Links Data ---
// const socialLinks = [
//   { name: "Facebook", href: "#", icon: <FacebookIcon /> },
//   { name: "X / Twitter", href: "#", icon: <XIcon /> },
//   { name: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
//   { name: "GitHub", href: "#", icon: <GitHubIcon /> },
// ];

// const TopFooter: React.FC = () => {
//   return (
//     <footer className="bg-black text-white py-12">
//       {/* --- 1. Top Ticker --- */}
//       <div className="w-full overflow-hidden mb-16">
//         <div className="flex w-max animate-scroll-fast group-hover:pause">
//           {allTickerItems.map((item, index) => (
//             <div key={index} className="flex items-center flex-shrink-0 mx-6">
//               <span className="text-xl font-medium">{item}</span>
//               <PlusIcon />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* --- 2. 'GET IN TOUCH' Box --- */}
//       <div className="container mx-auto px-6 mb-16">
//         <div className="border border-neutral-700 rounded-lg py-16 md:py-24 text-center">
//           <h2 className="text-5xl md:text-7xl font-bold">GET IN TOUCH</h2>
//         </div>
//       </div>

//       {/* --- 3. Content Grid --- */}
//       <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
//         {/* Left Side: About & Contact */}
//         <div className="max-w-lg">
//           <p className="text-gray-400 mb-6">
//             At Revotic AI, we combine Artificial Intelligence, Machine Learning,
//             and modern development to build intelligent solutions that empower
//             businesses. From automation to full-stack development, we create
//             innovative products designed to make technology smarter, faster, and
//             more personalized.
//           </p>
//           <a
//             href="mailto:contact@revoticai.com"
//             className="block font-semibold text-white hover:text-[#b1ff32] transition-colors mb-2"
//           >
//             contact@revoticai.com
//           </a>
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block text-gray-400 text-sm hover:text-white transition-colors"
//           >
//             Address: 46500 Spring Valley, Bani Gala, Islamabad, PK
//           </a>
//         </div>

//         {/* Right Side: Social Links */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {socialLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group flex items-center justify-between p-6 bg-neutral-900 border border-neutral-800 rounded-lg transition-all duration-300 hover:bg-neutral-800 hover:border-[#b1ff32]"
//             >
//               <span className="text-lg font-medium">{link.name}</span>
//               <span className="text-gray-500 group-hover:text-white transition-colors">
//                 {link.icon}
//               </span>
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* CSS for the scroller animation */}
//       <style jsx global>{`
//         /* ADD THIS TO YOUR 'tailwind.config.js' file in the 'extend' section:
          
//           theme: {
//             extend: {
//               animation: {
//                 'scroll-fast': 'scroll 20s linear infinite',
//               },
//               keyframes: {
//                 scroll: {
//                   '0%': { transform: 'translateX(0)' },
//                   '100%': { transform: 'translateX(-50%)' },
//                 }
//               }
//             }
//           }
//         */

//         /* This is the fallback if you don't edit tailwind.config.js */
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-scroll-fast {
//           /* Using a faster 20s duration for the ticker */
//           animation: scroll 20s linear infinite;
//         }
//         .group-hover\\:pause:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default TopFooter;

"use client";

import React from "react";
// import Link from "next/link"; // Removed to fix build errors
// --- Added Framer Motion for animations ---
import { motion } from "framer-motion";

// --- Inlined SVG Icons (to prevent build errors) ---

// --- NEW Sparkle Icon (Replaces PlusIcon) ---
const SparkleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0L9.48528 6.51472L16 8L9.48528 9.48528L8 16L6.51472 9.48528L0 8L6.51472 6.51472L8 0Z"
      fill="#b1ff32"
      fillOpacity="0.7"
    />
  </svg>
);

const FacebookIcon = () => (
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
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const XIcon = () => (
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
  >
    <path d="M18 6L6 18"></path>
    <path d="M6 6l12 12"></path>
  </svg>
);

const LinkedInIcon = () => (
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
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GitHubIcon = () => (
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
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

// --- Ticker Data ---
const tickerItems = [
  "Future-Proof Your Business",
  "Innovate Smarter with AI",
  "Apps Built for Success",
  "Automate. Accelerate. Succeed.",
  "Scalable AI for Every Industry",
  "Empowering Games with AI",
];
const allTickerItems = [...tickerItems, ...tickerItems];

// --- Social Links Data ---
const socialLinks = [
  { name: "Facebook", href: "#", icon: <FacebookIcon /> },
  { name: "X / Twitter", href: "#", icon: <XIcon /> },
  { name: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
  { name: "GitHub", href: "#", icon: <GitHubIcon /> },
];

// --- Animation Variants for Fade Up ---
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

const TopFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      {/* --- 1. Top Ticker --- */}
      <motion.div
        className="w-full overflow-hidden mb-16" // overflow-hidden is fine here for the ticker
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="flex w-max animate-scroll-fast group-hover:pause">
          {allTickerItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center flex-shrink-0 mx-6"
              style={{ opacity: 0.8 }} // Make ticker slightly transparent
            >
              <span className="text-xl font-medium">{item}</span>
              {/* --- Replaced Icon --- */}
              <div className="mx-4">
                <SparkleIcon />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      {/* --- 2. 'GET IN TOUCH' Box --- */}
      <motion.div
        className="container mx-auto px-6 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={fadeUp}
        transition={{ delay: 0.1 }} // Stagger animation
      >
        <div className="border border-neutral-700 rounded-lg py-16 md:py-24 text-center">
          <h2 className="text-5xl md:text-7xl font-bold">GET IN TOUCH</h2>
        </div>
      </motion.div>
      {/* --- 3. Content Grid --- */}
      <motion.div
        className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={fadeUp}
        transition={{ delay: 0.2 }} // Stagger animation
      >
        {/* Left Side: About & Contact */}
        <div className="max-w-lg">
          <p className="text-gray-400 mb-6">
            At Revotic AI, we combine Artificial Intelligence, Machine Learning,
            and modern development to build intelligent solutions that empower
            businesses. From automation to full-stack development, we create
            innovative products designed to make technology smarter, faster, and
            more personalized.
          </p>
          <a
            href="mailto:contact@revoticai.com"
            className="block font-semibold text-white hover:text-[#b1ff32] transition-colors mb-2"
          >
            contact@revoticai.com
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-400 text-sm hover:text-white transition-colors"
          >
            Address: 46500 Spring Valley, Bani Gala, Islamabad, PK
          </a>
        </div>

        {/* Right Side: Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-neutral-900 border border-neutral-800 rounded-lg transition-all duration-300 hover:bg-neutral-800 hover:border-[#b1ff32]"
            >
              <span className="text-lg font-medium">{link.name}</span>
              <span className="text-gray-500 group-hover:text-white transition-colors">
                {link.icon}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
      {/* CSS for the scroller animation */}
      <style jsx global>{`
        /* ADD THIS TO YOUR 'tailwind.config.js' file in the 'extend' section:
          
          theme: {
            extend: {
              animation: {
                'scroll-fast': 'scroll 20s linear infinite',
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
        .animate-scroll-fast {
          /* Using a faster 20s duration for the ticker */
          animation: scroll 20s linear infinite;
        }
        .group-hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  );
};

export default TopFooter;

