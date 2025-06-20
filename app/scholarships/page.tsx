import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-wgu-navy mb-8 text-center">WGU Scholarships</h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-wgu-navy mb-4">Welcome to WGU Scholarships</h2>
          <p className="text-gray-600 mb-6">
            At Western Governors University, we believe in making education accessible to all. Our scholarship program
            is designed to support students in achieving their academic and career goals. Explore our available
            scholarships and take the first step towards your future today.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild className="bg-wgu-yellow hover:bg-wgu-navy text-black hover:text-wgu-yellow">
              <Link href="/scholarships/auth/sign-up">Sign Up</Link>
            </Button>
            <Button asChild className="bg-wgu-navy hover:bg-wgu-yellow text-white hover:text-black">
              <Link href="/scholarships/auth/sign-in">Sign In</Link>
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-wgu-navy mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li>Create an account using your WGU email address</li>
            <li>Sign in to access the scholarship dashboard</li>
            <li>Browse available scholarships and their requirements</li>
            <li>Apply for scholarships that match your qualifications</li>
            <li>Track your application status in your account</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
