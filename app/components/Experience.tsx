const experience = [
  {
    role: "Automated Database Backup System",
    company: "Roxra Pharmacy",
    period: "Project",
    points: [
      "Built a Python system that automatically backs up MariaDB/MySQL databases to Google Drive.",
      "Implemented scheduling, backup verification, retry handling, and detailed logging.",
      "Added success/failure notifications so the system runs unattended without surprises.",
    ],
  },
  {
    role: "ServiceNow Developer",
    company: "Rizviz International Impex",
    period: "Apr 2026 — Jun 2026",
    points: [
      "Managed MySQL databases, ensuring data integrity across production records.",
      "Wrote optimized SQL and Oracle queries for reporting and analytics.",
      "Performed schema updates and handled migrations using Django ORM.",
      "Conducted database testing, validation, and performance monitoring.",
    ],
  },
  {
    role: "Intern Web Developer",
    company: "RhomBix Technologies",
    period: "Oct 2024 — Dec 2024",
    points: [
      "Developed web applications using Python, Django, and MySQL.",
      "Wrote efficient SQL queries for data retrieval and reporting.",
      "Built backend features, managed database migrations, and worked in a SCRUM team using Git.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Institute of Management Sciences",
    period: "2021 — 2025",
    detail: "CGPA: 3.16",
  },
  {
    degree: "Relational Databases Certification",
    school: "freeCodeCamp",
    period: "Certified",
    detail:
      "Completed 5 hands-on projects covering database design, SQL, and data handling.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        <p className="inline-block text-sm tracking-widest uppercase text-cyan-400 mb-3 px-3 py-1 rounded-lg bg-[#0d0620]/80 backdrop-blur-sm border border-white/10">
          Experience
        </p>
        <h2 className="inline-block text-4xl md:text-5xl font-bold tracking-tight mb-12 px-3 py-1 rounded-lg bg-[#0d0620]/70 backdrop-blur-sm">
          Where I&apos;ve worked.
        </h2>

        <div className="relative pl-8 border-l border-cyan-400/30 space-y-10 mb-20">
          {experience.map((job) => (
            <div key={job.role + job.company} className="relative">
              <span className="absolute -left-[42px] top-3 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />

              <p className="inline-block text-xs tracking-widest uppercase text-gray-300 mb-2 px-2.5 py-1 rounded-md bg-[#0d0620]/85 border border-white/10">
                {job.period}
              </p>

              <h3 className="w-fit text-lg font-semibold text-white mb-1 px-2 py-0.5 rounded bg-[#0d0620]/75">
                {job.role}
              </h3>

              <p className="w-fit text-sm text-cyan-400 mb-3 px-2 py-0.5 rounded bg-[#0d0620]/75">
                {job.company}
              </p>

              <ul className="space-y-1.5 text-sm text-gray-200 leading-relaxed">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2 items-start">
                    <span className="text-cyan-400/60 mt-1">▸</span>
                    <span className="w-fit px-2 py-0.5 rounded bg-[#0d0620]/70">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="inline-block text-sm tracking-widest uppercase text-cyan-400 mb-3 px-3 py-1 rounded-lg bg-[#0d0620]/80 backdrop-blur-sm border border-white/10">
          Education
        </p>
        <h2 className="inline-block text-3xl md:text-4xl font-bold tracking-tight mb-8 px-3 py-1 rounded-lg bg-[#0d0620]/70 backdrop-blur-sm">
          Background.
        </h2>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {education.map((item) => (
            <div key={item.degree}>
              <p className="inline-block text-xs tracking-widest uppercase text-gray-300 mb-2 px-2.5 py-1 rounded-md bg-[#0d0620]/85 border border-white/10">
                {item.period}
              </p>
              <h3 className="w-fit text-lg font-semibold text-white mb-1 px-2 py-0.5 rounded bg-[#0d0620]/75">
                {item.degree}
              </h3>
              <p className="w-fit text-sm text-cyan-400 mb-2 px-2 py-0.5 rounded bg-[#0d0620]/75">
                {item.school}
              </p>
              <p className="w-fit text-sm text-gray-200 px-2 py-0.5 rounded bg-[#0d0620]/70">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}