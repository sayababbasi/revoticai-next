"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ServiceGrid from "@/components/sections/Services/ServiceGrid";

// --- START: INLINED ICONS (to prevent build errors) ---
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const UploadCloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-500 mb-2">
    <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v12" />
  </svg>
);
const BrainCircuitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#b1ff32]">
    <path d="M12 4.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 4.5Z" />
    <path d="M12 13.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 13.5Z" />
    <path d="M12 22.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 22.5Z" />
    <path d="M17 11.5a2.5 2.5 0 0 1 0 5" /><path d="M7 11.5a2.5 2.5 0 0 1 0 5" />
  </svg>
);
const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#b1ff32]">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>
);
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#b1ff32]">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
// --- END: INLINED ICONS ---

// --- START: INLINED ANIMATION VARIANTS ---
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
// --- END: INLINED ANIMATION VARIANTS ---

// --- START: INLINED COMPONENT 1: PageHeader ---
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
      variants={containerVariants}
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
// --- END: INLINED COMPONENT 1 ---

// --- START: INLINED DATA (Perks & Jobs) ---
const perks = [
  {
    icon: <BrainCircuitIcon />,
    title: "Innovation Culture",
    description: "Work on cutting-edge AI and automation projects that define the future of technology.",
  },
  {
    icon: <TrendingUpIcon />,
    title: "Rapid Growth",
    description: "We are a fast-scaling company, offering immense opportunities for career advancement.",
  },
  {
    icon: <GlobeIcon />,
    title: "Global Impact",
    description: "Our solutions power businesses around the world, from local startups to global enterprises.",
  },
];

const jobListings = [
  {
    title: "Senior AI Engineer (NLP)",
    location: "Islamabad, PK",
    type: "Full-Time",
    description: "Seeking an experienced AI engineer to lead the development of our next-gen large language models and NLP solutions.",
  },
  {
    title: "Full-Stack Developer (React/Node)",
    location: "Remote (Pakistan)",
    type: "Full-Time",
    description: "Build and maintain our core SaaS platforms. Expertise in React, Node.js, and cloud services is essential.",
  },
  {
    title: "UI/UX Designer (AI Products)",
    location: "Islamabad, PK",
    type: "Contract",
    description: "We need a creative designer who can translate complex AI functionality into beautiful, intuitive user interfaces.",
  },
  {
    title: "Business Development Manager",
    location: "Islamabad, PK",
    type: "Full-Time",
    description: "Drive our growth by identifying new client opportunities and managing enterprise-level accounts.",
  },
];
// --- END: INLINED DATA ---


