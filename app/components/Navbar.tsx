"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-indigo-400/30 bg-[#0d1117]/80 backdrop-blur-md shadow-sm`}
    >
      <div className="w-full flex items-center justify-between py-4 px-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/icons/logo.png"
            alt="logo"
            className="h-10 w-10 rounded-full object-cover"
          />
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-zinc-400 text-base font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors hover:text-blue-400`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tombol menu mobile */}
        <button className="md:hidden text-gray-300 hover:text-blue-400">
          ☰
        </button>
      </div>
    </nav>
  );
}
