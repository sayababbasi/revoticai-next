// "use client";

// import React, { useState, useEffect } from "react";
// // We will use Framer Motion for the animation, as it's in your stack.
// import { motion, AnimatePresence } from "framer-motion";
// // Import next/image for optimized images
// // If this causes a build error, remove it and use a standard <img> tag.
// // import Image from "next/image"; // --- REMOVED to fix build error ---

// // --- Inlined SVG Icons (to prevent build errors) ---

// // --- NEW Sparkle Icon (Replaced GiftIcon) ---
// const SparkleIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="48"
//     height="48"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="text-[#b1ff32]"
//   >
//     <path d="M12 2L13.88 7.12L19 9L13.88 10.88L12 16L10.12 10.88L5 9L10.12 7.12L12 2Z" />
//     <path d="M5 2L6 5" />
//     <path d="M19 12L18 14" />
//     <path d="M5 22L6 19" />
//     <path d="M19 22L18 20" />
//   </svg>
// );

// const ClockIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="mr-1.5"
//   >
//     <circle cx="12" cy="12" r="10" />
//     <polyline points="12 6 12 12 16 14" />
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

// // --- Main Lead Generation Popup Component ---

// // 7 hours, 39 minutes = 27,540 seconds
// const TOTAL_DURATION_IN_SECONDS = 7 * 3600 + 39 * 60;
// // Reset when timer hits 10 seconds
// const RESET_THRESHOLD_IN_SECONDS = 10;

// const LeadGenPopup: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [remainingTime, setRemainingTime] = useState(TOTAL_DURATION_IN_SECONDS);

//   // Helper function to format seconds into HH:MM:SS
//   const formatTime = (seconds: number): string => {
//     const h = Math.floor(seconds / 3600);
//     const m = Math.floor((seconds % 3600) / 60);
//     const s = Math.floor(seconds % 60);
//     return `${String(h).padStart(2, "0")}:${String(m).padStart(
//       2,
//       "0"
//     )}:${String(s).padStart(2, "0")}`;
//   };

//   // --- Persistent Timer Logic ---
//   useEffect(() => {
//     const interval = setInterval(() => {
//       let expiryTime = localStorage.getItem("offerExpiryTime");
//       let now = Date.now();

//       if (!expiryTime || isNaN(Number(expiryTime))) {
//         expiryTime = String(now + TOTAL_DURATION_IN_SECONDS * 1000);
//         localStorage.setItem("offerExpiryTime", expiryTime);
//       }

//       let remaining = Math.floor((Number(expiryTime) - now) / 1000);

//       if (remaining <= RESET_THRESHOLD_IN_SECONDS) {
//         expiryTime = String(now + TOTAL_DURATION_IN_SECONDS * 1000);
//         localStorage.setItem("offerExpiryTime", expiryTime);
//         remaining = TOTAL_DURATION_IN_SECONDS;
//       }

//       setRemainingTime(remaining);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   // --- Modal Trigger Logic ---
//   useEffect(() => {
//     const hasShown = sessionStorage.getItem("revoticPopupShown");
//     if (!hasShown) {
//       const timer = setTimeout(() => {
//         setIsOpen(true);
//         sessionStorage.setItem("revoticPopupShown", "true");
//       }, 3000); // Show after 3 seconds

//       return () => clearTimeout(timer);
//     }
//   }, []);

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//           onClick={() => setIsOpen(false)} // Close on backdrop click
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden"
//             onClick={(e) => e.stopPropagation()} // Prevent closing on click inside
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-white z-20"
//               aria-label="Close modal"
//             >
//               <CloseIcon />
//             </button>

//             {/* Grid Layout: 2 Columns */}
//             <div className="grid grid-cols-1 md:grid-cols-2">
//               {/* --- Left Side: Form --- */}
//               <div className="p-8 md:p-10 flex flex-col justify-center">
//                 <div className="w-16 h-16 bg-[#b1ff32]/10 border-2 border-[#b1ff32]/30 rounded-full flex items-center justify-center mb-4">
//                   <SparkleIcon />
//                 </div>
//                 <p className="font-semibold text-[#b1ff32] mb-2">
//                   LIMITED TIME OFFER!
//                 </p>
                
