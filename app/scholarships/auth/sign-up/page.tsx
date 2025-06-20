"use client"

import type React from "react"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    role: "",
    adm_no: "", // Add adm_no to the formData state
  })
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRoleChange = (value: string) => {
    setFormData({ ...formData, role: value })
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!formData.email.endsWith("@wgu.college")) {
      setError("Please use your WGU email address (@wgu.college)")
      return
    }

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${location.origin}/scholarships/auth/callback`,
        },
      })

      if (authError) throw authError

      if (authData.user) {
        const { error: insertError } = await supabase.from("scholarships").insert([
          {
            user_id: authData.user.id,
            email: formData.email,
            first_name: formData.first_name,
            last_name: formData.last_name,
            role: formData.role,
            adm_no: formData.adm_no, // Add adm_no in the insert statement
          },
        ])

        if (insertError) throw insertError

        router.push("/scholarships/auth/verify")
      }
    } catch (error) {
      console.error("Signup error:", error)
      setError(error.message || "An error occurred during signup. Please try again.")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-wgu-navy">Sign up for WGU Scholarships</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Use your WGU email address to create an account</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.name@wgu.college"
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <Input
                id="first_name"
                name="first_name"
                type="text"
                required
                value={formData.first_name}
                onChange={handleInputChange}
                placeholder="First Name"
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <Input
                id="last_name"
                name="last_name"
                type="text"
                required
                value={formData.last_name}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <Select onValueChange={handleRoleChange} required>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="staff">Staff</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="adm_no" className="block text-sm font-medium text-gray-700">
                Admission Number
              </label>
              <Input
                id="adm_no"
                name="adm_no"
                type="text"
                required
                value={formData.adm_no}
                onChange={handleInputChange}
                placeholder="Admission Number"
                className="mt-1"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-wgu-yellow hover:bg-wgu-navy text-black hover:text-wgu-yellow">
            Sign up
          </Button>
        </form>
      </div>
    </div>
  )
}
