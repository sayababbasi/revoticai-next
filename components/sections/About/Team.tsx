"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, ExternalLink, ArrowRight } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  skills: string[];
}

const team: TeamMember[] = [
  {
    name: "Sayab Gulfaraz",
    role: "Founder & CEO",
    image: "/images/experts/sayab.png",
    bio: "Started RevoticAI to make AI practical and accessible for businesses of all sizes. Oversees every project personally and stays involved from the first call to final delivery.",
    linkedin: "https://www.linkedin.com/in/sayab-abbasi/",
    skills: ["Leadership", "Strategy", "AI Products"],
  },
  {
    name: "Hasaan Farooq",
    role: "Co-founder",
    image: "/images/experts/cofounder.png",
    bio: "Drives the strategic vision and growth of RevoticAI, ensuring our automated solutions align with long-term business objectives and deliver measurable impact at scale.",
    linkedin: "https://www.linkedin.com/in/muhammad-hasaan-farooq-2b80102a1/",
    skills: ["Business Strategy", "Growth", "Operations"],
  },
  {
    name: "Jahanzaib Ali",
    role: "Chief Operating Officer",
    image: "/images/experts/COO.jpg",
    bio: "Oversees daily operations and execution of all projects. Ensures that our team delivers high-quality AI solutions consistently, on time, and within scope.",
    linkedin: "https://www.linkedin.com/in/jahanzaib-ali-b00758220/",
    skills: ["Operations", "Process Optimization", "Management"],
  },
  {
    name: "Maria Hanif",
    role: "Chief Technology Officer",
    image: "/images/experts/female.jpg",
    bio: "Leads the engineering teams and technical strategy at RevoticAI. Designs robust, scalable architectures to support complex AI and automation deployments.",
    linkedin: "https://www.linkedin.com/in/mariya-hanif-95485646/",
    skills: ["System Architecture", "AI Engineering", "Cloud Infrastructure"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
};

const TeamSection: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-16 md:py-24 overflow-hidden relative border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#b1ff32_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.5em] font-black text-white mb-10"
            variants={itemVariants}
          >
            Our <span className="text-[#b1ff32]">Leader's</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight"
            variants={itemVariants}
          >
            The People Behind <br /> <span className="text-[#b1ff32]">Your Project</span>
          </motion.h2>
          <motion.p
            className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            We're a small, skilled team that takes on work we genuinely believe in. Every person here is hands-on - you'll work directly with the people building your product, not account managers passing messages.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
            >
              {/* Member Card */}
              <div className="relative overflow-hidden rounded-[2rem] bg-neutral-900/50 border border-white/10 backdrop-blur-xl p-5 transition-all duration-500 hover:border-[#b1ff32]/40 hover:-translate-y-1">

                {/* Image Wrap */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-5 border border-white/5 bg-black/50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x400/111/444?text=Member')}
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />

                  {/* Socials Link */}
                  <div className="absolute bottom-3 right-3 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                    <a href={member.linkedin} className="w-8 h-8 rounded-full bg-[#b1ff32] text-black flex items-center justify-center hover:scale-110 transition-transform">
                      <Linkedin size={14} />
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-lg font-black text-white tracking-tight group-hover:text-[#b1ff32] transition-colors">{member.name}</h3>
                  <p className="text-[#b1ff32]/60 text-[10px] font-bold uppercase tracking-[0.2em] mt-1 mb-3">{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {member.bio}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded bg-white/5 text-gray-500 border border-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Line */}
        <motion.div
          className="mt-24 max-w-4xl mx-auto rounded-[2.5rem] bg-white relative overflow-hidden py-16 px-8 text-center shadow-2xl border border-gray-100 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {/* Black Grid Lines */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000000_2px,transparent_1px)] [background-size:24px_24px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-8">
            <h3 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tighter">
              Have a question before reaching out?
            </h3>
            <a
              href="/contact"
              className="inline-flex items-center gap-4 px-10 py-5 bg-gray-900 text-white rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-black transition-all duration-300 shadow-xl"
            >
              Talk to our team
              <ArrowRight className="w-5 h-5 text-[#b1ff32] group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
