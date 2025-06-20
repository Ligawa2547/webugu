"use client"

import { useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Application {
  id: string
  fullName: string
  studentId: string
  gpa: string
  major: string
  expectedGraduation: string
  essay: string
  status: string
  created_at: string
}

export default function ViewApplications({ params }: { params: { id: string } }) {
  const [applications, setApplications] = useState<Application[]>([])
  const [error, setError] = useState<string | null>(null)
  const supabase = createClientComponentClient()

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from("scholarship_applications")
        .select("*")
        .eq("scholarship_id", params.id)

      if (error) throw error
      setApplications(data)
    } catch (error) {
      setError(error.message)
    }
  }

  const updateApplicationStatus = async (applicationId: string, status: "approved" | "rejected") => {
    try {
      const { error } = await supabase.from("scholarship_applications").update({ status }).eq("id", applicationId)

      if (error) throw error
      fetchApplications()
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-wgu-navy mb-8">Scholarship Applications</h1>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-6">
          {applications.map((application) => (
            <div key={application.id} className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-wgu-navy">{application.fullName}</h2>
                  <p className="text-gray-600">Student ID: {application.studentId}</p>
                </div>
                <div className="space-x-2">
                  <Button
                    onClick={() => updateApplicationStatus(application.id, "approved")}
                    className="bg-green-600 hover:bg-green-700 text-white"
                    disabled={application.status !== "pending"}
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() => updateApplicationStatus(application.id, "rejected")}
                    variant="destructive"
                    disabled={application.status !== "pending"}
                  >
                    Reject
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>GPA:</strong> {application.gpa}
                </div>
                <div>
                  <strong>Major:</strong> {application.major}
                </div>
                <div>
                  <strong>Expected Graduation:</strong> {new Date(application.expectedGraduation).toLocaleDateString()}
                </div>
                <div>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`capitalize ${
                      application.status === "approved"
                        ? "text-green-600"
                        : application.status === "rejected"
                          ? "text-red-600"
                          : "text-yellow-600"
                    }`}
                  >
                    {application.status}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Essay</h3>
                <p className="text-gray-600 whitespace-pre-wrap">{application.essay}</p>
              </div>

              <div className="text-sm text-gray-500">
                Applied on: {new Date(application.created_at).toLocaleDateString()}
              </div>
            </div>
          ))}

          {applications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No applications received yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
