"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Experts",
    "Blogs",
    "Contact",
    "Verify",
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    const handleClickOutside = (e: MouseEvent) =>
      (e.target as HTMLElement).id === "menu-overlay" && setIsOpen(false);
    const handlePopState = () => setIsOpen(false);

    document.addEventListener("keydown", handleEsc);
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed w-full left-0 bg-white transition-all duration-300 z-[59] ${
          isScrolled ? "top-0 shadow-md py-2" : "top-[56px] py-4"
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="RevoticAi Logo"
              width={isScrolled ? 100 : 120}
              height={isScrolled ? 40 : 50}
              priority
              className="transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7 text-[#0a0a0a] font-medium text-[15px] lg:text-[16px]">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="hover:text-[#facc15] transition"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/quote"
              className="bg-[#facc15] text-[#0a0a0a] px-4 lg:px-5 py-2 rounded-full hover:bg-[#e5b900] transition"
            >
              Book A Free Call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#0a0a0a]"
            onClick={() => setIsOpen((s) => !s)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          id="menu-overlay"
          className="fixed inset-0 bg-black/40 z-[70] flex md:hidden"
          aria-hidden={!isOpen}
        >
          <div className="w-72 bg-[#f9fafb] h-full p-6 ml-auto relative animate-slide-in-right">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-gray-500 hover:text-black transition"
              aria-label="Close mobile menu"
            >
              <X size={26} />
            </button>

            {/* Mobile Logo */}
            <div className="flex items-center gap-2 mb-8 mt-2">
              <Image
                src="/images/logo.png"
                alt="RevoticAi Logo"
                width={100}
                height={100}
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-5 font-medium text-[#0a0a0a] mt-10 text-[15px]">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#facc15] transition-colors"
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-[#facc15] text-[#0a0a0a] px-4 py-2 rounded-full text-center hover:bg-[#e5b900] transition-all"
              >
                Book A Free Call
              </Link>
            </nav>

            {/* About Section */}
            <div className="mt-10 border-t border-gray-300 pt-4 text-sm leading-6 text-[#0a0a0a]">
              <p className="font-semibold text-[14px] mb-2">About Revotic AI</p>
              <p className="text-[13px] text-gray-700">
                Revotic AI is a future-driven tech company specializing in
                intelligent automation, AI-powered platforms, and digital
                solutions. We help startups and enterprises scale fast through
                smart, data-driven technologies.
              </p>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block mt-2 text-[#facc15] text-[13px] hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
