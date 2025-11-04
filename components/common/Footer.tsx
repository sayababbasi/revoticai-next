// "use client";

// import React from "react";
// // import Link from "next/link"; // Removed to fix build error
// import { motion } from "framer-motion";

// // --- Inlined SVG Icons (to prevent build errors) ---
// const YoutubeIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.5 15.5V8.5l6 3.5-6 3.5z" />
//   </svg>
// );
// const LinkedinIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//   </svg>
// );
// const GithubIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//   </svg>
// );
// const XIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//   </svg>
// );
// const FacebookIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//   </svg>
// );
// const InstagramIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//   </svg>
// );

// // --- Animation Variants ---
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeInOut", // Use a valid ease string
//     },
//   },
// };

// // --- Footer Links Data ---
// const footerLinks = {
//   information: [
//     { name: "About Us", href: "/about" },
//     { name: "Contact Us", href: "/contact" },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "Service", href: "/services" },
//     { name: "Blogs", href: "/blog" },
//     { name: "Our Experts", href: "/experts" },
//   ],
//   services: [
//     { name: "AI & ML Automation", href: "/services/ai-ml" },
//     // --- FIX: Corrected the typo 'name:D' to 'name:' ---
//     { name: "AI SaaS Products", href: "/services/saas" },
//     { name: "Full Stack Development", href: "/services/web-app" },
//     { name: "AI-Powered Web Development", href: "/services/web-app" },
//     { name: "AI-Powered App Development", href: "/services/app-dev" },
//     { name: "Personalized AI Dashboards", href: "/services/ai-ml" },
//   ],
//   legal: [
//     { name: "Terms & Conditions", href: "/legal/terms-and-conditions" },
//     { name: "Privacy Policy", href: "/legal/privacy-policy" },
//     { name: "Cookie Policy", href: "/legal/cookie-policy" },
//   ],
// };

// const Footer: React.FC = () => {
//   return (
//     <div className="bg-black text-gray-400">
//       {/* --- Part 1: Main Footer Links --- */}
//       <motion.div
//         className="container mx-auto px-6 py-16"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ amount: 0.3 }} // Re-animates on scroll
//         variants={fadeUp}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Column 1: Information */}
//           <div>
//             <h5 className="text-white text-lg font-semibold mb-4">
//               Information
//             </h5>
//             <ul className="space-y-3">
//               {footerLinks.information.map((link) => (
//                 <li key={link.name}>
//                   {/* Replaced Link with <a> tag */}
//                   <a
//                     href={link.href}
//                     className="hover:text-white hover:underline transition-colors"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 2: Explore Services */}
//           <div>
//             <h5 className="text-white text-lg font-semibold mb-4">
//               Explore Services
//             </h5>
//             <ul className="space-y-3">
//               {footerLinks.services.map((link) => (
//                 <li key={link.name}>
//                   {/* Replaced Link with <a> tag */}
//                   <a
//                     href={link.href}
//                     className="hover:text-white hover:underline transition-colors"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Legal */}
//           <div>
//             <h5 className="text-white text-lg font-semibold mb-4">Legal</h5>
//             <ul className="space-y-3">
//               {footerLinks.legal.map((link) => (
//                 <li key={link.name}>
//                   {/* Replaced Link with <a> tag */}
//                   <a
//                     href={link.href}
//                     className="hover:text-white hover:underline transition-colors"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Newsletter */}
//           <div>
//             <h5 className="text-white text-lg font-semibold mb-4">
//               Newsletter
//             </h5>
//             <p className="mb-4 text-sm">
//               Subscribe our newsletter to join our journey to revolutionize the
//               future of your Business with AI.
//             </p>
//             <form
//               onSubmit={(e) => e.preventDefault()}
//               className="flex flex-col sm:flex-row gap-2"
//             >
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="flex-grow bg-neutral-800 border border-neutral-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#b1ff32]"
//               />
//               <button
//                 type="submit"
//                 className="bg-neutral-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-neutral-600 transition-colors"
//               >
//                 SUBSCRIBE
//               </button>
//             </form>
//             <div className="flex space-x-4 mt-6">
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors"
//                 aria-label="YouTube"
//               >
//                 <YoutubeIcon />
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <LinkedinIcon />
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors"
//                 aria-label="GitHub"
//               >
//                 <GithubIcon />
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors"
//                 aria-label="X / Twitter"
//               >
//                 <XIcon />
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors"
//                 aria-label="Facebook"
//               >
//                 <FacebookIcon />
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors"
//                 aria-label="Instagram"
//               >
//                 <InstagramIcon />
//               </a>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* --- Part 2: Copyright Section --- */}
//       <motion.div
//         className="border-t border-neutral-800"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ amount: 0.3 }} // Re-animates on scroll
//         variants={fadeUp}
//       >
//         <div className="container mx-auto px-6 py-6 text-center text-sm">
//           <p>
//             &copy; {new Date().getFullYear()} All rights reserved by{" "}
//             <a
//               href="https" // Changed to <a> tag
//               className="font-semibold text-white hover:text-[#b1ff32] transition-colors"
//             >
//               Revotic AI
//             </a>{" "}
//             | Developed by Revotic AI Team With Love
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Footer;

