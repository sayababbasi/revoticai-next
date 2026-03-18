"use client";

import React from "react";
import { motion } from "framer-motion";
import LeadGenForm from "@/components/sections/Home/LeadGenForm";

// --- START: INLINED ICONS (to prevent build errors) ---

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-[#b1ff32] mr-3 flex-shrink-0"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-[#b1ff32] flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

const BrainCircuitIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#b1ff32]"
  >
    <path d="M12 4.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 4.5Z" />
    <path d="M12 4.5a2.5 2.5 0 0 0 4.95.76 2.5 2.5 0 0 0 1.32.18 2.5 2.5 0 0 0 4.01-3.26 2.5 2.5 0 0 0-.4-4.54 2.5 2.5 0 0 0-4.54.4 2.5 2.5 0 0 0-3.26-4.01 2.5 2.5 0 0 0-.18-1.32A2.5 2.5 0 0 0 12 4.5Z" />
    <path d="M12 13.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 13.5Z" />
    <path d="M12 13.5a2.5 2.5 0 0 0 4.95.76 2.5 2.5 0 0 0 1.32.18 2.5 2.5 0 0 0 4.01-3.26 2.5 2.5 0 0 0-.4-4.54 2.5 2.5 0 0 0-4.54.4 2.5 2.5 0 0 0-3.26-4.01 2.5 2.5 0 0 0-.18-1.32A2.5 2.5 0 0 0 12 13.5Z" />
    <path d="M12 22.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 22.5Z" />
    <path d="M12 22.5a2.5 2.5 0 0 0 4.95.76 2.5 2.5 0 0 0 1.32.18 2.5 2.5 0 0 0 4.01-3.26 2.5 2.5 0 0 0-.4-4.54 2.5 2.5 0 0 0-4.54.4 2.5 2.5 0 0 0-3.26-4.01 2.5 2.5 0 0 0-.18-1.32A2.5 2.5 0 0 0 12 22.5Z" />
    <path d="M17 11.5a2.5 2.5 0 0 1 0 5" />
    <path d="M17 11.5a2.5 2.5 0 0 0 0 5" />
    <path d="M7 11.5a2.5 2.5 0 0 1 0 5" />
    <path d="M7 11.5a2.5 2.5 0 0 0 0 5" />
  </svg>
);
const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#b1ff32]"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const SmartphoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#b1ff32]"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);
const ZapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#b1ff32]"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const PaletteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#b1ff32]"
  >
    <circle cx="13.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="10.5" r="2.5" />
    <circle cx="15.5" cy="15.5" r="2.5" />
    <circle cx="10.5" cy="17.5" r="2.5" />
    <circle cx="6.5" cy="13.5" r="2.5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.83-.13 2.69-.38" />
  </svg>
);
const CTAArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const ClientArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 ml-2"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
// --- END: INLINED ICONS ---

// --- START: INLINED INTERFACES ---
interface Breadcrumb {
  name: string;
  href: string;
}

interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  button?: {
    text: string;
    href: string;
  };
}
// --- END: INLINED INTERFACES ---

