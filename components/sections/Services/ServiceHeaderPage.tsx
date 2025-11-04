// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, CheckCircle } from "lucide-react";

// interface ServicesHeaderPageProps {
//   title: string;
//   subtitle: string;
//   description: string;
//   features: string[];
//   imageUrl: string;
//   imageAlt: string;
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const ServicesHeaderPage: React.FC<ServicesHeaderPageProps> = ({
//   title,
//   subtitle,
//   description,
//   features,
//   imageUrl,
//   imageAlt,
// }) => {
//   return (
//     <section className="bg-white text-black pt-[150px] pb-24 md:pb-32 overflow-hidden">
//       <div className="container mx-auto px-6">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
//           {/* --- Left Side: Content & CTA --- */}
//           <motion.div 
//             className="lg:col-span-6 mb-12 lg:mb-0"
//             initial="hidden"
//             animate="visible"
//             variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
//           >
//             <motion.p 
//               className="text-sm uppercase tracking-widest font-semibold text-gray-500 mb-4"
//               variants={itemVariants}
//             >
//               {subtitle}
//             </motion.p>
            
//             <motion.h1 
//               className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
//               variants={itemVariants}
//             >
//               {title}
//             </motion.h1>

//             <motion.p 
//               className="text-lg text-gray-700 max-w-lg mb-8"
//               variants={itemVariants}
//             >
//               {description}
//             </motion.p>
            
//             {/* Features List */}
//             <motion.ul className="space-y-3 mb-10" variants={itemVariants}>
//               {features.map((feature, index) => (
//                 <li key={index} className="flex items-center">
//                   <CheckCircle className="w-5 h-5 text-[#b1ff32] mr-3 flex-shrink-0" />
//                   <span className="text-gray-800 font-medium">{feature}</span>
//                 </li>
//               ))}
//             </motion.ul>

//             {/* CTA Button */}
//             <motion.div variants={itemVariants}>
//               <a
//                 href="/contact" 
//                 className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-black bg-[#b1ff32] rounded-full hover:bg-black hover:text-[#b1ff32] transition-all duration-300 shadow-lg group"
//               >
//                 Get Started
//                 <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* --- Right Side: Image/Illustration --- */}
//           <motion.div 
//             className="lg:col-span-6"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6 }}
//           >
//             <img 
//               src={imageUrl}
//               alt={imageAlt}
//               className="w-full h-auto rounded-xl shadow-2xl border border-gray-100"
//               onError={(e) => e.currentTarget.src = 'https://placehold.co/900x700/f0f0f0/333?text=Service+Image'}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesHeaderPage;


"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "./Icons"; // import any icons you need

// --- Animation Variants ---
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// --- PageHeader Component ---
interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  breadcrumbs: { name: string; href: string }[];
  emphasizeWord?: number;
  button?: { text: string; href: string };
}

const ServiceHeaderPage: React.FC<PageHeaderProps> = ({
  title = "",
  subtitle = "",
  description = "",
  breadcrumbs = [],
  emphasizeWord,
  button,
}) => {
  const words = title.split(" ");
  const emphasizedTitle =
    emphasizeWord !== undefined && words[emphasizeWord] ? (
      <div className="inline">
        {words.map((word, index) => (
          <span
            key={index}
            className={
              index === emphasizeWord
                ? "text-[#b1ff32] mr-2 inline-block leading-none"
                : ""
            }
          >
            {word}{" "}
          </span>
        ))}
      </div>
    ) : (
      title
    );

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
          {subtitle}
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          variants={itemVariants}
        >
          {emphasizedTitle}
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 max-w-3xl mx-auto mb-8"
          variants={itemVariants}
        >
          {description}
        </motion.p>
        <motion.nav
          className="text-sm text-gray-400 flex justify-center space-x-2"
          variants={itemVariants}
        >
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.name}>
              <a
                href={item.href}
                className="hover:text-[#b1ff32] transition-colors"
              >
                {item.name}
              </a>
              {index < breadcrumbs.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </motion.nav>
        {button && (
          <motion.div className="mt-6" variants={itemVariants}>
            <a
              href={button.href}
              className="inline-flex items-center bg-[#b1ff32] text-black px-5 py-2 rounded-full font-semibold hover:bg-[#d0ff4f] transition"
            >
              {button.text}
              <ArrowRightIcon />
            </a>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ServiceHeaderPage;
