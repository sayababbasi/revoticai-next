// // "use client";
// // app/blogs/[slug]/page.tsx
// import { notFound } from "next/navigation";
// import { blogs } from "@/data/BlogDetail";

// interface Blog {
//   id: number;
//   slug: string;
//   title: string;
//   author: string;
//   category: string;
//   date: string;
//   image: string;
//   content?: string;
// }

// interface BlogPageParams {
//   slug: string;
// }

// // Generate static params for all blog slugs
// export async function generateStaticParams(): Promise<BlogPageParams[]> {
//   return blogs.map(({ slug }) => ({ slug }));
// }

// export default async function BlogDetailsPage({
//   params,
// }: {
//   params: Promise<BlogPageParams>;
// }) {
//   const { slug } = await params;

//   const post = blogs.find((b: Blog) => b.slug === slug);

//   if (!post) return notFound();

//   return (
//     <article className="bg-white text-gray-900 min-h-screen">
//       {/* --- Hero Section --- */}
//       <section className="relative bg-black text-white py-24">
//         <div className="absolute inset-0">
//           <img
//             src={post.image}
//             alt={post.title}
//             className="w-full h-full object-cover opacity-40"
//           />
//         </div>
//         <div className="relative z-10 container mx-auto px-6 text-center">
//           <p className="text-sm uppercase tracking-widest font-semibold text-[#b1ff32] mb-3">
//             {post.category}
//           </p>
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{post.title}</h1>
//           <div className="text-sm text-gray-300">
//             By <span className="font-semibold text-white">{post.author}</span> • {post.date}
//           </div>
//         </div>
//       </section>

//       {/* --- Blog Content --- */}
//       <section className="container mx-auto px-6 py-16 max-w-3xl">
//         <div className="prose prose-lg text-gray-800 leading-relaxed">
//           {post.content ? (
//             post.content.split("\n").map((line, idx) => (
//               <p key={idx}>{line}</p>
//             ))
//           ) : (
//             <p>
//               This blog is coming soon. Stay tuned for more updates and insights from Revotic AI.
//             </p>
//           )}
//         </div>
//       </section>
//     </article>
//   );
// }


// // // // import React from "react";
// // // // import { useParams } from "next/navigation";
// // // // import { motion } from "framer-motion";
// // // // import { blogPosts } from "@/components/sections/Blogs/data";
// // // // import Link from "next/link";

// // // // const BlogDetailsPage: React.FC = () => {
// // // //   const { slug } = useParams();

// // // //   // Find the blog based on the slug
// // // //   const post = blogPosts.find(
// // // //     (p) => p.link.split("/blogs/")[1] === slug
// // // //   );

// // // //   if (!post) {
// // // //     return (
// // // //       <div className="flex flex-col items-center justify-center h-screen text-center">
// // // //         <h1 className="text-3xl font-bold text-gray-800">Blog not found</h1>
// // // //         <p className="text-gray-500 mt-2">The article you’re looking for doesn’t exist.</p>
// // // //         <Link href="/blogs" className="mt-4 text-[#b1ff32] font-semibold hover:underline">
// // // //           ← Back to Blogs
// // // //         </Link>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <main className="bg-gray-50 min-h-screen">
// // // //       {/* --- Hero Section --- */}
// // // //       <section className="relative bg-black text-white py-24">
// // // //         <div className="absolute inset-0">
// // // //           <img
// // // //             src={post.image}
// // // //             alt={post.title}
// // // //             className="w-full h-full object-cover opacity-40"
// // // //           />
// // // //         </div>
// // // //         <div className="relative z-10 container mx-auto px-6 text-center">
// // // //           <p className="text-sm uppercase tracking-widest font-semibold text-[#b1ff32] mb-3">
// // // //             {post.category}
// // // //           </p>
// // // //           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{post.title}</h1>
// // // //           <div className="text-sm text-gray-300">
// // // //             By <span className="font-semibold text-white">{post.author}</span> • {post.date}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* --- Content Section --- */}
// // // //       <section className="container mx-auto px-6 py-16 max-w-3xl">
// // // //         <motion.div
// // // //           className="prose prose-lg text-gray-800 max-w-none"
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.6 }}
// // // //         >
// // // //           <p>
// // // //             Welcome to another deep dive from <strong>Revotic AI</strong>. In this article, we’ll explore
// // // //             how cutting-edge technologies like <strong>{post.category}</strong> are transforming
// // // //             businesses and reshaping industries in 2025 and beyond.
// // // //           </p>

