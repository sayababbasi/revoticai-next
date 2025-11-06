// "use client";

import { blogs } from "@/data/BlogDetail";
import BlogCard from "@/components/cards/BlogCard";

export default function BlogsPage() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold mb-12 text-center">Our Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <BlogCard
            key={post.id}
            slug={post.slug}
            image={post.image}
            category={post.category}
            date={post.date}
            title={post.title}
            description={post.content.slice(0, 120) + "..."}
          />
        ))}
      </div>
    </div>
  );
}

// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import BlogPageHeader from "@/components/sections/Blogs/BlogsHeaderPage";
// import BlogCard from "@/components/sections/Blogs/BlogCard";
// import { blogPosts, categories } from "@/components/sections/Blogs/data";

// const BlogPage: React.FC = () => {
//   const [activeFilter, setActiveFilter] = useState("All");

//   const filteredPosts = blogPosts.filter(
//     (post) => activeFilter === "All" || post.category === activeFilter
//   );

//   return (
//     <main>
//       <BlogPageHeader />

//       <section className="bg-gray-50 py-20 md:py-28">
//         <div className="container mx-auto px-6">
//           {/* --- Category Filters --- */}
//           <div className="flex flex-wrap justify-center gap-3 mb-12">
//             {categories.map((cat) => (
//               <button
//                 key={cat.filter}
//                 onClick={() => setActiveFilter(cat.filter)}
//                 className={`flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
//                   activeFilter === cat.filter
//                     ? "bg-[#b1ff32] text-black shadow-md"
//                     : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
//                 }`}
//               >
//                 <span className="mr-2">{cat.icon}</span>
//                 {cat.name}
//               </button>
//             ))}
//           </div>

//           {/* --- Blog Grid --- */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             layout
//           >
//             <AnimatePresence>
//               {filteredPosts.map((post) => (
//                 <BlogCard key={post.id} post={post} />
//               ))}
//             </AnimatePresence>
//           </motion.div>

//           {/* --- Empty State --- */}
//           {filteredPosts.length === 0 && (
//             <motion.div
//               className="text-center py-10 text-gray-500"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               <p className="text-lg">
//                 No posts found for "{activeFilter}". Try another category!
//               </p>
//             </motion.div>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default BlogPage;


// // import BlogPageHeader from "@/components/sections/Blogs/BlogsHeaderPage";
// // // import BlogCard from "@/components/sections/Blogs/";

// // export default function BlogPage() {
// //   const breadcrumbs = [
// //     { name: "Home", href: "/" },
// //     { name: "Blog", href: "/blogs" },
// //   ];

// //   return (
// //     <BlogPageHeader
// //       title="Revotic AI Insights"
// //       subtitle="Stay updated with the latest trends, strategies, and case studies in AI, automation, and full-stack development."
// //       breadcrumbs={breadcrumbs}
// //     />
// //   );
// // }



// // "use client";

// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // // --- START: INLINED ICONS (to prevent build errors) ---
// // const ArrowRightIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
// //     <line x1="5" y1="8" x2="15" y2="8" />
// //     <polyline points="10 3 15 8 10 13" />
// //   </svg>
// // );
// // const UserIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
// //     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
// //     <circle cx="12" cy="7" r="4" />
// //   </svg>
// // );
// // const CalendarIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
// //     <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
// //     <line x1="16" y1="2" x2="16" y2="6" />
// //     <line x1="8" y1="2" x2="8" y2="6" />
// //     <line x1="3" y1="10" x2="21" y2="10" />
// //   </svg>
// // );
// // const LayersIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
// //     <polygon points="12 2 2 7 12 12 22 7 12 2" />
// //     <polyline points="2 12 12 17 22 12" />
// //     <polyline points="2 17 12 22 22 17" />
// //   </svg>
// // );
// // const BrainCircuitIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
// //     <path d="M12 4.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 4.5Z" />
// //     <path d="M12 13.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 13.5Z" />
// //     <path d="M12 22.5a2.5 2.5 0 0 1-4.95.76 2.5 2.5 0 0 1-1.32.18 2.5 2.5 0 0 1-4.01-3.26 2.5 2.5 0 0 1 .4-4.54 2.5 2.5 0 0 1 4.54.4 2.5 2.5 0 0 1 3.26-4.01 2.5 2.5 0 0 1 .18-1.32A2.5 2.5 0 0 1 12 22.5Z" />
// //     <path d="M17 11.5a2.5 2.5 0 0 1 0 5" /><path d="M7 11.5a2.5 2.5 0 0 1 0 5" />
// //   </svg>
// // );
// // const CodeIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
// //     <polyline points="16 18 22 12 16 6" />
// //     <polyline points="8 6 2 12 8 18" />
// //   </svg>
// // );
// // const PaletteIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
// //     <circle cx="13.5" cy="6.5" r="2.5" />
// //     <circle cx="17.5" cy="10.5" r="2.5" />
// //     <circle cx="15.5" cy="15.5" r="2.5" />
// //     <circle cx="10.5" cy="17.5" r="2.5" />
// //     <circle cx="6.5" cy="13.5" r="2.5" />
// //     <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.83-.13 2.69-.38" />
// //   </svg>
// // );
// // // --- END: INLINED ICONS ---

