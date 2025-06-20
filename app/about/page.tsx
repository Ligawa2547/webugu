import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Award, Users, Globe, Clock, Lightbulb, Target, Heart } from "lucide-react"

export const metadata = {
  title: "About Western Governors University College (WGUC) | Our History & Mission",
  description:
    "Learn about Western Governors University College's history, mission, values, and innovative approach to online education. Discover why WGUC is the right choice for your educational journey.",
  keywords:
    "WGUC history, Western Governors University College mission, WGUC values, online university, affordable education, competency-based learning",
}

export default function About() {
  return (
    <div className="bg-gradient-to-b from-wguc-primary to-wguc-primary/90 text-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-wguc-secondary">
            About Western Governors University College
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Revolutionizing higher education through accessible, affordable, and career-focused online learning since
            1990.
          </p>
        </div>

        {/* Hero Section with Image */}
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-16">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vadim-sherbakov-d6ebY-faOO0-unsplash.jpg-E4P5BH14OYlsnqwik1vqy9dc48M1rO.jpeg"
            alt="WGUC Campus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-wguc-primary/60 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-wguc-secondary">Our Story</h2>
              <p className="text-base md:text-lg">
                Founded in 1990 by a coalition of UA Government, WGUC was established with a mission to provide flexible
                learning opportunities for adult learners, working professionals, and underserved communities. Today,
                we're proud to serve over 250,000 alumni worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-wguc-secondary hover:bg-white/20 transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                <Target className="h-10 w-10 text-wguc-secondary" />
              </div>
              <CardTitle className="text-xl text-wguc-secondary text-center">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                To expand access to quality higher education through online, competency-based degree programs that
                address key workforce needs and provide meaningful learning opportunities for a diverse, global
                population.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-wguc-secondary hover:bg-white/20 transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-center mb-4">
                <Lightbulb className="h-10 w-10 text-wguc-secondary" />
              </div>
              <CardTitle className="text-xl text-wguc-secondary text-center">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                To be the most student-centric university in the world, recognized globally for our innovative approach
                to education, commitment to affordability, and dedication to student success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-wguc-secondary text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Student Obsession",
                description:
                  "We put students first in everything we do, designing our programs, policies, and services around their needs.",
                icon: <Users className="h-10 w-10 text-wguc-secondary" />,
              },
              {
                title: "Innovation",
                description:
                  "We continuously seek new and better ways to deliver education, embracing technology and creative solutions.",
                icon: <Lightbulb className="h-10 w-10 text-wguc-secondary" />,
              },
              {
                title: "Integrity",
                description:
                  "We uphold the highest ethical standards in our academic offerings, business practices, and interactions.",
                icon: <Heart className="h-10 w-10 text-wguc-secondary" />,
              },
              {
                title: "Global Perspective",
                description:
                  "We embrace diversity and prepare students to succeed in an interconnected global economy.",
                icon: <Globe className="h-10 w-10 text-wguc-secondary" />,
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-wguc-secondary hover:bg-white/20 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-xl text-wguc-secondary text-center">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Educational Model */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-wguc-secondary text-center">Our Educational Model</h2>
          <Card className="bg-white/10 backdrop-blur-sm border-wguc-secondary">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-wguc-secondary">Competency-Based Learning</h3>
                  <p className="mb-4">
                    WGUC's innovative competency-based learning model enables students to advance based on their mastery
                    of material rather than time spent in class. This personalized approach allows learners to:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Progress at their own pace</li>
                    <li>Apply existing knowledge and experience</li>
                    <li>Focus on learning what they need</li>
                    <li>Demonstrate mastery through practical assessments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-wguc-secondary">Student Support</h3>
                  <p className="mb-4">
                    Every WGUC student receives personalized support throughout their educational journey:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Dedicated Program Mentor for one-on-one guidance</li>
                    <li>Course Instructors with subject matter expertise</li>
                    <li>Student Success Center for academic assistance</li>
                    <li>Career Services for professional development</li>
                    <li>Technical Support available 24/7</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Facts */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-wguc-secondary text-center">WGUC at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                stat: "1990",
                label: "Founded",
                icon: <Clock className="h-8 w-8 text-wguc-secondary" />,
              },
              {
                stat: "250,000+",
                label: "Alumni Worldwide",
                icon: <Users className="h-8 w-8 text-wguc-secondary" />,
              },
              {
                stat: "100+",
                label: "Degree Programs",
                icon: <BookOpen className="h-8 w-8 text-wguc-secondary" />,
              },
              {
                stat: "30+",
                label: "Industry Certifications",
                icon: <Award className="h-8 w-8 text-wguc-secondary" />,
              },
            ].map((fact, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-wguc-secondary hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-2">{fact.icon}</div>
                  <p className="text-2xl md:text-3xl font-bold text-wguc-secondary">{fact.stat}</p>
                  <p className="text-sm md:text-base">{fact.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accreditation */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-wguc-secondary text-center">Accreditation</h2>
          <Card className="bg-white/10 backdrop-blur-sm border-wguc-secondary">
            <CardContent className="p-6">
              <p className="mb-4 text-center">
                Western Governors University College is accredited by the Higher Learning Commission (HLC), a regional
                accreditation agency recognized by the U.S. Department of Education. This accreditation ensures that
                WGUC meets rigorous academic standards and that our degrees are recognized by employers and other
                educational institutions worldwide.
              </p>
              <div className="flex justify-center mt-6">
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Accreditation Seal"
                  width={200}
                  height={100}
                  className="opacity-80"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-wguc-secondary text-center">University Leadership</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Sarah Johnson",
                title: "President",
                bio: "Dr. Johnson brings over 20 years of experience in higher education leadership and a passion for expanding educational access.",
              },
              {
                name: "Dr. Michael Chen",
                title: "Provost & Academic Officer",
                bio: "Dr. Chen oversees all academic programs and ensures WGUC maintains the highest standards of educational quality.",
              },
              {
                name: "Dr. Amara Okafor",
                title: "Chief Innovation Officer",
                bio: "Dr. Okafor leads WGUC's efforts to develop cutting-edge educational technologies and learning methodologies.",
              },
            ].map((leader, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-wguc-secondary hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-wguc-secondary/20 flex items-center justify-center">
                      <Users className="h-10 w-10 text-wguc-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-wguc-secondary text-center mb-1">{leader.name}</h3>
                  <p className="text-wguc-secondary/80 text-center mb-3">{leader.title}</p>
                  <p className="text-center">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-wguc-secondary/20 rounded-xl p-8 md:p-12 text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-wguc-secondary">Ready to Join the WGUC Community?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards your future with WGUC. Explore our programs and discover how our innovative
            approach to education can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-wguc-secondary text-wguc-primary hover:bg-white hover:text-wguc-primary text-lg px-8 py-6"
              size="lg"
            >
              <Link href="/programs">Explore Programs</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-wguc-secondary text-wguc-secondary hover:bg-wguc-secondary hover:text-wguc-primary text-lg px-8 py-6"
              size="lg"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
