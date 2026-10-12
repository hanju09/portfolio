export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <p className="inline-block text-sm tracking-widest uppercase text-cyan-400 mb-3 px-3 py-1 rounded-lg bg-[#0d0620]/85 backdrop-blur-sm border border-white/10">
          About
        </p>
        <h2 className="w-fit text-4xl md:text-5xl font-bold tracking-tight mb-8 px-3 py-1 rounded-lg bg-[#0d0620]/75 backdrop-blur-sm">
          A developer who cares about the details.
        </h2>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 text-gray-200 leading-relaxed text-[15px]">
          <div className="space-y-4">
            <p>
              <span className="inline px-2 py-0.5 rounded bg-[#0d0620]/70 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                I&apos;m a Full-Stack Developer focused on building products
                that feel fast, look sharp, and solve real problems. From
                frontend interactions to backend architecture, I enjoy owning
                the full stack.
              </span>
            </p>
            <p>
              <span className="inline px-2 py-0.5 rounded bg-[#0d0620]/70 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                My toolkit centers around the modern JavaScript ecosystem —
                React, Next.js, Node.js, and TypeScript — paired with a strong
                eye for design and user experience.
              </span>
            </p>
          </div>

          <div className="space-y-4">
            <p>
              <span className="inline px-2 py-0.5 rounded bg-[#0d0620]/70 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                I believe great software is more than working code. It&apos;s
                about clarity, performance, and the small details that make an
                experience memorable.
              </span>
            </p>
            <p>
              <span className="inline px-2 py-0.5 rounded bg-[#0d0620]/70 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                When I&apos;m not building, I&apos;m exploring new tools,
                refining my craft, and looking for the next problem worth
                solving.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}