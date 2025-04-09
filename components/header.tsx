"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { MobileNav } from "./mobile-nav"

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
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
        <button className="md:hidden" onClick={() => setMobileNavOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </header>
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  )
}
