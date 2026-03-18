import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process | RevoticAI — Our Development Process',
  description: 'Learn how RevoticAI develops AI solutions with a strategic, tested, and transparent process from discovery to deployment.',
  keywords: [
    'development process', 'AI process', 'workflow', 'methodology',
    'project management', 'delivery process', 'development methodology'
  ],
  openGraph: {
    title: 'Process | RevoticAI',
    description: 'Discover our transparent and effective AI development process.',
    images: [{ url: 'https://revoticai.com/og-image.jpg', width: 1200, height: 630 }],
  }
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
