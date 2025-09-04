"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { Ubuntu, Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

export default function Header({ cart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest("#menu-btn") // menu button click ignore
      ) {
        setMobileMenuOpen(false);
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className="bg-gradient-to-br from-indigo-600 to-gray-500 shadow-md sticky top-0 z-50 text-white px-4 py-4">
      <div className="lg:px-24 mx-auto flex justify-between items-center font-[Poppins]">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative h-14 w-14 sm:h-14 sm:w-14 xs:h-7 xs:w-7">
            <Image
              src="/MegaHubRed.png"
              alt="My Logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Name hidden in mobile */}
          <h1
            className={`hidden sm:block font-[Ubuntu] text-2xl md:text-xl lg:text-3xl font-bold text-white`}
          >
            Mega<span className="text-red-600">Hub</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4 font-[Poppins]">
          <nav className="space-x-6 font-medium text-sm sm:text-base">
            <Link href="/" className="hover:text-gray-200 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-200 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-200 transition">
              Contact
            </Link>
          </nav>
          <div className="flex items-center border-2 border-white bg-transparent px-3 py-2 rounded-full w-[300px] lg:w-[400px]">
            <Search className="text-white mr-2" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none flex-1 text-white placeholder-white text-sm sm:text-base"
            />
          </div>

          <Link href="/profile">
            <FaUserCircle className="text-white w-8 sm:w-9 h-8 sm:h-9 lg:pr-0" />
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden">
          <button
            id="menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <CiMenuFries className="text-white font-bold w-10 h-10" />
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      <nav
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-54 bg-gradient-to-br from-indigo-600 to-gray-500 shadow-lg md:hidden flex flex-col space-y-4 px-6 py-3 font-[Poppins] z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="self-end text-white text-6xl mb-4"
          onClick={() => setMobileMenuOpen(false)}
        >
          &times;
        </button>

        {/* Menu Links */}
        <Link
          href="/"
          className="text-white text-lg font-medium hover:text-gray-200 transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white text-lg font-medium hover:text-gray-200 transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-white text-lg font-medium hover:text-gray-200 transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </Link>

        {/* Profile */}
        <div className="flex items-center mt-4">
          <Link href="/profile">
            <FaUserCircle className="w-9 h-9 text-white" />
          </Link>
          <span className="ml-2 text-white text-xl font-medium">Profile</span>
        </div>
      </nav>
    </header>
  );
}
