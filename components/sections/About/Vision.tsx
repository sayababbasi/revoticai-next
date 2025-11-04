"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const VisionSection: React.FC = () => {
  const visionPoints = [
    "To be the industry standard for intelligent automation and ethical AI deployment.",
    "Cultivating a culture of continuous learning and responsible technological application.",
    "Developing proprietary SaaS tools that define best practices for digital transformation.",
    "Ensuring every client engagement achieves 10x ROI through smart, scalable solutions."
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
  };

  return (
    // Dark section for contrast
    <section className="bg-neutral-900 text-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Left Side: Vision Content (Text) */}
          <motion.div 
            className="lg:col-span-6 mb-10 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-wider text-[#b1ff32] font-semibold mb-3">
              Where We Are Heading
            </p>
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Vision for Tomorrow's AI Landscape
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our vision is simple: to <b>future-proof</b> every business we touch. We see a world where complex operations are simplified by intelligent, reliable, and scalable technology.
            </p>
            
            <ul className="space-y-4">
              {visionPoints.map((point, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  custom={index}
                  variants={itemVariants}
                >
                  <ChevronRight className="w-5 h-5 text-[#b1ff32] mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{point}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Right Side: Image / Placeholder */}
          <motion.div 
            className="lg:col-span-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src="https://placehold.co/800x500/1a1a1a/b1ff32?text=AI+Future+Vision"
              alt="Future Vision"
              className="w-full max-w-lg h-auto rounded-xl shadow-2xl border border-neutral-800"
              onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x500/1a1a1a/b1ff32?text=Future+Vision')}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
