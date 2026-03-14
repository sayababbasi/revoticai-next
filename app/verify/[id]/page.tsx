

// app/verify/[id]/page.tsx
import { notFound } from "next/navigation";

interface Intern {
  id: string;
  name: string;
  department: string;
  duration: string;
  remarks: string;
  certificate: string;
  offerLetter: string;
  experienceLetter: string;
}

// Replace this with your full static data or fetch at build time
const internData: Intern[] = [
  {
    id: "REV-AUG-03",
    name: "M. SAAD MASOOD",
    department: "AI/ML",
    duration: "2 Months",
    remarks: "Excellent",
    certificate: "/certificates/REV-AUG-03-internship.pdf",
    offerLetter: "/certificates/REV-AUG-03-offer.pdf",
    experienceLetter: "/certificates/REV-AUG-03-experience.pdf",
  },
  {
    id: "REV-DEMO",
    name: "Sayab Abbasi",
    department: "AI/ML",
    duration: "2 Months",
    remarks: "Excellent",
    certificate: "/certificates/REV-AUG-03-internship.pdf",
    offerLetter: "/certificates/REV-AUG-03-offer.pdf",
    experienceLetter: "/certificates/REV-AUG-03-experience.pdf",
  },
  {
    id: "REV-INT-AUG01",
    name: "Ayesha Noman",
    department: "AI/ML Dev",
    duration: "1 Months",
    remarks: "Good",
    certificate: "/certificates/REV-INT-AUG01-internship.pdf",
    offerLetter: "/certificates/REV-INT-AUG01-offer.pdf",
    experienceLetter: "/certificates/REV-INT-AUG01-experience.pdf",
  },
];

// This is REQUIRED for static export of dynamic routes
export async function generateStaticParams() {
  return internData.map((intern) => ({ id: intern.id }));
}

export default function VerifyPage({ params }: { params: { id: string } }) {
  const intern = internData.find((i) => i.id === params.id);

  if (!intern) return notFound();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-lg border border-gray-100 text-center">
        <h1 className="text-2xl font-bold mb-2 text-black">Verification Successful</h1>
        <p className="text-gray-600 mb-6">
          The following record has been verified in Revotic AI’s database.
        </p>

        <div className="text-left space-y-3">
          <p><strong>ID:</strong> {intern.id}</p>
          <p><strong>Name:</strong> {intern.name}</p>
          <p><strong>Department:</strong> {intern.department}</p>
          <p><strong>Duration:</strong> {intern.duration}</p>
          <p><strong>Remarks:</strong> {intern.remarks}</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          {intern.certificate && (
            <a href={intern.certificate} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#b1ff32] text-black font-semibold rounded-full hover:scale-105 transition">
              View Certificate
            </a>
          )}
          {intern.offerLetter && (
            <a href={intern.offerLetter} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition">
              Offer Letter
            </a>
          )}
          {intern.experienceLetter && (
            <a href={intern.experienceLetter} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition">
              Experience Letter
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
