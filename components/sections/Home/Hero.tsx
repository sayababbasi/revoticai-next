// // "use client";

// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/pagination";
// // import "swiper/css/navigation";
// // import "swiper/css/effect-fade";

// // import slides from "@/data/hero.json";

// // const Hero: React.FC = () => {
// //   return (
// //     <section className="relative w-full overflow-hidden bg-black text-white">
// //       <Swiper
// //         modules={[Autoplay, Pagination, Navigation, EffectFade]}
// //         autoplay={{ delay: 5000, disableOnInteraction: false }}
// //         pagination={{ clickable: true }}
// //         navigation
// //         loop
// //         effect="fade"
// //         fadeEffect={{ crossFade: true }}
// //         className="w-full"
// //       >
// //         {slides.map((slide, index) => (
// //           <SwiperSlide key={index}>
// //             <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-[90vh]">
// //               {/* Left Content */}
// //               <div className="w-full md:w-1/2 px-6 sm:px-10 lg:px-24 py-16 md:py-0 z-10">
// //                 <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">
// //                   {slide.tag}
// //                 </p>
// //                 <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 capitalize">
// //                   {slide.company}
// //                 </h1>
// //                 <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
// //                   {slide.description}
// //                 </p>
// //                 <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-all duration-300">
// //                   {slide.buttonText}
// //                 </button>
// //               </div>

// //               {/* Right Image */}
// //               <div className="relative w-full md:w-1/2 h-[50vh] md:h-[90vh]">
// //                 <img
// //                   src={slide.image}
// //                   alt={slide.company}
// //                   className="object-cover w-full h-full opacity-90"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent" />
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>

// //       {/* Pagination + Navigation styling */}
// //       <style jsx global>{`
// //         .swiper-pagination {
// //           bottom: 20px !important;
// //         }
// //         .swiper-pagination-bullet {
// //           background: #999 !important;
// //           opacity: 0.6;
// //         }
// //         .swiper-pagination-bullet-active {
// //           background: #b1ff32 !important;
// //           opacity: 1;
// //         }
// //         .swiper-button-prev,
// //         .swiper-button-next {
// //           color: #fff !important;
// //           width: 45px !important;
// //           height: 45px !important;
// //           background: rgba(255, 255, 255, 0.1);
// //           border-radius: 50%;
// //           transition: all 0.3s ease;
// //         }
// //         .swiper-button-prev:hover,
// //         .swiper-button-next:hover {
// //           background: rgba(255, 255, 255, 0.25);
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default Hero;


// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// import slides from "@/data/hero.json";

// const Hero: React.FC = () => {
//   return (
//     <section className="relative top-[0] w-full overflow-hidden bg-black text-white">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation, EffectFade]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation
//         loop
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         className="w-full h-[90vh]" // <-- SET HEIGHT HERE
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             {/* Make the slide content fill the Swiper's height */}
//             <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">
//               {/* Left Content */}
//               <div className="w-full md:w-1/2 px-6 sm:px-10 lg:px-24 py-16 md:py-0 z-10">
//                 <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">
//                   {slide.tag}
//                 </p>
//                 <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 capitalize">
//                   {slide.company}
//                 </h1>
//                 <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
//                   {slide.description}
//                 </p>
//                 <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-all duration-300">
//                   {slide.buttonText}
//                 </button>
//               </div>

