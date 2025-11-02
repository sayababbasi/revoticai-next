"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import slides from "@/data/hero.json";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-[90vh]">
              {/* Left Content */}
              <div className="w-full md:w-1/2 px-6 sm:px-10 lg:px-24 py-16 md:py-0 z-10">
                <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">
                  {slide.tag}
                </p>
                <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 capitalize">
                  {slide.company}
                </h1>
                <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
                  {slide.description}
                </p>
                <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-all duration-300">
                  {slide.buttonText}
                </button>
              </div>

              {/* Right Image */}
              <div className="relative w-full md:w-1/2 h-[50vh] md:h-[90vh]">
                <img
                  src={slide.image}
                  alt={slide.company}
                  className="object-cover w-full h-full opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination + Navigation styling */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 20px !important;
        }
        .swiper-pagination-bullet {
          background: #999 !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: #b1ff32 !important;
          opacity: 1;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #fff !important;
          width: 45px !important;
          height: 45px !important;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(255, 255, 255, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Hero;
