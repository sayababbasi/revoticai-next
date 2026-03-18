import { Metadata } from 'next';

// SEO Metadata for About Page
export const metadata: Metadata = {
  title: 'Sayab Gulfaraz — Founder & CEO of RevoticAI | AI Entrepreneur Pakistan',
  description: 'Meet Sayab Gulfaraz, Founder and CEO of RevoticAI. AI engineer, entrepreneur, and builder of AI-powered software products based in Rawalpindi, Pakistan.',
  keywords: [
    'Sayab Gulfaraz', 'Sayab Abbasi', 'Sayab',
    'Sayab Gulfaraz CEO', 'Founder RevoticAI',
    'AI entrepreneur Pakistan', 'Sayab RevoticAI',
    'CEO RevoticAI', 'RevoticAI founder',
    'AI engineer Rawalpindi', 'Sayab Gulfaraz LinkedIn'
  ],
  openGraph: {
    title: 'Sayab Gulfaraz — Founder & CEO, RevoticAI',
    description: 'Sayab Gulfaraz is the Founder and CEO of RevoticAI — an AI automation and software development agency in Pakistan.',
    images: [{ url: 'https://revoticai.com/images/sayab-gulfaraz-founder-revoticai.jpg', width: 800, height: 800, alt: 'Sayab Gulfaraz Founder CEO RevoticAI' }],
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
