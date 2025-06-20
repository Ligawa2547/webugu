"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    school: "",
    program: "",
    studyMode: "",
    paymentOption: "",
  })
  const [files, setFiles] = useState({
    idDocument: null,
    certificate: null,
    transcript: null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const schools = [
    { value: "IT", label: "School of IT" },
    { value: "Business", label: "School of Business" },
    { value: "Education", label: "School of Education" },
    { value: "Healthcare", label: "School of Healthcare" },
  ]

  const programsBySchool = {
    IT: [
      "Software Development",
      "Cybersecurity",
      "Computer Science",
      "Data Science",
      "Information Technology Management",
      "Computer Networking",
      "Cloud Computing",
      "AI and Machine Learning",
      "Mobile App Development",
      "Database Administration",
      "Blockchain Development",
      "Game Design and Development",
      "Web Development",
      "IoT Engineering",
      "DevOps Engineering",
      "IT Project Management",
    ],
    Business: [
      "Business Administration",
      "Marketing",
      "Finance",
      "Accounting",
      "Human Resource Management",
      "Entrepreneurship",
      "International Business",
      "Operations Management",
      "Business Analytics",
      "Management Information Systems",
      "Real Estate Management",
      "Hospitality Management",
      "Supply Chain Management",
      "Economics",
      "Project Management",
    ],
    Education: [
      "Early Childhood Education",
      "Special Education",
      "Curriculum Design",
      "Educational Leadership",
      "Elementary Education",
      "Secondary Education",
      "Instructional Technology",
      "TESOL (Teaching English to Speakers of Other Languages)",
      "Educational Psychology",
      "School Counseling",
      "Adult Education and Training",
      "Physical Education",
      "Music Education",
      "Art Education",
      "STEM Education",
    ],
    Healthcare: [
      "Nursing",
      "Medicine",
      "Health Informatics",
      "Public Health",
      "Healthcare Management",
      "Clinical Laboratory Science",
      "Medical Imaging",
      "Pharmacy Technician",
      "Occupational Therapy",
      "Physical Therapy",
      "Healthcare Administration",
      "Nutrition and Dietetics",
      "Mental Health Counseling",
      "Biomedical Science",
      "Speech-Language Pathology",
      "Health Education and Promotion",
    ],
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "school" && { program: "" }), // Reset program if school changes
    }))
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    setFiles((prev) => ({
      ...prev,
      [name]: files[0],
    }))
  }

  const uploadFile = async (file, folder) => {
    if (!file) return null
    const fileName = `${Date.now()}-${file.name}`
    const { data, error } = await supabase.storage.from("documents").upload(`${folder}/${fileName}`, file)

    if (error) throw error
    return data.path
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Upload files
      const idDocumentLink = await uploadFile(files.idDocument, "id")
      const certificateLink = await uploadFile(files.certificate, "certificates")
      const transcriptLink = await uploadFile(files.transcript, "transcripts")

      // Insert the application data into Supabase
      const { data, error } = await supabase.from("applications").insert([
        {
          ...formData,
          idDocumentLink,
          certificateLink,
          transcriptLink,
        },
      ])

      if (error) throw error

      console.log("Application submitted successfully:", data)
      router.push("/apply/confirmation")
    } catch (error) {
      console.error("Error submitting application:", error)
      setError(`Error submitting your application: ${error.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-wgu-yellow">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">Apply to WGU</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className="mb-4">
          <Label htmlFor="fullName" className="text-black">
            Full Name
          </Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full border-black"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="text-black">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full border-black"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="phone" className="text-black">
            Phone
          </Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full border-black"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="school" className="text-black">
            School
          </Label>
          <select
            id="school"
            name="school"
            value={formData.school}
            onChange={handleInputChange}
            required
            className="w-full border-black"
          >
            <option value="">Select a school</option>
            {schools.map((school) => (
              <option key={school.value} value={school.value}>
                {school.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <Label htmlFor="program" className="text-black">
            Program
          </Label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleInputChange}
            required
            className="w-full border-black"
            disabled={!formData.school}
          >
            <option value="">Select a program</option>
            {formData.school &&
              programsBySchool[formData.school]?.map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-4">
          <Label htmlFor="studyMode" className="text-black">
            Mode of Study
          </Label>
          <select
            id="studyMode"
            name="studyMode"
            value={formData.studyMode}
            onChange={handleInputChange}
            required
            className="w-full border-black"
          >
            <option value="online">Online</option>
            <option value="in-person">In-person</option>
          </select>
        </div>
        <div className="mb-4">
          <Label htmlFor="paymentOption" className="text-black">
            Payment Option
          </Label>
          <select
            id="paymentOption"
            name="paymentOption"
            value={formData.paymentOption}
            onChange={handleInputChange}
            required
            className="w-full border-black"
          >
            <option value="fee">Pay Registration Fee</option>
            <option value="waiver">Request for a Waiver</option>
          </select>
        </div>
        <div className="mb-4">
          <Label htmlFor="idDocument" className="text-black">
            ID Document
          </Label>
          <Input
            type="file"
            id="idDocument"
            name="idDocument"
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png"
            required
            className="w-full border-black"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="certificate" className="text-black">
            High School Certificate
          </Label>
          <Input
            type="file"
            id="certificate"
            name="certificate"
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png"
            required
            className="w-full border-black"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="transcript" className="text-black">
            Transcript
          </Label>
          <Input
            type="file"
            id="transcript"
            name="transcript"
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png"
            required
            className="w-full border-black"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-wgu-yellow hover:bg-wgu-yellow hover:text-black transition-colors"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </div>
  )
}
