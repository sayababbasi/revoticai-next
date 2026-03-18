export type Project = {
  id: string;
  title: string;
  category: "AI & ML" | "Web Development" | "Automation" | "Data & Analytics" | "App Development" | "UI/UX Design";
  description: string;
  tech: string[];
  image: string;
  link: string;
  featured?: boolean;
};

export const portfolioProjects: Project[] = [
  {
    id: "p-01",
    title: "Intelligent Lead Platform",
    category: "AI & ML",
    description: "An AI-powered sales intelligence platform that automates lead scoring and outreach personalization.",
    tech: ["Next.js", "Python", "OpenAI", "Pinecone"],
    image: "/images/sliderproduct/ai.webp",
    link: "/case-studies/fintech-automation",
    featured: true
  },
  {
    id: "p-02",
    title: "Custom E-commerce Web App",
    category: "Web Development",
    description: "A high-performance headless e-commerce store with real-time inventory and global payments.",
    tech: ["React", "Node.js", "Stripe", "AWS"],
    image: "/images/sliderproduct/MEXT.jpg",
    link: "/case-studies/ecommerce-personalization",
    featured: true
  },
  {
    id: "p-03",
    title: "Finance Automation Bot",
    category: "Automation",
    description: "Custom RPA solution for automating complex financial reconciliation and reporting workflows.",
    tech: ["Python", "Selenium", "PostgreSQL"],
    image: "/images/product/dashb-dev-3.jpg",
    link: "#",
    featured: false
  },
  {
    id: "p-04",
    title: "Predictive Analytics Dashboard",
    category: "Data & Analytics",
    description: "Real-time data visualization platform for monitoring business metrics and predicting growth trends.",
    tech: ["D3.js", "Python", "BigQuery"],
    image: "/images/sliderproduct/dash-img-333.png",
    link: "/case-studies/healthcare-data-pipeline",
    featured: true
  },
  {
    id: "p-05",
    title: "Logistics Tracking App",
    category: "App Development",
    description: "A mobile-first solution for real-time fleet tracking and dynamic route optimization.",
    tech: ["Flutter", "Firebase", "Google Maps"],
    image: "/images/product/yt1.webp",
    link: "/case-studies/logistics-route-optimization",
    featured: false
  },
  {
    id: "p-06",
    title: "Healthcare AI Assistant",
    category: "AI & ML",
    description: "GenAI-powered medical assistant for patient symptom analysis and documentation.",
    tech: ["GenAI", "NLP", "React"],
    image: "/images/blogs/aiinhealth.jpeg",
    link: "#",
    featured: false
  },
  {
    id: "p-07",
    title: "AI Chat Automation",
    category: "AI & ML",
    description: "Custom AI chatbot trained on business data to automate customer support interactions.",
    tech: ["Next.js", "Python", "OpenAI API"],
    image: "/images/product/ai.webp",
    link: "#"
  },
  {
    id: "p-08",
    title: "E-Commerce Dashboard",
    category: "Data & Analytics",
    description: "A real-time analytics dashboard for online store performance tracking.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "images/sliderproduct/ecommerce-dashboard.png",
    link: "#"
  },
  {
    id: "p-09",
    title: "Smart Image Recognition",
    category: "AI & ML",
    description: "ML-based image classification system for product tagging automation.",
    tech: ["TensorFlow", "Flask", "React"],
    image: "images/sliderproduct/img.webp",
    link: "#"
  },
  {
    id: "p-10",
    title: "UI/UX Re-Design for FinTech",
    category: "UI/UX Design",
    description: "Modernized interface for a finance startup to enhance user engagement and trust.",
    tech: ["Figma", "Tailwind CSS", "Next.js"],
    image: "images/sliderproduct/uiux-finance.jpg",
    link: "#"
  }
];

export const portfolioCategories = [
  "All",
  "AI & ML",
  "Web Development",
  "Automation",
  "Data & Analytics",
  "App Development",
  "UI/UX Design"
];
