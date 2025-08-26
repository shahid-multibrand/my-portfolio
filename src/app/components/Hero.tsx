"use client";
import { ArrowRight } from "lucide-react";
import Bird from "../svg/Birds";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-secondary via-black to-secondary">

      {/* Background orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 -right-20 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-pulse duration-1000" />
      <div className="absolute bottom-20 -left-20 w-96 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse duration-1000" />

      {/* Hero content */}
      <h2 className="relative text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
        Hi, I’m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-text">
          Md. Shahidul Islam
        </span>
      </h2>

      <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
        Fullstack Developer specialized in{" "}
        <span className="text-primary font-semibold">React.js</span>,{" "}
        <span className="text-primary font-semibold">Next.js</span>,{" "}
        <span className="text-primary font-semibold">Angular</span>,{" "}
        <span className="text-primary font-semibold">React Native</span> &{" "}
        <span className="text-primary font-semibold">.NET Core</span>.
      </p>

      {/* CTA */}
      <a
        href="#contact"
        className="group mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold shadow-lg hover:scale-105 hover:shadow-primary/40 transition-all"
      >
        Hire Me
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>

     
    </section>
  );
}
