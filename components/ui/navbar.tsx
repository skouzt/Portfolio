"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Import Menu and X icons
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" }, 
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Auto-detect active section based on scroll position
      const sections = links.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(links[i].name);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "top-4 sm:top-6" : "top-6 sm:top-8"
      )}
    >
      <div
        className={cn(
            "relative flex items-center px-4 py-2 rounded-full backdrop-blur-lg border transition-all duration-300 mx-auto",
            "w-[calc(100%-2rem)] sm:max-w-fit sm:justify-center", // full width on mobile, fit-content on desktop
            scrolled
            ? "bg-neutral-900/80 border-white/10 shadow-lg"
            : "bg-transparent border-transparent shadow-none"
        )}
        >


        {/* Mobile Menu Button (Hamburger) */}
        <div className="sm:hidden flex items-center justify-between w-full">
            <h1 className="text-xl font-bold text-white">R<span className='text-blue-500'>K</span></h1>
            <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                active === link.name
                  ? "bg-white/10 text-blue-500"
                  : "text-white hover:text-blue-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      
      {/* Mobile Collapsible Menu */}
      <div
        className={cn(
          "sm:hidden transition-all duration-300 ease-in-out overflow-hidden mt-2",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col items-center gap-4 py-4 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-md">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActive(link.name);
                setIsMobileMenuOpen(false); // Close menu on click
              }}
              className="text-white text-lg font-medium hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}