import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-16 bg-wgu-yellow min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">Application Submitted</h1>
      <p className="text-xl mb-8 text-center text-black">
        Thank you for submitting your application to Western Governors University. We have received your information and
        will review it shortly. You will receive a confirmation email soon.
      </p>
      <Button asChild className="bg-black text-wgu-yellow hover:bg-wgu-yellow hover:text-black transition-colors">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  )
}
