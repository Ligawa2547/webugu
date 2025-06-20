import Link from "next/link"
import { Button } from "@/components/ui/button"

const colleges = [
  {
    name: "College of Business",
    description:
      "Develops leaders with the skills to navigate the complexities of modern industries. Programs focus on management, entrepreneurship, finance, and global business trends.",
    undergraduate: [
      "B.S. Business Administration – Management",
      "B.S. Business Administration – Accounting",
      "B.S. Business Administration – Marketing",
      "B.S. Business Administration – Healthcare Management",
      "B.S. Business Administration – Human Resource Management",
      "B.S. Supply Chain Management and Logistics",
      "B.S. Finance",
      "B.S. Business Analytics",
      "B.S. Entrepreneurship",
    ],
    graduate: [
      "Master of Business Administration (MBA)",
      "MBA in IT Management",
      "MBA in Healthcare Management",
      "M.S. Management and Leadership",
      "M.S. Finance",
      "M.S. Marketing",
      "M.S. Data-Driven Decision Making",
      "Executive MBA (EMBA)",
    ],
  },
  {
    name: "College of Information Technology",
    description:
      "Designed for tech-savvy individuals who want to shape the future of technology. These programs incorporate industry certifications, making graduates job-ready from day one.",
    undergraduate: [
      "B.S. Computer Science",
      "B.S. Information Technology",
      "B.S. Cybersecurity and Information Assurance (NSA-Certified)",
      "B.S. Data Management/Data Analytics",
      "B.S. Software Development",
      "B.S. Cloud Computing",
      "B.S. Artificial Intelligence and Machine Learning",
      "B.S. Networking and Security",
    ],
    graduate: [
      "M.S. Cybersecurity and Information Assurance",
      "M.S. Data Analytics",
      "M.S. Information Technology Management",
      "M.S. Software Engineering",
      "M.S. Cloud Computing and DevOps",
      "M.S. Artificial Intelligence and Machine Learning",
    ],
  },
  {
    name: "College of Health Professions",
    description:
      "Prepares students to become leaders in healthcare, focusing on improving patient care and advancing public health initiatives.",
    undergraduate: [
      "B.S. Nursing (RN to BSN)",
      "B.S. Health Services Coordination",
      "B.S. Public Health",
      "B.S. Healthcare Administration",
      "B.S. Health Informatics",
    ],
    graduate: [
      "M.S. Nursing – Leadership and Management",
      "M.S. Nursing – Education",
      "M.S. Nursing – Family Nurse Practitioner",
      "M.S. Healthcare Administration",
      "M.S. Public Health",
      "M.S. Health Informatics",
    ],
  },
  {
    name: "College of Teaching",
    description:
      "Equips educators with the skills and knowledge to transform classrooms and influence future generations. The college emphasizes inclusive education and innovative teaching practices.",
    undergraduate: [
      "B.A. Elementary Education",
      "B.A. Special Education",
      "B.A. Early Childhood Education",
      "B.A. Secondary Education (with subject-specific focuses such as Math, Science, and English)",
      "B.A. Educational Studies",
    ],
    graduate: [
      "M.A. Teaching (Elementary or Secondary Education)",
      "M.S. Curriculum and Instruction",
      "M.S. Educational Leadership (for aspiring principals)",
      "M.S. Learning Design and Technology",
      "M.Ed. Instructional Design",
      "M.Ed. in Educational Psychology",
    ],
  },
]

export default function Programs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-wgu-navy">Academic Programs</h1>
      <p className="text-xl mb-12 text-center">
        WGU offers a wide range of fully online degree programs across four colleges, targeting high-demand fields in
        business, technology, healthcare, and education. These programs are designed to meet current market trends and
        provide students with the tools they need for professional success.
      </p>

      {colleges.map((college, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-wgu-navy">{college.name}</h2>
          <p className="text-lg mb-6">{college.description}</p>

          <h3 className="text-2xl font-semibold mb-4 text-wgu-navy">Undergraduate Degrees</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            {college.undergraduate.map((degree, degreeIndex) => (
              <li key={degreeIndex} className="text-lg">
                {degree}
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-wgu-navy">Graduate Degrees</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            {college.graduate.map((degree, degreeIndex) => (
              <li key={degreeIndex} className="text-lg">
                {degree}
              </li>
            ))}
          </ul>

          <Button
            asChild
            className="bg-wgu-yellow hover:bg-wgu-navy text-black hover:text-wgu-yellow transition-colors"
          >
            <Link href={`/apply?college=${encodeURIComponent(college.name)}`}>Apply to {college.name}</Link>
          </Button>
        </div>
      ))}

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-wgu-navy">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Take the first step towards your future with WGU.</p>
        <Button
          asChild
          className="bg-wgu-yellow hover:bg-wgu-navy text-black hover:text-wgu-yellow transition-colors text-xl px-8 py-4"
        >
          <Link href="/apply">Apply Now</Link>
        </Button>
      </div>
    </div>
  )
}
