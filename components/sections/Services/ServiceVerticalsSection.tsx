// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";
// // import { ArrowRight, Zap, Code } from 'lucide-react'; // Using relevant icons

// // const itemVariants = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// // };

// // const ServiceVerticalsSection: React.FC = () => {
// //   return (
// //     <section className="bg-white py-20 md:py-32 overflow-hidden">
// //       <div className="container mx-auto px-6 max-w-6xl">
        
// //         {/* --- Top Headline --- */}
// //         <motion.div
// //           className="max-w-4xl mx-auto mb-16 md:mb-20 text-center"
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.3 }}
// //           variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
// //         >
// //           <motion.p
// //             className="text-sm uppercase tracking-widest font-semibold text-[#b1ff32] mb-3"
// //             variants={itemVariants}
// //           >
// //             Creative Approach
// //           </motion.p>
// //           <motion.h2
// //             className="text-4xl lg:text-6xl font-extrabold text-black leading-tight"
// //             variants={itemVariants}
// //           >
// //             Revotic AI Smart <br className="hidden md:block" /> Business Solutions
// //           </motion.h2>
// //         </motion.div>

// //         {/* --- Main Two-Column Content Grid --- */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16">
          
// //           {/* --- Column 1: Creative & Digital Solutions --- */}
// //           <motion.div
// //             className="p-6 md:p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.3 }}
// //             variants={itemVariants}
// //           >
// //             <div className="flex items-start mb-6">
// //               <div className="w-12 h-12 bg-[#b1ff32]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
// //                 <Zap className="w-6 h-6 text-[#b1ff32]" />
// //               </div>
// //               <h3 className="text-2xl font-bold text-black pt-1">
// //                 Creative & Digital Solutions
// //               </h3>
// //             </div>
            
// //             <p className="text-gray-600 mb-6">
// //               From **UI/UX design** to game development, digital branding, and business automation solutions, we craft engaging innovations that connect technology with human creativity for lasting impact.
// //             </p>

// //             <a
// //               href="/services/ui-ux"
// //               className="inline-flex items-center text-sm font-semibold text-[#b1ff32] group hover:text-black transition-colors"
// //             >
// //               VIEW MORE
// //               <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
// //             </a>
// //           </motion.div>

// //           {/* --- Column 2: Web & App Development --- */}
// //           <motion.div
// //             className="p-6 md:p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.3 }}
// //             variants={itemVariants}
// //             transition={{ delay: 0.15 }}
// //           >
// //             <div className="flex items-start mb-6">
// //               <div className="w-12 h-12 bg-[#b1ff32]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
// //                 <Code className="w-6 h-6 text-[#b1ff32]" />
// //               </div>
// //               <h3 className="text-2xl font-bold text-black pt-1">
// //                 Web & App Development
// //               </h3>
// //             </div>
            
// //             <p className="text-gray-600 mb-6">
// //               Scalable, modern, and high-performing websites and apps built with the latest technologies to deliver seamless user experiences and **business impact**.
// //             </p>

// //             <a
// //               href="/services/web-app"
// //               className="inline-flex items-center text-sm font-semibold text-[#b1ff32] group hover:text-black transition-colors"
// //             >
// //               VIEW MORE
// //               <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
// //             </a>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ServiceVerticalsSection;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// // import { ArrowRight, Zap, Code, Lightbulb } from 'lucide-react'; // Using inlined SVGs

// // --- Inlined SVG Icons (to prevent build errors) ---

// // Inlined Arrow for "VIEW MORE"
// const ViewMoreArrow = () => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 16 16"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
//   >
//     <path
//       d="M1 8H15"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M10 3L15 8L10 13"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// // Inlined Checkmark/Target Icon for the green circle
// const TargetCheckIcon = () => (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-6 h-6 text-black"
//   >
//     <path
//       d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
//       stroke="#b1ff32"
//       strokeWidth="2"
//     />
//     <path
//       d="M8.5 12.5L10.5 14.5L15.5 9.5"
//       stroke="black"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// // Animation variant for fading in
// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// // --- Reusable Service Block Component (for the right side) ---
// interface ServiceBlockProps {
//   title: string;
//   description: string;
//   href: string;
// }

// const ServiceBlock: React.FC<ServiceBlockProps> = ({
//   title,
//   description,
//   href,
// }) => (
//   <div className="flex">
//     {/* Green Circle Icon */}
//     <div className="flex-shrink-0 w-16 h-16 bg-[#b1ff32] rounded-full flex items-center justify-center mr-5 shadow-lg">
//       <TargetCheckIcon />
//     </div>
//     {/* Text Content */}
//     <div>
//       <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
//       <p className="text-gray-600 mb-4">{description}</p>
//       <a
//         href={href}
//         className="inline-flex items-center text-sm font-semibold text-gray-500 group hover:text-black transition-colors"
//       >
//         VIEW MORE
//         <ViewMoreArrow />
//       </a>
//     </div>
//   </div>
// );

// // --- Main Service Verticals Section ---
// const ServiceVerticalsSection: React.FC = () => {
//   return (
//     <section className="bg-white py-20 md:py-32 overflow-hidden">
//       <div className="container mx-auto px-6 max-w-7xl">
//         {/* Main Grid: Left side (1 col) and Right side (1 col) */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
//           {/* --- Left Column --- */}
//           <motion.div
//             className="flex flex-col gap-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
//           >
//             {/* Top Title Block */}
//             <motion.div variants={itemVariants}>
//               <p className="text-sm uppercase tracking-wider font-semibold text-gray-400 mb-3">
//                 Creative approach
//               </p>
//               <h2 className="text-5xl lg:text-6xl font-extrabold text-black leading-tight">
//                 Revotic AI Smart Business Solutions
//               </h2>
//             </motion.div>

