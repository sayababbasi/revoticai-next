// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// const VerifyLandingPage: React.FC = () => {
//   const [id, setId] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!id.trim()) {
//       setError("Please enter a valid Internship ID");
//       return;
//     }
//     setError("");
//     router.push(`/verify/${id.trim()}`);
//   };

//   return (
//     <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
//       <motion.div
//         className="max-w-xl w-full text-center"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <motion.h1
//           className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#b1ff32] mb-4"
//           variants={itemVariants}
//         >
//           Certificate Verification
//         </motion.h1>
//         <motion.p
//           className="text-gray-400 text-lg mb-8"
//           variants={itemVariants}
//         >
//           Enter your Internship ID below to download and verify your certificate,
//           offer letter, and experience letter instantly.
//         </motion.p>

//         <motion.form
//           onSubmit={handleSubmit}
//           className="flex flex-col sm:flex-row items-center gap-4"
//           variants={itemVariants}
//         >
//           <input
//             type="text"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             placeholder="Enter your Internship ID"
//             className="w-full sm:flex-1 px-4 py-3 rounded-lg text-black font-medium focus:outline-none focus:ring-2 focus:ring-[#b1ff32] transition-all"
//           />
//           <button
//             type="submit"
//             className="px-6 py-3 bg-[#b1ff32] text-black font-bold rounded-lg text-lg hover:bg-green-400 transition-colors"
//           >
//             Verify
//           </button>
//         </motion.form>

//         {error && (
//           <motion.p
//             className="text-red-500 mt-4 text-sm"
//             variants={itemVariants}
//           >
//             {error}
//           </motion.p>
//         )}

//         <motion.div
//           className="mt-12 text-gray-400 text-sm"
//           variants={itemVariants}
//         >
//           <p>
//             Don’t have an Internship ID? Contact{" "}
//             <a
//               href="/contact"
//               className="text-[#b1ff32] hover:underline"
//             >
//               our support team
//             </a>
//             .
//           </p>
//         </motion.div>
//       </motion.div>

//       {/* Decorative Blobs */}
//       <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#b1ff32]/10 rounded-full blur-3xl -z-10"></div>
//       <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#b1ff32]/20 rounded-full blur-2xl -z-10"></div>
//     </main>
//   );
// };

// export default VerifyLandingPage;

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const VerifyLandingPage: React.FC = () => {
  const router = useRouter();
  const [certificateId, setCertificateId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateId.trim()) return;
    // Redirect to dynamic verification page
    router.push(`/verify/${certificateId.trim()}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-md w-full bg-neutral-900 rounded-xl shadow-lg p-10 text-center">
        <h1 className="text-3xl font-bold text-[#b1ff32] mb-4">Certificate Verification</h1>
        <p className="text-gray-400 mb-6">
          Enter your Internship/Offer/Experience Certificate ID to verify and download your certificate.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            placeholder="Enter your certificate ID"
            className="px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:border-[#b1ff32] outline-none"
            required
          />
          <button
            type="submit"
            className="bg-[#b1ff32] text-black font-bold py-3 rounded-lg hover:bg-white transition-all"
          >
            Verify Certificate
          </button>
        </form>
      </div>
    </main>
  );
};

export default VerifyLandingPage;
