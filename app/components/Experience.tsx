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
        <p className="text-sm tracking-widest uppercase text-cyan-400 mb-3">
          Experience
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
          Where I&apos;ve worked.
        </h2>

        <div className="relative pl-8 border-l border-white/10 space-y-10 mb-20">
          {experience.map((job) => (
            <div key={job.role + job.company} className="relative">
              <span className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-cyan-400" />

              <p className="text-xs tracking-widest uppercase text-gray-500 mb-1">
                {job.period}
              </p>
              <h3 className="text-lg font-semibold text-white">
                {job.role}
              </h3>
              <p className="text-sm text-cyan-400 mb-3">{job.company}</p>

              <ul className="space-y-1.5 text-sm text-gray-400 leading-relaxed">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-cyan-400/60 mt-0.5">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-sm tracking-widest uppercase text-cyan-400 mb-3">
          Education
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Background.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div
              key={item.degree}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-1">
                {item.period}
              </p>
              <h3 className="text-lg font-semibold text-white">
                {item.degree}
              </h3>
              <p className="text-sm text-cyan-400 mb-3">{item.school}</p>
              <p className="text-sm text-gray-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}