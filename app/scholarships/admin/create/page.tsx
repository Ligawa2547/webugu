"use client"

import type React from "react"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function CreateScholarship() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
    requirements: "",
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
      const { error } = await supabase.from("scholarships").insert([
        {
          ...formData,
          amount: Number.parseFloat(formData.amount),
          status: "open",
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
        <h1 className="text-3xl font-bold text-wgu-navy mb-8">Create New Scholarship</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Scholarship Title
            </label>
            <Input id="title" name="title" required value={formData.title} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="amount" className="text-sm font-medium">
              Amount ($)
            </label>
            <Input
              id="amount"
              name="amount"
              type="number"
              min="0"
              step="0.01"
              required
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="deadline" className="text-sm font-medium">
              Application Deadline
            </label>
            <Input
              id="deadline"
              name="deadline"
              type="date"
              required
              value={formData.deadline}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="requirements" className="text-sm font-medium">
              Eligibility Requirements
            </label>
            <Textarea
              id="requirements"
              name="requirements"
              required
              value={formData.requirements}
              onChange={handleInputChange}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-wgu-yellow hover:bg-wgu-navy text-black hover:text-wgu-yellow"
          >
            {isSubmitting ? "Creating..." : "Create Scholarship"}
          </Button>
        </form>
      </div>
    </div>
  )
}
