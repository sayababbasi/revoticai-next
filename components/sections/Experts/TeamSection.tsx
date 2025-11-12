"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Team data (Updated to match the image structure and provide more members)
const teamMembers = [
  {
    name: "SAYAB GULFARAZ",
    title: "Founder & Chief Executive Officer",
    image: "/images/experts/sayab.png", // Ensure this path is correct in your public folder
  },
  {
    name: "Hasaan Farooq",
    title: "Co-founder & Chief Information Officer",
    image: "/images/experts/Cofounder-bg.jpg", // Placeholder if you don't have an image
  },
  {
    name: "Maria Hanif",
    title: "Chief Technology Officer",
    image: "/images/experts/female.jpg", // Generic placeholder for now
  },
  {
    name: "Jahanzaib Ali",
    title: "Chief Operating Officer",
    image: "/images/experts/COO.jpg",
  },
  {
    name: "Asad Minhas",
    title: "Head of Sales",
    image: "/images/experts/Sales.jpg",
  },
  {
    name: "Anas Faisal",
    title: "Operational Manager",
    image: "/images/experts/OperationalManager.jpg",
  },
  {
    name: "Zain Ali",
    title: "Business Developer",
    image: "/images/experts/BusinessDeveloper.png",
  },
      {
    name: "Hassam Malik",
    title: "Business Developer",
    image: "/images/experts/fsd-dev1.jpg",
  },
    {
    name: "Zawad Ahmad",
    title: "Sales Executive",
    image: "/images/experts/bd.png",
  },
  {
    name: "Subhan Ali",
    title: "HR Manager",
    image: "/images/experts/male.png",
  },
    {
    name: "Zubiya Khan",
    title: "Team Leader & Shift Incharge",
    image: "/images/experts/female.jpg",
  },
    {
    name: "Nimra Ansari",
    title: "Project Supervisor",
    image: "/images/experts/female.jpg",
  },
  {
    name: "Muhammad Hamza Ali",
    title: "AI Research Analyst",
    image: "/images/experts/researcher.jpeg",
  },
    {
    name: "Arfeen Malik",
    title: "Full Stack Developer",
    image: "/images/experts/arfeen-fsd-dev.jpeg",
  },
    {
    name: "Hammad Raza",
    title: "Full Stack Developer",
    image: "/images/experts/fsd-dev-2.png",
  },
      {
    name: "Muhammad Saleh",
    title: "AI Developer",
    image: "/images/experts/male.png",
  },
        {
    name: "Zahid Hussain",
    title: "DevOps Engineer",
    image: "/images/experts/male.png",
  },
        {
    name: "Muhammad Ahad",
    title: "Graphic Designer & Video Editor",
    image: "/images/experts/male.png",
  },
  
        {
    name: "Uzair Ahmad",
    title: "Quality Assurance",
    image: "/images/experts/male.png",
  },
  
  
  
  // Add more members as needed, using generic placeholders for now if no images
  // { name: "Expert 10", title: "Role", image: "/images/experts/test.png" },
  // { name: "Expert 11", title: "Role", image: "/images/experts/test.png" },
  // { name: "Expert 12", title: "Role", image: "/images/experts/test.png" },
  //   { name: "Expert 13", title: "Role", image: "/images/experts/test.png" },
  //     { name: "Expert 14", title: "Role", image: "/images/experts/test.png" },
  //       { name: "Expert 15", title: "Role", image: "/images/experts/test.png" },
  //         { name: "Expert 16", title: "Role", image: "/images/experts/test.png" },
  //           { name: "Expert 17", title: "Role", image: "/images/experts/test.png" },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const TeamSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2 
          className="text-center text-4xl md:text-5xl font-extrabold text-black mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Experts
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-12 gap-x-8 justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 border-2 border-transparent transition-all duration-300 hover:border-[#b1ff32]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to generic image based on type if primary fails
                    e.currentTarget.src = member.name.includes("Maria Hanif") || member.name.includes("Expert 10") || member.name.includes("Expert 12")
                      ? '/images/experts/female' // Generic female placeholder
                      : '/images/experts/male'; // Generic male placeholder
                    e.currentTarget.onerror = null; // Prevent infinite loops
                  }}
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 italic">{member.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
