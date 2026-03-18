"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ServiceGrid from "@/components/sections/Services/ServiceGrid";

// --- EmailJS config ---
const SERVICE_ID = "service_toql1x3";
const TEMPLATE_ID = "template_xs0sqpb";
const PUBLIC_KEY = "IF4WbCZuXMDeKvn5O";

// --- Icons ---
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const BrainCircuitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#b1ff32]">
    <path d="M12 4.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 4.5Z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#b1ff32]">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#b1ff32]">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// --- Animations ---
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

// --- PAGE HEADER (Split Layout) ---
const PageHeader: React.FC<{ title: string; subtitle: string; breadcrumbs?: { name: string; href: string }[] }> = ({ title, subtitle, breadcrumbs = [] }) => (
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
              Join a team of visionaries and builders shaping the next generation of AI-powered business excellence.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-[#b1ff32] animate-pulse" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Always Hiring Talent</span>
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Global Opportunities</span>
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
                src="/images/career/career-hero.png"
                alt="AI Career Development"
                className="rounded-[2.5rem] w-full h-full object-cover shadow-2xl"
              />
            </div>

            {/* Floating Interaction Card */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 px-6 py-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#b1ff32]/20 flex items-center justify-center">
                  <BrainCircuitIcon />
                </div>
                <div>
                  <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest">Join The Future</p>
                  <p className="text-[10px] text-white font-black uppercase tracking-widest leading-none">AI Integration Experts</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

// --- Data ---
const perks = [
  { icon: <BrainCircuitIcon />, title: "Innovation Culture", description: "Work on cutting-edge AI and automation projects that define the future of technology." },
  { icon: <TrendingUpIcon />, title: "Rapid Growth", description: "We are a fast-scaling company, offering immense opportunities for career advancement." },
  { icon: <GlobeIcon />, title: "Global Impact", description: "Our solutions power businesses around the world, from local startups to global enterprises." },
];

const jobListings = [
  { title: "AI Engineer (NLP)", location: "Islamabad, PK", type: "Contract", description: "Lead the development of advanced NLP and AI systems." },
  { title: "Full-Stack Developer (React/Node)", location: "Remote / Islamabad, PK", type: "Full-Time", description: "Develop scalable SaaS platforms using React and Node.js." },
  { title: "UI/UX Designer (AI Products)", location: "Remote / Islamabad, PK", type: "Contract", description: "Design sleek and intuitive interfaces for AI-driven applications." },
  { title: "Sales Executive Manager", location: "Remote / Islamabad, PK", type: "Full-Time", description: "Drive growth by identifying and managing client opportunities." },
];

// --- CareersPage ---
const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage("");
    setIsError(false);

    try {
      const formData = new FormData(e.currentTarget);
      const data: Record<string, string> = Object.fromEntries(formData.entries()) as Record<string, string>;

      // Ensure defaults
      data.position = selectedJob || data.position || "Not Selected";
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);

      setStatusMessage("Application submitted successfully!");
      setIsError(false);
      e.currentTarget.reset();
      setSelectedJob("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("Something went wrong. Please try again.");
      setIsError(true);
    }
  };

  return (
    <main className="font-sans">
      <PageHeader 
        title="Join Our Mission" 
        subtitle="Careers at Revotic AI" 
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Career", href: "/career" }]} 
      />

      {/* Why Work With Us */}
      <section className="bg-white py-20 md:py-32 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
              <h2 className="text-4xl md:text-6xl font-black text-black mb-8 uppercase tracking-tighter leading-tight">Shape the Future <br /><span className="text-gray-300 italic">of AI With Us</span></h2>
              <p className="text-xl text-gray-600 mb-8 font-medium leading-relaxed max-w-xl">
                At Revotic AI, we're crafting the intelligent systems that power the next generation of business excellence. 
                We don't just build software; we build the future.
              </p>
              
              <div className="flex flex-col gap-8">
                {perks.map((perk, i) => (
                  <motion.div key={i} variants={itemVariants} className="group flex items-start gap-6 p-2 transition-all">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[#b1ff32]/10 group-hover:border-[#b1ff32]/20 transition-all duration-300">
                      {perk.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-black uppercase tracking-widest mb-2">{perk.title}</h3>
                      <p className="text-gray-500 font-medium leading-relaxed max-w-md">{perk.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-gray-100 shadow-2xl">
                <img src="/images/career/career-hero.png" className="w-full h-full object-cover grayscale opacity-20" alt="Career background" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#b1ff32]/10 to-transparent" />
                
                {/* Stats Cards */}
                <div className="absolute top-12 left-12 p-6 bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2rem] shadow-xl">
                  <p className="text-3xl font-black text-black tracking-tighter">15+</p>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Global Clients</p>
                </div>

                <div className="absolute bottom-12 right-12 p-6 bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2rem] shadow-xl">
                  <p className="text-3xl font-black text-[#b1ff32] tracking-tighter">100%</p>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Remote Ready</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="bg-black py-20 md:py-32 relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b1ff32]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" variants={containerVariants}>
            <motion.h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter" variants={itemVariants}>Open <span className="text-[#b1ff32]">Positions_</span></motion.h2>
            <motion.p className="text-lg text-gray-400 font-semibold uppercase tracking-widest opacity-60" variants={itemVariants}>Find your place at Revotic AI</motion.p>
          </motion.div>

          <motion.div className="grid gap-6" initial="hidden" whileInView="visible" variants={containerVariants}>
            {jobListings.map((job) => (
              <motion.div 
                key={job.title} 
                variants={itemVariants} 
                className="group bg-neutral-900/50 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-[#b1ff32]/30 transition-all duration-500 shadow-2xl"
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#b1ff32]/10 text-[#b1ff32] text-[8px] font-black uppercase tracking-widest rounded-full">{job.type}</span>
                    <span className="text-gray-600 font-black text-[10px] uppercase tracking-widest">{job.location}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-[#b1ff32] transition-colors">{job.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed max-w-xl">{job.description}</p>
                </div>
                <button 
                  onClick={() => handleApplyClick(job.title)} 
                  className="w-full md:w-auto inline-flex items-center justify-center px-10 py-5 text-sm font-black text-black bg-[#b1ff32] rounded-full hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl shadow-[#b1ff32]/20 uppercase tracking-widest"
                >
                  Apply Now_
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-[#fcfcfc] py-20 md:py-32" ref={formRef} id="apply-form">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={containerVariants}>
            <motion.h2 className="text-5xl md:text-7xl font-black text-black mb-6 uppercase tracking-tighter" variants={itemVariants}>Build Your <span className="text-gray-300">Future_</span></motion.h2>
            <motion.p className="text-lg text-gray-400 font-black uppercase tracking-[0.3em]" variants={itemVariants}>Apply In Seconds</motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-black/5 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" name="name" placeholder="John Doe" required className="w-full bg-gray-50 border border-gray-100 text-black px-6 py-4 rounded-2xl focus:outline-none focus:border-[#b1ff32] transition-colors font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" name="email" placeholder="john@example.com" required className="w-full bg-gray-50 border border-gray-100 text-black px-6 py-4 rounded-2xl focus:outline-none focus:border-[#b1ff32] transition-colors font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Phone Number</label>
                  <input type="tel" name="phone" placeholder="+1 (555) 000-0000" required className="w-full bg-gray-50 border border-gray-100 text-black px-6 py-4 rounded-2xl focus:outline-none focus:border-[#b1ff32] transition-colors font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Selected Position</label>
                  <select name="position" value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)} required className="w-full bg-gray-50 border border-gray-100 text-black px-6 py-4 rounded-2xl focus:outline-none focus:border-[#b1ff32] transition-colors font-bold appearance-none">
                    <option value="">Select Position</option>
                    {jobListings.map((j) => <option key={j.title} value={j.title}>{j.title}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">LinkedIn Profile</label>
                  <input type="url" name="linkedin" placeholder="https://linkedin.com/in/..." className="w-full bg-gray-50 border border-gray-100 text-black px-6 py-4 rounded-2xl focus:outline-none focus:border-[#b1ff32] transition-colors font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Portfolio (Optional)</label>
                  <input type="url" name="portfolio" placeholder="https://yourportfolio.com" className="w-full bg-gray-50 border border-gray-100 text-black px-6 py-4 rounded-2xl focus:outline-none focus:border-[#b1ff32] transition-colors font-bold" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Your Story / Message</label>
                <textarea name="message" placeholder="Tell us why you are a perfect fit..." rows={6} className="w-full bg-gray-50 border border-gray-100 text-black px-6 py-4 rounded-3xl focus:outline-none focus:border-[#b1ff32] transition-colors font-medium resize-none"></textarea>
              </div>

              <button type="submit" className="group w-full flex items-center justify-center px-10 py-6 text-sm font-black text-black bg-[#b1ff32] rounded-full hover:bg-black hover:text-[#b1ff32] transition-all duration-500 shadow-2xl shadow-[#b1ff32]/20 uppercase tracking-[0.3em]">
                {statusMessage === "Application submitted successfully!" ? "Submitted Successfully!" : "Submit Application_"}
                {statusMessage !== "Application submitted successfully!" && <ArrowRightIcon />}
              </button>

              {statusMessage && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 text-center font-black text-[10px] uppercase tracking-widest ${isError ? "text-red-600" : "text-green-600"}`}
                >
                  {statusMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      <ServiceGrid />
    </main>
  );
};

export default CareersPage;
