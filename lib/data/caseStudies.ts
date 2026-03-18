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
  }
];

export const industries = Array.from(new Set(caseStudies.map(cs => cs.industry)));
export const services = Array.from(new Set(caseStudies.map(cs => cs.service)));
export const techStacks = Array.from(new Set(caseStudies.flatMap(cs => cs.techStack)));
