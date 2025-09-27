"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      // Auto-detect active section based on scroll position
      const sections = links.map(
        (link) => document.querySelector(link.href) as HTMLElement | null
      );
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
          "w-[calc(100%-2rem)] sm:max-w-fit sm:justify-center",
          scrolled
            ? "bg-neutral-900/80 border-white/10 shadow-lg"
            : "bg-transparent border-transparent shadow-none"
        )}
      >
        {/* Mobile Menu Button (Hamburger) */}
        <div className="sm:hidden flex items-center justify-between w-full">
          <Image
            src="/astronaut.png"
            alt="Portfolio Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none p-1"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu - UNCHANGED */}
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

      {/* Mobile Menu - Improved */}
      <div
        className={cn(
          "sm:hidden transition-all duration-300 ease-in-out overflow-hidden mx-4 mt-2",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-xl shadow-lg">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActive(link.name);
                setIsMobileMenuOpen(false);
              }}
              className={cn(
                "block px-6 py-4 text-lg font-medium transition-colors border-b border-white/5 last:border-b-0",
                active === link.name
                  ? "text-blue-500 bg-white/5"
                  : "text-white hover:text-blue-400 hover:bg-white/5"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
