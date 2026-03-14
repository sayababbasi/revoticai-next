

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
