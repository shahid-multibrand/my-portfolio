"use client";

const projects = [
  { name: "Attnd - Attendance Tracker", type: "Web & Mobile App" },
  { name: "RK Finance", type: "Web App" },
  { name: "InzaloEms", type: "Web App" },
  { name: "ProVisit", type: "Mobile App" },
  { name: "Driving App", type: "Web App" },
  { name: "Mbw-ERP", type: "Web App" },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto py-24 px-6">
      <h3 className="text-4xl font-bold text-primary mb-16 text-center">
        Projects
      </h3>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="relative bg-gray-900 p-8 rounded-3xl shadow-[0_0_30px_rgba(37,99,235,0.5)] 
                       hover:shadow-[0_0_50px_rgba(245,158,11,0.8)] 
                       hover:scale-105 transition-all duration-300"
          >
            <h4 className="text-xl font-bold mb-2 text-transparent bg-clip-text 
                           bg-gradient-to-r from-primary via-accent to-white animate-text-glow">
              {p.name}
            </h4>
            <p className="text-gray-200">{p.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