// --- START: INLINED DATA ---
const services = [
  {
    number: "01",
    title: "AI & ML AUTOMATION",
    description: "Process optimization and predictive modelling.",
    image: "/images/services/ai-ml.png",
    href: "/services/ai-ml",
  },
  {
    number: "02",
    title: "AI SaaS PRODUCTS",
    description: "Turnkey cloud solutions for scalable growth.",
    image: "/images/services/saas.png",
    href: "/products",
  },
  {
    number: "03",
    title: "GAME DEVELOPMENT",
    description: "Creating immersive AI-driven experiences.",
    image: "/images/services/game-dev.png",
    href: "/services/game-dev",
  },
  {
    number: "04",
    title: "BUSINESS AUTOMATION",
    description: "RPA and workflow streamlining.",
    image: "/images/services/business.png",
    href: "/services/automation",
  },
  {
    number: "05",
    title: "WEB & APP DEV",
    description: "High-performance intelligent applications.",
    image: "/images/services/web-dev.png",
    href: "/services/web-app",
  },
  {
    number: "06",
    title: "UI/UX & DESIGN",
    description: "Human-centric digital product design.",
    image: "/images/services/ui-ux.png",
    href: "/services/ui-ux",
  },
];
const processSteps = [
  {
    title: "Discovery & Research",
    description: "We analyze your business, identify automation opportunities, and define clear success metrics.",
    points: [
      "Analyze existing systems & pain points",
      "Identify opportunities for automation or AI",
      "Define use-case & success metrics",
    ],
  },
  {
    title: "Solution Architecture",
    description: "Our experts design a tailored strategy, selecting the right models, data pipelines, and UX flows.",
    points: [
      "Design data flow and processing pipeline",
      "Select appropriate AI/ML models",
      "Design user experience around automation",
    ],
  },
  {
    title: "Development & Deployment",
    description: "We build, train, and deploy your solution with real-time monitoring and continuous improvement.",
    points: [
      "Model training and API integration",
      "Deploy to scalable cloud infrastructure",
      "Monitor results and optimize iteratively",
    ],
  },
];
const workImages = [
  { title: "AI Dashboards", src: "images/sliderproduct/dash-img-333.png" },
  { title: "E-Commerce", src: "images/sliderproduct/mext.jpg" },
  { title: "Web Development", src: "images/sliderproduct/web-dev-2.webp" },
  { title: "App Development", src: "images/sliderproduct/product.webp" },
  { title: "AI/ML Model", src: "images/sliderproduct/fweb-3.jpg" },
  { title: "SAAS Product", src: "images/sliderproduct/product-dev-2.webp" },
  { title: "CRM Platform", src: "images/sliderproduct/hhuiu.webp" },
];
const allWorkImages = [...workImages, ...workImages];
const clientsRow1 = [
  { name: "Alisha E-Shop", logo: "/images/clients/alishaeshop.png" },
  { name: "La Mosaik", logo: "/images/clients/lamosaik.webp" },
  { name: "Minzay", logo: "/images/clients/minzay.avif" },
  { name: "Astoud", logo: "/images/clients/astoud.webp" },
  { name: "Koala Eco", logo: "/images/clients/KoalaEco-Logo.svg" },
  { name: "Haryali Store", logo: "/images/clients/haryalistore.webp" },
  { name: "Pak Style", logo: "/images/clients/pakstyle.avif" },
];
const clientsRow2 = [
  { name: "Feature Learn", logo: "/images/clients/futurelearn.svg" },
  { name: "Bangash", logo: "/images/clients/bangashcontainers.jpg" },
  { name: "Go Flour", logo: " /images/clients/goflour.webp" },
  { name: "Qisaaye", logo: "/images/clients/qisaaye.webp" },
  { name: "Xcessories Hub", logo: "/images/clients/xcessorieshub.webp" },
  { name: "Loaf", logo: "/images/clients/loaf.png" },
];
const allClients1 = [...clientsRow1, ...clientsRow1];
const allClients2 = [...clientsRow2, ...clientsRow2];
const expertiseData = [
  {
    icon: <BrainCircuitIcon />,
    title: "AI & ML Automation",
    description: "Leverage custom-built AI models to automate tasks, gain insights, and drive decisions.",
    tags: ["Python", "TensorFlow", "RPA"],
    isCta: false,
  },
  {
    icon: <CodeIcon />,
    title: "Full-Stack Development",
    description: "High-performance, scalable web applications built with modern, secure frameworks.",
    tags: ["React", "Next.js", "Node.js"],
    isCta: false,
  },
  {
    icon: <SmartphoneIcon />,
    title: "AI-Powered App Development",
    description: "Intelligent mobile apps that deliver personalized user experiences on iOS and Android.",
    tags: ["Flutter", "React Native", "Firebase"],
    isCta: false,
  },
  {
    icon: <ZapIcon />,
    title: "Business Process Automation",
    description: "We analyze and re-engineer your workflows, deploying bots to handle repetitive tasks.",
    tags: ["BPM", "SaaS", "Integration"],
    isCta: false,
  },
  {
    icon: <PaletteIcon />,
    title: "UI/UX & Digital Design",
    description: "Human-centric design that ensures your digital products are intuitive, engaging, and beautiful.",
    tags: ["Figma", "User Research", "Prototyping"],
    isCta: false,
  },
  {
    icon: null,
    title: "Have a Project in Mind?",
    description: "Our experts are ready to discuss your idea and help you build a scalable, intelligent solution.",
    tags: [],
    isCta: true,
  },
];
// --- END: INLINED DATA ---

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
const PageHeader: React.FC<PageHeaderProps & { emphasizeWords?: number[] }> = ({
  title = "",
  subtitle = "",
  description = "",
  breadcrumbs = [],
  emphasizeWords = [],
  button,
}) => {
  const words = title.split(" ");
  const emphasizedTitle = (
    <div className="inline">
      {words.map((word: string, index: number) => (
        <span
          key={index}
          className={
            emphasizeWords.includes(index)
              ? "text-[#b1ff32]"
              : ""
          }
        >
          {word}{" "}
        </span>
      ))}
    </div>
  );

  return (
    <section className="bg-black text-white pt-[100px] pb-16 md:pb-24 overflow-hidden relative border-b border-white/5">
      {/* Background Sophistication */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#b1ff32]/5 blur invisible md:visible -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7 mb-16 lg:mb-0 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.nav
              className="text-sm font-bold text-gray-500 flex justify-center lg:justify-start space-x-2 mb-8 uppercase tracking-widest"
              variants={itemVariants}
            >
              {breadcrumbs.map((item: Breadcrumb, index: number) => (
                <React.Fragment key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-[#b1ff32] transition-colors"
                  >
                    {item.name}
                  </a>
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-gray-700">/</span>
                  )}
                </React.Fragment>
              ))}
            </motion.nav>

            <motion.p
              className="text-sm uppercase tracking-[0.3em] font-black text-[#b1ff32] mb-6"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            
            <motion.h1
              className="text-4xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-white uppercase"
              variants={itemVariants}
            >
              {emphasizedTitle}
            </motion.h1>
            
            <motion.p
              className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed font-medium tracking-wide"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            {button && (
              <motion.div variants={itemVariants}>
                <a
                  href={button.href}
                  className="inline-flex items-center justify-center px-12 py-5 text-xl font-black text-black bg-[#b1ff32] rounded-full hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(177,255,50,0.3)] group"
                >
                  {button.text}
                  <ArrowRightIcon />
                </a>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-[#b1ff32]/10 blur-[100px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
              <div className="relative overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl bg-black">
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
                <img
                  src="/images/services/services-hero-clean.png"
                  alt="Elite AI Infrastructure"
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => e.currentTarget.src = 'https://placehold.co/900x900/111/b1ff32?text=Elite+Services'}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
// --- END: INLINED COMPONENT 1 ---

// --- START: INLINED COMPONENT 2: ServiceCard (Used by ServicesOverview) ---
const CapabilityCard: React.FC<{
  number: string;
  title: string;
  description: string;
  image: string;
  href: string;
  isLeft: boolean;
  index: number;
}> = ({ number, title, description, image, href, isLeft, index }) => (
  <motion.div
    variants={itemVariants}
    className={`flex items-center w-full relative ${
      isLeft ? "md:flex-row" : "md:flex-row-reverse"
    } flex-col group ${index > 0 ? "md:-mt-52" : ""}`}
  >
    {/* Card Content */}
    <a
      href={href}
      className="w-full md:w-[45%] p-8 bg-neutral-900/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl hover:border-[#b1ff32]/40 transition-all duration-300 relative overflow-hidden group"
    >
      <div className="flex flex-col h-full relative z-10">
        <div className="text-4xl md:text-5xl font-black text-[#b1ff32] mb-6 opacity-80">
          {number}
        </div>
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-[#b1ff32] transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {description}
            </p>
          </div>
          <div className="w-full lg:w-48 h-32 rounded-xl overflow-hidden border border-white/5 shadow-inner bg-black/40">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              onError={(e) => (e.currentTarget.src = 'https://placehold.co/200x120/111/444?text=Service')}
            />
          </div>
        </div>
      </div>
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#b1ff32]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>

    {/* Connection Node (Desktop Only) */}
    <div className="hidden md:flex w-[10%] justify-center relative">
      <div className="w-4 h-4 rounded-full bg-[#b1ff32] shadow-[0_0_15px_rgba(177,255,50,0.8)] z-20" />
      <div className={`absolute top-1/2 w-full h-[2px] bg-gradient-to-r ${isLeft ? 'from-[#b1ff32] to-transparent' : 'from-transparent to-[#b1ff32]'} opacity-40`} />
    </div>

    {/* Spacer for bilateral layout */}
    <div className="hidden md:block w-[45%]" />
  </motion.div>
);
// --- END: INLINED COMPONENT 2 ---

// --- START: INLINED COMPONENT 3: ServicesOverview (Grid of ServiceCards) ---
const ServicesOverview: React.FC = () => (
  <section className="bg-black py-20 pb-48 md:py-32 md:pb-64 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          Our Core Capabilities
        </h2>
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={containerVariants}
      >
        {/* Central Glowing Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#b1ff32]/50 to-transparent z-10">
          <div className="absolute inset-0 -left-1 w-3 bg-[#b1ff32]/20 blur-md pointer-events-none" />
        </div>

        <div className="relative z-20 space-y-12 md:space-y-0">
          {services.map((service, index) => (
            <CapabilityCard
              key={index}
              {...service}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
// --- END: INLINED COMPONENT 3 ---

// --- START: INLINED COMPONENT 4: CoreExpertiseSection ---
const CoreExpertiseSection: React.FC = () => (
  <section className="bg-black text-white py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-7xl">
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.p
          className="text-sm uppercase tracking-wider font-semibold text-[#b1ff32] mb-3"
          variants={itemVariants}
        >
          Our Capabilities
        </motion.p>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          Our Core Expertise
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400"
          variants={itemVariants}
        >
          A 360-degree view of our capabilities, from strategic AI
          implementation to full-stack development.
        </motion.p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {expertiseData.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            className={`rounded-xl transition-all duration-300 ${item.isCta
              ? "bg-[#b1ff32] text-black p-8 flex flex-col justify-between"
              : "bg-neutral-900 border border-neutral-800 p-8 hover:border-[#b1ff32]/50"
              }`}
          >
            {item.isCta ? (
              <div className="group">
                <h3 className="text-3xl font-bold text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-neutral-800 text-lg mb-6">
                  {item.description}
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-lg font-bold text-black"
                >
                  Get in Touch
                  <CTAArrowRightIcon />
                </a>
              </div>
            ) : (
              <div>
                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-6">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-neutral-800 text-gray-300 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const WorkingProcessSection: React.FC = () => (
  <section className="bg-black text-white py-20 md:py-28 overflow-hidden">
    <div className="container mx-auto px-6 text-center mb-16">
      <h3 className="inline-flex items-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
        <span className="w-8 h-px bg-gray-600 mr-3"></span>
        Our Working Process
        <span className="w-8 h-px bg-gray-600 ml-3"></span>
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Transforming Ideas into Intelligent AI Solutions
      </h2>
    </div>
    <div className="container mx-auto px-6 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {processSteps.map((step) => (
          <div
            key={step.title}
            className="bg-neutral-900 border border-neutral-800 rounded-lg p-6"
          >
            <h4 className="text-xl font-bold text-white mb-3">
              {step.title}
            </h4>
            <p className="text-gray-400 text-sm mb-5">
              {step.description}
            </p>
            <ul className="space-y-3">
              {step.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-gray-300 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div
      className="group w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex w-max animate-scroll group-hover:pause">
        {allWorkImages.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-60 mx-4 text-center">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg shadow-lg mb-3"
              onError={(e) => (e.currentTarget.src = 'https://placehold.co/200x150/f00/fff?text=Error')}
            />
            <p className="text-sm font-semibold text-gray-300">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const OurClientsSection: React.FC = () => (
  <section className="bg-white py-20 md:py-28">
    <div className="container mx-auto px-6">
      <motion.div
        className="flex items-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-semibold text-black uppercase tracking-wider">
          Our Clients
        </h2>
        <ClientArrowRightIcon />
      </motion.div>
    </div>
    <div
      className="w-full relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex w-max animate-scroll-rtl">
        {allClients1.map((client, index) => (
          <div
            key={`r1-${index}`}
            className="flex-shrink-0 w-64 h-36 mx-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-6"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-w-full max-h-24 object-contain"
              onError={(e) => (e.currentTarget.src = 'https://placehold.co/150x60/f00/fff?text=Logo+Error')}
            />
          </div>
        ))}
      </div>
      <div className="flex w-max animate-scroll-ltr mt-8">
        {allClients2.map((client, index) => (
          <div
            key={`r2-${index}`}
            className="flex-shrink-0 w-64 h-36 mx-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-6"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-w-full max-h-12 object-contain"
              onError={(e) => (e.currentTarget.src = 'https://placehold.co/150x60/f00/fff?text=Logo+Error')}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
// --- END: INLINED COMPONENT 6 ---

// --- START: INLINED COMPONENT 7: CTASection ---
const CTASection: React.FC = () => (
  <section className="bg-black text-white">
    <div className="container mx-auto px-6 py-20 md:py-28">
      <div
        className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 p-12 md:p-16 lg:p-20 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      >
        <div className="absolute -top-1/3 -right-1/4 w-1/2 h-1/2 bg-[#b1ff32]/20 rounded-full blur-[150px] opacity-60 z-0" />
        <div className="absolute -bottom-1/3 -left-1/4 w-1/2 h-1/2 bg-[#b1ff32]/10 rounded-full blur-[120px] opacity-50 z-0" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's Build Your AI-Powered Future
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Ready to transform your business with intelligent automation and
            smarter applications? Our team is here to help you scale.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center justify-center px-8 py-4 bg-[#b1ff32] text-black font-bold rounded-full text-lg transition-transform duration-300 hover:scale-105"
          >
            Book a Free Call
            <CTAArrowRightIcon />
          </a>
        </div>
      </div>
    </div>
  </section>
);
// --- END: INLINED COMPONENT 7 ---


// --- MAIN PAGE COMPONENT ---
const ServicesPage: React.FC = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];

  return (
    <main>
      {/* 1. Page Header (The New Attractive Hero) */}
      <PageHeader
        title="Solutions Built with Intelligence"
        subtitle="Our Core Service Offerings"
        description="We combine cutting-edge AI, Machine Learning, and Full-Stack development expertise to create scalable digital products that drive business growth."
        breadcrumbs={breadcrumbs}
        emphasizeWords={[2, 3]} // Emphasize 'with Intelligence'
        button={{ text: "Get a Custom Quote", href: "/contact" }}
      />

      {/* 2. Services Grid (Inlined from Home/ServicesOverview.tsx) */}
      <CoreExpertiseSection />
      <ServicesOverview />
      <LeadGenForm />


      {/* 3. Core Expertise Grid (Inlined from Services/OurCoreExpertise.tsx) */}

      {/* 4. Working Process (Inlined from Home/WorkingProcess.tsx) */}
      {/* <WorkingProcessSection /> */}

      {/* 5. Clients Scroller (Inlined from Shared/OurClients.tsx) */}
      {/* <OurClientsSection /> */}

      {/* 6. Final Call to Action (Inlined from Home/CTA.tsx) */}
      <CTASection />

      {/* --- Global CSS for Animations (CRITICAL) --- */}
      <style jsx global>{`
        /* For WorkingProcess scroller */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        /* For OurClients scrollers */
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-rtl {
          animation: scroll-rtl 40s linear infinite;
        }
        .animate-scroll-ltr {
          animation: scroll-ltr 40s linear infinite;
        }
        .group-hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
};

export default ServicesPage;