"use client";

import React from "react";
// import Link from "next/link"; // Removed to fix build error
import { motion } from "framer-motion";

// --- Inlined SVG Icons (to prevent build errors) ---
const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.5 15.5V8.5l6 3.5-6 3.5z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
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
      ease: "easeInOut", // Use a valid ease string
    },
  },
};

// --- Footer Links Data ---
const footerLinks = {
  information: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Service", href: "/services" },
    { name: "Blogs", href: "/blog" },
    { name: "Our Experts", href: "/experts" },
  ],
  services: [
    { name: "AI & ML Automation", href: "/services/ai-ml" },
    { name: "AI SaaS Products", href: "/services/saas" },
    { name: "Full Stack Development", href: "/services/web-app" },
    { name: "AI-Powered Web Development", href: "/services/web-app" },
    { name: "AI-Powered App Development", href: "/services/app-dev" },
    { name: "Personalized AI Dashboards", href: "/services/ai-ml" },
  ],
  legal: [
    { name: "Terms & Conditions", href: "/legal/terms-and-conditions" },
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Cookie Policy", href: "/legal/cookie-policy" },
  ],
};

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-gray-400">
      {/* --- Part 1: Main Footer Links --- */}
      <motion.div
        className="w-full max-w-[95%] mx-auto px-6 py-16 border border-white rounded-[10px] pb-[5px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // Re-animates on scroll
        variants={fadeUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Information */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">
              Information
            </h5>
            <ul className="space-y-3">
              {footerLinks.information.map((link) => (
                <li key={link.name}>
                  {/* Replaced Link with <a> tag */}
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Explore Services */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">
              Explore Services
            </h5>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  {/* Replaced Link with <a> tag */}
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Legal</h5>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  {/* Replaced Link with <a> tag */}
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">
              Newsletter
            </h5>
            <p className="mb-4 text-sm">
              Subscribe our newsletter to join our journey to revolutionize the
              future of your Business with AI.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col md:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow bg-neutral-800 border border-neutral-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#b1ff32] min-w-0"
              />
              <button
                type="submit"
                className="bg-neutral-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-neutral-600 transition-colors flex-shrink-0 flex items-center justify-center" // Added flex items-center justify-center for icon centering
                aria-label="Send"
              >
                <SendIcon />
              </button>
            </form>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="X / Twitter"
              >
                <XIcon />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- Part 2: Copyright Section --- */}
      <motion.div
        className="border-t border-neutral-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // Re-animates on scroll
        variants={fadeUp}
      >
        <div className="w-full max-w-[95%] mx-auto px-6 py-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved by{" "}
            <a
              href="https" // Changed to <a> tag
              className="font-semibold text-white hover:text-[#b1ff32] transition-colors"
            >
              Revotic AI
            </a>{" "}
            | Developed by Revotic AI Team With Love
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;

