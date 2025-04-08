'use client'
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F7FCFC] flex justify-center items-center py-6 border-b-2 border-black relative">
      <div className="border-2 border-black flex items-center">
        {/* Left Logo Section */}
        <Link href="/" className="flex items-center px-6 py-3 border-r-2 border-black">
          <span className="text-xl">✦</span> {/* Icon */}
          <span className="ml-2 font-semibold">Turtle Creations</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <Link href="/about" className="px-6 py-3 border-r-2 border-black">About //</Link>
          <Link href="/events" className="px-6 py-3 border-r-2 bg-red-300 border-black"><span className="bg-red-300">Events</span></Link>
          <Link href="/find-me" className="px-6 py-3">Find me</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden px-4 py-3 text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 w-full flex flex-col items-center bg-white border  md:hidden">
          <Link href="/about" className="w-full text-center py-3 " onClick={() => setIsOpen(false)}>About //</Link>
          <Link href="/events" className="w-full text-center py-3 text-red-600" onClick={() => setIsOpen(false)}>Events</Link>
          <Link href="/find-me" className="w-full text-center py-3" onClick={() => setIsOpen(false)}>Find me</Link>
        </div>
      )}
    </nav>
  );
}