//               {/* Right Image */}
//               {/* Make the image fill its container's height on desktop */}
//               <div className="relative w-full md:w-1/2 h-[50vh] md:h-full">
//                 <img
//                   src={slide.image}
//                   alt={slide.company}
//                   className="object-cover w-full h-full opacity-90"
//                 />
//                 {/* Gradient overlay from the right, not left */}
//                 <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent md:bg-gradient-to-r" />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Pagination + Navigation styling (your code is perfect) */}
//       <style jsx global>{`
//         .swiper-pagination {
//           bottom: 80px !important;
//           /* Position pagination to the left content area */
//           text-align: center;
//           padding-left: 10%; /* Adjust as needed */
//         }
//         .swiper-pagination-bullet {
//           background: #999 !important;
//           opacity: 0.6;
//           font-size:18px !important;
//         }
//         .swiper-pagination-bullet-active {
//           background: #b1ff32 !important; /* Your accent color */
//           opacity: 1;
//           font-size:20px !important; // I wanna make a bold little bit pagination active form other
//         }
//         .swiper-button-prev,
//         .swiper-button-next {
//           color: #fff !important;
//           width: 45px !important;
//           height: 45px !important;
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 50%;
//           transition: all 0.3s ease;
//         }
//         .swiper-button-prev:hover,
//         .swiper-button-next:hover {
//           background: rgba(255, 255, 255, 0.25);
//         }

//         /* Adjust button positions */
//         .swiper-button-prev {
//           left: 3% !important;
//         }
//         .swiper-button-next {
//           right: 3% !important;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Use next/image for optimization
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Import the hero data and name it 'heroSlides'
import heroSlides from "@/data/hero.json";

// Define an interface for the slide structure
interface HeroSlide {
  tag: string;
  title: string;
  description: string;
  image: string;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
}

const Hero: React.FC = () => {
  const placeholderImg = "https://placehold.co/1200x900/0a0a0a/333333?text=RevoticAI";

  return (
    <section className="relative top-[0] w-full h-[90vh] overflow-hidden bg-black text-white">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="w-full h-full" // Ensure Swiper fills the section
      >
        {(heroSlides as HeroSlide[]).map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image || placeholderImg}
                  alt={slide.title}
                  fill
                  className="object-cover opacity-90" // Image with opacity
                  priority={index === 0}
                  onError={(e) => (e.currentTarget.src = placeholderImg)}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent md:bg-gradient-to-l md:from-black/80 md:via-black/50 md:to-transparent" />
              </div>

              {/* Left Content */}
              <div className="relative z-10 flex flex-col justify-center w-full md:w-1/2 h-full px-6 sm:px-10 lg:px-24 py-12 md:py-0">
                <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">
                  {slide.tag}
                </p>
                <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 capitalize">
                  {slide.title}
                </h1>
                <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
                  {slide.description}
                </p>

                {/* --- TWO NEW BUTTONS --- */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={slide.button1Link}
                    className="px-6 py-3 rounded-md font-medium text-black bg-[#b1ff32] hover:bg-white transition-all duration-300 text-center"
                  >
                    {slide.button1Text}
                  </Link>
                  <Link
                    href={slide.button2Link}
                    className="px-6 py-3 rounded-md font-medium text-white bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-300 text-center"
                  >
                    {slide.button2Text}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- UPDATED STYLES --- */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 40px !important; /* Raised position from bottom */
          text-align: center; /* Centered pagination */
          width: 100%;
        }
        .swiper-pagination-bullet {
          background: #999 !important;
          opacity: 0.6;
          width: 8px !important;
          height: 8px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #b1ff32 !important; /* Your accent color */
          opacity: 1;
          width: 16px !important; /* Active bullet is wider */
          border-radius: 6px !important;
        }

        /* --- DECREASED ICON SIZE --- */
        .swiper-button-prev,
        .swiper-button-next {
          color: #fff !important;
          width: 40px !important; /* Was 45px */
          height: 40px !important; /* Was 45px */
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 16px !important; /* Makes the arrow inside smaller */
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(255, 255, 255, 0.25);
        }
        .swiper-button-prev {
          left: 2% !important;
        }
        .swiper-button-next {
          right: 2% !important;
        }

        /* Responsive adjustments for pagination */
        @media (max-width: 768px) {
          .swiper-pagination {
            /* Puts pagination over the text area on mobile */
            bottom: 30px !important;
            text-align: left;
            padding-left: 24px; /* Matches content padding */
          }
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important; /* Hides arrows on mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

