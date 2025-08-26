"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-[99%] z-[9999]">
      {/* Curved background (arc) */}
      <div className="relative">
        <svg
          className="absolute -top-6 left-0 w-full h-[90px] pointer-events-none"
          viewBox="0 0 1000 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Soft glow behind arc */}
          <defs>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="arcStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(37,99,235,0.6)" />
              <stop offset="100%" stopColor="rgba(245,158,11,0.6)" />
            </linearGradient>
          </defs>

          {/* Arc shape (middle higher) */}
          <path
            d="M0,60 Q500,0 1000,60 L1000,90 L0,90 Z"
            fill="rgba(10,10,10,0.92)"
            filter="url(#softGlow)"
          />
          <path
            d="M0,60 Q500,0 1000,60"
            fill="none"
            stroke="url(#arcStroke)"
            strokeWidth="2"
            opacity="0.9"
          />
        </svg>

        {/* Main bar */}
        <div className="bg-[#0a0a0a]/90 backdrop-blur-lg border border-primary/40 rounded-2xl shadow-[0_0_24px_rgba(0,200,255,0.32)]">
          <nav className="flex items-center justify-between px-6 py-4">
            {/* Logo / Name */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide drop-shadow-[0_0_10px_rgba(0,200,255,0.8)]">
              Md Shahidul Islam
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-200 hover:text-primary font-medium transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary rounded-full shadow-[0_0_10px_rgba(0,200,255,0.8)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-gray-200 hover:text-primary transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mx-3 mb-3 bg-[#0a0a0a]/95 backdrop-blur-xl border border-primary/30 px-6 py-6 shadow-[0_0_25px_rgba(0,200,255,0.25)] rounded-2xl animate-slideDown">
              <div className="flex flex-col gap-6 text-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-200 hover:text-primary font-semibold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
