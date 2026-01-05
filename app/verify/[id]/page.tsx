// // // // // "use client";

// // // // // import React, { useState, useEffect } from "react";
// // // // // import { motion } from "framer-motion";
// // // // // import { useParams } from "next/navigation";

// // // // // // --- START: INLINED ICONS ---
// // // // // const DownloadIcon = () => (
// // // // //   <svg
// // // // //     xmlns="http://www.w3.org/2000/svg"
// // // // //     width="20"
// // // // //     height="20"
// // // // //     fill="currentColor"
// // // // //     className="inline-block ml-2"
// // // // //     viewBox="0 0 16 16"
// // // // //   >
// // // // //     <path d="M.5 9.9a.5.5 0 0 1 .5-.5h4.793V1.5a.5.5 0 0 1 1 0v7.9h4.793a.5.5 0 0 1 .354.854l-5.5 5.5a.5.5 0 0 1-.708 0l-5.5-5.5a.5.5 0 0 1-.147-.354z" />
// // // // //     <path d="M.5 15a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z" />
// // // // //   </svg>
// // // // // );
// // // // // // --- END: INLINED ICONS ---

// // // // // // --- START: MOCK DATA (replace with API/fetch) ---
// // // // // const mockInternData: Record<
// // // // //   string,
// // // // //   { name: string; certificate: string; offerLetter: string; experienceLetter: string }
// // // // // > = {
// // // // //   "12345": {
// // // // //     name: "Sayab Abbasi",
// // // // //     certificate: "/documents/certificates/12345-internship.pdf",
// // // // //     offerLetter: "/documents/offer/12345-offer.pdf",
// // // // //     experienceLetter: "/documents/experience/12345-experience.pdf",
// // // // //   },
// // // // //   "67890": {
// // // // //     name: "Ali Khan",
// // // // //     certificate: "/documents/certificates/67890-internship.pdf",
// // // // //     offerLetter: "/documents/offer/67890-offer.pdf",
// // // // //     experienceLetter: "/documents/experience/67890-experience.pdf",
// // // // //   },
// // // // // };
// // // // // // --- END: MOCK DATA ---

// // // // // const containerVariants = {
// // // // //   hidden: { opacity: 0 },
// // // // //   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// // // // // };
// // // // // const itemVariants = {
// // // // //   hidden: { opacity: 0, y: 20 },
// // // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// // // // // };

// // // // // const VerifyPage: React.FC = () => {
// // // // //   const params = useParams();
// // // // //   const internId = params?.id || "";
// // // // //   const [intern, setIntern] = useState<typeof mockInternData[string] | null>(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(false);

// // // // //   useEffect(() => {
// // // // //     setLoading(true);
// // // // //     setError(false);

// // // // //     // Simulate API fetch
// // // // //     setTimeout(() => {
// // // // //       if (mockInternData[internId]) {
// // // // //         setIntern(mockInternData[internId]);
// // // // //       } else {
// // // // //         setError(true);
// // // // //       }
// // // // //       setLoading(false);
// // // // //     }, 800);
// // // // //   }, [internId]);

// // // // //   return (
// // // // //     <main className="bg-black text-white min-h-screen py-20">
// // // // //       <div className="container mx-auto px-6 max-w-4xl text-center">
// // // // //         <motion.h1
// // // // //           className="text-4xl md:text-5xl font-bold mb-4 text-[#b1ff32]"
// // // // //           initial="hidden"
// // // // //           animate="visible"
// // // // //           variants={itemVariants}
// // // // //         >
// // // // //           Internship Verification
// // // // //         </motion.h1>
// // // // //         <motion.p
// // // // //           className="text-gray-400 mb-12"
// // // // //           initial="hidden"
// // // // //           animate="visible"
// // // // //           variants={itemVariants}
// // // // //         >
// // // // //           Enter your internship ID to verify and download your certificate, offer letter, and experience letter.
// // // // //         </motion.p>

// // // // //         {loading && <p className="text-gray-400">Verifying ID...</p>}

// // // // //         {!loading && error && (
// // // // //           <p className="text-red-500 font-semibold">
// // // // //             Invalid ID: {internId}. Please check and try again.
// // // // //           </p>
// // // // //         )}

// // // // //         {!loading && intern && (
// // // // //           <motion.div
// // // // //             className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800"
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //             variants={containerVariants}
// // // // //           >
// // // // //             <h2 className="text-2xl font-bold text-[#b1ff32] mb-6">
// // // // //               Welcome, {intern.name}!
// // // // //             </h2>
// // // // //             <p className="text-gray-400 mb-6">
// // // // //               Your documents are ready for download:
// // // // //             </p>

// // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // //               <a
// // // // //                 href={intern.certificate}
// // // // //                 download
// // // // //                 className="bg-[#b1ff32] text-black px-6 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all flex items-center justify-center"
// // // // //               >
// // // // //                 Internship Certificate <DownloadIcon />
// // // // //               </a>
// // // // //               <a
// // // // //                 href={intern.offerLetter}
// // // // //                 download
// // // // //                 className="bg-[#b1ff32] text-black px-6 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all flex items-center justify-center"
// // // // //               >
// // // // //                 Offer Letter <DownloadIcon />
// // // // //               </a>
// // // // //               <a
// // // // //                 href={intern.experienceLetter}
// // // // //                 download
// // // // //                 className="bg-[#b1ff32] text-black px-6 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all flex items-center justify-center"
// // // // //               >
// // // // //                 Experience Letter <DownloadIcon />
// // // // //               </a>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </div>
// // // // //     </main>
// // // // //   );
// // // // // };

// // // // // export default VerifyPage;


// // // // "use client";

// // // // import React, { useState } from "react";
// // // // import { useRouter } from "next/navigation";
// // // // import { motion } from "framer-motion";

// // // // interface CertificateData {
// // // //   [key: string]: {
// // // //     name: string;
// // // //     internshipCertificate: string;
// // // //     offerLetter: string;
// // // //     experienceLetter: string;
// // // //   };
// // // // }

// // // // // Sample data for demo – replace with your real backend/API
// // // // const certificateData: CertificateData = {
// // // //   "INT-1001": {
// // // //     name: "Sayab Abbasi",
// // // //     internshipCertificate: "/documents/INT-1001-internship.pdf",
// // // //     offerLetter: "/documents/INT-1001-offer.pdf",
// // // //     experienceLetter: "/documents/INT-1001-experience.pdf",
// // // //   },
// // // //   "INT-1002": {
// // // //     name: "Ali Khan",
// // // //     internshipCertificate: "/documents/INT-1002-internship.pdf",
// // // //     offerLetter: "/documents/INT-1002-offer.pdf",
// // // //     experienceLetter: "/documents/INT-1002-experience.pdf",
// // // //   },
// // // // };

// // // // interface VerifyPageProps {
// // // //   params: { id?: string | string[] };
// // // // }

// // // // const VerifyPage: React.FC<VerifyPageProps> = ({ params }) => {
// // // //   const router = useRouter();
// // // //   const [inputId, setInputId] = useState("");
// // // //   const [verifiedData, setVerifiedData] = useState<
// // // //     CertificateData[string] | null
// // // //   >(null);
// // // //   const [error, setError] = useState("");

// // // //   // Ensure single string ID
// // // //   const idParam = Array.isArray(params?.id) ? params.id[0] : params?.id;

// // // //   const handleVerify = (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     const idToCheck = inputId.trim() || idParam;

// // // //     if (!idToCheck) {
// // // //       setError("Please enter your Internship ID.");
// // // //       return;
// // // //     }

// // // //     const data = certificateData[idToCheck];

// // // //     if (data) {
// // // //       setVerifiedData(data);
// // // //       setError("");
// // // //       router.push(`/verify/${idToCheck}`);
// // // //     } else {
// // // //       setVerifiedData(null);
// // // //       setError("Invalid Internship ID. Please check and try again.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <main className="min-h-screen bg-black text-white py-24 px-6">
// // // //       <motion.div
// // // //         initial={{ opacity: 0, y: 20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         transition={{ duration: 0.6 }}
// // // //         className="max-w-3xl mx-auto"
// // // //       >
// // // //         <h1 className="text-4xl font-bold mb-6 text-[#b1ff32] text-center">
// // // //           Certificate Verification
// // // //         </h1>
// // // //         <p className="text-gray-400 text-center mb-10">
// // // //           Enter your Internship ID below to verify and download your
// // // //           certificates, offer letter, and experience letter.
// // // //         </p>

// // // //         <form
// // // //           onSubmit={handleVerify}
// // // //           className="flex flex-col md:flex-row gap-4 justify-center mb-8"
// // // //         >
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Enter Internship ID"
// // // //             value={inputId}
// // // //             onChange={(e) => setInputId(e.target.value)}
// // // //             className="px-6 py-3 rounded-lg text-black flex-1 outline-none focus:ring-2 focus:ring-[#b1ff32]"
// // // //           />
// // // //           <button
// // // //             type="submit"
// // // //             className="bg-[#b1ff32] text-black font-bold px-6 py-3 rounded-lg hover:bg-white transition-all"
// // // //           >
// // // //             Verify
// // // //           </button>
// // // //         </form>

