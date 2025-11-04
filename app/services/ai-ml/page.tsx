// --- 1. METADATA (Runs on Server) ---
// By placing this first, we avoid the "use client" metadata error.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & ML Automation Services | Revotic AI",
  description: "Drive efficiency and unlock insights with Revotic AI's custom Artificial Intelligence, Machine Learning, and RPA solutions.",
};

// --- 2. CLIENT COMPONENT ---
// We mark "use client" here, after the metadata.
"use client";

import React from "react";
import { motion } from "framer-motion";

// --- START: INLINED ICONS (to prevent build errors) ---
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#b1ff32]">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const BrainCircuitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b1ff32]">
    <path d="M12 4.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 4.5Z" />
    <path d="M12 13.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 13.5Z" />
    <path d="M12 22.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 22.5Z" />
    <path d="M17 11.5a2.5 2.5 0 0 1 0 5" /><path d="M7 11.5a2.5 2.5 0 0 1 0 5" />
  </svg>
);
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b1ff32]">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const BarChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b1ff32]">
    <line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" />
  </svg>
);
// --- END: INLINED ICONS ---

// --- START: INLINED ANIMATION VARIANTS ---
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
// --- END: INLINED ANIMATION VARIANTS ---

// --- START: INLINED COMPONENT 1: ServicePageHeader ---
// This is the component you requested: ServicesHeaderPage.tsx
interface ServicePageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
}
const ServicePageHeader: React.FC<ServicePageHeaderProps> = ({
  title,
  subtitle,
  description,
  features = [], // Default to empty array
  imageUrl,
  imageAlt,
}) => {
  return (
    <section className="bg-white text-black pt-[150px] pb-24 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* --- Left Side: Content & CTA --- */}
          <motion.div 
            className="lg:col-span-6 mb-12 lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p 
              className="text-sm uppercase tracking-widest font-semibold text-gray-500 mb-4"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            <motion.h1 
              className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 max-w-lg mb-8"
              variants={itemVariants}
            >
              {description}
            </motion.p>
            <motion.ul className="space-y-3 mb-10" variants={itemVariants}>
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircleIcon />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div variants={itemVariants}>
              <a
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-black bg-[#b1ff32] rounded-full hover:bg-black hover:text-[#b1ff32] transition-all duration-300 shadow-lg group"
              >
                Get Started
                <ArrowRightIcon />
              </a>
            </motion.div>
          </motion.div>
          {/* --- Right Side: Image/Illustration --- */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto rounded-xl shadow-2xl border border-gray-100"
              onError={(e) => e.currentTarget.src = 'https://placehold.co/900x700/f0f0f0/333?text=Service+Image'}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
// --- END: INLINED COMPONENT 1 ---

// --- START: INLINED COMPONENT 2: KeyFeaturesSection ---
const keyFeatures = [
  {
    icon: <BrainCircuitIcon />,
    title: "Custom Model Development",
    description: "We build and train bespoke machine learning models tailored to your specific data and business challenges.",
  },
  {
    icon: <ZapIcon />,
    title: "RPA Integration",
    description: "Automate your repetitive, rule-based tasks using robust Robotic Process Automation bots that work 24/7.",
  },
  {
    icon: <BarChartIcon />,
    title: "Predictive Analytics",
    description: "Unlock future trends from your existing data. We help you forecast demand, churn, and opportunities.",
  },
];
const KeyFeaturesSection: React.FC = () => (
  <section className="bg-gray-50 py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-5xl">
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.p className="text-sm uppercase tracking-wider font-semibold text-[#b1ff32] mb-3" variants={itemVariants}>
          Core Capabilities
        </motion.p>
        <motion.h2 className="text-4xl md:text-5xl font-bold text-black mb-4" variants={itemVariants}>
          AI & Automation in Detail
        </motion.h2>
        <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
          Our expertise spans the full spectrum of artificial intelligence, from predictive models to intelligent automation that transforms your operations.
        </motion.p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {keyFeatures.map((feature, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            variants={itemVariants}
          >
            <div className="w-12 h-12 bg-[#b1ff32]/10 rounded-full flex items-center justify-center mb-5">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
// --- END: INLINED COMPONENT 2 ---

// --- START: INLINED COMPONENT 3: CTASection ---
const CTASection: React.FC = () => (
  <section className="bg-black text-white">
    <div className="container mx-auto px-6 py-20 md:py-28">
      <div
        className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 p-12 md:p-16 lg:p-20 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      >
        <div className="absolute -top-1/3 -right-1/4 w-1/2 h-1/2 bg-[#b1ff32]/20 rounded-full blur-[150px] opacity-60 z-0" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Let our experts analyze your workflow and build a custom automation
            strategy for you.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center justify-center px-8 py-4 bg-[#b1ff32] text-black font-bold rounded-full text-lg transition-transform duration-300 hover:scale-105"
          >
            Book a Free Consultation
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </div>
  </section>
);
// --- END: INLINED COMPONENT 3 ---


// --- 3. MAIN PAGE COMPONENT ---
// This is the default export for /app/services/ai-ml/page.tsx
export default function AiMlPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "AI & ML Automation", href: "/services/ai-ml" },
  ];

  return (
    <main>
      
      {/* --- Section 1: Service Page Header --- */}
      <ServicePageHeader
        title="AI & ML Automation"
        subtitle="Intelligent Process Automation"
        description="We build and deploy custom Artificial Intelligence, Machine Learning, and RPA solutions to automate complex tasks, reduce costs, and unlock data-driven insights."
        features={[
          "Custom AI/ML Model Development",
          "Robotic Process Automation (RPA)",
          "Generative AI & NLP Solutions",
          "Predictive Analytics & Forecasting",
        ]}
        imageUrl="https://placehold.co/900x700/f0f0f0/333?text=AI+Automation"
        imageAlt="AI & ML Automation"
      />

      {/* --- Section 2: Key Features --- */}
      <KeyFeaturesSection />
      
      {/* --- Section 3: Call to Action --- */}
      <CTASection />

    </main>
  );
}
