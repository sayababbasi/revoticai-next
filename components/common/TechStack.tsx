

"use client";

import React from "react";

// --- Tech Stack Data with Images ---
const techStack = [
  {
    imgSrc: "/images/tech/ai-automation.webp",
    title: "AI/ML/GenAI",
    subtitle: "Artificial Intelligence",
  },
  {
    imgSrc: "/images/tech/fsd1.png",
    title: "Full Stack Web",
    subtitle: "Web Development",
  },
  {
    imgSrc: "/images/tech/automation.webp",
    title: "Automation",
    subtitle: "AI-Powered Solution",
  },
  {
    imgSrc: "/images/tech/saas-icon.png",
    title: "SaaS",
    subtitle: "AI-Powered SaaS",
  },
  {
    imgSrc: "/images/tech/ai_dashboard.png",
    title: "Dashboards",
    subtitle: "Smart AI Dashboards",
  },
  {
    imgSrc: "/images/tech/ai-agent.jpg",
    title: "AI Agents",
    subtitle: "Intelligent Automation",
  },
  {
    imgSrc: "/images/tech/chatbot.png",
    title: "Chatbots",
    subtitle: "Conversational AI",
  },
  {
    imgSrc: "/images/tech/Python_logo_icon.png",
    title: "Python",
    subtitle: "Python Development",
  },
  {
    imgSrc: "/images/tech/flutter.png",
    title: "Flutter",
    subtitle: "App Development",
  },
  {
    imgSrc: "/images/tech/flask.webp",
    title: "Python Flask",
    subtitle: "Python Development",
  },
  {
    imgSrc: "/images/tech/react.png",
    title: "React.js",
    subtitle: "Web Development",
  },
  {
    imgSrc: "/images/tech/next.png",
    title: "Next.js",
    subtitle: "React Framework",
  },
  {
    imgSrc: "/images/tech/node.svg",
    title: "Node.js",
    subtitle: "Backend Development",
  },
  {
    imgSrc: "/images/tech/express.jpeg",
    title: "Express.js",
    subtitle: "Server Framework",
  },
  {
    imgSrc: "/images/tech/Laravel.svg.png",
    title: "Laravel",
    subtitle: "PHP Framework",
  },
  {
    imgSrc: "/images/tech/html5.png",
    title: "HTML5",
    subtitle: "Web Development",
  },
  {
    imgSrc: "/images/tech/bootstrap.png",
    title: "Bootstrap 5",
    subtitle: "Web Development",
  },
  {
    imgSrc: "/images/tech/css-4.svg",
    title: "CSS3",
    subtitle: "Web Development",
  },
  // --- New Items ---



];

// --- Tech Card Component ---
interface TechCardProps {
  imgSrc: string;
  title: string;
  subtitle: string;
}

const TechCard: React.FC<TechCardProps> = ({ imgSrc, title, subtitle }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 mb-4">
      <img src={imgSrc} alt={title} className="w-16 h-18 object-contain" />
    </div>
    <h3 className="text-lg font-bold text-black">{title}</h3>
    <p className="text-sm text-gray-500">{subtitle}</p>
  </div>
);

// --- Tech Stack Section ---
const TechStack: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-wider font-semibold mb-3">
            <span className="bg-[#b1ff32] text-black px-2 py-1 rounded">
              Our Technology
            </span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Built with Industry-Leading Technology
          </h2>
          <p className="text-lg text-gray-600">
            Enterprise-grade tools and frameworks powering every solution we deliver.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <TechCard
              key={index}
              imgSrc={tech.imgSrc}
              title={tech.title}
              subtitle={tech.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
