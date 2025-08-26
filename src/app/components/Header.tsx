"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      sections.forEach((sec, idx) => {
        if (sec) {
          const top = sec.getBoundingClientRect().top;
          if (top <= 100 && top >= -sec.clientHeight + 100) {
            setActiveLink(navLinks[idx].href);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-primary/90 shadow-lg z-[9999] transition-all">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-white tracking-wide animate-text-glow">
          Md Shahidul Islam
        </h1>
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-semibold text-white hover:text-accent transition-all duration-300 ${
                activeLink === link.href ? "text-accent" : ""
              }`}
            >
              {link.name}
              {activeLink === link.href && (
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent rounded-full animate-pulse"></span>
              )}
            </Link>
          ))}
        </div>
      </nav>

      
    </header>
  );
}
