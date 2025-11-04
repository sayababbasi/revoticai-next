// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// // Using relative paths to avoid alias issues
// import testimonials from "../../../data/testimonials.json";
// import { Quote } from "lucide-react";

// const Testimonials: React.FC = () => {
//   return (
//     // Light section for contrast
//     <section className="bg-white py-20 md:py-28">
//       <div className="container mx-auto px-6">
//         {/* --- Section Header --- */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">
//             Testimonials
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
//             Trusted by Leaders
//           </h2>
//           <p className="text-lg text-gray-600">
//             Hear what our clients have to say about our work and the impact
//             we've made on their businesses.
//           </p>
//         </div>

//         {/* --- Testimonials Slider --- */}
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//             el: ".swiper-pagination-custom", // Custom pagination container
//           }}
//           className="relative max-w-4xl mx-auto"
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index} className="pb-16">
//               <div className="flex flex-col items-center text-center p-8">
//                 {/* Quote Icon */}
//                 <Quote
//                   className="w-12 h-12 text-[#b1ff32] mb-6"
//                   strokeWidth={1.5}
//                 />

//                 {/* Quote Text */}
//                 <p className="text-2xl md:text-3xl font-medium text-black leading-snug mb-8 max-w-3xl">
//                   "{testimonial.quote}"
//                 </p>

//                 {/* Author Info */}
//                 <div className="flex flex-col items-center">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gray-200"
//                     onError={(e) =>
//                       (e.currentTarget.src =
//                         "https://placehold.co/100x100/e0e0e0/999999?text=User")
//                     }
//                   />
//                   <h4 className="text-xl font-bold text-black">
//                     {testimonial.name}
//                   </h4>
//                   <p className="text-gray-500">{testimonial.title}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}

//           {/* Custom Pagination */}
//           <div className="swiper-pagination-custom text-center absolute bottom-4 w-full z-10"></div>
//         </Swiper>
//       </div>

//       {/* Custom Swiper Styles for this component */}
//       <style jsx global>{`
//         .swiper-pagination-custom .swiper-pagination-bullet {
//           background: #d1d5db !important; /* Gray inactive */
//           opacity: 0.8;
//           width: 8px !important;
//           height: 8px !important;
//           transition: all 0.3s ease !important;
//         }
//         .swiper-pagination-custom .swiper-pagination-bullet-active {
//           background: #b1ff32 !important; /* Your accent color */
//           opacity: 1;
//           width: 24px !important; /* Active bullet is wider */
//           border-radius: 6px !important;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Testimonials;


"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards"; // Import card effect styles

// Using Next.js alias path. This requires a correct tsconfig.json setup.
import testimonials from "@/data/testimonials.json"; 
import { Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  return (
    // Switched to a black background for a modern, professional look
    <section className="bg-black text-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* --- Section Header --- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-3">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Leaders
            </h2>
            <p className="text-lg text-gray-500">
              Hear what our clients have to say about our work and the impact
              we've made on their businesses.
            </p>
          </motion.div>
        </div>

        {/* --- Advanced Card Stack Slider --- */}
        <Swiper
          effect={"cards"} // Set effect to cards
          grabCursor={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation, EffectCards]}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          // Style for the card effect
          cardsEffect={{
            perSlideOffset: 15, // Offset of the next slide
            perSlideRotate: 5,  // Rotation of the next slide
            rotate: true,
            slideShadows: false, // Disable shadows for a cleaner look
          }}
          className="relative max-w-lg mx-auto" // Sized for a card stack
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide 
              key={index} 
              className="h-auto"
            >
              {/* Card Layout */}
              <div className="bg-neutral-900 h-full rounded-2xl shadow-2xl border border-neutral-800 p-8 flex flex-col min-h-[350px]">
                <Quote
                  className="w-10 h-10 text-[#b1ff32] mb-5 flex-shrink-0"
                  strokeWidth={1.5}
                />
                
                <p className="text-gray-300 text-lg italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center mt-auto flex-shrink-0 pt-6 border-t border-neutral-700">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-neutral-600"
                    onError={(e) =>
                      (e.currentTarget.src =
                        "https://placehold.co/100x100/333/999?text=User")
                    }
                  />
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Pagination Container */}
        <div className="swiper-pagination-custom text-center pt-12"></div>
      </div>

      {/* --- Custom Swiper Styles --- */}
      <style jsx global>{`
        /* Pagination */
        .swiper-pagination-custom .swiper-pagination-bullet {
          background: #404040 !important; /* Dark gray inactive */
          opacity: 0.8;
          width: 8px !important;
          height: 8px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #b1ff32 !important; /* Your accent color */
          opacity: 1;
          width: 24px !important;
          border-radius: 6px !important;
        }

        /* Navigation Arrows */
        .swiper-button-prev,
        .swiper-button-next {
          color: #ffffff !important; /* White arrows */
          top: 50% !important;
          transform: translateY(-50%) !important;
          width: 44px !important;
          height: 44px !important;
          background: rgba(255, 255, 255, 0.1); /* Transparent white */
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 18px !important;
          font-weight: 800;
        }
        
        /* Position arrows outside the card stack */
        .swiper-button-prev {
          left: calc(50% - 250px) !important;
        }
        .swiper-button-next {
          right: calc(50% - 250px) !important;
        }
        
        /* Hide arrows on mobile */
        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

