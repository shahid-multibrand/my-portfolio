export default function Experience() {
  return (
    <section id="experience" className="container mx-auto py-24 px-6">
      <h3 className="text-4xl font-bold text-primary mb-16 text-center">Experience</h3>

      <div className="space-y-12">
        {/* Experience Card */}
        <div className="relative bg-secondary p-8 md:p-10 rounded-3xl shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:scale-105 transition-all duration-300 border border-gray-700">
          {/* Accent bar */}
          <span className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-primary to-accent rounded-l-3xl"></span>
          
          <h4 className="text-2xl font-bold text-white mb-2">Software Engineer - TrillionBits Ltd.</h4>
          <p className="text-gray-300 text-sm mb-4">2021 – Present</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-200 text-lg">
            <li>Developed 10+ React.js & React Native apps with complex state management.</li>
            <li>Built REST APIs with .NET Core & EF Core.</li>
            <li>Deployed full-stack apps to Azure ensuring performance & scalability.</li>
          </ul>
        </div>

        <div className="relative bg-secondary p-8 md:p-10 rounded-3xl shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:scale-105 transition-all duration-300 border border-gray-700">
          {/* Accent bar */}
          <span className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-primary to-accent rounded-l-3xl"></span>

          <h4 className="text-2xl font-bold text-white mb-2">Software Support Engineer - Mir Technologies</h4>
          <p className="text-gray-300 text-sm mb-4">2015 – 2017</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-200 text-lg">
            <li>Provided application support & requirement gathering.</li>
            <li>Built client-demand reports & handled Play Store releases.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
