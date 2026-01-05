"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export const XIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2H21.56l-7.233 8.26L22 22h-6.828l-5.35-6.99L3.882 22H.56l7.73-8.835L2 2h7.01l4.835 6.44L18.244 2z" />
  </svg>
);

export const YouTubeIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M23.498 6.186a2.974 2.974 0 0 0-2.095-2.1C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.403.586a2.974 2.974 0 0 0-2.095 2.1A31.24 31.24 0 0 0 0 12a31.24 31.24 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.095 2.1C4.495 20.5 12 20.5 12 20.5s7.505 0 9.403-.586a2.974 2.974 0 0 0 2.095-2.1A31.24 31.24 0 0 0 24 12a31.24 31.24 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

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
        <Link href="https://x.com/revoticai" target="_blank" className="hover:text-[#facc15] transition">
          <XIcon  size={15} />
        </Link>
        <Link href="https://instagram.com/revoticai" target="_blank" className="hover:text-[#facc15] transition">
          <Instagram size={15} />
        </Link>
        <Link href="https://linkedin.com/company/revoticai" target="_blank" className="hover:text-[#facc15] transition">
          <Linkedin size={15} />
        </Link>
        <Link href="https://youtube.com/revoticai" target="_blank" className="hover:text-[#facc15] transition">
          <YouTubeIcon  size={15} />
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
