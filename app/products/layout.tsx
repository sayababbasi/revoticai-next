import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | RevoticAI — AI SaaS Solutions',
  description: 'Discover RevoticAI products — AI-powered SaaS solutions and tools built to solve real business problems.',
  keywords: [
    'AI products', 'SaaS products', 'AI tools', 'software products',
    'AI solutions', 'automated tools', 'RevoticAI products'
  ],
  openGraph: {
    title: 'Products | RevoticAI',
    description: 'Explore innovative AI-powered SaaS solutions from RevoticAI.',
    images: [{ url: 'https://revoticai.com/og-image.jpg', width: 1200, height: 630 }],
  }
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
