import { ReactNode } from "react";

export type CaseStudy = {
  id: string;
  slug: string;
  client: string;
  industry: string;
  service: string;
  techStack: string[];
  problem: string;
  solution: string;
  mainResult: string;
  results: { label: string; value: string }[];
  quote?: { text: string; author: string; role: string };
  image?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-01",
    slug: "fintech-automation",
    client: "GlobalPay Solutions",
    industry: "FinTech",
    service: "AI Automation",
    techStack: ["Python", "TensorFlow", "AWS", "Node.js"],
    problem: "Manual transaction verification was causing 48-hour delays and high operational costs for international transfers.",
    solution: "Deployed a custom multi-agent LLM system to automatically verify documents and cross-reference compliance databases in real-time.",
    mainResult: "85% Reduction in Processing Time",
    results: [
      { label: "Processing Time", value: "-85%" },
      { label: "Operational Costs", value: "-40%" },
      { label: "Accuracy", value: "99.9%" }
    ],
    quote: {
      text: "RevoticAI didn't just automate a process; they fundamentally changed how quickly we can scale our operations globally.",
      author: "Sarah Jenkins",
      role: "COO, GlobalPay Solutions"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "cs-02",
    slug: "ecommerce-personalization",
    client: "StyleNova E-Commerce",
    industry: "Retail",
    service: "Predictive Analytics",
    techStack: ["PyTorch", "GCP", "React", "Pinecone"],
    problem: "Customer retention was dropping due to generic product recommendations and a one-size-fits-all shopping experience.",
    solution: "Architected a real-time recommendation engine using vector databases to personalize the storefront based on micro-behaviors.",
    mainResult: "3.2x Increase in Conversion Rate",
    results: [
      { label: "Conversion Rate", value: "3.2x" },
      { label: "Avg. Order Value", value: "+28%" },
      { label: "Customer Retention", value: "+45%" }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    id: "cs-03",
    slug: "healthcare-data-pipeline",
    client: "MedCore Health",
    industry: "Healthcare",
    service: "Data Engineering",
    techStack: ["Snowflake", "dbt", "Airflow", "Python"],
    problem: "Patient data was siloed across 14 different legacy systems, making hospital-wide analytics impossible.",
    solution: "Engineered a unified, HIPAA-compliant data lake and automated ELT pipelines for real-time operational dashboards.",
    mainResult: "Single Source of Truth Achieved",
    results: [
      { label: "Data Latency", value: "Real-time" },
      { label: "Reporting Time", value: "-90%" },
      { label: "Systems Integrated", value: "14" }
    ],
    quote: {
      text: "The data architecture built by RevoticAI finally gave our doctors the real-time insights they needed to save lives.",
      author: "Dr. James Chen",
      role: "CTO, MedCore Health"
    },
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "cs-04",
    slug: "logistics-route-optimization",
    client: "Swift Freight",
    industry: "Logistics",
    service: "AI Optimization",
    techStack: ["Google OR-Tools", "Python", "React Native", "PostgreSQL"],
    problem: "Inefficient routing for a fleet of 500+ trucks led to excessive fuel consumption and missed delivery windows.",
    solution: "Developed an AI-driven dynamic routing algorithm that adjusts to traffic, weather, and load capacity on the fly.",
    mainResult: "22% Fuel Cost Reduction",
    results: [
      { label: "Fuel Expenses", value: "-22%" },
      { label: "On-Time Deliveries", value: "98.5%" },
      { label: "Fleet Utilization", value: "+15%" }
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "cs-05",
    slug: "intelligent-lead-platform",
    client: "RevoticAI",
    industry: "Sales Tech",
    service: "AI & ML",
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "TensorFlow", "Scikit-learn", "Docker"],
    problem: "Modern sales teams struggle with prioritizing leads, analyzing complex customer interactions, and accurately forecasting growth. Traditional CRMs lack predictive capabilities to optimize workflows.",
    solution: "Engineered an intelligent SaaS platform utilizing advanced ML models for dynamic lead scoring, conversation prediction, and predictive sales growth forecasting.",
    mainResult: "AI-Driven Sales Growth",
    results: [
      { label: "Lead Qualification", value: "3x Faster" },
      { label: "Predictive Accuracy", value: "High" },
      { label: "Sales Forecasting", value: "Real-time" }
    ],
    image: "/images/sliderproduct/ai.webp"
  },
  {
    id: "cs-06",
    slug: "finance-automation-bot",
    client: "Confidential FinTech",
    industry: "Finance",
    service: "Robotic Process Automation",
    techStack: ["Python", "FastAPI", "Playwright", "Pandas", "Celery", "Docker"],
    problem: "Manual financial reconciliation and data entry across legacy banking portals resulted in frequent spreadsheet errors, delayed reporting, and significant security compliance risks.",
    solution: "Developed highly secure, deterministic RPA workflows to automatically extract, transform, and reconcile financial data. Integrated fallback protocols and comprehensive audit logging to catch transaction anomalies in real-time.",
    mainResult: "Error-Free Automation Pipeline",
    results: [
      { label: "Data Accuracy", value: "100%" },
      { label: "Processing Speed", value: "10x Faster" },
      { label: "Audit Logging", value: "Automated" }
    ],
    image: "/images/product/dashb-dev-3.jpg"
  },
  {
    id: "cs-07",
    slug: "logistics-tracking-app",
    client: "Global Supply Chain",
    industry: "Logistics",
    service: "IoT & Mobile Development",
    techStack: ["Flutter", "Python", "FastAPI", "Firebase", "Docker"],
    problem: "Traditional supply chains lack real-time visibility, leading to inefficient routing, missed delivery windows, and poor tracking of shipment coordinates.",
    solution: "Engineered a cross-platform Flutter application integrated with real-time IoT telemetry pipelines. Utilized FastAPI to handle concurrent sensor data and Firebase for real-time synchronization and geofencing alerts.",
    mainResult: "Transparent Real-Time Network",
    results: [
      { label: "Supply Chain Visibility", value: "Real-time" },
      { label: "Delivery Delays", value: "Minimized" },
      { label: "Alert Latency", value: "<1s" }
    ],
    image: "/images/product/yt1.webp"
  },
  {
    id: "cs-08",
    slug: "healthcare-ai-assistant",
    client: "Confidential Healthcare Provider",
    industry: "Healthcare",
    service: "Generative AI & NLP",
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "LangChain", "OpenAI", "Docker"],
    problem: "Healthcare facilities face overwhelming volumes of patient inquiries and complex medical data, leading to inefficient pre-triage, delayed responses, and increased administrative burden.",
    solution: "Developed a secure, HIPAA-compliant Generative AI assistant using advanced NLP to accurately interpret medical text. Orchestrated RAG pipelines via LangChain to safely handle pre-triage and generate context-aware patient support.",
    mainResult: "Conversational Clinical Intelligence",
    results: [
      { label: "Triage Efficiency", value: "Improved" },
      { label: "Patient Support", value: "24/7" },
      { label: "Data Compliance", value: "100%" }
    ],
    image: "/images/blogs/aiinhealth.jpeg"
  },
  {
    id: "cs-09",
    slug: "predictive-analytics-dashboard",
    client: "Enterprise Data Client",
    industry: "Data & Analytics",
    service: "Predictive Analytics",
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "Scikit-learn", "Pandas", "Docker"],
    problem: "Non-technical stakeholders struggled to interpret complex data structures and ML outputs, missing out on crucial forecasting insights, anomaly detection, and operational risks.",
    solution: "Developed an intuitive, responsive dashboard using Next.js, powered by a high-performance Python/FastAPI backend. Integrated machine learning algorithms for time-series forecasting and real-time anomaly detection.",
    mainResult: "Actionable Visual Intelligence",
    results: [
      { label: "Forecasting Accuracy", value: "High" },
      { label: "Anomaly Detection", value: "Real-time" },
      { label: "Decision Making", value: "Data-Driven" }
    ],
    image: "/images/sliderproduct/dash-img-333.png"
  },
  {
    id: "cs-10",
    slug: "wearino-ecommerce",
    client: "Wearino",
    industry: "Retail & E-commerce",
    service: "Full-Stack Web Development & AI",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "Stripe", "Supabase", "Socket.IO", "Python"],
    problem: "Needed a high-performance headless e-commerce architecture capable of managing complex real-time inventory, secure localized payments (Stripe, JazzCash, Easypaisa), and AI-driven features like smart product search and SEO generation without sacrificing speed.",
    solution: "Engineered a scalable platform using Next.js 16, React 19, and Tailwind CSS v4. Built a NestJS backend with Prisma and PostgreSQL. Integrated Redis, JWT/OAuth authentication, Supabase storage, and Python for advanced AI chatbots and product recommendations.",
    mainResult: "High-Performance AI Storefront",
    results: [
      { label: "Page Load Time", value: "< 1s" },
      { label: "Checkout Conversion", value: "+35%" },
      { label: "Inventory Sync Latency", value: "Real-time" }
    ],
    image: "/images/sliderproduct/MEXT.jpg"
  },
  {
    id: "cs-11",
    slug: "ai-chat-automation",
    client: "Global SaaS Provider",
    industry: "Customer Support",
    service: "AI Chat Automation",
    techStack: ["Next.js", "Python", "OpenAI API", "Pinecone"],
    problem: "Customer support teams were overwhelmed with repetitive queries, causing slow response times and degraded customer satisfaction.",
    solution: "Developed a custom AI chatbot trained on proprietary business data using OpenAI's API. Integrated vector search to retrieve accurate context and automate Level 1 support interactions.",
    mainResult: "Automated 70% of Support Queries",
    results: [
      { label: "Query Resolution", value: "70% Automated" },
      { label: "Response Time", value: "< 2s" },
      { label: "Customer Satisfaction", value: "+40%" }
    ],
    image: "/images/product/ai.webp"
  },
  {
    id: "cs-12",
    slug: "wearino-dashboard",
    client: "Wearino",
    industry: "Retail & E-commerce",
    service: "Data & Analytics",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "BullMQ"],
    problem: "Store managers required a secure, role-based access control (RBAC) admin panel to oversee real-time sales metrics, AI-generated product tagging, and inventory levels across multiple payment gateways.",
    solution: "Engineered a comprehensive Next.js 16 analytics dashboard powered by NestJS and Prisma. Connected PostgreSQL queries with Zustand and TanStack Query, utilizing Redis and BullMQ for high-speed background job processing and real-time Socket.IO updates.",
    mainResult: "Real-Time Sales Intelligence",
    results: [
      { label: "Data Latency", value: "Real-Time" },
      { label: "Inventory Tracking", value: "Automated" },
      { label: "Reporting Time", value: "-80%" }
    ],
    image: "images/sliderproduct/ecommerce-dashboard.png"
  },
  {
    id: "cs-13",
    slug: "smart-image-recognition",
    client: "E-Commerce Enterprise",
    industry: "AI & ML",
    service: "Computer Vision",
    techStack: ["TensorFlow", "Flask", "React", "Python"],
    problem: "Manual product tagging for massive e-commerce catalogs was labor-intensive, error-prone, and severely bottlenecked inventory onboarding.",
    solution: "Deployed a custom Machine Learning image classification system using TensorFlow. Built a Flask API to serve the model to a React frontend, automating product categorization and tagging.",
    mainResult: "Automated Product Tagging",
    results: [
      { label: "Tagging Accuracy", value: "96%" },
      { label: "Onboarding Speed", value: "10x Faster" },
      { label: "Manual Effort", value: "-90%" }
    ],
    image: "images/sliderproduct/img.webp"
  },
  {
    id: "cs-14",
    slug: "fintech-ui-ux",
    client: "FinTech Startup",
    industry: "FinTech",
    service: "UI/UX Design",
    techStack: ["Figma", "Tailwind CSS", "Next.js", "React"],
    problem: "A promising finance startup suffered from low user adoption and trust due to an outdated, cluttered, and confusing user interface.",
    solution: "Conducted extensive user research to completely modernize the interface. Delivered high-fidelity Figma prototypes and implemented a sleek, accessible UI using Tailwind CSS and Next.js.",
    mainResult: "Enhanced User Engagement & Trust",
    results: [
      { label: "User Retention", value: "+55%" },
      { label: "Session Duration", value: "+30%" },
      { label: "Bounce Rate", value: "-40%" }
    ],
    image: "images/sliderproduct/uiux-finance.jpg"
  }
];

export const industries = Array.from(new Set(caseStudies.map(cs => cs.industry)));
export const services = Array.from(new Set(caseStudies.map(cs => cs.service)));
export const techStacks = Array.from(new Set(caseStudies.flatMap(cs => cs.techStack)));