// // // //         {error && (
// // // //           <p className="text-red-500 text-center mb-6 font-medium">{error}</p>
// // // //         )}

// // // //         {verifiedData && (
// // // //           <div className="bg-neutral-900 rounded-xl p-8 text-center space-y-4">
// // // //             <h2 className="text-2xl font-bold text-[#b1ff32]">
// // // //               Verified: {verifiedData.name}
// // // //             </h2>
// // // //             <p className="text-gray-400">Your documents are ready to download:</p>

// // // //             <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
// // // //               <a
// // // //                 href={verifiedData.internshipCertificate}
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 className="bg-[#b1ff32]/20 text-[#b1ff32] font-semibold px-6 py-3 rounded-lg hover:bg-[#b1ff32] hover:text-black transition-all"
// // // //               >
// // // //                 Internship Certificate
// // // //               </a>
// // // //               <a
// // // //                 href={verifiedData.offerLetter}
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 className="bg-[#b1ff32]/20 text-[#b1ff32] font-semibold px-6 py-3 rounded-lg hover:bg-[#b1ff32] hover:text-black transition-all"
// // // //               >
// // // //                 Offer Letter
// // // //               </a>
// // // //               <a
// // // //                 href={verifiedData.experienceLetter}
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 className="bg-[#b1ff32]/20 text-[#b1ff32] font-semibold px-6 py-3 rounded-lg hover:bg-[#b1ff32] hover:text-black transition-all"
// // // //               >
// // // //                 Experience Letter
// // // //               </a>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </motion.div>
// // // //     </main>
// // // //   );
// // // // };

// // // // export default VerifyPage;


// // // import React from "react";
// // // import { notFound } from "next/navigation";

// // // // Dummy certificate data for demo
// // // const certificates: Record<string, any> = {
// // //   "INT-1001": {
// // //     name: "Sayab Abbasi",
// // //     internship: true,
// // //     offerLetter: true,
// // //     experienceLetter: true,
// // //   },
// // //   "INT-1002": {
// // //     name: "Ali Khan",
// // //     internship: true,
// // //     offerLetter: false,
// // //     experienceLetter: false,
// // //   },
// // // };

// // // interface VerifyPageProps {
// // //   params: { id: string };
// // // }

// // // const CertificatePage: React.FC<VerifyPageProps> = ({ params }) => {
// // //   const { id } = params;
// // //   const data = certificates[id];

// // //   if (!data) {
// // //     return (
// // //       <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
// // //         <div className="text-center">
// // //           <h1 className="text-3xl font-bold text-red-500 mb-4">Certificate Not Found</h1>
// // //           <p className="text-gray-400 mb-6">
// // //             The ID <span className="font-mono">{id}</span> is invalid. Please check and try again.
// // //           </p>
// // //           <a
// // //             href="/verify"
// // //             className="bg-[#b1ff32] text-black font-bold px-6 py-3 rounded-lg hover:bg-white transition-all"
// // //           >
// // //             Go Back
// // //           </a>
// // //         </div>
// // //       </main>
// // //     );
// // //   }

// // //   return (
// // //     <main className="min-h-screen bg-black px-6 py-16 flex flex-col items-center">
// // //       <div className="max-w-xl w-full bg-neutral-900 rounded-xl shadow-lg p-10 text-center">
// // //         <h1 className="text-3xl font-bold text-[#b1ff32] mb-4">Certificate Verified</h1>
// // //         <p className="text-gray-400 mb-6">Hello <span className="font-semibold">{data.name}</span>, your certificates are ready to download.</p>

// // //         <div className="flex flex-col gap-4">
// // //           {data.internship && (
// // //             <a
// // //               href={`/certificates/${id}-internship.pdf`}
// // //               className="bg-[#b1ff32] text-black font-bold py-3 rounded-lg hover:bg-white transition-all"
// // //               download
// // //             >
// // //               Download Internship Certificate
// // //             </a>
// // //           )}
// // //           {data.offerLetter && (
// // //             <a
// // //               href={`/certificates/${id}-offer.pdf`}
// // //               className="bg-[#b1ff32] text-black font-bold py-3 rounded-lg hover:bg-white transition-all"
// // //               download
// // //             >
// // //               Download Offer Letter
// // //             </a>
// // //           )}
// // //           {data.experienceLetter && (
// // //             <a
// // //               href={`/certificates/${id}-experience.pdf`}
// // //               className="bg-[#b1ff32] text-black font-bold py-3 rounded-lg hover:bg-white transition-all"
// // //               download
// // //             >
// // //               Download Experience Letter
// // //             </a>
// // //           )}
// // //         </div>

