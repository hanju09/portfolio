const links = [
  {
    label: "Email",
    value: "alihamza6800088@gmail.com",
    href: "mailto:alihamza6800088@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "in/ali-hamza-90859826a",
    href: "https://www.linkedin.com/in/ali-hamza-90859826a",
  },
  {
    label: "GitHub",
    value: "github.com/hanju09",
    href: "https://github.com/hanju09",
  },
  {
    label: "Phone",
    value: "+92 311 677 4300",
    href: "tel:+923116774300",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 border-t border-gray-200 bg-white/70 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <p className="text-sm tracking-widest uppercase text-indigo-600 font-semibold mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
          Let&apos;s build something.
        </h2>
        <p className="max-w-xl text-gray-600 mb-12 text-lg">
          Whether it&apos;s a project, a role, or just a conversation about
          databases and clean code — I&apos;m open to it.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2 group-hover:text-indigo-600 transition-colors">
                {link.label}
              </p>
              <p className="text-sm font-medium text-gray-900 break-all group-hover:text-indigo-600 transition-colors">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        <a
          href="mailto:alihamza6800088@gmail.com"
          className="inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-600/20"
        >
          Say Hello
        </a>

        <p className="mt-20 text-sm text-gray-400">
          © 2026 Hamza. Built with Next.js &amp; Tailwind.
        </p>
      </div>
    </section>
  );
}