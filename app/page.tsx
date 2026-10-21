import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ArchitectureSimulation from "./components/ArchitectureSimulation";
import ParticleBackground from "./components/ParticleBackground";

export default function Home() {
  return (
    <>
      {/* The live background network */}
      <ParticleBackground />

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-transparent flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        
        {/* Subtle blueprint grid in the background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="mb-4 text-sm tracking-widest uppercase text-indigo-600 font-semibold">
              Software Developer · Lahore, Pakistan
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
              Hi, I&apos;m <span className="animated-gradient">Hamza</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
              I build reliable software with Python, Java, and SQL — focused
              on databases, automation, and systems that just work.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all hover:scale-105 text-center shadow-lg shadow-indigo-600/20"
              >
                View My Work
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all text-center bg-white/50 backdrop-blur-sm"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all text-center bg-white/50 backdrop-blur-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Side: Photo & Architecture Simulation */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative self-center animate-float w-72 h-72 md:w-80 md:h-80">
              
              {/* Soft blue/indigo gradient glow behind photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-full blur-2xl animate-ring-glow" />

              {/* Architecture Simulation */}
              <div className="absolute -inset-12 md:-inset-20 pointer-events-none z-0 opacity-60">
                 <ArchitectureSimulation />
              </div>

              {/* Profile Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl z-10 bg-white">
                <Image
                  src="/profile.jpg"
                  alt="Hamza"
                  fill
                  sizes="(max-width: 768px) 288px, 320px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Sections (Now without FadeIn) */}
      <div className="relative z-10">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}