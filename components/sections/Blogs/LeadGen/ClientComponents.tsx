"use client";

import React, { useState, useEffect } from "react";
import { X, MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-black/90 backdrop-blur-md border-t border-white/10 text-white py-4 px-6 translate-y-0 transition-transform duration-300">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-black uppercase tracking-wider text-sm">Transform Your Business Today</h4>
          <p className="text-gray-400 text-xs mt-1">Get a free consultation with our AI & Automation experts.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/contact" className="px-6 py-2 bg-white text-black font-black uppercase text-xs rounded-full hover:bg-[#b1ff32] transition-colors">
            Get Free Demo
          </Link>
          <Link href="/contact" className="px-6 py-2 bg-transparent border border-white/20 text-white font-black uppercase text-xs rounded-full hover:bg-white/10 transition-colors hidden sm:block">
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}

export function FloatingContact() {
  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-3">
      <a href="https://wa.me/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
        <MessageCircle className="w-6 h-6" />
      </a>
      <a href="mailto:contact@revoticai.com" className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
        <Mail className="w-6 h-6" />
      </a>
      <a href="tel:+123456789" className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}

export function ExitIntent() {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setShow(true);
        setHasShown(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative">
        <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X className="w-6 h-6" />
        </button>
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase text-black mb-4">Wait! Don't leave empty-handed.</h2>
          <p className="text-gray-600 mb-8">Get a free strategy consultation to see how AI can automate your specific workflows and increase revenue.</p>
          <div className="space-y-4">
            <Link href="/contact" className="block w-full py-4 bg-[#b1ff32] text-black font-black uppercase rounded-full hover:bg-black hover:text-[#b1ff32] transition-colors border border-transparent hover:border-[#b1ff32]">
              Claim Free Consultation
            </Link>
            <button onClick={() => setShow(false)} className="block w-full py-4 text-gray-500 font-bold uppercase text-sm hover:text-black transition-colors">
              No thanks, I don't want to grow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
