
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";

const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="bg-neutral-950 rounded-[3rem] p-8 md:p-12 relative overflow-hidden border border-neutral-800 shadow-2xl">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#b1ff32]/10 blur-[100px] rounded-full -mr-20 -mt-20" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full mb-6 text-[#b1ff32]">
            <Mail className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.2em] font-black">Strategic Intelligence</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter leading-tight">
            Stay Ahead of the <span className="text-[#b1ff32]">AI Curve</span>
          </h3>
          <p className="text-gray-400 text-lg">
            Join 5,000+ industry leaders receiving our weekly analysis on autonomous systems, ROI strategies, and technical R&D.
          </p>
        </div>

        <div className="md:w-1/2 w-full">
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="relative group">
              <input
                type="email"
                required
                placeholder="Enter your professional email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 text-white px-8 py-6 rounded-3xl focus:outline-none focus:border-[#b1ff32] transition-all placeholder:text-gray-600 text-lg shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-3 top-3 bottom-3 px-8 bg-[#b1ff32] text-black rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 flex items-center group/btn"
              >
                Subscribe
                <Send className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center p-8 bg-[#b1ff32] rounded-[2.5rem] text-black text-center"
            >
              <CheckCircle2 className="w-12 h-12 mb-4" />
              <h4 className="text-2xl font-black mb-2 uppercase tracking-tighter">Welcome to the Frontier</h4>
              <p className="font-bold opacity-80 uppercase tracking-widest text-xs">Verification email sent. Prepare for impact.</p>
            </motion.div>
          )}
          <p className="mt-6 text-center md:text-left text-gray-500 text-sm italic">
            No spam. Only high-signal intelligence. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCTA;
