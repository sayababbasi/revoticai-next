"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import OurClients from "@/components/sections/Home/Clients";
import ServiceGrid from "@/components/sections/Services/ServiceGrid";

// --- START: INLINED ICONS (to prevent build errors) ---
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#b1ff32]">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#b1ff32]">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#b1ff32]">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);
// --- END: INLINED ICONS ---

// --- START: INLINED PageHeader Component ---
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const PageHeader: React.FC<{ title: string; subtitle: string; breadcrumbs: { name: string; href: string }[] }> = ({
  title,
  subtitle,
  breadcrumbs = [],
}) => (
  <section className="bg-black text-white pt-[150px] pb-16 md:pb-24 overflow-hidden">
    <motion.div
      className="container mx-auto px-6 text-center"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.p
        className="text-sm uppercase tracking-widest font-semibold text-[#b1ff32] mb-3"
        variants={itemVariants}
      >
        {subtitle}
      </motion.p>
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
        variants={itemVariants}
      >
        {title}
      </motion.h1>
      <motion.nav
        className="text-sm text-gray-400 flex justify-center space-x-2"
        variants={itemVariants}
      >
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={item.name}>
            <a href={item.href} className="hover:text-[#b1ff32] transition-colors">
              {item.name}
            </a>
            {index < breadcrumbs.length - 1 && <span className="text-gray-600">/</span>}
          </React.Fragment>
        ))}
      </motion.nav>
    </motion.div>
  </section>
);
// --- END: INLINED PageHeader Component ---

// --- Services Data for Checkboxes ---
const services = [
  "Custom AI Development",
  "AI SaaS Products",
  "Personalized AI Dashboards",
  "Business Automation (RPA)",
  "AI-Powered Web App",
  "Full Stack Web Development",
  "Android Development",
  "iOS Development",
  "Other",
];

// --- Main Contact Page Component ---
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => {
      const newServices = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: newServices };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // This is the API route you specified in your project plan
      const response = await fetch("/contact/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ // Reset form
          name: "", email: "", phone: "", company: "", services: [], message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <main>
      {/* 1. Reusable Page Header */}
      <PageHeader
        title="Get in Touch"
        subtitle="Contact Us"
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Main Contact Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* --- Left Column: Contact Info --- */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Let's Discuss Your Project
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help you scale your business with intelligent
                solutions. Fill out the form, or reach us directly via email
                or phone.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MailIcon />
                  <div>
                    <h4 className="text-lg font-semibold text-black">Email</h4>
                    <a href="mailto:contact.revoticai@gmail.com" className="text-gray-600 hover:text-[#b1ff32] transition-colors">
                      contact.revoticai@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PhoneIcon />
                  <div>
                    <h4 className="text-lg font-semibold text-black">Phone</h4>
                    <a href="tel:+923160513841" className="text-gray-600 hover:text-[#b1ff32] transition-colors">
                      +92 316 0513841
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPinIcon />
                  <div>
                    <h4 className="text-lg font-semibold text-black">Office</h4>
                    <p className="text-gray-600">
                      46500 Spring Valley, Bani Gala, Islamabad, PK
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- Right Column: Contact Form --- */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" />
                  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" />
                  <input type="tel" name="phone" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleInputChange} className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" />
                  <input type="text" name="company" placeholder="Company Name (Optional)" value={formData.company} onChange={handleInputChange} className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" />
                </div>
                
                <div className="mb-6">
                  <label className="block text-lg font-semibold text-black mb-4">
                    I'm interested in...
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <label key={service} className="flex items-center text-sm text-gray-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="h-4 w-4 rounded border-gray-300 text-[#b1ff32] focus:ring-[#b1ff32]/50"
                        />
                        <span className="ml-2">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} rows={5} required className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group w-full inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-black bg-[#b1ff32] rounded-full hover:bg-black hover:text-[#b1ff32] transition-all duration-300 shadow-lg disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  {status !== "loading" && <ArrowRightIcon />}
                </button>
                
                {status === "success" && (
                  <p className="text-green-600 mt-4 text-center font-semibold">
                    Message sent successfully! We'll be in touch soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 mt-4 text-center font-semibold">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <OurClients />
      <ServiceGrid />
    </main>
  );

  
};

export default ContactPage;
