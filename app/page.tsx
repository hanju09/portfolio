import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="mb-4 text-sm tracking-widest uppercase text-cyan-400">
              Software Developer · Lahore, Pakistan
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-cyan-400">Hamza</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl">
              I build reliable software — with a focus on databases, SQL, and
              automation that just works.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all hover:scale-105 text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-[80px]" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-cyan-400/40">
                <Image
                  src="/profile.jpg"
                  alt="Hamza"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn>
        <Skills />
      </FadeIn>

      <FadeIn>
        <Projects />
      </FadeIn>

      <FadeIn>
        <Experience />
      </FadeIn>

      <FadeIn>
        <Contact />
      </FadeIn>
    </>
  );
}