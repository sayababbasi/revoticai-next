import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries | RevoticAI - Vertical Expertise',
  description: 'RevoticAI serves multiple industries including e-commerce, finance, healthcare, education, and more with AI and automation solutions.',
  keywords: [
    'industries', 'industry solutions', 'vertical expertise', 'e-commerce AI',
    'healthcare AI', 'finance automation', 'industry-specific solutions'
  ],
  openGraph: {
    title: 'Industries | RevoticAI',
    description: 'Explore AI solutions built specifically for your industry.',
    images: [{ url: 'https://revoticai.com/og-image.jpg', width: 1200, height: 630 }],
  }
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
