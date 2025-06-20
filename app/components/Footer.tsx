import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-wgu-navy text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-wgu-yellow">About WGU</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-wgu-yellow transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/accreditation" className="hover:text-wgu-yellow transition-colors">
                  Accreditation
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-wgu-yellow transition-colors">
                  Careers at WGU
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-wgu-yellow">Academics</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="hover:text-wgu-yellow transition-colors">
                  All Programs
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="hover:text-wgu-yellow transition-colors">
                  Colleges
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-wgu-yellow transition-colors">
                  Faculty
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-wgu-yellow">Student Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/library" className="hover:text-wgu-yellow transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/career-services" className="hover:text-wgu-yellow transition-colors">
                  Career Services
                </Link>
              </li>
              <li>
                <Link href="/student-support" className="hover:text-wgu-yellow transition-colors">
                  Student Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-wgu-yellow">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-wgu-yellow transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/western-governor-university/"
                  className="hover:text-wgu-yellow transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-wgu-yellow transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-wgu-yellow transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-wgu-yellow text-center">
          <p className="mb-2">Email: info@wgu.college | scholarships@wgu.college | registrar@wgu.college</p>
          <p className="mb-2">Phone/WhatsApp: +17744801426</p>
          <p className="text-wgu-yellow">
            &copy; {new Date().getFullYear()} Western Governors University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
