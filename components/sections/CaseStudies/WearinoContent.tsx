"use client";

import React from "react";
import { motion } from "framer-motion";
import { CaseStudy } from "@/lib/data/caseStudies";

interface CaseStudyContentProps {
  study: CaseStudy;
}

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <h2 className="text-3xl font-black mb-6 text-black">{title}</h2>
    <div className="text-lg text-gray-700 leading-relaxed font-medium space-y-4">
      {children}
    </div>
  </motion.div>
);

const WearinoContent: React.FC<CaseStudyContentProps> = ({ study }) => {
  return (
    <section className="bg-white py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <Section title="Project Overview">
            <p>
              Wearino is a modern, AI-powered full-stack eCommerce platform developed to help businesses launch, manage, and scale their online stores with ease. The platform provides a complete solution that includes a customer-facing storefront, an advanced admin panel, inventory management, order processing, customer management, analytics, and AI-powered business tools.
            </p>
            <p>
              Designed with scalability, performance, and customization in mind, Wearino enables businesses of all sizes to create a professional online shopping experience while reducing operational complexity.
            </p>
          </Section>

          <Section title="Problem Statement">
            <p>
              Many small and medium-sized businesses struggle to build and maintain an online store due to expensive development costs, limited customization options, and the lack of integrated management tools. Existing eCommerce platforms often require multiple third-party plugins for inventory, SEO, analytics, payments, and marketing, making them difficult to manage and scale.
            </p>
            <p>
              Wearino addresses these challenges by providing an all-in-one platform that combines modern web technologies with AI-powered automation to simplify eCommerce management while delivering exceptional customer experiences.
            </p>
          </Section>

          <Section title="Objectives">
            <ul className="list-disc pl-6 space-y-2">
              <li>Develop a modern, responsive, and high-performance eCommerce platform.</li>
              <li>Provide a fully customizable online storefront.</li>
              <li>Simplify inventory and product management.</li>
              <li>Enable secure customer authentication and account management.</li>
              <li>Streamline order processing and payment workflows.</li>
              <li>Improve product discoverability through intelligent search.</li>
              <li>Integrate AI-powered tools for automation and optimization.</li>
              <li>Deliver an intuitive admin dashboard for complete business control.</li>
              <li>Ensure scalability for future business growth.</li>
            </ul>
          </Section>

          <Section title="Proposed Solution">
            <p>
              Wearino is designed as a full-stack web application using a modern architecture that separates the frontend, backend, and database layers. This architecture enables better maintainability, improved scalability, and easier integration of future features.
            </p>
            <p className="font-bold mt-4">The platform offers:</p>
            <ul className="grid grid-cols-2 gap-4 mt-4">
              <li>✓ Customer Storefront</li>
              <li>✓ Administrative Dashboard</li>
              <li>✓ Product Management System</li>
              <li>✓ Order Management</li>
              <li>✓ Inventory Tracking</li>
              <li>✓ Customer Management</li>
              <li>✓ AI-Powered Business Features</li>
              <li>✓ Analytics Dashboard</li>
              <li>✓ SEO Optimization</li>
              <li>✓ Secure Authentication</li>
              <li>✓ Payment Integration</li>
            </ul>
          </Section>

          <Section title="System Architecture">
            <div className="bg-gray-900 text-[#b1ff32] p-8 rounded-2xl font-mono text-sm overflow-x-auto shadow-xl">
              <pre>
{`Frontend (Next.js)
        │
REST API
        │
Backend (NestJS)
        │
Prisma ORM
        │
PostgreSQL Database
        │
─────────────────────────────
Redis Cache
Supabase Storage
Socket.IO
AI Services
Payment Gateway
Email Service`}
              </pre>
            </div>
          </Section>

          <Section title="Technology Stack">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Frontend</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Next.js & React</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS & shadcn/ui</li>
                  <li>Zustand & TanStack Query</li>
                  <li>React Hook Form & Zod</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Backend & Database</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Node.js & NestJS</li>
                  <li>Prisma ORM</li>
                  <li>PostgreSQL</li>
                  <li>Supabase Storage</li>
                  <li>Redis & BullMQ</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Authentication & Real-Time</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>JWT & Google OAuth</li>
                  <li>Role-Based Access Control (RBAC)</li>
                  <li>Socket.IO</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">AI Features</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Product Recommendation & Search</li>
                  <li>SEO Generator</li>
                  <li>Description & Tag Generator</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Core Modules">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Customer Store</h3>
                <p>The customer-facing application provides users with an intuitive shopping experience featuring product browsing, advanced search, category navigation, shopping cart management, secure checkout, wishlist functionality, customer reviews, and personalized recommendations.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Product Management</h3>
                <p>Administrators can efficiently manage products through an advanced dashboard supporting product creation, category/brand management, product variants, stock management, image galleries, and discount pricing.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Inventory & Orders</h3>
                <p>The inventory system enables real-time stock monitoring with automatic stock updates after purchases and low-stock alerts. The order management module allows administrators to monitor the complete order lifecycle from placement to fulfillment and returns.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p>Provides actionable business insights including sales reports, revenue analysis, customer growth, product performance, inventory statistics, and conversion metrics.</p>
              </div>
            </div>
          </Section>

          <Section title="AI-Powered Features">
            <ul className="space-y-4">
              <li><strong>AI Product Recommendation:</strong> Recommends products based on customer preferences and browsing history.</li>
              <li><strong>AI Product Search:</strong> Enhances search accuracy through intelligent keyword matching and semantic search.</li>
              <li><strong>AI SEO Generator:</strong> Automatically generates SEO-friendly titles, meta descriptions, and keywords.</li>
              <li><strong>AI Product Description Generator:</strong> Creates professional and optimized product descriptions.</li>
              <li><strong>AI Product Tag Generator:</strong> Automatically assigns relevant tags to improve searchability.</li>
            </ul>
          </Section>

          <Section title="Security & Roles">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Security Features</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>JWT Authentication & Password Hashing</li>
                  <li>Secure API Access & RBAC</li>
                  <li>SQL Injection & XSS Protection</li>
                  <li>CORS & Rate Limiting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">User Roles</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Super Administrator:</strong> Complete platform control.</li>
                  <li><strong>Store Manager:</strong> Products, inventory, orders.</li>
                  <li><strong>Staff:</strong> Fulfillment and support.</li>
                  <li><strong>Customer:</strong> Browsing, cart, checkout.</li>
                </ul>
              </div>
            </div>
          </Section>


          <Section title="Conclusion">
            <p>
              Wearino demonstrates how modern web technologies and artificial intelligence can be combined to create a scalable, secure, and feature-rich eCommerce platform. By integrating comprehensive store management tools, real-time inventory tracking, intelligent search, and AI-driven automation into a single solution, Wearino empowers businesses to efficiently manage their online operations while delivering an engaging shopping experience for customers. Its modular architecture, robust security, and extensible design make it well-suited for businesses seeking a future-ready digital commerce solution that can evolve with changing market demands.
            </p>
          </Section>

        </div>
      </div>
    </section>
  );
};

export default WearinoContent;
