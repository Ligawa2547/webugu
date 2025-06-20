import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen, Briefcase, Clock, CheckCircle, FileText } from "lucide-react"

const programLevels = [
  {
    id: "degree",
    title: "Degree Programs",
    icon: <GraduationCap className="h-10 w-10 text-wguc-secondary" />,
    description: "Comprehensive academic programs leading to bachelor's and master's degrees in various disciplines.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vasily-koloda-8CqDvPuo_kI-unsplash.jpg-nsUT9EYU9DVbGEJ6RN4hDWZzfk9Vao.jpeg",
    categories: [
      {
        name: "Bachelor's Degrees",
        programs: [
          "Business Administration",
          "Computer Science",
          "Information Technology",
          "Cybersecurity",
          "Nursing",
          "Education",
          "And many more...",
        ],
      },
      {
        name: "Master's Degrees",
        programs: [
          "MBA",
          "Data Analytics",
          "Cybersecurity",
          "Educational Leadership",
          "Nursing Leadership",
          "And many more...",
        ],
      },
    ],
  },
  {
    id: "diploma",
    title: "Diploma Programs",
    icon: <Award className="h-10 w-10 text-wguc-secondary" />,
    description: "Specialized programs providing practical skills and knowledge for specific career paths.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cie-ptit-AaDqipXeAPU-unsplash.jpg-aaZtsUXWS2rWoE563RqgQ4u8MJ9kyK.jpeg",
    categories: [
      {
        name: "Business Diplomas",
        programs: [
          "Business Management",
          "Hotel Management",
          "Hospitality Management",
          "Travel and Tourism Management",
          "Human Resource Management",
          "Project Management",
          "Procurement and Supply",
          "Marketing and Communication",
        ],
      },
      {
        name: "IT Diplomas",
        programs: ["ICT", "Computer Networking", "Web Development", "IT Support", "Database Management"],
      },
      {
        name: "Healthcare Diplomas",
        programs: [
          "Nursing Assistant",
          "Medical Records Management",
          "Health Information Technology",
          "Pharmacy Assistant",
        ],
      },
      {
        name: "Education Diplomas",
        programs: ["Early Childhood Development", "Teaching Assistant", "Special Needs Education"],
      },
    ],
  },
  {
    id: "certificate",
    title: "Certificate Programs",
    icon: <FileText className="h-10 w-10 text-wguc-secondary" />,
    description: "Short-term programs focused on specific skills and knowledge areas for quick career advancement.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shiona-das-mj8SvAb2pAc-unsplash.jpg-AgkpXXQpzfciw0m8TLy5zmKxaf0IXB.jpeg",
    categories: [
      {
        name: "Short-term Certificates",
        programs: [
          "Less than 12 weeks: Focused IT certifications",
          "Less than 1 year: Specialized certifications in IT and education",
        ],
      },
      {
        name: "Professional Certificates",
        programs: [
          "Business Communication",
          "Bookkeeping",
          "Office Administration",
          "First Aid",
          "CPR",
          "Medical Billing and Coding",
        ],
      },
    ],
  },
  {
    id: "artisan",
    title: "Artisan Programs",
    icon: <BookOpen className="h-10 w-10 text-wguc-secondary" />,
    description: "Hands-on training programs focused on practical skills and trades for immediate employment.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w-r-Y4lc67uKU_Y-unsplash.jpg-Oq1q0ENKQV3edwSidsJroRVR31L2C4.jpeg",
    categories: [
      {
        name: "Technical Skills",
        programs: [
          "Computer Hardware Repair",
          "Network Cabling",
          "Electronics Technician",
          "Home Health Aide",
          "Medical Equipment Technician",
        ],
      },
      {
        name: "Vocational Training",
        programs: ["Sales Techniques", "Retail Operations", "Educational Materials Production", "Childcare Provider"],
      },
    ],
  },
]

const admissionRequirements = [
  {
    level: "Degree Programs",
    requirements: [
      "High school diploma or equivalent",
      "Minimum GPA of 2.5",
      "Completed application form",
      "Official transcripts",
      "Personal statement",
      "Letters of recommendation (for some programs)",
      "Entrance examination (for some programs)",
    ],
  },
  {
    level: "Diploma Programs",
    requirements: [
      "High school diploma or equivalent",
      "Completed application form",
      "Official transcripts",
      "Basic computer literacy",
      "English proficiency",
    ],
  },
  {
    level: "Certificate Programs",
    requirements: [
      "High school diploma or equivalent (for some programs)",
      "Completed application form",
      "Basic literacy and numeracy skills",
      "Program-specific prerequisites (if any)",
    ],
  },
  {
    level: "Artisan Programs",
    requirements: [
      "Basic literacy and numeracy skills",
      "Completed application form",
      "Aptitude for hands-on learning",
      "Program-specific prerequisites (if any)",
    ],
  },
]

