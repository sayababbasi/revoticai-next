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
      "https://images.unsplash.com/photo-1677756128695-af1de72c5057?auto=format&fit=crop&w=600&q=80",
    link: "/blog/future-of-gen-ai",
  },
  {
    id: 2,
    title: "Why Your Next Web App Should Be AI-Powered",
    category: "Web Development",
    author: "Omar Sharif",
    date: "Oct 22, 2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    link: "/blog/ai-powered-web-apps",
  },
  {
    id: 3,
    title: "Top 10 AI Tools Every Developer Should Know in 2025",
    category: "AI & ML",
    author: "Sara Malik",
    date: "Oct 18, 2025",
    image:
      "https://images.unsplash.com/photo-1669047359000-cb2893f6a1bb?auto=format&fit=crop&w=600&q=80",
    link: "/blog/top-ai-tools-2025",
  },
  {
    id: 4,
    title: "Design Systems That Drive Conversions: A UI/UX Guide",
    category: "Design",
    author: "Ali Raza",
    date: "Oct 14, 2025",
    image:
      "https://images.unsplash.com/photo-1604147706283-d7119b5b63de?auto=format&fit=crop&w=600&q=80",
    link: "/blog/ui-ux-design-systems",
  },
  {
    id: 5,
    title: "Building Smart Chatbots with RAG and LLMs",
    category: "AI & ML",
    author: "Hamza Ahmed",
    date: "Oct 10, 2025",
    image:
      "https://images.unsplash.com/photo-1681204899671-9f7f63b3dbd9?auto=format&fit=crop&w=600&q=80",
    link: "/blog/rag-chatbot-guide",
  },
  {
    id: 6,
    title: "From Static to Dynamic: Modern Web Development with Next.js",
    category: "Web Development",
    author: "Marium Tariq",
    date: "Oct 5, 2025",
    image:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=600&q=80",
    link: "/blog/nextjs-modern-web",
  },
  {
    id: 7,
    title: "Automation in 2025: How Businesses Are Saving Time & Money",
    category: "Automation",
    author: "Zain Ul Abideen",
    date: "Oct 2, 2025",
    image:
      "https://images.unsplash.com/photo-1639322537504-6427a16b7a32?auto=format&fit=crop&w=600&q=80",
    link: "/blog/business-automation-2025",
  },
  {
    id: 8,
    title: "Inside Revotic AI: Building Intelligent Systems that Scale",
    category: "Company Insight",
    author: "Revotic AI Team",
    date: "Sep 28, 2025",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
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
