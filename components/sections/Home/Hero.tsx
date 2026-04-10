

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
    <section className="relative top-[0] w-full h-[90vh] overflow-hidden bg-[#0a0a0a] text-white">
      <Swiper
        id="hero-slider"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="w-full h-full" 
      >
        {(heroSlides as HeroSlide[]).map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
                <Image
                  src={slide.image || placeholderImg}
                  alt={slide.title}
                  fill
                  className="object-cover opacity-70 animate-slow-zoom" 
                  priority={index === 0}
                  onError={(e) => (e.currentTarget.src = placeholderImg)}
                />
                {/* Premium Corporate Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent md:bg-gradient-to-r md:from-[#0a0a0a] md:via-[#0a0a0a]/80 md:to-transparent" />
              </div>

              {/* Left Content */}
              <div className="relative z-10 flex flex-col justify-center w-full md:w-[65%] lg:w-[55%] h-full px-6 sm:px-12 lg:px-24 py-12 md:py-0">
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-[#facc15]"></span>
                  <p className="text-[#facc15] text-[12px] uppercase font-bold tracking-[0.2em]">
                    {slide.tag}
                  </p>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-md">
                  {slide.title}
                </h1>
                
                <p className="text-gray-300 text-base md:text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-xl drop-shadow-sm">
                  {slide.description}
                </p>

                {/* --- PREMIUM BUTTONS --- */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={slide.button1Link}
                    className="px-8 py-4 rounded-full font-bold text-[#0a0a0a] bg-[#facc15] hover:bg-white hover:text-black transition-all duration-300 text-center uppercase tracking-wider text-sm shadow-[0_4px_14px_0_rgba(250,204,21,0.39)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.23)] transform hover:-translate-y-0.5"
                  >
                    {slide.button1Text}
                  </Link>
                  <Link
                    href={slide.button2Link}
                    className="px-8 py-4 rounded-full font-bold text-white bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-center uppercase tracking-wider text-sm transform hover:-translate-y-0.5"
                  >
                    {slide.button2Text}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- UPDATED PREMIUM STYLES --- */}
      <style jsx global>{`
  @keyframes slow-zoom {
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
  }
  .animate-slow-zoom {
    animation: slow-zoom 25s ease-in-out infinite alternate;
  }

  .swiper-pagination {
    bottom: 50px !important;
    text-align: center;
    width: 100%;
    z-index: 20 !important;
  }

  .swiper-pagination-bullet {
    background: #ffffff !important;
    opacity: 0.3;
    width: 8px !important;
    height: 8px !important;
    transition: all 0.4s ease !important;
  }

  .swiper-pagination-bullet-active {
    background: #facc15 !important;
    opacity: 1;
    width: 24px !important;
    border-radius: 4px !important;
    box-shadow: 0 0 10px rgba(250, 204, 21, 0.5);
  }

  /* --- ARROWS AT BOTTOM --- */
  #hero-slider .swiper-button-prev,
  #hero-slider .swiper-button-next {
    color: #fff !important;
    width: 48px !important;
    height: 48px !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    backdrop-filter: blur(4px);
    border-radius: 50% !important;
    transition: all 0.3s ease !important;
    top: auto !important; 
    bottom: 30px !important;
    transform: none !important; 
    margin-top: 0 !important;
  }

  #hero-slider .swiper-button-prev:after,
  #hero-slider .swiper-button-next:after {
    font-size: 16px !important;
    font-weight: 800;
  }

  #hero-slider .swiper-button-prev:hover,
  #hero-slider .swiper-button-next:hover {
    background: rgba(250, 204, 21, 0.9) !important;
    border-color: #facc15 !important;
    color: #0a0a0a !important;
    transform: translateY(-2px) !important;
  }

  #hero-slider .swiper-button-prev {
    left: calc(50% - 120px) !important;
  }

  #hero-slider .swiper-button-next {
    right: calc(50% - 120px) !important;
  }

  @media (max-width: 768px) {
    .swiper-pagination {
      bottom: 40px !important;
      text-align: left;
      padding-left: 24px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      display: none !important;
    }
  }
`}</style>
    </section>
  );
};

export default Hero;

