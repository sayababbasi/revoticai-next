"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

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

// Pre-rendered static stars (avoids re-creating SVGs on every render)
const star5 = Array.from({ length: 5 }, (_, i) => (
  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
));
const star4 = Array.from({ length: 5 }, (_, i) => (
  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i < 4 ? "#facc15" : "none"} stroke={i < 4 ? "#facc15" : "#9ca3af"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
));

const ArrowLeft = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>;
const ArrowRight = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>;

const Reviews: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIdx(p => (p + 1) % LEN), 5000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const go = useCallback((n: number) => { setIdx(n); resetTimer(); }, [resetTimer]);
  const next = useCallback(() => go((idx + 1) % LEN), [idx, go]);
  const prev = useCallback(() => go((idx - 1 + LEN) % LEN), [idx, go]);

  const r = reviews[idx];
  const nr = reviews[(idx + 1) % LEN];

  return (
    <section className="bg-gray-50 py-20 md:py-28 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">Client Voices</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Hear From Our Satisfied Partners</h2>
          <p className="text-lg text-gray-600">Real experiences, real results. Discover the impact we&apos;ve made.</p>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center min-h-[400px]">
          {/* Current (Left) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <p className="text-xs text-gray-500 font-semibold uppercase text-center mb-3">Current</p>
            <img src="/images/user.png" alt={r.name} className="w-24 h-24 rounded-full object-cover border-4 border-[#b1ff32] shadow-xl" loading="lazy" />
          </div>

          {/* Card */}
          <div className="relative z-10 w-full max-w-xl mx-auto">
            <div key={idx} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center min-h-[300px] justify-center reviewFadeIn">
              <div className="flex items-center justify-center mb-4">{r.rating === 5 ? star5 : star4}</div>
              <p className="text-gray-700 text-lg italic mb-6">{r.review}</p>
              <div className="flex flex-col items-center">
                <img src="/images/user.png" alt={r.name} className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gray-100" loading="lazy" />
                <h4 className="text-lg font-bold text-black">{r.name}</h4>
                <p className="text-sm text-gray-500">{r.title}</p>
              </div>
            </div>
          </div>

          {/* Next (Right) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <p className="text-xs text-gray-500 font-semibold uppercase text-center mb-3">Next</p>
            <img src="/images/user.png" alt={nr.name} className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 shadow-md cursor-pointer transition-all duration-300 hover:border-[#b1ff32] hover:scale-105" onClick={next} loading="lazy" />
          </div>

          {/* Arrows (Desktop) */}
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors hidden md:block lg:left-32">{ArrowLeft}</button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors hidden md:block lg:right-32">{ArrowRight}</button>
        </div>

        {/* Mobile Nav */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <button onClick={prev} className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors">{ArrowLeft}</button>
          <button onClick={next} className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors">{ArrowRight}</button>
        </div>
      </div>

      <style jsx>{`
        @keyframes reviewFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .reviewFadeIn { animation: reviewFade 0.25s ease-out; }
      `}</style>
    </section>
  );
};

export default Reviews;
