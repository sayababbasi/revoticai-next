// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // --- Inlined SVG Icons (to prevent build errors) ---

// // --- NEW Support Icon (Replaced HeadsetIcon) ---
// const SupportIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
//     <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
//     <path d="M12 17h.01" />
//   </svg>
// );

// // --- NEW Offer/Tag Icon (Replaced GiftIcon) ---
// const OfferIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
//     <path d="M7 7h.01" />
//   </svg>
// );

// const MailIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <rect x="2" y="4" width="20" height="16" rx="2" />
//     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//   </svg>
// );

// const LinkedinIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//     <rect x="2" y="9" width="4" height="12" />
//     <circle cx="4" cy="4" r="2" />
//   </svg>
// );

// const WhatsAppIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
//   </svg>
// );

// const CloseIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M18 6 6 18" />
//     <path d="M6 6 18 18" />
//   </svg>
// );

// // --- Reusable Action Button Component ---
// interface ActionButtonProps {
//   href?: string;
//   onClick?: () => void;
//   tooltip: React.ReactNode;
//   children: React.ReactNode;
//   ariaLabel: string;
// }

// const ActionButton: React.FC<ActionButtonProps> = ({
//   href,
//   onClick,
//   tooltip,
//   children,
//   ariaLabel,
// }) => (
//   <div className="relative group">
//     <a
//       href={href}
//       onClick={onClick}
//       target={href ? "_blank" : undefined}
//       rel={href ? "noopener noreferrer" : undefined}
//       aria-label={ariaLabel}
//       className="flex items-center justify-center w-12 h-12 bg-neutral-800 text-white transition-all duration-300 hover:bg-[#b1ff32] hover:text-black"
//     >
//       {children}
//     </a>
//     <div className="absolute top-1/2 -translate-y-1/2 right-full mr-4 w-max px-4 py-3 bg-neutral-900 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//       {tooltip}
//       {/* Tooltip Arrow */}
//       <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-neutral-900"></div>
//     </div>
//   </div>
// );

// // --- Placeholder Offer Modal ---
// const OfferModal = ({ onClose }: { onClose: () => void }) => (
//   <motion.div
//            initial={{ opacity: 0 }}
//            animate={{ opacity: 1 }}
//            exit={{ opacity: 0 }}
//            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" // Increased mobile padding
//            onClick={() => setIsOpen(false)} // Use local state setter to close
//          >
//            <motion.div
//              initial={{ scale: 0.9, opacity: 0 }}
//              animate={{ scale: 1, opacity: 1 }}
//              exit={{ scale: 0.9, opacity: 0 }}
//              transition={{ duration: 0.3, ease: "easeInOut" }}
//              // --- FIX: Reduced max-w-4xl to max-w-3xl for a more compact modal ---
//              className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden"
//              onClick={(e) => e.stopPropagation()}
//            >
//              {/* Close Button */}
//              <button
//                onClick={() => setIsOpen(false)} // Use local state setter to close
//                className="absolute top-4 right-4 text-gray-400 hover:text-white z-20"
//                aria-label="Close modal"
//              >
//                <CloseIcon />
//              </button>
 
//              {/* Grid Layout: 2 Columns */}
//              <div className="grid grid-cols-1 md:grid-cols-2">
//                {/* --- Left Side: Form --- */}
//                {/* --- FIX: Reduced padding from p-8 md:p-10 to p-6 md:p-8 --- */}
//                <div className="p-6 md:p-8 flex flex-col justify-center">
//                  {/* --- FIX: Reduced icon size and margin --- */}
//                  <div className="w-12 h-12 bg-[#b1ff32]/10 border-2 border-[#b1ff32]/30 rounded-full flex items-center justify-center mb-3">
//                    <SparkleIcon />
//                  </div>
//                  <p className="font-semibold text-[#b1ff32] mb-2">
//                    LIMITED TIME OFFER!
//                  </p>
//                  {/* --- FIX: Reduced margin-bottom --- */}
//                  <div className="flex items-center text-gray-400 text-sm mb-3">
//                    <ClockIcon />
//                    <span>
//                      Offer ends in:{" "}
//                      <strong className="text-white">
//                        {formatTime(remainingTime)}
//                      </strong>
//                    </span>
//                  </div>
//                  {/* --- FIX: Reduced margin-bottom --- */}
//                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
//                    Get 30% Off Your First Project
//                  </h3>
//                  {/* --- FIX: Reduced margin-bottom --- */}
//                  <p className="text-gray-400 mb-5">
//                    Sign up now to claim your exclusive one-time discount.
//                  </p>
//                  <form
//                    onSubmit={(e) => e.preventDefault()}
//                    // --- FIX: Reduced gap ---
//                    className="flex flex-col gap-3"
//                  >
//                    <input
//                      type="text"
//                      placeholder="Enter your name"
//                      className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"
//                      aria-label="Name"
//                    />
//                    <input
//                      type="email"
//                      placeholder="Enter your email"
//                      // --- FIX: Fixed typo in className ---
//                      className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"
//                      aria-label="Email"
//                    />
//                    <input
//                      type="tel"
//                      placeholder="Enter your contact number"
//                      className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"
//                      aria-label="Contact Number"
//                    />
//                    <button
//                      type="submit"
//                      // --- FIX: Reduced margin-top ---
//                      className="w-full bg-[#b1ff32] text-black font-bold text-lg px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 mt-1"
//                    >
//                      Claim My 30% Discount
//                    </button>
//                  </form>
//                </div>
 
