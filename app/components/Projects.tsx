const projects = [
  {
    title: "Automated Database Backup System",
    tag: "Roxra Pharmacy",
    description:
      "Built for a live pharmacy to protect patient and inventory data. Backs up MariaDB/MySQL databases to Google Drive on a schedule, verifies each backup, retries on failure, logs everything, and sends a notification when something goes wrong. Runs unattended.",
    tech: ["Python", "MariaDB", "MySQL", "Google Drive API", "Windows Task Scheduler"],
    link: null,
  },
  {
    title: "World Cup Database",
    tag: "PostgreSQL",
    description:
      "A relational database of 24 teams and 32 games with 12 analytical queries. Bash script inserts the data and looks up team IDs dynamically instead of hardcoding them, so the schema stays clean and reusable.",
    tech: ["PostgreSQL", "Bash", "SQL"],
    link: "https://github.com/hanju09/worldcup",
  },
  {
    title: "Salon Appointment Scheduler",
    tag: "PostgreSQL",
    description:
      "Interactive command-line scheduler backed by a 3-table schema — customers, services, and appointments — linked with foreign keys. Lets you book, look up, and cancel appointments while keeping referential integrity intact.",
    tech: ["PostgreSQL", "Bash", "SQL"],
    link: "https://github.com/hanju09/salon",
  },
  {
    title: "Personal Expense Tracker",
    tag: "Python",
    description:
      "A Python application to log expenses, categorize spending, and track totals over time. Built to practice clean data handling and persistence outside of a framework.",
    tech: ["Python"],
    link: "https://github.com/hanju09/personal-expense-tracker",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-cyan-400 mb-3">
          Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Things I&apos;ve built.
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          A mix of real-world work and hands-on database projects.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/40 transition-colors"
            >
              <p className="text-xs tracking-widest uppercase text-cyan-400 mb-2">
                {project.tag}
              </p>

              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="px-2.5 py-0.5 rounded-full text-xs text-gray-300 border border-white/10 bg-white/[0.03]"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View on GitHub →
                </a>
              ) : (
                <span className="text-sm font-medium text-gray-500">
                  Internal project
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
