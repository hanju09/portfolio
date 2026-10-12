import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import FadeIn from "./components/FadeIn";
import ParticleBackground from "./components/ParticleBackground";
import ParticleSphere from "./components/ParticleSphere";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <ParticleSphere />

      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen text-white flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
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

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="mb-4 text-sm tracking-widest uppercase text-cyan-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Software Developer · Lahore, Pakistan
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              Hi, I&apos;m <span className="animated-gradient">Hamza</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
               I build reliable software with Python, Java, and SQL focused
              on databases, automation, and systems that just work..
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all hover:scale-105 text-center shadow-lg shadow-cyan-400/30"
              >
                View My Work
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-8 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all text-center"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative self-center">
              <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-[80px]" />
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-cyan-400/40">
                <Image
                  src="/profile.jpg"
                  alt="Hamza"
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
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
      </div>
    </>
  );
} 