//                {/* --- Right Side: Image --- */}
//                <div className="hidden md:block w-full h-full">
//                  <img
//                    src="https://images.unsplash.com/photo-1556761175-577380e3c8b4?auto=format&fit=crop&q=80&w=800&h=1000"
//                    alt="Special Offer"
//                    className="w-full h-full object-cover"
//                    onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x1000/1a1a1a/b1ff32?text=Offer+Image')}
//                  />
//                </div>
//              </div>
//            </motion.div>
//          </motion.div>
// );

// // --- Main Floating Action Bar Component ---
// const FloatingActionBar: React.FC = () => {
//   const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

//   return (
//     <>
//       <motion.div
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
//         className="fixed top-1/2 -translate-y-1/2 right-0 z-40 flex flex-col shadow-2xl rounded-l-lg overflow-hidden"
//       >
//         <ActionButton
//           href="tel:+923160513841" // Your phone number
//           ariaLabel="Customer Service"
//           tooltip={
//             <div className="text-left">
//               <p className="font-semibold text-white">Customer Support</p>
//               <p className="text-gray-300 text-sm">+92 316 0513841</p>
//               <p className="text-gray-400 text-xs">Service time: 9:00 - 18:00</p>
//             </div>
//           }
//         >
//           {/* --- ICON CHANGED --- */}
//           <SupportIcon />
//         </ActionButton>

//         <ActionButton
//           onClick={() => setIsOfferModalOpen(true)}
//           ariaLabel="View Special Offer"
//           tooltip={
//             <div className="text-left">
//               <p className="font-semibold text-white">Special Offer</p>
//               <p className="text-gray-300 text-sm">
//                 Get a 10% discount on your first project!
//               </p>
//             </div>
//           }
//         >
//           {/* --- ICON CHANGED --- */}
//           <OfferIcon />
//         </ActionButton>

//         <ActionButton
//           href="mailto:contact@revoticai.com" // Your email
//           ariaLabel="Contact Us"
//           tooltip={
//             <div className="text-left">
//               <p className="font-semibold text-white">Contact Us</p>
//               <p className="text-gray-300 text-sm">contact@revoticai.com</p>
//             </div>
//           }
//         >
//           <MailIcon />
//         </ActionButton>

//         <ActionButton
//           href="https://wa.me/923160513841" // Your WhatsApp number
//           ariaLabel="Chat on WhatsApp"
//           tooltip={
//             <div className="text-left">
//               <p className="font-semibold text-white">WhatsApp</p>
//               <p className="text-gray-300 text-sm">Chat with us directly</p>
//             </div>
//           }
//         >
//           <WhatsAppIcon />
//         </ActionButton>

//         <ActionButton
//           href="https://www.linkedin.com/company/revoticai/" // Your LinkedIn URL
//           ariaLabel="Find us on LinkedIn"
//           tooltip={
//             <div className="text-left">
//               <p className="font-semibold text-white">LinkedIn</p>
//               <p className="text-gray-300 text-sm">Follow our company page</p>
//             </div>
//           }
//         >
//           <LinkedinIcon />
//         </ActionButton>
//       </motion.div>

//       {/* --- Offer Modal (conditionally rendered) --- */}
//       <AnimatePresence>
//         {isOfferModalOpen && (
//           <OfferModal onClose={() => setIsOfferModalOpen(false)} />
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default FloatingActionBar;

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================
//  ✅ Inline SVG Icons (no build-time import errors)
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
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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
//  ✅ Helper function for countdown
// ============================================================
const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

// ============================================================
//  ✅ Reusable Action Button
// ============================================================
interface ActionButtonProps {
  href?: string;
  onClick?: () => void;
  tooltip: React.ReactNode;
  children: React.ReactNode;
  ariaLabel: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  href,
  onClick,
  tooltip,
  children,
  ariaLabel,
}) => (
  <div className="relative group">
    <a
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className="flex items-center justify-center w-12 h-12 bg-neutral-800 text-white transition-all duration-300 hover:bg-[#b1ff32] hover:text-black"
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
//   Offer Modal Component
// ============================================================


const OfferModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  // Initialize state in seconds (459 seconds = 7m 39s)
  const [remainingTime, setRemainingTime] = useState(27540);

  /**
   * Convert total seconds into a formatted H:M:S string.
   */
  const formatTime = (totalSeconds: number): string => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    // Optional: Add leading zeros for consistent display (e.g., 01h 05m 03s)
    const pad = (num: number) => num.toString().padStart(2, '0');

    // Only display hours if they exist
    if (hrs > 0) {
        return `${pad(hrs)}h ${pad(mins)}m ${pad(secs)}s`;
    } else {
        return `${pad(mins)}m ${pad(secs)}s`;
    }
  };

  /**
   * Effect hook to manage the countdown timer.
   */
  useEffect(() => {
    // Only run the timer if time is greater than 0
    if (remainingTime <= 0) return;

    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        // Stop the timer if we hit zero on this tick
        if (prevTime <= 1) {
          clearInterval(timer);
          // Optional: automatically close the modal when time runs out
          // onClose(); 
          return 0;
        }
        return prevTime - 1; // Decrement by one second
      });
    }, 1000); // Decrease every 1000ms (1 second)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [remainingTime, onClose]); // Depend on remainingTime to check if it's zero


