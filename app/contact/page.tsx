import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="flex justify-between items-center p-6">
        <div className="text-lg font-medium">Jesse Mbekeani</div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          
          <Link href="/about" className="hover:text-gray-300 transition">
            About Me
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Get In Touch</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border-white/20 focus:border-white"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-white/20 focus:border-white"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="bg-transparent border-white/20 focus:border-white"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="bg-transparent border-white/20 focus:border-white min-h-[150px]"
                />
              </div>
              <Button className="bg-white text-black hover:bg-gray-200 px-8">Send Message</Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out to me with any questions or opportunities. I'm always open to discussing new
                projects and ideas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5" />
                <span>jessembekeani18@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5" />
                <span>+265 994 14 3967</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5" />
                <span>Ndirande, Blantyre , Malawi</span>
              </div>
            </div>

            
          </div>
        </div>
      </main>
    </div>
  )
}
