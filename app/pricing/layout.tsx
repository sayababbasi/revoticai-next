import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | RevoticAI - Transparent AI Solution Costs',
  description: 'Affordable and transparent pricing for AI solutions, automation, and web development. Custom packages for businesses of all sizes.',
  keywords: [
    'pricing', 'AI pricing', 'automation pricing', 'web development pricing',
    'AI solution costs', 'custom AI pricing', 'service packages', 'affordable AI'
  ],
  openGraph: {
    title: 'Pricing | RevoticAI',
    description: 'Get transparent pricing for AI and automation solutions.',
    images: [{ url: 'https://revoticai.com/og-image.jpg', width: 1200, height: 630 }],
  }
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
