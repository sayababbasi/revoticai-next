

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
        id="hero-slider"
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
    bottom: 40px !important;
    text-align: center;
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
    background: #b1ff32 !important;
    opacity: 1;
    width: 16px !important;
    border-radius: 6px !important;
  }

  /* --- ARROWS AT BOTTOM --- */
  #hero-slider .swiper-button-prev,
  #hero-slider .swiper-button-next {
    color: #fff !important;
    width: 45px !important;
    height: 45px !important;
    background: rgba(255, 255, 255, 0.1) !important;
    border-radius: 50% !important;
    transition: all 0.3s ease !important;
    top: auto !important; 
    bottom: 22px !important; /* Align with pagination */
    transform: none !important; 
    margin-top: 0 !important; /* Fix for Swiper default margin */
  }

  #hero-slider .swiper-button-prev:after,
  #hero-slider .swiper-button-next:after {
    font-size: 18px !important;
    font-weight: bold;
  }

  #hero-slider .swiper-button-prev:hover,
  #hero-slider .swiper-button-next:hover {
    background: rgba(255, 255, 255, 0.25) !important;
  }

  #hero-slider .swiper-button-prev {
    left: calc(50% - 100px) !important;
  }

  #hero-slider .swiper-button-next {
    right: calc(50% - 100px) !important;
  }

  @media (max-width: 768px) {
    .swiper-pagination {
      bottom: 30px !important;
      text-align: left;
      padding-left: 24px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      display: none !important; /* Hide arrows on mobile */
    }
  }
`}</style>

    </section>
  );
};

export default Hero;

