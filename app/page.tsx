import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
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
      <main className="grid md:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left Side - Image */}
        <div className="bg-gray-100 relative min-h-[50vh] md:min-h-full">
          <Image
            src="/jesse.jpg?height=800&width=600"
            alt="Portfolio Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center p-8 md:p-16">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">My Portfolio</h1>
            <div className="w-24 h-1 bg-white mb-8"></div>
            <p className="text-gray-300 mb-12">
              I'm a passionate professional dedicated to creating exceptional work. With expertise in my field, I bring
              creativity and precision to every project. Explore my portfolio to see my latest work and achievements.
            </p>

          </div>
         
        </div>
      </main>
    </div>
  )
}
