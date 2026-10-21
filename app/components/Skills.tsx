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
      "Design",
      "Query Optimization",
      "Migrations",
      "Data Integrity",
      "Backup & Recovery",
    ],
  },
  {
    title: "Tools & Web",
    skills: ["Django", "HTML", "CSS", "Git", "GitHub", "Google Drive", "Windows"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 border-t border-gray-200 bg-gray-50/70 backdrop-blur-sm"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-indigo-600 font-semibold mb-3">
          Skills
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-gray-900">
          What I work with.
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-2">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-gray-700 bg-white border border-gray-200 shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-colors cursor-default"
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