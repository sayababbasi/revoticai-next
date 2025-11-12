// // // // // app/not-found.js
// // // // export default function NotFound() {
// // // //   return (
// // // //     <div style={{ textAlign: "center", padding: "50px" }}>
// // // //       <h1>404 - Page Not Found</h1>
// // // //       <p>Sorry, the page you’re looking for doesn’t exist.</p>
// // // //       <a href="/" style={{ color: "#0070f3" }}>Go back home</a>
// // // //     </div>
// // // //   );
// // // // }


// // // // app/not-found.js
// // // "use client";

// // // import Link from "next/link";

// // // export default function NotFound() {
// // //   return (
// // //     <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      
// // //       {/* Animated SVG */}
// // //       <div className="mb-12">
// // //         <svg
// // //           width="250"
// // //           height="250"
// // //           viewBox="0 0 200 200"
// // //           xmlns="http://www.w3.org/2000/svg"
// // //           className="animate-bounce"
// // //         >
// // //           <circle cx="100" cy="100" r="90" fill="#1a1a1a" stroke="#b1ff32" strokeWidth="4" />
// // //           <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="48" fill="#b1ff32" fontFamily="Arial, sans-serif">
// // //             404
// // //           </text>
// // //         </svg>
// // //       </div>

// // //       {/* Main Content */}
// // //       <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#b1ff32]">Oops!</h1>
// // //       <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md text-center">
// // //         The page you are looking for does not exist or has been moved.
// // //       </p>

// // //       {/* Call to Action */}
// // //       <Link
// // //         href="/"
// // //         className="bg-[#b1ff32] hover:bg-white text-black font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg"
// // //       >
// // //         Go Back Home
// // //       </Link>

// // //       {/* Decorative Animated Shapes */}
// // //       <div className="absolute top-10 left-10 w-6 h-6 bg-[#b1ff32] rounded-full animate-ping opacity-50"></div>
// // //       <div className="absolute bottom-20 right-20 w-10 h-10 bg-[#b1ff32] rounded-full animate-pulse opacity-40"></div>
// // //     </div>
// // //   );
// // // }

// // // app/not-found.js
// // "use client";

// // import Link from "next/link";

// // export default function NotFound() {
// //   return (
// //     <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden px-6">
      
// //       {/* Floating SVG Lines */}
// //       <svg className="absolute inset-0 w-full h-full">
// //         <line x1="0" y1="20" x2="100%" y2="100" stroke="#b1ff32" strokeWidth="1" className="animate-[dash_8s_linear_infinite] opacity-20" />
// //         <line x1="0" y1="100" x2="100%" y2="0" stroke="#b1ff32" strokeWidth="0.5" className="animate-[dash_10s_linear_infinite] opacity-10" />
// //         <defs>
// //           <style>
// //             {`
// //               @keyframes dash {
// //                 0% { stroke-dasharray: 0, 200; stroke-dashoffset: 0; }
// //                 50% { stroke-dasharray: 100, 200; stroke-dashoffset: -50; }
// //                 100% { stroke-dasharray: 0, 200; stroke-dashoffset: -200; }
// //               }
// //             `}
// //           </style>
// //         </defs>
// //       </svg>

// //       {/* Animated 404 SVG */}
// //       <div className="relative z-10 mb-12">
// //         <svg
// //           width="220"
// //           height="220"
// //           viewBox="0 0 200 200"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <circle
// //             cx="100"
// //             cy="100"
// //             r="90"
// //             fill="transparent"
// //             stroke="#b1ff32"
// //             strokeWidth="4"
// //             className="animate-spin-slow origin-center"
// //           />
// //           <text
// //             x="50%"
// //             y="50%"
// //             textAnchor="middle"
// //             dy=".3em"
// //             fontSize="48"
// //             fill="#b1ff32"
// //             fontFamily="Arial, sans-serif"
// //           >
// //             404
// //           </text>
// //         </svg>
// //       </div>

// //       {/* Main Message */}
// //       <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#b1ff32] z-10">Oops!</h1>
// //       <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg text-center z-10">
// //         The page you are looking for does not exist or has been moved. Let’s get you back home.
// //       </p>

// //       {/* CTA Button */}
// //       <Link
// //         href="/"
// //         className="relative z-10 inline-block bg-[#b1ff32] hover:bg-white text-black font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg"
// //       >
// //         Go Back Home
// //       </Link>