//                 {/* Timer (No Box) */}
//                 <div className="flex items-center text-gray-400 text-sm mb-4">
//                   <ClockIcon />
//                   <span>
//                     Offer ends in:{" "}
//                     <strong className="text-white">
//                       {formatTime(remainingTime)}
//                     </strong>
//                   </span>
//                 </div>

//                 <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
//                   Get 30% Off Your First Project
//                 </h3>
//                 <p className="text-gray-400 mb-6">
//                   Sign up now to claim your exclusive one-time discount.
//                 </p>

//                 {/* Lead Gen Form */}
//                 <form
//                   onSubmit={(e) => e.preventDefault()} // Add your form logic here
//                   className="flex flex-col gap-4"
//                 >
//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"
//                     aria-label="Name"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"
//                     aria-label="Email"
//                   />
//                   <input
//                     type="tel"
//                     placeholder="Enter your contact number"
//                     className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"
//                     aria-label="Contact Number"
//                   />
//                   <button
//                     type="submit"
//                     className="w-full bg-[#b1ff32] text-black font-bold text-lg px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 mt-2"
//                   >
//                     Claim My 30% Discount
//                   </button>
//                 </form>
//               </div>

//               {/* --- Right Side: Image --- */}
//               {/* --- FIX: Replaced <Image> with <img> to fix build error --- */}
//               <div className="hidden md:block w-full h-full">
//                 <img
//                   // --- Replace this with your actual image path ---
//                   src="https://images.unsplash.com/photo-1556761175-577380e3c8b4?auto=format&fit=crop&q=80&w=800&h=1000"
//                   alt="Special Offer"
//                   className="w-full h-full object-cover"
//                   onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x1000/1a1a1a/b1ff32?text=Offer+Image')}
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default LeadGenPopup;

// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // --- Inlined SVG Icons ---
// const SparkleIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="48"
//     height="48"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="text-[#b1ff32]"
//   >
//     <path d="M12 2L13.88 7.12L19 9L13.88 10.88L12 16L10.12 10.88L5 9L10.12 7.12L12 2Z" />
//     <path d="M5 2L6 5" />
//     <path d="M19 12L18 14" />
//     <path d="M5 22L6 19" />
//     <path d="M19 22L18 20" />
//   </svg>
// );

// const ClockIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="mr-1.5"
//   >
//     <circle cx="12" cy="12" r="10" />
//     <polyline points="12 6 12 12 16 14" />
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

// // --- Timer Constants ---
// const TOTAL_DURATION_IN_SECONDS = 7 * 3600 + 39 * 60; // 7h 39m

// const LeadGenPopup: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [remainingTime, setRemainingTime] = useState(TOTAL_DURATION_IN_SECONDS);

//   // --- Format time as HH:MM:SS ---
//   const formatTime = (seconds: number): string => {
//     const h = Math.floor(seconds / 3600);
//     const m = Math.floor((seconds % 3600) / 60);
//     const s = Math.floor(seconds % 60);
//     return `${String(h).padStart(2, "0")}:${String(m).padStart(
//       2,
//       "0"
//     )}:${String(s).padStart(2, "0")}`;
//   };

//   // --- Timer Logic ---
//   useEffect(() => {
//     const expiryTime = localStorage.getItem("offerExpiryTime");
//     let now = Date.now();

//     if (!expiryTime || isNaN(Number(expiryTime))) {
//       const newExpiry = now + TOTAL_DURATION_IN_SECONDS * 1000;
//       localStorage.setItem("offerExpiryTime", String(newExpiry));
//     }

//     const interval = setInterval(() => {
//       const expiry = Number(localStorage.getItem("offerExpiryTime"));
//       const remaining = Math.max(Math.floor((expiry - Date.now()) / 1000), 0);
//       setRemainingTime(remaining);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   // --- Popup trigger: only show after 10s on each page load ---
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 10000); // 10 seconds delay

