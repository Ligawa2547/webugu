import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-wgu-navy">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-wgu-navy">Get in Touch</h2>
          <p className="text-lg mb-6">
            For any questions or further details about tuition and fees, or any other inquiries, please don't hesitate
            to contact us:
          </p>
          <ul className="space-y-4 text-lg">
            <li>
              <strong>Phone:</strong> 1-774-480-1426
            </li>
            <li>
              <strong>Email:</strong> info@wgu.college
            </li>
            <li>
              <strong>Live Chat:</strong> Available on our website
            </li>
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-wgu-navy">Office Hours</h3>
            <p className="text-lg">Monday - Friday: 9:00 AM - 5:00 PM (EST)</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-wgu-navy">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <Input type="text" id="subject" name="subject" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <Button
              type="submit"
              className="bg-wgu-yellow hover:bg-wgu-navy text-black hover:text-wgu-yellow transition-colors"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
