// // // // "use client";

// // // // import React, { useEffect, useState } from "react";

// // // // const MaintenanceNotice = () => {
// // // //   const [animateText, setAnimateText] = useState(false);

// // // //   useEffect(() => {
// // // //     const t = setTimeout(() => setAnimateText(true), 200);
// // // //     return () => clearTimeout(t);
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       {/* --- Maintenance Notice Bar --- */}
// // // //       <div className="fixed top-0 left-0 w-full bg-[#101010] border-b border-[#1f1f1f] text-center py-2 z-50 overflow-hidden">
// // // //         <div
// // // //           className={`whitespace-nowrap inline-block text-[#b1ff32] font-medium text-sm transition-transform duration-[8000ms] ${
// // // //             animateText ? "animate-marquee" : ""
// // // //           }`}
// // // //         >
// // // //           ⚙️ Our website is currently under maintenance — some features may not
// // // //           work as expected. ⚙️
// // // //         </div>
// // // //       </div>

// // // //       {/* --- Floating Status Ball --- */}
// // // //       <div className="fixed bottom-6 right-6 z-50">
// // // //         <div className="relative w-5 h-5">
// // // //           <span className="absolute inset-0 bg-[#b1ff32] rounded-full animate-pulse shadow-[0_0_15px_#b1ff32]" />
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default MaintenanceNotice;


// // // "use client";

// // // import React from "react";

// // // const MaintenanceNotice = () => {
// // //   return (
// // //     <>
// // //       {/* --- Scrolling Maintenance Notice Bar --- */}
// // //       <div className="fixed top-0 left-0 w-full bg-black/80 border-b border-[#1f1f1f] text-center py-2 z-[9999] overflow-hidden">
// // //         <div className="w-full overflow-hidden">
// // //           <div
// // //             className="inline-block whitespace-nowrap text-[#b1ff32] font-medium text-sm animate-marquee"
// // //             style={{ willChange: "transform" }}
// // //           >
// // //             ⚙️ Our website is under scheduled maintenance — some features may not
// // //             work correctly. ⚙️ &nbsp;&nbsp; ⚙️ We’re improving your experience — thank
// // //             you for your patience! ⚙️
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* --- Floating Glowing Ball --- */}
// // //       <div className="fixed bottom-6 right-6 z-[9999]">
// // //         <div className="relative w-5 h-5">
// // //           <span className="absolute inset-0 bg-[#b1ff32] rounded-full animate-pulse shadow-[0_0_15px_#b1ff32]" />
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default MaintenanceNotice;

// // "use client";

// // import React from "react";

// // const MaintenanceNotice = () => {
// //   return (
// //     <>
// //       {/* 🔧 Scrolling Maintenance Bar */}
// //       <div className="fixed bottom-0 left-0 w-full bg-black text-[#b1ff32] text-sm font-medium overflow-hidden z-[9999] border-b border-[#222]">
// //         <div className="animate-marquee whitespace-nowrap py-2">
// //           ⚙️ Our website is under scheduled maintenance — some features may not work properly. 
// //           &nbsp;&nbsp; | &nbsp;&nbsp;
// //           We’re improving performance and adding new features — thank you for your patience! ⚙️
// //         </div>
// //       </div>

// //       {/* 🟢 Floating Glowing Ball */}
// //       <div className="fixed bottom-3 right-6 z-[9999]">
// //         <span className="block w-4 h-4 bg-[#b1ff32] rounded-full animate-pulse shadow-[0_0_15px_#b1ff32]" />
// //       </div>
// //     </>
// //   );
// // };

// // export default MaintenanceNotice;



// "use client";

// import React, { useEffect, useState } from "react";
// import { X } from "lucide-react";

// const MaintenanceNotice = () => {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const hidden = localStorage.getItem("maintenanceNoticeHidden");
//     if (hidden === "true") {
//       setVisible(false);
//     }
//   }, []);

//   const handleClose = () => {
//     setVisible(false);
//     localStorage.setItem("maintenanceNoticeHidden", "true");
//   };

//   if (!visible) return null;

//   return (
//     <>
//       {/* Scrolling Maintenance Bar */}
//       <div className="fixed bottom-0 left-0 w-full bg-black text-[#b1ff32] text-sm font-medium overflow-hidden z-[9999] border-b border-[#222]">
//         <div className="relative py-2 px-8 flex items-center justify-center">
//           <div className="animate-marquee whitespace-nowrap">
//             ⚙️ Our website is under scheduled maintenance — some features may not work properly. 
//             &nbsp;&nbsp; | &nbsp;&nbsp;
//             We’re improving performance and adding new features — thank you for your patience! 
//           </div>
//           <button
//             onClick={handleClose}
//             className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b1ff32] hover:text-white transition"
//             aria-label="Close maintenance notice"
//           >
//             <X size={18} />
//           </button>
//         </div>
//       </div>

//       {/* 🟢 Floating Glowing Ball */}
//       <div className="fixed bottom-6 right-6 z-[9999]">
//         <span className="block w-4 h-4 bg-[#b1ff32] rounded-full animate-pulse shadow-[0_0_15px_#b1ff32]" />
//       </div>
//     </>
//   );
// };

// export default MaintenanceNotice;
