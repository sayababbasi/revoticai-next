"use client";

import React, { useState } from "react";

// --- Swiper.js Imports ---
// These are required for the slider to work.
// If these fail, it's a project-level 'node_modules' or 'tsconfig.json' issue.
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// --- Inlined data/reviews.json ---
const reviews = [
  {
    "name": "Hassan Raza",
    "title": "CEO, Alisha E-Shop",
    "image": "/images/user.png",
    "rating": 5,
    "review": "Revotic AI automated our entire inventory and order management system. What used to take our team 3 days now happens in minutes. Absolute game-changer for Alisha E-Shop."
  },
  {
    "name": "Ayesha Khalid",
    "title": "Founder, La Mosaik",
    "image": "/images/user.png",
    "rating": 5,
    "review": "The AI-powered platform they built for La Mosaik increased our conversion rates by 25% within the first month. Our customers love the personalized shopping experience."
  },
  {
    "name": "James Mitchell",
    "title": "CTO, Astoud",
    "image": "/images/user.png",
    "rating": 5,
    "review": "A highly professional team. They delivered a complex AI dashboard for Astoud on time and on budget. We've already started our second project with them."
  },
  {
    "name": "Fatima Noor",
    "title": "Operations Manager, Haryali Store",
    "image": "/images/user.png",
    "rating": 5,
    "review": "The automation system they built for Haryali Store saves our staff hours every single day. Secure, efficient, and incredibly well-designed. Highly recommended."
  },
  {
    "name": "Aetizaz",
    "title": "CEO, Bangash Containers",
    "image": "/images/user.png",
    "rating": 4,
    "review": "Their AI model for supply chain optimization identified bottlenecks we hadn't seen in years. It has saved Bangash Containers significant costs across our operations."
  },
  {
    "name": "Williams",
    "title": "Product Lead, Koala Eco",
    "image": "/images/user.png",
    "rating": 5,
    "review": "Integrating their GenAI solution into Koala Eco's platform was seamless. Revotic's technical expertise and communication are truly top-notch."
  },
  {
    "name": "Bilal Ahmed",
    "title": "Founder, Pak Style",
    "image": "/images/user.png",
    "rating": 5,
    "review": "The e-commerce platform they developed for Pak Style handles thousands of orders daily without a single issue. Our customers rate the experience 4.8 stars consistently."
  },
  {
    "name": "Max Santos",
    "title": "Marketing Head, Xcessories Hub",
    "image": "/images/user.png",
    "rating": 5,
    "review": "Their data analytics project gave Xcessories Hub insights we never had before. We now make smarter, faster decisions that directly impact our bottom line."
  }
];

// --- Inlined components/cards/ReviewCard.tsx ---

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "#facc15" : "none"}
    stroke={filled ? "#facc15" : "#9ca3af"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

interface ReviewCardProps {
  name: string;
  title: string;
  image: string;
  rating: number;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  title,
  image,
  rating,
  review,
}) => {
  const placeholderImg = `https://placehold.co/100x100/e0e0e0/999?text=${name
    .split(" ")
    .map((n) => n[0])
    .join("")}`;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center min-h-[300px] justify-center">
      <div className="flex items-center justify-center mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} filled={index < rating} />
        ))}
      </div>
      <p className="text-gray-700 text-lg italic mb-6">{review}</p>
      <div className="flex flex-col items-center">
        <img
          src={image || placeholderImg}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gray-100"
          onError={(e) => (e.currentTarget.src = placeholderImg)}
        />
        <h4 className="text-lg font-bold text-black">{name}</h4>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};

// --- Main Reviews Section Component ---

const Reviews: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentReview = reviews[activeIndex];
  const nextReview = reviews[(activeIndex + 1) % reviews.length];

  return (
    <section className="bg-gray-50 py-20 md:py-28 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* --- Section Header --- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">
            Client Voices
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Hear From Our Satisfied Partners
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences, real results. Discover the impact we've made.
          </p>
        </div>

        {/* --- Custom Slider Area --- */}
        <div className="relative flex items-center justify-center min-h-[400px]">

          {/* --- 1. Current Logo (Left) --- */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <p className="text-xs text-gray-500 font-semibold uppercase text-center mb-3">
              Current
            </p>
            <img
              src={currentReview.image}
              alt={currentReview.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-[#b1ff32] shadow-xl"
            />
          </div>

          {/* --- 2. Main Swiper Slider (Center) --- */}
          <div className="relative z-10 w-full max-w-xl mx-auto">
            <Swiper
              modules={[Autoplay, EffectFade, Navigation]}
              onSwiper={setSwiperInstance} // Save swiper instance
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update index
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              // Use custom navigation buttons
              navigation={{
                nextEl: ".custom-next-btn",
                prevEl: ".custom-prev-btn",
              }}
              className="review-swiper"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <ReviewCard {...review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* --- 3. Next Logo (Right) --- */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <p className="text-xs text-gray-500 font-semibold uppercase text-center mb-3">
              Next
            </p>
            <img
              src={nextReview.image}
              alt={nextReview.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 shadow-md cursor-pointer transition-all duration-300 hover:border-[#b1ff32] hover:scale-105"
              onClick={() => swiperInstance?.slideNext()} // Click to advance
            />
          </div>

          {/* --- 4. Custom Navigation Arrows (For Desktop) --- */}
          <button className="custom-prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors hidden md:block lg:left-32">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button className="custom-next-btn absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors hidden md:block lg:right-32">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>

        {/* --- Mobile Navigation --- */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <button className="custom-prev-btn p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="custom-next-btn p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx global>{`
        /* Hide Swiper's default navigation */
        .review-swiper .swiper-button-prev,
        .review-swiper .swiper-button-next {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default Reviews;

