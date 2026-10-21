const projects = [
  {
    title: "Automated Database Backup System",
    tag: "Rxora Pharmacy",
    description:
      "Built for a live pharmacy to protect patient and inventory data. Backs up MariaDB/MySQL databases to Google Drive on a schedule, verifies each backup, retries on failure, logs everything, and sends a notification when something goes wrong. Runs unattended.",
    tech: ["Python", "MariaDB", "MySQL", "Google Drive API", "Windows"],
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
    title: "Periodic Table Database",
    tag: "PostgreSQL",
    description:
      "A relational database project and interactive Bash script for looking up chemical elements. Uses a SQL dump for data storage and fast querying to find elements by atomic number, symbol, or properties.",
    tech: ["PostgreSQL", "Bash", "SQL"],
    link: "https://github.com/hanju09/periodic_table",
  },
  {
    title: "Smart Calculator",
    tag: "Java",
    description:
      "A Java-based scientific calculator supporting over 15 mathematical functions. Features a clean user interface and robust logic for handling complex calculations and error states.",
    tech: ["Java", "OOP"],
    link: "https://github.com/hanju09/Smart-calculator",
  },
  {
    title: "Chatbot Application",
    tag: "Java",
    description:
      "A Java-based conversational agent that can chat, tell jokes, and answer predefined questions. Built to practice object-oriented programming and basic natural language processing logic.",
    tech: ["Java", "OOP"],
    link: "https://github.com/hanju09/Chatbot-Java",
  },
  {
    title: "Number Guessing Game",
    tag: "Bash & SQL",
    description:
      "A command-line number guessing game with database-backed score tracking. Built to practice Bash scripting, user input handling, and integrating shell scripts with a PostgreSQL database.",
    tech: ["Bash", "PostgreSQL", "SQL"],
    link: "https://github.com/hanju09/number_guessing_game",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 border-t border-gray-200 bg-white/70 backdrop-blur-sm"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-indigo-600 font-semibold mb-3">
          Projects
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
          Things I&apos;ve built.
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl text-lg">
          A mix of real-world work and hands-on database projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
            >
              <p className="inline-block self-start text-xs tracking-widest uppercase text-indigo-600 font-semibold mb-4 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100">
                {project.tag}
              </p>

              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="px-3 py-1 rounded-md text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200"
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
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1"
                >
                  View on GitHub <span aria-hidden="true">&rarr;</span>
                </a>
              ) : (
                <span className="text-sm font-medium text-gray-400">
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