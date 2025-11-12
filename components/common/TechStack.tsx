// "use client";

// import React from "react";
// // Using lucide-react icons for generic concepts
// import { BrainCircuit, Layers, Zap, Database, LayoutPanelTop, Bot, FileCode, Smartphone, Code } from "lucide-react";

// // --- Tech Stack Data ---
// // Inlined to prevent any 'Could not resolve' build errors
// const techStack = [
//   {
//     icon: <BrainCircuit size={36} className="text-[#b1ff32]" />,
//     title: "AI/ML/GenAI",
//     subtitle: "Artificial Intelligence",
//   },
//   {
//     icon: <Layers size={36} className="text-blue-500" />,
//     title: "Full Stack Web",
//     subtitle: "Web Development",
//   },
//   {
//     icon: <Zap size={36} className="text-purple-500" />,
//     title: "Automation",
//     subtitle: "AI-Powered Solution",
//   },
//   {
//     icon: <Database size={36} className="text-green-500" />,
//     title: "SAAS",
//     subtitle: "AI-Powered SaaS",
//   },
//   {
//     icon: <LayoutPanelTop size={36} className="text-cyan-500" />,
//     title: "Dashboards",
//     subtitle: "Smart AI Dashboards",
//   },
//   // --- Inline SVG for Python ---
//   {
//     icon: (
//       <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#306998" />
//         <path d="M15 9H9v2h3v2H9v2h6v-2h-3v-2h3z" fill="#FFD43B" />
//         <path d="M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#FFD43B" style={{ transform: "rotate(180deg)", transformOrigin: "center" }} />
//       </svg>
//     ),
//     title: "Python",
//     subtitle: "Python Development",
//   },
//   // --- Inline SVG for Flutter ---
//   {
//     icon: (
//       <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M14.5 9.5l-4-4L2 14l4 4 8.5-8.5-1-1zm-2 2l-4 4-1-1 4-4 1 1z" fill="#027DFD" />
//         <path d="M12.5 11.5l-4 4L10 17l4-4-1.5-1.5z" fill="#027DFD" />
//         <path d="M12.5 11.5l4-4 1.5 1.5-4 4-1.5-1.5z" fill="#40C4FF" />
//       </svg>
//     ),
//     title: "Flutter",
//     subtitle: "App Development",
//   },
//   {
//     icon: <Bot size={36} className="text-red-500" />,
//     title: "Python Flask",
//     subtitle: "Python Development",
//   },
//   // --- Inline SVG for React ---
//   {
//     icon: (
//       <svg width="36" height="36" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
//         <g stroke="#61DAFB" strokeWidth="1" fill="none">
//           <ellipse rx="11" ry="4.2" />
//           <ellipse rx="11" ry="4.2" transform="rotate(60)" />
//           <ellipse rx="11" ry="4.2" transform="rotate(120)" />
//         </g>
//       </svg>
//     ),
//     title: "React.js",
//     subtitle: "Web Development",
//   },
//   // --- Inline SVG for HTML5 ---
//   {
//     icon: (
//       <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M3 3h18l-1.636 18.35L12 22.5l-7.364-1.15L3 3zm15.364 4H5.636l.727 8.182h11.272l.455-5.091H7.818v-2h9.09l.456-1.091z" fill="#E44D26" />
//       </svg>
//     ),
//     title: "HTML5 Used",
//     subtitle: "Web Development",
//   },
//   // --- Inline SVG for Bootstrap ---
//   {
//     icon: (
//       <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M3 3h18v18H3V3z" fill="#7952B3" />
//         <path d="M7.5 15.5h6v-1h-6v1zm0-3h6v-1h-6v1zm0-3h6v-1h-6v1zm-2 6h10V7H5.5v9.5z" fill="#fff" />
//       </svg>
//     ),
//     title: "Bootstrap 5",
//     subtitle: "Web Development",
//   },
//   // --- Inline SVG for CSS3 ---
//   {
//     icon: (
//       <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M3 3h18l-1.636 18.35L12 22.5l-7.364-1.15L3 3zm15.364 4H5.636l.364 4.091h11.999l-.455 5.091-4.09 1.136-4.09-1.136-.273-3.091H5.91l.545 6.182L12 19.5l5.545-1.545L18.364 7z" fill="#1572B6" />
//       </svg>
//     ),
//     title: "CSS 3",
//     subtitle: "Web Development",
//   },
// ];

// // --- Tech Stack Card Sub-Component ---
// interface TechCardProps {
//   icon: React.ReactNode;
//   title: string;
//   subtitle: string;
// }

// const TechCard: React.FC<TechCardProps> = ({ icon, title, subtitle }) => (
//   <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
//     <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
//       {icon}
//     </div>
//     <h3 className="text-lg font-bold text-black">{title}</h3>
//     <p className="text-sm text-gray-500">{subtitle}</p>
//   </div>
// );

// // --- Main Tech Stack Section ---
// const TechStack: React.FC = () => {
//   return (
//     <section className="bg-white py-20 md:py-28">
//       <div className="container mx-auto px-6">
//         {/* --- Section Header (New Heading) --- */}
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <p className="text-sm uppercase tracking-wider font-semibold mb-3">
//             <span className="bg-[#b1ff32] text-black px-2 py-1 rounded">
//               Powerful Features
//             </span>
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
//             Our Core Technology Stack
//           </h2>
//           <p className="text-lg text-gray-600">
//             We use a modern, scalable, and secure stack to build high-performance
//             AI-powered applications for your business.
//           </p>
//         </div>

//         {/* --- Tech Stack Grid --- */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//           {techStack.map((tech, index) => (
//             <TechCard
//               key={index}
//               icon={tech.icon}
//               title={tech.title}
//               subtitle={tech.subtitle}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStack;


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
              Powerful Features
            </span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Core Technology Stack
          </h2>
          <p className="text-lg text-gray-600">
            We use a modern, scalable, and secure stack to build high-performance AI-powered applications.
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
