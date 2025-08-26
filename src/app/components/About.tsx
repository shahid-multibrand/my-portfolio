"use client";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto py-24 px-6 mt-12 
                 bg-gradient-to-br from-dark via-secondary to-gray-900 
                 rounded-3xl shadow-[0_0_40px_rgba(37,99,235,0.5)] 
                 hover:shadow-[0_0_60px_rgba(245,158,11,0.8)] transition-shadow duration-500"
    >
      <h3 className="text-4xl font-bold text-primary mb-10 text-center animate-text-glow">
        About Me
      </h3>

      <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center">
        I am a passionate{" "}
        <span className="text-accent font-semibold animate-text-glow">Full Stack Developer</span>{" "}
        with 4+ years of experience specializing in{" "}
        <span className="text-primary font-semibold animate-text-glow">React.js</span>,{" "}
        <span className="text-primary font-semibold animate-text-glow">Angular</span>,{" "}
        <span className="text-primary font-semibold animate-text-glow">React Native</span>, and{" "}
        <span className="text-primary font-semibold animate-text-glow">.NET Core</span>.  
        I build responsive, performant web & mobile applications focusing on{" "}
        <span className="text-accent font-semibold animate-text-glow">clean code</span>, scalable architecture, and optimized user experience.
      </p>
    </section>
  );
}
