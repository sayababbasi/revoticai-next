// "use client";

// import React from "react";
// import { notFound } from "next/navigation";
// import caseStudies from "@/data/case-studies.json";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";

// // Type definition for case study structure
// interface CaseStudy {
//   slug: string;
//   tag: string;
//   title: string;
//   image: string;
//   client: string;
//   industry: string;
//   duration: string;
//   challenge: string;
//   solution: string;
//   results: string[];
//   technologies: string[];
// }

// const CaseStudyDetail: React.FC<{ params: { slug: string } }> = ({ params }) => {
//   const study: CaseStudy | undefined = caseStudies.find(
//     (item: any) => item.slug === params.slug
//   );

//   if (!study) {
//     notFound();
//   }

//   const placeholderImg =
//     "https://placehold.co/1000x800/1a1a1a/333333?text=Project+Image";

//   return (
//     <section className="bg-black text-white min-h-screen py-20 px-6 md:px-12">
//       <div className="max-w-6xl mx-auto">
//         {/* Back Button */}
//         <Link
//           href="/case-studies"
//           className="inline-flex items-center text-gray-400 hover:text-[#b1ff32] mb-8 transition-colors"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
//         </Link>

//         {/* Hero Section */}
//         <div className="mb-12">
//           <img
//             src={study.image || placeholderImg}
//             alt={study.title}
//             onError={(e) => (e.currentTarget.src = placeholderImg)}
//             className="w-full h-[450px] object-cover rounded-xl mb-8"
//           />
//           <p className="text-sm uppercase tracking-wider text-[#b1ff32] font-semibold mb-3">
//             {study.tag}
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">{study.title}</h1>

//           <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
//             <p>
//               <strong className="text-white">Client:</strong> {study.client}
//             </p>
//             <p>
//               <strong className="text-white">Industry:</strong> {study.industry}
//             </p>
//             <p>
//               <strong className="text-white">Duration:</strong> {study.duration}
//             </p>
//           </div>
//         </div>

//         {/* Challenge Section */}
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4 text-[#b1ff32]">The Challenge</h2>
//           <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
//         </div>

//         {/* Solution Section */}
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4 text-[#b1ff32]">Our Solution</h2>
//           <p className="text-gray-300 leading-relaxed">{study.solution}</p>
//         </div>

//         {/* Results Section */}
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4 text-[#b1ff32]">Results & Impact</h2>
//           <ul className="list-disc list-inside text-gray-300 space-y-2">
//             {study.results.map((result, index) => (
//               <li key={index}>{result}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Technologies Section */}
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-4 text-[#b1ff32]">Technologies Used</h2>
//           <div className="flex flex-wrap gap-4">
//             {study.technologies.map((tech, index) => (
//               <span
//                 key={index}
//                 className="bg-[#1a1a1a] border border-[#333] text-gray-200 px-4 py-2 rounded-md text-sm"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 border-t border-[#333] pt-10 text-center">
//           <h3 className="text-3xl font-bold mb-4">
//             Want Similar Results for Your Business?
//           </h3>
//           <p className="text-gray-400 mb-8">
//             Let’s build your next AI-powered product or automate your business workflow.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-block bg-[#b1ff32] text-black px-8 py-3 rounded-md font-semibold hover:bg-white transition-colors"
//           >
//             Start Your Project
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudyDetail;

import { notFound } from "next/navigation";
import caseStudies from "@/data/case-studies.json";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface CaseStudy {
  slug: string;
  tag: string;
  title: string;
  image: string;
  client: string;
  industry: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

export async function generateStaticParams() {
  return caseStudies.map((study: any) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const study: CaseStudy | undefined = (caseStudies as any).find(
    (item: any) => item.slug === params.slug
  );

  if (!study) notFound();

  const imageSrc = study.image || "/images/casestudies/placeholder.jpg";

  return (
    <section className="bg-black text-white min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/case-studies"
          className="inline-flex items-center text-gray-400 hover:text-[#b1ff32] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <img
            src={imageSrc}
            alt={study.title}
            className="w-full h-[450px] object-cover rounded-xl mb-8"
          />
          <p className="text-sm uppercase tracking-wider text-[#b1ff32] font-semibold mb-3">
            {study.tag}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{study.title}</h1>

          <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
            <p>
              <strong className="text-white">Client:</strong> {study.client}
            </p>
            <p>
              <strong className="text-white">Industry:</strong> {study.industry}
            </p>
            <p>
              <strong className="text-white">Duration:</strong> {study.duration}
            </p>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#b1ff32]">The Challenge</h2>
          <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
        </div>

        {/* Solution Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#b1ff32]">Our Solution</h2>
          <p className="text-gray-300 leading-relaxed">{study.solution}</p>
        </div>

        {/* Results Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#b1ff32]">Results & Impact</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {study.results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>

        {/* Technologies Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#b1ff32]">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {study.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-[#1a1a1a] border border-[#333] text-gray-200 px-4 py-2 rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 border-t border-[#333] pt-10 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Want Similar Results for Your Business?
          </h3>
          <p className="text-gray-400 mb-8">
            Let’s build your next AI-powered product or automate your business workflow.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#b1ff32] text-black px-8 py-3 rounded-md font-semibold hover:bg-white transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}