// // // --- START: INLINED ANIMATION VARIANTS ---
// // const itemVariants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // };
// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.1,
// //     },
// //   },
// // };
// // // --- END: INLINED ANIMATION VARIANTS ---

// // // --- START: INLINED DATA ---
// // const blogPosts = [
// //   {
// //     id: 1,
// //     title: "The Future of Generative AI in Business Automation",
// //     category: "AI & ML",
// //     author: "Dr. Ayesha Khan",
// //     date: "Oct 28, 2025",
// //     image: "https://images.unsplash.com/photo-1677756128695-af1de72c5057?auto=format&fit=crop&w=600&q=80",
// //     link: "/blog/future-of-gen-ai",
// //   },
// //   {
// //     id: 2,
// //     title: "Why Your Next Web App Should Be AI-Powered",
// //     category: "Web Development",
// //     author: "Omar Sharif",
// //     date: "Oct 22, 2025",
// //     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
// //     link: "/blog/ai-powered-web-apps",
// //   },
// //   {
// //     id: 3,
// //     title: "A Deep Dive into Full-Stack Development Trends for 2026",
// //     category: "Web Development",
// //     author: "Maria Hanif",
// //     date: "Oct 15, 2025",
// //     image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
// //     link: "/blog/full-stack-trends",
// //   },
// //   {
// //     id: 4,
// //     title: "Unlocking Insights: The Power of Personalized AI Dashboards",
// //     category: "Data & Analytics",
// //     author: "David Kim",
// //     date: "Oct 10, 2025",
// //     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
// //     link: "/blog/ai-dashboards",
// //   },
// //   {
// //     id: 5,
// //     title: "RPA vs. AI Automation: Understanding the Difference",
// //     category: "AI & ML",
// //     author: "Sara Ali",
// //     date: "Oct 05, 2025",
// //     image: "https://images.unsplash.com/photo-1696253920790-def4d6c38c82?auto=format&fit=crop&w=600&q=80",
// //     link: "/blog/rpa-vs-ai",
// //   },
// //   {
// //     id: 6,
// //     title: "UI/UX Design Principles for Artificial Intelligence Applications",
// //     category: "Design",
// //     author: "Muneeb Akhtar",
// //     date: "Sep 28, 2025",
// //     image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80",
// //     link: "/blog/ui-ux-for-ai",
// //   },
// //   {
// //     id: 7,
// //     title: "Case Study: 40% Manual Data Entry Reduction for FinTech Client",
// //     category: "Automation",
// //     author: "Asad Mirhas",
// //     date: "Sep 20, 2025",
// //     image: "https://images.unsplash.com/photo-1556740738-b6a63e2775df?auto=format&fit=crop&w=600&q=80",
// //     link: "/blog/case-study-fintech",
// //   },
// //   {
// //     id: 8,
// //     title: "Building Scalable SaaS Products with Next.js and Python",
// //     category: "Web Development",
// //     author: "Jahanzaib Ali",
// //     date: "Sep 12, 2025",
// //     image: "https://images.unsplash.com/photo-1516116216624-53e6973bea12?auto=format&fit=crop&w=600&q=80",
// //     link: "/blog/saas-nextjs-python",
// //   },
// // ];

// // const categories = [
// //   { name: 'All', icon: <LayersIcon />, filter: 'All' },
// //   { name: 'AI & ML', icon: <BrainCircuitIcon />, filter: 'AI & ML' },
// //   { name: 'Web Development', icon: <CodeIcon />, filter: 'Web Development' },
// //   { name: 'Design', icon: <PaletteIcon />, filter: 'Design' },
// // ];
// // // --- END: INLINED DATA ---

