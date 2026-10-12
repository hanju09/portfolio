export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-cyan-400 mb-3">
          About
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          A developer who cares about the details.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-relaxed">
          <div className="space-y-5">
            <p>
              I&apos;m a Full-Stack Developer focused on building products that
              feel fast, look sharp, and solve real problems. From frontend
              interactions to backend architecture, I enjoy owning the full
              stack.
            </p>
            <p>
              My toolkit centers around the modern JavaScript ecosystem 
              React, Next.js, Node.js, and TypeScript paired with a strong
              eye for design and user experience.
            </p>
          </div>

          <div className="space-y-5">
            <p>
              I believe great software is more than working code. It&apos;s
              about clarity, performance, and the small details that make an
              experience memorable.
            </p>
            <p>
              When I&apos;m not building, I&apos;m exploring new tools,
              refining my craft, and looking for the next problem worth solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}