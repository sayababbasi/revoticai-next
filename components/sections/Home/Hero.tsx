

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
    <>
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
                  className="object-cover animate-slow-zoom"
                  priority={index === 0}
                  onError={(e) => (e.currentTarget.src = placeholderImg)}
                />
                {/* Premium Corporate Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] from-[40%] via-[#0a0a0a]/80 to-transparent md:bg-gradient-to-r md:from-[#0a0a0a] md:from-[40%] md:via-[#0a0a0a]/50 md:to-transparent" />
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

      {/* Extracted Custom Block as a Static Section */}
      <section className="relative w-full bg-white text-black py-16 md:py-24">
        <div className="relative w-full h-full bg-white flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-[#2a3b5c] mb-3 flex items-center justify-center gap-2 sm:gap-4 flex-wrap tracking-tight">
              AI-POWERED
              <span className="text-[#f97316] flex items-center justify-center transform -rotate-45">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              </span>
              GROWTH
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium">
              The AI Innovators by <span className="text-[#f97316]">RevoticAI</span>
            </p>
          </div>

          {/* Three Column Layout */}
          <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="col-span-1 lg:col-span-3 flex flex-col items-start order-2 lg:order-1">
              <div className="w-28 h-28 rounded-full border-2 border-gray-100 flex items-center justify-center mb-8 relative overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-2">
                 <div className="absolute inset-0 border-[4px] border-dashed border-[#e0e7ff] rounded-full animate-[spin_15s_linear_infinite]"></div>
                 <div className="text-[10px] text-center font-bold text-[#3730a3] leading-tight z-10 w-full rounded-full bg-white/90 p-2 h-full flex items-center justify-center relative">
                   {/* Center logo placeholder */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-10">
                     <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg>
                   </div>
                   Intelligent Automation<br/>AI Solutions
                 </div>
              </div>
              
              <div className="w-full flex items-center gap-4 mb-4">
                <h3 className="text-[#5b21b6] font-bold text-sm tracking-wide">About US</h3>
                <div className="flex-1 h-[1px] bg-gray-200"></div>
              </div>
              
              <p className="text-sm text-gray-600 mb-8 leading-relaxed font-medium">
                Premier AI development agency that helps businesses automate operations, build custom SaaS, and scale with intelligence.
              </p>
              
              <button className="w-12 h-12 rounded-full bg-[#f97316] text-white flex items-center justify-center hover:bg-[#ea580c] transition-colors shadow-lg shadow-orange-500/30 transform hover:-translate-y-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </button>
            </div>

            {/* Middle Column */}
            <div className="col-span-1 lg:col-span-6 relative flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-2xl aspect-[16/10] md:aspect-[2/1] lg:aspect-[4/2.5] rounded-[2rem] rounded-tl-3xl rounded-br-3xl rounded-tr-[4rem] rounded-bl-[4rem] overflow-hidden shadow-2xl">
                 <Image 
                   src="/images/hero/hero-dash-1.png" 
                   alt="Digital Innovators" 
                   fill
                   className="object-cover" 
                 />
                 {/* Invoices Overlay */}
                 <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-3 drop-shadow-2xl">
                    <div className="w-16 h-24 bg-white/90 backdrop-blur rounded-lg border border-gray-200 p-2 transform -rotate-6 hidden sm:block">
                      <div className="w-full h-1 bg-gray-300 mb-2 rounded"></div>
                      <div className="w-3/4 h-1 bg-gray-300 mb-1 rounded"></div>
                      <div className="w-1/2 h-1 bg-gray-300 rounded"></div>
                      <div className="mt-4 flex gap-1">
                        <div className="w-3 h-3 border border-gray-300 rounded-sm"></div>
                        <div className="w-full h-1 bg-gray-300 mt-1 rounded"></div>
                      </div>
                    </div>
                    <div className="w-24 h-32 bg-white/95 backdrop-blur rounded-lg border border-gray-200 p-3 z-10 hidden sm:block shadow-lg">
                      <div className="text-[10px] font-bold text-gray-800 mb-3 tracking-widest">INVOICE</div>
                      <div className="w-full h-1 bg-gray-300 mb-2 rounded"></div>
                      <div className="w-4/5 h-1 bg-gray-300 mb-2 rounded"></div>
                      <div className="w-full h-1 bg-gray-300 mb-2 rounded"></div>
                      <div className="mt-6 flex flex-col gap-2">
                        <div className="flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <div className="w-full h-1 bg-gray-300 rounded"></div>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <div className="w-full h-1 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
              
              <div className="absolute -bottom-6 right-4 sm:right-10 bg-white p-2 rounded-[2rem] shadow-xl">
                 <Link href="/contact" className="bg-[#7e22ce] text-white px-6 py-4 rounded-full font-bold text-xs tracking-widest flex items-center gap-3 hover:bg-[#6b21a8] transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-900/20">
                   BOOK A CONSULTATION
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                 </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-1 lg:col-span-3 flex flex-row lg:flex-col gap-6 lg:gap-10 justify-around lg:justify-center pl-0 lg:pl-12 order-3">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[#f97316] mb-1 flex items-start justify-center lg:justify-start">
                  3<span className="text-2xl lg:text-3xl mt-1">+</span>
                </h2>
                <p className="text-gray-600 text-xs lg:text-sm font-medium">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[#f97316] mb-1 flex items-start justify-center lg:justify-start">
                  200<span className="text-2xl lg:text-3xl mt-1">+</span>
                </h2>
                <p className="text-gray-600 text-xs lg:text-sm font-medium">Projects Done</p>
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[#f97316] mb-1 flex items-start justify-center lg:justify-start">
                  190<span className="text-2xl lg:text-3xl mt-1">+</span>
                </h2>
                <p className="text-gray-600 text-xs lg:text-sm font-medium">Happy Clients</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

