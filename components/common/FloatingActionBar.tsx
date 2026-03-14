
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// ============================================================
// ✅ SVG ICONS
// ============================================================
const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
);

const OfferIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
    <path d="M7 7h.01" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    fill="#000000"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    id="whatsapp"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
  >
    <path
      id="primary"
      d="M19.07,4.93A10,10,0,0,0,3,16.26L2,20.8a1,1,0,0,0,.27.91A1,1,0,0,0,3.2,22L7.74,21A9.89,9.89,0,0,0,12,22a10.61,10.61,0,0,0,1.85-.17,10,10,0,0,0,5.22-16.9Z"
      style={{ fill: "#ffffffff" }}
    ></path>
    <path
      id="secondary"
      d="M15.68,17a7,7,0,0,1-3-.74l-.16-.08a10.69,10.69,0,0,1-2.71-2,10.52,10.52,0,0,1-2-2.71l-.08-.16A6.36,6.36,0,0,1,7,7.84,1,1,0,0,1,8,7H9.81a1,1,0,0,1,1,.72l.4,1.4a1,1,0,0,1-.25,1l-1,1a9.8,9.8,0,0,0,1.32,1.65,9.42,9.42,0,0,0,1.65,1.32l1-1a1,1,0,0,1,1-.25l1.4.4a1,1,0,0,1,.72,1V16a1,1,0,0,1-.84,1A4.2,4.2,0,0,1,15.68,17Z"
      style={{ fill: "#041214ff" }}
    ></path>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="M6 6 18 18" />
  </svg>
);

const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M3 12h18" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

// ============================================================
//  Format time helper
// ============================================================
const formatTime = (seconds: number) => {
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(mins)}m ${pad(secs)}s`;
};

// ============================================================
//  Action Button
// ============================================================
interface ActionButtonProps {
  href?: string;
  onClick?: () => void;
  tooltip: React.ReactNode;
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ href, onClick, tooltip, children, ariaLabel, className = "" }) => (
  <div className="relative group flex">
    <a
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={`flex items-center justify-center w-12 h-12 bg-neutral-800 text-white transition-all duration-300 hover:bg-[#b1ff32] hover:text-black ${className}`}
    >
      {children}
    </a>
    <div className="absolute top-1/2 -translate-y-1/2 right-full mr-4 w-max px-4 py-3 bg-neutral-900 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      {tooltip}
      <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-neutral-900"></div>
    </div>
  </div>
);

// ============================================================
//  Offer Modal with EmailJS logic
// ============================================================
// Total countdown duration: 7h 50m = 28200s
const TOTAL_DURATION_IN_SECONDS = 7 * 3600 + 50 * 60;

const OfferModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [remainingTime, setRemainingTime] = useState(TOTAL_DURATION_IN_SECONDS);
  const [submitStatus, setSubmitStatus] = useState<"" | "ok" | "error">("");

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
          services: "Floating Bar Offer Lead",
          message: "User requested 30% discount via floating offer.",
        },
        "IF4WbCZuXMDeKvn5O"
      );

      setSubmitStatus("ok");
      form.reset();

      // Auto-close after message shows for 2.5s
      setTimeout(() => onClose(), 2500);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white z-20">
          <CloseIcon />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="w-12 h-12 bg-[#b1ff32]/10 border-2 border-[#b1ff32]/30 rounded-full flex items-center justify-center mb-3">
              <SparkleIcon />
            </div>
            <p className="font-semibold text-[#b1ff32] mb-2">LIMITED TIME OFFER!</p>
            <div className="flex items-center text-gray-400 text-sm mb-3">
              <ClockIcon />
              <span>Offer ends in: <strong className="text-white">{formatTime(remainingTime)}</strong></span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">Get 30% Off Your First Project</h3>
            <p className="text-gray-400 mb-5">Sign up now to claim your exclusive one-time discount.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input type="text" placeholder="Enter your name"
                className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" required />
              <input type="email" placeholder="Enter your email"
                className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" required />
              <input type="tel" placeholder="Enter your contact number"
                className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" required />

              <button type="submit"
                className="w-full bg-[#b1ff32] text-black font-bold text-lg px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 mt-1">
                Claim My 30% Discount
              </button>

              {submitStatus === "ok" && (
                <p className="text-center text-[#b1ff32] font-semibold mt-2">
                  Discount Claimed! We’ll contact you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-center text-red-500 font-semibold mt-2">
                  Something went wrong. Try again.
                </p>
              )}
            </form>
          </div>

          {/* Right Side Image */}
          <div className="hidden md:flex justify-center items-center bg-neutral-950">
            <img
              src="/images/contact-us.webp"
              alt="Special Offer"
              className="w-full h-full object-contain"
              onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x1000/1a1a1a/b1ff32?text=Offer+Image')}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============================================================
// ✅ Floating Action Bar
// ============================================================
const FloatingActionBar: React.FC = () => {
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed top-1/2 -translate-y-1/2 right-0 z-40 flex flex-col shadow-2xl"
      >
        <ActionButton
          className="rounded-tl-lg"
          href="tel:+923160513841"
          ariaLabel="Customer Service"
          tooltip={<div><p className="font-semibold">Customer Support</p><p className="text-gray-300 text-sm">+92 316 0513841</p></div>}
        ><SupportIcon /></ActionButton>

        <ActionButton
          onClick={() => setIsOfferModalOpen(true)}
          ariaLabel="Special Offer"
          tooltip={<div><p className="font-semibold">Special Offer</p><p className="text-gray-300 text-sm">Get 30% off your first project!</p></div>}
        ><OfferIcon /></ActionButton>

        <ActionButton href="mailto:contact@revoticai.com" ariaLabel="Email"
          tooltip={<div><p className="font-semibold">Email</p><p className="text-gray-300 text-sm">contact@revoticai.com</p></div>}
        ><MailIcon /></ActionButton>

        <ActionButton href="https://wa.me/923160513841" ariaLabel="Contact"
          tooltip={<div><p className="font-semibold">Contact</p><p className="text-gray-300 text-sm">Chat with us directly</p></div>}
        ><WhatsAppIcon /></ActionButton>

        <ActionButton className="rounded-bl-lg" href="https://www.linkedin.com/company/revoticai/" ariaLabel="LinkedIn"
          tooltip={<div><p className="font-semibold">LinkedIn</p><p className="text-gray-300 text-sm">Follow our company</p></div>}
        ><LinkedinIcon /></ActionButton>
      </motion.div>

      <AnimatePresence>
        {isOfferModalOpen && <OfferModal onClose={() => setIsOfferModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default FloatingActionBar;