// // // //           <p>
// // // //             At Revotic AI, we focus on real-world impact — from automation to web innovation.
// // // //             Our expert team, including {post.author}, has been leading solutions in
// // // //             {post.category.toLowerCase()} that redefine efficiency and scalability.
// // // //           </p>

// // // //           <h2>Key Insights</h2>
// // // //           <ul>
// // // //             <li>How AI and automation are driving innovation.</li>
// // // //             <li>Why modern web frameworks like Next.js matter.</li>
// // // //             <li>How design thinking improves user experience.</li>
// // // //           </ul>

// // // //           <p>
// // // //             Stay tuned for more insights from the Revotic AI team as we continue to push the
// // // //             boundaries of what’s possible with intelligent systems.
// // // //           </p>
// // // //         </motion.div>

// // // //         <div className="mt-12">
// // // //           <Link
// // // //             href="/blogs"
// // // //             className="inline-block bg-[#b1ff32] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#a4f12f] transition-all"
// // // //           >
// // // //             ← Back to All Blogs
// // // //           </Link>
// // // //         </div>
// // // //       </section>
// // // //     </main>
// // // //   );
// // // // };

// // // // export default BlogDetailsPage;

// // // "use client";
// // // import { notFound } from "next/navigation";
// // // import Image from "next/image";
// // // import { blogs } from "@/data/BlogDetails";


// // // interface BlogPageProps {
// // //   params: { slug: string };
// // // }

// // // export default function BlogPage({ params }: BlogPageProps) {
// // //   const blog = blogs.find((b) => b.slug === params.slug);

// // //   if (!blog) return notFound();

// // //   return (
// // //     <div className="max-w-4xl mx-auto py-16 px-6">
// // //       <Image
// // //         src={blog.image}
// // //         alt={blog.title}
// // //         width={1000}
// // //         height={600}
// // //         className="rounded-2xl mb-8"
// // //       />
// // //       <p className="text-sm text-gray-500 mb-2">
// // //         {blog.category} • {blog.date} • by {blog.author}
// // //       </p>
// // //       <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
// // //       <article
// // //         className="prose prose-lg text-gray-700 max-w-none"
// // //         dangerouslySetInnerHTML={{ __html: blog.content }}
// // //       />
// // //     </div>
// // //   );


// // // }
// // // // 


// // // app/blogs/[slug]/page.tsx
// // import { notFound } from "next/navigation";
// // import { blogsData } from "@/data/BlogDetail";

// // interface BlogPageParams {
// //   slug: string;
// // }

// // export async function generateStaticParams() {
// //   return blogsData.map((post) => ({
// //     slug: post.slug,
// //   }));
// // }

// // export default function BlogDetailsPage({
// //   params,
// // }: {
// //   params: BlogPageParams;
// // }) {
// //   const post = blogsData.find((p) => p.slug === params.slug);

// //   if (!post) return notFound();

