"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Layers, 
  Users, 
  Brain, 
  ShieldCheck, 
  Rocket, 
  TrendingUp 
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Alignment",
    description: "We dive deep into your business objectives, technical constraints, and user needs to define a roadmap that guarantees ROI.",
    icon: <Search className="w-8 h-8" />,
    color: "bg-blue-500/10 text-blue-500",
    border: "border-blue-500/20",
    tags: ["Business Audit", "Tech Feasibility", "ROI Projection"]
  },
  {
    number: "02",
    title: "Architecture Design",
    description: "Our architects design a scalable, secure, and future-proof technical foundation tailored to your specific requirements.",
    icon: <Layers className="w-8 h-8" />,
    color: "bg-purple-500/10 text-purple-500",
    border: "border-purple-500/20",
    tags: ["System Mapping", "Cloud Strategy", "Data Security"]
  },
  {
    number: "03",
    title: "Co-Creation Phase",
    description: "We work as an extension of your team, providing weekly updates and iterative builds for constant alignment.",
    icon: <Users className="w-8 h-8" />,
    color: "bg-orange-500/10 text-orange-500",
    border: "border-orange-500/20",
    tags: ["Agile Sprints", "Weekly Demos", "Feedback Loops"]
  },
  {
    number: "04",
    title: "Intelligence Injection",
    description: "This is where we integrate custom AI models, NLP, or computer vision to turn basic software into an intelligent system.",
    icon: <Brain className="w-8 h-8" />,
    color: "bg-[#b1ff32]/10 text-[#b1ff32]",
    border: "border-[#b1ff32]/20",
    tags: ["Custom LLMs", "Predictive ML", "Automation"]
  },
  {
    number: "05",
    title: "System Hardening",
    description: "Extensive load testing, security audits, and edge-case handling to ensure the product performs under pressure.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "bg-teal-500/10 text-teal-500",
    border: "border-teal-500/20",
    tags: ["Security Audit", "QA Testing", "Performance Tuning"]
  },
  {
    number: "06",
    title: "The Handover",
    description: "Seamless deployment to your production environment along with comprehensive technical documentation and training.",
    icon: <Rocket className="w-8 h-8" />,
    color: "bg-red-500/10 text-red-500",
    border: "border-red-500/20",
    tags: ["DevOps Sync", "Documentation", "Staff Training"]
  },
  {
    number: "07",
    title: "Scale & Support",
    description: "Post-launch monitoring and optimization to ensure your system continues to evolve with your business.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "bg-green-500/10 text-green-500",
    border: "border-green-500/20",
    tags: ["Continuous Opt", "Support SLA", "Growth Roadmap"]
  }
];

const StrategicWorkflow: React.FC = () => {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.p 
              className="text-[#b1ff32] font-black uppercase tracking-[0.4em] text-xs mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Systematic Success
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-6xl font-black text-white uppercase leading-none tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              The Seven <br /> Core <span className="text-white/20 italic">Phases</span>
            </motion.h2>
          </div>
          <motion.p 
            className="text-gray-500 max-w-sm text-right font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            A battle-tested methodology designed to move from abstract ideas to production-ready assets in record time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`p-10 rounded-[2.5rem] bg-neutral-900/50 border ${step.border} hover:bg-neutral-900 transition-all duration-500 group relative flex flex-col h-full overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Background Number */}
              <div className="absolute top-[-20%] right-[-10%] text-9xl font-black text-white/5 select-none pointer-events-none group-hover:text-[#b1ff32]/5 transition-colors duration-500">
                {step.number}
              </div>

              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                {step.icon}
              </div>

              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-[#b1ff32] transition-colors">
                {step.title}
              </h3>
              
              <p className="text-gray-400 mb-8 leading-relaxed font-medium flex-grow">
                {step.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {step.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-black uppercase tracking-widest text-gray-500 border border-white/5 px-3 py-1 rounded-full group-hover:border-[#b1ff32]/20 group-hover:text-[#b1ff32]/60 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Final CTA-style Card */}
          <motion.div
            className="p-10 rounded-[2.5rem] bg-[#b1ff32] border border-[#b1ff32] flex flex-col justify-center items-center text-center group cursor-pointer hover:shadow-[0_0_50px_rgba(177,255,50,0.3)] transition-all duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-3xl font-black text-black uppercase leading-tight mb-6 tracking-tighter">
              Start Your <br /> Process Today
            </h3>
            <p className="text-black/70 font-bold mb-8">
              Ready to move your project into the first phase?
            </p>
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-[#b1ff32] group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategicWorkflow;
