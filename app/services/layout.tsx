import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | RevoticAI - AI, Automation, Web Development & UI/UX',
  description: 'RevoticAI offers AI/ML solutions, business automation, web app development, UI/UX design, and game development. Custom AI solutions for your business.',
  keywords: [
    'AI services Pakistan', 'machine learning services', 'business automation services',
    'web development services', 'UI/UX design services', 'game development',
    'custom AI development', 'RAG pipeline development', 'AI SaaS development',
    'automation services Pakistan', 'Next.js development'
  ],
  openGraph: {
    title: 'Services | RevoticAI',
    description: 'AI, automation, web development, and UI/UX design services by RevoticAI.',
    images: [{ url: 'https://revoticai.com/og-image.jpg', width: 1200, height: 630 }],
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
