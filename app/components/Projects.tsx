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
        <p className="inline-block text-sm tracking-widest uppercase text-cyan-400 mb-3 px-3 py-1 rounded-lg bg-[#0d0620]/85 backdrop-blur-sm border border-white/10">
          Projects
        </p>
        <h2 className="w-fit text-4xl md:text-5xl font-bold tracking-tight mb-4 px-3 py-1 rounded-lg bg-[#0d0620]/75 backdrop-blur-sm">
          Things I&apos;ve built.
        </h2>
        <p className="w-fit text-gray-200 mb-12 px-3 py-1 rounded-lg bg-[#0d0620]/70">
          A mix of real-world work and hands-on database projects.
        </p>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {projects.map((project) => (
            <div key={project.title}>
              <p className="inline-block text-xs tracking-widest uppercase text-cyan-400 mb-3 px-2.5 py-1 rounded-md bg-[#0d0620]/90 border border-white/10">
                {project.tag}
              </p>

              <h3 className="w-fit text-xl font-semibold mb-3 px-2 py-0.5 rounded bg-[#0d0620]/80">
                {project.title}
              </h3>

              <p className="text-sm text-gray-200 leading-relaxed mb-4">
                <span className="inline px-2 py-0.5 rounded bg-[#0d0620]/70 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                  {project.description}
                </span>
              </p>

              <ul className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="px-2.5 py-0.5 rounded-full text-xs text-gray-100 border border-white/15 bg-[#0d0620]/85"
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
                  className="inline-block text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors px-2 py-0.5 rounded bg-[#0d0620]/75"
                >
                  View on GitHub →
                </a>
              ) : (
                <span className="inline-block text-sm font-medium text-gray-500 px-2 py-0.5 rounded bg-[#0d0620]/75">
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