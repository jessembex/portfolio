import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
        <h1 className="text-5xl md:text-6xl font-bold mb-8">About Me</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/jesse.jpg?height=600&width=600"
              alt="About Me"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-xl">Hello! I'm Jesse Mbekeani a student at  Malawi University of Science and Technology (MUST) pursuing Bachelor of Computer Systems and Security , a passionate professional with expertise in Computer Development .</p>
            <p>
              With few  years of experience, I've developed a  foundation in Computer Development Skills. My approach
              combines creativity with technical precision to deliver exceptional results.
            </p>
            <p>
              I believe in smart work and learning to improve my skills . Each project is an opportunity to create something
              meaningful and impactful.
            </p>
            <div className="pt-4">
              
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
