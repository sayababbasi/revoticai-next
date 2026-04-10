import { Metadata } from "next";
import BlogPageHeader from "@/components/sections/Blogs/BlogsHeaderPage";
import BlogGrid from "@/components/sections/Blogs/BlogGrid";
import BlogCTA from "@/components/sections/Blogs/BlogCTA";

export const metadata: Metadata = {
  title: "Blog | RevoticAI - AI, Automation & Tech Insights",
  description: "Read tutorials, case studies, and insights on AI automation, machine learning, web development, and building AI SaaS products.",
  keywords: [
    'AI blog', 'machine learning blog', 'automation tutorials', 'AI SaaS blog',
    'web development blog', 'Next.js tutorials', 'FastAPI tutorials',
    'RAG pipeline blog', 'AI business automation', 'RevoticAI insights'
  ],
  openGraph: {
    title: 'Blog | RevoticAI - AI & Tech Tutorials',
    description: 'Expert insights on AI automation, machine learning, and software development.',
    images: [{ url: 'https://revoticai.com/og-image.jpg', width: 1200, height: 630 }],
  }
};

export default function BlogsPage() {
  return (
    <main className="bg-black min-h-screen">
      <BlogPageHeader />

      <BlogGrid />

      {/* Final CTA Section */}
      <BlogCTA />
    </main>
  );
}
