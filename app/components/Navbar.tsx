"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "backdrop-blur-xl bg-white/[0.06] border-b border-white/15 shadow-lg shadow-black/40"
          : "backdrop-blur-md bg-white/[0.03] border-b border-white/10"
      }`}
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-bold tracking-tight"
        >
          Hamza<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`relative cursor-pointer transition-colors ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-cyan-400 transition-all duration-300 ${
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6 text-gray-300">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`block py-2 cursor-pointer transition-colors ${
                    isActive ? "text-cyan-400" : "hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}