export default function Admissions() {
  return (
    <div className="bg-gradient-to-b from-wguc-primary to-wguc-primary/90 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-wguc-secondary">Admissions</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Explore our wide range of programs and take the next step in your educational journey. Western Governors
            University College offers flexible, affordable, and career-focused education options for all students.
          </p>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-wguc-secondary text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Choose Your Program",
                description: "Browse our programs and select the one that aligns with your career goals.",
                icon: <FileText className="h-8 w-8 text-wguc-secondary" />,
              },
              {
                step: 2,
                title: "Submit Application",
                description: "Complete the online application form and submit required documents.",
                icon: <Briefcase className="h-8 w-8 text-wguc-secondary" />,
              },
              {
                step: 3,
                title: "Application Review",
                description: "Our admissions team will review your application and credentials.",
                icon: <Clock className="h-8 w-8 text-wguc-secondary" />,
              },
              {
                step: 4,
                title: "Acceptance & Enrollment",
                description: "Receive your acceptance letter and complete the enrollment process.",
                icon: <CheckCircle className="h-8 w-8 text-wguc-secondary" />,
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-wguc-secondary hover:bg-white/20 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <div className="bg-wguc-secondary/20 p-4 rounded-full">{step.icon}</div>
                  </div>
                  <CardTitle className="text-xl text-wguc-secondary text-center">
                    Step {step.step}: {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Program Levels */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-wguc-secondary text-center">Our Program Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programLevels.map((level, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-wguc-secondary hover:bg-white/20 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">{level.icon}</div>
                  <CardTitle className="text-xl text-wguc-secondary text-center">{level.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-4">{level.description}</p>
                  <div className="relative h-40 w-full rounded-md overflow-hidden mb-4">
                    <Image src={level.image || "/placeholder.svg"} alt={level.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-wguc-primary/40"></div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button
                    asChild
                    className="bg-wguc-secondary text-wguc-primary hover:bg-white hover:text-wguc-primary"
                  >
                    <a href={`#${level.id}`}>View Details</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Program Levels */}
        {programLevels.map((level, index) => (
          <div key={index} id={level.id} className="mb-16 scroll-mt-20">
            <div className="flex flex-col md:flex-row items-center mb-8 bg-white/5 p-6 rounded-xl">
              <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
                <div className="relative h-60 w-full rounded-lg overflow-hidden">
                  <Image src={level.image || "/placeholder.svg"} alt={level.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-wguc-primary/40 flex items-center justify-center">
                    <div className="text-center">
                      {level.icon}
                      <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">{level.title}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg mb-4">{level.description}</p>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-wguc-secondary">Admission Requirements</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {admissionRequirements
                      .find((req) => req.level === level.title)
                      ?.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                  </ul>
                </div>
                <Button asChild className="bg-wguc-secondary text-wguc-primary hover:bg-white hover:text-wguc-primary">
                  <Link href={`/apply?level=${encodeURIComponent(level.id)}`}>Apply for {level.title}</Link>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {level.categories.map((category, catIndex) => (
                <Card key={catIndex} className="bg-white/10 backdrop-blur-sm border-wguc-secondary/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-wguc-secondary">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.programs.map((program, progIndex) => (
                        <li key={progIndex} className="flex items-start">
                          <span className="text-wguc-secondary mr-2">•</span>
                          <span>{program}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Application Deadlines */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-wguc-secondary text-center">Application Deadlines</h2>
          <Card className="bg-white/10 backdrop-blur-sm border-wguc-secondary">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    term: "January Intake",
                    deadline: "November 15",
                    classes: "January 10",
                  },
                  {
                    term: "May Intake",
                    deadline: "March 15",
                    classes: "May 10",
                  },
                  {
                    term: "September Intake",
                    deadline: "July 15",
                    classes: "September 10",
                  },
                ].map((intake, index) => (
                  <div key={index} className="bg-wguc-primary/30 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-wguc-secondary">{intake.term}</h3>
                    <p>
                      <strong>Application Deadline:</strong> {intake.deadline}
                    </p>
                    <p>
                      <strong>Classes Begin:</strong> {intake.classes}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="italic">
                  Note: Applications received after the deadline may be considered for the next intake period.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* International Students */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-wguc-secondary text-center">
            International Students
          </h2>
          <Card className="bg-white/10 backdrop-blur-sm border-wguc-secondary">
            <CardContent className="p-6">
              <p className="mb-4">
                Western Governors University College welcomes students from around the world. International applicants
                must meet the following additional requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Proof of English proficiency (TOEFL, IELTS, or equivalent)</li>
                <li>Educational credentials evaluation</li>
                <li>Copy of passport</li>
                <li>Financial documentation</li>
                <li>International student application supplement</li>
              </ul>
              <div className="text-center">
                <Button asChild className="bg-wguc-secondary text-wguc-primary hover:bg-white hover:text-wguc-primary">
                  <Link href="/contact">Contact International Admissions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-wguc-secondary/20 rounded-xl p-8 md:p-12 text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-wguc-secondary">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards your future with Western Governors University College. Our admissions team is
            ready to help you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-wguc-secondary text-wguc-primary hover:bg-white hover:text-wguc-primary text-lg px-8 py-6"
              size="lg"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-wguc-secondary text-wguc-secondary hover:bg-wguc-secondary hover:text-wguc-primary text-lg px-8 py-6"
              size="lg"
            >
              <Link href="/uploads">Download Application Forms</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
