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
    image: "/images/Product Thumbnails/Intelligent Lead Platform.png",
    link: "/case-studies/intelligent-lead-platform",
    featured: true
  },
  {
    id: "p-02",
    title: "Custom E-commerce Web App",
    category: "Web Development",
    description: "A high-performance headless e-commerce store with real-time inventory and global payments.",
    tech: ["React", "Node.js", "Stripe", "AWS"],
    image: "/images/Product Thumbnails/waerino thumbnail.png",
    link: "/case-studies/wearino-ecommerce",
    featured: true
  },
  {
    id: "p-03",
    title: "Finance Automation Bot",
    category: "Automation",
    description: "Custom RPA solution for automating complex financial reconciliation and reporting workflows.",
    tech: ["Python", "Selenium", "PostgreSQL"],
    image: "/images/Product Thumbnails/Finance bot.png",
    link: "/case-studies/finance-automation-bot",
    featured: false
  },
  {
    id: "p-04",
    title: "Predictive Analytics Dashboard",
    category: "Data & Analytics",
    description: "Real-time data visualization platform for monitoring business metrics and predicting growth trends.",
    tech: ["D3.js", "Python", "BigQuery"],
    image: "/images/Product Thumbnails/predictive analytics dashboard.png",
    link: "/case-studies/predictive-analytics-dashboard",
    featured: true
  },
  {
    id: "p-05",
    title: "Logistics Tracking App",
    category: "App Development",
    description: "A mobile-first solution for real-time fleet tracking and dynamic route optimization.",
    tech: ["Flutter", "Firebase", "Google Maps"],
    image: "/images/Product Thumbnails/478bd79a-006f-4e6d-8e58-bd835272ba5d.png",
    link: "/case-studies/logistics-tracking-app",
    featured: false
  },
  {
    id: "p-06",
    title: "Healthcare AI Assistant",
    category: "AI & ML",
    description: "GenAI-powered medical assistant for patient symptom analysis and documentation.",
    tech: ["GenAI", "NLP", "React"],
    image: "/images/Product Thumbnails/health assistant thumbnail.png",
    link: "/case-studies/healthcare-ai-assistant",
    featured: false
  },
  {
    id: "p-07",
    title: "AI Chat Automation",
    category: "AI & ML",
    description: "Custom AI chatbot trained on business data to automate customer support interactions.",
    tech: ["Next.js", "Python", "OpenAI API"],
    image: "/images/Product Thumbnails/dmrsce.png",
    link: "/case-studies/ai-chat-automation"
  },
  {
    id: "p-08",
    title: "Wearino Analytics Dashboard",
    category: "Data & Analytics",
    description: "A real-time analytics dashboard for Wearino online store performance tracking.",
    tech: ["Next.js", "NestJS", "PostgreSQL"],
    image: "/images/Product Thumbnails/wearino admin dashboard.png",
    link: "/case-studies/wearino-dashboard"
  },
  {
    id: "p-09",
    title: "Smart Image Recognition",
    category: "AI & ML",
    description: "ML-based image classification system for product tagging automation.",
    tech: ["TensorFlow", "Flask", "React"],
    image: "/images/Product Thumbnails/smart-image-recognition.png",
    link: "/case-studies/smart-image-recognition"
  },
  {
    id: "p-10",
    title: "UI/UX Re-Design for FinTech",
    category: "UI/UX Design",
    description: "Modernized interface for a finance startup to enhance user engagement and trust.",
    tech: ["Figma", "Tailwind CSS", "Next.js"],
    image: "/images/Product Thumbnails/fintech-uiux.png",
    link: "/case-studies/fintech-ui-ux"
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