// //       {/* Floating Dots */}
// //       <div className="absolute top-10 left-10 w-6 h-6 bg-[#b1ff32] rounded-full animate-ping opacity-50"></div>
// //       <div className="absolute bottom-20 right-20 w-10 h-10 bg-[#b1ff32] rounded-full animate-pulse opacity-40"></div>
// //       <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#b1ff32] rounded-full animate-bounce opacity-60"></div>
// //       <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-[#b1ff32] rounded-full animate-bounce opacity-60"></div>
// //     </div>
// //   );
// // }


// // app/not-found.js
// "use client";

// import Link from "next/link";

// export default function NotFound() {
//   return (
//     <div className="relative min-h-screen flex flex-col justify-center items-center bg-black text-[var(--color-dark)] overflow-hidden px-6">

//       {/* Spinning & Bouncing 404 SVG */}
//       <div className="relative z-10 mb-12 animate-bounce-slow">
//         <svg
//           width="220"
//           height="220"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle
//             cx="100"
//             cy="100"
//             r="90"
//             fill="transparent"
//             stroke="var(--color-primary)"
//             strokeWidth="4"
//             className="animate-spin-slow drop-shadow-[0_0_10px_var(--color-primary)]"
//           />
//           <text
//             x="50%"
//             y="50%"
//             textAnchor="middle"
//             dy=".3em"
//             fontSize="48"
//             fill="var(--color-primary)"
//             fontFamily="Arial, sans-serif"
//           >
//             404
//           </text>
//         </svg>
//       </div>

//       {/* Main Message */}
//       <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-primary)] z-10">Oops!</h1>
//       <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg text-center z-10">
//         The page you are looking for does not exist or has been moved. Let’s get you back home.
//       </p>

//       {/* CTA Button */}
//       <Link
//         href="/"
//         className="relative z-10 inline-block bg-[var(--color-primary)] hover:bg-yellow-400 text-[var(--color-dark)] font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg"
//       >
//         Go Back Home
//       </Link>

//       {/* Floating Dots */}
//       <div className="absolute top-10 left-10 w-6 h-6 bg-[var(--color-primary)] rounded-full animate-ping opacity-50"></div>
//       <div className="absolute bottom-20 right-20 w-10 h-10 bg-[var(--color-primary)] rounded-full animate-pulse opacity-40"></div>
//       <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[var(--color-primary)] rounded-full animate-bounce opacity-60"></div>
//       <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-[var(--color-primary)] rounded-full animate-bounce opacity-60"></div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes spin-slow {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-20px); }
//         }
//         .animate-spin-slow { animation: spin-slow 20s linear infinite; }
//         .animate-bounce-slow { animation: bounce-slow 2.5s ease-in-out infinite; }
//       `}</style>
//     </div>
//   );
// }

// app/not-found.js
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden px-6">

      {/* Floating Neon Lines (background tech effect) */}
      <svg className="absolute inset-0 w-full h-full">
        <line x1="0" y1="20" x2="100%" y2="100" stroke="var(--color-primary)" strokeWidth="1" className="animate-[dash_8s_linear_infinite] opacity-20" />
        <line x1="0" y1="100" x2="100%" y2="0" stroke="var(--color-primary)" strokeWidth="0.5" className="animate-[dash_10s_linear_infinite] opacity-10" />
        <defs>
          <style>
            {`
              @keyframes dash {
                0% { stroke-dasharray: 0, 200; stroke-dashoffset: 0; }
                50% { stroke-dasharray: 100, 200; stroke-dashoffset: -50; }
                100% { stroke-dasharray: 0, 200; stroke-dashoffset: -200; }
              }
            `}
          </style>
        </defs>
      </svg>

      {/* Bouncing & Spinning 404 */}
      <div className="relative z-10 mb-12 animate-bounce-slow">
        <svg
          width="220"
          height="220"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="transparent"
            stroke="var(--color-primary)"
            strokeWidth="4"
            className="animate-spin-slow drop-shadow-[0_0_15px_var(--color-primary)]"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            fontSize="48"
            fill="var(--color-primary)"
            fontFamily="Arial, sans-serif"
          >
            404
          </text>
        </svg>
      </div>

      {/* Main Message */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-primary)] z-10">Oops!</h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg text-center z-10">
        The page you are looking for does not exist or has been moved. Let’s get you back home.
      </p>

      {/* CTA Button */}
      <Link
        href="/"
        className="relative z-10 inline-block bg-[var(--color-primary)] hover:bg-yellow-400 text-[var(--color-dark)] font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg"
      >
        Go Back Home
      </Link>

      {/* Floating Neon Dots */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-[var(--color-primary)] rounded-full animate-ping opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-10 h-10 bg-[var(--color-primary)] rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[var(--color-primary)] rounded-full animate-bounce opacity-60"></div>
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-[var(--color-primary)] rounded-full animate-bounce opacity-60"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