// //   return (
// //     <article className="bg-white text-gray-900 min-h-screen">
// //       {/* --- Hero Section --- */}
// //       <section className="relative bg-black text-white py-24">
// //         <div className="absolute inset-0">
// //           <img
// //             src={post.image}
// //             alt={post.title}
// //             className="w-full h-full object-cover opacity-40"
// //           />
// //         </div>
// //         <div className="relative z-10 container mx-auto px-6 text-center">
// //           <p className="text-sm uppercase tracking-widest font-semibold text-[#b1ff32] mb-3">
// //             {post.category}
// //           </p>
// //           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
// //             {post.title}
// //           </h1>
// //           <div className="text-sm text-gray-300">
// //             By{" "}
// //             <span className="font-semibold text-white">{post.author}</span> •{" "}
// //             {post.date}
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- Blog Content --- */}
// //       <section className="container mx-auto px-6 py-16 max-w-3xl">
// //         <div className="prose prose-lg text-gray-800 leading-relaxed">
// //           {post.content ? (
// //             <p>{post.content}</p>
// //           ) : (
// //             <p>
// //               This blog is coming soon. Stay tuned for more updates and insights
// //               from Revotic AI.
// //             </p>
// //           )}
// //         </div>
// //       </section>
// //     </article>
// //   );
// // }


// // // app/blogs/[slug]/page.tsx
// // import { notFound } from "next/navigation";
// // import { blogs } from "@/data/BlogDetail"; // ✅ correct export name

// // interface Blog {
// //   id: number;
// //   slug: string;
// //   title: string;
// //   author: string;
// //   category: string;
// //   date: string;
// //   image: string;
// //   content?: string;
// // }

// // interface BlogPageParams {
// //   slug: string;
// // }

// // export async function generateStaticParams() {
// //   return blogs.map((post: Blog) => ({
// //     slug: post.slug,
// //   }));
// // }

// // export default function BlogDetailsPage({
// //   params,
// // }: {
// //   params: BlogPageParams;
// // }) {
// //   const post = blogs.find((p: Blog) => p.slug === params.slug);

// //   if (!post) return notFound();

// //   return (
// //     <article className="bg-white text-gray-900 min-h-screen">
// //       {/* --- Hero Section --- */}
// //       <section className="relative bg-black text-white py-24">
// //         <div className="absolute inset-0">
// //           <img
// //             src={post.image}
// //             alt={post.title}
// //             className="w-full h-full object-cover opacity-40"
// //           />
// //         </div>
// //         <div className="relative z-10 container mx-auto px-6 text-center">
// //           <p className="text-sm uppercase tracking-widest font-semibold text-[#b1ff32] mb-3">
// //             {post.category}
// //           </p>
// //           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
// //             {post.title}
// //           </h1>
// //           <div className="text-sm text-gray-300">
// //             By{" "}
// //             <span className="font-semibold text-white">{post.author}</span> •{" "}
// //             {post.date}
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- Blog Content --- */}
// //       <section className="container mx-auto px-6 py-16 max-w-3xl">
// //         <div className="prose prose-lg text-gray-800 leading-relaxed">
// //           {post.content ? (
// //             <p>{post.content}</p>
// //           ) : (
// //             <p>
// //               This blog is coming soon. Stay tuned for more updates and insights
// //               from Revotic AI.
// //             </p>
// //           )}
// //         </div>
// //       </section>
// //     </article>
// //   );
// // }



// app/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import { blogs, Blog } from "@/data/BlogDetail";

interface BlogPageParams {
  slug: string;
}

// Generate static params for all blog slugs
export async function generateStaticParams(): Promise<BlogPageParams[]> {
  return blogs.map(({ slug }) => ({ slug }));
}

// Blog details page
export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<BlogPageParams>;
}) {
  const { slug } = await params;

  const post = blogs.find((b: Blog) => b.slug === slug);

  if (!post) return notFound();

  return (
    <article className="bg-white text-gray-900 min-h-screen">
      {/* --- Hero Section --- */}
      <section className="relative bg-black text-white py-24">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest font-semibold text-[#b1ff32] mb-3">
            {post.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {post.title}
          </h1>
          <div className="text-sm text-gray-300">
            By <span className="font-semibold text-white">{post.author}</span> • {post.date}
          </div>
        </div>
      </section>

      {/* --- Blog Content --- */}
      <section className="container mx-auto px-6 py-16 max-w-3xl">
        {post.content ? (
          <div
            className="prose prose-lg text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : (
          <p className="text-gray-700">
            This blog is coming soon. Stay tuned for more updates and insights from Revotic AI.
          </p>
        )}
      </section>
    </article>
  );
}
