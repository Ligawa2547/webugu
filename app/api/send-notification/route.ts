import { NextResponse } from "next/server"
import { createTransport } from "nodemailer"

export async function POST(req: Request) {
  const { applicantEmail, adminEmail } = await req.json()

  const transporter = createTransport({
    host: "smtp.example.com",
    port: 587,
    auth: {
      user: "your-email@example.com",
      pass: "your-password",
    },
  })

  try {
    // Send email to applicant
    await transporter.sendMail({
      from: "noreply@wgu.college",
      to: applicantEmail,
      subject: "Application Received - Western Governors University",
      text: "Thank you for submitting your application to Western Governors University. We will review your application and get back to you soon.",
    })

    // Send email to admin
    await transporter.sendMail({
      from: "noreply@wgu.college",
      to: adminEmail,
      subject: "New Application Submitted",
      text: `A new application has been submitted by ${applicantEmail}. Please review it in the admin dashboard.`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending notification emails:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
