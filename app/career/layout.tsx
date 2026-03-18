import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | RevoticAI — Join Our Team',
  description: 'Join RevoticAI and work on cutting-edge AI solutions. We are hiring talented engineers, designers, and entrepreneurs in Pakistan.',
  keywords: [
    'careers', 'jobs', 'hiring', 'engineer jobs Pakistan', 'AI jobs',
    'web developer jobs', 'RevoticAI careers', 'remote jobs'
  ],
  openGraph: {
    title: 'Careers | RevoticAI',
    description: 'Join our team and work on impressive AI and tech projects.',
    images: [{ url: 'https://revoticai.com/og-image.jpg', width: 1200, height: 630 }],
  }
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