// const OfferModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
//   const [remainingTime, setRemainingTime] = useState(459); // in minutes

//   // Convert minutes to hours and minutes
//   const formatTime = (minutes: number) => {
//     const hrs = Math.floor(minutes / 60);
//     const mins = minutes % 60;
//     return `${hrs}h ${mins}m`;
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setRemainingTime((t) => Math.max(t - 1, 0));
//     }, 60000); // decrease every minute
//     return () => clearInterval(timer);
//   }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-20"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="w-12 h-12 bg-[#b1ff32]/10 border-2 border-[#b1ff32]/30 rounded-full flex items-center justify-center mb-3">
              <SparkleIcon />
            </div>
            <p className="font-semibold text-[#b1ff32] mb-2">
              LIMITED TIME OFFER!
            </p>
            <div className="flex items-center text-gray-400 text-sm mb-3">
              <ClockIcon />
              <span>
                Offer ends in:{" "}
                <strong className="text-white">
                  {formatTime(remainingTime)}
                </strong>
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Get 30% Off Your First Project
            </h3>
            <p className="text-gray-400 mb-5">
              Sign up now to claim your exclusive one-time discount.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"
              />
              <input
                type="tel"
                placeholder="Enter your contact number"
                className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"
              />
              <button
                type="submit"
                className="w-full bg-[#b1ff32] text-black font-bold text-lg px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 mt-1"
              >
                Claim My 30% Discount
              </button>
            </form>
          </div>

          <div className="hidden md:block w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1556761175-577380e3c8b4?auto=format&fit=crop&q=80&w=800&h=1000"
              alt="Special Offer"
              className="w-full h-full object-cover"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://placehold.co/800x1000/1a1a1a/b1ff32?text=Offer+Image")
              }
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============================================================
//   Main Floating Action Bar
// ============================================================
const FloatingActionBar: React.FC = () => {
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
        className="fixed top-1/2 -translate-y-1/2 right-0 z-40 flex flex-col shadow-2xl rounded-l-lg overflow-hidden"
      >
        <ActionButton
          href="tel:+923160513841"
          ariaLabel="Customer Service"
          tooltip={
            <div className="text-left">
              <p className="font-semibold text-white">Customer Support</p>
              <p className="text-gray-300 text-sm">+92 316 0513841</p>
              <p className="text-gray-400 text-xs">9:00 - 18:00</p>
            </div>
          }
        >
          <SupportIcon />
        </ActionButton>

        <ActionButton
          onClick={() => setIsOfferModalOpen(true)}
          ariaLabel="Special Offer"
          tooltip={
            <div className="text-left">
              <p className="font-semibold text-white">Special Offer</p>
              <p className="text-gray-300 text-sm">
                Get a 30% discount on your first project!
              </p>
            </div>
          }
        >
          <OfferIcon />
        </ActionButton>

        <ActionButton
          href="mailto:contact@revoticai.com"
          ariaLabel="Contact Us"
          tooltip={
            <div className="text-left">
              <p className="font-semibold text-white">Contact Us</p>
              <p className="text-gray-300 text-sm">contact@revoticai.com</p>
            </div>
          }
        >
          <MailIcon />
        </ActionButton>

        <ActionButton
          href="https://wa.me/923160513841"
          ariaLabel="Chat on WhatsApp"
          tooltip={
            <div className="text-left">
              <p className="font-semibold text-white">WhatsApp</p>
              <p className="text-gray-300 text-sm">Chat with us directly</p>
            </div>
          }
        >
          <WhatsAppIcon />
        </ActionButton>

        <ActionButton
          href="https://www.linkedin.com/company/revoticai/"
          ariaLabel="Find us on LinkedIn"
          tooltip={
            <div className="text-left">
              <p className="font-semibold text-white">LinkedIn</p>
              <p className="text-gray-300 text-sm">Follow our company page</p>
            </div>
          }
        >
          <LinkedinIcon />
        </ActionButton>
      </motion.div>

      <AnimatePresence>
        {isOfferModalOpen && (
          <OfferModal onClose={() => setIsOfferModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingActionBar;
