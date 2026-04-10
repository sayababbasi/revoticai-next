# Website Architecture - Full Blueprint

## Phase 1 - Core Pages (Remaining)


### Case Studies Page (`/case-studies`)
- [x] Implement Filter Bar (by industry, service type, tech stack)
- [x] Implement Case Study Cards (Client, problem, result metric)
- [x] Implement Individual Case Study Page Temp. (Problem -> Solution -> Stack -> Results)
- [x] Implement Results Metrics Section
- [x] Implement Client Quote embedded
- [x] Implement Related Cases (3 similar projects)

### Contact Page (`/contact`)
- [ ] Implement Multi-Step Form (Project type -> Budget -> Details)
- [ ] Embed Calendly / Booking for strategy calls
- [ ] Add Response SLA ("We respond within 24 hours")
- [ ] Add Contact Info (Email, WhatsApp, LinkedIn, location)

### About Page (`/about`)
- [x] Typography & Heading Refinement
  - [x] Revert Hero Heading: "Driving Intelligent Innovation for Tomorrow's Leaders"
  - [x] Revert Intro Heading: "Powering the future with AI-Powered Smart Solutions"
  - [x] Revert Vision Heading: "Our Vision for Tomorrow's AI Landscape"
  - [x] Aggressively scale down all font sizes (H1 from 7xl -> 5xl, H2 from 7xl -> 5xl)
  - [x] Scale down vision list items and paragraphs for a minimalistic look
- [x] Redesign to Premium Dark/Neon Aesthetic
- [x] Implement Company Story & Origins
- [x] Implement Mission & Values (Glassmorphism cards)
- [x] Implement Founder Profile (Sayab - CEO)
- [x] Implement [NEW] Team Section
- [x] Add Numbers Section (Interactive Metrics)
- [x] Refine Visual Rhythm (Lighter/Alternating Sections)
  - [x] Convert Vision Section to Light Theme
  - [x] Revert AboutIntro (Heritage) to Dark Theme
  - [x] Reduce vertical padding across all sections (`py-16 md:py-24`)
  - [x] Standardize neutral icon colors (Gray in Vision, White in Mission)
  - [x] Fix Heading Colors (Gray in Vision, Yellow/Neon in Dark Sections)
- [x] Implement Process Page
    - [x] Setup directory structure and generate assets
    - [x] Create ProcessHeader.tsx (premium two-column hero)
    - [x] Create StrategicWorkflow.tsx (interactive 7-step walkthrough)
    - [x] Create DeliveryStandard.tsx (values and standards)
    - [x] Integrate all sections into app/process/page.tsx
- [x] Apply grid dot background to About, Contact, Experts, Portfolio, and Case Studies headers
- [x] Apply grid dot background to Services page header and sub-pages (AI-ML, Automation, etc.)
- [x] Verify home page is excluded from changes

### How We Work Page (`/process`)
- [x] Implement Phase 01: Discovery & Alignment
- [x] Implement Phase 02: Architecture Design
- [x] Implement Phase 03: Co-Creation Phase
- [x] Implement Phase 04: Intelligence Injection
- [x] Implement Phase 05: System Hardening
- [x] Implement Phase 06: The Handover
- [x] Implement Phase 07: Scale & Support

### Portfolio Page (`/portfolio`)
- [x] Refactor [PortfolioPageHeader.tsx](file:///d:/Revotic%20AI%20Testing/revoticai/components/sections/Portfolio/PortfolioPageHeader.tsx) (Premium Hero implemented)
- [x] Restore original Grid & Gallery layout (Requested Reversion)
- [x] Verify site-wide consistency

### Blog Page (`/blogs`)
- [x] Consolidate blog data into [lib/data/blog.ts](file:///d:/Revotic%20AI%20Testing/revoticai/lib/data/blog.ts)
- [x] Refactor `BlogPageHeader.tsx` (80px padding, grid-dots, styling)
- [x] Create/Refactor [BlogCard.tsx](file:///d:/Revotic%20AI%20Testing/revoticai/components/cards/BlogCard.tsx) for premium aesthetic
- [x] Final assembly in [app/blogs/page.tsx](file:///d:/Revotic%20AI%20Testing/revoticai/app/blogs/page.tsx) with filtering
- [x] Refactor Individual Blog Page (`[slug]`) for dark theme & readability
- [x] Add "Project In Mind?" CTA to Blog pages

## Completed
- [x] Home Page (`/`)
- [x] Services Page (`/services`) (Interactive Infographic Matrix implemented)
