// app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Topbar from "@/components/common/Topbar";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RevoticAI — AI-Powered Software & Automation",
  description: "Building the future with AI-driven software, automation, and digital transformation.",
};

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
        <main className="pt-[120px] min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