// // // --- START: INLINED COMPONENT 1: BlogPageHeader ---
// // const BlogPageHeader: React.FC = () => {
// //   const breadcrumbs = [
// //     { name: "Home", href: "/" },
// //     { name: "Blog", href: "/blog" },
// //   ];
// //   return (
// //     <section className="bg-black text-white pt-[150px] pb-16 md:pb-24 overflow-hidden">
// //       <motion.div
// //         className="container mx-auto px-6 text-center"
// //         initial="hidden"
// //         animate="visible"
// //         variants={containerVariants}
// //       >
// //         <motion.p
// //           className="text-sm uppercase tracking-widest font-semibold text-[#b1ff32] mb-3"
// //           variants={itemVariants}
// //         >
// //           Our Blog
// //         </motion.p>
// //         <motion.h1
// //           className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
// //           variants={itemVariants}
// //         >
// //           Revotic AI Insights
// //         </motion.h1>
// //         <motion.p
// //           className="text-lg text-gray-400 max-w-2xl mx-auto"
// //           variants={itemVariants}
// //         >
// //           Stay updated with the latest trends, strategies, and case studies in
// //           AI, automation, and full-stack development.
// //         </motion.p>
// //         <motion.nav
// //           className="text-sm text-gray-400 flex justify-center space-x-2 mt-6"
// //           variants={itemVariants}
// //         >
// //           {breadcrumbs.map((item, index) => (
// //             <React.Fragment key={item.name}>
// //               <a href={item.href} className="hover:text-[#b1ff32] transition-colors">
// //                 {item.name}
// //               </a>
// //               {index < breadcrumbs.length - 1 && <span className="text-gray-600">/</span>}
// //             </React.Fragment>
// //           ))}
// //         </motion.nav>
// //       </motion.div>
// //     </section>
// //   );
// // };
// // // --- END: INLINED COMPONENT 1 ---

// // // --- START: INLINED COMPONENT 2: BlogCard ---
// // interface BlogPost {
// //   id: number;
// //   title: string;
// //   category: string;
// //   author: string;
// //   date: string;
// //   image: string;
// //   link: string;
// // }

// // const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
// //   <motion.a
// //     href={post.link}
// //     className="group block bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transform hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
// //     variants={itemVariants}
// //     layout // This prop animates the card's position when filters change
// //   >
// //     <div className="h-56 overflow-hidden">
// //       <img
// //         src={post.image}
// //         alt={post.title}
// //         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //         onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/1a1a1a/b1ff32?text=Blog+Post')}
// //       />
// //     </div>
// //     <div className="p-6">
// //       <p className="text-xs uppercase tracking-wider font-semibold text-[#b1ff32] mb-2">
// //         {post.category}
// //       </p>
// //       <h3 className="text-xl font-bold text-black mb-3 h-14 overflow-hidden">
// //         {post.title}
// //       </h3>
// //       <div className="flex justify-between text-xs text-gray-500 mb-4 border-t border-b border-gray-100 py-3">
// //         <span className="flex items-center">
// //           <UserIcon /> {post.author}
// //         </span>
// //         <span className="flex items-center">
// //           <CalendarIcon /> {post.date}
// //         </span>
// //       </div>
// //       <span className="inline-flex items-center text-sm font-semibold text-black group-hover:text-[#b1ff32] transition-colors">
// //         Read More <ArrowRightIcon />
// //       </span>
// //     </div>
// //   </motion.a>
// // );
// // // --- END: INLINED COMPONENT 2 ---

// // // --- START: MAIN BLOG PAGE COMPONENT ---
// // const BlogPage: React.FC = () => {
// //   const [activeFilter, setActiveFilter] = useState('All');

// //   const filteredPosts = blogPosts.filter(post => 
// //     activeFilter === 'All' || post.category === activeFilter
// //   );

// //   return (
// //     <main>
// //       {/* 1. Blog Page Header */}
// //       <BlogPageHeader />

// //       {/* 2. Blog Grid Section */}
// //       <section className="bg-gray-50 py-20 md:py-28">
// //         <div className="container mx-auto px-6">
// //           {/* --- Category Filters / Tabs --- */}
// //           <div className="flex flex-wrap justify-center gap-3 mb-12">
// //             {categories.map(cat => (
// //               <button
// //                 key={cat.filter}
// //                 onClick={() => setActiveFilter(cat.filter)}
// //                 className={`flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
// //                   activeFilter === cat.filter
// //                     ? 'bg-[#b1ff32] text-black shadow-md'
// //                     : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
// //                 }`}
// //               >
// //                 {cat.icon}
// //                 {cat.name}
// //               </button>
// //             ))}
// //           </div>

// //           {/* --- Blog Grid (Max 3 Cols) --- */}
// //           <motion.div 
// //             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// //             layout // This enables the layout animation for filtering
// //           >
// //             <AnimatePresence>
// //               {filteredPosts.map(post => (
// //                 <BlogCard key={post.id} post={post} />
// //               ))}
// //             </AnimatePresence>
// //           </motion.div>

// //           {/* --- Empty State --- */}
// //           {filteredPosts.length === 0 && (
// //             <motion.div 
// //               className="text-center py-10 text-gray-500"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //             >
// //               <p className='text-lg'>No posts found for "{activeFilter}". Try another category!</p>
// //             </motion.div>
// //           )}
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // export default BlogPage;
