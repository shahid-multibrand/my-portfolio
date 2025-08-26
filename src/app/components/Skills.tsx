const skills = [
  "React.js", "Next.js", "Angular", "React Native",
  "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap",
  "C#", ".NET Core", "Entity Framework", "SQL Server",
  "Azure", "GitHub", "GitLab", "CI/CD"
];

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto py-24 px-6">
      <h3 className="text-4xl font-bold text-primary mb-12 text-center">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-dark to-secondary text-white py-3 px-5 rounded-3xl shadow-lg hover:from-primary hover:to-accent hover:scale-105 transition-all text-center font-medium"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
