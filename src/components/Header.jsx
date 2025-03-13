"use client"; // Required if using Next.js App Router (app/ directory)
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons from react-icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent backdrop-blur-sm py-3 w-full shadow-sm border-b border-gray-300 px-3 fixed z-50">
      <nav className="w-full max-w-7xl mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div>
          <Link href="/" className="text-[25px] text-neutral-800 font-semibold">
            Shan Ali
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="md:hidden text-2xl text-blue-500"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu /> {/* ☰ Open Menu */}
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex gap-8 list-none ">
          <li>
            <Link className=" text-blue-500 " href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="/project">
              Projects
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" href="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Sidebar Menu */}
        {isOpen && (
          <div className="fixed inset-0 flex h-screen justify-end  bg-black/50 z-50 ">
            {/* Sidebar */}
            <div className="bg-white z-50 w-72 sm:w-96 h-full p-6 shadow-lg transform transition-transform duration-300 translate-x-0">
            
              <button
                className="text-2xl text-gray-700 absolute top-4 right-4"
                onClick={() => setIsOpen(false)}
              >
                <FiX />
              </button>

           
              <ul className="mt-10 space-y-6">
                <li>
                  <Link
                    className="hover:text-blue-500 text-black  font-semibold text-lg block"
                    href="/"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-blue-500 text-black font-semibold text-lg block"
                    href="/about"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-blue-500 text-black font-semibold text-lg block"
                    href="/project"
                    onClick={() => setIsOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-blue-500 text-black font-semibold text-lg block"
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
