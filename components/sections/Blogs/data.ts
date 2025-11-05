import { ReactNode } from "react";

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  link: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Generative AI in Business Automation",
    category: "AI & ML",
    author: "Dr. Ayesha Khan",
    date: "Oct 28, 2025",
    image:
      "/images/product/frblog.jpg",
    link: "/blog/future-of-gen-ai",
  },
  {
    id: 2,
    title: "Why Your Next Web App Should Be AI-Powered",
    category: "Web Development",
    author: "Omar Sharif",
    date: "Oct 22, 2025",
    image:
      "/images/product/frblog6.jpg",
    link: "/blog/ai-powered-web-apps",
  },
  {
    id: 3,
    title: "Top 10 AI Tools Every Developer Should Know in 2025",
    category: "AI & ML",
    author: "Sara Malik",
    date: "Oct 18, 2025",
    image:
      "/images/product/frblog3.jpg",
    link: "/blog/top-ai-tools-2025",
  },
  {
    id: 4,
    title: "Design Systems That Drive Conversions: A UI/UX Guide",
    category: "Design",
    author: "Ali Raza",
    date: "Oct 14, 2025",
    image:
      "/images/product/frblog4.jpg",
    link: "/blog/ui-ux-design-systems",
  },
  {
    id: 5,
    title: "Building Smart Chatbots with RAG and LLMs",
    category: "AI & ML",
    author: "Hamza Ahmed",
    date: "Oct 10, 2025",
    image:
      "/images/product/frblog5.jpg",
    link: "/blog/rag-chatbot-guide",
  },
  {
    id: 6,
    title: "From Static to Dynamic: Modern Web Development with Next.js",
    category: "Web Development",
    author: "Marium Tariq",
    date: "Oct 5, 2025",
    image:
      "/images/product/frblog2.jpg",
    link: "/blog/nextjs-modern-web",
  },
  {
    id: 7,
    title: "Automation in 2025: How Businesses Are Saving Time & Money",
    category: "Automation",
    author: "Zain Ul Abideen",
    date: "Oct 2, 2025",
    image:
      "/images/product/frblog7.jpg",
    link: "/blog/business-automation-2025",
  },
  {
    id: 8,
    title: "Inside Revotic AI: Building Intelligent Systems that Scale",
    category: "Company Insight",
    author: "Revotic AI Team",
    date: "Sep 28, 2025",
    image:
      "/images/product/frblog8.jpg",
    link: "/blog/revotic-ai-inside-story",
  },
];

export const categories: {
  name: string;
  icon: ReactNode;
  filter: string;
}[] = [
  { name: "All", icon: "🧩", filter: "All" },
  { name: "AI & ML", icon: "🧠", filter: "AI & ML" },
  { name: "Web Development", icon: "💻", filter: "Web Development" },
  { name: "Design", icon: "🎨", filter: "Design" },
  { name: "Automation", icon: "⚙️", filter: "Automation" },
  { name: "Company Insight", icon: "🏢", filter: "Company Insight" },
];
