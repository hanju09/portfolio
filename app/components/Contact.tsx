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
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm tracking-widest uppercase text-cyan-400 mb-3">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Let&apos;s build something.
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Whether it&apos;s a project, a role, or just a conversation about
          databases and clean code — I&apos;m open to it.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
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
              className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/40 transition-colors text-left"
            >
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">
                {link.label}
              </p>
              <p className="text-sm text-white break-all">{link.value}</p>
            </a>
          ))}
        </div>

        <a
          href="mailto:alihamza6800088@gmail.com"
          className="inline-block px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all hover:scale-105"
        >
          Say Hello
        </a>

        <p className="mt-16 text-xs text-gray-600">
          © 2026 Hamza. Built from scratch with Next.js
          &amp; Tailwind.
        </p>
      </div>
    </section>
  );
}