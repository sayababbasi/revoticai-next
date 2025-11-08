// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Zap } from 'lucide-react';

// interface ExpertsPageHeaderProps {
//     title: string;
//     subtitle: string;
//     description: string;
// }

// const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const ExpertsPageHeader: React.FC<ExpertsPageHeaderProps> = ({
//     title = "Meet Our Experts",
//     subtitle = "Specialized Knowledge, Real Results",
//     description = "Our team comprises seasoned engineers and strategists dedicated to leading the industry in AI, ML, and business automation.",
// }) => {
//     // Split the title to emphasize the word 'AI' (index 3)
//     const words = title.split(" ");
//     const emphasizedTitle = (
//         <div className="inline">
//             {words.map((word, index) => (
//                 <span
//                     key={index}
//                     className={
//                         index === 3 // Emphasize 'AI'
//                             ? "text-[#b1ff32] mr-2 inline-block leading-none drop-shadow-md"
//                             : ""
//                     }
//                 >
//                     {word}{" "}
//                 </span>
//             ))}
//         </div>
//     );

//     return (
//         // Dark background section, fixed height compensation for the Navbar
//         <section className="bg-neutral-900 text-white pt-[150px] pb-24 md:pb-32 overflow-hidden">
//             <div className="container mx-auto px-6">
//                 <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
                    
//                     {/* --- Left Side: Content & CTA --- */}
//                     <motion.div 
//                         className="lg:col-span-8 mb-12 lg:mb-0 text-center lg:text-left"
//                         initial="hidden"
//                         animate="visible"
//                         variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
//                     >
//                         <motion.p 
//                             className="text-sm uppercase tracking-widest font-semibold text-gray-400 mb-4 flex items-center justify-center lg:justify-start"
//                             variants={itemVariants}
//                         >
//                             <Zap className="w-4 h-4 text-[#b1ff32] mr-2" />
//                             {subtitle}
//                         </motion.p>
                        
//                         <motion.h1 
//                             className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight max-w-5xl"
//                             variants={itemVariants}
//                         >
//                             {emphasizedTitle}
//                         </motion.h1>

//                         <motion.p 
//                             className="text-lg text-gray-400 max-w-xl lg:max-w-none mx-auto lg:mx-0 mb-10"
//                             variants={itemVariants}
//                         >
//                             {description}
//                         </motion.p>

//                         {/* CTA Button: Schedule Consultation */}
//                         <motion.div variants={itemVariants}>
//                             <a
//                                 href="/contact" 
//                                 className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-black bg-[#b1ff32] rounded-full hover:bg-white transition-all duration-300 shadow-lg group"
//                             >
//                                 Book a Strategic Session
//                                 <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
//                             </a>
//                         </motion.div>
//                     </motion.div>

//                     {/* --- Right Side: Decorative Graphic --- */}
//                     <motion.div 
//                         className="lg:col-span-4 hidden lg:block"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true, amount: 0.3 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <img 
//                             src="/images/experts/experts-hero.avif"
//                             alt="AI Expert Illustration"
//                             className="w-full h-auto rounded-xl border border-neutral-800 opacity-90"
//                             onError={(e) => e.currentTarget.src = 'https://placehold.co/900x700/1a1a1a/b1ff32?text=Experts+Graphic'}
//                         />
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ExpertsPageHeader;



"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

interface Breadcrumb {
  name: string;
  href: string;
}

export interface ExpertsPageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  emphasizeWord?: number;
  breadcrumbs?: Breadcrumb[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ExpertsPageHeader: React.FC<ExpertsPageHeaderProps> = ({
  title = "Meet Our Experts",
  subtitle = "Specialized Knowledge, Real Results",
  description = "Our team comprises seasoned engineers and strategists dedicated to leading the industry in AI, ML, and business automation.",
  emphasizeWord = 3,
  breadcrumbs = [],
}) => {
  // --- Highlight one specific word (e.g., "AI") ---
  const words = title.split(" ");
  const emphasizedTitle = (
    <div className="inline">
      {words.map((word, index) => (
        <span
          key={index}
          className={
            index === emphasizeWord - 1
              ? "text-[#b1ff32] mr-2 inline-block leading-none drop-shadow-md"
              : "mr-2 inline-block leading-none"
          }
        >
          {word}{" "}
        </span>
      ))}
    </div>
  );

  return (
    <section className="bg-neutral-900 text-white pt-[150px] pb-24 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* --- Breadcrumb Navigation --- */}
        {breadcrumbs.length > 0 && (
          <nav className="text-gray-400 text-sm mb-6 text-center lg:text-left">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href}>
                <a href={crumb.href} className="hover:text-[#b1ff32]">
                  {crumb.name}
                </a>
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-2 text-gray-600">/</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* --- Left Side: Content + CTA --- */}
          <motion.div
            className="lg:col-span-8 mb-12 lg:mb-0 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p
              className="text-sm uppercase tracking-widest font-semibold text-gray-400 mb-4 flex items-center justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Zap className="w-4 h-4 text-[#b1ff32] mr-2" />
              {subtitle}
            </motion.p>

            <motion.h1
              className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight max-w-5xl"
              variants={itemVariants}
            >
              {emphasizedTitle}
            </motion.h1>

            <motion.p
              className="text-lg text-gray-400 max-w-xl lg:max-w-none mx-auto lg:mx-0 mb-10"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-black bg-[#b1ff32] rounded-full hover:bg-white transition-all duration-300 shadow-lg group"
              >
                Book a Strategic Session
                <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* --- Right Side: Decorative Graphic --- */}
          <motion.div
            className="lg:col-span-4 hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/experts/experts-hero.avif"
              alt="AI Expert Illustration"
              className="w-full h-auto rounded-xl border border-neutral-800 opacity-90"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://placehold.co/900x700/1a1a1a/b1ff32?text=Experts+Graphic")
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsPageHeader;
