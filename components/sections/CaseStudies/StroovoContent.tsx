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

const StroovoContent: React.FC<CaseStudyContentProps> = ({ study }) => {
  return (
    <section className="bg-white py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <Section title="Project Overview">
            <p>
              Stroovo is a modern AI-powered team collaboration and project management platform designed to help organizations manage projects, teams, tasks, documents, and workflows from a centralized workspace. The platform enables businesses to improve productivity through intelligent task management, real-time collaboration, AI-powered insights, and advanced analytics. By combining project management, communication, automation, and reporting into a single platform, Stroovo eliminates the need for multiple disconnected tools and provides a seamless digital workplace for teams of all sizes.
            </p>
          </Section>

          <Section title="Problem Statement">
            <p>
              Modern organizations often rely on multiple software solutions for project management, communication, document sharing, and productivity tracking. This fragmented approach leads to data silos, inefficient collaboration, duplicated work, and reduced team visibility.
            </p>
            <p>
              Many existing platforms also lack AI-driven productivity features, making it difficult for managers to analyze workloads, predict project risks, and automate repetitive tasks.
            </p>
            <p>
              Stroovo addresses these challenges by providing an integrated collaboration platform that combines project management, communication, automation, and AI-powered decision support into a single scalable solution.
            </p>
          </Section>

          <Section title="Objectives">
            <ul className="list-disc pl-6 space-y-2">
              <li>Develop a centralized team collaboration platform.</li>
              <li>Simplify project and task management.</li>
              <li>Improve communication between team members.</li>
              <li>Enable real-time collaboration across departments.</li>
              <li>Provide AI-powered productivity insights.</li>
              <li>Automate repetitive workflows.</li>
              <li>Deliver comprehensive reporting and analytics.</li>
              <li>Support organizations of different sizes through scalable architecture.</li>
              <li>Ensure secure access using role-based permissions.</li>
            </ul>
          </Section>

          <Section title="Proposed Solution">
            <p>
              Stroovo is built as a modern full-stack web application using a modular architecture that separates presentation, business logic, and data management layers.
            </p>
            <p className="font-bold mt-4">The platform provides:</p>
            <ul className="grid grid-cols-2 gap-4 mt-4">
              <li>✓ Team Workspaces</li>
              <li>✓ Project Management</li>
              <li>✓ Task Management</li>
              <li>✓ AI Productivity Assistant</li>
              <li>✓ Team Communication</li>
              <li>✓ File & Document Management</li>
              <li>✓ Calendar & Scheduling</li>
              <li>✓ Real-Time Notifications</li>
              <li>✓ Analytics Dashboard</li>
              <li>✓ Role-Based Access Control</li>
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
                  <li>Redis & BullMQ (Caching & Jobs)</li>
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
                  <li>Task Prioritization & Recommendations</li>
                  <li>Productivity Insights</li>
                  <li>Meeting Summary Generator</li>
                  <li>Document Summarization & Smart Search</li>
                  <li>Workflow Automation</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Core Modules">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Workspace Management</h3>
                <p>Organizations can create multiple workspaces for different departments, clients, or business units. Each workspace provides isolated collaboration environments with customizable settings and access permissions.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Project & Task Management</h3>
                <p>Organize projects from planning to completion with milestones, timelines, and progress tracking. Manage tasks efficiently with priority levels, dependencies, Kanban boards, lists, and calendar views.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Team Collaboration & Documents</h3>
                <p>Enhance communication through team discussions, real-time messaging, comments, and activity feeds. Securely manage project files with version history, folders, and shared documents.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Calendar, Scheduling & Analytics</h3>
                <p>Integrated scheduling tools for deadlines, meetings, and reminders. Comprehensive dashboards provide business intelligence including team performance, task completion rates, resource utilization, and time tracking.</p>
              </div>
            </div>
          </Section>

          <Section title="AI Productivity Assistant">
            <p>The AI assistant enhances productivity through intelligent automation.</p>
            <ul className="space-y-4 mt-4">
              <li><strong>AI Task Prioritization:</strong> Automatically prioritizes tasks based on deadlines, dependencies, and workload.</li>
              <li><strong>AI Meeting Summary:</strong> Generates concise summaries and action items from meeting notes.</li>
              <li><strong>AI Smart Search:</strong> Uses semantic search to quickly locate tasks, documents, discussions, and projects.</li>
              <li><strong>AI Workflow Automation:</strong> Automates repetitive actions such as task assignment, reminders, notifications, and status updates.</li>
              <li><strong>AI Productivity Insights:</strong> Analyzes team performance and provides recommendations for improving efficiency and resource allocation.</li>
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
                  <li>Audit Logs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">User Roles</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Super Administrator:</strong> Platform & Organization management.</li>
                  <li><strong>Organization Admin:</strong> Team & Workspace configuration.</li>
                  <li><strong>Project Manager:</strong> Planning, assignments, coordination.</li>
                  <li><strong>Team Member:</strong> Task management, collaboration, time tracking.</li>
                  <li><strong>Guest:</strong> Limited workspace access.</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Future Enhancements">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#b1ff32]" /> Mobile Applications (Android & iOS)</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#b1ff32]" /> Video Conferencing Integration</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#b1ff32]" /> Whiteboard Collaboration</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#b1ff32]" /> Advanced Gantt Charts</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#b1ff32]" /> Resource Planning Module</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#b1ff32]" /> OKR & Goal Management</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#b1ff32]" /> AI Project Risk Prediction</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#b1ff32]" /> AI Capacity Planning</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#b1ff32]" /> Cross-Workspace Collaboration</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#b1ff32]" /> Third-Party Integrations</li>
            </ul>
          </Section>

          <Section title="Conclusion">
            <p>
              Stroovo is a comprehensive AI-powered collaboration and project management platform that brings teams, projects, communication, and workflows into a unified digital workspace. By integrating intelligent task management, real-time collaboration, AI-driven productivity tools, and advanced analytics, the platform enables organizations to improve efficiency, streamline operations, and make informed decisions. Its modular architecture, robust security, and extensible design make Stroovo a scalable solution capable of supporting startups, growing businesses, and enterprise organizations seeking a modern, future-ready collaboration platform.
            </p>
          </Section>

        </div>
      </div>
    </section>
  );
};

export default StroovoContent;
