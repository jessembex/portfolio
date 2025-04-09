"use client"
import Link from "next/link"
import { X } from "lucide-react"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col p-6">
      <div className="flex justify-end">
        <button onClick={onClose} className="text-white">
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-xl">
        <Link href="/" className="hover:text-gray-300 transition" onClick={onClose}>
          Home
        </Link>
        <Link href="/portfolio" className="hover:text-gray-300 transition" onClick={onClose}>
          Portfolio
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition" onClick={onClose}>
          About Me
        </Link>
        <Link href="/contact" className="hover:text-gray-300 transition" onClick={onClose}>
          Contact
        </Link>
      </nav>
    </div>
  )
}
