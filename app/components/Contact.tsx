const links = [
  {
    label: "Email",
    value: "alihamza6800088@gmail.com",
    href: "mailto:alihamza6800088@gmail.com",
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
      className="relative py-24 px-6 border-t border-white/10"
    >
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <p className="inline-block text-sm tracking-widest uppercase text-cyan-400 mb-3 px-3 py-1 rounded-lg bg-[#0d0620]/80 backdrop-blur-sm border border-white/10">
          Contact
        </p>
        <h2 className="w-fit text-4xl md:text-5xl font-bold tracking-tight mb-4 px-3 py-1 rounded-lg bg-[#0d0620]/75">
          Let&apos;s build something.
        </h2>
        <p className="w-fit max-w-xl text-gray-200 mb-12 px-3 py-1 rounded-lg bg-[#0d0620]/70">
          Whether it&apos;s a project, a role, or just a conversation about
          databases and clean code — I&apos;m open to it.
        </p>

        <div className="grid sm:grid-cols-3 gap-x-8 gap-y-8 mb-12 w-full">
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
              className="group text-left"
            >
              <p className="inline-block text-xs tracking-widest uppercase text-cyan-400 mb-2 px-2.5 py-1 rounded-md bg-[#0d0620]/95 border border-cyan-400/30">
                {link.label}
              </p>
              <p className="w-fit text-sm text-white break-all px-2 py-1 rounded bg-[#0d0620]/85 group-hover:text-cyan-400 transition-colors">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        <a
          href="mailto:alihamza6800088@gmail.com"
          className="inline-block px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all hover:scale-105 shadow-lg shadow-cyan-400/30"
        >
          Say Hello
        </a>

        <p className="mt-16 w-fit text-xs text-gray-500 px-2 py-0.5 rounded bg-[#0d0620]/60">
          © 2026 Hamza. Built from scratch with Next.js &amp; Tailwind.
        </p>
      </div>
    </section>
  );
}