// --- MAIN CAREERS PAGE COMPONENT ---
const CareersPage: React.FC = () => {
  // State to manage the selected job
  const [selectedJob, setSelectedJob] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [fileName, setFileName] = useState("");
  
  // Ref for the form section to scroll to
  const formRef = useRef<HTMLDivElement>(null);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    // Scroll to the form
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    const formData = new FormData(e.currentTarget);
    
    try {
      // This is the API route you specified in your project plan
      const response = await fetch("/careers/api/submit", {
        method: "POST",
        body: formData, // Send as FormData for file upload
      });

      if (response.ok) {
        setFormStatus("success");
        (e.target as HTMLFormElement).reset(); // Reset form
        setFileName("");
        setSelectedJob("");
      } else {
        throw new Error("Failed to send application");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <main>
      {/* 1. Page Header */}
      <PageHeader
        title="Join Our Mission"
        subtitle="Careers at Revotic AI"
        breadcrumbs={breadcrumbs}
      />

      {/* 2. "Why Work With Us?" Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h2 className="text-4xl md:text-5xl font-bold text-black mb-6" variants={itemVariants}>
                Shape the Future of AI With Us
              </motion.h2>
              <motion.p className="text-lg text-gray-600 mb-6" variants={itemVariants}>
                At Revotic AI, we're not just building software; we're crafting
                the intelligent systems that will power the next generation of
                business. We are a team of innovators, thinkers, and builders
                who thrive on complex challenges.
              </motion.p>
              <motion.p className="text-lg text-gray-600" variants={itemVariants}>
                If you are passionate about artificial intelligence and want to
                work on projects that have a real-world impact, you're in the
                right place.
              </motion.p>
            </motion.div>
            
            {/* Right: Perks */}
            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {perks.map((perk, index) => (
                <motion.div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg" variants={itemVariants}>
                  <div className="flex-shrink-0 w-12 h-12 bg-[#b1ff32]/10 rounded-full flex items-center justify-center">
                    {perk.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">{perk.title}</h3>
                    <p className="text-gray-600">{perk.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* 3. Job Listings Section */}
      <section className="bg-neutral-900 py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-4" variants={itemVariants}>
              Current Openings
            </motion.h2>
            <motion.p className="text-lg text-gray-400" variants={itemVariants}>
              Find your place at Revotic AI. We're looking for the best and
              brightest to join our team.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {jobListings.map((job) => (
              <motion.div
                key={job.title}
                variants={itemVariants}
                className="bg-black border border-neutral-800 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400 mb-3">
                    <span className="flex items-center"><MapPinIcon /> {job.location}</span>
                    <span className="flex items-center"><ClockIcon /> {job.type}</span>
                  </div>
                  <p className="text-gray-400">{job.description}</p>
                </div>
                <a
                  href="#apply-form" // Scrolls to the form
                  onClick={() => handleApplyClick(job.title)}
                  className="flex-shrink-0 w-full md:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-bold text-black bg-[#b1ff32] rounded-full hover:bg-white transition-all duration-300"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Application Form Section */}
      <section className="bg-gray-50 py-20 md:py-28" ref={formRef} id="apply-form">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold text-black mb-4" variants={itemVariants}>
              Apply Now
            </motion.h2>
            <motion.p className="text-lg text-gray-600" variants={itemVariants}>
              Eager to make an impact? We'd love to hear from you.
            </motion.p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" name="name" placeholder="Your Name" required className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" />
              <input type="tel" name="phone" placeholder="Phone Number" required className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]" />
              
              {/* This dropdown is now linked to the 'Apply Now' buttons */}
              <select 
                name="position"
                value={selectedJob}
                onChange={(e) => setSelectedJob(e.target.value)}
                required 
                className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"
              >
                <option value="" disabled>Select position</option>
                {jobListings.map(job => (
                  <option key={job.title} value={job.title}>{job.title}</option>
                ))}
                <option value="Other">Other/General Application</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block w-full px-6 py-10 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-gray-400">
                <UploadCloudIcon />
                <span className="text-lg font-semibold text-black">{fileName || "Upload your Resume/CV"}</span>
                <p className="text-sm text-gray-500">PNG, JPG, or PDF (Max 5MB)</p>
                <input 
                  type="file" 
                  name="resume" 
                  className="hidden" 
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  required
                  onChange={handleFileChange}
                />
              </label>
            </div>

            <div className="mb-6">
              <textarea name="message" placeholder="Cover Letter (Optional)" rows={5} className="w-full bg-white border border-gray-200 text-black px-4 py-3 rounded-md focus:outline-none focus:border-[#b1ff32]"></textarea>
            </div>
            
            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="group w-full inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-black bg-[#b1ff32] rounded-full hover:bg-black hover:text-[#b1ff32] transition-all duration-300 shadow-lg disabled:opacity-50"
            >
              {formStatus === "loading" ? "Submitting..." : "Submit Application"}
              {formStatus !== "loading" && <ArrowRightIcon />}
            </button>
            
            {formStatus === "success" && (
              <p className="text-green-600 mt-4 text-center font-semibold">
                Application sent successfully! We'll be in touch soon.
              </p>
            )}
            {formStatus === "error" && (
              <p className="text-red-600 mt-4 text-center font-semibold">
                Something went wrong. Please try again later.
              </p>
            )}
          </motion.form>
        </div>
      </section>

      <ServiceGrid />
    </main>
  );
};

export default CareersPage;
