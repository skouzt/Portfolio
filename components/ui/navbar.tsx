"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

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
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

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

    // Set initial state
    handleScroll();

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        scrolled ? "top-4" : "top-6"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-4 px-6 py-2 rounded-full backdrop-blur-lg border transition-all duration-300",
          scrolled
            ? "bg-neutral-900/80 border-white/10 shadow-lg"
            : "bg-transparent border-transparent shadow-none"
        )}
      >
        <div className="flex gap-6">
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
    </nav>
  );
}