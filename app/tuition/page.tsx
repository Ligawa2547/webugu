import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Tuition() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-wgu-navy">
        Western Governors University (WGU) Tuition and Fees
      </h1>

      <p className="text-lg mb-8">
        At Western Governors University, we are committed to making higher education affordable, accessible, and
        transparent. Our unique tuition model is designed to empower students to achieve their academic goals without
        financial strain. Below, you will find a detailed breakdown of our tuition, fees, and financial aid options to
        help you plan your educational journey.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-wgu-navy">1. Tuition Overview</h2>
        <p className="text-lg mb-4">
          WGU offers a flat-rate tuition model, allowing students to take as many courses as they can complete per term
          for a single set price. This innovative approach makes education more affordable and rewards students who
          progress quickly through their programs.
        </p>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>
            <strong>Undergraduate Tuition:</strong> Starting at $3,575 per 6-month term.
          </li>
          <li>
            <strong>Graduate Tuition:</strong> Starting at $4,240 per 6-month term.
          </li>
          <li>
            <strong>Certificate Program Tuition:</strong> Varies by program; contact us for details.
          </li>
        </ul>
        <p className="text-lg italic">
          Note: Tuition rates vary slightly by program. See program-specific costs below.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-wgu-navy">2. Program-Specific Tuition</h2>
        {[
          {
            name: "College of Business",
            undergraduate: [
              "Bachelor of Science in Business Administration",
              "Bachelor of Science in Accounting",
              "Bachelor of Science in Marketing",
            ],
            graduate: [
              "Master of Business Administration (MBA)",
              "Master of Science in Management and Leadership",
              "Master of Science in Accounting",
            ],
          },
          {
            name: "College of Information Technology",
            undergraduate: [
              "Bachelor of Science in Cybersecurity and Information Assurance",
              "Bachelor of Science in Software Development",
              "Bachelor of Science in Cloud Computing",
            ],
            graduate: [
              "Master of Science in Cybersecurity and Information Assurance",
              "Master of Science in Data Analytics",
              "Master of Science in Information Technology Management",
            ],
          },
          {
            name: "College of Health Professions",
            undergraduate: [
              "Bachelor of Science in Nursing (RN to BSN)",
              "Bachelor of Science in Health Services Coordination",
            ],
            graduate: [
              "Master of Science in Nursing (Leadership and Management)",
              "Master of Science in Nursing (Education)",
              "Master of Health Leadership",
            ],
          },
          {
            name: "Teachers College",
            undergraduate: [
              "Bachelor of Arts in Interdisciplinary Studies (K-8)",
              "Bachelor of Science in Special Education (K-12)",
            ],
            graduate: [
              "Master of Arts in Teaching (Elementary Education)",
              "Master of Science in Educational Leadership",
              "Master of Education in Instructional Design",
            ],
          },
        ].map((college, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-wgu-navy">{college.name}</h3>
            <div className="ml-4">
              <h4 className="text-xl font-semibold mb-2">Undergraduate Programs: $3,575 per term</h4>
              <ul className="list-disc list-inside mb-4">
                {college.undergraduate.map((program, i) => (
                  <li key={i}>{program}</li>
                ))}
              </ul>
              <h4 className="text-xl font-semibold mb-2">Graduate Programs: $4,240 per term</h4>
              <ul className="list-disc list-inside mb-4">
                {college.graduate.map((program, i) => (
                  <li key={i}>{program}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-wgu-navy">3. Fees and Other Costs</h2>
        <p className="text-lg mb-4">
          To ensure complete transparency, here are additional costs associated with your WGU education:
        </p>
        <ul className="list-disc list-inside text-lg mb-4 space-y-2">
          <li>
            <strong>Application Fee:</strong> $65 (one-time, non-refundable).
          </li>
          <li>
            <strong>Resource Fee:</strong> $145 per term (covers e-books, course materials, and online resources).
          </li>
          <li>
            <strong>Graduation Fee:</strong> $150 (assessed at the time of program completion).
          </li>
          <li>
            <strong>Program-Specific Fees:</strong>
            <ul className="list-disc list-inside ml-8 mt-2">
              <li>Nursing Clinical Fee: $350 per term (for programs requiring clinical hours).</li>
              <li>IT Certification Exam Fees: Included in tuition for most IT programs.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-wgu-navy">4. Scholarships and Financial Aid</h2>
        <p className="text-lg mb-4">
          We believe that cost should never be a barrier to education. WGU offers a variety of financial aid options to
          make earning your degree even more affordable.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Scholarships</h3>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>WGU Excellence Scholarship: Up to $2,500.</li>
          <li>WGU Resiliency Grant: Up to $4,000.</li>
          <li>Program-Specific Scholarships: Vary by field of study.</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Federal Financial Aid</h3>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>Pell Grants</li>
          <li>Stafford Loans</li>
          <li>Work-Study Opportunities</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Employer Tuition Reimbursement</h3>
        <p className="text-lg mb-4">
          Many WGU students receive tuition reimbursement through their employers. Check with your employer to see if
          this benefit is available to you.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Military and Veteran Benefits</h3>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>GI Bill acceptance.</li>
          <li>Active-duty and veteran-specific scholarships.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-wgu-navy">5. Payment Options</h2>
        <p className="text-lg mb-4">We offer flexible payment options to suit your needs:</p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            <strong>Pay Per Term:</strong> Full payment at the start of each 6-month term.
          </li>
          <li>
            <strong>Monthly Payment Plans:</strong> Spread the cost of tuition across manageable monthly installments.
          </li>
          <li>
            <strong>Deferred Payment:</strong> Available for students using employer tuition reimbursement programs.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-wgu-navy">6. Cost-Saving Opportunities</h2>
        <p className="text-lg mb-4">
          WGU's competency-based education model allows you to save time and money by progressing at your own pace.
          Here's how:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            <strong>Accelerated Learning:</strong> Complete more courses in a single term to lower your total cost.
          </li>
          <li>
            <strong>Transfer Credits:</strong> Reduce tuition by transferring credits from prior coursework.
          </li>
          <li>
            <strong>Certifications Included:</strong> Industry-recognized certifications are included in tuition for IT
            and nursing programs.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-wgu-navy">7. Refund Policy</h2>
        <p className="text-lg mb-4">
          If you need to withdraw, WGU offers a fair refund policy based on the timing of your withdrawal:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>Withdraw within the first 15 days of a term: 100% refund.</li>
          <li>Withdraw after 15 days: Refunds are prorated based on term progression.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-wgu-navy">8. Example Cost Breakdown</h2>
        <p className="text-lg mb-4">Here's an example of the total cost for a 4-year bachelor's degree:</p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>Tuition: $3,575 x 8 terms = $28,600</li>
          <li>Resource Fees: $145 x 8 terms = $1,160</li>
          <li>
            <strong>Total Estimated Cost: ~$29,760</strong>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-wgu-navy">9. FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">What is flat-rate tuition?</h3>
            <p className="text-lg">
              Flat-rate tuition allows students to complete as many courses as they can within a 6-month term for a
              single fee.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Are textbooks included in tuition?</h3>
            <p className="text-lg">Yes, most course materials and e-books are included in the $145 resource fee.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Can I transfer credits to WGU?</h3>
            <p className="text-lg">
              Yes, WGU accepts transfer credits from accredited institutions, subject to evaluation.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center mt-12">
        <p className="text-xl mb-4">
          Empowering your education journey starts with affordable tuition. Explore our programs and take the first step
          toward your future today!
        </p>
        <Button asChild className="bg-wgu-yellow hover:bg-wgu-navy text-black hover:text-wgu-yellow transition-colors">
          <Link href="/apply">Apply Now</Link>
        </Button>
      </div>
    </div>
  )
}
