// app/layout.tsx
import "../styles/globals.css"; 
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Topbar from "@/components/common/Topbar";
import Navbar from "@/components/common/Navbar";
import TopFooter from "@/components/common/TopFooter";
import Footer from "@/components/common/Footer";
import ClientWrapper from "@/components/common/ClientWrapper"; //  new client-only file

export const metadata: Metadata = {
  title: "RevoticAI — Revolutionizing Businesses with Artificial Intelligence",
  description:
    "RevoticAI provides AI, ML, and automation solutions to help businesses scale and innovate faster.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "RevoticAI — AI & Automation Experts",
    description:
      "Leading provider of AI and automation solutions for businesses worldwide.",
    url: "https://revoticai.com",
    siteName: "RevoticAI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RevoticAI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Topbar />
        <Navbar />
        <main>{children}</main>
        <TopFooter />
        <Footer />

        {/* Client-side interactive components */}
        <ClientWrapper />
      </body>
    </html>
  );
}