// // //         <a
// // //           href="/verify"
// // //           className="mt-6 inline-block bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition-all"
// // //         >
// // //           Verify Another ID
// // //         </a>
// // //       </div>
// // //     </main>
// // //   );
// // // };

// // // export default CertificatePage;


// // "use client";

// // import { useEffect, useState } from "react";
// // import { useParams } from "next/navigation";
// // import { Loader2, CheckCircle2, AlertTriangle } from "lucide-react";

// // interface Intern {
// //   id: string;
// //   name: string;
// //   department: string;
// //   duration: string;
// //   remarks: string;
// //   certificate: string;
// //   offerLetter: string;
// //   experienceLetter: string;
// // }

// // export default function VerifyPage() {
// //   const { id } = useParams();
// //   const [intern, setIntern] = useState<Intern | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fetchIntern = async () => {
// //       try {
// //         const res = await fetch(
// //           "https://opensheet.elk.sh/12mqKT47mgbSabDax60yOQ7zjQy8tsqFuM7QWMPcDwWA/Sheet1"
// //         );
// //         const data: Intern[] = await res.json();

// //         // Find the record that matches the current [id]
// //         const record = data.find(
// //           (item) => item.id.toLowerCase() === String(id).toLowerCase()
// //         );

// //         if (record) {
// //           setIntern(record);
// //         } else {
// //           setError("No record found for this ID.");
// //         }
// //       } catch (err) {
// //         setError("Failed to load data. Please try again later.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (id) fetchIntern();
// //   }, [id]);

// //   if (loading) {
// //     return (
// //       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700">
// //         <Loader2 className="animate-spin w-10 h-10 mb-3" />
// //         <p>Verifying record...</p>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700 text-center">
// //         <AlertTriangle className="w-12 h-12 text-red-500 mb-3" />
// //         <h2 className="text-xl font-semibold mb-1">{error}</h2>
// //         <p className="text-gray-600">Please double-check your verification ID.</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
// //       <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-lg border border-gray-100 text-center">
// //         <CheckCircle2 className="text-green-500 w-14 h-14 mx-auto mb-4" />
// //         <h1 className="text-2xl font-bold mb-2 text-black">Verification Successful</h1>
// //         <p className="text-gray-600 mb-6">
// //           The following record has been verified in Revotic AI’s database.
// //         </p>

// //         <div className="text-left space-y-3">
// //           <p>
// //             <strong>ID:</strong> {intern?.id}
// //           </p>
// //           <p>
// //             <strong>Name:</strong> {intern?.name}
// //           </p>
// //           <p>
// //             <strong>Department:</strong> {intern?.department}
// //           </p>
// //           <p>
// //             <strong>Duration:</strong> {intern?.duration}
// //           </p>
// //           <p>
// //             <strong>Remarks:</strong> {intern?.remarks}
// //           </p>
// //         </div>

// //         <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
// //           {intern?.certificate && (
// //             <a
// //               href={intern.certificate}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="px-6 py-2 bg-[#b1ff32] text-black font-semibold rounded-full hover:scale-105 transition"
// //             >
// //               View Certificate
// //             </a>
// //           )}
// //           {intern?.offerLetter && (
// //             <a
// //               href={intern.offerLetter}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="px-6 py-2 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition"
// //             >
// //               Offer Letter
// //             </a>
// //           )}
// //           {intern?.experienceLetter && (
// //             <a
// //               href={intern.experienceLetter}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="px-6 py-2 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition"
// //             >
// //               Experience Letter
// //             </a>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // app/verify/[id]/page.tsx
// import { notFound } from "next/navigation";

// interface Intern {
//   id: string;
//   name: string;
//   department: string;
//   duration: string;
//   remarks: string;
//   certificate: string;
//   offerLetter: string;
//   experienceLetter: string;
// }

// // Fetch data from your Google Sheet (or use a local JSON for static export)
// const SHEET_URL =
//   "https://opensheet.elk.sh/12mqKT47mgbSabDax60yOQ7zjQy8tsqFuM7QWMPcDwWA/Sheet1";

// // Generate static params for all IDs
// export async function generateStaticParams(): Promise<{ id: string }[]> {
//   const res = await fetch(SHEET_URL);
//   const data: Intern[] = await res.json();

