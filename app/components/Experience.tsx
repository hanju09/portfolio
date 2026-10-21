const experience = [
  {
    role: "ServiceNow Developer",
    company: "Rizviz International Impex",
    period: "Apr 2026 — Jun 2026",
    points: [
      "Managed MySQL databases, ensuring data integrity across production records.",
      "Wrote optimized SQL and Oracle queries for reporting and analytics.",
      "Performed schema updates and managed migrations using Django ORM.",
      "Conducted database testing, validation, and performance monitoring.",
    ],
  },
  {
    role: "Software Developer",
    company: "Asapp Studio",
    period: "Aug 2025 — Mar 2026",
    points: [
      "Developed web applications using Python, Django, and MySQL.",
      "Wrote efficient SQL queries for data retrieval and reporting.",
      "Built backend features, managed database migrations with Django ORM, and worked in a SCRUM team using Git.",
    ],
  },
  {
    role: "Automated Database Backup System",
    company: "Rxora Pharmacy",
    period: "Project",
    points: [
      "Built a Python system that automatically backs up MariaDB/MySQL databases to Google Drive.",
      "Implemented scheduling, backup verification, retry handling, and detailed logging.",
      "Added success/failure notifications so the system runs unattended without surprises.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Institute of Management Sciences",
    period: "2021 — 2025",
    detail: "CGPA: 3.16 / 4.0",
  },
  {
    degree: "Relational Databases Certification",
    school: "freeCodeCamp",
    period: "Certified",
    detail:
      "Completed 5 hands-on projects covering database concepts, design, SQL, and practical data handling.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 border-t border-gray-200 bg-gray-50/70 backdrop-blur-sm"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-indigo-600 font-semibold mb-3">
          Experience
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-gray-900">
          Where I&apos;ve worked.
        </h2>

        <div className="relative pl-8 border-l-2 border-indigo-100 space-y-12 mb-20">
          {experience.map((job) => (
            <div key={job.role + job.company} className="relative">
              <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white" />

              <p className="text-sm font-semibold text-gray-500 mb-1 tracking-wide uppercase">
                {job.period}
              </p>
              <h3 className="text-xl font-bold text-gray-900">
                {job.role}
              </h3>
              <p className="text-indigo-600 font-medium mb-4">
                {job.company}
              </p>

              <ul className="space-y-2 text-gray-600 leading-relaxed">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <span className="text-indigo-400 mt-1.5 text-xs">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-sm tracking-widest uppercase text-indigo-600 font-semibold mb-3">
          Education
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-gray-900">
          Background.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item) => (
            <div
              key={item.degree}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"
            >
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {item.period}
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {item.degree}
              </h3>
              <p className="text-sm font-medium text-indigo-600 mb-3">
                {item.school}
              </p>
              <p className="text-sm text-gray-600">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}