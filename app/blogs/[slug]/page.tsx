
import { notFound } from "next/navigation";
import { blogs, BlogPost } from "@/lib/data/blog";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import Link from "next/link";
import BlogCTA from "@/components/sections/Blogs/BlogCTA";

interface BlogPageParams {
  slug: string;
}

export async function generateStaticParams(): Promise<BlogPageParams[]> {
  return blogs.map(({ slug }) => ({ slug }));
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<BlogPageParams>;
}) {
  const { slug } = await params;
  const post = blogs.find((b: BlogPost) => b.slug === slug);

  if (!post) return notFound();

  return (
    <article className="bg-[#fcfcfc] text-black min-h-screen">
      {/* --- Premium Hero Section (STAYS DARK) --- */}
      <section className="relative bg-black pt-[80px] pb-24 md:pb-32 overflow-hidden border-b border-white/5">
        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#b1ff32]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/blogs" 
              className="inline-flex items-center text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] hover:text-[#b1ff32] transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>

            <div className="mb-8">
              <span className="px-4 py-1.5 bg-[#b1ff32] text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-[0.95]">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-[10px] font-black text-gray-500 uppercase tracking-widest">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-[#b1ff32]" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-[#b1ff32]" />
                {post.date}
              </div>
              {post.readTime && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-[#b1ff32]" />
                  {post.readTime}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- Featured Image (Transition to Light) --- */}
      <section className="container mx-auto px-6 -translate-y-12 relative z-20">
        <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] md:h-[600px] object-cover"
          />
        </div>
      </section>

      {/* --- Blog Content (LIGHT THEME) --- */}
      <section className="container mx-auto px-6 py-12 pb-32 max-w-4xl relative z-10">
        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium
          prose-headings:text-black prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
          prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
          prose-p:mb-8 prose-strong:text-black prose-strong:font-black
          prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2
          prose-img:rounded-[2rem] prose-img:border prose-img:border-gray-100 shadow-sm"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      {/* Final CTA Section (BACK TO DARK) */}
      <BlogCTA />
    </article>
  );
}
