  "use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  href?: string;
  dropdown?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    dropdown: [
      { name: "AI Automation", href: "/services/ai-ml" },
      { name: "Custom Software", href: "/services/web-app" },
      { name: "Design & UX", href: "/services/ui-ux" },
      { name: "Game Dev", href: "/services/game-dev" },
      { name: "Data Analytics", href: "/services/data" },
    ],
  },
  {
    name: "Solutions",
    dropdown: [
      { name: "Industries", href: "/industries" },
      { name: "Case Studies", href: "/portfolio" },
    ],
  },
  {
    name: "Company",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Our Process", href: "/process" },
      { name: "Experts", href: "/experts" },
      { name: "Careers", href: "/career" },
    ],
  },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full left-0 transition-all duration-500 z-[59] ${
          isScrolled 
            ? "top-0 bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100" 
            : "top-[var(--topbar-h)] bg-white/95 backdrop-blur-sm py-5 border-b border-gray-50"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="RevoticAi Logo"
                width={isScrolled ? 90 : 110}
                height={40}
                priority
                className="transition-all duration-300 w-auto h-auto group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-[#1a1a1a] font-semibold text-[15px]">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative py-2"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.dropdown ? (
                  <button className="flex items-center gap-1.5 hover:text-[#facc15] transition-colors focus:outline-none">
                    {item.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredItem === item.name ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link href={item.href || "#"} className="hover:text-[#facc15] transition-colors">
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-50 overflow-hidden"
                    >
                      <div className="p-2 flex flex-col">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="px-4 py-2.5 rounded-lg hover:bg-gray-50 hover:text-[#facc15] transition-all text-[14px] font-medium"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-[#facc15] text-[#0a0a0a] px-6 py-2.5 rounded-full font-bold shadow-sm hover:shadow-md hover:bg-[#e5ac00] transition-all transform hover:-translate-y-0.5"
            >
              Book A Free Call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#0a0a0a] hover:bg-gray-100 rounded-lg transition"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[70] lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 w-[300px] h-full bg-white z-[71] lg:hidden flex flex-col shadow-2xl"
            >
              <div className="p-6 flex justify-between items-center border-b">
                <Image src="/images/logo.png" alt="Logo" width={100} height={40} className="w-auto h-auto" />
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full py-3 px-4 font-bold text-gray-800 rounded-lg hover:bg-gray-50 uppercase tracking-wide text-xs transition-all"
                        >
                          {item.name}
                          <ChevronDown size={14} className={`transition-transform duration-300 ${mobileOpenDropdown === item.name ? "rotate-180 text-[#facc15]" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileOpenDropdown === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 border-l-2 border-gray-100 ml-4 mb-2"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-2.5 px-4 text-gray-600 hover:text-[#facc15] text-[15px] font-medium"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 px-4 font-bold text-gray-800 rounded-lg hover:bg-gray-50 uppercase tracking-wide text-xs"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-6 border-t font-medium">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-[#facc15] text-[#0a0a0a] py-3.5 rounded-xl text-center font-bold shadow-sm"
                >
                  Book A Free Call
                </Link>
                <div className="mt-8 text-gray-500 text-[13px] leading-relaxed">
                  <p className="font-bold text-gray-900 mb-2">Revolutionizing Businesses</p>
                  <p>AI-driven solutions built for scale and speed.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
