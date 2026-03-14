

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
