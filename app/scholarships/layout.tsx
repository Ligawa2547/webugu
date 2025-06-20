import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "WGU Scholarships",
  description: "Explore and apply for scholarships at Western Governors University",
}

export default function ScholarshipsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-wgu-navy text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            WGU Scholarships
          </Link>
          <div className="space-x-4">
            <Link href="/scholarships/dashboard" className="hover:text-wgu-yellow">
              Dashboard
            </Link>
            <Link href="/scholarships/profile" className="hover:text-wgu-yellow">
              Profile
            </Link>
            <Link href="/scholarships/auth/sign-out" className="hover:text-wgu-yellow">
              Sign Out
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-200 text-center p-4">
        <p>&copy; 2023 Western Governors University. All rights reserved.</p>
      </footer>
    </div>
  )
}
