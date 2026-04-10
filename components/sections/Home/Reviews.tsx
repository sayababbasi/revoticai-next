"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  { name: "Hassan Raza", title: "CEO, Alisha E-Shop", rating: 5, review: "Revotic AI automated our entire inventory and order management system. What used to take our team 3 days now happens in minutes. Absolute game-changer for Alisha E-Shop." },
  { name: "Ayesha Khalid", title: "Founder, La Mosaik", rating: 5, review: "The AI-powered platform they built for La Mosaik increased our conversion rates by 25% within the first month. Our customers love the personalized shopping experience." },
  { name: "James Mitchell", title: "CTO, Astoud", rating: 5, review: "A highly professional team. They delivered a complex AI dashboard for Astoud on time and on budget. We've already started our second project with them." },
  { name: "Fatima Noor", title: "Operations Manager, Haryali Store", rating: 5, review: "The automation system they built for Haryali Store saves our staff hours every single day. Secure, efficient, and incredibly well-designed. Highly recommended." },
  { name: "Aetizaz", title: "CEO, Bangash Containers", rating: 4, review: "Their AI model for supply chain optimization identified bottlenecks we hadn't seen in years. It has saved Bangash Containers significant costs across our operations." },
  { name: "Williams", title: "Product Lead, Koala Eco", rating: 5, review: "Integrating their GenAI solution into Koala Eco's platform was seamless. Revotic's technical expertise and communication are truly top-notch." },
  { name: "Bilal Ahmed", title: "Founder, Pak Style", rating: 5, review: "The e-commerce platform they developed for Pak Style handles thousands of orders daily without a single issue. Our customers rate the experience 4.8 stars consistently." },
  { name: "Max Santos", title: "Marketing Head, Xcessories Hub", rating: 5, review: "Their data analytics project gave Xcessories Hub insights we never had before. We now make smarter, faster decisions that directly impact our bottom line." },
];

const LEN = reviews.length;

// Pre-rendered static stars
const Star = ({ filled }: { filled: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#facc15" : "none"} stroke={filled ? "#facc15" : "#9ca3af"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex items-center justify-center gap-1">
    {Array.from({ length: 5 }, (_, i) => <Star key={i} filled={i < rating} />)}
  </div>
);

const ArrowLeft = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>;
const ArrowRight = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>;

const Reviews: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIdx(p => (p + 1) % LEN);
    }, 6000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const go = useCallback((n: number, d: number) => {
    setDirection(d);
    setIdx(n);
    resetTimer();
  }, [resetTimer]);

  const next = useCallback(() => go((idx + 1) % LEN, 1), [idx, go]);
  const prev = useCallback(() => go((idx - 1 + LEN) % LEN, -1), [idx, go]);

  const r = reviews[idx];
  const nr = reviews[(idx + 1) % LEN];

  // Variants for the card animation
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-gray-50 py-20 md:py-28 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">Client Voices</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">Hear From Our Satisfied Partners</h2>
          <p className="text-lg text-gray-600">Real experiences, real results. Discover the impact we&apos;ve made.</p>
        </div>

        {/* Slider Area */}
        <div className="relative flex items-center justify-center min-h-[450px]">
          {/* Current (Left Shadow Info) - Desktop Only */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block opacity-40 hover:opacity-100 transition-opacity duration-300">
            <p className="text-[10px] text-gray-400 font-bold uppercase text-center mb-3 tracking-tighter">Current</p>
            <div className="relative">
              <img src="/images/user.png" alt="Current" className="w-20 h-20 rounded-full object-cover border-4 border-[#b1ff32] shadow-sm grayscale" />
              <div className="absolute inset-0 rounded-full bg-black/10" />
            </div>
          </div>

          {/* Main Content Card with AnimatePresence */}
          <div className="relative z-10 w-full max-w-xl mx-auto px-4 overflow-visible">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={idx}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 flex flex-col items-center text-center min-h-[350px] justify-center"
              >
                <div className="mb-6">
                  <Stars rating={r.rating} />
                </div>
                
                <p className="text-gray-700 text-lg md:text-xl italic mb-8 leading-relaxed font-medium">
                  &ldquo;{r.review}&rdquo;
                </p>

                <div className="flex flex-col items-center">
                  <div className="relative mb-4 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#b1ff32] to-[#8ed628] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                    <img src="/images/user.png" alt={r.name} className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
                  </div>
                  <h4 className="text-xl font-bold text-black">{r.name}</h4>
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mt-1">{r.title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next (Right Shadow Info) - Desktop Only */}
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block cursor-pointer group"
            onClick={next}
          >
            <p className="text-[10px] text-gray-400 font-bold uppercase text-center mb-3 tracking-tighter">Next</p>
            <div className="relative transform transition-all duration-500 group-hover:scale-110">
              <img src="/images/user.png" alt="Next" className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 shadow-md grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 rounded-full bg-black/5 group-hover:bg-black/0 transition-colors" />
            </div>
          </div>

          {/* Controls - Desktop (Positioned carefully) */}
          <button 
            onClick={prev} 
            className="absolute left-0 md:left-4 lg:left-24 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white shadow-lg border border-gray-50 hover:bg-gray-50 transition-all hover:scale-110 active:scale-95 hidden md:block"
            aria-label="Previous testimonial"
          >
            {ArrowLeft}
          </button>
          <button 
            onClick={next} 
            className="absolute right-0 md:right-4 lg:right-24 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white shadow-lg border border-gray-50 hover:bg-gray-50 transition-all hover:scale-110 active:scale-95 hidden md:block"
            aria-label="Next testimonial"
          >
            {ArrowRight}
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mt-12 md:hidden">
          <button onClick={prev} className="p-4 rounded-full bg-white shadow-md active:scale-95 transition-transform">{ArrowLeft}</button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'w-6 bg-[#b1ff32]' : 'w-1.5 bg-gray-200'}`} />
            ))}
          </div>
          <button onClick={next} className="p-4 rounded-full bg-white shadow-md active:scale-95 transition-transform">{ArrowRight}</button>
        </div>
        
        {/* Progress dots for desktop too */}
        <div className="hidden md:flex justify-center gap-2 mt-10">
          {reviews.map((_, i) => (
            <button 
              key={i} 
              onClick={() => go(i, i > idx ? 1 : -1)}
              className={`h-1 rounded-full transition-all duration-500 ${i === idx ? 'w-8 bg-[#b1ff32]' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Reviews;
