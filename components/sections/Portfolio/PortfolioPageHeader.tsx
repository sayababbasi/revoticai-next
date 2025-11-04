// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// // FIX: Removed 'next/link' import
// // import Link from 'next/link'; 
// import { ArrowRight, Star } from 'lucide-react';

// interface PortfolioPageHeaderProps {
//     // We are passing props to keep it reusable even if we only use it once.
//     title: string; 
//     subtitle: string;
//     description: string;
//     // Optional social proof to boost credibility
//     clutchRating?: number; 
//     reviewCount?: number;
// }

// const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const PortfolioPageHeader: React.FC<PortfolioPageHeaderProps> = ({
//     title,
//     subtitle,
//     description,
//     // Provide default values for social proof
//     clutchRating = 4.9, 
//     reviewCount = 52,
// }) => {
//     // Split the title to emphasize the first word ("Our")
//     const words = title.split(" ");
//     const emphasizedTitle = (
//         <div className="inline">
//             {words.map((word, index) => (
//                 <span
//                     key={index}
//                     className={
//                         index === 0 // Emphasize the first word
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
                    
//                     {/* --- Left Side: Content & Social Proof --- */}
//                     <motion.div 
//                         className="lg:col-span-7 mb-12 lg:mb-0 text-center lg:text-left"
//                         initial="hidden"
//                         animate="visible"
//                         variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
//                     >
//                         <motion.p 
//                             className="text-sm uppercase tracking-widest font-semibold text-gray-400 mb-4"
//                             variants={itemVariants}
//                         >
//                             {subtitle}
//                         </motion.p>
                        
//                         <motion.h1 
//                             className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight max-w-4xl"
//                             variants={itemVariants}
//                         >
//                             {emphasizedTitle}
//                         </motion.h1>

//                         <motion.p 
//                             className="text-lg text-gray-400 max-w-xl lg:max-w-none mx-auto lg:mx-0 mb-8"
//                             variants={itemVariants}
//                         >
//                             {description}
//                         </motion.p>

//                         {/* Social Proof (Clutch/Reviews - based on Image 2 design) */}
//                         <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-4">
//                             <div className="flex items-center text-sm font-semibold">
//                                 <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-2" />
//                                 <span>{clutchRating.toFixed(1)} / 5.0 Rating</span>
//                             </div>
//                             <div className="text-sm text-gray-500">
//                                 ({reviewCount} Reviews)
//                             </div>
//                         </motion.div>

//                         {/* CTA Button */}
//                         <motion.div variants={itemVariants} className="mt-10">
//                             {/* FIX: Using <a> instead of <Link> */}
//                             <a
//                                 href="/contact" 
//                                 className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-black bg-[#b1ff32] rounded-full hover:bg-white transition-all duration-300 shadow-lg group"
//                             >
//                                 Get a Project Quote
//                                 <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
//                             </a>
//                         </motion.div>
//                     </motion.div>

//                     {/* --- Right Side: Visual Placeholder (Showcasing projects) --- */}
//                     <motion.div 
//                         className="lg:col-span-5 hidden lg:block"
//                         initial={{ opacity: 0, x: 50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true, amount: 0.3 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <img 
//                             src="https://placehold.co/900x700/1a1a1a/b1ff32?text=Work+Showcase+Visual"
//                             alt="Project Mockup Visual"
//                             className="w-full h-auto rounded-xl shadow-2xl border border-neutral-800"
//                             onError={(e) => e.currentTarget.src = 'https://placehold.co/900x700/1a1a1a/b1ff32?text=Portfolio+Header+Image'}
//                         />
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PortfolioPageHeader;


"use client";

import React from "react";
import { motion } from "framer-motion";
// FIX: Removed 'next/link' import
// import Link from 'next/link'; 
import { ArrowRight, Star } from 'lucide-react';

interface PortfolioPageHeaderProps {
    // We are passing props to keep it reusable even if we only use it once.
    title: string; 
    subtitle: string;
    description: string;
    // Optional social proof to boost credibility
    clutchRating?: number; 
    reviewCount?: number;
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const PortfolioPageHeader: React.FC<PortfolioPageHeaderProps> = ({
    // --- FIX: Provide default empty string values for all string props ---
    title = '',
    subtitle = '',
    description = '',
    // Provide default values for social proof
    clutchRating = 4.9, 
    reviewCount = 52,
}) => {
    // Split the title to emphasize the first word ("Our")
    const words = title.split(" ");
    const emphasizedTitle = (
        <div className="inline">
            {words.map((word, index) => (
                <span
                    key={index}
                    className={
                        index === 0 // Emphasize the first word
                            ? "text-[#b1ff32] mr-2 inline-block leading-none drop-shadow-md"
                            : ""
                    }
                >
                    {word}{" "}
                </span>
            ))}
        </div>
    );

    return (
        // Dark background section, fixed height compensation for the Navbar
        <section className="bg-neutral-900 text-white pt-[150px] pb-24 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
                    
                    {/* --- Left Side: Content & Social Proof --- */}
                    <motion.div 
                        className="lg:col-span-7 mb-12 lg:mb-0 text-center lg:text-left"
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                    >
                        <motion.p 
                            className="text-sm uppercase tracking-widest font-semibold text-gray-400 mb-4"
                            variants={itemVariants}
                        >
                            {subtitle}
                        </motion.p>
                        
                        <motion.h1 
                            className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight max-w-4xl"
                            variants={itemVariants}
                        >
                            {emphasizedTitle}
                        </motion.h1>

                        <motion.p 
                            className="text-lg text-gray-400 max-w-xl lg:max-w-none mx-auto lg:mx-0 mb-8"
                            variants={itemVariants}
                        >
                            {description}
                        </motion.p>

                        {/* Social Proof (Clutch/Reviews - based on Image 2 design) */}
                        <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-4">
                            <div className="flex items-center text-sm font-semibold">
                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-2" />
                                <span>{clutchRating.toFixed(1)} / 5.0 Rating</span>
                            </div>
                            <div className="text-sm text-gray-500">
                                ({reviewCount} Reviews)
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div variants={itemVariants} className="mt-10">
                            {/* FIX: Using <a> instead of <Link> */}
                            <a
                                href="/contact" 
                                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-black bg-[#b1ff32] rounded-full hover:bg-white transition-all duration-300 shadow-lg group"
                            >
                                Get a Project Quote
                                <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* --- Right Side: Visual Placeholder (Showcasing projects) --- */}
                    <motion.div 
                        className="lg:col-span-5 hidden lg:block"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img 
                            src="https://placehold.co/900x700/1a1a1a/b1ff32?text=Work+Showcase+Visual"
                            alt="Project Mockup Visual"
                            className="w-full h-auto rounded-xl shadow-2xl border border-neutral-800"
                            onError={(e) => e.currentTarget.src = 'https://placehold.co/900x700/1a1a1a/b1ff32?text=Portfolio+Header+Image'}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioPageHeader;
