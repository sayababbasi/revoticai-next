import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team | RevoticAI — Meet Our Experts',
  description: 'Meet the talented team behind RevoticAI — AI engineers, developers, designers, and entrepreneurs building cutting-edge solutions.',
  keywords: [
    'team', 'about team', 'experts', 'AI engineers', 'our team',
    'RevoticAI team', 'developers', 'designers'
  ],
  openGraph: {
    title: 'Team | RevoticAI',
    description: 'Meet the talented experts at RevoticAI.',
    images: [{ url: 'https://revoticai.com/og-image.jpg', width: 1200, height: 630 }],
  }
};

export default function ExpertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
