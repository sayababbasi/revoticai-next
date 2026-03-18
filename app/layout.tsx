
// app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Topbar from "@/components/common/Topbar";
import Navbar from "@/components/common/Navbar";
import TopFooter from "@/components/common/TopFooter";
import Footer from "@/components/common/Footer";
import ClientWrapper from "@/components/common/ClientWrapper";

export const metadata: Metadata = {
  metadataBase: new URL('https://revoticai.com'),
  title: {
    default: 'RevoticAI — AI Automation & Software Development Agency Pakistan',
    template: '%s | RevoticAI'
  },
  description: 'RevoticAI is a leading AI agency in Pakistan offering AI/ML automation, web app development, business automation, UI/UX design and AI SaaS products. Founded by Sayab Gulfaraz.',
  keywords: [
    'revoticai', 'revotic', 'revo', 'revotic ai', 'revoticai pakistan',
    'AI agency pakistan', 'AI automation pakistan', 'machine learning company pakistan',
    'web development rawalpindi', 'software house islamabad',
    'sayab gulfaraz', 'sayab abbasi', 'sayab', 'founder revoticai',
    'AI solutions pakistan', 'business automation islamabad',
    'custom AI development', 'RAG pipeline development',
    'Next.js development agency', 'FastAPI development',
    'AI SaaS development pakistan', 'workflow management software',
    'RevoticAI pvt ltd', 'Sayab Gulfaraz CEO'
  ],
  authors: [{ name: 'Sayab Gulfaraz', url: 'https://revoticai.com/about' }],
  creator: 'Sayab Gulfaraz',
  publisher: 'RevoticAI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: 'https://revoticai.com'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://revoticai.com',
    siteName: 'RevoticAI',
    title: 'RevoticAI — AI Automation & Software Development Agency',
    description: 'Custom AI systems, automation, and software products built by RevoticAI. Founded by Sayab Gulfaraz, based in Islamabad, Pakistan.',
    images: [
      {
        url: 'https://revoticai.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RevoticAI — AI Agency Pakistan | Founded by Sayab Gulfaraz',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@revoticai',
    creator: '@sayabgulfaraz',
    title: 'RevoticAI — AI Automation Agency Pakistan',
    description: 'Custom AI solutions, automation, and software products. Founded by Sayab Gulfaraz.',
    images: ['https://revoticai.com/og-image.jpg'],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900`} suppressHydrationWarning>
        {/* Maintenance bar + glowing ball */}

        {/* Website Layout */}
        <Topbar />
        <Navbar />
        <main>{children}</main>
        <TopFooter />
        <Footer />

        <ClientWrapper />
      </body>
    </html>
  );
}

