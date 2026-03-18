
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Wallet, 
  ShoppingBag, 
  Truck, 
  GraduationCap,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

const verticals = [
  {
    id: "healthcare",
    title: "Healthcare AI",
    subtitle: "Precision Diagnostics & Data Intelligence",
    description: "Architecting high-accuracy AI systems for diagnostic assistance, automated patient data processing, and clinical workflow optimization.",
    image: "/images/industries/healthcare-ai.png",
    icon: Stethoscope,
    color: "teal",
    results: [
      "99.2% Diagnostic Accuracy Enhancement",
      "40% Reduction in Administrative Load",
      "Real-time Patient Monitoring Integration"
    ]
  },
  {
    id: "fintech",
    title: "FinTech & Banking",
    subtitle: "Automated Security & Predictive Analytics",
    description: "Deploying sophisticated models for real-time fraud detection, automated credit scoring, and algorithmic market analysis.",
    image: "/images/industries/fintech-ai.png",
    icon: Wallet,
    color: "gold",
    results: [
      "Fraud Detection within <50ms",
      "Dynamic ROI Prediction Engines",
      "Automated Regulatory Compliance"
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce & Retail",
    subtitle: "Hyper-Personalization & CRM Automation",
    description: "Revolutionizing customer experiences with dynamic recommendation engines, AI-driven inventory forecasting, and intelligent chatbots.",
    image: "/images/industries/ecommerce-ai.png",
    icon: ShoppingBag,
    color: "rose",
    results: [
      "15% Increase in Average Order Value",
      "Predictive Inventory Management",
      "24/7 Intelligent Support Automation"
    ]
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    subtitle: "Optimized Routing & Predictive Scaling",
    description: "Streamlining global supply chains through intelligent route optimization, demand forecasting, and automated tracking systems.",
    image: "/images/industries/logistics-ai.png",
    icon: Truck,
    color: "blue",
    results: [
      "25% Reduction in Fuel & Transit Time",
      "Automated Demand Forecasting",
      "End-to-End Visibility Architectures"
    ]
  },
  {
    id: "education",
    title: "EdTech & Learning",
    subtitle: "Adaptive Learning & Content Generation",
    description: "Empowering educational platforms with AI tutors, automated content generation, and personalized learning pathways.",
    image: "/images/industries/education-ai.png",
    icon: GraduationCap,
    color: "purple",
    results: [
      "Personalized Learning at Scale",
      "Automated Grading & Feedback",
      "AI-Assisted Content Development"
    ]
  }
];

const IndustryVerticals: React.FC = () => {
  return (
    <section id="verticals" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#b1ff32] font-black uppercase tracking-[0.3em] text-sm mb-4 block">
            Vertical Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tighter">
            Industry-Specific AI Architectures
          </h2>
          <p className="text-gray-600 text-lg">
            We don't build generic AI. We architect specialized engines deep-rooted in the unique requirements of your industry.
          </p>
        </motion.div>

        <div className="space-y-32">
          {verticals.map((item, index) => (
            <div 
              key={item.id}
              className={`flex flex-col lg:items-center gap-12 lg:gap-24 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Side */}
              <motion.div 
                className="lg:w-1/2 relative group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-[#b1ff32]/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-gray-50 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-1">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <item.icon className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-black tracking-tighter">{item.title}</h3>
                    <p className="text-[#c0ff52] font-bold uppercase text-xs tracking-widest">{item.subtitle}</p>
                  </div>
                </div>

                <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-4 mb-12">
                  {item.results.map((result, rIdx) => (
                    <div key={rIdx} className="flex items-center space-x-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b1ff32]/20 flex items-center justify-center transition-colors group-hover/item:bg-[#b1ff32]">
                        <CheckCircle2 className="w-4 h-4 text-[#b1ff32] transition-colors group-hover/item:text-black" />
                      </div>
                      <span className="text-gray-900 font-semibold">{result}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="/contact" 
                  className="inline-flex items-center text-black font-black uppercase tracking-widest text-sm hover:text-[#b1ff32] transition-colors group"
                >
                  Architect for {item.title.split(" ")[0]}
                  <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryVerticals;