//   return data.map((item) => ({ id: item.id }));
// }

// export default async function VerifyPage({ params }: { params: { id: string } }) {
//   const res = await fetch(SHEET_URL);
//   const data: Intern[] = await res.json();

//   const intern = data.find((item) => item.id.toLowerCase() === params.id.toLowerCase());

//   if (!intern) return notFound();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
//       <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-lg border border-gray-100 text-center">
//         <h1 className="text-2xl font-bold mb-2 text-black">Verification Successful</h1>
//         <p className="text-gray-600 mb-6">
//           The following record has been verified in Revotic AI’s database.
//         </p>

//         <div className="text-left space-y-3">
//           <p>
//             <strong>ID:</strong> {intern.id}
//           </p>
//           <p>
//             <strong>Name:</strong> {intern.name}
//           </p>
//           <p>
//             <strong>Department:</strong> {intern.department}
//           </p>
//           <p>
//             <strong>Duration:</strong> {intern.duration}
//           </p>
//           <p>
//             <strong>Remarks:</strong> {intern.remarks}
//           </p>
//         </div>

//         <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
//           {intern.certificate && (
//             <a
//               href={intern.certificate}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-2 bg-[#b1ff32] text-black font-semibold rounded-full hover:scale-105 transition"
//             >
//               View Certificate
//             </a>
//           )}
//           {intern.offerLetter && (
//             <a
//               href={intern.offerLetter}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-2 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition"
//             >
//               Offer Letter
//             </a>
//           )}
//           {intern.experienceLetter && (
//             <a
//               href={intern.experienceLetter}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-2 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition"
//             >
//               Experience Letter
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// app/verify/[id]/page.tsx
import { notFound } from "next/navigation";

interface Intern {
  id: string;
  name: string;
  department: string;
  duration: string;
  remarks: string;
  certificate: string;
  offerLetter: string;
  experienceLetter: string;
}

// Replace this with your full static data or fetch at build time
const internData: Intern[] = [
  {
    id: "REV-AUG-03",
    name: "M. SAAD MASOOD",
    department: "AI/ML",
    duration: "2 Months",
    remarks: "Excellent",
    certificate: "/certificates/REV-AUG-03-internship.pdf",
    offerLetter: "/certificates/REV-AUG-03-offer.pdf",
    experienceLetter: "/certificates/REV-AUG-03-experience.pdf",
  },
  {
    id: "REV-DEMO",
    name: "Sayab Abbasi",
    department: "AI/ML",
    duration: "2 Months",
    remarks: "Excellent",
    certificate: "/certificates/REV-AUG-03-internship.pdf",
    offerLetter: "/certificates/REV-AUG-03-offer.pdf",
    experienceLetter: "/certificates/REV-AUG-03-experience.pdf",
  },
  {
    id: "REV-INT-AUG01",
    name: "Ayesha Noman",
    department: "AI/ML Dev",
    duration: "1 Months",
    remarks: "Good",
    certificate: "/certificates/REV-INT-AUG01-internship.pdf",
    offerLetter: "/certificates/REV-INT-AUG01-offer.pdf",
    experienceLetter: "/certificates/REV-INT-AUG01-experience.pdf",
  },
];

// This is REQUIRED for static export of dynamic routes
export async function generateStaticParams() {
  return internData.map((intern) => ({ id: intern.id }));
}

export default function VerifyPage({ params }: { params: { id: string } }) {
  const intern = internData.find((i) => i.id === params.id);

  if (!intern) return notFound();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-lg border border-gray-100 text-center">
        <h1 className="text-2xl font-bold mb-2 text-black">Verification Successful</h1>
        <p className="text-gray-600 mb-6">
          The following record has been verified in Revotic AI’s database.
        </p>

        <div className="text-left space-y-3">
          <p><strong>ID:</strong> {intern.id}</p>
          <p><strong>Name:</strong> {intern.name}</p>
          <p><strong>Department:</strong> {intern.department}</p>
          <p><strong>Duration:</strong> {intern.duration}</p>
          <p><strong>Remarks:</strong> {intern.remarks}</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          {intern.certificate && (
            <a href={intern.certificate} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#b1ff32] text-black font-semibold rounded-full hover:scale-105 transition">
              View Certificate
            </a>
          )}
          {intern.offerLetter && (
            <a href={intern.offerLetter} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition">
              Offer Letter
            </a>
          )}
          {intern.experienceLetter && (
            <a href={intern.experienceLetter} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition">
              Experience Letter
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
