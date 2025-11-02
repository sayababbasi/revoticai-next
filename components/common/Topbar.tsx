"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const TOPBAR_HIDE_SCROLL = 150; // px

const Topbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHidden(window.scrollY > TOPBAR_HIDE_SCROLL);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      // note z-index lower than navbar (navbar has z-60); topbar z-50
      className={`fixed top-0 left-0 w-full bg-[#0a0a0a] text-[#f9fafb] text-sm px-4 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 border-b border-[#facc15]/20 z-[50] transition-transform duration-300`}
      // height controlled by CSS variable --topbar-h (default in globals.css)
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        height: "var(--topbar-h)",
      }}
      role="banner"
    >
      {/* Left Section - Address */}
      <div className="flex justify-center md:justify-start items-center gap-2 px-2">
        <MapPin size={14} className="text-[#facc15]" />
        <p className="text-[13px] md:text-[14px] font-medium">
          Spring Valley, Bani Gala, Islamabad
        </p>
      </div>

      {/* Middle Section - Social Icons */}
      <div className="flex justify-center items-center gap-4">
        <Link href="https://facebook.com" target="_blank" className="hover:text-[#facc15] transition">
          <Facebook size={15} />
        </Link>
        <Link href="https://instagram.com" target="_blank" className="hover:text-[#facc15] transition">
          <Instagram size={15} />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="hover:text-[#facc15] transition">
          <Linkedin size={15} />
        </Link>
      </div>

      {/* Right Section - Email & Phone */}
      <div className="flex justify-center md:justify-end items-center flex-wrap gap-2 text-[13px] md:text-[14px] px-2">
        <a href="mailto:contact.revoticai@gmail.com" className="hover:text-[#facc15] transition">
          contact.revoticai@gmail.com
        </a>
        <span className="hidden md:inline text-gray-400">|</span>
        <a href="tel:+923160513841" className="hover:text-[#facc15] transition">
          +92 316 0513841
        </a>
      </div>
    </div>
  );
};

export default Topbar;
