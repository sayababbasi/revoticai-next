
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// --- Icons ---
const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#b1ff32]">
    <path d="M12 2L13.88 7.12L19 9L13.88 10.88L12 16L10.12 10.88L5 9L10.12 7.12L12 2Z" />
    <path d="M5 2L6 5" />
    <path d="M19 12L18 14" />
    <path d="M5 22L6 19" />
    <path d="M19 22L18 20" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="M6 6 18 18" />
  </svg>
);

// Total countdown duration: 7h 50m = 28200s
const TOTAL_DURATION_IN_SECONDS = 7 * 3600 + 50 * 60;

const LeadGenPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [remainingTime, setRemainingTime] = useState(TOTAL_DURATION_IN_SECONDS);
  const [submitStatus, setSubmitStatus] = useState<"" | "ok" | "error">("");

  useEffect(() => {
    // Show popup after 10 seconds, only once a day per user
    const lastSeen = localStorage.getItem("revoticPopupLastSeen");
    const now = Date.now();

    // 24 hours in milliseconds = 24 * 60 * 60 * 1000 = 86400000
    if (!lastSeen || (now - Number(lastSeen)) > 86400000) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("revoticPopupLastSeen", String(now));
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Countdown logic with persistence and auto-reset
  useEffect(() => {
    const initializeExpiry = () => {
      const now = Date.now();
      const storedExpiry = localStorage.getItem("offerExpiryTime");
      const expiry = storedExpiry ? Number(storedExpiry) : NaN;

      if (!expiry || isNaN(expiry)) {
        const newExpiry = now + TOTAL_DURATION_IN_SECONDS * 1000;
        localStorage.setItem("offerExpiryTime", String(newExpiry));
        return newExpiry;
      }
      return expiry;
    };

    let expiryTime = initializeExpiry();

    const tick = () => {
      let remaining = Math.floor((expiryTime - Date.now()) / 1000);

      // Reset to start timer automatically when it hits 0
      if (remaining <= 0) {
        expiryTime = Date.now() + TOTAL_DURATION_IN_SECONDS * 1000;
        localStorage.setItem("offerExpiryTime", String(expiryTime));
        remaining = TOTAL_DURATION_IN_SECONDS;
      }

      setRemainingTime(remaining);
    };

    tick(); // Update immediately on mount
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("");

    const form = e.target as HTMLFormElement;
    const name = (form[0] as HTMLInputElement).value;
    const email = (form[1] as HTMLInputElement).value;
    const phone = (form[2] as HTMLInputElement).value;

    try {
      await emailjs.send(
        "service_toql1x3",
        "template_jea4yog",
        {
          name,
          email,
          phone,
          company: "N/A",
          services: "Home Page Offer Lead",
          message: "User requested a 30% discount offer via popup.",
        },
        "IF4WbCZuXMDeKvn5O"
      );

      setSubmitStatus("ok");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white z-20">
              <CloseIcon />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="w-12 h-12 bg-[#b1ff32]/10 border-2 border-[#b1ff32]/30 rounded-full flex items-center justify-center mb-3">
                  <SparkleIcon />
                </div>

                <p className="font-semibold text-[#b1ff32] mb-2">LIMITED TIME OFFER!</p>

                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <ClockIcon />
                  <span>
                    Offer ends in: <strong className="text-white">{formatTime(remainingTime)}</strong>
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">Get 30% Off Your First Project</h3>
                <p className="text-gray-400 mb-5">Sign up now to claim your exclusive one-time discount.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input type="text" placeholder="Enter your name" className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" required />
                  <input type="email" placeholder="Enter your email" className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" required />
                  <input type="tel" placeholder="Enter your contact number" className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" required />

                  <button type="submit" className="w-full bg-[#b1ff32] text-black font-bold text-lg px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 mt-1">
                    Claim My 30% Discount
                  </button>

                  {submitStatus === "ok" && <p className="text-center text-[#b1ff32] font-semibold mt-2">Discount Claimed! We’ll contact you soon.</p>}
                  {submitStatus === "error" && <p className="text-center text-red-500 font-semibold mt-2">Something went wrong. Try again.</p>}
                </form>
              </div>

              <div className="hidden md:flex justify-center items-center bg-neutral-950">
                <img
                  src="/images/contact-us.webp"
                  alt="Special Offer"
                  className="w-full h-full object-contain"
                  onError={(e) => (e.currentTarget.src = "https://placehold.co/800x1000/1a1a1a/b1ff32?text=Offer+Image")}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadGenPopup;