//     return () => clearTimeout(timer);
//   }, []); // <-- Empty dependency array = runs only once after reload

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//           onClick={() => setIsOpen(false)}
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-white z-20"
//               aria-label="Close modal"
//             >
//               <CloseIcon />
//             </button>

//             {/* Layout */}
//             <div className="grid grid-cols-1 md:grid-cols-2">
//               {/* Left Side */}
//               <div className="p-6 md:p-8 flex flex-col justify-center">
//                 <div className="w-12 h-12 bg-[#b1ff32]/10 border-2 border-[#b1ff32]/30 rounded-full flex items-center justify-center mb-3">
//                   <SparkleIcon />
//                 </div>
//                 <p className="font-semibold text-[#b1ff32] mb-2">
//                   LIMITED TIME OFFER!
//                 </p>
//                 <div className="flex items-center text-gray-400 text-sm mb-3">
//                   <ClockIcon />
//                   <span>
//                     Offer ends in:{" "}
//                     <strong className="text-white">
//                       {formatTime(remainingTime)}
//                     </strong>
//                   </span>
//                 </div>
//                 <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
//                   Get 30% Off Your First Project
//                 </h3>
//                 <p className="text-gray-400 mb-5">
//                   Sign up now to claim your exclusive one-time discount.
//                 </p>

//                 <form
//                   onSubmit={(e) => e.preventDefault()}
//                   className="flex flex-col gap-3"
//                 >
//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"
//                   />
//                   <input
//                     type="tel"
//                     placeholder="Enter your contact number"
//                     className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"
//                   />
//                   <button
//                     type="submit"
//                     className="w-full bg-[#b1ff32] text-black font-bold text-lg px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 mt-1"
//                   >
//                     Claim My 30% Discount
//                   </button>
//                 </form>
//               </div>

//               {/* Right Side */}
//               <div className="hidden md:block w-full h-full">
//                 <img
//                   src="https://images.unsplash.com/photo-1556761175-577380e3c8b4?auto=format&fit=crop&q=80&w=800&h=1000"
//                   alt="Special Offer"
//                   className="w-full h-full object-cover"
//                   onError={(e) =>
//                     (e.currentTarget.src =
//                       "https://placehold.co/800x1000/1a1a1a/b1ff32?text=Offer+Image")
//                   }
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default LeadGenPopup;


"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Inlined SVG Icons ---
const SparkleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#b1ff32]"
  >
    <path d="M12 2L13.88 7.12L19 9L13.88 10.88L12 16L10.12 10.88L5 9L10.12 7.12L12 2Z" />
    <path d="M5 2L6 5" />
    <path d="M19 12L18 14" />
    <path d="M5 22L6 19" />
    <path d="M19 22L18 20" />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-1.5"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="M6 6 18 18" />
  </svg>
);

// --- Timer Constants ---
const TOTAL_DURATION_IN_SECONDS = 7 * 3600 + 39 * 60; // 7h 39m

const LeadGenPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [remainingTime, setRemainingTime] = useState(TOTAL_DURATION_IN_SECONDS);

  // --- Format time as HH:MM:SS ---
  const formatTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(
      2,
      "0"
    )}:${String(s).padStart(2, "0")}`;
  };

  // --- Timer Logic with Auto-Reset ---
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

    const interval = setInterval(() => {
      const remaining = Math.floor((expiryTime - Date.now()) / 1000);

      // 🔁 Reset when ≤10 seconds left
      if (remaining <= 10) {
        expiryTime = Date.now() + TOTAL_DURATION_IN_SECONDS * 1000;
        localStorage.setItem("offerExpiryTime", String(expiryTime));
        setRemainingTime(TOTAL_DURATION_IN_SECONDS);
      } else {
        setRemainingTime(Math.max(remaining, 0));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // --- Popup trigger: show after 10s ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

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
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-20"
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>

            {/* Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side */}
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

              {/* Right Side */}
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
      )}
    </AnimatePresence>
  );
};

export default LeadGenPopup;
