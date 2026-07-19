import { notFound } from "next/navigation";
import { blogs, Blog } from "@/lib/data/blog";
import { ArrowLeft, Clock, User, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { HeroCTA, SocialProof, WhyChooseUs, TrustBadges, Testimonials, CTABanner, LeadCaptureForm, FAQSection, FinalSales, Newsletter } from "@/components/sections/Blogs/LeadGen/ServerComponents";
import { StickyCTA, FloatingContact, ExitIntent } from "@/components/sections/Blogs/LeadGen/ClientComponents";
import React from "react";

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
  const post = blogs.find((b: Blog) => b.slug === slug);

  if (!post) return notFound();

  const relatedBlogs = blogs.filter(b => b.slug !== slug).slice(0, 3);
  const contentParts = post.content.split('<h2>');

  return (
    <article className="bg-[#fcfcfc] text-black min-h-screen relative">
      <ExitIntent />
      <FloatingContact />
      <StickyCTA />

      {/* --- Pre-Article Lead Gen Hero --- */}
      <HeroCTA />
      
      {/* --- Premium Hero Section (STAYS DARK) --- */}
      <section className="relative bg-black pt-16 pb-24 md:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#b1ff32]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
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

      {/* --- Featured Image --- */}
      <section className="container mx-auto px-6 -translate-y-12 relative z-20">
        <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] md:h-[600px] object-cover"
          />
        </div>
      </section>

      {/* --- Blog Content with Injected CTAs --- */}
      <section className="container mx-auto px-6 py-12 max-w-4xl relative z-10">
        {contentParts.map((part, idx) => (
          <React.Fragment key={idx}>
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium
              prose-headings:text-black prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
              prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
              prose-p:mb-8 prose-strong:text-black prose-strong:font-black
              prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2
              prose-img:rounded-[2rem] prose-img:border prose-img:border-gray-100 shadow-sm"
              dangerouslySetInnerHTML={{ __html: (idx > 0 ? '<h2>' : '') + part }}
            />
            {/* Inject CTAs dynamically based on section breaks */}
            {idx === 1 && (
              <CTABanner 
                title="Ready to modernize your business?" 
                subtitle="Let's build your AI-powered operations today." 
                bg="bg-black" 
                text="text-white" 
              />
            )}
            {idx === 3 && (
              <CTABanner 
                title="Want similar results for your company?" 
                subtitle="Talk with our experts to find the perfect automation strategy." 
                bg="bg-[#b1ff32]" 
                text="text-black" 
              />
            )}
            {idx === 5 && (
              <CTABanner 
                title="Stop wasting time on manual tasks" 
                subtitle="Book your personalized demo and see the future of your workflow." 
                bg="bg-gray-100" 
                text="text-black" 
              />
            )}
          </React.Fragment>
        ))}
      </section>

      {/* --- Lead Gen Ecosystem (Wrapped around the content) --- */}
      <SocialProof />
      <WhyChooseUs />
      <Testimonials />
      <TrustBadges />
      <FAQSection />
      
      {/* --- Internal Links & Resources --- */}
      <section className="bg-[#fcfcfc] py-20 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black mb-2">Keep Exploring</h3>
              <p className="text-gray-500">More insights on AI and automation.</p>
            </div>
            <Link href="/blogs" className="flex items-center text-sm font-black uppercase tracking-widest hover:text-[#b1ff32] transition-colors">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBlogs.map(blog => (
              <Link href={`/blogs/${blog.slug}`} key={blog.slug} className="group block">
                <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#b1ff32] mb-3 bg-black px-3 py-1 inline-block rounded-full">
                  {blog.category}
                </div>
                <h4 className="text-xl font-black uppercase leading-tight mb-3 group-hover:text-[#b1ff32] transition-colors">{blog.title}</h4>
                <p className="text-sm text-gray-500 font-medium line-clamp-2" dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 150) + '...' }}></p>
              </Link>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/products" className="p-6 bg-white border border-gray-100 rounded-2xl hover:border-black text-center transition-colors group">
              <span className="block text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-black">Products</span>
            </Link>
            <Link href="/pricing" className="p-6 bg-white border border-gray-100 rounded-2xl hover:border-black text-center transition-colors group">
              <span className="block text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-black">Pricing</span>
            </Link>
            <Link href="/case-studies" className="p-6 bg-white border border-gray-100 rounded-2xl hover:border-black text-center transition-colors group">
              <span className="block text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-black">Case Studies</span>
            </Link>
            <Link href="/about" className="p-6 bg-white border border-gray-100 rounded-2xl hover:border-black text-center transition-colors group">
              <span className="block text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-black">About Us</span>
            </Link>
          </div>
        </div>
      </section>

      <LeadCaptureForm />
      <FinalSales />
      <Newsletter />
    </article>
  );
}