//             {/* Bottom Service Block (Creative & Digital) */}
//             <motion.div variants={itemVariants}>
//               <ServiceBlock
//                 title="Creative & Digital Solutions"
//                 description="From UI/UX design to game development, digital branding, and business automation solutions, we craft engaging innovations that connect technology with human creativity for lasting impact."
//                 href="/services/ui-ux"
//               />
//             </motion.div>
//           </motion.div>

//           {/* --- Right Column (Stacked Blocks) --- */}
//           <motion.div
//             className="flex flex-col gap-12 mt-0" // Stacks the two service blocks
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={{ visible: { transition: { staggerChildren: 0.15, delay: 0.2 } } }}
//           >
//             {/* Right Top Block */}
//             <motion.div variants={itemVariants}>
//               <ServiceBlock
//                 title="Web & App Development"
//                 description="Scalable, modern, and high-performing websites and apps built with the latest technologies to deliver seamless user experiences and business impact."
//                 href="/services/web-app"
//               />
//             </motion.div>

//             {/* Right Bottom Block */}
//             <motion.div variants={itemVariants}>
//               <ServiceBlock
//                 title="Start Your Project"
//                 description="Turn your ideas into reality with tailored web and app development solutions. Our team builds scalable, secure, and high-performance digital products that grow with your business."
//                 href="/contact"
//               />
//             </motion.div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceVerticalsSection;

"use client";

import React from "react";
import { motion } from "framer-motion";
// --- UPDATED: Importing title-related icons ---
import { ArrowRight, Code, Lightbulb, Palette, BarChart3 } from 'lucide-react';

// --- Inlined SVG Icons (to prevent build errors) ---

// Inlined Arrow for "VIEW MORE" (This one is correct)
const ViewMoreArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
  >
    <path
      d="M1 8H15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 3L15 8L10 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- REMOVED TargetCheckIcon ---


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Sub-Component for the right-side blocks ---
interface ServiceBlockProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    delay?: number;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ icon, title, description, href, delay = 0 }) => (
    <motion.div
        className="flex items-start md:items-start p-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
        transition={{ delay: delay }}
    >
        {/* --- UPDATED: Icon container now uses the prop icon --- */}
        <div className="w-12 h-12 bg-black/80 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
            {icon}
        </div>
        
        <div>
            <h4 className="text-xl font-bold text-black mb-2 leading-snug">{title}</h4>
            <p className="text-black mb-2 text-sm">{description}</p>
            <a
                href={href}
                className="inline-flex items-center text-xs font-semibold text-gray-800 group hover:text-black transition-colors"
            >
                VIEW MORE
                <ViewMoreArrow />
            </a>
        </div>
    </motion.div>
);

const ServiceVerticalsSection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Main Grid: Left side (1 col) and Right side (1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* --- Left Column --- */}
          <motion.div
            className="flex flex-col gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {/* Top Title Block */}
            <motion.div variants={itemVariants}>
              <p className="text-sm uppercase tracking-wider font-semibold text-gray-700 mb-3">
                Creative Approach
              </p>
              <h2 className="text-5xl lg:text-6xl font-extrabold text-black leading-tight">
                Revotic AI Smart Business Solutions
              </h2>
            </motion.div>

            {/* Bottom Service Block (Creative & Digital) */}
            <motion.div variants={itemVariants}>
              <ServiceBlock 
                title="Creative & Digital Solutions"
                description="From UI/UX design to game development, digital branding, and business automation solutions, we craft engaging innovations that connect technology with human creativity for lasting impact."
                icon={<Palette className="w-6 h-6 text-[#b1ff32]" />} // --- ICON UPDATED ---
                href="/services/ui-ux"
              />
            </motion.div>
          </motion.div>

          {/* --- Right Column (Stacked Blocks) --- */}
          <motion.div
            className="flex flex-col gap-12 mt-0" // Stacks the two service blocks
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.15, delay: 0.2 } } }}
          >
            {/* Right Top Block */}
            <motion.div variants={itemVariants}>
              <ServiceBlock
                title="Web & App Development"
                description="Scalable, modern, and high-performing websites and apps built with the latest technologies to deliver seamless user experiences and business impact."
                icon={<Code className="w-6 h-6 text-[#b1ff32]" />} // --- ICON UPDATED ---
                href="/services/web-app"
              />
            </motion.div>

            {/* Right Bottom Block */}
            <motion.div variants={itemVariants}>
              <ServiceBlock
                title="Start Your Project"
                description="Turn your ideas into reality with tailored web and app development solutions. Our team builds scalable, secure, and high-performance digital products that grow with your business."
                icon={<Lightbulb className="w-6 h-6 text-[#b1ff32]" />} // --- ICON UPDATED ---
                href="/contact"
              />
            </motion.div>
            
            {/* --- ADDED fourth block as implied by previous version --- */}
            <motion.div variants={itemVariants}>
              <ServiceBlock
                title="Data & Analytics"
                description="Harness the power of data through personalized AI dashboards and predictive analytics to inform strategic decision-making."
                icon={<BarChart3 className="w-6 h-6 text-[#b1ff32]" />} // --- ICON UPDATED ---
                href="/services/ai-ml"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServiceVerticalsSection;

