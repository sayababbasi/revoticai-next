"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BlogPageHeader: React.FC = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <section className="bg-black text-white pt-[150px] pb-16 md:pb-24 overflow-hidden">
      <motion.div
        className="container mx-auto px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p
          className="text-sm uppercase tracking-widest font-semibold text-[#b1ff32] mb-3"
          variants={itemVariants}
        >
          Our Blog
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          variants={itemVariants}
        >
          Revotic AI Insights
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Stay updated with the latest trends, strategies, and case studies in
          AI, automation, and full-stack development.
        </motion.p>
        <motion.nav
          className="text-sm text-gray-400 flex justify-center space-x-2 mt-6"
          variants={itemVariants}
        >
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.name}>
              <a href={item.href} className="hover:text-[#b1ff32] transition-colors">
                {item.name}
              </a>
              {index < breadcrumbs.length - 1 && (
                <span className="text-gray-600">/</span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>
      </motion.div>
    </section>
  );
};

export default BlogPageHeader;


// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// //====================================================================
// // 1. REUSABLE PageHeader COMPONENT
// //====================================================================

// interface PageHeaderProps {
//   title: string;
//   subtitle: string;
//   breadcrumbs: { name: string; href: string }[];
// }

// /**
//  * A reusable page header/banner component for consistent styling across pages.
//  * It displays breadcrumbs, a main title, and a subtitle.
//  */

// const BlogsPageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumbs }) => {
//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { staggerChildren: 0.2, duration: 0.6 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <section className="bg-black text-white pt-[150px] pb-16 md:pb-24 overflow-hidden relative">
//       {/* Background Glow */}
//       <div
//         className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] -z-0"
//         style={{
//           background:
//             "radial-gradient(circle at 50% 0%, rgba(163, 230, 53, 0.15) 0%, rgba(0,0,0,0) 60%)",
//         }}
//         aria-hidden="true"
//       />

//       <motion.div
//         className="container mx-auto px-6 text-center relative z-10"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >


//         {/* Title */}
//         <motion.h1
//           className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3"
//           variants={itemVariants}
//         >
//           {title}
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           className="text-lg text-gray-200 max-w-2xl mx-auto"
//           variants={itemVariants}
//         >
//           {subtitle}
//         </motion.p>
//                 {/* Breadcrumbs */}
//         <motion.nav
//           className="text-sm text-white flex justify-center space-x-2 mb-4"
//           variants={itemVariants}
//         >
//           {breadcrumbs.map((item, index) => (
//             <React.Fragment key={item.name}>
//               <a href={item.href} className="pt-[10px] hover:text-[#b1ff32] transition-colors">
//                 {item.name}
//               </a>
//               {index < breadcrumbs.length - 1 && <span className="text-gray-600 pt-[10px] ">/</span>}
//             </React.Fragment>
//           ))}
//         </motion.nav>
//       </motion.div>
//     </section>
//   );
// };

// export default BlogsPageHeader;


// import React from 'react';

// //====================================================================
// // 1. REUSABLE PageHeader COMPONENT
// // Redesigned for a more modern, sophisticated look with the
// // requested black, white, and lime color scheme.
// //====================================================================

// interface PageHeaderProps {
//   title: string;
//   subtitle: string;
//   breadcrumbs: React.ReactNode;
// }

// /**
//  * A reusable page header/banner component for consistent styling across pages.
//  * It displays breadcrumbs, a main title, and a subtitle.
//  */
// const BlogsPageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumbs }) => {
//   return (
//     // Main container: Black background with relative positioning for glow effect
//     <div className="bg-black py-20 sm:py-28 w-full relative overflow-hidden">
      
//       {/* Background Glow Effect: Subtle lime green glow from the center top */}
//       <div 
//         className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] -z-0" 
//         style={{
//           // Using an inline style for a complex radial gradient
//           background: 'radial-gradient(circle at 50% 0%, rgba(163, 230, 53, 0.15) 0%, rgba(0,0,0,0) 60%)'
//         }}
//         aria-hidden="true"
//       />

//       {/* Content Container: Centered, max-width, and above the glow */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        
//         {/* Title: Large, bold, white text */}
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
//           {title}
//         </h1>

//         {/* Breadcrumbs: Rendered after title */}
//         <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mt-6">
//           {breadcrumbs}
//         </div>
        
//         {/* Subtitle: Lighter gray, legible text with a wider max-width */}
//         <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
//           {subtitle}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BlogsPageHeader;



