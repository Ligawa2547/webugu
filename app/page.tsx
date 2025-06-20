import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="bg-wgu-gray">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vadim-sherbakov-d6ebY-faOO0-unsplash.jpg-E4P5BH14OYlsnqwik1vqy9dc48M1rO.jpeg"
          alt="WGU Campus"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Accelerate Your Future with WGU</h1>
            <p className="text-xl mb-8">
              Flexible, affordable, and career-focused online degree programs designed to help you achieve your goals.
            </p>
            <Button
              asChild
              className="bg-wgu-yellow hover:bg-wgu-navy text-black hover:text-wgu-yellow transition-colors"
            >
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-wgu-navy">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Business",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aubrey-odom-UF0WqKWw-es-unsplash.jpg-ArZYCRRrXtOxTIYBGgNEIQtPT3VWdx.jpeg",
                description: "Develop leadership skills and business acumen for the modern corporate world.",
              },
              {
                name: "IT",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w-r-Y4lc67uKU_Y-unsplash.jpg-Oq1q0ENKQV3edwSidsJroRVR31L2C4.jpeg",
                description: "Master cutting-edge technologies and drive innovation in the digital age.",
              },
              {
                name: "Education",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vasily-koloda-8CqDvPuo_kI-unsplash.jpg-nsUT9EYU9DVbGEJ6RN4hDWZzfk9Vao.jpeg",
                description:
                  "Shape the future of learning with advanced teaching methodologies and educational leadership.",
              },
            ].map((program) => (
              <div
                key={program.name}
                className="bg-wgu-gray rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border border-wgu-yellow"
              >
                <div className="relative h-48">
                  <Image src={program.image} alt={program.name} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-wgu-navy">{program.name}</h3>
                  <p className="text-black mb-4">{program.description}</p>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full justify-center text-wgu-navy border-wgu-navy hover:bg-wgu-yellow hover:border-wgu-yellow hover:text-black transition-colors"
                  >
                    <Link href={`/programs/${program.name.toLowerCase()}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="py-16 bg-wgu-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-wgu-navy">Campus Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aubrey-odom-UF0WqKWw-es-unsplash.jpg-ArZYCRRrXtOxTIYBGgNEIQtPT3VWdx.jpeg"
                alt="WGU Campus Building"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4 text-wgu-navy">Experience WGU</h3>
              <p className="text-black mb-4">
                Although WGU is primarily an online university, we have a rich campus life and community. Our
                state-of-the-art facilities and dedicated faculty provide an exceptional learning environment for our
                students.
              </p>
              <Button
                asChild
                className="bg-wgu-yellow hover:bg-wgu-navy text-black hover:text-wgu-yellow transition-colors w-fit"
              >
                <Link href="/campus-life">Learn More About Campus Life</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-wgu-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Take the first step towards your future with WGU.</p>
          <Button asChild className="bg-wgu-yellow text-black hover:bg-white hover:text-wgu-navy transition-colors">
            <Link href="/admissions">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
