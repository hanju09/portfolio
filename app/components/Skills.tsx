const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "SQL", "Bash", "JavaScript"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MariaDB", "Oracle", "PostgreSQL", "Django ORM"],
  },
  {
    title: "Database Admin",
    skills: [
      "Schema Design",
      "Query Optimization",
      "Migrations",
      "Backup & Recovery",
      "Data Integrity",
    ],
  },
  {
    title: "Tools & Web",
    skills: ["Git", "GitHub", "Django", "HTML", "CSS", "Linux", "Windows"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-cyan-400 mb-3">
          Skills
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
          What I work with.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/40 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 text-white">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm text-gray-300 border border-white/10 bg-white/[0.03]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}