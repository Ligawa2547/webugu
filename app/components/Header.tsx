import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-wgu-navy text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/western-governors-university-logo-12A4A0E47B-seeklogo.com-dbYhBmoHoGL2vGUVvM1SFRJcXDrqjp.png"
            alt="WGU Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-wgu-yellow">WGU</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className="hover:text-wgu-yellow transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-wgu-yellow transition-colors">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="hover:text-wgu-yellow transition-colors">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/tuition" className="hover:text-wgu-yellow transition-colors">
                Tuition
              </Link>
            </li>
            <li>
              <Link href="/campus-life" className="hover:text-wgu-yellow transition-colors">
                Campus Life
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-wgu-yellow transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/scholarships" className="hover:text-wgu-yellow transition-colors">
                Scholarships
              </Link>
            </li>
          </ul>
        </nav>
        <Button asChild className="bg-wgu-yellow text-black hover:bg-black hover:text-wgu-yellow transition-colors">
          <Link href="/apply">Apply Now</Link>
        </Button>
      </div>
    </header>
  )
}
