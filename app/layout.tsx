
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
  metadataBase: new URL("https://revoticai.com"),
  title: "RevoticAI | Revolutionizing Businesses with Artificial Intelligence",
  description:
  "RevoticAI provides AI, ML, and automation solutions to help businesses scale and innovate faster.",
  icons: {
    icon: "/favicon-black.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "RevoticAI | Revolutionizing Businesses with Artificial Intelligence",
    description:
    "RevoticAI provides AI, ML, and automation solutions to help businesses scale and innovate faster.",
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

