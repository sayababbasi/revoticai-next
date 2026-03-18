

// };

// export default ContactPage;


"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import OurClients from "@/components/sections/Home/Clients";
import ServiceGrid from "@/components/sections/Services/ServiceGrid";

// --- ICONS ---
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#b1ff32]">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#b1ff32]">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#b1ff32]">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// --- PAGE HEADER ---
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const PageHeader: React.FC<{ title: string; subtitle: string; breadcrumbs: { name: string; href: string }[] }> = ({
  title,
  subtitle,
  breadcrumbs = [],
}) => (
  <section className="bg-black text-white pt-[80px] pb-20 md:pb-28 overflow-hidden relative border-b border-white/5">
    {/* Grid Pattern */}
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
    </div>

    {/* Glow Effect */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b1ff32]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.nav
            className="text-[10px] font-black text-gray-500 flex items-center space-x-2 mb-10 uppercase tracking-[0.3em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={item.name}>
                <a href={item.href} className="hover:text-[#b1ff32] transition-colors">
                  {item.name}
                </a>
                {index < breadcrumbs.length - 1 && <span className="text-gray-800">/</span>}
              </React.Fragment>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#b1ff32] text-xs font-black uppercase tracking-[0.4em] mb-6 block">
              {subtitle}
            </p>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
              {title.split(' ')[0]} <br />
              <span className="text-[#b1ff32]">{title.split(' ').slice(1).join(' ')}_</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-10">
              Ready to transform your business with intelligent automation? Our team is here to help you scale and innovate.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-[#b1ff32] animate-pulse" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Available for Consultation</span>
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">24/7 Global Support</span>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-[#b1ff32]/20 blur-[60px] rounded-[3rem] animate-pulse" />

            {/* Image Container with Border */}
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 p-2 bg-neutral-900/50 backdrop-blur-sm">
              <img
                src="/images/contact-hero.png"
                alt="AI Connectivity Visual"
                className="rounded-[2.5rem] w-full h-full object-cover shadow-2xl"
              />
            </div>

            {/* Floating Interaction Card */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 px-6 py-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#b1ff32]/20 flex items-center justify-center">
                  <MailIcon />
                </div>
                <div>
                  <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest">Instant Reach</p>
                  <p className="text-[10px] text-white font-black uppercase tracking-widest leading-none">Response in &lt; 2h</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

// --- SERVICES DATA ---
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

// --- MAIN COMPONENT ---
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  //  EMAILJS SEND FUNCTION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "N/A",
        company: formData.company || "N/A",
        services: formData.services.join(", ") || "Not specified",
        message: formData.message,
      };

      await emailjs.send("service_toql1x3", "template_jea4yog", templateParams, "IF4WbCZuXMDeKvn5O");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", services: [], message: "" });

      // Automatically reset status after a short delay
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <main>
      <PageHeader title="Get in Touch" subtitle="Contact Us" breadcrumbs={breadcrumbs} />

      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* --- LEFT SIDE --- */}
            <div className="flex flex-col h-full">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Let's Discuss Your Project</h2>
              <p className="text-lg text-gray-600 mb-8">
                  We're here to help you scale your business with intelligent solutions. Fill out the form, or reach us directly via email or phone.
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
                    <p className="text-gray-600">46500 Spring Valley, Bani Gala, Islamabad, PK</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-grow min-h-[300px] lg:min-h-0 relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl shadow-black/5 mb-8 lg:mb-12"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13289.467385750893!2d73.15344315!3d33.702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff038379667%3A0x6a0530756784918e!2sBani%20Gala%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2spk!4v1710500000000!5m2!1sen!2spk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>

            {/* --- RIGHT SIDE (FORM) --- */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" />
                  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" />
                  <input type="tel" name="phone" placeholder="Phone (Optional)" value={formData.phone} onChange={handleInputChange} className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" />
                  <input type="text" name="company" placeholder="Company (Optional)" value={formData.company} onChange={handleInputChange} className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" />
                </div>

                <div className="mb-6">
                  <label className="block text-lg font-semibold text-black mb-4">I'm interested in...</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <label key={service} className="flex items-center text-sm text-gray-700 cursor-pointer">
                        <input type="checkbox" checked={formData.services.includes(service)} onChange={() => handleServiceChange(service)} className="h-4 w-4 rounded border-gray-300 text-[#b1ff32] focus:ring-[#b1ff32]/50" />
                        <span className="ml-2">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} rows={5} required className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32] mb-6"></textarea>

                <button type="submit" disabled={status === "loading"} className="group w-full inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-black bg-[#b1ff32] rounded-full hover:bg-black hover:text-[#b1ff32] transition-all duration-300 shadow-lg disabled:opacity-50">
                  {status === "loading" ? "Sending..." : "Send Message"}
                  {status !== "loading" && <ArrowRightIcon />}
                </button>

                {status === "success" && <p className="text-green-600 mt-4 text-center font-semibold">Message sent successfully, We'll be in touch soon.</p>}
                {status === "error" && <p className="text-red-600 mt-4 text-center font-semibold">Something went wrong. Try again later.</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <OurClients />
      <ServiceGrid />
    </main >
  );
};

export default ContactPage;
