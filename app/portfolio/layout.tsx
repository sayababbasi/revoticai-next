import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | RevoticAI — Projects & Work Showcase',
  description: 'View our portfolio of AI solutions, web applications, and digital products built for clients across industries.',
  keywords: [
    'portfolio', 'project showcase', 'AI projects', 'web development portfolio',
    'case studies', 'completed projects', 'RevoticAI work'
  ],
  openGraph: {
    title: 'Portfolio | RevoticAI',
    description: 'Explore our portfolio of successful projects and solutions.',
    images: [{ url: 'https://revoticai.com/og-image.jpg', width: 1200, height: 630 }],
  }
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
