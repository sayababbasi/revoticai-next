// "use client";

// import React from 'react';
// // --- FIX: Using the CORRECTED relative path from /app/portfolio to /components/ ---
// import PortfolioPageHeader from '@/components/sections/Portfolio/PortfolioPageHeader';
// import CTA from '@/components/sections/Home/CTA';
// // NOTE: We will use a dedicated component for the project listing
// // import PortfolioGrid from '@/components/sections/Portfolio/PortfolioGrid'; 
// import ServiceGrid from '@/components/sections/Services/ServiceGrid'

// const PortfolioPage: React.FC = () => {
//   const breadcrumbs = [
//     { name: 'Home', href: '/' },
//     { name: 'Portfolio', href: '/portfolio' },
//   ];

//   return (
//     <main>
//       {/* 1. Page Header (The Attractive Hero for this page) */}
//       <PortfolioPageHeader 
//         title="Our Digital Legacy"
//         subtitle="Success Stories and Client Work"
//         description="Explore the innovative solutions we’ve delivered across AI, machine learning, and full-stack development, driving measurable results for global partners."
//         breadcrumbs={breadcrumbs}
//         emphasizeWord={2} // Emphasize 'Digital'
//       /> 
      
//       {/* 2. Portfolio Grid (The main content area) */}

//       {/* 3. Final Call to Action */}
//       <CTA />
//       <ServiceGrid />
//     </main>
//   );
// };

// export default PortfolioPage;


"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceGrid from "@/components/sections/Services/ServiceGrid";
import ProjectsGallery from "@/components/sections/Portfolio/ProjectsGallery";
// ------------------ ICONS ------------------
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);
const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="w-5 h-5 mr-2">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
);
const BotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="w-5 h-5 mr-2">
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
  </svg>
);
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="w-5 h-5 mr-2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="w-5 h-5 mr-2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const BarChart3Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="w-5 h-5 mr-2">
    <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3" />
  </svg>
);

// ------------------ DATA ------------------
const allProjects = [
  { id: 1, title: "Intelligent Lead Platform", category: "AI & ML", tags: ['AI', 'SaaS', 'Sales'], image: "/images/sliderproduct/ai.webp", link: "#" },
  { id: 2, title: "Custom E-commerce Web App", category: "Web Development", tags: ['Backend', 'E-commerce', 'API'], image: "/images/sliderproduct/MEXT.jpg", link: "#" },
  { id: 3, title: "Finance Automation Bot", category: "Automation", tags: ['RPA', 'FinTech'], image: "/images/product/dashb-dev-3.jpg", link: "#" },
  { id: 4, title: "Predictive Analytics Dashboard", category: "Data & Analytics", tags: ['DataViz', 'ML', 'Python'], image: "/images/sliderproduct/dash-img-333.png", link: "#" },
  { id: 5, title: "Logistics Tracking App", category: "App Development", tags: ['Mobile', 'Flutter', 'IoT'], image: "/images/product/yt1.webp", link: "#" },
  { id: 6, title: "Healthcare AI Assistant", category: "AI & ML", tags: ['GenAI', 'Healthcare', 'NLP'], image: "/images/blogs/aiinhealth.jpeg", link: "#" },
];

const categories = [
  { name: 'All', icon: <LayersIcon />, filter: 'All' },
  { name: 'AI & ML', icon: <BotIcon />, filter: 'AI & ML' },
  { name: 'Automation', icon: <ZapIcon />, filter: 'Automation' },
  { name: 'Web Dev', icon: <CodeIcon />, filter: 'Web Development' },
  { name: 'Data', icon: <BarChart3Icon />, filter: 'Data & Analytics' },
];

// ------------------ ANIMATION VARIANTS ------------------
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

// ------------------ COMPONENTS ------------------
interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  breadcrumbs: { name: string; href: string }[];
  emphasizeWord?: number;
}
const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, description, breadcrumbs, emphasizeWord }) => {
  const words = title.split(" ");
  return (
    <section className="bg-black text-white pt-[150px] pb-16 md:pb-24">
      <motion.div className="container mx-auto px-6 text-center" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.p className="text-sm uppercase tracking-widest font-semibold text-[#b1ff32] mb-3" variants={itemVariants}>{subtitle}</motion.p>
        <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4" variants={itemVariants}>
          {words.map((word, i) => (
            <span key={i} className={i === emphasizeWord ? "text-[#b1ff32]" : ""}>{word} </span>
          ))}
        </motion.h1>
        <motion.p className="text-lg text-gray-400 max-w-3xl mx-auto" variants={itemVariants}>{description}</motion.p>
        <motion.nav className="text-sm text-gray-400 flex justify-center space-x-2 mt-6" variants={itemVariants}>
          {breadcrumbs.map((b, i) => (
            <React.Fragment key={b.name}>
              <a href={b.href} className="hover:text-[#b1ff32]">{b.name}</a>
              {i < breadcrumbs.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </motion.nav>
      </motion.div>
    </section>
  );
};

interface ProjectCardProps { project: typeof allProjects[0]; }
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <motion.a href={project.link} target="_blank" rel="noopener noreferrer"
    className="group block bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} layout>
    <div className="h-48 overflow-hidden">
      <img src={project.image} alt={project.title} loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        onError={(e) => e.currentTarget.src = 'https://placehold.co/600x400/1a1a1a/b1ff32?text=Project'} />
    </div>
    <div className="p-5">
      <p className="text-xs uppercase tracking-wider font-semibold text-[#b1ff32] mb-1">{project.category}</p>
      <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">{tag}</span>)}
      </div>
      <span className="inline-flex items-center text-sm font-semibold text-black group-hover:text-[#b1ff32]">
        View Case Study <ArrowUpRightIcon />
      </span>
    </div>
  </motion.a>
);

const CTASection: React.FC = () => (
  <section className="bg-black text-white">
    <div className="container mx-auto px-6 py-20 md:py-28 text-center relative">
      <div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 p-12 md:p-16">
        <div className="absolute -top-1/3 -right-1/4 w-1/2 h-1/2 bg-[#b1ff32]/20 rounded-full blur-[150px] opacity-60 z-0" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-lg text-gray-400 mb-10">
            Let's turn your idea into an intelligent, scalable reality.
          </p>
          <a href="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-[#b1ff32] text-black font-bold rounded-full text-lg transition-transform hover:scale-105">
            Get a Free Quote <ArrowRightIcon />
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ------------------ MAIN PAGE ------------------
const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = allProjects.filter(p => activeFilter === "All" || p.category === activeFilter);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <main>
      <PageHeader
        title="Our Digital Legacy"
        subtitle="Success Stories and Client Work"
        description="Explore the innovative solutions we’ve delivered across AI, machine learning, and full-stack development."
        breadcrumbs={breadcrumbs}
        emphasizeWord={1}
      />

      {/* Project Filter Section */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button key={cat.filter} onClick={() => setActiveFilter(cat.filter)}
                className={`flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === cat.filter
                    ? "bg-[#b1ff32] text-black shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}>
                {cat.icon}{cat.name}
              </button>
            ))}
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
            <AnimatePresence>
              {filteredProjects.map(p => <ProjectCard key={p.id} project={p} />)}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div className="text-center py-10 text-gray-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="text-lg">No projects found for "{activeFilter}". Try another category!</p>
            </motion.div>
          )}
        </div>
      </section>
      <ProjectsGallery />
      <CTASection />
      <ServiceGrid />
    </main>
  );
};

export default PortfolioPage;
