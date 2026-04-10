import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | RevoticAI - Get in Touch',
  description: 'Contact RevoticAI for AI automation, web development, and business solutions. Based in Rawalpindi, Pakistan. Email: hello@revoticai.com',
  keywords: [
    'contact RevoticAI', 'contact AI agency Pakistan', 'AI agency email',
    'business automation contact', 'web development inquiry', 'get in touch'
  ],
  openGraph: {
    title: 'Contact Us | RevoticAI',
    description: 'Get in touch with RevoticAI for AI and automation solutions.',
    images: [{ url: 'https://revoticai.com/og-image.jpg', width: 1200, height: 630 }],
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
