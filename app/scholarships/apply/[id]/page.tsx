"use client"

import type React from "react"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ScholarshipApplication({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    gpa: "",
    major: "",
    expectedGraduation: "",
    essay: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      const { error } = await supabase.from("scholarship_applications").insert([
        {
          scholarship_id: params.id,
          user_id: user.id,
          ...formData,
          status: "pending",
        },
      ])

      if (error) throw error

      router.push("/scholarships/dashboard")
    } catch (error) {
      setError(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-wgu-navy mb-8">Scholarship Application</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium">
              Full Name
            </label>
            <Input id="fullName" name="fullName" required value={formData.fullName} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <label htmlFor="studentId" className="text-sm font-medium">
              Student ID
            </label>
            <Input id="studentId" name="studentId" required value={formData.studentId} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <label htmlFor="gpa" className="text-sm font-medium">
              Current GPA
            </label>
            <Input
              id="gpa"
              name="gpa"
              type="number"
              step="0.01"
              min="0"
              max="4"
              required
              value={formData.gpa}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="major" className="text-sm font-medium">
              Major
            </label>
            <Input id="major" name="major" required value={formData.major} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <label htmlFor="expectedGraduation" className="text-sm font-medium">
              Expected Graduation Date
            </label>
            <Input
              id="expectedGraduation"
              name="expectedGraduation"
              type="date"
              required
              value={formData.expectedGraduation}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="essay" className="text-sm font-medium">
              Why do you deserve this scholarship? (500 words max)
            </label>
            <Textarea
              id="essay"
              name="essay"
              required
              value={formData.essay}
              onChange={handleInputChange}
              className="h-40"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-wgu-yellow hover:bg-wgu-navy text-black hover:text-wgu-yellow"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </div>
    </div>
  )
}
