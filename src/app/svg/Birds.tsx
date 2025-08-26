"use client";

interface BirdProps {
  className?: string;
}

export default function Bird({ className }: BirdProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={className}
      fill="currentColor"
    >
      {/* Body */}
      <path
        d="M32 12c-4 0-8 4-8 8s4 8 8 8 8-4 8-8-4-8-8-8z"
      />
      {/* Left Wing */}
      <path
        className="wing-left"
        d="M24 16c-4 4-8 12-4 12s6-4 8-8-2-8-4-4z"
      />
      {/* Right Wing */}
      <path
        className="wing-right"
        d="M40 16c4 4 8 12 4 12s-6-4-8-8 2-8 4-4z"
      />
    </svg>
  );
}
