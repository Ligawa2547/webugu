import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  CalendarIcon,
  GraduationCapIcon,
  DollarSignIcon,
  ClockIcon,
  BookmarkIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "lucide-react"

export default async function ScholarshipDashboard() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/scholarships/auth/sign-in")
  }

  const { data: openScholarships } = await supabase.from("scholarships").select("*").eq("status", "open")

  const { data: applications } = await supabase
    .from("scholarship_applications")
    .select("*, scholarships(*)")
    .eq("user_id", session.user.id)

  const savedApplications = applications?.filter((app) => app.status === "saved") || []
  const pendingApplications = applications?.filter((app) => app.status === "pending") || []
  const completedApplications = applications?.filter((app) => ["approved", "rejected"].includes(app.status)) || []

  const isAdmin = session.user.email === "scholarships@wgu.college"

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold text-wgu-navy mb-4">Dashboard</h2>
          <nav className="space-y-2">
            <Link href="#open-scholarships" className="block py-2 px-4 rounded hover:bg-gray-200">
              Open Scholarships
            </Link>
            <Link href="#saved-applications" className="block py-2 px-4 rounded hover:bg-gray-200">
              Saved Applications
            </Link>
            <Link href="#pending-applications" className="block py-2 px-4 rounded hover:bg-gray-200">
              Pending Applications
            </Link>
            <Link href="#completed-applications" className="block py-2 px-4 rounded hover:bg-gray-200">
              Completed Applications
            </Link>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-wgu-navy mb-8">
          {isAdmin ? "Scholarship Administration" : "Scholarship Dashboard"}
        </h1>

        {isAdmin && (
          <div className="mb-8">
            <Button asChild className="bg-wgu-yellow hover:bg-wgu-navy text-black hover:text-wgu-yellow">
              <Link href="/scholarships/admin/create">Add New Scholarship</Link>
            </Button>
          </div>
        )}

        <section id="open-scholarships" className="mb-12">
          <h2 className="text-2xl font-bold text-wgu-navy mb-4">Open Scholarships</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {openScholarships?.map((scholarship) => (
              <Card key={scholarship.id} className="bg-white">
                <CardHeader>
                  <CardTitle>{scholarship.title}</CardTitle>
                  <CardDescription>{scholarship.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <DollarSignIcon className="mr-2 h-4 w-4 text-wgu-yellow" />
                      <span>
                        <strong>Amount:</strong> ${scholarship.amount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4 text-wgu-yellow" />
                      <span>
                        <strong>Deadline:</strong> {new Date(scholarship.deadline).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCapIcon className="mr-2 h-4 w-4 text-wgu-yellow" />
                      <span>
                        <strong>Eligibility:</strong> {scholarship.eligibility}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="mr-2 h-4 w-4 text-wgu-yellow" />
                      <span>
                        <strong>Duration:</strong> {scholarship.duration}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-wgu-yellow hover:bg-wgu-navy text-black hover:text-wgu-yellow">
                    <Link href={`/scholarships/${isAdmin ? "admin/applications" : "apply"}/${scholarship.id}`}>
                      {isAdmin ? "View Applications" : "Apply Now"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {!isAdmin && (
          <>
            <section id="saved-applications" className="mb-12">
              <h2 className="text-2xl font-bold text-wgu-navy mb-4">Saved Applications</h2>
              <ApplicationList applications={savedApplications} icon={<BookmarkIcon className="mr-2 h-4 w-4" />} />
            </section>

            <section id="pending-applications" className="mb-12">
              <h2 className="text-2xl font-bold text-wgu-navy mb-4">Pending Applications</h2>
              <ApplicationList applications={pendingApplications} icon={<ClockIcon className="mr-2 h-4 w-4" />} />
            </section>

            <section id="completed-applications" className="mb-12">
              <h2 className="text-2xl font-bold text-wgu-navy mb-4">Completed Applications</h2>
              <ApplicationList
                applications={completedApplications}
                icon={<CheckCircleIcon className="mr-2 h-4 w-4" />}
                rejectedIcon={<XCircleIcon className="mr-2 h-4 w-4" />}
              />
            </section>
          </>
        )}

        {openScholarships?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No scholarships available at this time.</p>
          </div>
        )}
      </div>
    </div>
  )
}

function ApplicationList({ applications, icon, rejectedIcon = null }) {
  if (applications.length === 0) {
    return <p className="text-gray-600">No applications in this category.</p>
  }

  return (
    <ScrollArea className="h-[300px] w-full rounded-md border">
      <div className="p-4">
        {applications.map((application, index) => (
          <div key={application.id}>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{application.scholarships.title}</h3>
                <p className="text-sm text-gray-500">
                  Applied on: {new Date(application.created_at).toLocaleDateString()}
                </p>
              </div>
              <Badge
                className={
                  application.status === "pending"
                    ? "bg-yellow-500"
                    : application.status === "approved"
                      ? "bg-green-500"
                      : application.status === "rejected"
                        ? "bg-red-500"
                        : "bg-blue-500"
                }
              >
                {application.status === "rejected" && rejectedIcon ? rejectedIcon : icon}
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </Badge>
            </div>
            <div className="mt-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/scholarships/application/${application.id}`}>View Application</Link>
              </Button>
            </div>
            {index < applications.length - 1 && <Separator className="my-4" />}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
