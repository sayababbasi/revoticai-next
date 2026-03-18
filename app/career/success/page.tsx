"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b1ff32]/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl w-full text-center relative z-10"
      >
        <div className="w-24 h-24 bg-[#b1ff32]/20 rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-[#b1ff32]/30 shadow-2xl shadow-[#b1ff32]/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="#b1ff32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-tight text-white">
          Application <br /><span className="text-[#b1ff32]">Received_</span>
        </h1>
        
        <p className="text-gray-400 text-lg font-medium leading-relaxed mb-12 max-w-md mx-auto">
          Thank you for applying to Revotic AI. Our team will review your application and get back to you within 48 hours.
        </p>

        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-10 py-5 text-sm font-black text-black bg-[#b1ff32] rounded-full hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl shadow-[#b1ff32]/20 uppercase tracking-widest"
        >
          Back To Home_
        </Link>
      </motion.div>
    </div>
  );
};

export default SuccessPage;